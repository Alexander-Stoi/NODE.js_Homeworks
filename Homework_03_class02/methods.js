const fs = require(`fs`);

const getAllQuestions = () => {
    let data = fs.readFileSync(`./questions.json`);
    let parsedData = JSON.parse(data);
    return parsedData;
}


module.exports = { getAllQuestions };