### 淘积木配置应用脚手架

适用于使用[淘积木 meta](https://mos.m.taobao.com/taojimu/docs#/meta)来快速生成配置应用所需要的 [JSON Schema](http://json-schema.org/) 以及 form 表单。

### 如何使用

```shell
# npm 国内用户可设置淘宝镜像
npm config set registry https://registry.npmmirror.com
npm install @taojimu/meta-view -S

# yarn
yarn add @taojimu/meta-view -S

```

``` javascript
import { Form } from '@taojimu/meta-view';

export default function App() {
  return <Form schema={schema} onChange={onChange} />;
}

```
