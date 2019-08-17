// import Vibrant = require('node-vibrant');

let root = document.documentElement;
let colorCircles = document.querySelectorAll('.color');
let heroImage = document.getElementById('heroimage');
let imagesrc = heroImage.src;
let colorscheme = [];
// let initialCircle = document.querySelector('.colorBright');
Vibrant.from(imagesrc)
    .quality(10)
    .getPalette()
    .then(palette => {
        console.log(palette);
        let max = { objectHex: '', maxvalue: 0 };
        let counter = 0;
        for (let palettechoice in palette) {
            colorCircles[counter].style.backgroundColor = palette[palettechoice].getHex();
            if (palette[palettechoice].population > max.maxvalue) {
                max = {
                    objectHex: palette[palettechoice].hex,
                    maxvalue: palette[palettechoice].population,
                };
            }
            counter++;
        }
        root.style.setProperty('--main-color', max.objectHex);
    });
