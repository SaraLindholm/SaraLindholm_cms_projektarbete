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
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
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
                              display: "inline-block", // Lägg till detta om du vill göra small blockliknande
                            }}
                          >
                            {project.category2Collection.items.map(
                              (item, index) => (
                                <span
                                  className="category-item"
                                  key={index}
                                  style={{ marginRight: "5px" }}
                                >
                                  {item.title}
                                </span>
                              )
                            )}
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
                  <div className="col-md-4 d-flex align-items-center">
                    <Image
                      src={project.projectImage.url}
                      className="mx-auto rounded"
                      alt="..."
                      width={200}
                      height={200}
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
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
