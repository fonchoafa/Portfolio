import React, { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { name, email, subject, message } = formData;
    const subjectLine = subject || `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:fonchoafa@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>

        <div className={styles.contactContent}>
          {/* Left: Info */}
          <div className={styles.contactLeft}>
            <h3 className={styles.contactHeading}>
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className={styles.contactDescription}>
              I'm currently available for freelance work and new opportunities.
              Whether you have a project in mind or just want to connect, I'd
              love to hear from you. Let's create something amazing together!
            </p>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <FiMail className={styles.infoIcon} />
                <span>fonchoafa@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.responseTag}>⚡ Responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className={styles.successBanner}>
                <FiCheckCircle />
                <span>Your mail client should open now. Looking forward to your message!</span>
              </div>
            )}

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <FiUser className={styles.labelIcon} /> Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Foncho Afanwi"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                />
                {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <FiMail className={styles.labelIcon} /> Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                />
                {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry, collaboration, etc."
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <FiMessageSquare className={styles.labelIcon} /> Message *
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              />
              {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submitButton}>
              <FiSend />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
