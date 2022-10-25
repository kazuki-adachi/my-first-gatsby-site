import * as React from "react";

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
const headingAccentStyles = {
  color: "#663399",
};
const contentful = require("contentful");

console.log("client");

//clientの設定
const client = contentful.createClient({
  space: "7uitmub34nzv",
  accessToken: "CUfW1WGxZaRkWc2mEnMMsc5anGKpCNZtNrKLyS9sTeA",
});

//指定した3件のエントリーを取得
client.getEntries().then((entries) => {
  console.log("指定した3件のエントリーを取得");
  console.log(entries.items[1].fields.title);//テスト成功
  console.log(entries.items[2].fields.course.fields.title);//Hello Contentful
  console.log(entries.items[5].fields.title);//Content model > image
  console.log("-------------------");
});

//エントリーIDを指定して、単一のエントリーを取得
client.getEntry("3KinTi83FecuMeiUo0qGU4").then(entry => {
  console.log("エントリーIDを指定して、単一のエントリーを取得");
  console.log(entry.fields.title);
  console.log("-------------------");
});

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Hello World!
        <span style={headingAccentStyles}>🎉🎉🎉</span>
      </h1>
      <body>
      <h2>
        body
      </h2>
        <script>
          document.write("BODYテスト");
        </script>
      </body>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
