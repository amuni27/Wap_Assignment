const dns = require('dns');
const domain='www.miu.edu'

dns.resolve4(domain,(err,address)=>{
    if(err){
        console.log({response:"ERROR",err:err})
    }
    console.log(address)
})