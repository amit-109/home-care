import { FiClock, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

function Contact() {
  return (
    <main className="site-wrapper">
      <div className="page-stack">
        <section className="page-hero fade-up">
          <div className="eyebrow" style={{ background: "#eef7ff", color: "#0069b4" }}>
            <FiPhoneCall className="icon" />
            Contact & Support
          </div>
          <h1>Reach the care team for appointments, support, and service guidance</h1>
          <p>
            The layout now mirrors the reference more closely with a dedicated contact information block
            beside a cleaner inquiry form.
          </p>
        </section>

        <section className="contact-grid">
          <article className="info-card fade-up">
            <h3>Contact information</h3>
            <p>
              Use these support channels for service questions, booking help, and post-visit coordination.
            </p>

            <div className="contact-list">
              <div className="contact-row">
                <div className="contact-icon"><FiPhoneCall className="icon" /></div>
                <div>
                  <strong><a href="tel:+919876543210">+91 9876543210</a></strong>
                  <p>Care coordinators available for quick assistance.</p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon"><FiMail className="icon" /></div>
                <div>
                  <strong><a href="mailto:support@homecare.com">support@homecare.com</a></strong>
                  <p>Email support for appointments, billing, and clinical follow-up.</p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon"><FiMapPin className="icon" /></div>
                <div>
                  <strong>Service coverage</strong>
                  <p>Major city home visits with expanding diagnostic and nursing support zones.</p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon"><FiClock className="icon" /></div>
                <div>
                  <strong>Support hours</strong>
                  <p>Daily assistance for booking requests and care plan clarification.</p>
                </div>
              </div>
            </div>
          </article>

          <section className="form-card fade-up">
            <h2 className="section-title">Request a callback</h2>
            <p className="section-subtitle">
              Leave your details and our team will help you select the right homecare service.
            </p>

            <input className="form-field" placeholder="Full name" />
            <input className="form-field" placeholder="Phone number" />
            <input className="form-field" placeholder="Email address" type="email" />
            <textarea className="form-field" placeholder="Tell us what kind of support you need" rows="5" />
            <button className="btn">Send Enquiry</button>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Contact;
