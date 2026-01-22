function About() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#555",
            textAlign: "center",
          }}
        >
          Our company has been providing top-notch services since 1990. We
          specialize in various fields including technology, marketing, and
          consultancy.
        </p>
      </div>
    </div>
  );
}

export default About;
