import { baseUrl } from './config'

export function postData(end_point: string, data: any) {
    fetch(`${baseUrl}${end_point}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).catch(error => {
        console.log(`[Companion] Error: ${error}`)
    })
}