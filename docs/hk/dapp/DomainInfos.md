# 域名信息

## owner

獲得域名的Owner。
```
console.log(await unitdomains.owner("hello.cat"));
```

## resolver

獲得域名的解析器。
```
console.log(await unitdomains.resolver("hello.cat"));
```

## ttl

獲得域名的ttl。
```
console.log(await unitdomains.ttl("hello.cat"));
```

## available

域名是否可以註冊
```ts{1}
console.log(await unitdomains.available("hello.cat"));
```

## rentPrice

域名租賃費用
```ts{1}
// 1 year
console.log(await unitdomains.rentPrice("hello.cat",1));
```

## registerPrice

域名的初始註冊費用
```ts{1}
console.log(await unitdomains.registerPrice("hello.cat"));
```