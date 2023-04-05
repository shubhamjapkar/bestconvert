import axios from "axios";
import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import allpages from "./allpages.json";
import { FcPicture } from "react-icons/fc";
import ReactLoading from "react-loading";
import Link from "next/link";
import { useRouter } from 'next/router'
import { setCookie, getCookie } from './Cookie'

function Page({ query }) {
  const [isUserLogin, setIsUserLogin] = useState(null);
  useEffect(() => {
    const LoginData = getCookie('files');
    LoginData ? setIsUserLogin(JSON.parse(LoginData)) : setIsUserLogin(null);
  }, []);

  const [op1, setop1] = useState([false, false]);
  const router = useRouter();

  const [file, setfile] = useState();

  const [popdown, setpopdown] = useState([[]]);
  const [popdown1, setpopdown1] = useState(false);

  const [input, setinput] = useState(query.convert[0].toLowerCase());

  useEffect(() => {
    setinput(query.convert[0].toLowerCase());
  }, [query])

  useEffect(() => {
    setpopdown1(false);
  }, [router.query])


  const fileChangeHandler = (e) => {
    setfile(e.target.files);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (file) {
      const data = new FormData();

      const pushload = [];

      const datepush = [
        document.getElementById("oprtion1").innerText,
        document.getElementById("oprtion2").innerText,
      ];

      for (let i = 0; i < file.length; i++) {
        data.append("images", file[i]);

        pushload.push(["-", datepush[0], datepush[1], "-"]);
      }

      setpopdown(pushload);
      setpopdown1(true);

      data.append(
        "filename",
        document.getElementById("oprtion2").innerText.toLowerCase()
      );

      await axios
        .post(`http://localhost:5000/multiple`, data)
        .then(function (res) {
          setpopdown(res.data);
          const obj = isUserLogin || {};
          const index = Object.keys(obj)?.length;
          res.data.map((e) => {
            let now = new Date();
            e.push(`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`);
            obj[index++] = { ...e }
          });

          setCookie('files', JSON.stringify(obj))
        })
        .catch(function (error) {
          console.log(error);
          alert("Server is busy. please try again later")
        });
    } else {
      alert("please Choose some Files");
    }
  };

  return (
    <>
      <Head>
        <title>{query.title}</title>
        <meta name="description" content={query.description} />
        <meta name="keywords" content={query.keywords} />
        <meta name="author" content="Shubham Japkar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* <button onClick={()=>console.log(getCookie('files'))}></button> */}
      <div className="mainbox">
        <div className="maintitle">
          <h1>
            {query.convert[0]}&nbsp;To&nbsp;
            {query.convertto[0]}
            &nbsp;Convertor
          </h1>
          <label>convert your image with smoother</label>
        </div>

        <div className="main_select">
          <div className="main_select1">
            <label className="main_input">
              Choose File
              <input
                type="file"
                accept={"." + input}
                className="demo"
                id="demo"
                multiple
                onChange={fileChangeHandler}
              />
            </label>
          </div>

          <div className="main_select2">
            <label
              className="convert"
              id="oprtion1"
              onClick={() => setop1([!op1[0], false])}
            >
              {query.convert[0]}
            </label>

            <div className={op1[0] ? "options" : "options active"}>
              {query.convert.map((e, i) => {
                if (i == 0) {
                  return false;
                }
                return (
                  <label
                    key={i}
                    onClick={(e) => {
                      const temp = e.target.innerText;
                      e.target.innerText =
                        document.getElementById("oprtion1").innerHTML;

                      document.getElementById("oprtion1").innerHTML = temp;

                      setinput(temp);
                    }}
                  >
                    {e}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="main_select3">
            <label>TO</label>
          </div>

          <div className="main_select3">
            <label
              className="convert"
              id="oprtion2"
              onClick={() => setop1([false, !op1[1]])}
            >
              {query.convertto[0]}
            </label>

            <div className={op1[1] ? "options" : "options active"}>
              {query.convertto.map((e, i) => {
                if (i == 0) {
                  return false;
                }
                return (
                  <label
                    key={i}
                    onClick={(e) => {
                      const temp = e.target.innerText;
                      e.target.innerText =
                        document.getElementById("oprtion2").innerHTML;

                      document.getElementById("oprtion2").innerHTML = temp;
                    }}
                  >
                    {e}
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        <div className="convertnow" onClick={onSubmitHandler}>
          <label>Convert Now</label>
        </div>
      </div>

      <div className={popdown1 ? "download_pop" : "download_pop active"}>
        {popdown.map((e, i) => {
          return (
            <div className="download_pop1" key={i}>
              <label id="picdown">
                {popdown[0][0] != "-" ? (
                  <FcPicture />
                ) : (
                  <ReactLoading
                    type="spin"
                    color="black"
                    height={35}
                    width={35}
                  />
                )}
              </label>
              <label id="fontpop">{popdown[0][1]?.toUpperCase()}</label>
              <label id="fontpop">TO</label>
              <label id="fontpop">{popdown[0][2]?.toUpperCase()}</label>
              {popdown[0][0] != "-" ? (
                <a target="_blank" rel="noreferrer noopener" href={`http://localhost:5000/download/${e[0]}/${e[3]}`}>
                  <label className="download">Download</label>
                </a>
              ) : (
                <label className="download active">Download</label>
              )}
            </div>
          );
        })}
      </div>

      <div className="middle_box">
        <div className="api_security">
          <label className="api_box">
            <h2>API</h2>
            <p>
              Besides using open source software under the hood, we’ve FFMPEG library to provide the best possible results. Most conversion types can be adjusted to your needs such as automatic quality setting and many other options.
            </p>
          </label>
        </div>

        <div className="security_box">
          <label className="security_box">
            <h2>SECURITY</h2>
            <p>
              bestconvert has been trusted by our users and customers since its founding in 2023. No one except you will ever have access to your files. We earn money by organic traffic, not by selling your data.
            </p>
          </label>
        </div>
      </div>

      <div className="alltools_box">
        <h2>Converting Tools</h2>

        <div className="alltools_box2">
          {allpages.all.map((e, i) => {
            return (
              <Link key={i} href={e.url} passHref>
                <label>{e.title}</label>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

Page.getInitialProps = ({ query, res }) => {
  for (let i = 0; i < allpages.all.length; i++) {
    if (allpages.all[i].url === "/" + query.infotype) {
      return { query: allpages.all[i] };
    }
  }

  return { notFound: true }
};

export default Page;
