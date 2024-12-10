import { Fragment } from "react";

function productDetailPage() {
  return (
    <Fragment>
      <h1>TITLE</h1>
      <p>DESCRIPTION</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;
}

export default productDetailPage;
