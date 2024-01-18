const resemble = require("./resemble.js");
const fs = require("fs");
const people = `data:image/jpeg;base64,${fs.readFileSync("./demoassets/People.jpg", "base64")}`;
const people2 = `data:image/jpeg;base64,${fs.readFileSync("./demoassets/People2.jpg", "base64")}`;

resemble(people)
    .compareTo(people2)
    .onComplete((data) => {
        console.log(data);
        // expect(data.diffBounds.bottom).toEqual(431);
        // expect(data.diffBounds.left).toEqual(22);
        // expect(data.diffBounds.right).toEqual(450);
        // expect(data.diffBounds.top).toEqual(58);
        // expect(data.dimensionDifference.height).toEqual(0);
        // expect(data.dimensionDifference.width).toEqual(0);
        // expect(data.isSameDimensions).toBe(true);
        // expect(data.misMatchPercentage).toEqual("8.66");
    });
