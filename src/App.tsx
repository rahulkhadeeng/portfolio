import { useEffect } from 'react';

function App() {
  // Intersection observer to trigger fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
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
      {/* Header */}
      <header className="nav-header">
        <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>Luffy</div>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="badge mb-8 delay-100 animate-fade-in-up">
            Available for new opportunities
          </div>
          <h1 className="hero-title delay-200 animate-fade-in-up">
            Crafting premium <br/>
            <span className="text-gradient">digital experiences.</span>
          </h1>
          <p className="hero-subtitle mb-8 delay-300 animate-fade-in-up">
            Hi, I'm Luffy. I design and build minimalist, high-performance web applications that leave a lasting impression.
          </p>
          <div className="delay-400 animate-fade-in-up">
            <a href="#contact" className="glass-panel" style={{ padding: '0.8rem 1.5rem', display: 'inline-block' }}>
              Get in touch →
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-animate" style={{ opacity: 0 }}>
          <h2 className="mb-12">Experience</h2>
          
          <div className="experience-item">
            <div className="flex justify-between items-center mb-4">
              <h3 style={{ fontSize: '1.1rem' }}>Senior Frontend Engineer</h3>
              <span className="text-secondary text-sm" style={{ fontSize: '0.9rem' }}>2023 - Present</span>
            </div>
            <div className="text-secondary" style={{ marginBottom: '0.5rem' }}>Tech Innovators Inc.</div>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Led the frontend architecture and built a scalable design system improving development velocity by 40%.
            </p>
          </div>

          <div className="experience-item">
            <div className="flex justify-between items-center mb-4">
              <h3 style={{ fontSize: '1.1rem' }}>Web Developer</h3>
              <span className="text-secondary" style={{ fontSize: '0.9rem' }}>2021 - 2023</span>
            </div>
            <div className="text-secondary" style={{ marginBottom: '0.5rem' }}>Creative Digital Agency</div>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Developed dynamic, responsive single-page applications for high-profile clients using React and TypeScript.
            </p>
          </div>
        </section>

        {/* Projects / Work Section */}
        <section id="projects" className="scroll-animate" style={{ opacity: 0 }}>
          <h2 className="mb-8">Selected Work</h2>
          
          <div className="grid-2">
            <div className="glass-panel project-card">
              <div className="flex justify-between items-center">
                <h3>Project Alpha</h3>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>2024</span>
              </div>
              <p className="text-secondary flex-grow" style={{ fontSize: '0.95rem' }}>
                A highly interactive e-commerce platform with 3D product visualizations and a smooth user flow.
              </p>
              <div className="flex gap-2 mt-4 text-secondary">
                <span className="badge">React</span>
                <span className="badge">Three.js</span>
              </div>
            </div>

            <div className="glass-panel project-card">
              <div className="flex justify-between items-center">
                <h3>Beta Dashboard</h3>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>2023</span>
              </div>
              <p className="text-secondary flex-grow" style={{ fontSize: '0.95rem' }}>
                A complex data visualization dashboard designed for real-time financial analytics and reporting.
              </p>
              <div className="flex gap-2 mt-4 text-secondary">
                <span className="badge">TypeScript</span>
                <span className="badge">D3.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-animate text-center" style={{ opacity: 0 }}>
          <h2 className="mb-4">Let's work together.</h2>
          <p className="text-secondary mb-8 mx-auto" style={{ maxWidth: '400px' }}>
            I'm always open to discussing product design work, collaborations, or new opportunities.
          </p>
          <a href="mailto:hello@example.com" className="glass-panel text-gradient" style={{ padding: '1rem 2.5rem', display: 'inline-block', fontSize: '1.25rem', fontWeight: 500 }}>
            hello@example.com
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="nav-header" style={{ borderTop: '1px solid var(--border)', marginTop: '4rem', padding: '2rem 0' }}>
        <div className="text-secondary" style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Luffy. All rights reserved.</div>
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
