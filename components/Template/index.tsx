import * as React from "react";
import Link from "next/link";
import moment from "moment";

interface TemplateProps {
  buildDate: Date;
  children?: React.ReactNode;
}

export default function Template({
  buildDate,
  children,
}: TemplateProps): JSX.Element {
  return (
    <div className="container">
      <header className="header">
        <img
          className="avatar"
          src="https://www.gravatar.com/avatar/3cf14fca02e292d08b9a598c02e9bdbc?s=80"
          alt="Ted Kesgar"
        />
        <h1>Ted Kesgar</h1>
        <ul className="navigation">
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a>Works</a>
            </Link>
          </li>
        </ul>
      </header>
      <section className="content">{children}</section>
      <footer className="footer">
        Last updated: {moment(buildDate).fromNow()}
      </footer>
    </div>
  );
}
