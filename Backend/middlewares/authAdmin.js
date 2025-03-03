import jwt from 'jsonwebtoken'

//admin authontication midleware--------------------------------

const authAdmin = async (req, res, next) => {
    try{
        const {atoken} = req.headers
        if (!atoken){
            return res.json({suc})
        }
    }
    catch{

    }
}