export default function DomainDetail({ domain, nav }) {
  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => nav("domains")}>
        Back
      </button>

      <h1>{domain.icon} {domain.title}</h1>
      <p>{domain.shortDesc}</p>

      <h3>Skills</h3>
      <ul>
        {domain.skills.map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}