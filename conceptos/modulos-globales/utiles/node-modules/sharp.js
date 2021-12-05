const sharp = require('sharp');

sharp('js_800x800.jpg')
  .resize(80)
  .toFile('javascript.png');
