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

const ABOUT_GRAPHQL_FIELDS = `
  title
  slug
  skola
  utbildning
  tid
  utbList
  `;
const WORK_GRAPHQL_FIELDS = `
  title
  slug
  arbetsroll
  arbetsgivare
  tid
  erfarenhet
  `;

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
