import ParticleCanvas from "./ParticleCanvas";

export default function Hero({ nav }) {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      <ParticleCanvas />

      <h1 style={{ fontSize: 48 }}>
        Find Your Future in Computer Science
      </h1>

      <button
        onClick={() => nav("domains")}
        style={{
          marginTop: 20,
          padding: "12px 28px",
          borderRadius: 30,
          border: "none",
          cursor: "pointer"
        }}
      >
        Explore Domains
      </button>
    </div>
  );
}