//  Get all contact
// route Get /api/contact

const getContacts =( req, res ) =>{
    res.status(200).json( {message : "Get all contact"});

} 

// create new contct 
// routes /api/contacts

const CreateContact = ( req, res ) =>{
    
   
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
       res.status(400);
       throw new Error("All fields are require ");
    }
    res.status(201).json( {message : "Create new Contact"});

} ;

// get contacts
// routes /api/contacts/:id
const getcontact = (req,res)=>{

    res.status(200).json( {message : `Get contact for ${req.params.id}`});
}
// update contacts
// routes /api/contacts/:id
const updateContact =(req,res)=>{
    res.status(200).json( {message : `Updated contact for ${req.params.id}`});

}

// delete contacts
// routes /api/contacts/:id

const deletecontact =(req,res)=>{
    res.status(200).json( {message : `Deleted contact for ${req.params.id}`});
}



module.exports ={
    getContacts,
    CreateContact,
    getcontact,
    updateContact,
    deletecontact,
};