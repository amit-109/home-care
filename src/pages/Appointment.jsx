import { useState } from "react";
import { FiCalendar, FiCheckCircle, FiClock, FiKey, FiPhoneCall, FiSave, FiUserPlus } from "react-icons/fi";

function Appointment() {
  const createSimplePassword = () => `care${Math.floor(1000 + Math.random() * 9000)}`;
  const supportedAreas = [
    "Moolchand",
    "Lajpat Nagar",
    "Defence Colony",
    "South Extension I",
    "South Extension II"
  ];

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    age: "",
    gender: "Male",
    serviceArea: "Moolchand",
    address: "",
    diagnosis: "",
    serviceType: "Intravenous (IV)",
    assignedNurse: "Sarah Mitchell",
    status: "Active",
    admissionDate: "",
    password: createSimplePassword(),
    notes: ""
  });
  const [locationError, setLocationError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "serviceArea") {
      setLocationError("");
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!supportedAreas.includes(form.serviceArea)) {
      setLocationError("Service is not available in this location right now.");
      return;
    }

    alert("Patient registration submitted successfully.");
    setForm({
      fullName: "",
      phone: "",
      age: "",
      gender: "Male",
      serviceArea: "Moolchand",
      address: "",
      diagnosis: "",
      serviceType: "Intravenous (IV)",
      assignedNurse: "Sarah Mitchell",
      status: "Active",
      admissionDate: "",
      password: createSimplePassword(),
      notes: ""
    });
  };

  return (
    <main className="site-wrapper">
      <div className="page-stack">
        <section className="page-hero fade-up">
          <div className="eyebrow" style={{ background: "#eef7ff", color: "#0069b4" }}>
            <FiCalendar className="icon" />
            Patient Registration
          </div>
          <h1>Patient registration details</h1>
          <p>
            Add patient information clearly before assigning care services, login access, nurse
            details, and admission instructions.
          </p>
        </section>

        <section className="contact-grid">
          <article className="info-card fade-up">
            <h3>Before you submit</h3>
            <p>
              Complete the patient profile carefully so nursing staff can prepare the right care plan,
              service type, and onboarding details.
            </p>

            <div className="bullet-list">
              <div className="bullet-item">
                <FiCheckCircle className="icon" />
                <span><strong>Patient identification</strong> with name, phone, age, and gender.</span>
              </div>
              <div className="bullet-item">
                <FiClock className="icon" />
                <span><strong>Care assignment details</strong> like service type, status, and admission date.</span>
              </div>
              <div className="bullet-item">
                <FiPhoneCall className="icon" />
                <span><strong>Condition notes</strong> to help the assigned nurse prepare properly.</span>
              </div>
              <div className="bullet-item">
                <FiCheckCircle className="icon" />
                <span><strong>Delhi service areas only</strong> Moolchand, Lajpat Nagar, Defence Colony, South Extension I, and South Extension II.</span>
              </div>
            </div>
          </article>

          <section className="form-card patient-form-card fade-up">
            <div className="patient-form-header">
              <div>
                <h2 className="section-title"> Appointment Form</h2>
                <p className="section-subtitle">
                  Enter the patient and care details in one clean registration form.
                </p>
              </div>
              <div className="patient-form-badge">
                <FiUserPlus className="icon" />
                Registration
              </div>
            </div>

            <form onSubmit={handleSubmit} className="patient-form-layout">
              <div className="form-section-title full-span">Basic Information</div>

              <label className="field-group full-span">
                <span className="field-label">Full Name *</span>
                <input
                  className="form-field material-field"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </label>

              <label className="field-group full-span">
                <span className="field-label">Phone Number</span>
                <input
                  className="form-field material-field"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 8800193206"
                />
              </label>

              <div className="field-group full-span">
                <span className="field-label">Password</span>
                <div className="inline-field-action">
                  <input
                    className="form-field material-field"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Generated password"
                    readOnly
                  />
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setForm({ ...form, password: createSimplePassword() })}
                  >
                    <FiKey className="icon" />
                    Generate
                  </button>
                </div>
              </div>

              <label className="field-group">
                <span className="field-label">Age *</span>
                <input
                  className="form-field material-field"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="65"
                  required
                />
              </label>

              <label className="field-group">
                <span className="field-label">Gender</span>
                <select
                  className="form-field material-field"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="field-group full-span">
                <span className="field-label">Service Area *</span>
                <select
                  className="form-field material-field"
                  name="serviceArea"
                  value={form.serviceArea}
                  onChange={handleChange}
                  required
                >
                  {supportedAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                  <option value="Other">Other Location</option>
                </select>
              </label>

              <label className="field-group full-span">
                <span className="field-label">Address</span>
                <input
                  className="form-field material-field"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House number, street, landmark..."
                />
              </label>

              {locationError ? (
                <div className="location-alert full-span">{locationError}</div>
              ) : (
                <div className="location-success full-span">
                  Services are currently available only in: {supportedAreas.join(", ")}.
                </div>
              )}

              <div className="form-section-title full-span">Clinical Information</div>

              <label className="field-group full-span">
                <span className="field-label">Diagnosis / Condition *</span>
                <input
                  className="form-field material-field"
                  name="diagnosis"
                  value={form.diagnosis}
                  onChange={handleChange}
                  placeholder="e.g. Post-surgery recovery, Diabetes Type 2"
                  required
                />
              </label>

              <label className="field-group full-span">
                <span className="field-label">Service Type</span>
                <select
                  className="form-field material-field"
                  name="serviceType"
                  value={form.serviceType}
                  onChange={handleChange}
                >
                  <option value="Intravenous (IV)">Intravenous (IV)</option>
                  <option value="Clinical Injection">Clinical Injection</option>
                  <option value="ECG Monitoring">ECG Monitoring</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Lab Testing">Lab Testing</option>
                  <option value="X-Ray at Home">X-Ray at Home</option>
                </select>
              </label>

              <div className="form-section-title full-span">Care Assignment</div>

              <label className="field-group">
                <span className="field-label">Assigned Staff</span>
                <select
                  className="form-field material-field"
                  name="assignedNurse"
                  value={form.assignedNurse}
                  onChange={handleChange}
                >
                  <option value="Sarah Mitchell">Rahul Kumar</option>
                  <option value="Anita Joseph">Anita Joseph</option>
                  <option value="Rahul Varma">Rahul Varma</option>
                  <option value="Priya Nair">Priya Nair</option>
                </select>
              </label>

              <label className="field-group">
                <span className="field-label">Status</span>
                <select
                  className="form-field material-field"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>

              <label className="field-group">
                <span className="field-label">Admission Date</span>
                <input
                  className="form-field material-field"
                  name="admissionDate"
                  value={form.admissionDate}
                  onChange={handleChange}
                  type="date"
                />
              </label>

              <div className="field-group field-group-empty" />

              <label className="field-group full-span">
                <span className="field-label">Notes & Messages</span>
                <textarea
                  className="form-field material-field"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Add notes, messages, or care instructions..."
                />
              </label>

              <div className="patient-form-actions full-span">
                <button type="button" className="text-btn">Cancel</button>
                <button type="submit" className="btn">
                  <FiSave className="icon" />
                  Save Patient
                </button>
              </div>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Appointment;
