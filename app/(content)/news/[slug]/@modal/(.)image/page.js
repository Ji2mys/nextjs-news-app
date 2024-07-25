"use client";

import { notFound, useRouter } from "next/navigation";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-news";
import classes from "./page.module.css";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <>
      <div className={classes["modal-backdrop"]} onClick={router.back} />
      <dialog className={classes.modal} open>
        <div className={classes["fullscreen-image"]}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            fill
          />
        </div>
      </dialog>
    </>
  );
}
