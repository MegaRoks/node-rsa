const fs = require("fs");
const path = require("path");

module.exports = function () {
    return fs.readdirSync(__dirname).filter((file) => {
        const fileInfo = path.parse(path.join(__dirname, file));

        if (fileInfo.base === "index.js") return;

        // console.log(fileInfo);
        return fileInfo.name;
    });
};
