const get_ign_elite_dias = async (id, server) => {
    console.log(`DEBUG: elite_dias api called`)
    const resp = await fetch("https://api.elitedias.com/checkid", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "access-control-allow-header": "*",
            "access-control-allow-headers": "x-requested-with",
            "access-control-allow-origin": "*",
            "content-type": "application/json; charset=UTF-8",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://elitedias.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify({ "userid": id, "serverid": server, "game": "mlbb" }),
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then(res => res.json()).catch(err => { return { "name": null } })

    const ign = resp?.name ?? null
    console.log(`DEBUG: elite_dias api returned ${ign} because data is ${JSON.stringify(resp)}`)
    return ign
}
const get_ign_smile = async (id, server) => {
    console.log('DEBUG: smile api called')
    const data = await fetch('https://www.smile.one/ph/merchant/mobilelegends/checkrole/', {
        method: 'POST',
        headers: {
            'authority': 'www.smile.one',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.smile.one',
            'referer': 'https://www.smile.one/ph/merchant/mobilelegends?source=other',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest'
        },
        body: `user_id=${id}&zone_id=${server}&pid=216&checkrole=1&pay_methond=&channel_method=`
    })
        .then(res => res.json())

    const ign = data.username ?? null
    console.log(`DEBUG: smile api returned ${ign} because data is ${JSON.stringify(data)}`)
    return ign
}
const get_ign_coda = async (id, server) => {
    console.log('DEBUG: coda api called')
    const data = await fetch('https://order-sg.codashop.com/initPayment.action', {
        method: 'POST',
        headers: {
            'authority': 'order-sg.codashop.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-PH',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.codashop.com',
            'referer': 'https://www.codashop.com/',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'x-session-country2name': 'PH',
            'x-xsrf-token': 'null'
        },
        body: `voucherPricePoint.id=266837&voucherPricePoint.price=6.5&voucherPricePoint.variablePrice=0&n=3%2F20%2F2023-1144&email=&userVariablePrice=0&order.data.profile=eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ%3D%3D&user.userId=${id}&user.zoneId=${server}&msisdn=&voucherTypeName=MOBILE_LEGENDS&voucherTypeId=5&gvtId=19&shopLang=en_PH&checkoutId=fed4d612-ab4e-4b37-8743-bf3bac58e5d1&affiliateTrackingId=&impactClickId=&anonymousId=d5d3316f-2037-4754-b2e1-471550679b9d&fullUrl=https%3A%2F%2Fwww.codashop.com%2Fen-ph%2Fmobile-legends&userSessionId=4e0873ba-0de2-40a5-ab68-3cbf286b72d3&userEmailConsent=false&userMobileConsent=false&verifiedMsisdn=&promoId=&promoCode=`
    })
        .then(res => res.json())
    const ign = data.confirmationFields?.username.replace(/\+/g, ' ') ?? null
    console.log(`DEBUG: coda api returned ${ign} because data is ${JSON.stringify(data)}`)
    return ign ? decodeURIComponent(ign) : ign
}
const get_ign_jolly = async (id, server) => {
    console.log('DEBUG: jolly api called')

    const resp = await fetch('https://topup-center.shoplay365.com/shareit-topup-center/order/check-uid', {
        method: 'POST',
        headers: {
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Referer': 'https://www.jollymax.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"'
        },
        body: JSON.stringify({
            token: '7367199236ee4923a652444ccab939cf',
            jmsId: '',
            appId: 'APP20210608084718702',
            roleName: '',
            country: 'ph',
            language: 'en',
            appAlias: 'mlbb_diamonds',
            platformName: '',
            serverId: server,
            goodsId: 'G20210706061905805',
            payTypeId: '545150',
            userId: id,
            activityId: '',
            serverName: ''
        })
    })
        .then(res => res.json())
    const ign = resp?.data?.nickName ?? null
    console.log(`DEBUG: jolly api returned ${ign} because data is ${JSON.stringify(resp)}`)
    return ign
}
const get_ign = async (id, server) => {
    return await get_ign_elite_dias(id, server) ?? await get_ign_coda(id, server) ?? await get_ign_smile(id, server) ?? await get_ign_jolly(id, server)
}
export { get_ign }
