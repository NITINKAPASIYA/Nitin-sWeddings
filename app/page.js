import {
  PetalAnimation,
  GoldParticles,
  ScrollReveal,
  CountdownTimer,
  MandalaSVG,
  RSVPForm,
} from "./components";

const events = [
  {
    emoji: "🎊",
    name: "Lagan & Sagai",
    nameHindi: "लगन और सगाई",
    date: "26 April 2026",
    time: "Evening Celebration",
    venue: "Gul Gardens, Bulandshahr",
    tagline: "Lagan Lagi Re — Ek Shaam Pyaar ke Naam 🎶",
    bg: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    emoji: "💛",
    name: "Haldi Rasam",
    nameHindi: "हल्दी रस्म",
    date: "28 April 2026",
    time: "Morning Ceremony",
    venue: "Home, Bulandshahr",
    tagline: "Haldi ki Raat — Mann mein Khushi, Tan mein Noor ✨",
    bg: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&q=80",
  },
  {
    emoji: "💍",
    name: "Shaadi",
    nameHindi: "शादी",
    date: "30 April 2026",
    time: "Shubh Muhurat",
    venue: "Garbhare Village, Greater Noida",
    tagline: "Saat Pheron ki Pavitra Bela — Ek Naye Safar ki Shuruaat 🙏",
    bg: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&q=80",
    label: "Mehendi & Haldi",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    label: "Wedding Mandap",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    label: "Sangeet Night",
  },
  {
    src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80",
    label: "Marigold Dreams",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    label: "Grand Celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    label: "Eternal Promise",
  },
];

export default function Home() {
  return (
    <main>
      {/* Floating Animations */}
      <PetalAnimation />
      <GoldParticles />

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
            alt="Warm wedding background"
            loading="eager"
          />
        </div>
        <div className="hero-overlay" />
        <MandalaSVG className="hero-mandala hero-mandala-left" />
        <MandalaSVG className="hero-mandala hero-mandala-right" />

        <div className="hero-content">
          <div className="hero-subtitle">
            <span className="ganesha-icon">🪷</span>
            <span className="ganesha-header">|| Shri Ganeshay Namah ||</span>
          </div>

          <p className="invitation-text">You are invited to the wedding of</p>

          <div className="couple-names-container">
            <h1 className="couple-names">Vanshika</h1>
            <div className="couple-and">&amp;</div>
            <h1 className="couple-names">Nitin</h1>
          </div>

          <p className="hero-date" style={{ fontFamily: "'Yatra One', cursive" }}>✦ 30 April 2026 ✦</p>
          <p className="hero-tagline">
            &quot;Do dil mil rahe hain, magar chupke chupke&quot; 💕
          </p>
        </div>

        <div className="scroll-indicator">
          <span>︾</span>
          <span>︾</span>
        </div>
      </section>

      {/* ===== WELCOME SECTION ===== */}
      <section className="welcome-section" id="welcome">
        <ScrollReveal>
          <div className="welcome-ornament">❈ ✦ ❈</div>
          <h2 className="welcome-title" style={{ fontFamily: "'Yatra One', cursive" }}>
            आपका स्वागत है
          </h2>
          <div className="welcome-divider" />
          <p className="welcome-text">
            Aap sabka pyaar bhara swagat hai! Hum dono ki zindagi ka sabse khoobsurat
            lamha aa raha hai, aur hum chahte hain ki aap is khushi mein hamara saath dein.
            <br /><br />
            Yeh website banayi gayi hai taaki aap hamare sabhi jashn ke baare mein jaanein
            — Lagan se lekar Shaadi tak. Aapka ashirwad aur pyaar hi hamari asli daulat hai 🙏
          </p>
          <div className="welcome-divider" />
        </ScrollReveal>
      </section>

      {/* ===== COUNTDOWN SECTION ===== */}
      <section className="countdown-section section" id="countdown">
        <ScrollReveal>
          <h2 className="countdown-title" style={{ fontFamily: "'Yatra One', cursive" }}>
            शादी में कितने दिन बाकी?
          </h2>
          <p className="countdown-subtitle">
            Shaadi ka Countdown — Intezaar ho raha hai mushkil 💍
          </p>
          <CountdownTimer />
        </ScrollReveal>
      </section>

      {/* ===== EVENTS SECTION ===== */}
      <section className="events-section" id="events">
        <ScrollReveal>
          <h2 className="events-title" style={{ fontFamily: "'Yatra One', cursive" }}>
            हमारे जश्न
          </h2>
          <p className="events-subtitle">
            Hamare Celebrations — Ek se badhkar ek! 🎊
          </p>
        </ScrollReveal>

        <div className="events-grid">
          {events.map((event, index) => (
            <ScrollReveal key={event.name} delay={index * 150}>
              <div className="event-card">
                <div
                  className="event-card-bg"
                  style={{ backgroundImage: `url(${event.bg})` }}
                />
                <h3 className="event-name">{event.name}</h3>
                <p
                  className="event-name-hindi"
                  style={{ fontFamily: "'Yatra One', cursive" }}
                >
                  {event.nameHindi}
                </p>
                <div className="event-divider" />
                <p className="event-date" style={{ fontFamily: "'Yatra One', cursive" }}>{event.date}</p>
                <p className="event-time">🕐 {event.time}</p>
                <p className="event-venue">📍 {event.venue}</p>
                <p className="event-tagline">{event.tagline}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== SAVE THE DATE SECTION ===== */}
      <section className="save-date-section section" id="save-the-date">
        <ScrollReveal>
          <div className="save-date-card">
            <div className="mandala-border" />
            <div className="mandala-border-inner" />
            <div className="save-date-ornament">✦ ❈ ✦</div>
            <h2
              className="save-date-title"
              style={{ fontFamily: "'Yatra One', cursive" }}
            >
              Save the Date
            </h2>
            <p className="save-date-names">Vanshika &amp; Nitin</p>
            <p className="save-date-date" style={{ fontFamily: "'Yatra One', cursive" }}>30 ∙ April ∙ 2026</p>
            <p className="save-date-venue">
              📍 Garbhare Village, Greater Noida
              <br />
              Tayyariyan shuru kar dijiye! 🛍️
            </p>
            <a href="#events" className="save-date-cta">
              View All Events ✦
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="gallery-section" id="gallery">
        <ScrollReveal>
          <h2 className="gallery-title" style={{ fontFamily: "'Yatra One', cursive" }}>
            खुशियों की झलकियाँ
          </h2>
          <p className="gallery-subtitle">
            Glimpses of Celebration ✨
          </p>
        </ScrollReveal>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <ScrollReveal key={img.label} delay={index * 100}>
              <div className="gallery-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-label">{img.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== RSVP SECTION ===== */}
      <section className="rsvp-section section" id="rsvp">
        <ScrollReveal>
          <div className="rsvp-container">
            <h2 className="rsvp-title" style={{ fontFamily: "'Yatra One', cursive" }}>
              आरक्षण / RSVP
            </h2>
            <p className="rsvp-subtitle">
              Humare saath is khushi mein shamil hoiye! <br />
              Please let us know if you are coming.
            </p>
            <RSVPForm />
          </div>
        </ScrollReveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="footer">
        <ScrollReveal>
          <div className="footer-ornament">❈ ✦ ❈</div>
          <p className="footer-text" style={{ fontFamily: "'Yatra One', cursive" }}>
            बारात आएगी, ढोल बजेगा —<br /> आप ज़रूर आइएगा 🙏
          </p>
          <p className="footer-subtext">
            Baraat aayegi, Dhol bajega — Aap zaroor aayein!
          </p>
          <div className="footer-divider" />
          <p className="footer-subtext">
            Made with ❤️ for Vanshika &amp; Nitin&apos;s special day
          </p>
          <div className="footer-hearts">💕 💐 💕</div>
          <p className="footer-copyright">
            © 2026 Vanshika &amp; Nitin Ki Shaadi
          </p>
        </ScrollReveal>
      </footer>
    </main>
  );
}
