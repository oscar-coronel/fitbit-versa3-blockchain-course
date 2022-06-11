import { runClock } from './src/clock/index'
import { verifyHeartRate } from './src/heart_rate/index'
import { sendMessage } from './src/messaging/index'

runClock()

setInterval(() => verifyHeartRate(sendMessage), 5000);