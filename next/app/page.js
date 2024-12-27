import { getStartpageItems } from "@/lib/api";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home() {
  const startpageItem = await getStartpageItems();
  console.log("startpageItem:", startpageItem[0]);

  if (!startpageItem) {
    notFound();
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="info">
            <h4> {startpageItem[0].title}</h4>
            <h2>{startpageItem[0].introText}</h2>
            <p>{startpageItem[0].mainText.json.content[0].content[0].value}</p>

            <Link className="btn projekt-btn" href="/projects">
              Projekt
            </Link>
            <Link
              className="btn linkedin-btn"
              href={startpageItem[0].externalLink}
              target="_blank"
            >
              LinkedIn
            </Link>
            {console.log(startpageItem[0].externalLink)}
          </div>
          <div className="image">
            <Image
              src={startpageItem[0].imageStartpage.url}
              alt={startpageItem[0].imageStartpage.description || "Bild på Sara"}
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
