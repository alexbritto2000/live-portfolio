const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\Application\\msedge.exe'
];

let browserPath = null;
for (const p of chromePaths) {
  if (p && fs.existsSync(p)) {
    browserPath = p;
    break;
  }
}

if (!browserPath) {
  console.error('No Chrome or Edge browser found.');
  process.exit(1);
}

const outputPath = path.resolve(__dirname, '../public/Alex_Britto_Resume.pdf');
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--run-all-compositor-stages-before-draw',
  `--print-to-pdf=${outputPath}`,
  '--no-pdf-header-footer',
  'http://localhost:3000/resume'
];

console.log('Generating PDF using:', browserPath);
execFile(browserPath, args, (err, stdout, stderr) => {
  if (err) {
    console.error('Error generating PDF:', err);
    process.exit(1);
  }
  console.log('PDF generated at:', outputPath);
  // Also copy to other common CV download names
  const publicDir = path.resolve(__dirname, '../public');
  fs.copyFileSync(outputPath, path.join(publicDir, 'AlexBritto_CV.pdf'));
  fs.copyFileSync(outputPath, path.join(publicDir, 'Alex_CV.pdf'));
  console.log('Synchronized to AlexBritto_CV.pdf and Alex_CV.pdf');
});
