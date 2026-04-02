import fs from 'fs';
const content = fs.readFileSync('src/data/projects.ts', 'utf8');

const startMarkerRegex = /  \{\r?\n    id: 'swag-labs-playwright',/;
const endMarkerRegex = /      \}\r?\n    \}\r?\n  \},/;

const matchStart = content.match(startMarkerRegex);
if (matchStart) {
    const swagIndex = matchStart.index;
    const matchEnd = content.slice(swagIndex).match(endMarkerRegex);

    if (matchEnd) {
        let swagEnd = swagIndex + matchEnd.index + matchEnd[0].length;

        // Also grab the newline literal after it
        let swagBlock = content.substring(swagIndex, swagEnd);

        // remove the block and the following newline from the document
        let rest = content.slice(0, swagIndex) + content.slice(swagEnd + 1);
        // remove trailing empty carriage returns/newlines left behind
        rest = rest.replace(/,\r?\n\r?\n  \{/, ',\r\n  {');

        // Find where the array starts
        const arrayStartMatch = rest.match(/export const projects: Project\[\] = \[\r?\n/);
        const insertPoint = arrayStartMatch.index + arrayStartMatch[0].length;

        // Insert at the beginning of the array, add a trailing newline
        let result = rest.slice(0, insertPoint) + swagBlock + ',\n' + rest.slice(insertPoint);

        // remove double trailing comma if one was added
        result = result.replace(/\},\n,\n/, '},\n');

        fs.writeFileSync('src/data/projects.ts', result);
        console.log("Moved successfully.");
    } else {
        console.log("Could not find end marker.");
    }
} else {
    console.log("Could not find start marker.");
}
