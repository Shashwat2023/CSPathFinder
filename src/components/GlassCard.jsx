import { useRef, useState, useCallback } from "react";
import { T } from "../theme";

export default function GlassCard({ children, style = {}, onClick, hoverGlow }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const enter = useCallback(() => setHover(true), []);
  const leave = useCallback(() => setHover(false), []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        background: T.surf,
        border: "1px solid " + (hover && hoverGlow ? hoverGlow : T.surfBorder),
        borderRadius: 20,
        padding: 20,
        backdropFilter: "blur(20px)",
        transition: "all 0.25s",
        cursor: onClick ? "pointer" : "default",
        ...style
      }}
    >
      {children}
    </div>
  );
}