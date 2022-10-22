# 域名信息

## owner

获得域名的Owner。
```
console.log(await resolution.owner("hello.cat"));
```

## resolver

获得域名的解析器。
```
console.log(await resolution.resolver("hello.cat"));
```

## ttl

获得域名的ttl。
```
console.log(await resolution.ttl("hello.cat"));
```

## available

域名是否可以注册
```
console.log(await resolution.available("hello.cat"));
```

## rentPrice

域名租赁费用
```
// 1 year
console.log(await resolution.rentPrice("hello.cat",1));
```

## registerPrice

域名的初始注册费用
```
console.log(await resolution.registerPrice("hello.cat"));
```