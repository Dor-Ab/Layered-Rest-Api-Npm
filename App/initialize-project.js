const execSync = require('child_process').execSync

function initProject() {
    try {
        execSync("npm init -y")
        execSync('npm pkg set "scripts.start"="nodemon --exec ts-node src/app.ts"')
        execSync("npm pkg delete scripts.test")
        console.log("Project Initialized")
        console.log("-----------------------------")
        return
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = initProject