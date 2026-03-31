import { FiAward, FiHeart, FiShield, FiUsers } from "react-icons/fi";

function About() {
  const values = [
    {
      title: "Clinical Confidence",
      description: "Protocols, visit discipline, and caregiver accountability modeled around hospital-grade expectations.",
      icon: <FiShield className="icon" />
    },
    {
      title: "Compassionate Service",
      description: "Human-centered care communication for elderly patients, chronic cases, and recovery-focused households.",
      icon: <FiHeart className="icon" />
    },
    {
      title: "Verified Professionals",
      description: "A more premium care brand should communicate caregiver trust and consistent quality from the first screen.",
      icon: <FiUsers className="icon" />
    }
  ];

  return (
    <main className="site-wrapper">
      <div className="page-stack">
        <section className="page-hero fade-up">
          <div className="eyebrow" style={{ background: "#eef7ff", color: "#0069b4" }}>
            <FiAward className="icon" />
            About Our Care Model
          </div>
          <h1>Built to communicate trust, quality, and home-based clinical support</h1>
          <p>
            This updated about page explains safety, professionalism, and patient comfort with
            concise, trust-led sections.
          </p>
        </section>

        <section className="split-banner">
          <article className="info-card fade-up">
            <h3>Our mission</h3>
            <p>
              Deliver accessible and dependable home healthcare that feels organized, reassuring, and
              clinically responsible for every family we serve.
            </p>
            <div className="bullet-list">
              <div className="bullet-item">
                <FiShield className="icon" />
                <span><strong>Safety-first execution</strong> across visits, procedures, and recovery support.</span>
              </div>
              <div className="bullet-item">
                <FiUsers className="icon" />
                <span><strong>Patient and family guidance</strong> with clearer communication at each stage.</span>
              </div>
            </div>
          </article>

          <article className="info-card fade-up">
            <h3>Our approach</h3>
            <p>
              Blend responsive scheduling, verified professionals, and home-friendly service experiences
              so care feels both premium and easy to access.
            </p>
            <div className="bullet-list">
              <div className="bullet-item">
                <FiHeart className="icon" />
                <span><strong>Personalized service selection</strong> based on condition, mobility, and comfort.</span>
              </div>
              <div className="bullet-item">
                <FiAward className="icon" />
                <span><strong>Premium presentation</strong> that makes the brand feel more credible and established.</span>
              </div>
            </div>
          </article>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <h2 className="section-title">What this redesign now communicates better</h2>
            <p className="section-subtitle">
              Stronger healthcare branding is less about decoration and more about visible trust signals.
            </p>
          </div>

          <div className="about-grid">
            {values.map((item) => (
              <article className="card about-card fade-up" key={item.title}>
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

export default About;
