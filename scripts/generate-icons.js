/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

// remove style and unnecessary characters
const formatSvg = ({ rawSvg, removeFill, name }) => {
  let formattedSvg = rawSvg

  if (removeFill) {
    formattedSvg = formattedSvg.replace(/\sfill="[^\s]*"/g, ' ')
  }

  formattedSvg = formattedSvg
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/\sstyle="[^\s]*"/g, ' ')
    .replace(/\sxmlns="[^\s]*"/g, ' ')
    .replace(/"/g, "'")
    .replace(/>\s+</g, '><')
    .replace(/^\s/, '')
    .replace(/prefix__paint/g, `paint_${name}`)

  return formattedSvg
}

const generateIcons = async () => {
  const iconsFolder = './src/components/Icon/icons/'
  const svgFiles = await fs.readdirSync(iconsFolder)
  let iconsExportContent = ''
  let fileName = ''
  let content = ''

  const readFile = (resolve) => {
    content = fs.readFileSync(`${iconsFolder}/${fileName}`, 'utf-8')
    resolve()
  }

  const updateIconsExportContent = (index) => {
    const iconName = fileName.replace('.svg', '')

    console.log(`Icon: ${iconName}`)

    const isMonoIcon = fileName.split('mono_').length > 1
    iconsExportContent += `\n  "${iconName}": "${formatSvg({
      rawSvg: content,
      removeFill: isMonoIcon,
      name: iconName
    })}"${index + 1 === svgFiles.length ? '' : ','}`
  }

  const saveIconsDataIntoAFile = (index) => {
    if (index + 1 === svgFiles.length) {
      const jsIconsContent = `\n\n{${iconsExportContent}\n}`

      try {
        fs.writeFileSync(
          `${iconsFolder}/icons.json`,
          `${jsIconsContent.trim()}\n`
        )

        console.log('\n---------------------------------')
        console.log('Icons Generated 😄')
        console.log('---------------------------------')
      } catch (e) {
        console.log('\n---------------------------------')
        console.log('Unable to create icons file 😔')
        console.log('---------------------------------')
        throw e
      }
    }
  }

  console.log('\n--------------------------------- \n')

  for (let index = 0; index < svgFiles.length; index += 1) {
    fileName = svgFiles[index]

    if (fileName.indexOf('.svg') !== -1) {
      new Promise((resolve) => readFile(resolve))
        .then(updateIconsExportContent(index))
        .then(saveIconsDataIntoAFile(index))
    }
  }
}

generateIcons()
