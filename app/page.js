import {
  PetalAnimation,
  GoldParticles,
  ScrollReveal,
  CountdownTimer,
  MandalaSVG,
  RSVPForm,
  ShareInvitation,
  NavBar,
} from "./components";

const events = [
  {
    tag: "Ceremony 01",
    name: "Lagan & Sagai",
    nameHindi: "लगन और सगाई",
    day: "26",
    month: "April",
    date: "26 April 2026",
    time: "Evening Celebration",
    venue: "Gul Gardens, Bulandshahr",
    address: "Railway Rd, Panni Nagar, Amba Enclave, Bulandshahr, UP 203001",
    tagline: "Lagan Lagi Re — Ek Shaam Pyaar ke Naam",
    bg: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    mapUrl: "https://maps.google.com/?q=Railway+Rd,+Panni+Nagar,+Amba+Enclave,+Bulandshahr,+UP+203001",
    icon: "🎊",
  },
  {
    tag: "Ceremony 02",
    name: "Haldi Rasam",
    nameHindi: "हल्दी रस्म",
    day: "28",
    month: "April",
    date: "28 April 2026",
    time: "Morning Ceremony",
    venue: "Family Home, Bulandshahr",
    address: "Bulandshahr, Uttar Pradesh",
    tagline: "Haldi ki Raat — Mann mein Khushi, Tan mein Noor",
    bg: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=1200&q=80",
    mapUrl: "https://maps.google.com/?q=Bulandshahr,+Uttar+Pradesh",
    icon: "💛",
  },
  {
    tag: "Ceremony 03",
    name: "Shaadi",
    nameHindi: "शादी",
    day: "30",
    month: "April",
    date: "30 April 2026",
    time: "Shubh Muhurat",
    venue: "Garbhare Village, Greater Noida",
    address: "CG7M+4V3, Fuhari, Greater Noida, UP 201312",
    tagline: "Saat Pheron ki Pavitra Bela — Ek Naye Safar ki Shuruaat",
    bg: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
    mapUrl: "https://maps.google.com/?q=CG7M%2B4V3,+Fuhari,+Greater+Noida,+UP+201312",
    icon: "💍",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80", label: "Mehendi Night", num: "01" },
  { src: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=1000&q=80", label: "Haldi Glow", num: "02" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=80", label: "Mandap", num: "03" },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1000&q=80", label: "Saat Phere", num: "04" },
];

const blessings = [
  {
    text: "Two souls bound not by chance, but by destiny — may your every day be a festival of love.",
    name: "Kapasiya Parivaar",
    relation: "with love & blessings",
    initial: "K",
  },
  {
    text: "From childhood dreams to seven sacred vows — watching you both choose each other has been the purest joy.",
    name: "Closest Friends",
    relation: "the inner circle",
    initial: "F",
  },
  {
    text: "May your home always be filled with laughter, your hearts with patience, and your journey with grace.",
    name: "Elders & Well-wishers",
    relation: "ashirwaad",
    initial: "✶",
  },
];

export default function Home() {
  return (
    <main>
      <PetalAnimation />
      <GoldParticles />
      <NavBar />

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=2000&q=80"
            alt="Wedding ambience"
            loading="eager"
          />
        </div>
        <div className="hero-overlay" />
        <MandalaSVG className="hero-mandala hero-mandala-left" />
        <MandalaSVG className="hero-mandala hero-mandala-right" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="hero-eyebrow-text">
              <span>Save the Date</span>
              <span className="hero-eyebrow-date">30 · 04 · 2026</span>
            </span>
          </div>

          <p className="invocation">|| श्री गणेशाय नमः ||</p>
          <p className="invitation-text">— With the blessings of our families —</p>

          <div className="couple-names-container">
            <h1 className="couple-names">Vanshika</h1>
            <span className="couple-and">&amp;</span>
            <h1 className="couple-names">Nitin</h1>
          </div>

          <div className="hero-meta">
            <span className="rule" />
            <span className="label">Thu · 30 April · 2026</span>
            <span className="rule" />
          </div>

          <p className="hero-tagline">
            &ldquo;Do dil mil rahe hain, magar chupke chupke&rdquo;
          </p>

          <div className="hero-actions">
            <a href="#rsvp" className="btn btn-primary">
              RSVP Now <span className="arrow">→</span>
            </a>
            <a href="#events" className="btn btn-ghost">
              View Ceremonies
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <span className="line" />
        </div>
      </section>

      {/* ===== WELCOME ===== */}
      <section className="welcome-section" id="welcome">
        <ScrollReveal>
          <div className="welcome-inner">
            <div className="welcome-ornament">❈ ✦ ❈</div>
            <h2 className="welcome-title">आपका स्वागत है</h2>
            <p className="welcome-title-roman">Aapka Swagat Hai</p>
            <div className="welcome-divider"><span className="diamond" /></div>
            <p className="welcome-text">
              Aap sabka pyaar bhara swagat hai. Hum dono ki zindagi ka sabse
              khoobsurat lamha aa raha hai — aur hum chahte hain ki aap is
              khushi mein hamara saath dein. Yeh invitation aapke liye hai;
              aapka aashirwad hi hamari asli daulat hai.
            </p>
            <div className="welcome-divider"><span className="diamond" /></div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== COUNTDOWN ===== */}
      <section className="countdown-section section-full" id="countdown">
        <div className="countdown-header">
          <ScrollReveal>
            <p className="eyebrow"><span className="num">01</span><span className="rule" /> The Wait</p>
            <h2 className="countdown-title">
              Shaadi ka <em>Countdown</em>
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <CountdownTimer />
        </ScrollReveal>
      </section>

      {/* ===== STORY ===== */}
      <section className="story-section" id="story">
        <div className="story-grid">
          <ScrollReveal>
            <div className="story-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80"
                alt="Couple portrait"
                loading="lazy"
              />
              <div className="frame" />
              <div className="badge">
                <span>Est.</span>
                <span style={{ fontSize: "1.4rem" }}>2026</span>
                <span>Forever</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="story-content">
              <p className="eyebrow"><span className="num">02</span><span className="rule" /> Our Story</p>
              <h2 className="section-title">A love letter, <em>finally signed.</em></h2>
              <p className="story-quote">
                <span>&ldquo;</span>From quiet beginnings to seven sacred vows —
                a story written slowly, kept carefully, and now shared with the
                people who shaped us.<span>&rdquo;</span>
              </p>
              <p className="story-body">
                What started as fleeting glances became long conversations,
                long conversations became a quiet promise, and a quiet promise
                became this — a celebration of two families becoming one. We
                are honoured to invite you into the chapter that begins on
                30 April, 2026.
              </p>
              <div className="story-meta">
                <div className="item">
                  <span className="label">The Day</span>
                  <span className="value">30 · 04 · 2026</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== EVENTS — editorial timeline ===== */}
      <section className="events-section" id="events">
        <div className="events-header">
          <ScrollReveal>
            <p className="eyebrow"><span className="num">03</span><span className="rule" /> Ceremonies</p>
            <h2 className="section-title">हमारे जश्न <em>—</em> our celebrations</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="meta">3 days · 3 ceremonies · countless memories</p>
          </ScrollReveal>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <ScrollReveal key={event.name} delay={index * 120}>
              <article className="event-card">
                <div className="event-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.bg} alt={event.name} loading="lazy" />
                  <div className="event-card-date">
                    <span className="day">{event.day}</span>
                    <span className="mon">{event.month}</span>
                  </div>
                  <span className="event-card-step">{String(index + 1).padStart(2, "0")} / 03</span>
                </div>
                <div className="event-card-body">
                  <div className="event-card-emoji">{event.icon}</div>
                  <span className="event-card-tag">{event.tag}</span>
                  <h3 className="event-name">{event.name}</h3>
                  <p className="event-name-hindi">{event.nameHindi}</p>
                  <div className="event-divider" />
                  <div className="event-info-row">
                    <span className="ico">When</span>
                    <span className="val">
                      {event.date}
                      <span className="sub">{event.time}</span>
                    </span>
                  </div>
                  <div className="event-info-row">
                    <span className="ico">Where</span>
                    <span className="val">
                      {event.venue}
                      <span className="sub">{event.address}</span>
                    </span>
                  </div>
                  <p className="event-tagline">&ldquo;{event.tagline}&rdquo;</p>
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-directions"
                  >
                    Get Directions <span>↗</span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-header">
          <ScrollReveal>
            <p className="eyebrow"><span className="num">04</span><span className="rule" /> Glimpses</p>
            <h2 className="section-title">खुशियों की <em>झलकियाँ</em></h2>
            <p className="section-lead">A quiet collection of moments — colour, light, and the kind of joy that doesn&apos;t need a caption.</p>
          </ScrollReveal>
        </div>

        <div className="gallery-collage">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.label} delay={i * 80}>
              <div className={`gallery-item g${i + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-label">
                    <span className="num">{img.num} · 2026</span>
                    {img.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== BLESSINGS / TESTIMONIALS ===== */}
      <section className="blessings-section" id="blessings">
        <div className="blessings-header">
          <ScrollReveal>
            <p className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
              <span className="num">05</span><span className="rule" /> Aashirwaad
            </p>
            <h2 className="section-title">Words that <em>bless</em> us</h2>
          </ScrollReveal>
        </div>

        <div className="blessings-grid">
          {blessings.map((b, i) => (
            <ScrollReveal key={b.name} delay={i * 120}>
              <div className="blessing-card">
                <div className="quote-mark">&ldquo;</div>
                <p className="blessing-text">{b.text}</p>
                <div className="blessing-author">
                  <div className="avatar">{b.initial}</div>
                  <div>
                    <div className="name">{b.name}</div>
                    <div className="relation">{b.relation}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== SAVE THE DATE — CTA ===== */}
      <section className="save-date-section" id="save-the-date">
        <ScrollReveal>
          <div className="save-date-card">
            <p className="save-date-eyebrow">Mark your calendar</p>
            <h2 className="save-date-title">Save the Date</h2>
            <p className="save-date-names">Vanshika &amp; Nitin</p>
            <div className="save-date-date">
              <span>30</span>
              <span className="sep" />
              <span>April</span>
              <span className="sep" />
              <span>2026</span>
            </div>
            <p className="save-date-venue">
              Garbhare Village · Greater Noida
              <br />
              Tayyariyan shuru kar dijiye 🛍️
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.6rem" }}>
              <a href="#events" className="btn btn-primary">View All Events <span className="arrow">→</span></a>
              <a href="#rsvp" className="btn btn-ghost">Confirm RSVP</a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== RSVP ===== */}
      <section className="rsvp-section" id="rsvp">
        <div className="rsvp-grid">
          <ScrollReveal>
            <div className="rsvp-intro">
              <p className="eyebrow"><span className="num">06</span><span className="rule" /> RSVP</p>
              <h2>Will you be <em>there?</em></h2>
              <p className="hindi">आपका आना ज़रूरी है</p>
              <p>
                Humare saath is khushi mein shamil hoiye. A few details so we
                can roll out the red carpet, prepare your seat, and make sure
                there&apos;s extra mithai waiting just for you.
              </p>
              <ShareInvitation />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rsvp-card">
              <RSVPForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="footer">
        <ScrollReveal>
          <div className="footer-inner">
            <div className="footer-ornament">❈ ✦ ❈</div>
            <p className="footer-text">
              बारात आएगी, ढोल बजेगा —<br /> आप ज़रूर आइएगा 🙏
            </p>
            <p className="footer-subtext">
              Baraat aayegi, Dhol bajega — Aap zaroor aayein.
            </p>
            <div className="footer-divider" />
            <div className="footer-monogram">V <span style={{ color: "var(--ivory)" }}>&amp;</span> N</div>
            <p className="footer-copyright">
              © 2026 · Vanshika &amp; Nitin · Made with love
            </p>
          </div>
        </ScrollReveal>
      </footer>
    </main>
  );
}
