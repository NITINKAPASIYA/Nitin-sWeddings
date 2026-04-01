"use client";

import { useEffect, useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

/* ===== PETALS ANIMATION ===== */
export function PetalAnimation() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalEmojis = ["🌸", "🌺", "🌼", "💐", "🪷", "✿", "❀"];
    const initialPetals = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 16 + Math.random() * 16,
    }));
    setPetals(initialPetals);
  }, []);

  return (
    <>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </>
  );
}

/* ===== GOLD PARTICLES ===== */
export function GoldParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const pts = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 3 + Math.random() * 5,
      size: 2 + Math.random() * 4,
    }));
    setParticles(pts);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </>
  );
}

/* ===== SCROLL REVEAL ===== */
export function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ===== COUNTDOWN TIMER ===== */
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date("2026-04-30T20:00:00+05:30").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Days", hindi: "दिन" },
    { value: timeLeft.hours, label: "Hours", hindi: "घंटे" },
    { value: timeLeft.minutes, label: "Minutes", hindi: "मिनट" },
    { value: timeLeft.seconds, label: "Seconds", hindi: "सेकंड" },
  ];

  return (
    <div className="countdown-container">
      {items.map((item) => (
        <div key={item.label} className="countdown-item">
          <span className="countdown-number">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="countdown-label">{item.label}</span>
          <span className="countdown-label-hindi">{item.hindi}</span>
        </div>
      ))}
    </div>
  );
}

/* ===== MANDALA SVG ===== */
export function MandalaSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="190" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
      <circle cx="200" cy="200" r="160" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25" />
      <circle cx="200" cy="200" r="130" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
      <circle cx="200" cy="200" r="100" stroke="#C9A84C" strokeWidth="0.5" opacity="0.15" />
      <circle cx="200" cy="200" r="70" stroke="#C9A84C" strokeWidth="0.5" opacity="0.1" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 190 * Math.cos(angle)}
            y2={200 + 190 * Math.sin(angle)}
            stroke="#C9A84C"
            strokeWidth="0.3"
            opacity="0.15"
          />
        );
      })}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = 200 + 120 * Math.cos(angle);
        const cy = 200 + 120 * Math.sin(angle);
        return (
          <circle
            key={`dot-${i}`}
            cx={cx}
            cy={cy}
            r="8"
            stroke="#C9A84C"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
        );
      })}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 200 + 80 * Math.cos(angle);
        const y = 200 + 80 * Math.sin(angle);
        return (
          <path
            key={`petal-${i}`}
            d={`M200,200 Q${200 + 40 * Math.cos(angle - 0.3)},${200 + 40 * Math.sin(angle - 0.3)} ${x},${y} Q${200 + 40 * Math.cos(angle + 0.3)},${200 + 40 * Math.sin(angle + 0.3)} 200,200`}
            stroke="#C9A84C"
            strokeWidth="0.5"
            fill="none"
            opacity="0.15"
          />
        );
      })}
    </svg>
  );
}

/* ===== RSVP FORM ===== */
export function RSVPForm() {
  const [state, handleSubmit] = useForm("mbdpkoaj");

  if (state.succeeded) {
    return (
      <div className="rsvp-success">
        <div className="success-icon">✨🙏✨</div>
        <h3 style={{ fontFamily: "'Yatra One', cursive" }}>आपका धन्यवाद!</h3>
        <p>Aapka Shubh Aagman Swikar Hai! Hum aapka intezaar karenge. 💕</p>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Aapka Naam / Guest Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Enter your name"
          required
          disabled={state.submitting}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <button type="submit" className="rsvp-submit" disabled={state.submitting}>
        {state.submitting ? "Bheja ja raha hai..." : "Submit Presence ✦"}
      </button>
      <p className="form-note">Notifications sent to kumarnitin5814@gmail.com</p>
    </form>
  );
}

/* ===== PERSONALIZED SHARE TOOL ===== */
export function ShareInvitation() {
  const [guestName, setGuestName] = useState("");
  const invitationLink = "https://nitinwedsvanshika.vercel.app/";

  const getWhatsAppLink = () => {
    const message = `Dear ${guestName || "[Guest Name]"},

Mr. & Mrs. Kapasiya invites you to the wedding ceremony of their son *Nitin* with *Vanshika* on *Thursday, 30 April 2026*.

*▶ CLICK BELOW TO VIEW INVITATION ◀*
────────────────────
🔗 https://nitinwedsvanshika.vercel.app/
────────────────────

*Special Note* — Bless the couple by sharing your precious wishes with them via the RSVP form included in the invitation website.`;

    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="share-tool">
      <h3 style={{ fontFamily: "'Yatra One', cursive" }}>Personalize & Share</h3>
      <div className="share-input-group">
        <input
          type="text"
          placeholder="Enter Guest Name (e.g. Jay)"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="share-input"
        />
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button"
        >
          Share on WhatsApp 📲
        </a>
      </div>
      <div className="share-guide">
        <p><strong>💡 Pro Tip for Clean Sharing:</strong></p>
        <p>1. After you click share and paste the link, <strong>WAIT 2 seconds</strong> for the photo preview to appear.</p>
        <p>2. Then, <strong>DELETE the link text</strong> before sending. This leaves only the beautiful invitation box!</p>
      </div>
    </div>
  );
}
