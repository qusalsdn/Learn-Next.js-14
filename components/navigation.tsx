// use client는 헷갈릴 수 있지만 CSR이 아니라 SSR로 렌더링을 하겠다고 선언하는 것이다.
// client에서 interactive하게 만들어질 components는 "use client" 지시어를 맨 위에 갖고 있는 components들 뿐이다.
// 페이지를 interactive하게 만들 필요가 없다면 자바스크립트를 다운로드 받을 필요없이 그저 HTML만 벡엔드에서 받으면 되기 때문에 페이지 로딩 속도가 빨라질 수 있다.
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
