import { endPoints } from './../config/config'
import { postData } from './../config/fetch'


export function sendData(data: any) {
    postData( endPoints.send_data, data)
}