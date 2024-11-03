export const checkValidData = (email, password, name, flag) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

    if(!isEmailValid) return "Email Id is not Valid!";
    if(!isPasswordValid) return "Password is not Valid!";

    
    if(flag == 'Yes')
    {
        if(name !== '' && name !== null)
        {
            const isNamePasswordValid = /^[A-Z][a-z]*([ -][A-Z][a-z]*)+$/.test(name);
            if(!isNamePasswordValid) return "Name is not Valid!";
        }
        else{
            return "Enter Full Name";
        }
    }
    return null;
};