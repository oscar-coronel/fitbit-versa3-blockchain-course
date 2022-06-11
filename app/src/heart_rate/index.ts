import { HeartRateSensor } from "heart-rate";
//import { display } from "display";

export function verifyHeartRate(sendMessage: Function): void {

    if (HeartRateSensor) {
        const hrm = new HeartRateSensor();
        hrm.addEventListener("reading", () => {

            let data = {
                heart_rate: `${hrm.heartRate} (beats per minute)`,
                timestamp: hrm.timestamp,
            }
            sendMessage(data)

            hrm.stop();
        });
        hrm.start();
    } else {
        console.log("This device does NOT have a HeartRateSensor!");
    }

}