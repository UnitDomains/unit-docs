

# Unit Domains 简介

在互联网中，DNS(Domain Name System)是一种很重要的服务,实现了将人类易读易写的字符串形式的域名转换为IP地址，方便人们访问互联网。

在Web3时代，以太坊上的地址是一个类似于0xc0dfe2234779296a45a3884636ACdE1cF9f54978等形式的地址，BTC、LTC等地址类似。显然这样的地址对于人类来说不易读、不易写，这就需要一个类似于DNS的域名系统，将字符串形式的域名转换为ETH地址。目前这样的域名系统有多个，最有名的是ENS(https://ens.domains/)。

Unit Domains是一个基于以太坊区块链的分布式的、开放的和可扩展的Web3域名服务系统。Unit Domains的智能合约和网站均参考和借鉴了ENS(https://ens.domains/)系统。

同ENS类似，Unit Domains的主要目标是将人类易读、易写的域名(如test.cat)解析为计算机或Web3可以识别的地址，如以太坊地址、元数据等。

同传统互联网的DNS类似，Unit Domains是一个层次结构的域名系统，顶级域名包括.cat、.dag、.unit等多个，用户可以创建次级域名，例如test.cat，并继续创建下面的子域名，如a.test.cat等。不同层次之间的域名通过小数点进行分隔。

域名的数据存储在以太坊链上，管理是通过智能合约进行的。


