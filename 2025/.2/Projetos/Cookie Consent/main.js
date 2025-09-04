const cookieBox = document.getElementById("cookiePop-Up");
const cookiemsg = document.getElementById("cookieDescription");
const consentBtn = document.getElementById("consentCookiesbtn");

function closeCookies() {
    cookieBox.style.display = "none";

}
function consentCookies() {
    consentBtn.style.display = "none";
    cookieBox.style.background = "green";
    cookiemsg.innerHTML = "Thanks!";
}
