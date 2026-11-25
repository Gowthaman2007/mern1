import heroImg from './assets/hero.png'
import './App.css'

const highlights = [
  {
    number: '01',
    title: 'A modern foundation',
    description:
      'A clean React and Vite frontend gives the project a fast, flexible starting point.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12v8.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Built to connect',
    description:
      'MongoDB, Express, and Node.js are ready to power the data and API layer as it grows.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 7h10M7 17h10M5 12h14" />
        <circle cx="7" cy="7" r="2" />
        <circle cx="17" cy="17" r="2" />
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Ready for what’s next',
    description:
      'A responsive, component-friendly setup makes it easy to shape this starter into your product.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13h5l3-9 3 16 3-7h2" />
      </svg>
    ),
  },
]

const technologies = ['MongoDB', 'Express', 'React', 'Node.js']

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4.5 10h11m-4.5-4.5 4.5 4.5-4.5 4.5" />
    </svg>
  )
}

function BrandIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12v8.5" />
    </svg>
  )
}

function IntroSplash() {
  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-wordmark">MERN<span>.studio</span></div>
      <p className="intro-caption">An idea is taking shape</p>
      <span className="brand-mark intro-flight-mark grid place-items-center rounded-xl">
        <BrandIcon />
      </span>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <IntroSplash />
      <div className="site-shell relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <header className="relative z-10 flex h-20 items-center justify-between border-b border-white/[0.08]">
          <a className="brand-lockup flex items-center gap-3" href="#home" aria-label="MERN Studio home">
            <span className="brand-mark grid h-9 w-9 place-items-center rounded-xl">
              <BrandIcon />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">MERN<span className="text-violet-300">.studio</span></span>
          </a>

          <nav className="hidden items-center gap-9 text-sm text-slate-400 md:flex" aria-label="Main navigation">
            <a className="nav-link transition-colors hover:text-white" href="#about">The project</a>
            <a className="nav-link transition-colors hover:text-white" href="#stack">Tech stack</a>
            <a className="nav-link transition-colors hover:text-white" href="#features">What’s inside</a>
          </nav>

          <a className="header-cta hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition-all hover:border-violet-300/50 hover:bg-violet-300/10 sm:flex" href="#about">
            Explore project <ArrowIcon />
          </a>
          <a className="header-cta rounded-full border border-white/10 px-3 py-2 text-xs text-slate-200 sm:hidden" href="#about">Explore</a>
        </header>

        <section id="home" className="hero-section relative grid min-h-[650px] items-center gap-12 py-16 md:min-h-[690px] md:grid-cols-[1.04fr_0.96fr] md:py-20">
          <div className="hero-copy relative z-[2]">
            <div className="eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-violet-100">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-emerald-300" />
              YOUR NEXT BIG IDEA STARTS HERE
            </div>
            <h1 className="hero-title max-w-[700px] text-[clamp(3.35rem,6vw,6.35rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
              Make it real.
              <span className="title-gradient block">Make it <span className="italic">MERN.</span></span>
            </h1>
            <p className="mt-7 max-w-[510px] text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              A fresh, full-stack starting point for the ideas you can’t wait to build. Meet your new project, designed to grow with you.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a className="primary-button group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white" href="#about">
                Get to know the project
                <span className="button-arrow transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
              </a>
              <a className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-slate-300 transition-colors hover:text-white" href="#stack">
                Meet the stack <span className="down-arrow">↓</span>
              </a>
            </div>

            <div className="hero-proof mt-12 flex items-center gap-4 border-t border-white/[0.08] pt-6">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="proof-avatar avatar-one">M</span>
                <span className="proof-avatar avatar-two">E</span>
                <span className="proof-avatar avatar-three">R</span>
                <span className="proof-avatar avatar-four">N</span>
              </div>
              <p className="text-xs leading-5 text-slate-500">
                One powerful stack.<br />
                <span className="text-slate-300">Endless ways to build.</span>
              </p>
            </div>
          </div>

          <div className="hero-art relative mx-auto flex aspect-square w-full max-w-[570px] items-center justify-center" aria-label="Abstract illustration of a layered web application" role="img">
            <div className="art-glow absolute inset-[12%] rounded-full" />
            <div className="orbit orbit-one absolute inset-[7%] rounded-full" />
            <div className="orbit orbit-two absolute inset-[18%] rounded-full" />
            <span className="orbit-spark spark-one" />
            <span className="orbit-spark spark-two" />
            <span className="orbit-spark spark-three" />

            <div className="art-grid absolute inset-[13%] rounded-[36px]" />
            <div className="art-card absolute inset-[16%] rounded-[30px] border border-white/10 bg-[#111522]/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex gap-1.5" aria-hidden="true">
                  <i className="window-dot bg-rose-400/80" />
                  <i className="window-dot bg-amber-300/80" />
                  <i className="window-dot bg-emerald-300/80" />
                </div>
                <span className="text-[9px] font-medium tracking-[0.18em] text-slate-500">PROJECT OVERVIEW</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
              </div>
              <div className="relative grid h-[calc(100%-57px)] place-items-center overflow-hidden">
                <div className="visual-halo absolute h-[72%] w-[72%] rounded-full" />
                <img className="hero-stack relative z-[1] w-[64%] drop-shadow-[0_24px_50px_rgba(124,58,237,0.28)]" src={heroImg} alt="" />
                <div className="floating-label label-top absolute left-[8%] top-[15%] flex items-center gap-2 rounded-xl border border-white/10 bg-[#171b29]/90 px-3 py-2 shadow-xl backdrop-blur-md">
                  <span className="label-icon text-violet-300">✳</span>
                  <span className="text-[10px] font-medium text-slate-200">One connected stack</span>
                </div>
                <div className="floating-label label-bottom absolute bottom-[13%] right-[6%] flex items-center gap-2 rounded-xl border border-white/10 bg-[#171b29]/90 px-3 py-2 shadow-xl backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span className="text-[10px] font-medium text-slate-200">Ready to build</span>
                </div>
              </div>
            </div>

            <div className="code-chip absolute -right-1 top-[22%] rounded-2xl border border-white/10 bg-[#121624]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-0">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">Frontend</span>
              </div>
              <code className="text-[11px] text-slate-300"><span className="text-violet-300">const</span> idea = <span className="text-emerald-300">"yours"</span></code>
            </div>
            <div className="stack-badge absolute -bottom-1 left-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#121624]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-[2%]">
              <span className="badge-orb grid h-8 w-8 place-items-center rounded-xl text-sm">✦</span>
              <span className="text-[10px] leading-4 text-slate-400">Built for<br /><strong className="font-semibold text-white">what’s next</strong></span>
            </div>
          </div>
        </section>

        <section id="stack" className="stack-strip relative z-[1] flex flex-col gap-5 border-y border-white/[0.08] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500">THE STACK, WORKING AS ONE</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-10">
            {technologies.map((technology, index) => (
              <span className="tech-word flex items-center gap-2 text-sm font-medium text-slate-300" key={technology}>
                <span className={`tech-dot tech-dot-${index + 1}`} />
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section id="about" className="intro-section grid gap-12 py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:py-32">
          <div>
            <p className="section-kicker mb-4 text-xs font-semibold tracking-[0.2em] text-violet-300">A LITTLE INTRODUCTION</p>
            <h2 className="max-w-[460px] text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              From first spark to <span className="title-gradient">full-stack.</span>
            </h2>
          </div>
          <div className="max-w-[650px] self-end">
            <p className="text-lg leading-8 text-slate-300">
              This project brings the MongoDB, Express, React, and Node.js ecosystem together in one approachable starting point. The frontend is already set up with Vite and Tailwind CSS, so you can spend less time on setup and more time bringing your idea to life.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Think of it as a blank canvas with a solid foundation: shape the experience, connect your data, and build something that’s unmistakably yours.
            </p>
          </div>
        </section>

        <section id="features" className="features-section pb-24 md:pb-32">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300">THE GOOD STUFF</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">A launchpad, not a limitation.</h2>
            </div>
            <p className="max-w-[330px] text-sm leading-6 text-slate-500">Everything is here to help you go from “what if?” to “it works.”</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article className="feature-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/[0.04] sm:p-7" key={highlight.number}>
                <div className="mb-8 flex items-center justify-between">
                  <span className="feature-icon grid h-11 w-11 place-items-center rounded-xl text-violet-200 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">{highlight.icon}</span>
                  <span className="text-xs font-medium tracking-widest text-slate-600">{highlight.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer-cta relative mb-10 overflow-hidden rounded-3xl border border-violet-300/15 px-7 py-10 sm:px-12 sm:py-12">
          <div className="footer-glow absolute inset-0" />
          <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-violet-200">YOUR TURN</p>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">The next great thing starts with you.</h2>
              <p className="mt-2 text-sm text-slate-400">Welcome to the beginning of something good.</p>
            </div>
            <a className="primary-button group inline-flex w-fit items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white" href="#home">
              Back to the top <span className="button-arrow transition-transform group-hover:-translate-y-1"><ArrowIcon /></span>
            </a>
          </div>
        </footer>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] py-6 text-xs text-slate-600 sm:flex-row">
          <span>© {new Date().getFullYear()} MERN.studio</span>
          <span>Made for curious minds &amp; ambitious ideas.</span>
        </div>
      </div>
    </main>
  )
}

export default App
