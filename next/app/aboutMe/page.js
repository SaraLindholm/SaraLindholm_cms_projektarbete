// import { useRouter } from 'next/router';

import { getAboutItems, getWorkItems, getStartpageItems } from "@/lib/api";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { notFound } from "next/navigation";
//Aktuella importer, bland annat funktionerna skapade i api.js

export default async function About() {
  const aboutItem = await getAboutItems();
  const workItem = await getWorkItems();
  const introText = await getStartpageItems();
  //hämtar data via funktionerna ovan

  if (!aboutItem) {
    notFound();
    //om det inte inte finns data körs 404()
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="container-om-mig">
          <h2>Sara Lindholm</h2>
          <div className="cardd mb-3">
            <div className="card-container">
              <div id="card-om-mig-text">
                <div>
                  {/* går in i mainText som är en richtext/json och mappar sedan igenom den för att skriva ut all data. Hade kunnat hårdkodat ut det men då krävs det att koda om det så fort textens längd/antal paragrafer ändras = inte dynamiskt och fint */}
                  {introText[0].mainText.json.content.map((item, index) => (
                    <p className="card-text" key={index}>
                      {item.content[0]?.value}
                    </p>
                  ))}
                </div>
              </div>
              <div className="card-body">
                <h4>Mina utbildningar</h4>
                {/* Mappar ut utbildningar och dess fields och lite senare på sidan anställningar. samma sak där, hade kunat hårdkoda det då jag vet hur många utbildingar/anställningar som finns men då måste koden ständigt undethållas. */}
                {aboutItem.map((utbildning) => (
                  <div key={utbildning.slug}>
                    <h6>{utbildning.title}</h6>
                    <h6>{utbildning.utbildning}</h6>
                    <h6>{utbildning.tid}</h6>
                    <ul>
                      {utbildning.utbList?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="card-body">
                <h4>Mina Arbetslivserfarenheter</h4>
                {workItem.map((work) => (
                  <div key={work.slug}>
                    <h6>{work.arbetsroll}</h6>
                    <h6>{work.arbetsgivare}</h6>
                    <h6>{work.tid}</h6>
                    <ul>
                      {work.erfarenhet?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
