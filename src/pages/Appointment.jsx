import { useState } from "react";
import { FiCalendar, FiCheckCircle, FiClock, FiPhoneCall } from "react-icons/fi";

function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted. We will contact you shortly.");
    setForm({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
  };

  return (
    <main className="site-wrapper">
      <div className="page-stack">
        <section className="page-hero fade-up">
          <div className="eyebrow" style={{ background: "#eef7ff", color: "#0069b4" }}>
            <FiCalendar className="icon" />
            Book A Home Visit
          </div>
          <h1>Appointment flow redesigned for a cleaner healthcare booking experience</h1>
          <p>
            This form now feels more like a professional service intake page, similar to the reference
            site’s conversion-focused booking sections.
          </p>
        </section>

        <section className="contact-grid">
          <article className="info-card fade-up">
            <h3>Before you book</h3>
            <p>
              Share the visit type, preferred date, and any recovery notes so the care team can prepare
              the right professional and equipment.
            </p>

            <div className="bullet-list">
              <div className="bullet-item">
                <FiCheckCircle className="icon" />
                <span><strong>Certified staff allocation</strong> based on the selected service.</span>
              </div>
              <div className="bullet-item">
                <FiClock className="icon" />
                <span><strong>Preferred visit window</strong> for home procedures and diagnostics.</span>
              </div>
              <div className="bullet-item">
                <FiPhoneCall className="icon" />
                <span><strong>Call confirmation</strong> to verify address and visit readiness.</span>
              </div>
            </div>
          </article>

          <section className="form-card fade-up">
            <h2 className="section-title">Schedule your appointment</h2>
            <p className="section-subtitle">
              Choose the service and your ideal timing. We will confirm the request after review.
            </p>

            <form onSubmit={handleSubmit} className="form-grid">
              <input
                className="form-field"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
              <input
                className="form-field"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
              <select
                className="form-field"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select service</option>
                <option value="Injection">Clinical Injection</option>
                <option value="IV">Intravenous Therapy</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="ECG">ECG Monitoring</option>
                <option value="Lab Test">Lab Testing</option>
              </select>
              <input
                className="form-field"
                name="date"
                value={form.date}
                onChange={handleChange}
                type="date"
                required
              />
              <input
                className="form-field"
                name="time"
                value={form.time}
                onChange={handleChange}
                type="time"
                required
              />
              <textarea
                className="form-field full-span"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="5"
                placeholder="Additional notes about patient condition, mobility, or equipment needs"
              />
              <button type="submit" className="btn full-span">Confirm Appointment</button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Appointment;
