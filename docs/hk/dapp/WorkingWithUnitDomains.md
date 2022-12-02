# UnitDomains庫的使用

在開始與UnitDomains交互之前，需要先引入相關庫。

## Javascript

示例代碼運行在含有ethereum對象瀏覽器中。使用這些代碼之前，需要在運行Dapp瀏覽器（例如Chrome）中安裝MetaMask等錢包。

```ts{1}
import { UnitDomains } from "@unitdomains/unitdomainsjs";

if (window && typeof window.ethereum !== "undefined") {
    const unitdomains = await UnitDomains.create(window.ethereum);

    console.log(await unitdomains.addr("hello.cat"));
}
```