import { useEffect, useRef, useState } from 'react';
import { profile, featured, archive, experience, education, achievements, skills, languages } from './data.js';
import { PixelArt, ICONS, Bit, PixelBand } from './Pixel.jsx';

/* ───────────── helpers ───────────── */

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);
  const day = now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }).replace(',', '');
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return `${day}  ${time}`;
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))];
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// A window you can drag around the desktop (on wide screens).
function Draggable({ className = '', style, children }) {
  const ref = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const onDown = (e) => {
    if (window.innerWidth < 900 || !e.target.closest('.drag-handle')) return;
    const start = { x: e.clientX - pos.current.x, y: e.clientY - pos.current.y };
    const el = ref.current;
    el.classList.add('dragging');
    el.setPointerCapture?.(e.pointerId);
    const move = (ev) => {
      pos.current = { x: ev.clientX - start.x, y: ev.clientY - start.y };
      el.style.translate = `${pos.current.x}px ${pos.current.y}px`;
    };
    const up = () => {
      el.classList.remove('dragging');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div ref={ref} className={`draggable ${className}`} style={style} onPointerDown={onDown}>
      {children}
    </div>
  );
}

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* ───────────── hero desktop ───────────── */

function TopBar({ theme, toggle }) {
  const clock = useClock();
  return (
    <header className="topbar">
      <a href="#top" className="brand" onClick={(e) => (e.preventDefault(), go('top'))}>
        <span className="brand-mark">P</span> {profile.name}
      </a>
      <div className="topbar-right">
        <button className="theme-btn" onClick={toggle} aria-label="Toggle dark mode">
          {theme === 'light' ? '☾' : '☀'}
        </button>
        <span className="clock">{clock}</span>
      </div>
    </header>
  );
}

function DeskIcon({ icon, label, href, onClick, text }) {
  const inner = (
    <>
      <span className="desk-glyph">{text ? <span className="cv-glyph">{text}</span> : <PixelArt map={ICONS[icon]} size={4} />}</span>
      <span className="desk-label">{label}</span>
    </>
  );
  return href ? (
    <a className="desk-icon" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    <button className="desk-icon" onClick={onClick}>
      {inner}
    </button>
  );
}

const BIT_LINES = [
  `Hi! I'm Bit — ${profile.short}'s sidekick.`,
  'I run on coffee and gradients.',
  'Fun fact: the windows are draggable.',
  'Psst… scroll down for the projects.',
];

function Hero() {
  const [line, setLine] = useState(0);
  return (
    <section className="desktop" id="top">
      <div className="desk-icons left">
        <DeskIcon text="CV" label="résumé" href={profile.resume} />
        <DeskIcon icon="mail" label="contact" href={`mailto:${profile.email}`} />
        <DeskIcon icon="code" label="github" href={profile.links.github} />
      </div>
      <div className="desk-icons right">
        <DeskIcon icon="flask" label="ml.lab" onClick={() => go('projects')} />
        <DeskIcon icon="trophy" label="kaggle" href={profile.links.kaggle} />
        <DeskIcon icon="terminal" label="leetcode" href={profile.links.leetcode} />
      </div>

      <Draggable className="win sidekick">
        <div className="win-bar drag-handle">
          <span>bit.exe</span>
          <span className="dots">▪ ▪</span>
        </div>
        <button className="sidekick-body" onClick={() => setLine((l) => (l + 1) % BIT_LINES.length)}>
          <span className="bubble">{BIT_LINES[line]}</span>
          <span className="bit-scene">
            <Bit size={7} />
          </span>
        </button>
      </Draggable>

      <div className="hero-center">
        <h1 className="hero-name">
          <span>PAVITHRA</span> <span>RAJINDRA</span>
        </h1>
        <div className="selection">
          <i className="h tl" />
          <i className="h tr" />
          <i className="h bl" />
          <i className="h br" />
          {profile.tagline}
        </div>
        <p className="hero-sub">
          LLMs · RAG · Deep Learning · Vision · Speech · NLP
          <span className="caret">_</span>
        </p>
      </div>

      <Draggable className="win about-win">
        <div className="win-bar drag-handle dark">
          <span>About Me</span>
          <span className="dots">✕</span>
        </div>
        <div className="win-body">
          <p>{profile.about}</p>
          <button className="text-link" onClick={() => go('about')}>
            View ↗
          </button>
        </div>
      </Draggable>

      <button className="scroll-hint" onClick={() => go('projects')}>
        Scroll Down
        <span>▼</span>
      </button>
    </section>
  );
}

function Dock() {
  const items = [
    ['home', 'top', 'Home'],
    ['folder', 'projects', 'Projects'],
    ['case', 'experience', 'Experience'],
    ['person', 'about', 'About'],
  ];
  return (
    <nav className="dock" aria-label="Sections">
      {items.map(([icon, id, label]) => (
        <button key={id} onClick={() => go(id)} className="dock-btn" aria-label={label}>
          <PixelArt map={ICONS[icon]} size={3} />
          <span className="dock-tip">{label}</span>
        </button>
      ))}
    </nav>
  );
}

/* ───────────── projects ───────────── */

function ProjectCard({ p, i }) {
  return (
    <article className={`project reveal hue-${p.hue}`} style={{ '--d': `${(i % 2) * 60}ms` }}>
      <div className="project-visual">
        <span className="visual-label">{p.title}</span>
        <div className="visual-grid" aria-hidden="true" />
        <div className="mini-term">
          <div className="mini-term-bar">
            <i /> <i /> <i /> <span>~/{p.title.toLowerCase().split(' ')[0]}</span>
          </div>
          <pre>
            {p.terminal.map((l, k) => (
              <div key={k} className={l.startsWith('$') ? 'cmd' : ''} style={{ '--k': k }}>
                {l}
              </div>
            ))}
          </pre>
        </div>
      </div>
      <div className="project-info">
        <h3>{p.title}</h3>
        <p className="project-meta">{p.meta}</p>
        <p className="project-desc">{p.desc}</p>
        <dl className="stats">
          {p.stats.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <ul className="chips">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {p.link && (
          <a className="pixel-btn" href={p.link} target="_blank" rel="noreferrer">
            View
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="dark-section" id="projects">
      <div className="wrap">
        <header className="section-head reveal">
          <h2>Selected Projects</h2>
          <p>Models I trained, systems I shipped, and a few late nights spent staring at loss curves.</p>
        </header>
        <div className="projects">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
        <Archive />
      </div>
    </section>
  );
}

function Archive() {
  const [all, setAll] = useState(false);
  const rows = all ? archive : archive.slice(0, 8);
  return (
    <div className="win archive reveal">
      <div className="win-bar">
        <span>C:\pavithra\projects\archive</span>
        <span>{archive.length} items</span>
      </div>
      <div className="archive-head">
        <span>Name</span>
        <span>Built with</span>
        <span>Year</span>
      </div>
      <ul>
        {rows.map((a) => {
          const Row = a.link ? 'a' : 'div';
          return (
            <li key={a.name}>
              <Row className="archive-row" {...(a.link ? { href: a.link, target: '_blank', rel: 'noreferrer' } : {})}>
                <span className="archive-name">
                  <PixelArt map={ICONS.folder} size={2} />
                  <span>
                    <b>{a.name}</b>
                    <small>{a.note}</small>
                  </span>
                </span>
                <span className="archive-tech">{a.tech}</span>
                <span className="archive-date">
                  {a.date} {a.link && <em>↗</em>}
                </span>
              </Row>
            </li>
          );
        })}
      </ul>
      {archive.length > 8 && (
        <button className="archive-more" onClick={() => setAll((v) => !v)}>
          {all ? '− show fewer' : `+ show all ${archive.length}`}
        </button>
      )}
    </div>
  );
}

/* ───────────── experience ───────────── */

function Experience() {
  const [sel, setSel] = useState(0);
  const e = experience[sel];
  return (
    <section className="dark-section" id="experience">
      <div className="wrap">
        <header className="section-head reveal">
          <h2>Experience</h2>
          <p>Internships, research and the teams I’ve led — each one taught me something the textbook didn’t.</p>
        </header>
        <div className="win exp-win reveal">
          <div className="win-bar">
            <span>experience.exe</span>
            <span className="dots">▪ ▪ ✕</span>
          </div>
          <div className="exp-body">
            <div className="exp-tabs" role="tablist">
              {experience.map((x, i) => (
                <button key={x.org} role="tab" aria-selected={sel === i} className={sel === i ? 'on' : ''} onClick={() => setSel(i)}>
                  <span>{x.org}</span>
                  <b>{x.short}</b>
                  <small>{x.years}</small>
                </button>
              ))}
            </div>
            <div className="exp-panel" key={sel}>
              <p className="exp-org">{e.org}</p>
              <h3>{e.role}</h3>
              <p className="exp-dates">
                {e.dates} <span>▪</span> {e.where}
              </p>
              <ul>
                {e.points.map(([b, t]) => (
                  <li key={b}>
                    <b>{b}</b> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── about / profile ───────────── */

function About() {
  const cats = Object.keys(skills);
  const [cat, setCat] = useState(cats[0]);
  return (
    <section className="dark-section" id="about">
      <div className="wrap">
        <header className="section-head reveal">
          <h2>About Me</h2>
          <p>The person behind the notebooks.</p>
        </header>
        <div className="about-grid">
          <div className="win profile-card reveal">
            <div className="win-bar">
              <span>profile.card</span>
            </div>
            <div className="profile-top">
              <div className="avatar" aria-hidden="true">
                PR
              </div>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
                <span className="badge">
                  <i /> Open to work
                </span>
              </div>
            </div>
            <div className="profile-text">
              {profile.bio.map((b) => (
                <p key={b}>{b}</p>
              ))}
              <p className="looking">
                <b>Looking for:</b> {profile.openTo}
              </p>
              <p className="looking">
                <b>Speaks:</b> {languages.join(' · ')}
              </p>
            </div>
          </div>

          <div className="about-col">
            <div className="win reveal">
              <div className="win-bar">
                <span>education.log</span>
              </div>
              <ul className="edu">
                {education.map((ed) => (
                  <li key={ed.school}>
                    <div>
                      <b>{ed.school}</b>
                      <span>{ed.degree}</span>
                    </div>
                    <div className="edu-right">
                      <em>{ed.score}</em>
                      <small>{ed.years}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="win reveal">
              <div className="win-bar">
                <span>achievements.txt</span>
              </div>
              <ul className="ach">
                {achievements.map(([a, b]) => (
                  <li key={a}>
                    <PixelArt map={ICONS.trophy} size={2} />
                    <span>
                      <b>{a}</b> — {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="win skills-win reveal">
            <div className="win-bar">
              <span>skills.dir</span>
              <span>{cats.length} folders</span>
            </div>
            <div className="skill-tabs" role="tablist">
              {cats.map((c) => (
                <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
                  {c}
                </button>
              ))}
            </div>
            <ul className="chips big" key={cat}>
              {skills[cat].map((s, i) => (
                <li key={s} style={{ '--i': i }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── footer ───────────── */

function Footer() {
  const L = profile.links;
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="kicker">// EPOCH COMPLETE</p>
            <h2>
              Let’s train something
              <br />
              worth deploying
            </h2>
            <a className="pixel-btn big" href={`mailto:${profile.email}`}>
              Say hello
            </a>
          </div>
          <button className="text-link light" onClick={() => go('top')}>
            ↑ Back to top
          </button>
        </div>
        <div className="footer-cols">
          <div>
            <p className="kicker">// CONNECT</p>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={L.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={L.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
          </div>
          <div>
            <p className="kicker">// EXPLORE</p>
            <button onClick={() => go('projects')}>Projects</button>
            <button onClick={() => go('experience')}>Experience</button>
            <button onClick={() => go('about')}>About Me</button>
          </div>
          <div>
            <p className="kicker">// COMPETE</p>
            <a href={L.kaggle} target="_blank" rel="noreferrer">Kaggle</a>
            <a href={L.kaggleIITM} target="_blank" rel="noreferrer">Kaggle (IIT Madras)</a>
            <a href={L.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{profile.name.toUpperCase()} © {new Date().getFullYear()}</span>
          <span>MADE WITH PIXELS + PYTORCH</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, toggle] = useTheme();
  useReveal();
  return (
    <>
      <TopBar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <PixelBand />
        <Projects />
        <Experience />
        <About />
      </main>
      <Footer />
      <Dock />
    </>
  );
}
