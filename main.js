#!/usr/bin/env node
const initProject = require("./App/initialize-project")
const downloadPackages = require("./App/download-packages")
const createFiles = require("./App/create-files")
const createFolders = require("./App/create-folders")
const createReact = require("./App/create-react")

async function getStarted() {
    const argv = global.process.argv
    const sql = argv.filter(a => a == "sql")[0]
    const react = argv.filter(a => a == "react")[0]
    if (react) {
        await createReact()
    }
    initProject()
    downloadPackages(sql)
    await createFolders()
    await createFiles(sql)
}
getStarted()