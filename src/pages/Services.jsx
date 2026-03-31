import {
  FiActivity,
  FiClipboard,
  FiDroplet,
  FiMonitor,
  FiRadio,
  FiShield,
  FiZap
} from "react-icons/fi";

function Services() {
  const services = [
    {
      title: "Intravenous Therapy",
      description: "Safe IV fluids and medication administration by trained nurse specialists with observation support.",
      icon: <FiDroplet className="icon" />,
      tag: "Nurse Procedure",
      meta: "At-home infusion support",
      img: "/images/intravanous.png"
    },
    {
      title: "Clinical Injections",
      description: "Pain-aware injection visits for antibiotics, insulin, vitamins, and prescribed follow-up care.",
      icon: <FiZap className="icon" />,
      tag: "Quick Visit",
      meta: "Doctor-prescribed procedures",
      img: "/images/inject.png"
    },
    {
      title: "ECG Monitoring",
      description: "Doorstep ECG monitoring with coordinated reporting support for early cardiac review.",
      icon: <FiMonitor className="icon" />,
      tag: "Diagnostics",
      meta: "On-site device support",
      img: "/images/ecg.png"
    },
    {
      title: "X-Ray at Home",
      description: "Portable imaging arranged for immobile or high-dependency patients needing convenient diagnostics.",
      icon: <FiRadio className="icon" />,
      tag: "Advanced Diagnostics",
      meta: "Digital result delivery",
      img: "/images/xray.png"
    },
    {
      title: "Physiotherapy",
      description: "Rehabilitation planning for recovery, movement confidence, chronic pain, and post-surgery mobility.",
      icon: <FiActivity className="icon" />,
      tag: "Rehab Care",
      meta: "Customized therapy plans",
      img: "/images/phy.png"
    },
    {
      title: "Lab Testing",
      description: "Sample collection and coordinated reporting that makes routine or urgent tests easier at home.",
      icon: <FiClipboard className="icon" />,
      tag: "Pathology",
      meta: "Doorstep sample pickup",
      img: "/images/blood.png"
    }
  ];

  return (
    <main className="site-wrapper">
      <div className="page-stack">
        <section className="page-hero fade-up">
          <div className="eyebrow" style={{ background: "#eef7ff", color: "#0069b4" }}>
            <FiShield className="icon" />
            Our Services
          </div>
          <h1>Homecare services arranged in a clearer healthcare catalog</h1>
          <p>
            The reference design highlights major service buckets first, then leads patients toward
            action. This page now follows that pattern with more structured, premium service cards.
          </p>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2 className="section-title">Popular home visit and diagnostic services</h2>
            <p className="section-subtitle">
              Each card is designed to feel more like a healthcare product tile with a cleaner,
              more trustworthy service discovery experience.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card fade-up">
                {service.img ? (
                  <img
                    className="image-circle"
                    src={service.img}
                    alt={service.title}
                  />
                ) : null}
                <div className="service-icon">{service.icon}</div>
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-meta">
                  <span>{service.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Services;
