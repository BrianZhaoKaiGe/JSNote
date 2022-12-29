# 日常记录及踩坑日记

## 1.深拷贝DOM节点

```javascript
const node = document.querySelector("html");
//深拷贝DOM节点
const newNode = node.cloneNode(true);
```

