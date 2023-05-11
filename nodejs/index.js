const http = require("http");
const features = require("./features");
const fs = require("fs");

console.log(`${features.random()}`, `${features.focus}`);
// const home = fs.readFile("./home.html",()=>{
//     console.log("reading done");
// });

const home = fs.readFileSync("./home.html");



const server = http.createServer(( req, res)=>{
//    console.log( req.url)
    console.log("inside serverr");
    // res.end("<h1>Noice</h1>")

    if(req.url === '/'){
        res.end(`<h1>Home is ${features.random()}</h1> ${home} `)
    }
    else if(req.url === '/about'){
        res.end("<h1>About</h1>")
    }
    else if(req.url === '/services'){
        res.end("<h1>Services</h1>")
    }
    else if(req.url === '/contact'){
        fs.readFile("./contact.html", (error, dataa)=>{
            res.end(dataa);
        })
    }

    else{
        res.end("<h1>Page not Found </h1>")
    }
})

server.listen(5000, ()=>{
    console.log("server is working");
})