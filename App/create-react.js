const execSync = require("child_process")
const ps = require("prompt-sync")
const prompt = ps()
const absulotePath = require("path")
const path = absulotePath.join(__dirname, "..", "createReact.bat")
const fsPromises = require("fs/promises")

async function createReact() {
    try {
        const createReactApp = isCreateReact()
        if (createReactApp === "true") {
            execSync("npm i create-react-app -g")
            console.log("Downloaded create-react-app globally")
        }
        else if (createReactApp === "false") {
            console.log("Cannot create react app, please install create-react-app")
            return
        }
        else {
            console.log("create-react-app exists")
        }

        const reactAppName = prompt("Enter your react app name:")
        const data = `
    cd ..
    create-react-app ${reactAppName} --template typescript
    pause
    `
        await fsPromises.writeFile(path, data)
        execSync.execSync(`start ${path}`)
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = createReact