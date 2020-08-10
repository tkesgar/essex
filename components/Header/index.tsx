import * as React from "react";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="text-center">
      <img
        className="my-12 mx-auto rounded-full"
        src="https://www.gravatar.com/avatar/3cf14fca02e292d08b9a598c02e9bdbc?s=80"
        alt="Ted Kesgar"
      />
      <h1 className="text-4xl">Ted Kesgar</h1>
      <ul className="my-6">
        <li className="inline-block mx-4">
          <Link href="/">
            <a className="text-purple-600 hover:text-purple-400 hover:underline">
              About
            </a>
          </Link>
        </li>
        <li className="inline-block mx-4">
          <Link href="/works">
            <a className="text-purple-600 hover:text-purple-400 hover:underline">
              Works
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
