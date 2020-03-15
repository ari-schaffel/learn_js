const nightmare = require('nightmare')({ show: true })
// const nightmare = Nightmare()
const {
    performance
  } = require('perf_hooks')

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
    
    
 



timeit(checkPrice)

async function timeit(func){
        t0=performance.now()
        await func()
        t1=performance.now()
        console.log((t1-t0)/1000)

}