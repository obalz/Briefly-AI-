import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidAPIKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

/*const options = {
  method: "GET",
  url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
  params: {
    url: "https://time.com/6266679/musk-ai-open-letter/",
    length: "3",
  },
  headers: {
    "X-RapidAPI-Key": "1cba4a6eddmsh005d577a5756ccap1e0cbcjsn6162b9db1383",
    "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
};*/

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidAPIKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&lenght=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
