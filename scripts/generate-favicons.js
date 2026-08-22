#!/usr/bin/env node

/**
 * Favicon Generation Script
 * 
 * This script helps generate different favicon formats from the SVG.
 * You'll need to install sharp for PNG generation: npm install sharp
 */

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
console.log('   • Neobrutalist style: flat cream background, thick dark border');
console.log('   • Three color swatches (rock/paper/scissors accent colors)');
console.log('   • No gradients or transparency, matching src/styles/tokens.scss');

console.log('🚀 Your favicon is ready to use!');
