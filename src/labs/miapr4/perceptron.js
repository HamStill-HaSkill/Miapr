function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let getObjs = (classNum, objNum, paramNum) => {
    let objTypes = [];
    for (let i = 0; i < classNum; i++) {
        let objs = [];
        for (let i = 0; i < objNum; i++) {
            let params = [];
            for (let i = 0; i < paramNum; i++) {
                params.push(getRandomArbitrary(-10, 10));
            }
            for (let i = paramNum; i < classNum; i++) {
                params.push(1);
            }
            objs.push(params);
        }
        objTypes.push(objs);       
    }
    return objTypes;
}

let vectorMuplt = (obj, weights) => {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += obj[i] * weights[i];
    }
    return sum;
}

let vectorPlus = (obj, weights) => {
    for (let i = 0; i < weights.length; i++) {
        weights[i] += obj[i];
    }
}

let vectorMinus = (obj, weights) => {
    for (let i = 0; i < weights.length; i++) {
        weights[i] -= obj[i];
    }
}

let activator = (sums, classNum, obj, weights) => {
    let checkElem = sums[classNum];
    let flag = false;
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] >= checkElem) {
            if (i !== parseInt(classNum)) {
                vectorMinus(obj, weights[i]);
                flag = true;
            }
        }
    }
    if (flag) vectorPlus(obj, weights[classNum]);
    return !flag;
}

let perceptron = (classNum, objNum, paramNum) => {
    let weights = new Array(+classNum);
    for (let i = 0; i < classNum; i++) {
        weights[i] = new Array(+classNum).fill(0);
    }

    let objs = getObjs(classNum, objNum, paramNum);
    for (let k = 0; k < 10000; k++) {
        let count = 0;
        for (let j = 0; j < objNum; j++) {
            for (let n = 0; n < classNum; n++) {
                let sums = [];
                for (let i = 0; i < classNum; i++) {
                    sums.push(vectorMuplt(objs[n][j], weights[i]));
                }
                if (activator(sums, n, objs[n][j], weights)) count++;
            }
        }
        if (count === parseInt(classNum)) {
            return {objs, weights};
        }
    }
    alert ("Более 10000 итераций")
    return {objs, weights};
}

export default perceptron;