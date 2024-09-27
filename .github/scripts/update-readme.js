const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '../../백준/README.md');
const baekjoonPath = path.join(__dirname, '../../백준');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

let newContent = '\n\n## 업데이트된 문제\n';
newContent += '| 문제 번호 | 문제 이름 | 문제 링크 |\n';
newContent += '| -------- | ---------- | --------- |\n';

fs.readdirSync(baekjoonPath).forEach((file) => {
  if (file.endsWith('.md')) {
    const problemNumber = file.replace('.md', '');
    const problemName = problemNumber;
    const problemLink = `./${file}`;
    newContent += `| ${problemNumber} | ${problemName} | [링크](${problemLink}) |\n`;
  }
});

const updatedReadmeContent = `${readmeContent}${newContent}`;

// README 파일 덮어쓰기
fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');
console.log('README updated successfully!');
