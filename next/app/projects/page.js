import { getAllProjects } from "@/lib/api";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default async function Projects() {
  const allProjects = await getAllProjects();
  console.log("allProjects:", allProjects);
  return (
    <>
      <Navbar />
      <main>
        <div className="container-projekt-index">
          <h2>Projekt</h2>
          <hr className="solid" />
          <div>
            {allProjects.map((project) => (
              <div className="card mb-3" key={project.slug}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <div>
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.summary}</p>
                        <p className="card-text">
                          <small
                            className="text-body-secondary"
                            style={{
                              backgroundColor: "rgb(255, 240, 228)",
                              padding: "5px",
                            }}
                          >
                            {project.category}
                          </small>
                        </p>
                        <Link
                          className="btn linkedin-btn"
                          href={`/project/${project.slug}`}
                        >
                          Till projektet
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <Image
                      src={project.projectImage.url}
                      className="mx-auto rounded"
                      alt="..."
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
