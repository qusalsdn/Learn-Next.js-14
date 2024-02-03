// use client는 헷갈릴 수 있지만 CSR이 아니라 SSR로 렌더링을 하겠다고 선언하는 것이다.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <button onClick={() => setCount((item) => ++item)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
