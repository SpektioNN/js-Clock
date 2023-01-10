let user = prompt ("Lütfen isminizi giriniz");
let userName = document.querySelector('#myName');

if (user.length > 0 ) {
    myName.innerHTML = `${user}`;
}
else {
    alert("Lütfen isim giriniz !")
    location.reload();
}

function showTime(){
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);

    document.querySelector("#myClock").innerHTML = `${h}: ${m}: ${s}  ${d}`;
    setTimeout(showTime, 1000);
}

showTime();

function checkTime(i){
    if(i<10){
        i = "0"+i
    }
    return i;
}