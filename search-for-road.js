import { readFileSync, readdirSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Function to search for a string in files
function searchInFiles(dir, searchString, extensions) {
  const results = [];
  
  // Read all files in the directory
  const files = readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = join(dir, file.name);
    
    if (file.isDirectory()) {
      // Recursively search in subdirectories
      results.push(...searchInFiles(filePath, searchString, extensions));
    } else {
      // Check if file has one of the specified extensions
      const ext = extname(file.name).toLowerCase();
      if (extensions.includes(ext)) {
        try {
          const content = readFileSync(filePath, 'utf8');
          if (content.includes(searchString)) {
            results.push({
              file: filePath,
              lines: content.split('\n')
                .map((line, index) => ({ line, lineNumber: index + 1 }))
                .filter(({ line }) => line.includes(searchString))
            });
          }
        } catch (err) {
          console.error(`Error reading file ${filePath}:`, err);
        }
      }
    }
  }
  
  return results;
}

// Search for "Road" in all TypeScript and JavaScript files
const searchResults = searchInFiles(
  'src', 
  'Road', 
  ['.tsx', '.jsx', '.ts', '.js']
);

// Display results
console.log('Files containing "Road":');
if (searchResults.length === 0) {
  console.log('No files found containing "Road"');
} else {
  searchResults.forEach(result => {
    console.log(`\nFile: ${result.file}`);
    result.lines.forEach(({ line, lineNumber }) => {
      console.log(`  Line ${lineNumber}: ${line.trim()}`);
    });
  });
}
