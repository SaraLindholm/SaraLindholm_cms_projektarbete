// import { useRouter } from 'next/router';
import { getAllProjects, getProjectItems } from "@/lib/api";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allProjects = await getAllProjects();
  console.log("Generated params:", allProjects);
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}
export default async function Project({ params }) {
  console.log("Fetching project with slug:", params.slug);
  const singleProject = await getProjectItems(params.slug);
  console.log("singelProject:", singleProject);

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
          <div>
            <Link className="btn linkedin-btn" href="/projects" type="button">
              Tillbaka till projekten
            </Link>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5>{singleProject[0].title}</h5>
              <p className="card-text">
                <small
                  className="text-body-secondary"
                  style={{
                    backgroundColor: "rgb(255, 240, 228)",
                    padding: "5px",
                  }}
                >
                  {singleProject[0].category}
                </small>
              </p>
              <p className="card-text">{singleProject[0].date}</p>

              <div>
                {singleProject[0].mainText.json.content.map((item, index) => (
                  <p className="card-text" key={index}>
                    {item.content[0]?.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="single-image">
            {singleProject[0].multipleImagesCollection?.items.map(
              (item, index) => (
                <Image
                  key={index}
                  src={item.url}
                  className="rounded img-fluid"
                  alt={item.description || "Bild på projektet"}
                  width={500}
                  height={500}
                ></Image>
              )
            )}
          </div>
          <div>
            <Link className="btn linkedin-btn" href="#" type="button">
              Till publicerat projekt
            </Link>
          </div>
          {/* TODO. lista ut varför klickytan på knappen bara är dess ytterkant? */}
        </div>
      </main>
      <Footer />
    </>
  );
}
