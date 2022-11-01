import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Redirect } from "@reach/router";
import dayjs from "dayjs";
import callApi from "../api/JSONPlaceholder";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
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

//エントリーIDを指定して、テキストを取得
client.getEntry("4hjZs8hkD8yt5QjwMCCnHd").then((entry) => {
  console.log("エントリーIDを指定して、単一のエントリーを取得");
  console.log(entry.fields.title);
  console.log(entry.fields.reactHookFrom);
  console.log("-------------------");
});

//APIの呼び出し
console.log(JSON.stringify(callApi));

const IndexPage = () => {
  // //レンダリングの処理
  // const redirectCheck = 2;
  // //navigate
  // switch (redirectCheck) {
  //   case 1:
  //     //redirectへ遷移
  //     navigate('/redirect');
  //     break;
  //   case 2:
  //     //ssrへ遷移
  //     navigate('/ssr');
  //     break;

  //   default:
  //     console.log("リダイレクト未設定");
  // }

  const data = useStaticQuery(graphql`
    {
      contentfulCategory(title: { eq: "example" }) {
        title
      }
    }
  `);
  console.log("-----環境変数-----");
  console.log(process.env.FAVORITES_FOOD);
  console.log("---------------");
  const now = dayjs().unix();
  const startDate = dayjs("2022-10-31").unix();
  const endDate = dayjs("2022-11-02").unix();
  if (now > startDate && now < endDate) {
    return <Redirect to="/ssr" noThrow />;
  }
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Hello World!
        <span>🎉🎉🎉</span>
        {process.env.ENV}
      </h1>
      <body>
        <h2>{data.contentfulCategory.title}</h2>
        <h2>テスト成功</h2>
      </body>
    </main>
  );
};
export default IndexPage;
export const Head = () => <title>Home Page</title>;
