/* hoover effekt på teksten på hånden min */

const text_left = document.querySelector("#hero-text-left strong");
const text_right = document.querySelector("#hero-text-right strong");

const text_left_old = "VFX/SFX";
const text_right_old = "Video";

const text_left_new = "HistorieFortelling";
const text_right_new = "HistorieFortelling";

text_left.addEventListener("mouseover", () => {
    text_right.innerText = text_right_new;
    text_right.classList.add("small-text");
});

text_left.addEventListener("mouseout", () => {
    text_right.innerText = text_right_old;
    text_right.classList.remove("small-text");
});

text_right.addEventListener("mouseover", () => {
    text_left.innerText = text_left_new;
    text_left.classList.add("small-text");
});

text_right.addEventListener("mouseout", () => {
    text_left.innerText = text_left_old;
    text_left.classList.remove("small-text");
});