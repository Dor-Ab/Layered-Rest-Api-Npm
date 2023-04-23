const execSync = require("child_process").execSync
const isNodemonGlobal = require("./is-nodemon-global")
const isTsNode = require("./is-tsnode")
const isPromptSync = require("./is-promp-sync")

function downloadPackages(sql) {
    try {
        //Checks if sql sent with the getStarted function
        if (sql) {
            execSync("npm i mysql")
            console.log("Downloaded mysql")

            execSync("npm i @types/mysql -D")
            console.log("Downloaded @types/mysql")
        }

        const promptSyncUserInput = isPromptSync()

        if (promptSyncUserInput === "true") {
            execSync("npm i nodemon -g")
            console.log("Downloaded prompt-sync globally")
        }
        else if (promptSyncUserInput === "false") {
            execSync("npm i nodemon")
            console.log("Downloaded prompt-sync locally")
        }
        else {
            console.log("prompt-sync exists")
        }

        // Checks if nodemone installed globally, if not ask user to install locally or globally
        const nodemonUserInput = isNodemonGlobal()

        // Execute action by user input
        if (nodemonUserInput === "true") {
            execSync("npm i nodemon -g")
            console.log("Downloaded nodemon globally")
        }
        else if (nodemonUserInput === "false") {
            execSync("npm i nodemon")
            console.log("Downloaded nodemon locally")
        }
        else {
            console.log("Nodemon exists")
        }

        // Checks if ts-node installed globally, if not ask user to install locally or globally
        const tsNodeUserInput = isTsNode()

        // Execute action by user input
        if (tsNodeUserInput === "true") {
            execSync("npm i ts-node -g")
            console.log("Downloaded ts-node globally")
        }
        else if (tsNodeUserInput === "false") {
            execSync("npm i ts-node")
            console.log("Downloaded ts-node locally")
        }
        else {
            console.log("ts-node exists")
        }

        execSync("npm i express")
        console.log("Downloaded express")

        execSync("npm i @types/express -D")
        console.log("Downloaded @types/express")

        execSync("npm i joi")
        console.log("Downloaded joi")

        execSync("npm i @types/node -D")
        console.log("Downloaded types/node")

        execSync("npm i cors")
        console.log("Downloaded cors")

        execSync("npm i @types/cors -D")
        console.log("Downloaded @types/cors")

        console.log(" ")
        console.log("Successfully downloaded packages!")
        console.log("-----------------------------")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = downloadPackages