import { apiClient } from "../../../shared/services/api-client.js"

export const registerApi = async(formData)=>{
    console.log("inside register api");
    try{
    const response = await apiClient.post('/register',formData);
    console.log(response);
    return response;
    }
    catch(error){
        console.log('Error in register api',error);
        throw error;
    }
}     