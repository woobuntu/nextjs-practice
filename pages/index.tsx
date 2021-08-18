import fs from "fs/promises";
// fs모듈을 getStaticProps에서만 호출했기 때문에 번들링 과정에서 제외된다.
import path from "path";
import { GetStaticProps } from "next";

interface Product {
  id: string;
  title: string;
}

interface HomeProps {
  products: Product[];
}

// getStaticProps가 실행된 후에 컴포넌트가 렌더링된다.
export default function Home({ products }: HomeProps) {
  return (
    <ul>
      {products.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // process.cwd()는 이 getStaticProps가 실행될 때의 디렉토리로, pages 디렉토리가 아니다.
  const dummyProductsPath = path.join(process.cwd(), "dummy", "index.json");
  const bufferOfProducts = await fs.readFile(dummyProductsPath);
  const { products } = JSON.parse(bufferOfProducts.toString());
  return {
    props: {
      products,
    },
  };
};
