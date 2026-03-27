import { useEffect, useState } from 'react';

const techStack = [
  { name: 'Go', slug: 'go' },
  { name: 'Python', slug: 'python' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'C++', slug: 'cplusplus' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'shadcn/ui', slug: 'shadcnui' },
  { name: 'Framer Motion', slug: 'framer' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Redis', slug: 'redis' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Linux', slug: 'linux' },
  { name: 'Nginx', slug: 'nginx' },
  { name: 'PyTorch', slug: 'pytorch' },
];

function App() {
  const [showFullStack, setShowFullStack] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            (entry.target as HTMLElement).style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <header className="nav-header">
        <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>Luffy</div>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="badge mb-8 delay-100 animate-fade-in-up">
            Available for new opportunities
          </div>
          <h1 className="hero-title delay-200 animate-fade-in-up">
            Crafting premium <br />
            <span className="text-gradient">digital experiences.</span>
          </h1>
          <p className="hero-subtitle mb-8 delay-300 animate-fade-in-up">
            Hi, I&apos;m Luffy. I design and build minimalist, high-performance web
            applications that leave a lasting impression.
          </p>
          <div className="delay-400 animate-fade-in-up">
            <a
              href="#contact"
              className="glass-panel"
              style={{ padding: '0.8rem 1.5rem', display: 'inline-block' }}
            >
              Get in touch {'->'}
            </a>
          </div>
        </section>

        <section id="experience" className="scroll-animate" style={{ opacity: 0 }}>
          <h2 className="mb-12">Experience</h2>

          <div className="experience-item">
            <div className="flex justify-between items-center mb-4">
              <h3 style={{ fontSize: '1.1rem' }}>Senior Frontend Engineer</h3>
              <span className="text-secondary text-sm" style={{ fontSize: '0.9rem' }}>
                2023 - Present
              </span>
            </div>
            <div className="text-secondary" style={{ marginBottom: '0.5rem' }}>
              Tech Innovators Inc.
            </div>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Led the frontend architecture and built a scalable design system
              improving development velocity by 40%.
            </p>
          </div>

          <div className="experience-item">
            <div className="flex justify-between items-center mb-4">
              <h3 style={{ fontSize: '1.1rem' }}>Web Developer</h3>
              <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                2021 - 2023
              </span>
            </div>
            <div className="text-secondary" style={{ marginBottom: '0.5rem' }}>
              Creative Digital Agency
            </div>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Developed dynamic, responsive single-page applications for
              high-profile clients using React and TypeScript.
            </p>
          </div>
        </section>

        <section id="projects" className="scroll-animate" style={{ opacity: 0 }}>
          <h2 className="mb-8">Selected Work</h2>

          <div className="grid-2">
            <div className="glass-panel project-card">
              <div className="flex justify-between items-center">
                <h3>Project Alpha</h3>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                  2024
                </span>
              </div>
              <p className="text-secondary flex-grow" style={{ fontSize: '0.95rem' }}>
                A highly interactive e-commerce platform with 3D product
                visualizations and a smooth user flow.
              </p>
              <div className="flex gap-2 mt-4 text-secondary">
                <span className="badge">React</span>
                <span className="badge">Three.js</span>
              </div>
            </div>

            <div className="glass-panel project-card">
              <div className="flex justify-between items-center">
                <h3>Beta Dashboard</h3>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>
                  2023
                </span>
              </div>
              <p className="text-secondary flex-grow" style={{ fontSize: '0.95rem' }}>
                A complex data visualization dashboard designed for real-time
                financial analytics and reporting.
              </p>
              <div className="flex gap-2 mt-4 text-secondary">
                <span className="badge">TypeScript</span>
                <span className="badge">D3.js</span>
              </div>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="scroll-animate" style={{ opacity: 0 }}>
          <h2 className="mb-4">Tech Stack</h2>
          <p className="tech-stack-copy">
            I&apos;m a generalist at heart who can build with anything, but
            here&apos;s the core stack I&apos;ve spent the most time with:
          </p>

          <button
            type="button"
            className={`stack-trigger ${showFullStack ? 'is-open' : ''}`}
            aria-expanded={showFullStack}
            aria-controls="full-stack-panel"
            onClick={() => setShowFullStack((current) => !current)}
          >
            {showFullStack ? 'Hide Full Stack' : 'View Full Stack'}
          </button>

          <div
            id="full-stack-panel"
            className={`stack-panel ${showFullStack ? 'is-open' : ''}`}
          >
            <div className="stack-rail-mask">
              <div className="stack-rail stack-rail-left">
                {[...techStack, ...techStack].map((item, index) => (
                  <div className="stack-chip" key={`left-${item.slug}-${index}`}>
                    <img
                      src={`https://cdn.simpleicons.org/${item.slug}/f5f5f5`}
                      alt={item.name}
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stack-rail-mask stack-rail-mask-offset">
              <div className="stack-rail stack-rail-right">
                {[...techStack, ...techStack].map((item, index) => (
                  <div className="stack-chip" key={`right-${item.slug}-${index}`}>
                    <img
                      src={`https://cdn.simpleicons.org/${item.slug}/f5f5f5`}
                      alt={item.name}
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-animate text-center"
          style={{ opacity: 0 }}
        >
          <h2 className="mb-4">Let&apos;s work together.</h2>
          <p
            className="text-secondary mb-8 mx-auto"
            style={{ maxWidth: '400px' }}
          >
            I&apos;m always open to discussing product design work,
            collaborations, or new opportunities.
          </p>
          <a
            href="mailto:hello@example.com"
            className="glass-panel text-gradient"
            style={{
              padding: '1rem 2.5rem',
              display: 'inline-block',
              fontSize: '1.25rem',
              fontWeight: 500,
            }}
          >
            hello@example.com
          </a>
        </section>
      </main>

      <footer
        className="nav-header"
        style={{ borderTop: '1px solid var(--border)', marginTop: '4rem', padding: '2rem 0' }}
      >
        <div className="text-secondary" style={{ fontSize: '0.9rem' }}>
          (c) {new Date().getFullYear()} Luffy. All rights reserved.
        </div>
        <div className="nav-links">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
