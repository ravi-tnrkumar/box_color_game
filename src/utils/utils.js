import _ from 'lodash';

const originalColorsArray= ['aqua', 'violet', 'blue', 'fuchsia', 'gray', 'green', 
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
    'silver', 'teal', 'yellow'];

// Object.freeze(colors);

// colors.push(1);

function getRandom(colorsArray, cut){
    var i= Math.floor(Math.random()*colorsArray.length);
    if(cut && i in colorsArray){
        return colorsArray.splice(i, 1)[0];
    }
    return colorsArray[i];
}

function getColors(count) {
    let allColors = _.cloneDeep(originalColorsArray);
    let colors = [], i = 0, limit = Math.ceil(count/2);
    while (i++ < limit) {
        let color = getRandom(allColors, true);
        colors.push(color);
    }

    // console.log(`Random Colors => ${colors}`)

    return _.shuffle([...colors, ...colors]);
}

export {getColors};