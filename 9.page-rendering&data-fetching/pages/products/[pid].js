import path from "path";
import fs from "fs/promises";

import { Fragment } from "react";

function productDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}


// untuk menentukan halaman mana saja yang akan digenerate saat build time
// kita bisa menggunakan getStaticPaths
// getStaticPaths harus mengembalikan object yang berisi paths dan fallback
export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const paramsWithIds = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: paramsWithIds,
    fallback: true,
  };
}

export default productDetailPage;
