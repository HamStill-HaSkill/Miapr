
let slog1 = 0, slogs2 = [], slog2 = 0, slogs3 = [], slog3 = 0, slogs4 = [], slog4 = 0;
let getPoint = (x1) => {
    return -(slog1 + slog2 * x1)/(slog3 + slog4 * x1);
}
let getKfunc = (point) => {
    return (nextPoint) => {
        return 1 + 4 * nextPoint.x * point.x + 4 * nextPoint.y * point.y + 16 * nextPoint.x * point.x * nextPoint.y * point.y;
    }
}

let getNextK = (curr, next, kFuncs, signs, points, classSize) => {
    let res = 0;
    kFuncs.push(getKfunc(points[curr]));
    for (let j = 0; j < signs.length; j++) {
        res += signs[j] * kFuncs[j](points[next]);
    }
    if (res <= 0 && next < classSize) {
        signs.push(1);
    } else if (res > 0 && next >= classSize) {
        signs.push(-1);
    } else {
        signs.push(0);
        return true;
    }
    return false;
}
let potential = (points) => {
    slog1 = 0; slogs2 = []; slog2 = 0; slogs3 = []; slog3 = 0; slogs4 = []; slog4 = 0;
    let classSize = points.length / 2;
    let signs = [1];
    let kFuncs = [];
    for (let i = 0; i < points.length - 1; i++) {
        getNextK(i, i + 1, kFuncs, signs, points, classSize);
        slogs2.push(4 * points[i + 1].x);
        slogs3.push(4 * points[i + 1].y);
        slogs4.push(16 * points[i + 1].x * points[i + 1].y);
    }
    if (getNextK(points.length - 1, 0, kFuncs, signs, points, classSize)) {
        slogs2.push(4 * points[0].x);
        slogs3.push(4 * points[0].y);
        slogs4.push(16 * points[0].x * points[0].y);
        //console.log(kFuncs[points.length-1]({x:1, y:1}));
        let res = 0;
        for (let j = 0; j < signs.length; j++) {
            if (signs[j] > 0) {
                slog1++;
                slog2 += slogs2[j];
                slog3 += slogs3[j];
                slog4 += slogs4[j];
            }
            if (signs[j] < 0) {
                slog1--;

                slog2 = -slog2;
                if (signs[j] * slogs2[j] > 0)
                    slog2 -= slogs2[j];
                else
                    slog2 += slogs2[j];

                slog3 = -slog3;
                if (signs[j] * slogs3[j] > 0)
                    slog3 -= slogs3[j];
                else
                    slog3 += slogs3[j];

                slog4 = -slog4;
                if (signs[j] * slogs4[j] > 0)
                    slog4 -= slogs4[j];
                else
                    slog4 += slogs4[j];


            }
        }
        console.log(signs);
        console.log(slog1, slogs2, slogs3, slogs4);
        console.log(slog1, slog2, slog3, slog4);
        console.log(slog1.toString(), slog2.toString() + "x1", slog3.toString() + "x2", slog4.toString() + "x1x2");
        let functionPoints = [];
        for (let i = -10; i < 10; i += 0.1) functionPoints.push({x: i, y: getPoint(i)});
        return {points: functionPoints, formula: [slog1.toString(), slog2.toString(), slog3.toString(), slog4.toString()]}

    };
}
let getPointClass = (x, y) => {
    return slog1 + slog2*x + slog3*y + slog4*x*y;
}

export { potential, getPointClass};