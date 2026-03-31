import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiHeart,
  FiShield,
  FiUserCheck,
  FiUsers
} from "react-icons/fi";

function Home() {
  const heroImages = [
    {
      src: "/images/hero.png",
      alt: "Home healthcare nurse assisting a patient",
      label: "Home Care"
    },
    {
      src: "/images/intravanous.png",
      alt: "Intravenous treatment at home",
      label: "IV Therapy"
    },
    {
      src: "/images/inject.png",
      alt: "Clinical injection service",
      label: "Injection"
    },
    {
      src: "/images/ecg.png",
      alt: "ECG monitoring at home",
      label: "ECG"
    },
    {
      src: "/images/blood.png",
      alt: "Lab blood testing service",
      label: "Lab Test"
    },
    {
      src: "/images/phy.png",
      alt: "Physiotherapy support at home",
      label: "Physiotherapy"
    },
    {
      src: "/images/xray.png",
      alt: "Portable X-ray imaging service",
      label: "X-Ray"
    }
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  const highlights = [
    {
      title: "Specialized Nurses At Home",
      description: "Certified nursing support for post-operative care, injections, IV support, and chronic condition management.",
      icon: <FiUserCheck className="icon" />
    },
    {
      title: "Doctor-Led Care Coordination",
      description: "Structured home visits with clear clinical reporting and coordinated treatment follow-up.",
      icon: <FiFileText className="icon" />
    },
    {
      title: "Rapid Visit Scheduling",
      description: "Quick booking flow for families who need dependable care without repeated phone follow-ups.",
      icon: <FiClock className="icon" />
    }
  ];

  const trustPoints = [
    {
      title: "Experienced Professionals",
      description: "Nurses, attendants, and therapy partners selected for clinical discipline and patient communication.",
      icon: <FiShield className="icon" />
    },
    {
      title: "Personalized Care Plans",
      description: "Service visits shaped around mobility, diagnosis, recovery stage, and household routines.",
      icon: <FiHeart className="icon" />
    },
    {
      title: "Family-Centered Support",
      description: "Clear updates and visit expectations so families always know what happens next.",
      icon: <FiUsers className="icon" />
    }
  ];

  return (
    <main className="site-wrapper">
      <div className="page-stack">
        <section className="hero">
          <div className="hero-content fade-up">
            <div className="eyebrow">
              <FiActivity className="icon" />
              Home Visit Services
            </div>
            <h1>Expert Home Healthcare Designed Like a Premium Care Platform</h1>
            <p>
              This landing page now focuses on trust, convenience, and hospital-grade service
              presentation so families feel confident booking care at home.
            </p>

            <div className="hero-actions">
              <Link to="/appointment" className="btn btn-light">
                <FiArrowRight className="icon" />
                Book Home Visit
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-panel fade-up">
            <div className="hero-card hero-image-card">
              <img
                key={heroImages[activeImage].src}
                className="hero-photo hero-photo-animated"
                src={heroImages[activeImage].src}
                alt={heroImages[activeImage].alt}
              />
              <div className="hero-image-overlay">
                <span className="hero-image-badge">{heroImages[activeImage].label}</span>
                <div className="hero-dots">
                  {heroImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      className={index === activeImage ? "hero-dot active" : "hero-dot"}
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show ${image.label} image`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-card">
              <h3>Care delivered to your doorstep</h3>
              <p>
                From nursing procedures to diagnostics and rehabilitation support, your homecare
                brand now presents services in a more credible, polished healthcare format.
              </p>
              <div className="hero-list">
                <div className="hero-list-item">
                  <FiCheckCircle className="icon" />
                  Verified clinical staff
                </div>
                <div className="hero-list-item">
                  <FiCheckCircle className="icon" />
                  Structured service categories
                </div>
                <div className="hero-list-item">
                  <FiCheckCircle className="icon" />
                  Fast appointment conversion
                </div>
              </div>
            </div>

            <div className="hero-card">
              <h3>What this redesign emphasizes</h3>
              <p>
                Cleaner hierarchy, stronger trust cues, large healthcare hero sections, and card-based
                service browsing similar to the reference application.
              </p>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card fade-up">
            <p className="stat-value">24/7</p>
            <p className="stat-label">Care Coordination</p>
          </article>
          <article className="stat-card fade-up">
            <p className="stat-value">12+</p>
            <p className="stat-label">Popular Home Services</p>
          </article>
          <article className="stat-card fade-up">
            <p className="stat-value">2 Hr</p>
            <p className="stat-label">Fast Visit Window</p>
          </article>
          <article className="stat-card fade-up">
            <p className="stat-value">100%</p>
            <p className="stat-label">Patient-Focused Planning</p>
          </article>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2 className="section-title">Healthcare services presented with stronger trust and clarity</h2>
            <p className="section-subtitle">
              This layout relies on clear categories, strong reassurance, and instant booking pathways
              to give your React app a more polished healthcare feel.
            </p>
          </div>

          <div className="feature-grid">
            {highlights.map((item) => (
              <article className="service-card fade-up" key={item.title}>
                <div className="service-icon">{item.icon}</div>
                <span className="service-tag">Home Visit</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2 className="section-title">Why families feel safer choosing this experience</h2>
            <p className="section-subtitle">
              The reference site uses reassurance as a design tool. These cards mirror that pattern
              with a cleaner, more premium presentation.
            </p>
          </div>

          <div className="trust-strip">
            {trustPoints.map((item) => (
              <article className="trust-card fade-up" key={item.title}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
