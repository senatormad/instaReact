let cols;
let imgs;

if(window.innerWidth <= 576) {
    cols = 12;
    imgs = "300px";
} else if(window.innerWidth > 576 && window.innerWidth <= 768) {
    cols = 12;
    imgs = "300px";
} else if(window.innerWidth > 768 && window.innerWidth <= 992) {
    cols = 6;
    imgs = "300px";
} else if(window.innerWidth > 992 && window.innerWidth <= 1200) {
    cols = 6;
    imgs = "300px";
} else {
    cols = 4;
    imgs = "400px";
}

export const colNr = cols;
export const imgHeight = imgs;