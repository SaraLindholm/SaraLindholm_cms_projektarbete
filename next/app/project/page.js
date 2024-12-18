// import { useRouter } from 'next/router';

import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Project() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container-projekt-single">
          <h2>Projekt</h2>
          <hr className="solid" />
          <div className="card mb-3">
            <div className="card-body">
              <h5>Projektets titel</h5>
              <p className="card-text">
                Hold on. Harry, it said. Its voice was distant and echoing.
                Harry looked at Voldemort ... his wide red eyes were still
                shocked ... he had no more expected this than Harry had . . .
                and, very dimly. Harry heard the frightened yells of the Death
                Eaters, prowling around the edges of the golden dome. .
              </p>
            </div>
          </div>
          <div className="single-image">
            <Image
              src="/img/bild1.png"
              className="rounded img-fluid"
              alt="..."
              width={500}
              height={500}
            />
            <Image
              src="/img/bild1.png"
              className="rounded img-fluid"
              alt="..."
              width={500}
              height={500}
            />
            <Image
              src="/img/bild1.png"
              className="rounded img-fluid"
              alt="..."
              width={500}
              height={500}
            />
          </div>
          <div>
            <a
              className="btn linkedin-btn"
              type="button"
              href="#"
              role="button"
            >
              Till publicerat projekt
            </a>
          </div>
          {/* TODO. lista ut varför knappen inte beter sig som den andra knapppen med samma klass */}
        </div>
      </main>
      <Footer />
    </>
  );
}
