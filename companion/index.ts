function updateDisplay() {
  console.log(`Hi World Companion`)
  sendData()
}

setInterval(updateDisplay, 5000);

const sendData = async () => {

  await fetch('http://localhost:4000/fitbit/send_data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 2,
      name: 'Mariana',
      lastname: 'Vaca'
    })
  }).catch( error => {
    console.log(`[Companion] Error: ${error}`)
  })

}