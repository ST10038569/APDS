import http from "http";

const PORT = 3000;

const server = http.createServer((req,res) => {
    res.end("I am crying less because it is working")
})

server.listen(PORT);