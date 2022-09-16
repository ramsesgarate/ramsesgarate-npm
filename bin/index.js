import colors from 'picocolors'
import boxen from 'boxen'

const { white, cyan, gray, green, red, blue, bold, magenta } = colors
// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: white('           Ramses Garate'),
  handle: white('ramsesgarate'),
  work: white('     Frontend Developer in Falabella Financiero'),
  twitter: gray('https://twitter.com/') + cyan('ramsesgarate'),
  npm: gray('https://npmjs.com/') + red('~rsgarate'),
  github: gray('https://github.com/') + green('ramsesgarate'),
  linkedin: gray('https://linkedin.com/in/') + blue('ramsesgarate'),
  instagram: gray('https://www.instagram.com/') + magenta('rsgarate'),
  web: cyan('https://ramsesgarate.com'),
  labelWork: white(bold('       Work:')),
  labelTwitter: white(bold('    Twitter:')),
  labelnpm: white(bold('        npm:')),
  labelGitHub: white(bold('     GitHub:')),
  labelLinkedIn: white(bold('   LinkedIn:')),
  labelInstagram: white(bold('  Instagram:')),
  labelWeb: white(bold('        Web:'))
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const instragraming = `${data.labelInstagram}  ${data.instagram}`
const webing = `${data.labelWeb}  ${data.web}`

const output =
  heading +
  newline +
  working + newline + newline +
  twittering + newline +
  npming + newline +
  githubing + newline +
  linkedining + newline +
  instragraming + newline + newline +
  webing

console.log(green(boxen(output, options)))
