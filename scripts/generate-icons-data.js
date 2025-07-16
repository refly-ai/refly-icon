const fs = require('fs');
const path = require('path');

// 获取所有SVG文件
const svgDir = path.join(__dirname, '../src/svgs');
const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));

// 生成图标数据
const iconsData = svgFiles.map(file => {
    const name = file.replace('.svg', '');
    const svgPath = path.join(svgDir, file);
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // 提取SVG标签内的所有内容（去除svg标签本身）
    const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
    const svgInnerContent = svgMatch ? svgMatch[1] : '';
    
    // 生成导入代码
    const importCode = `import { ${name} } from 'refly-icons';`;
    
    return {
        name,
        svg: svgInnerContent,
        importCode
    };
});

// 生成JavaScript数据文件
const jsContent = `// 自动生成的图标数据
window.iconsData = ${JSON.stringify(iconsData, null, 2)};
`;

// 写入文件
const outputPath = path.join(__dirname, '../docs/icons-data.js');
fs.writeFileSync(outputPath, jsContent);

console.log(`生成了 ${iconsData.length} 个图标的数据文件: ${outputPath}`); 