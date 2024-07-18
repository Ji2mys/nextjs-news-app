import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-data";

export default function News() {
  return (
    <main>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <div className="news-list-image">
                <Image
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                  fill
                />
              </div>
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
