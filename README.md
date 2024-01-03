# Tab
![](public/screenshot.png)

## UUID Library

API 中的 job data 没有 id，所以用 UUID 库来给每个 job 生成一个 unique id

1. Install

```sh
npm install uuid
```

2. Import

```jsx
import { v4 as uuidv4 } from 'uuid';
```
