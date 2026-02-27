# Refly Icons - 图标库展示

这是一个可定制的 SVG React 图标组件库的展示页面。

## 功能特性

- 🎨 **133 个精美图标** - 涵盖各种常用场景
- 🔍 **实时搜索** - 快速找到需要的图标
- 📋 **一键复制** - 点击图标即可复制导入代码
- 📱 **响应式设计** - 支持各种设备屏幕
- ⚡ **高性能** - 纯 SVG 图标，体积小加载快

## 使用方法

### 1. 安装

```bash
npm install refly-icons
```

### 2. 导入使用

```jsx
import { AiChat, Video, Search } from 'refly-icons';

function App() {
  return (
    <div>
      <AiChat size={24} />
      <Video size={32} />
      <Search size={16} />
    </div>
  );
}
```

### 3. 自定义样式

所有图标都支持通过 CSS 自定义颜色和大小：

```css
.icon {
  color: #007bff;
  width: 24px;
  height: 24px;
}
```

## 键盘快捷键

- `Ctrl/Cmd + K` - 快速聚焦搜索框
- `ESC` - 清空搜索内容

## 开发

### 本地预览

```bash
npm run generate-icons  # 生成图标数据
npm run dev            # 启动本地服务器
```

### 构建

```bash
npm run build
```

## 图标列表

本库包含以下类别的图标：

- **基础操作**: 添加、删除、编辑、复制等
- **导航**: 箭头、返回、前进等
- **界面**: 设置、搜索、菜单等
- **文件**: 文档、图片、视频等
- **状态**: 加载、完成、错误等
- **工具**: 代码、数据、分析等

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个图标库！

## 许可证

MIT License 