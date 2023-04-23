const fsPromises = require("fs/promises")
const os = require('os')
// const restApiPath = `C:/Users/${os.userInfo().username}/AppData/Roaming/npm/node_modules/layered-api-dev-ts/App/Utils`
const path = require("path")
const restApiPath = path.join(__dirname, "..", "App", "Utils")

async function createFiles(sql) {
    try {
        if (sql) {
            const dalSql = await fsPromises.readFile(`${restApiPath}/Make Utils/dal.txt`, "utf-8")
            await fsPromises.writeFile("./src/2-Utils/dal.ts", dalSql)

            const appConfigSql = await fsPromises.readFile(`${restApiPath}/Make Utils/app-config-sql.txt`, "utf-8")
            await fsPromises.writeFile("./src/2-Utils/app-config.ts", appConfigSql)
        }
        else {
            await fsPromises.writeFile("./src/2-Utils/dal.ts", "")

            const appConfig = await fsPromises.readFile(`${restApiPath}/Make Utils/app-config.txt`, "utf-8")
            await fsPromises.writeFile("./src/2-Utils/app-config.ts", appConfig)
        }

        const loggerFile = await fsPromises.readFile(`${restApiPath}/Make Utils/logger.txt`, "utf-8")
        await fsPromises.writeFile("./src/2-Utils/logger.ts", loggerFile)

        const catchAllFile = await fsPromises.readFile(`${restApiPath}/Make Middlewares/catch-all.txt`, "utf-8")
        await fsPromises.writeFile("./src/3-Middleware/catch-all.ts", catchAllFile)

        const routeNotFoundFile = await fsPromises.readFile(`${restApiPath}/Make Middlewares/route-not-found.txt`, "utf-8")
        await fsPromises.writeFile("./src/3-Middleware/route-not-found.ts", routeNotFoundFile)

        const errorModelFile = await fsPromises.readFile(`${restApiPath}/Make Models/error-models.txt`, "utf-8")
        await fsPromises.writeFile("./src/4-Models/error-model.ts", errorModelFile)

        const appFile = await fsPromises.readFile(`${restApiPath}/Make App/app.txt`, "utf-8")
        await fsPromises.writeFile("./src/app.ts", appFile)

        const tsconfigFile = await fsPromises.readFile(`${restApiPath}/Make Tsconfig/tsconfig.txt`, "utf-8")
        await fsPromises.writeFile("./tsconfig.json", tsconfigFile)

        console.log("Successfully created all files!")
        console.log("---------------------------------")
        console.log("Finished")

        const siginiture = await fsPromises.readFile(`${restApiPath}/Signiture/signiture.txt`, "utf-8")
        console.log(siginiture)
        console.log("Enjoy Coding :)")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = createFiles