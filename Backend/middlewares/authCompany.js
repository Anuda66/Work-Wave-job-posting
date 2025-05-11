import jwt from 'jsonwebtoken'

// company authentication midle were--------------------------------

const authCompany = async (req, res, next) => {
    try {
        const { Ctoken } = req.headers
        if (!Ctoken) {
            return res.json({ success: false, message: 'Not authorized login again' })
        }
        const token_decode = jwt.verify(Ctoken, process.env.JWT_SECRET)
        req.body.companyId = token_decode.id
        next()
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export default authCompany 

