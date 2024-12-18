// import { useRouter } from 'next/router';

import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <>
      <Navbar />
      <main>
        <div id="container-contact">
          <h2>Kontakt</h2>
          <div className="info-contact">
            <div className="image-contact">
              <Image
                src="img/sara.jpg"
                alt="bild på mig"
                width={500}
                height={500}
              />
            </div>
            <div id="text-contact">
              <h5>
                Kul att du vill kontakta mig, nedan finner du kontaktinformation
                till mig.
              </h5>
              <ul className="contact">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sara-lindholm-169771171/">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-envelope fa-2x"></i>
                  </a>
                </li>
              </ul>
              <p>
                - bild - kontaktuppgifter (ex, mail, github, sociala medier)
              </p>
            </div>
          </div>
          - bild - kontaktuppgifter (ex, mail, github, sociala medier)
          <a
            className="btn linkedin-btn"
            type="button"
            href="https://www.linkedin.com/in/sara-lindholm-169771171/"
          >
            Ta mig tillbaka till projekten
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
