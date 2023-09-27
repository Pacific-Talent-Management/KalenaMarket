const bcrypt = require('bcrypt');

//let pswrd = bcrypt.hashSync('bobpass', 9);
//let pswrd = bcrypt.hash('bobpass',9);
async function getpswrd(text) {
    const password = await bcrypt.hash(text,10); 
    console.log(password);
}
//console.log(pswrd)
getpswrd('bobpass');
