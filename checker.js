const fs = require('fs')

function checkRequiredFiles() {
  const files = [
    './public/hero1.jpg',
    './public/hero2.jpg',
    './public/logo.png',
    './public/pres.jpg',
    './public/whatsapp-icon.png',
    './public/favicon.png',
  ]

  files.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      console.log(`${filePath} not found`)
      throw new Error(`${filePath} not found`)
    }
  })

  console.log('\nAll files found.\nReady to proceed!\n🚀\n')
}

function main() {
  checkRequiredFiles()
}

main()
