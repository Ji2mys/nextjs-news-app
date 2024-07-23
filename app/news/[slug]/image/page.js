import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import classes from "./page.module.css";

export default function NewsImage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <div className={classes["fullscreen-image"]}>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
