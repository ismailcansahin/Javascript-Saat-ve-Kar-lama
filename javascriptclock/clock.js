let userName = prompt("Adınız Nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı Bilgisi Bulunamadı"}`


let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function showTime() 
{
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days[today.getDay()];
    let info = document.querySelector("#myClock")
    info.innerHTML = `${h}:${m}:${s} ${d}`
}

    setInterval(showTime, 1000);

    showTime();