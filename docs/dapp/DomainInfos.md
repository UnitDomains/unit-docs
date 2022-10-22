# Domain information

## owner

Get the Owner of the domain name.
````ts{1}
console.log(await resolution.owner("hello.cat"));
````

## resolver

Get the resolver for the domain name.
````ts{1}
console.log(await resolution.resolver("hello.cat"));
````

## ttl

Get the ttl of the domain name.
````ts{1}
console.log(await resolution.ttl("hello.cat"));
````

## available

Whether the domain name can be registered
````ts{1}
console.log(await resolution.available("hello.cat"));
````

## rentPrice

Domain Name Rental Fees
````ts{1}
// 1 year
console.log(await resolution.rentPrice("hello.cat",1));
````

## registerPrice

Initial registration fee for the domain name
````ts{1}
console.log(await resolution.registerPrice("hello.cat"));
````