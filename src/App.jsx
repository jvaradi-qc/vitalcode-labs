import React, { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const response = await fetch("https://formspree.io/f/mqeezvvk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("sent");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="/vitalcode-labs/logo.png"
          alt="VitalCode Labs Logo"
          style={styles.logo}
        />

        <h1 style={styles.title}>VitalCode Labs</h1>
        <p style={styles.subtitle}>Created by John Varadi</p>
        <p style={styles.subtitle}>
          Mobile app development for personal finance, technology, and healthcare IT.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Portfolio</h2>

        <div style={styles.card}>
          <h3>iBudgetBuddy</h3>
          <p>
            A clean, intuitive budgeting app built for speed, clarity, and everyday use.
            Features multiple budgets, recurring transactions, summaries, and a polished UI.
          </p>
          <a
            href="https://github.com/jvaradi-qc/iBudgetBuddy"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What I Build</h2>
        <p style={styles.text}>
          VitalCode Labs creates intuitive, reliable mobile apps designed to make everyday
          life easier. From personal finance tools to healthcare IT utilities, every app
          is built with clarity, performance, and real-world usefulness in mind.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>
        <p style={styles.text}>
          Have a question, suggestion, or collaboration idea? Send us a message below.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p style={styles.success}>Message sent successfully!</p>
          )}
          {status === "error" && (
            <p style={styles.error}>Something went wrong. Please try again.</p>
          )}
        </form>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Support our Work</h2>
        <p style={styles.text}>
          If you'd like to support independent app development, you can donate here:
        </p>
        <a
          style={styles.button}
          href="https://www.paypal.com/donate/?business=P4H293SPRZ2LJ&no_recurring=0&currency_code=USD"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate via PayPal
        </a>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} VitalCode Labs — John Varadi
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Inter, system-ui, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    lineHeight: 1.6,
    color: "#222",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  logo: {
    width: "160px",
    height: "160px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "2.6rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "4px",
  },
  section: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "1.6rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    color: "#444",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginTop: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    display: "inline-block",
    padding: "12px 20px",
    backgroundColor: "#0070f3",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    width: "fit-content",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  footer: {
    marginTop: "60px",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#777",
  },
};
