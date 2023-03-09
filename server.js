const express = require('express')

const app = express()

const PORT = 7077 

const numOfBottles = 99;


app.get('/', (req, res) => {
    res.send(`
        <h1>${numOfBottles} Bottles of beer on the wall</h1>
        <a href="/98">take one down, pass it around</a>  
    `) 
})
/***
 * When a number is given in the url (get "/:number_of_bottles"), users should see:
The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
 */

app.get('/:number_of_bottles', (req, res) => {
console.log(req.params.number_of_bottles)
console.log(req.params.number_of_bottles == 0 ) // JS being weirddd

    if (req.params.number_of_bottles < 1 ){
        
        res.send( `
        <h1> 
        <a href="/">Start Over</a>  
        </h1>
        `)
        
    } else {


        res.send(`
       
        <a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>  
    

        `)
    }

   

})

//Load port 
app.listen(PORT, () => {
    console.log('Listening on PORT:' + PORT)
})