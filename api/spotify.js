export const config = {
  runtime: 'edge',
};

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
  });

  return response.json();
};

export default async function handler(req) {
  try {
    const { access_token } = await getAccessToken();

    // Try fetching currently playing song
    let response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204 || response.status > 400) {
      // Nothing is currently playing, fetch recently played
      response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      
      if (response.status === 204 || response.status > 400) {
          return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
            headers: { 'content-type': 'application/json' },
          });
      }
      
      const recent = await response.json();
      const track = recent.items[0].track;
      
      return new Response(JSON.stringify({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        albumImageUrl: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
      }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    }

    const song = await response.json();
    
    if (song.item === null) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return new Response(JSON.stringify({
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch Spotify data' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
