# refly-icons

一套可自定义颜色和大小的 React SVG 图标库。

## 安装

```bash
npm install refly-icons
# 或
yarn add refly-icons
```

## 使用方法

```tsx
import { Language, Account, Resource } from 'refly-icons';

export default () => (
  <div>
    <Language size={32} color="red" />
    <Account size={40} color="#00f" />
    <Resource size={24} color="currentColor" />
  </div>
);
```

- `size`：图标宽高，支持数字或字符串（如 24、'2em'）。
- `color`：图标颜色，支持任意 CSS 颜色值。

## 图标列表

详见 `src/icons` 目录。

## 开源协议

MIT 