const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) {
        fs.mkdirSync(to, { recursive: true });
    }

    fs.readdirSync(from).forEach(element => {
        const stat = fs.lstatSync(path.join(from, element));
        if (stat.isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else if (stat.isDirectory()) {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

// Copy public directory to out directory
const publicDir = path.join(__dirname, '..', 'public');
const outDir = path.join(__dirname, '..', 'out');

// Copy all assets
['images', 'videos', 'icons'].forEach(folder => {
    const fromPath = path.join(publicDir, folder);
    const toPath = path.join(outDir, folder);
    if (fs.existsSync(fromPath)) {
        copyFolderSync(fromPath, toPath);
    }
});

// Copy root files
fs.readdirSync(publicDir).forEach(file => {
    const stat = fs.lstatSync(path.join(publicDir, file));
    if (stat.isFile()) {
        fs.copyFileSync(path.join(publicDir, file), path.join(outDir, file));
    }
});
