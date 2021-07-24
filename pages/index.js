import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <ul>
        {/* a 태그는 새로운 HTTP 요청을 보내 새로운 페이지를 로딩함으로써 */}
        {/* 리액트 애플리케이션이 가지고 있던 상태 정보가 유실되게 된다. */}
        <li>
          <Link href="/portfolio">포트폴리오 페이지</Link>
        </li>
        <li>
          <Link href="/clients">클라이언트들 페이지</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
