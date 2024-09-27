const fs = require('fs');
const path = require('path');

// 파일 경로 설정
const readmePath = path.join(__dirname, '../../백준/README.md');
const baekjoonPath = path.join(__dirname, '../../백준');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

let tableStartIndex = readmeContent.indexOf(
  '| 문제 번호 | 문제 이름 | 문제 링크 |',
);
let newContent = '';

if (tableStartIndex !== -1) {
  newContent += '\n';
} else {
  newContent += '\n\n## 업데이트된 문제\n';
  newContent += '| 문제 번호 | 문제 이름 | 문제 링크 |\n';
  newContent += '| -------- | ---------- | --------- |\n';
}

fs.readdirSync(baekjoonPath).forEach((file) => {
  if (file.endsWith('.md')) {
    const problemNumber = file.replace('.md', '');
    const problemName = problemNumber;
    const problemLink = `./${file}`;
    const row = `| ${problemNumber} | ${problemName} | [링크](${problemLink}) |\n`;

    if (!readmeContent.includes(row)) {
      newContent += row;
    }
  }
});

// README 파일에 새로운 내용 추가
const updatedReadmeContent = `${readmeContent}${newContent}`;
fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');
console.log('README updated successfully!');
