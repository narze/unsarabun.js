const fs = require("fs")

const filePath = process.argv[2]

try {
  const data = fs.readFileSync(filePath, "utf8")

  const arabicData = data.replace(
    /[๐-๙]/g,
    (match) => match.charCodeAt(0) - 3664
  )

  fs.writeFileSync(filePath, arabicData, "utf8")
  console.log("Un-sarabun'd")
} catch (err) {
  console.error(err)
}
