import Cookies from "js-cookie";
export function setCookie(name, value) {
    Cookies.set(name, value)
}

export function getCookie(name) {
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

export function removeCookie(name) {
    Cookies.remove(name);
}