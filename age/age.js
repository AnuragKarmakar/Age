
const disp = document.getElementById("disp")
const display = document.getElementById("displayDiv")
const f = document.getElementById("formContain")
const quote = document.getElementById("quote")

function calc() {
    setInterval(change, 10000);

    var dobinput = document.getElementById("birth")

    f.classList.toggle("hide")
    display.classList.toggle("show")


    var x = new Date(dobinput.value);
    var y = new Date(Date.now());
    if (x < y) {
        setInterval(() => {
            y = new Date(Date.now());
            let seconds = Math.abs((x.getTime() - y.getTime()) / 1000);
            let years = seconds / 31556952
            //console.log(years)
            disp.innerHTML = years.toFixed(7)
        }, 1000);
    } else {
        dobinput.value = ""
        alert("Date of Birth cannot be in future.")
        location.reload()
    }

}
function getRndnumber(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
}
const quotes = ["Average human life expentancy is 72.27 years", "The purpose of our lives is to be happy. — Dalai Lama", "If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein", "Not how long, but how well you have lived is the main thing. — Seneca", "Why are you here?", "There is no such thing as 'enough'", "Notice how fast time passes, when you need it to be slowest"]


let counter = getRndnumber(quotes.length - 1);

function change() {

    quote.setAttribute("class", "text-fade");

    setTimeout(() => {
        quote.innerHTML = quotes[counter];
        quote.setAttribute("class", "text-show");
    }, 1000)
    counter++;
    if (counter >= quotes.length) {
        counter = 0;
    }
}




