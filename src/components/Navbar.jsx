import { T } from "../theme";

export default function Navbar({ page, nav }) {
  const links = ["home", "domains", "compare", "quiz", "about"];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <div style={{ fontWeight: 700 }}>CS PathFinder</div>

      <div style={{ display: "flex", gap: 20 }}>
        {links.map(l => (
          <button
            key={l}
            onClick={() => nav(l)}
            style={{
              background: "none",
              border: "none",
              color: page === l ? T.blue : T.text2,
              cursor: "pointer"
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}