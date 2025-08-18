const fs = require('fs');
const Handlebars = require('handlebars');

// 1. 注册 helpers
require('./helpers')(Handlebars);

// 2. 读取模板 & 数据
const templateSource = fs.readFileSync('./template-new.hbs', 'utf8');
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// 3. 编译模板
const template = Handlebars.compile(templateSource);

// 4. 渲染输出 HTML
const html = template(data);

// 5. 写入到预览文件
fs.writeFileSync('./preview.html', html, 'utf8');

console.log('✅ 模板已渲染到 preview.html');
