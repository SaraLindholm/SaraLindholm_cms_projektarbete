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
            {/* <Link href="/projects" className="btn projekt-btn">
            Projekt
          </Link> */}
            {/* <a
            className="btn linkedin-btn"
            type="button"
            href="https://www.linkedin.com/in/sara-lindholm-169771171/"
          >
            LinkedIn
          </a> */}
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
      {/*
    ´<script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz4fnFO9gyb4LvFwLNAnrflxRZ6Oa7u4Jy+Rr3KbtCQlrz1sy2QbK41zjG"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-0L0pkqgDe3a+v5Yb7Bl8Tv9Z8Xk5Q4nC1C6Zjyy9EvrmQXhxV1N85CHKnLDrb3kc"
      crossorigin="anonymous"
    ></script>
    <script type="text/javascript" src="js/script.js"></script>´ */}
    </>
  );
}
