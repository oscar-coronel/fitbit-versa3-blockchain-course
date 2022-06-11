import * as messaging from 'messaging'

messaging.peerSocket.addEventListener('open', (evt) => {
    console.log('Ready to send and receive messages')
})

messaging.peerSocket.addEventListener('error', (error) => {
    console.log(`Connection error: ${error.code} - ${error.message}`)
})


export function sendMessage(data: any): void {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN)
        messaging.peerSocket.send(data)
}