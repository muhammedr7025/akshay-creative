const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace font weights with font-light
    content = content.replace(/\bfont-(bold|semibold|medium|black)\b/g, 'font-light');
    
    // Remove italic
    content = content.replace(/\bitalic\b/g, '');
    
    // Remove lowercase/normal-case
    content = content.replace(/\b(lowercase|normal-case)\b/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
}

function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkSync(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            replaceInFile(filePath);
        }
    }
}

walkSync('./components');
walkSync('./app');

console.log('Typography cleaned.');
