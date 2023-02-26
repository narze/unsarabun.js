#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const glob = require("glob")

let globPattern = process.argv[2]
const absoluteDir = process.cwd()
const numeralRegex = /[๐-๙]/g

glob(globPattern, { cwd: absoluteDir }, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  files.forEach((file) => {
    const absolutePath = path.resolve(absoluteDir, file)

    try {
      const data = fs.readFileSync(absolutePath, "utf8")
      let changedCount = 0

      const arabicData = data.replace(numeralRegex, (match) => {
        changedCount++
        return match.charCodeAt(0) - 3664
      })

      fs.writeFileSync(absolutePath, arabicData, "utf8")
      console.log(`Un-sarabun'd ${file} (${changedCount} characters changed)`)
    } catch (err) {
      console.error(err)
    }
  })
})
