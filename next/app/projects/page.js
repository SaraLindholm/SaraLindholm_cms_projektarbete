// import { useRouter } from 'next/router';

import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container-projekt-index">
          <h2>Projekt</h2>
          <hr className="solid" />

          <div className="card mb-3" style="max-width: 60%">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Projektets titel</h5>
                  <p className="card-text">
                    Text som kortfattar förklarar projektet och ev taggar som
                    kan vara aktuella.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Här lägger vi taggarna/kategorierna
                    </small>
                  </p>
                  <a
                    className="btn linkedin-btn"
                    btn
                    type="button"
                    href="projekt-single.html"
                  >
                    Till projektet
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="img/bild3.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card mb-3" style="max-width: 60%">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Projektets titel</h5>
                  <p className="card-text">
                    Text som kortfattar förklarar projektet och ev taggar som
                    kan vara aktuella.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Här lägger vi taggarna/kategorierna
                    </small>
                  </p>
                  <a
                    className="btn linkedin-btn"
                    btn
                    type="button"
                    href="projekt-single.html"
                  >
                    Till projektet
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="img/bild2.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card mb-3" style="max-width: 60%">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Projektets titel</h5>
                  <p className="card-text">
                    Text som kortfattar förklarar projektet och ev taggar som
                    kan vara aktuella.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Här lägger vi taggarna/kategorierna
                    </small>
                  </p>
                  <a
                    className="btn linkedin-btn"
                    btn
                    type="button"
                    href="projekt-single.html"
                  >
                    Till projektet
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <Image
                  src="img/bild1.png"
                  className="img-fluid rounded-end"
                  alt="..."
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
