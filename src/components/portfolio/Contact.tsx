import { Mail, Linkedin, Github, ArrowUpRight, ArrowRight, Clock, Check } from "lucide-react";

const options = [
  {
    icon: Mail,
    title: "bharatdhuva27@gmail.com",
    subtitle: "Quick inquiries & questions",
    href: "mailto:bharatdhuva27@gmail.com",
  },
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    subtitle: "linkedin.com/in/bharatdhuva27",
    href: "https://linkedin.com/in/bharatdhuva27",
  },
  {
    icon: Github,
    title: "Follow on GitHub",
    subtitle: "github.com/bharatdhuva",
    href: "https://github.com/bharatdhuva",
  },
];

export function Contact() {
  return (
    <section className="py-12">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-6">
        LET'S WORK TOGETHER
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-border p-5">
          <h3 className="text-base font-medium text-foreground mb-1">Get in Touch</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Choose your preferred method to connect and let's discuss your project.
          </p>
          <div className="space-y-2">
            {options.map(({ icon: Icon, title, subtitle, href }) => (
              <a
                key={title}
                href={href}
                className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted transition-colors group"
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-sm text-foreground">{title}</div>
                  <div className="text-xs text-muted-foreground">{subtitle}</div>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" />
              </a>
            ))}
          </div>
          <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> Replies within 24 hours
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3 w-3" /> Open to remote, freelance & Full-time
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-lg border border-border p-5 flex flex-col"
        >
          <h3 className="text-base font-medium text-foreground mb-1">Send a Message</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Prefer to write? Fill out the form and I'll get back to you within 24 hours.
          </p>
          <div className="space-y-3 flex-1">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Send Message <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
