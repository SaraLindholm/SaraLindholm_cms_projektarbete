// import { useRouter } from 'next/router';

import { getAboutItems, getWorkItems } from "@/lib/api";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { notFound } from "next/navigation";

export default async function About() {
  const aboutItem = await getAboutItems();
  console.log("aboutItem:", aboutItem);
  const workItem = await getWorkItems();
  console.log("workItem:", workItem);

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
                <h4>Mina Arbetslivserfarenheter</h4>
                {workItem.map((arbete) => (
                  <div key={arbete.slug}>
                    <h6>{arbete.arbetsroll}</h6>
                    <h6>{arbete.arbetsgivare}</h6>
                    <h6>{arbete.tid}</h6>
                    <ul>
                      <li>{arbete.erfarenhet}</li>
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
