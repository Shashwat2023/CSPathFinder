import { T } from "../theme";

export default function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "6px 16px",
        borderRadius: 20,
        background: "rgba(79,140,255,0.1)",
        border: "1px solid rgba(79,140,255,0.25)",
        fontSize: 12,
        color: T.blue,
        marginBottom: 12,
        fontWeight: 600
      }}
    >
      {children}
    </div>
  );
}