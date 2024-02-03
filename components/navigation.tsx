// use client는 헷갈릴 수 있지만 CSR이 아니라 SSR로 렌더링을 하겠다고 선언하는 것이다.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  // 콘솔을 찍어보면 벡엔드에도 콘솔이 찍히는 것을 볼 수 있다.
  console.log("SSR");

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
