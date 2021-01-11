# Speedtest Server

An app to run occasional background speedtests because I want to know what my average is and when it drops over a day/week etc.

* Express/node Server set to hit speedtest api via cron schedule.
* Postgresql db to dump scores into (you'll have to create and connect to a psql db or change the model system).
* Ejs/bootstrap index page to view results and averages.
* hit /speedtest to run a test on demand.
* Run it on your localhost
* Make a .env file for your keys and whatnot
* Change the cron schedule to run at different intervals