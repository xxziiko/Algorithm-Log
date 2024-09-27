const fs = require('fs');
const path = require('path');
const { parse } = require('url');

const HEADER = ''; // Define any header content you want

function updateReadme() {
  let content = '';
  content += HEADER;

  const directories = [];
  const solveds = [];

  const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        filelist = walkSync(filePath, filelist);
      } else {
        filelist.push({ file, root: dir });
      }
    });
    return filelist;
  };

  const filesList = walkSync('.');

  filesList.forEach(({ file, root }) => {
    const category = path.basename(root);

    if (category === '.' || category === 'images') return;

    const directory = path.basename(path.dirname(root));

    if (directory === '.') return;

    if (!directories.includes(directory)) {
      if (['백준'].includes(directory)) {
        content += `## 📚 ${directory}\n`;
      } else {
        content += `### 🚀 ${directory}\n`;
        content += '| 문제번호 | 링크 |\n';
        content += '| ----- | ----- |\n';
      }
      directories.push(directory);
    }

    if (!solveds.includes(category)) {
      const problemLink = parse(path.join(root, file)).pathname;
      content += `|${category}|[링크](${problemLink})|\n`;
      solveds.push(category);
      console.log('category : ' + category);
    }
  });

  // Write the updated content to README.md
  const readmePath = path.join(__dirname, '../../백준/README.md');
  fs.writeFileSync(readmePath, content, 'utf8');
  console.log('README updated successfully!');
}

updateReadme();
