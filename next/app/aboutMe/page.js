// import { useRouter } from 'next/router';

import { getAboutItems } from "@/lib/api";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { notFound } from "next/navigation";

export default async function About() {
  const aboutItem = await getAboutItems();
  console.log("aboutItem:", aboutItem);

  if (!aboutItem) {
    notFound();
  }
  return (
    <>
      <Navbar />
      <main>
        <div className="container-om-mig">
          <h2>{aboutItem[0].title}</h2>
          <div className="cardd mb-3">
            <div className="card-container">
              <div id="card-om-mig-text">{aboutItem[0].introText}</div>
              <div className="card-body">
                <h4>{aboutItem[0].underrubrik}</h4>
                <h6>{aboutItem[0].skola}</h6>
                <h6>{aboutItem[0].utbildning}</h6>
                <ul>
                  {aboutItem[0].utbList?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h6>{aboutItem[0].skola2}</h6>
                <h6>{aboutItem[0].utbildning2}</h6>
                <ul>
                  {aboutItem[0].utbList2?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h6>{aboutItem[0].skola3}</h6>
                <ul>
                  {aboutItem[0].utbList3?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h6>Komvux Karlshamn</h6>
                <h6>Omvårdnadsutbildning, Undersköterska 2008-2009</h6>
              </div>
              <div className="card-body">
                <h4>{aboutItem[0].underrubrik2}</h4>
                <h6>Utvecklare Predicare</h6>
                <h6>LIA Aug - Okt 2024</h6>
                <ul>
                  <li>
                    Jobbar i utvecklingsteamet och hjälper bygga upp clientens
                    UI med bland annat i18next samt bygger end2end tester med
                    PlayWright.
                  </li>
                </ul>
                <h6>Elevassistent</h6>
                <h6>Göteborg stad, Partille kommun</h6>
                <h6>Mars 2022-nuvarande (Tjänstledig 100% sedan Jan 2024)</h6>
                <ul>
                  <li>
                    Är ett stöd i elevernas utbildning för att främja inlärning
                    och trivsel i skol- och fritidsmiljö.
                  </li>

                  <li>
                    Producerar undervisningsmaterial, och är ansvarig för
                    Teknikutbildning för fritidshem.
                  </li>
                </ul>
                <h6>Boendestödjare</h6>
                <h6>Humana LSS</h6>
                <h6>November 2018-Mars 2022</h6>
                <ul>
                  <li>
                    Arbetar med människor med funktionsvariationer för att
                    säkerställa deras självständighet och välbefinnande i deras
                    boendemiljö.
                  </li>
                  <li>
                    Ger praktiskt och emotionellt stöd samt hjälp med vardagliga
                    aktiviteter.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
