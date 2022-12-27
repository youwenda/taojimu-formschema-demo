### 淘积木配置应用脚手架

适用于开发[小部件配置应用](https://mos.m.taobao.com/taojimu/docs#/widget/meta)，快速生成小部件配置应用的脚手架项目。兼容旺铺搭建平台以及淘积木平台搭建体系。

### 如何使用

```shell
# npm 国内用户可设置淘宝镜像
npm config set registry https://registry.npmmirror.com
npm install @taojimu/meta-view -S

# yarn
yarn add @taojimu/meta-view -S

```

```javascript
import { Form } from '@taojimu/meta-view';

export default function App() {
  return <Form schema={schema} onChange={onChange} />;
}
```

### 优点

* 简单易上手，开发量非常少。
* 无需测试配置应用在淘积木编辑器/旺铺编辑器中的表现。
* 界面符合淘积木编辑器的设计规范。
* 更完备的安全审核机制，避免因配置数据产生风控风险造成小部件下架。
