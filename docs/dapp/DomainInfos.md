# Domain information

## owner

Get the Owner of the domain name.
```ts{1}
console.log(await unitdomains.owner("hello.cat"));
```

## resolver

Get the resolver for the domain name.
```ts{1}
console.log(await unitdomains.resolver("hello.cat"));
```

## ttl

Get the ttl of the domain name.
```ts{1}
console.log(await unitdomains.ttl("hello.cat"));
```

## available

Whether the domain name can be registered
```ts{1}
console.log(await unitdomains.available("hello.cat"));
```

## rentPrice

Domain Name Rental Fees
```ts{1}
// 1 year
console.log(await unitdomains.rentPrice("hello.cat",1));
```

## registerPrice

Initial registration fee for the domain name
```ts{1}
console.log(await unitdomains.registerPrice("hello.cat"));
```