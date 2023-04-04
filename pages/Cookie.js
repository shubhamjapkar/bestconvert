import Cookies from "js-cookie";
function setCookie(name, value) {
    Cookies.set(name, value)
}

function getCookie(name) {
    const cookieData = Cookies && Cookies.get(name) || "";
    try {
        if(!cookieData || typeof(cookieData)==='string')return cookieData || "";
        else
        {
            const result = JSON.parse(cookieData);
            return result;
        }
    } catch (e) {
        console.log("Cookies Exception - ",e);
        return "";
    }
}

function removeCookie(name) {
    Cookies.remove(name);
}

export default {setCookie,getCookie,removeCookie};