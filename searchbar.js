wordCount = document.querySelector(".main-body").innerText.replaceAll('\n', ' ').split(' ').length;
readingTime = Math.ceil(wordCount / 183);

header_ = document.querySelector("header");
const newNode = document.createElement("p");
newNode.innerHTML = '<div class="article readtime">Article reading time is ' + readingTime.toString() + " minutes.</div>";
header_.appendChild(newNode);

const dok_ih = document.querySelector(".main-body").innerHTML;

document.querySelector("#sb").addEventListener("keyup", (e) => highlightWord(e));

function highlightWord(ev) {
let txt = document.querySelector("#sb").value;
    let replaceText = `<mark>${txt}</mark>`
    pos_in_txt = document.querySelector('.main-body').innerText.search(txt);
    console.log(pos_in_txt);
    if (txt.length > 0 & pos_in_txt >= 0) {
    let newtxt = dok_ih.replaceAll(txt, replaceText);
    document.querySelector(".main-body").innerHTML = newtxt;
    }
}