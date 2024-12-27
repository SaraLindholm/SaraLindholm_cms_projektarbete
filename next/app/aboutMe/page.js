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
          <h2>Sara Lindholm</h2>
          <div className="cardd mb-3">
            <div className="card-container">
              <div id="card-om-mig-text">
                Info-text om mig som kan läggas till senare
              </div>
              <div className="card-body">
                <h4>Mina utbildningar</h4>
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
                {workItem.map((arbete) => (
                  <div key={arbete.slug}>
                    {/* <h6>{arbete.title}</h6> */}
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

