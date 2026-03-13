import { DOMAINS } from "../data/domains";
import DomainCard from "./DomainCard";

export default function DomainGrid({ nav, setDomain }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: 20,
        padding: 40
      }}
    >
      {DOMAINS.map(d => (
        <DomainCard
          key={d.id}
          d={d}
          onClick={() => {
            setDomain(d);
            nav("detail");
          }}
        />
      ))}
    </div>
  );
}