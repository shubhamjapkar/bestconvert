import { getCookie } from '../../lib/Cookie'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ReactLoading from "react-loading";
import { FcPicture } from "react-icons/fc";

const Files = () => {
    const backendUrl = process.env.BACKEND_API;
    const [isUserLogin, setIsUserLogin] = useState(null);
    useEffect(() => {
        const LoginData = getCookie('files');
        LoginData ? (setIsUserLogin(JSON.parse(LoginData))) : setIsUserLogin(null);
    }, []);

    function LoadingComplete(no) {
        const loader = document.getElementsByClassName(`loader${no + 1}`);
        console.log(loader[0].style.display);
        loader[0].style.display = 'none'
    }

    return (
        <div>
            {!isUserLogin ? <h2>No Data Found, Please Convert Files</h2>
                :
                <div className={"download_pop files"}>
                    {isUserLogin && Object.keys(isUserLogin).map((e, i) => {
                        const image = `${backendUrl}/getImage/${isUserLogin[e][0]}`;
                        const availableExtention = ['jpg', 'png'];

                        return (
                            <div className="download_pop1" key={i}>
                                <label id="picdown">
                                    {availableExtention.includes(isUserLogin[e][2]?.toLowerCase()) && <div className={`loader${i + 1}`}>
                                        <ReactLoading
                                            type="spin"
                                            color="black"
                                            height={35}
                                            width={35}
                                        />
                                    </div>}
                                    {availableExtention.includes(isUserLogin[e][2]?.toLowerCase()) ?
                                        <Image src={image} height={75} width={75} alt="logo" className="log2" onLoadingComplete={() => LoadingComplete(i)} />
                                        :
                                        <FcPicture />
                                    }
                                </label>
                                <label id="fontpop">{isUserLogin[e][4]}</label>
                                <label id="fontpop"></label>
                                <label id="fontpop"></label>
                                <Link target="_blank" rel="noreferrer noopener" href={`${backendUrl}/download/${isUserLogin[e][0]}/${isUserLogin[e][3]}`}>
                                    <label className="download">Download</label>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            }

        </div>
    );
}

export default Files;