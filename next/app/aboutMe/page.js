// import { useRouter } from 'next/router';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container-om-mig">
          <h2>Sara Lindholm</h2>
          <div className="cardd mb-3">
            <div className="card-container">
              <div id="card-om-mig-text">
                Den 2-åriga utbildningen är utformad efter arbetslivets behov av
                kvalificerad yrkeskompetens och ger ett helhetsbegrepp om
                webbutveckling med fokus på HTML, CSS och JavaScript. Under
                utbildningen lär vi oss att jobba i team i agila struktur
              </div>
              <div className="card-body">
                <h4>Utbildning</h4>
                <h6>IT-Högskolan</h6>
                <h6>Frontendutveckling 2023- maj 2025</h6>
                <ul>
                  <li>
                    Den 2-åriga utbildningen är utformad efter arbetslivets
                    behov av kvalificerad yrkeskompetens och ger ett
                    helhetsbegrepp om webbutveckling med fokus på HTML, CSS och
                    JavaScript.
                  </li>
                  <li>
                    Under utbildningen lär vi oss att jobba i team i agila
                    strukturer så som scrum.
                  </li>
                </ul>
                <h6>Blekinge tekniska högskola</h6>
                <h6>Fil.kandidat-examen, Psykologi 2015</h6>
                <ul>
                  <li>
                    Läser om ledarskap och kommunikation med fokus på ledarskap
                    och grupper
                  </li>
                </ul>
                <h6>Högskolan i Kristianstad</h6>
                <ul>
                  <li>Sociologi 30 hp 2010</li>
                  <li>Psykologi 7.5 hp 2010</li>
                </ul>
                <h6>Komvux Karlshamn</h6>
                <h6>Omvårdnadsutbildning, Undersköterska 2008-2009</h6>
              </div>
              <div className="card-body">
                <h4>Arbetslivserfarenhet</h4>
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
