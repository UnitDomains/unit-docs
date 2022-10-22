# Resolving Names

## Resolve to Ethereum address

Resolves UnitDomains domain names in string form to ETH addresses for use by Dapps.
````ts{1}
console.log(await resolution.addr("hello.cat"));
````

## Reverse resolution

Reverse resolution refers to mapping addresses to domain names, so that the Dapp can display the user's ETH address as the UnitDomains domain name in the form of a string.
````ts{1}
console.log(await resolution.reverse("0x42F026dCF8D7659e7e934459dA820216a0FE9126"));
````