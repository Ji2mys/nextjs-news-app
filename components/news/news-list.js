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
              />
            </div>
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
