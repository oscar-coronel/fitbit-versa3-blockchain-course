import document from 'document';
import clock from 'clock';

clock.granularity = "seconds"; // seconds, minutes, hours

const clockLabel = document.getElementById("clock-label");

export function runClock() {
    clock.addEventListener("tick", (evt) => {
      let hours = String('00' + evt.date.getHours()).slice(-2)
      let minutes = String('00' + evt.date.getMinutes()).slice(-2)
      let seconds = String('00' + evt.date.getSeconds()).slice(-2)

      clockLabel.text = `${ hours }:${ minutes }:${ seconds }`
    });
}