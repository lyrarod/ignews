import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}

// import * as prismic from "@prismicio/client";
// import * as prismicNext from "@prismicio/next";

// export function getPrismicClient({
//   previewData,
//   req,
//   ...config
// }: prismicNext.CreateClientConfig = {}) {
//   const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, config);

//   prismicNext.enableAutoPreviews({ client, previewData, req });

//   return client;
// }
