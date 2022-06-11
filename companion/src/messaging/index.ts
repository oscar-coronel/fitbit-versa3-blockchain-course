import * as messaging from 'messaging'
import { sendData } from './../helpers/helpers'

messaging.peerSocket.addEventListener('message', (evt) => {
    sendData( evt.data )
})