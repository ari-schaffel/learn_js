const {
    performance
  } = require('perf_hooks')




var log ={
add:function add(a,b){
    return a+b
},
timteit:async function timeit(func){
    t0=performance.now()
    await func()
    t1=performance.now()
    console.log((t1-t0)/1000)

}
}

module.exports = log
// module.exports = log