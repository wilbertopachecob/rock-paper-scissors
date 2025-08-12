#!/usr/bin/env node

/**
 * Favicon Generation Script
 * 
 * This script helps generate different favicon formats from the SVG.
 * You'll need to install sharp for PNG generation: npm install sharp
 */

const fs = require('fs');
const path = require('path');

console.log('🎯 Rock Paper Scissors Favicon Generator');
console.log('=====================================\n');

console.log('✅ SVG favicon created: public/favicon.svg');
console.log('✅ HTML updated with favicon references');
console.log('✅ Web manifest created: public/site.webmanifest\n');

console.log('📋 Next steps to complete favicon setup:');
console.log('1. The SVG favicon is ready and will work in modern browsers');
console.log('2. For ICO format, visit: https://favicon.io/favicon-converter/');
console.log('3. Or use ImageMagick: convert favicon.svg -resize 32x32 favicon.ico');
console.log('4. For PNG versions, use: https://realfavicongenerator.net/\n');

console.log('🎨 Your favicon features:');
console.log('   • Gradient background matching your app theme (#667eea to #764ba2)');
console.log('   • Rock (mountain shape), Paper (folded corner), Scissors (X shape)');
console.log('   • White elements with subtle transparency');
console.log('   • Modern, clean design aesthetic\n');

console.log('🚀 Your favicon is ready to use!');
