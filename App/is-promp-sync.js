function isPromptSync() {
    const positive = ["YES", "Y", "y", "yes", "Yes"]
    try {
        require("prompt-sync")
        return
    }
    catch {
        let userInput = prompt("You dont have prompt-sync installed globally, would you like us to install it globally? Y/N:", "false")

        const yes = positive.find(p => userInput === p)
        if (yes) {
            console.log("Downloading prompt-sync globally")
            return ("true")
        }
        else {
            console.log("Downloading prompt-sync locally")
            return ("false")
        }
    }
}
module.exports = isPromptSync