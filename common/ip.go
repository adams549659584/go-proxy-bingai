package common

import (
	"fmt"
	"math/rand"
	"net"
	"time"
)

// 使用真实有效的美国ip
// https://lite.ip2location.com/united-states-of-america-ip-address-ranges
// https://cdn-lite.ip2location.com/datasets/US.json?_=1683336720620
//
//	async function getIpRange() {
//	  const results = await fetch(`https://cdn-lite.ip2location.com/datasets/US.json?_=${Date.now()}`)
//	    .then((res) => res.json())
//	    .then((res) => {
//	      const limitCount = 10000;
//	      return res.data.filter((x) => parseInt(x[2].replace(/,/g,'')) >= limitCount).map((x) => `{"${x[0]}", "${x[1]}"}, //${x[2]}`);
//	    });
//	    console.log(`results : `,results);
//	    return results.join('\n');
//	}
//
// copy(await getIpRange());
var IP_RANGE = [][]string{
	{"4.150.64.0", "4.150.127.255"},      // Azure Cloud EastUS2 16382
	{"4.152.0.0", "4.153.255.255"},       // Azure Cloud EastUS2 131070
	{"13.68.0.0", "13.68.127.255"},       // Azure Cloud EastUS2 32766
	{"13.104.216.0", "13.104.216.255"},   // Azure EastUS2 256
	{"20.1.128.0", "20.1.255.255"},       // Azure Cloud EastUS2 32766
	{"20.7.0.0", "20.7.255.255"},         // Azure Cloud EastUS2 65534
	{"20.22.0.0", "20.22.255.255"},       // Azure Cloud EastUS2 65534
	{"40.84.0.0", "40.84.127.255"},       // Azure Cloud EastUS2 32766
	{"40.123.0.0", "40.123.127.255"},     // Azure Cloud EastUS2 32766
	{"4.214.0.0", "4.215.255.255"},       // Azure Cloud JapanEast 131070
	{"4.241.0.0", "4.241.255.255"},       // Azure Cloud JapanEast 65534
	{"40.115.128.0", "40.115.255.255"},   // Azure Cloud JapanEast 32766
	{"52.140.192.0", "52.140.255.255"},   // Azure Cloud JapanEast 16382
	{"104.41.160.0", "104.41.191.255"},   // Azure Cloud JapanEast 8190
	{"138.91.0.0", "138.91.15.255"},      // Azure Cloud JapanEast 4094
	{"151.206.65.0", "151.206.79.255"},   // Azure Cloud JapanEast 256
	{"191.237.240.0", "191.237.241.255"}, // Azure Cloud JapanEast 512
	{"4.208.0.0", "4.209.255.255"},       // Azure Cloud NorthEurope 131070
	{"52.169.0.0", "52.169.255.255"},     // Azure Cloud NorthEurope 65534
	{"68.219.0.0", "68.219.127.255"},     // Azure Cloud NorthEurope 32766
	{"65.52.64.0", "65.52.79.255"},       // Azure Cloud NorthEurope 4094
	{"98.71.0.0", "98.71.127.255"},       // Azure Cloud NorthEurope 32766
	{"74.234.0.0", "74.234.127.255"},     // Azure Cloud NorthEurope 32766
	{"4.151.0.0", "4.151.255.255"},       // Azure Cloud SouthCentralUS 65534
	{"13.84.0.0", "13.85.255.255"},       // Azure Cloud SouthCentralUS 131070
	{"4.255.128.0", "4.255.255.255"},     // Azure Cloud WestCentralUS 32766
	{"13.78.128.0", "13.78.255.255"},     // Azure Cloud WestCentralUS 32766
	{"4.175.0.0", "4.175.255.255"},       // Azure Cloud WestEurope 65534
	{"13.80.0.0", "13.81.255.255"},       // Azure Cloud WestEurope 131070
	{"20.73.0.0", "20.73.255.255"},       // Azure Cloud WestEurope 65534
}

// 获取真实有效的随机IP
func GetRandomIP() string {
	seed := time.Now().UnixNano()
	rng := rand.New(rand.NewSource(seed))

	// 生成随机索引
	randomIndex := rng.Intn(len(IP_RANGE))

	// 获取随机 IP 地址范围
	startIP := IP_RANGE[randomIndex][0]
	endIP := IP_RANGE[randomIndex][1]

	// 将起始 IP 地址转换为整数形式
	startIPInt := ipToUint32(net.ParseIP(startIP))
	// 将结束 IP 地址转换为整数形式
	endIPInt := ipToUint32(net.ParseIP(endIP))

	// 生成随机 IP 地址
	randomIPInt := rng.Uint32()%(endIPInt-startIPInt+1) + startIPInt
	randomIP := uint32ToIP(randomIPInt)

	return randomIP
}

// 将 IP 地址转换为 uint32
func ipToUint32(ip net.IP) uint32 {
	ip = ip.To4()
	var result uint32
	result += uint32(ip[0]) << 24
	result += uint32(ip[1]) << 16
	result += uint32(ip[2]) << 8
	result += uint32(ip[3])
	return result
}

// 将 uint32 转换为 IP 地址
func uint32ToIP(intIP uint32) string {
	ip := fmt.Sprintf("%d.%d.%d.%d", byte(intIP>>24), byte(intIP>>16), byte(intIP>>8), byte(intIP))
	return ip
}
