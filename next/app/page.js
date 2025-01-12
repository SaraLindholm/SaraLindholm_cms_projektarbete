import { getStartpageItems } from "@/lib/api";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home() {
  const startpageItem = await getStartpageItems();
  console.log("startpageItem:", startpageItem[1]);

  if (!startpageItem) {
    notFound();
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="info">
            <h4> {startpageItem[1].title}</h4>
            <h2>{startpageItem[1].introText}</h2>
            <p>{startpageItem[1].mainText.json.content[0].content[0].value}</p>

            <Link className="btn projekt-btn" href="/projects">
              {/* TODO fixa dynamiska länkar överallt */}
              Projekt
            </Link>
            <Link
              className="btn linkedin-btn"
              href={startpageItem[1].externalLink}
              target="_blank"
            >
              LinkedIn
            </Link>
            {console.log(startpageItem[1].externalLink)}
          </div>
          <div className="image">
            <Image
              src={startpageItem[1].imageStartpage.url}
              alt={
                startpageItem[1].imageStartpage.description || "Bild på Sara"
              }
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
