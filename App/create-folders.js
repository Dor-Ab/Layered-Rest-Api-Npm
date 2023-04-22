const fsPromises = require("fs/promises")

async function createFolders() {
    try {
        await fsPromises.mkdir("./src")
        console.log("Created src main folder")

        await fsPromises.mkdir("./src/1-Assets")
        console.log("Created Assets folder")

        await fsPromises.mkdir("./src/2-Utils")
        console.log("Created Utils folder")

        await fsPromises.mkdir("./src/3-Middleware")
        console.log("Created Middleware folder")

        await fsPromises.mkdir("./src/4-Models")
        console.log("Created Models folder")

        await fsPromises.mkdir("./src/5-Logic")
        console.log("Created Logic folder")

        await fsPromises.mkdir("./src/6-Controllers")
        console.log("Created Controllers folder")
        console.log(" ")
        console.log("Successfully created folders!")
        console.log("-----------------------------")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = createFolders