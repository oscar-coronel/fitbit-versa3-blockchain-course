import document from 'document';

import { HeartRateSensor } from "heart-rate";


/*import clock from 'clock';
clock.granularity  = 'minutes';
var clockLabel = document.getElementById('clock-label');
clock.addEventListener('tick', (evt) => {
    clockLabel.text = evt.date.toTimeString().slice(0, -4);
})*/

let eContador = document.getElementById("contador");

function updateDisplay() {
  const newValue = String(Number(eContador.text) + 1)
  console.log(`Hi World ${ newValue }`)
  eContador.text = newValue

  if (HeartRateSensor) {
    console.log("This device has a HeartRateSensor!");
    const hrm = new HeartRateSensor();
    hrm.addEventListener("reading", () => {
      console.log(`Current heart rate: ${hrm.heartRate}`);
    });
    hrm.start();
  } else {
    console.log("This device does NOT have a HeartRateSensor!");
  }

}

setInterval(updateDisplay, 5000);

/*
import { HeartRateSensor } from "heart-rate";
import document from 'document';


// Fetch UI elements we will need to change
let hrLabel = document.getElementById("hrm");
let updatedLabel = document.getElementById("updated");

// Keep a timestamp of the last reading received. Start when the app is started.
let lastValueTimestamp = Date.now();

// Initialize the UI with some values
hrLabel.text = "--";
updatedLabel.text = "...";

// This function takes a number of milliseconds and returns a string
// such as "5min ago".
function convertMsAgoToString(millisecondsAgo) {
  if (millisecondsAgo < 120*1000) {
    return Math.round(millisecondsAgo / 1000) + "s ago";
  }
  else if (millisecondsAgo < 60*60*1000) {
    return Math.round(millisecondsAgo / (60*1000)) + "min ago";
  }
  else {
    return Math.round(millisecondsAgo / (60*60*1000)) + "h ago"
  }
}

// This function updates the label on the display that shows when data was last updated.
function updateDisplay() {
  if (lastValueTimestamp !== undefined) {
    updatedLabel.text = convertMsAgoToString(Date.now() - lastValueTimestamp);
  }
}

// Create a new instance of the HeartRateSensor object
const _HeartRateSensor: any = HeartRateSensor;

var hrm: HeartRateSensor = new _HeartRateSensor();

// Declare an event handler that will be called every time a new HR value is received.
hrm.onreading = function() {
  // Peek the current sensor values
  console.log("Current heart rate: " + hrm.heartRate);
  hrLabel.text = hrm.heartRate.toString();
  lastValueTimestamp = Date.now();
}

// Begin monitoring the sensor
hrm.start();

// And update the display every second
setInterval(updateDisplay, 1000);*/