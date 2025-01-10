// import { useRouter } from 'next/router';
import { getContactItems } from "@/lib/api";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Contact() {
  const contactItem = await getContactItems();
  console.log("contactItem:", contactItem[0]);

  if (!contactItem) {
    notFound();
  }
  return (
    <>
      <Navbar />
      <main>
        <div id="container-contact">
          <h2>{contactItem[0].title}</h2>
          <div className="info-contact">
            <div className="image-contact">
              <Image
                src={contactItem[0].imageStartpage.url}
                alt={
                  contactItem[0].imageStartpage.description || "Bild på Sara"
                }
                width={500}
                height={500}
              />
            </div>
            <div id="text-contact">
              <h5>{contactItem[0].introText}</h5>
              <p>{contactItem[0].mainText.json.content[0].content[0].value}</p>
              <ul className="contact">
                <li>
                  <Link href={contactItem[0].externalLink} target="_blank">
                    LinkedIn<i className="fa-brands fa-linkedin fa-2x"></i>
                  </Link>
                </li>
                <li>
                  <Link href={contactItem[0].externalLink2} target="_blank">
                    GitHub<i className="fa-brands fa-github fa-2x"></i>
                  </Link>
                </li>

                <li>
                  <Link href={contactItem[0].externalLink3} target="_blank">
                    Mail<i className="fa-solid fa-envelope fa-2x"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn projekt-btn" href={`/projects/`}>
            {/* TODO få länken att fungera */}
            Projekt
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
