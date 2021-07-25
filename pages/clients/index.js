import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "max", name: "max" },
    { id: "manu", name: "manu" },
  ];
  return (
    <div>
      <h1>클라이언트 페이지</h1>
      <ul>
        {clients.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/clients/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
