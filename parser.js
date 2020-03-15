const nightmare = require('nightmare')({ show: true })
const helper = require('./helpers')

url = 'https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681/'
async function checkPrice(){
    
    const priceString = await nightmare
        .goto(url)
        .wait('#productTitle')
        .evaluate(() => document.querySelector("#a-autoid-6-announce > span.a-color-base > span").innerText)
        .end()
        
        const priceNumber =parseFloat(priceString.replace('$',''))
        console.log(priceNumber)
}
    
    
 


console.log(helper.timteit(checkPrice))

