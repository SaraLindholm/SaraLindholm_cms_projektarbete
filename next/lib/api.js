//Förklaring av samtliga av mina fields: Här definerar jag respektive fields, vilka fields som finns tillgängliga att hämta data ifrån vid senare tillfälle. Om de innehåller en array blir det automatiskt en Collection

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
//"Om mig" och utbildning
const ABOUT_GRAPHQL_FIELDS = `
  title
  slug
  skola
  utbildning
  tid
  utbList
  `;
//"Om mig" och arbetslivserfarenheter
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

//kategorier för filtrering. även denna som används för att dynamiskt skriva ut innehållet i dropdown
const CATEGORY_GRAPHQL_FIELDS = `
  title
  slug
`;
//filtrerade projekt, limit är satt för att begränsa data som hämtas, annars blir queryn för stor och hämtar inget/krashar
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
//hämtar data från contentful via GraphQl, den hittar "rätt" med hjälp av spaceId, ACCESS_TOKEN och preview accses token
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
//hämtar först alla projekt för att sedan i fetchProjectSummary definera hur datan ska hanteras, i vilken ordning innehållet ska viasas, limit osv.sätter även att det finns en slug
function fetchProjectSummary(query) {
  return query?.data?.projectCollection?.items || [];
}
// hämtar alla projekt, men med en limit på 7 projekt.
export async function getAllProjects(limit = 7, isDraftMode = false) {
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
//här är en funktion för att filtrera projekten utefter kategori, limit på 10 för att sätta en begränsning på queryns omfång. Jag sätter även "${slug}" för att den dynamiskt ska kolla på slug, annars hade jag kunnat hårdkoda tex slug: "react".
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
  return filteredProjects;
}

//för "enskild-projekt" sidan
//i stortsett samma lösning som i förgående funktion
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
//detta används för att dels dynamiskt skriva ut item i min dropbox men också för att kunna länka ihop projekt med en kateggori och ha de som key för att mappa ut på sidan
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
//"Om mig"-sidan -> utbilding
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
  return query?.data?.about2Collection?.items || [];
}
//"Om mig"-sidan -> Arbetslivserfarenheter
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
  return query?.data?.arbeteCollection?.items || [];
}
