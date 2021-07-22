import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query.slug);
  // 파일명에는 제한이 없다!
  // 오직 [...머시기] 형태만 지켜주면 된다.

  return (
    <div>
      <h1>블로그 포스트들</h1>
    </div>
  );
}

export default BlogPostsPage;
