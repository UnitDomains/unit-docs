# Working with UnitDomains library

Before you start interacting with UnitDomains, you need to import the relevant libraries.

## Javascript

The sample code runs in the object browser with ethereum. Before using these codes, a wallet such as MetaMask needs to be installed in a browser running the Dapp (e.g. Chrome).

````ts{1}
import { Resolution } from "@unitdomains/resolution";

if (window && typeof window.ethereum !== "undefined") {
    const resolution = await Resolution.create(window.ethereum);

    console.log(await resolution.addr("hello.cat"));
}
````