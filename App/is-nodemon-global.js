const ps = require("prompt-sync")
const prompt = ps()

function isNodemonGlobal(){
    const positive = ["YES","Y","y","yes","Yes"]
    try {
        require("nodemon")
        return
    } 
    catch {
            let userInput = prompt( "You dont have nodemon installed globally, would you like us to install it globally? Y/N:","false")

            const yes = positive.find(p=> userInput === p)
            if(yes) 
            {
                console.log("Downloading nodemon globally")
                return("true")
            }    
            else{
                console.log("Downloading nodemon locally")
                return("false")
            }
        }
}
module.exports = isNodemonGlobal