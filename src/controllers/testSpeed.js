const FastSpeedtest = require("fast-speedtest-api");
const db = require("../model/db_connection");

const timestamp = () => {
  return new Date().toString();
};

exports.doSpeedtest = (req, res) => {
  let speedtest = new FastSpeedtest({
    token: process.env.FAST_API_TOKEN,
    unit: FastSpeedtest.UNITS.Mbps,
  });

  speedtest
    .getSpeed()
    .then((s) => {
      db.none(
        "insert into speedtests(created_at, speed)" +
          `values(current_timestamp, ${s})`
      )
        .then(() => {
          console.log(`${timestamp()}: ${s} Mbps`);
          return req && req.originalUrl === "/speedtest"
            ? res.send(`${timestamp()}: ${s} Mbps`)
            : null;
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((e) => {
      console.error(e.message);
    });
};
