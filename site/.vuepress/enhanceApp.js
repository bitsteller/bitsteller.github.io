// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  Vue.filter('formatDate', function(date) {
  	var timeUnits = {
		second: 1,
		minute: 60,
		hour: 3600,
		day: 86400,
		week: 604800,
		month: 2592000,
		year: 31536000
	};

  	var date = new Date(date);

    var dateStr, amount,
        current = new Date().getTime(),
        diff = (current - date.getTime()) / 1000;

    if(diff > timeUnits.week) {
        dateStr = date.getFullYear() + "-";
        if (date.getMonth()+1 < 10) 
            dateStr += "0";
        dateStr += (date.getMonth()+1) + "-";
        if (date.getDate() < 10)
            dateStr += "0";
        dateStr += date.getDate();
    }
    else if(diff > timeUnits.day) {
        amount = Math.round(diff/timeUnits.day);
        dateStr = ((amount > 1) ? amount + " " + "days ago":"one day ago");
    } 
    else if(diff > timeUnits.hour) {
        amount = Math.round(diff/timeUnits.hour);
        dateStr = ((amount > 1) ? amount + " " + "hour" + "s":"an " + "hour") + " ago";
    } 
    else if(diff > timeUnits.minute) {
        amount = Math.round(diff/timeUnits.minute);
        dateStr = ((amount > 1) ? amount + " " + "minute" + "s":"a " + "minute") + " ago";
    } 
    else {
        dateStr = "a few seconds ago";
    }

    return dateStr;


	})
}