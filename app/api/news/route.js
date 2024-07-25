import { DUMMY_NEWS } from "@/dummy-news";

export const GET = (request) => {
  return new Response(JSON.stringify(DUMMY_NEWS, null, "  "));
};
