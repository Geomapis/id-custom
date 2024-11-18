const fs = require('fs');
const path = require('path');

// Define input and output file paths
const inputFilePath = path.join(__dirname, 'imagery.json');
const outputFilePath = path.join(__dirname, 'imagery.min.json');

// Read the JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Convert to minified JSON string
        const minifiedJson = JSON.stringify(jsonData);

        // Write the minified JSON to a new file
        fs.writeFile(outputFilePath, minifiedJson, (err) => {
            if (err) {
                console.error('Error writing the file:', err);
                return;
            }
            console.log('Minified JSON has been saved to min.json');
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
