import Link from "next/link";
import Image from "next/image";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <div className="news-list-image">
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                fill
                sizes="(max-width: 620px) 80vw, (max-width: 940px) 40w, (max-width: 1260px): 25vw, 20vw"
              />
            </div>
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
