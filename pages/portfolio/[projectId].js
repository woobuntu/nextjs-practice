import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      <h1>포트폴리오 프로젝트 페이지</h1>
    </div>
  );
}

export default PortfolioProjectPage;
