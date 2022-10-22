# UnitDomains库的使用

在开始与UnitDomains交互之前，需要先引入相关库。

## Javascript

示例代码运行在含有ethereum对象浏览器中。使用这些代码之前，需要在运行Dapp浏览器（例如Chrome）中安装MetaMask等钱包。

```
import { Resolution } from "@unitdomains/resolution";

if (window && typeof window.ethereum !== "undefined") {
    const resolution = await Resolution.create(window.ethereum);

    console.log(await resolution.addr("hello.cat"));
}
```