const focus = "I am mr Focus";

const random = ()=>{
   return(`${~~(Math.random()*100)}%`);
}

// module.exports = focus;

// module.exports = random;
exports.focus = focus ;
exports.random = random ;