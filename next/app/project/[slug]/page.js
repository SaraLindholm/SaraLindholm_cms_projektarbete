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
          <div className="card mb-3">
            <div className="card-body">
              <h5>{singleProject[0].title}</h5>
              <p className="card-text">{singleProject[0].summary}</p>
            </div>
          </div>
          <div className="single-image">
            <Image
              src="/img/bild1.png"
              className="rounded img-fluid"
              alt="..."
              width={500}
              height={500}
            />
            <Image
              src="/img/bild1.png"
              className="rounded img-fluid"
              alt="..."
              width={500}
              height={500}
            />
            <Image
              src="/img/bild1.png"
              className="rounded img-fluid"
              alt="..."
              width={500}
              height={500}
            />
          </div>
          <div>
            <a
              className="btn linkedin-btn"
              type="button"
              href="#"
              role="button"
            >
              Till publicerat projekt
            </a>
          </div>
          {/* TODO. lista ut varför knappen inte beter sig som den andra knapppen med samma klass */}
        </div>
      </main>
      <Footer />
    </>
  );
}
