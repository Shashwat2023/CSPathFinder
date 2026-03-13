import useInView from "../hooks/useInView";

export default function Reveal({ children }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "0.6s"
      }}
    >
      {children}
    </div>
  );
}