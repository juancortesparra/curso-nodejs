const { exec } = require('child_process');
const { stdout, stderr } = require('process');

exec('ls -la', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
});
