export const config = {
  runtime: "edge",
};

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USER = "bharatdhuva";

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export default async function handler(req) {
  if (!GITHUB_TOKEN) {
    return new Response(
      JSON.stringify({
        error: "GITHUB_TOKEN environment variable is missing",
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "Bharat-Portfolio-Backend",
      },
      body: JSON.stringify({
        query,
        variables: { username: GITHUB_USER },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(
        JSON.stringify({
          error: `GitHub API responded with status ${response.status}`,
          details: errText,
        }),
        {
          status: response.status,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return new Response(
        JSON.stringify({
          error: "GitHub GraphQL API errors",
          details: data.errors,
        }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const calendar = data.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      return new Response(
        JSON.stringify({
          error: "Could not retrieve contribution calendar from GitHub API response",
        }),
        {
          status: 404,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const levelMap = {
      NONE: 0,
      FIRST_QUADRANT: 1,
      SECOND_QUADRANT: 2,
      THIRD_QUADRANT: 3,
      FOURTH_QUADRANT: 4,
    };

    const days = [];
    calendar.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        days.push({
          date: day.date,
          count: day.contributionCount,
          level: levelMap[day.contributionLevel] ?? 0,
        });
      });
    });

    return new Response(
      JSON.stringify({
        totalContributions: calendar.totalContributions,
        days,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
          "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch GitHub contributions data",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
