import { getStartpageItems } from "@/lib/api";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
//Aktuella importer, bland annat funktionerna skapade i api.js

export default async function Home() {
  const startpageItem = await getStartpageItems();
  //hämtar data via funktionen startpageItem

  if (!startpageItem) {
    notFound();
    //om det inte inte finns data att visas 404()
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="info">
            {/* går in i funktionen och dess index och det första värdet och visar, titel, maintext osv och resten av inneållet  */}
            <h4> {startpageItem[1].title}</h4>
            <h2>{startpageItem[1].introText}</h2>
            <p>{startpageItem[1].mainText.json.content[0].content[0].value}</p>

            <Link className="btn projekt-btn" href="/projects">
              Projekten
            </Link>
            <Link
              className="btn linkedin-btn"
              href={startpageItem[1].externalLink}
              target="_blank"
              // target _blank gör att länken öppnas i ett nytt fönster
            >
              LinkedIn
            </Link>
          </div>
          <div className="image">
            <Image
              src={startpageItem[1].imageStartpage.url}
              alt={
                startpageItem[1].imageStartpage.description || "Bild på Sara"
              }
              // kombination av alt som dynamiskt hämtar description skapad i contentful och som en last resort visar hårdkodad bildtext
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
