const jwt = require('jsonwebtoken')
const secret_key = 'code'

const authenticateUser = (req,res,next)=>{

    const tokenGet = req.headers['authorization']
    console.log(tokenGet);
    
    if(tokenGet)
    {
        const shortToken = tokenGet.split(' ')[1]
        const decodeToken = jwt.verify(shortToken,secret_key)

        if(decodeToken)
        {
            next()
        }
        else
        {
            res.status(400).send({msg:"please enter valid token"})
        }
    
    }
        else{
            res.status(400).send({msg:"Token is required "})

        }
}
module.exports = authenticateUser