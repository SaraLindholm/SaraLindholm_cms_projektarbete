import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="row g-0">
        <h1>404 - Sidan finns inte</h1>
        <p>
          Den sidan du letar efter finns inte. Kontrollera URL:en eller gå
          tillbaka till startsidan.
        </p>
        <p>
          {" "}
          <Link className="btn linkedin-btn" href={`/`}>
            Till startsidan
          </Link>
        </p>
      </div>
    </>
  );
}
