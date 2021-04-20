let getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let getMatrix = (points) => {
    let n = points.length;
    let data = [];
    for (let j = 0; j < n; j++) {
      let row = [];
      for (let i = 0; i < n; i++) {
        if (i == j) {
          row.push(0);
          continue;
        }
        if (row[i] == undefined) {
            
            if (data[j, i]) {
              row[i] = data[i][j];
            } else {
              row[i] = points[i];
            }
        }
      }       
      data.push(row);
    }
    return data;
  }

let getMinElem = (a, data, n) => {
    let group = {
        min: Number.MAX_SAFE_INTEGER,
        point: 0,
    };
    for (let i = 0; i < n; i++) {
        if (data[a][i] == 0) continue;
        if (group.min > data[a][i]) {
            group.min = data[a][i];
            group.point = i;
        }
    }
    return group
}

//let Y = 0;

let getGroups = (n, data) => {
    let pointGroup = getMinElem(0, data, n);
    let groupedPoints = [];
    let dataset = []
    let Y = 1;
    debugger;
    groupedPoints[0] = [0, pointGroup.point];
    let group = {
        type: 'line',
        borderColor: 'rgb(' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ')',
        borderWidth: 5,
        pointRadius: 0,
        lineTension: 0,
        fill: false,
        data: [{ x: data[0][0], y: 0 }, { x: data[0][0], y: Y },
                { x: data[0][pointGroup.point], y: Y }, { x: data[0][pointGroup.point], y: 0 }],
    }
    dataset.push(group);
    for (let i = 0; i < n; i++) {
        for (let groupNum = 0; groupNum < groupedPoints.length; groupNum++) {
            let isGrouped = false;
            for (let k = 0; k < groupedPoints.length; k ++) {
                if (groupedPoints[k].includes(i)) isGrouped = true;
            }
            if (isGrouped) continue;

            let pointGroup = getMinElem(i, data, n);

            isGrouped = false;
            for (let k = 0; k < groupedPoints.length; k ++) {
                if (groupedPoints[k].includes(pointGroup.point)) isGrouped = true;
            }
            
            if (isGrouped) {
                let newX = data[0][groupedPoints[groupNum][groupedPoints[groupNum].length-1]]
                groupedPoints[groupNum].push(i); 
                debugger;            
                let group = {
                    type: 'line',
                    borderColor: 'rgb(' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ')',
                    borderWidth: 5,
                    pointRadius: 0,
                    lineTension: 0,
                    fill: false,
                    data: [{ x: newX/2, y: Y }, { x: newX/2, y: Y+1 },
                            { x: data[0][pointGroup.point], y: Y+1 }, { x: data[0][pointGroup.point], y: 0 }],
                }
                dataset.push(group);
            } else {
                groupedPoints[groupedPoints.length] = [i, pointGroup.point];
                let group = {
                    type: 'line',
                    borderColor: 'rgb(' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ')',
                    borderWidth: 5,
                    pointRadius: 0,
                    lineTension: 0,
                    fill: false,
                    data: [{ x: data[0][i], y: 0 }, { x: data[0][i], y: Y },
                            { x: data[0][pointGroup.point], y: Y }, { x: data[0][pointGroup.point], y: 0 }],
                }
                dataset.push(group);
                Y+= 2;
            }
        }
    }
    if (groupedPoints.length == 1) return dataset;
    if (groupedPoints.length == 2) {
        let newX = data[0][groupedPoints[0][groupedPoints[0].length-1]];
        let newX2 = data[0][groupedPoints[1][groupedPoints[1].length-1]];
        let group = {
            type: 'line',
            borderColor: 'rgb(' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ',' + getRandomNum(0, 255) + ')',
            borderWidth: 5,
            pointRadius: 0,
            lineTension: 0,
            fill: false,
            data: [{ x: newX/2, y: 1 }, { x: newX/2, y: Y+1 },
                    { x: newX2, y: Y+1 }, { x: newX2, y: 1 }],
        }
        dataset.push(group);
    } else {
        let points = [];
        for (let i = 0; i < groupedPoints.length; i++) {
           points.push(data[0][groupedPoints[i][groupedPoints[i].length-1]]/2);
        }
        data = getMatrix(points);
        dataset.push(getGroups(points.length, data));
    }

    return dataset;
}

export default getGroups;