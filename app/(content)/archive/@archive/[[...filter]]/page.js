import Link from "next/link";

import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

export default function FilteredArchivePage({ params }) {
  const filter = params.filter;
  if (filter && filter.length > 2)
    throw new Error("Invalid path. Only year and month allowed.");

  const yearLinks = getAvailableNewsYears();
  let selectedNews;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let monthLinks;

  if (selectedYear) monthLinks = getAvailableNewsMonths(selectedYear);
  if (selectedYear && !selectedMonth)
    selectedNews = getNewsForYear(selectedYear);
  if (selectedMonth)
    selectedNews = getNewsForYearAndMonth(selectedYear, selectedMonth);

  if (
    (selectedYear && !yearLinks.includes(+selectedYear)) ||
    (selectedMonth && !monthLinks.includes(+selectedMonth))
  ) {
    throw new Error("Invalid path. Time period is not available.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {yearLinks.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
          {selectedYear && (
            <ul>
              {monthLinks &&
                monthLinks.map((link) => (
                  <li key={link}>
                    <Link href={`/archive/${selectedYear}/${link}`}>
                      {new Date(selectedYear, link - 1).toLocaleString(
                        "en-US",
                        {
                          month: "long",
                        }
                      )}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </nav>
      </header>
      {selectedNews ? (
        <NewsList news={selectedNews} />
      ) : (
        <p>No news found for the selected period.</p>
      )}
    </>
  );
}
