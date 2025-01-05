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

              <p className="card-text">
                {singleProject[0].mainText.json.content[0].content[0].value}
              </p>
            </div>
          </div>
          <div className="single-image">
            <Image
              src={singleProject[0].projectImage.url}
              className="rounded img-fluid"
              alt="single-image of the project"
              width={500}
              height={500}
            />

            {singleProject[0].multipleImages?.map((item, index) => (
              <Image
                src={item.url}
                className="rounded img-fluid"
                alt="multiple images of the project"
                width={500}
                height={500}
                key={index}
              >
                {item}
              </Image>
            ))}

            {/* <Image
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
            /> */}
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
