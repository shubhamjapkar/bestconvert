import Head from "next/head";
import Link from "next/link";
import allpages from "./allpages.json";

import Header from "./header_footer/header";
import Footer from "./header_footer/footer";

const index = () => {
  return (
    <div className="indexpage">
      <Head>
        <title>Best Convert</title>
        <meta
          name="description"
          content="Super fast convert images with best quality"
        />
        <meta name="keywords" content="Convert Images, Jpg to Png" />
        <meta name="author" content="Shubham Japkar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1 className="heading-Image-Convert">Images Convertor Tools</h1>

      <div className="index_box">
        {allpages.all.map((e, i) => {
          return (
            <div key={i}>
              <Link href={e.url} passHref>
                <div className="indexbox">
                  <h2>{e.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Praesentium consectetur aut dolore et vitae perspiciatis! Id
                    recusandae, enim tenetur praesentium.
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default index;
