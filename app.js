const express = require('express')

const app = express()
const fs = require('fs')

// Root endpoint - redirects to index
app.get('/', (req, res) => {
    
    // give a 200 OK status and redirect to the landing page
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    // res.writeHead(200); // careful -  cant send response code twice!
    // res.send(200, 'This is a placeholder for the landing page of my website.');
    res.writeHead(200, { 'Content-type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else{
            res.write(data)
        }
        res.end()
    })
})

app.get('/Display', (req, res) => {
    res.writeHead(200); // careful -  cant send response code twice!
    // res.send(200, 'This is a placeholder for the landing page of my website.');
    // res.writeHead(200, { 'Content-type': 'text/html' })
    // fs.readFile('index.html', function(error, data) {
    //     if(error){
    //         res.writeHead(404)
    //         res.write('Error: File Not Found')
    //     } else{
    //         res.write(data)
    //     }
    //     res.end()
    // })
})

const port = process.env.PORT || 4000
//Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}...`));
