const ps = require("prompt-sync")
const prompt = ps()

function isCreateReact() {
    const positive = ["YES", "Y", "y", "yes", "Yes"]
    try {
        require("create-react-app")
        return
    }
    catch {
        let userInput = prompt("You dont have create-react-app installed globally, would you like us to install it globally? Y/N:", "false")

        const yes = positive.find(p => userInput === p)
        if (yes) {
            console.log("Downloading create-react-app globally")
            return ("true")
        }
        else {
            return ("false")
        }
    }
}

module.exports = isCreateReact