import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const contentful = require("contentful");

console.log("client");

//clientの設定
const client = contentful.createClient({
  space: "7uitmub34nzv",
  accessToken: "CUfW1WGxZaRkWc2mEnMMsc5anGKpCNZtNrKLyS9sTeA",
});
//エントリーIDを指定して、単一のエントリーを取得
client.getEntry("3KinTi83FecuMeiUo0qGU4").then((entry) => {
  console.log("エントリーIDを指定して、単一のエントリーを取得");
  console.log(entry.fields.title);
  console.log("-------------------");
});

const SSRPage = ({ serverData }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulCategory(title: { eq: "example" }) {
        title
      }
    }
  `);
  return (
    <main>
      <h1>SSR Page with Dogs</h1>
      <h1>更新するたびにランダムな犬の画像が出力</h1>
      <img alt="Happy dog" src={serverData.message} />
      <h2>{data.contentfulCategory.title}</h2>
    </main>
  );
};
export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random?=name${process.env.NAME}`);
  return {
    props: await res.json(),
  };
}

export default SSRPage;
