const { all } = require("../app");
const db = require("../model/db_connection");

const getMean = (array) => {
  return Math.round(
    array.reduce((sum, value) => {
      return sum + value;
    }, 0) / array.length
  );
};

exports.getTests = (req, res) => {
  db.any("select * from speedtests")
    .then((data) => {
      const avg = getMean(Array.from(data, (x) => x.speed));
      const recentFirst = data.reverse();
      res.status(200);
      res.render("index", { data: recentFirst, averageSpeed: avg });
    })
    .catch((err) => {
      console.error(err);
    });
};
