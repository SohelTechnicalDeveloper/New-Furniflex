function Success(status,result) 
{
    return {status,
        msg:"Success",
        data:result,
        error:""

    }
      
}
function failure(status,result) 
{
    return{
        status,
        msg:"Failed",
        error:result,
        data:""
    }
    
}
module.exports ={ Success,failure}