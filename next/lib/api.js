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
  introText
  underrubrik
  skola
  utbildning
   utbList
  skola2
  utbildning2
  utbList2
  skola3
  utbildning3
  utbList3

  underrubrik2
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

export async function getAboutItems() {
  const query = await fetchGraphQL(
    ` query{
      omMigCollection{
        items {
          ${ABOUT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  console.log("GraphQL Response:", query);
  return query?.data?.omMigCollection?.items || [];
}
