const User = require("../Model/UseModel"); //Import model
//const { use } = require("../Route/UseRoute");

// create function for display data-------------------------------------------
const getAllUser = async(req, res, next) => {
    let users; 
    
    try {  
        users = await User.find(); // Use the User model to find
        
        if (!users || users.length === 0) {
            return res.status(200).json({ message: "No users found" });
        }
        
        return res.status(200).json({ users });
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching users" });
    }
};

//Data insert -------------------------------------------------------------
const addUser = async(req, res, next) => {
    const { FirstName, LastName, gmail, Password1, Password2 } = req.body;
    
    try {
        // Create new user using the User model (not users)
        const newUser = new User({
            FirstName,
            LastName,
            gmail,
            Password1,
            Password2
        });
        await newUser.save();
        
        return res.status(201).json({ // Changed to 201 for creation success
            message: "User added successfully",
            user: newUser
        });
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Error adding user"});
    }
}
// Get data by DI
const getById = async (req, res, next) => {
    const id = req.params.id;  
    let user;
      
    try {
        user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        return res.status(200).json({ user });  // Added success response
    }
    catch(err) {
        console.log(err); 
        return res.status(500).json({ message: "Error fetching user" });
    }
};

// Update user details-------------------------------------
const updateUser = async (req, res, next)=>{

    const id = req.params.id;
    const { FirstName, LastName, gmail, Password1, Password2 } = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id,{FirstName:FirstName, LastName:LastName, gmail:gmail,Password1:Password1, Password2:Password2});
        users = await users.save();
    }
    catch{
        console.log(err);
    }
    if(!users){
        return res.status(404).json({massage:"Unable to update user details."});
    }
    return res.status(200).json({users});

};



//export to route-------------------------------------------
exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;