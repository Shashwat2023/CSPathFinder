import GlassCard from "./GlassCard";

export default function DomainCard({ d, onClick }) {
  return (
    <GlassCard onClick={onClick}>
      <h3>{d.icon} {d.title}</h3>
      <p>{d.shortDesc}</p>
      <strong>{d.salary}</strong>
    </GlassCard>
  );
}