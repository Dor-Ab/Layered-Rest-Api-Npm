const ps = require("prompt-sync")
const prompt = ps()

function isTsNode() {
    const positive = ["YES", "Y", "y", "yes", "Yes"]
    try {
        require("ts-node")
        return
    }
    catch {
        let userInput = prompt("You dont have ts-node installed globally, would you like us to install it globally? Y/N:", "false")

        const yes = positive.find(p => userInput === p)
        if (yes) {
            console.log("Downloading ts-node globally")
            return ("true")
        }
        else {
            console.log("Downloading ts-node locally")
            return ("false")
        }
    }
}
module.exports = isTsNode