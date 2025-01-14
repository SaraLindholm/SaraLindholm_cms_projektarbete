//startsida
const START_GRAPHQL_FIELDS = `
  title
  slug
  introText
  mainText {
    json
  }
  externalLink
  internalLink {
    sys {
      id
    }
  }
  imageStartpage {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
`;
//Om mig och utbildning
const ABOUT_GRAPHQL_FIELDS = `
  title
  slug
  skola
  utbildning
  tid
  utbList
  `;
//Om mig och arbetslivserfarenheter
const WORK_GRAPHQL_FIELDS = `
  title
  slug
  arbetsroll
  arbetsgivare
  tid
  erfarenhet
  `;
//kontaktsidan
const CONTACT_GRAPHQL_FIELDS = `
  title
  slug
  introText
  mainText {
    json
  }
  externalLink
  internalLink {
    sys {
      id
    }
  }
  imageStartpage {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
  externalLink2
  externalLink3
`;

//kategorier för filtrering
const CATEGORY_GRAPHQL_FIELDS = `
  title
  slug
`;
//filtrerade projekt
const FILTERED_PROJECT_GRAPHQL_FIELDS = `
  title
  slug
  linkedFrom {
    projectCollection(limit: 10) {
      items {
        title
  slug
	summary
  mainText {
    json
  }
  date
  projectImage {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
    multipleImagesCollection {
    items
    { title
    description
    contentType
    fileName
    size
    url
    width
    height}
  }
   category2Collection(limit: 3){
        items{
          title
          slug
        }

      }
        }
      }
    }
`;

//projekten
const PROJECT_GRAPHQL_FIELDS = `
  title
  slug
	summary
  mainText {
    json
  }
  date
  projectImage {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
    multipleImagesCollection {
    items
    { title
    description
    contentType
    fileName
    size
    url
    width
    height}
  }
   category2Collection{
        items{
          title
          slug
        }

      }


  `;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

//fetch för att hämta projekten
async function fetchGraphQLProject(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      //kopplar alla projekt med taggen "projects". detta skapar möjlighet att innehållet uppdatets vid ny publicering kopplad till "projects"
      next: { tags: ["projects"] },
    }
  ).then((response) => response.json());
}
//hämtar först alla projekt för att sedan i fetchProjectSummary definera hur datan ska hanteras, i vilken ordning innehållet ska viasas, limit osv.
function fetchProjectSummary(query) {
  return query?.data?.projectCollection?.items || [];
}

export async function getAllProjects(
  //satte limit till 5, enbart pga att jag inte har så många projekt än
  limit = 5,
  isDraftMode = false,
  categoryIds = []
) {
  const projects = await fetchGraphQLProject(
    `query {
        projectCollection( where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return fetchProjectSummary(projects);
}
//filtrerade projekt
export async function getFilteredProjects(slug, limit = 10) {
  const filteredProjects = await fetchGraphQLProject(
    `query {
        categoryCollection( where: { slug: "${slug}" }, limit: ${limit}) {
          items {
            ${FILTERED_PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`
  );
  console.log("filteredProjects:", filteredProjects);
  return filteredProjects;
}

//för enskild-projekt sidn
export async function getProjectItems(slug, isDraftMode = false) {
  const project = await fetchGraphQLProject(
    `query {
        projectCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return fetchProjectSummary(project);
}

//för att hämta kategorier
export async function getCategoryItems() {
  const query = await fetchGraphQL(
    ` query {
      categoryCollection {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return query?.data?.categoryCollection?.items || [];
}

//startsidan
export async function getStartpageItems() {
  const query = await fetchGraphQL(
    ` query{
      startsidaCollection{
        items {
          ${START_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return query?.data?.startsidaCollection?.items || [];
}
//kontaktsidan
export async function getContactItems() {
  const query = await fetchGraphQL(
    ` query{
      kontaktCollection{
        items {
          ${CONTACT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return query?.data?.kontaktCollection?.items || [];
}
//utbilding på Om migsidan
export async function getAboutItems() {
  const query = await fetchGraphQL(
    ` query{
      about2Collection{
        items {
          ${ABOUT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  console.log("GraphQL Response:", query);
  return query?.data?.about2Collection?.items || [];
}
//Arbetslivserfarenheter på Om migsidan
export async function getWorkItems() {
  const query = await fetchGraphQL(
    ` query{
      arbeteCollection{
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  console.log("GraphQL Response:", query);
  return query?.data?.arbeteCollection?.items || [];
}
