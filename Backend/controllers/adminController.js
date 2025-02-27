


// Api for adding Jobs from adming -----------------------

const addJob = async (resizeBy, req) => {
    try{
        const {JobTitle,companyName,dis,requiremat,techlnolegy,date} = req.body
        const imageFile = req.file
        console.log({JobTitle,companyName,dis,requiremat,techlnolegy,date}, imageFile);
        
    }
    catch(error){

    }
}

export {addJob}