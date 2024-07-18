import Link from "next/link";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
    </header>
  );
}
