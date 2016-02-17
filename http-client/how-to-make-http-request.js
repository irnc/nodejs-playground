const http = require('http')

const handleResponse = (res) => {
  console.log(`Status: ${res.statusCode}`)

  res.on('data', (chunk) => {
    console.log(`chunk: ${chunk.length}`)
  })

  res.on('end', () => {
    console.log('end')
  })
}

const req = http.request('http://forum.grodno.net', handleResponse)

req.on('error', (e) => {
  console.log(`error with request: ${e.message}`)
})

req.end()
