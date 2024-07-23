import Link from "next/link";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div id={classes["home-link"]}>
        <Link href="/">NextNews</Link>
      </div>
      <div id={classes["navigation-links"]}>
        <Link href="/news">News</Link>
        <Link href="/archive">Archive</Link>
      </div>
    </header>
  );
}
