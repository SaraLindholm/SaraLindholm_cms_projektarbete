import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="info">
            <h5>FRONTEND-UTVECKLARE</h5>
            <h1>
              Hej, välkommen
              <br />
              till min
              <br />
              portfolio
            </h1>
            <p>
              Jag är Sara, en frontend-utvecklare med ett intresse att bygga
              webbplatser och skapa bra användarupplevelser. Här på min
              portfolio kan du kika på några av de projekt jag har jobbat med
              under min utbildningen. Jag kommer fylla på allt eftersom jag
              skapar nya projekt. Om du är intresserad av att samarbeta eller
              bara vill prata kod, tveka inte att höra av dig!
            </p>

            <Link className="btn projekt-btn" href="/projects" >
              Projekt
            </Link>
            <Link
              className="btn linkedin-btn"
              href="https://www.linkedin.com/in/sara-lindholm-169771171/"
            >
              LinkedIn
            </Link>
          </div>
          <div className="image">
            <Image
              src="/img/sara.jpg"
              alt="bild på sara"
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
