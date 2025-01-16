// import { useRouter } from 'next/router';
import { getAllProjects, getProjectItems } from "@/lib/api";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
//Aktuella importer, bland annat funktionerna skapade i api.js

// async funktion som genererar statiska sidor för samtliga projekt baserat på project.slug
export async function generateStaticParams() {
  // hämtar alla projekt från funktionen och returnerar en liusta med alla projekts slugs
  const allProjects = await getAllProjects();
  return allProjects.map((project) => ({
    slug: project.slug,
    //returnerar samtliga slug som en parameter för att visa sidor dynamiskt/rutt
  }));
}

export default async function Project({ params }) {
  const singleProject = await getProjectItems(params.slug);
  //hämtar ett specifikt projekt baserat på dess slug

  if (!singleProject) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="container-projekt-single">
          <h2>Projekt</h2>
          <hr className="solid" />

          <div className="card mb-3">
            <div className="card-body">
              <h5>{singleProject[0].title}</h5>

              <small
                className="text-body-secondary"
                style={{
                  backgroundColor: "rgb(255, 240, 228)",
                  padding: "5px",
                }}
              >
                <p className="card-text">
                  {singleProject[0].category2Collection.items.map(
                    (item, index) => (
                      <span className="category-item" key={index}>
                        {item.title}
                      </span>
                    )
                  )}
                </p>
              </small>
              <div>
                {singleProject[0].mainText.json.content.map((item, index) => (
                  <p className="card-text" key={index}>
                    {item.content[0]?.value}
                  </p>
                ))}
              </div>
              <p className="card-text">
                {new Date(singleProject[0].date).toLocaleDateString("sv-SE")}
              </p>
            </div>
          </div>
          <div className="multi-image">
            {singleProject[0].multipleImagesCollection?.items.map(
              (item, index) => (
                <Image
                  key={index}
                  src={item.url}
                  className="rounded img-fluid"
                  alt={item.description || "Bild på projektet"}
                  width={800}
                  height={800}
                ></Image>
              )
            )}
          </div>

          <div>
            <Link className="btn projekt-btn" href="/projects">
              Tillbaka till projekten
            </Link>
            <Link className="btn linkedin-btn" href="" target="_blank">
              Kika vidare på projektet
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
