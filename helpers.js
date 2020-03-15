const {
    performance
  } = require('perf_hooks')
// const performance = require('perf_hooks')
console.log(performance)


var log ={
timteit:async function timeit(func){
    t0=performance.now()
    await func()
    t1=performance.now()
    console.log((t1-t0)/1000)
}
}

module.exports = log
