# 域名解析

## 解析至以太坊地址

将以字符串形式的UnitDomains域名解析为ETH地址，以供Dapp使用。
```
console.log(await resolution.addr("hello.cat"));
```

## 反向解析

反向解析指的是将地址映射至域名，这样Dapp中就可以将用户的ETH地址以字符串形式的UnitDomains域名显示出来。
```
console.log(await resolution.reverse("0x42F026dCF8D7659e7e934459dA820216a0FE9126"));
```