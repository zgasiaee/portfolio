export const validate = (data) => {
    
    const errors = {}

    if(!data.name.trim()){
        errors.name = 'name is required'
    }else{
        delete errors.name
    }

    if(!data.email){
        errors.email='email is required'
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email='email is not valid'
   }else{
       delete errors.email
   }

    if(!data.message){
        errors.message='message is required'
    }else{
        delete errors.message
    }

    return errors
}