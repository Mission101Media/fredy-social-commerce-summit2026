"use client";

const contact = {
  name: "Fredy Mfuko",
  company: "Mission 101 Media",
  phone: "+17185703493",
  email: "fredy@mission101media.com",
  website: "https://mission101media.com",
};

function saveContact() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Mfuko;Fredy;;;",
    "FN:Fredy Mfuko",
    "ORG:Mission 101 Media",
    "TITLE:Creative Director & Multimedia Producer",
    `TEL;TYPE=CELL:${contact.phone}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${contact.website}`,
    "NOTE:Met Fredy Mfuko at Social Commerce Summit.",
    "END:VCARD",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([vcard], { type: "text/vcard;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "Fredy-Mfuko-Mission-101-Media.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

const services = [
  ["01", "Video production", "Commercials, branded stories, event coverage and social-first content built to hold attention."],
  ["02", "Photography", "Portraits, campaigns and events photographed with a clean, editorial point of view."],
  ["03", "Digital experiences", "Websites, campaign pages and brand systems that turn attention into action."],
  ["04", "Creative strategy", "A practical plan for connecting content, channels and conversion around one clear idea."],
];

const work = [
  ["01", "Culture & entertainment", "Mariah Carey · VH1 Save The Music · music video production"],
  ["02", "Brands & hospitality", "Campaign photography · restaurant content · digital launches"],
  ["03", "Founders & organizations", "Brand films · executive portraits · websites that clarify the mission"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Fredy Mfuko home"><span>F</span> Fredy Mfuko</a>
        <a className="nav-save" href="#contact">Let&apos;s connect <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Social Commerce Summit</p>
          <h1>Let&apos;s make<br />something <em>move.</em></h1>
          <p className="intro">I&apos;m Fredy Mfuko — a creative director and multimedia producer helping brands turn strong ideas into content people feel, remember and act on.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={saveContact}>＋ Save my contact</button>
            <a className="button text-button" href="#reel">Watch the reel <span>↓</span></a>
          </div>
          <p className="microcopy">One tap adds Fredy Mfuko to your phone</p>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-label">NYC · Creative partner</div>
          <img src="/fredy-headshot.jpg" alt="Fredy Mfuko, founder of Mission 101 Media" />
          <div className="portrait-card">
            <span>Mission 101 Media</span>
            <strong>Reach. Captivate.<br />Convert.</strong>
          </div>
        </div>
      </section>

      <section className="reel-section" id="reel">
        <div className="section-kicker">01 / In 60 seconds</div>
        <a className="reel" href="https://www.youtube.com/mission101media" target="_blank" rel="noreferrer" aria-label="Watch Mission 101 Media's reel on YouTube">
          <div className="reel-copy">
            <span className="play">▶</span>
            <p>Selected motion, stories & moments</p>
            <h2>Watch the<br /><em>60-second reel</em></h2>
          </div>
          <div className="reel-stamp">60<br /><small>SEC</small></div>
        </a>
      </section>

      <section className="services section" id="services">
        <div className="section-kicker">02 / What I do</div>
        <div className="section-heading">
          <h2>Built for attention.<br /><em>Designed for impact.</em></h2>
          <p>From first spark to final delivery, I bring the strategy, production and creative direction together.</p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, description]) => (
            <article className="service-card" key={title}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-kicker">03 / Selected work</div>
        <div className="work-heading">
          <h2>Client work that<br /><em>earns attention.</em></h2>
          <a href="https://mission101media.com/#portfolio" target="_blank" rel="noreferrer">Explore full portfolio ↗</a>
        </div>
        <div className="work-list">
          {work.map(([number, title, detail]) => (
            <a href="https://mission101media.com/#portfolio" target="_blank" rel="noreferrer" className="work-row" key={title}>
              <span>{number}</span><h3>{title}</h3><p>{detail}</p><b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orbit" aria-hidden="true">LET&apos;S CREATE · LET&apos;S CREATE ·</div>
        <p>Have an idea worth moving on?</p>
        <h2>Let&apos;s build the<br /><em>next thing.</em></h2>
        <div className="contact-actions">
          <a className="button light" href="https://mission101media.com/booking" target="_blank" rel="noreferrer">Book time with Fredy Mfuko ↗</a>
          <button className="button outline" onClick={saveContact}>＋ Save contact</button>
        </div>
        <div className="contact-details">
          <a href="tel:+17185703493">718-570-3493</a>
          <a href="mailto:fredy@mission101media.com">fredy@mission101media.com</a>
          <a href="https://mission101media.com" target="_blank" rel="noreferrer">mission101media.com</a>
        </div>
      </section>
      <footer><span>Mission 101 Media</span><span>Fredy Mfuko @ Social Commerce Summit · 2026</span></footer>
    </main>
  );
}
