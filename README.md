# Speedtest app with Nodejs/express

An app to run occasional background speedtests in the background because I want to know what my average is or when it drops over a day/week etc.

* Nodejs/Express/ejs/postgresql/fast-speedtest-api
* Express/node Server set to hit speedtest api at intervals
* Postgresql db to dump scores into (you'll have to create and connect to a psql db or change the model system).
* Ejs to view results and averages
* Run it on your localhost
* Make a .env file for your keys and whatnot
* Change the cron schedule to run at different intervals

