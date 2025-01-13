import {
  getAllProjects,
  getCategoryItems,
  getFilteredProjects,
} from "@/lib/api";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default async function filteredProjects() {
  const allProjects = await getAllProjects();
  console.log("allProjects:", allProjects);

  // const filteredProject = await getFilteredProjects();

  const query = await getFilteredProjects();
  const filteredProject = query?.data?.categoryCollection?.items || [];
  console.log("filteredProject2:", query?.data?.categoryCollection);

  filteredProject.forEach((category) => {
    console.log(`Kategori: ${category.title}`);

    // Hämta projekten kopplade till denna kategori
    const projects = category?.linkedFrom?.projectCollection?.items || [];

    // Mappa ut varje projekt
    projects.forEach((project) => {
      console.log(`Projektets titel: ${project.title}`);
      console.log(`Projektets slug: ${project.slug}`);
      console.log(`Projektets beskrivning: ${project.summary}`);
      console.log(`Publiceringsdatum: ${project.date}`);
      console.log(`Bildens URL: ${project.projectImage?.url}`);
    });
  });

  const allCategories = await getCategoryItems();
  console.log("allCategories:", allCategories);

  return (
    // kan filteringen vara något i stil med at if category.name === category2.name { return map av projekt med den kategorin}?
    <>
      <Navbar />
      <main>
        <div className="container-projekt-index">
          <h2>Kategori: </h2>

          <div className="dropdown">
            <a
              className="btn dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filtrera Projekten
            </a>
            <ul className="dropdown-menu">
              {allCategories.map((item, index) => (
                <li key={index}>
                  <a className="dropdown-item" href={`/category/${item.slug}`}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="solid" />
          <div>
            {filteredProject.map((category) => (
              <div className="card mb-3" key={category.slug}>
                 <h2>Kategori: {category.title}</h2>
                <div className="row g-0">
                {category?.linkedFrom?.projectCollection?.items.map((project) => (
            <div key={project.slug}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p>Publicerat: {new Date(project.date).toLocaleDateString()}</p>
              {project.projectImage && (
                <img
                  src={project.projectImage.url}
                  alt={project.projectImage.description}
                  width={project.projectImage.width}
                  height={project.projectImage.height}
                />
              )}
            </div>
          ))}
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
