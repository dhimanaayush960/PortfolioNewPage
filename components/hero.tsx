import { ArrowDownRight, ArrowUpRight, BarChart3, Mail, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10 lg:pb-28">
        <nav className="flex items-center justify-between border-b border-border py-5" aria-label="Main navigation">
          <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-primary">AD<span className="text-accent">/</span>26</a>
          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-accent">Selected work</a>
            <a href="#about" className="transition-colors hover:text-accent">About</a>
            <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
          </div>
          <a href="mailto:aayushdhiman8989@gmail.com" className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-accent"><Mail className="size-4" /> Let&apos;s talk</a>
        </nav>

        <div className="grid gap-14 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-28">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"><span className="size-2 rounded-full bg-accent" /> Data &amp; business analyst</div>
            <h1 className="max-w-4xl text-balance font-serif text-6xl leading-[0.92] tracking-[-0.05em] text-primary sm:text-7xl lg:text-[8.2rem]">Turning<br /><em className="text-accent">data</em> into<br />direction.</h1>
            <p className="mt-10 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">I&apos;m Aayush Dhiman — a curious analyst who makes complex business questions easier to act on through clean dashboards, thoughtful models, and clear storytelling.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="inline-flex items-center gap-3 neo-border neo-shadow-sm bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-1">Explore my work <ArrowDownRight className="size-4" /></a>
              <a href="mailto:aayushdhiman8989@gmail.com" className="inline-flex items-center gap-3 neo-border bg-card px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:border-accent hover:text-accent">Get in touch <ArrowUpRight className="size-4" /></a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mb-3">
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"><span>Live profile / 01</span><span>Open to opportunities</span></div>
            <div className="neo-border neo-shadow bg-secondary p-5">
              <div className="flex items-start justify-between"><div><p className="font-mono text-xs text-muted-foreground">CURRENT FOCUS</p><p className="mt-2 text-2xl font-semibold text-primary">Business intelligence</p></div><BarChart3 className="size-7 text-accent" /></div>
              <div className="mt-10 flex h-36 items-end gap-2 border-b border-border pb-0">{[34, 48, 42, 66, 56, 78, 70, 94, 84, 100].map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-accent/80 transition-all hover:bg-accent" style={{ height: `${height}%` }} />)}</div>
              <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"><span>Insight velocity</span><span className="text-accent">+ 68.4%</span></div>
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground"><MapPin className="size-3 text-accent" /> Haridwar, India <span className="text-border">/</span> IST</div>
          </div>
        </div>
      </div>
    </section>
  )
}
