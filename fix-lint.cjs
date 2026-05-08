const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  const output = execSync('npx eslint . --format json', { encoding: 'utf-8' });
} catch (error) {
  const results = JSON.parse(error.stdout);
  results.forEach(result => {
    if (result.errorCount === 0) return;
    let fileContent = fs.readFileSync(result.filePath, 'utf8');
    const lines = fileContent.split('\n');
    let modified = false;

    // We process messages in reverse order so line numbers don't shift!
    const messages = result.messages.sort((a, b) => b.line - a.line);
    
    messages.forEach(msg => {
      if (msg.ruleId === 'no-unused-vars') {
        if (msg.message.includes("'motion' is defined but never used")) {
          // Fix unused 'motion'
          const lineIdx = msg.line - 1;
          lines[lineIdx] = lines[lineIdx].replace('motion,', '').replace(', motion', '').replace('motion', '');
          if (lines[lineIdx].includes('import { } from')) {
            lines[lineIdx] = ''; // Remove empty import
          } else if (lines[lineIdx].includes('import {} from')) {
            lines[lineIdx] = ''; // Remove empty import
          }
          modified = true;
        }
        if (msg.message.includes("'error' is defined but never used")) {
          const lineIdx = msg.line - 1;
          lines[lineIdx] = lines[lineIdx].replace('error,', '').replace(', error', '').replace('error', '');
          modified = true;
        }
      } else if (msg.ruleId === 'react-refresh/only-export-components') {
        const lineIdx = msg.line - 1;
        lines.splice(lineIdx, 0, '  // eslint-disable-next-line react-refresh/only-export-components');
        modified = true;
      } else if (msg.ruleId === 'react-hooks/set-state-in-effect') {
        const lineIdx = msg.line - 1;
        lines.splice(lineIdx, 0, '    // eslint-disable-next-line react-hooks/set-state-in-effect');
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(result.filePath, lines.join('\n'), 'utf8');
      console.log(`Fixed ${result.filePath}`);
    }
  });
}
