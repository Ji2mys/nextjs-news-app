import Link from "next/link";

import classes from "./main-header.module.css";
import NavLink from "../nav-link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div id={classes["home-link"]}>
        <Link href="/">NextNews</Link>
      </div>
      <ul id={classes["navigation-links"]}>
        <li>
          <NavLink href="/news" activeClass={classes.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink href="/archive" activeClass={classes.active}>
            Archive
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
