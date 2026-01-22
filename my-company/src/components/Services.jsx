function Services() {
  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#ffffff",
        minHeight: "80vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "34px",
          marginBottom: "40px",
          color: "#0f172a",
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3 style={cardTitle}>Technology Consulting</h3>
          <p style={cardText}>
            Expert guidance to help your business leverage modern technology.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitle}>Market Analysis</h3>
          <p style={cardText}>
            Data-driven insights to understand trends and customer behavior.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitle}>Product Development</h3>
          <p style={cardText}>
            From idea to launch, we build products that solve real problems.
          </p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#f1f5f9",
  padding: "20px",
  width: "250px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const cardTitle = {
  marginBottom: "10px",
  color: "#1e293b",
};

const cardText = {
  color: "#475569",
  fontSize: "15px",
};

export default Services;
