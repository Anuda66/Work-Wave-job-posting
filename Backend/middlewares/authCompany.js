import jwt from 'jsonwebtoken';

const authCompany = async (req, res, next) => {
    try {
        // Check for token (case-insensitive)
        const Ctoken = req.headers.ctoken || req.headers.Ctoken;
        if (!Ctoken) {
            return res.status(401).json({ 
                success: false, 
                message: 'Not authorized, please login again' 
            });
        }
        // Verify token
        const token_decode = jwt.verify(Ctoken, process.env.JWT_SECRET);
        req.body.companyId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        // Handle specific JWT errors
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid token, please login again' 
            });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                success: false, 
                message: 'Token expired, please login again' 
            });
        }
        // Generic error
        res.status(500).json({ 
            success: false, 
            message: 'Authentication failed' 
        });
    }
};

export default authCompany;