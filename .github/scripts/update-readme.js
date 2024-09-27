const fs = require('fs');
const path = require('path');

const HEADER = ''; // Define any header content you want

function updateReadme() {
  let content = '';
  content += '## 백준\n'; // '백준' 섹션 고정

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

  // 상대 경로로 변경
  const filesList = walkSync(path.join('백준'));

  filesList.forEach(({ file, root }) => {
    const category = path.basename(root); // 문제 카테고리 (Silver, Gold 등)

    // 불필요한 상위 디렉토리 제거
    if (category === '.' || category === 'images' || category === '백준')
      return;

    const directory = path.basename(path.dirname(root)); // 상위 디렉토리 (Silver, Gold 등)

    if (!directories.includes(directory)) {
      content += `### 🪄 ${directory}\n`;
      content += '| 문제번호 | 문제 | 링크 |\n';
      content += '| ----- | --- | ----- |\n';
      directories.push(directory);
    }

    if (!solveds.includes(category)) {
      const problemLink = `./${path.join('./', directory, category)}`; // 상대 경로로 수정

      const [num, problem] = category.split('.');
      content += `|${num} | ${problem} | [링크](${problemLink})|\n`;
      solveds.push(category);
    }
  });

  const readmePath = path.join('백준', 'README.md');
  fs.writeFileSync(readmePath, content, 'utf8');
  console.log('README updated successfully!');
}

updateReadme();
