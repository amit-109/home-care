import { useState } from "react";
import { FiCalendar, FiCheckCircle, FiClock, FiPhoneCall, FiSave, FiUserPlus } from "react-icons/fi";

function Appointment() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    age: "",
    gender: "Male",
    address: "",
    diagnosis: "",
    serviceType: "Intravenous (IV)",
    assignedNurse: "Sarah Mitchell",
    status: "Active",
    admissionDate: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Patient registration submitted successfully.");
    setForm({
      fullName: "",
      phone: "",
      age: "",
      gender: "Male",
      address: "",
      diagnosis: "",
      serviceType: "Intravenous (IV)",
      assignedNurse: "Sarah Mitchell",
      status: "Active",
      admissionDate: "",
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
          <h1>Patient registration and booking details</h1>
          <p>
            Add patient information clearly before assigning care services, nurse details, and
            admission instructions.
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
            </div>
          </article>

          <section className="form-card patient-form-card fade-up">
            <div className="patient-form-header">
              <div>
                <h2 className="section-title">Add New Patient</h2>
                <p className="section-subtitle">
                  Enter the booking and care details in one clean registration form.
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
                  placeholder="+91 98765 43210"
                />
              </label>

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
                <span className="field-label">Address</span>
                <input
                  className="form-field material-field"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Search address..."
                />
              </label>

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
                <span className="field-label">Assigned Nurse</span>
                <select
                  className="form-field material-field"
                  name="assignedNurse"
                  value={form.assignedNurse}
                  onChange={handleChange}
                >
                  <option value="Sarah Mitchell">Sarah Mitchell</option>
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
