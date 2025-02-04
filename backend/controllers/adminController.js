//API for addind doctor

const addDoctor = async(req,res) => {
    try{
        const{name, email,password,speciality,degree,experience,about,fees,address} = req.body
        const imageFile = req.imageFile
        console.log({name, email,password,speciality,degree,experience,about,fees,addres,imageFile});
    }

    catch(error)
    {}
    
}
export {addDoctor}  