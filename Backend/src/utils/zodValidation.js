
export const validate = ( schema ) =>{
    return (req , res , next)=>{
        try{
           
            const validatedData = schema.parse(req.body);
            req.body = validatedData;
            
            next();
        } catch(error){
            res.status(401).json({ msg : "Invalid input"})
    }
}
}