import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
  };

  return (
    <div
      style={{
        height: "100vh", // ✅ full viewport height
        width: "100vw", // ✅ full viewport width
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0f2fe",
        boxSizing: "border-box",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "700px",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0f172a",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Contact Us
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "25px",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "15px",
            backgroundColor: "#0f172a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e293b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0f172a")}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
