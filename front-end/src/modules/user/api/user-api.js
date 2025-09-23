import { apiClient } from "../../../shared/services/api-client"

export const registerApi = async(formData)=>{
    try{
    const response = await apiClient.post('/register',formData);
    return response;
    }
    catch(error){
        console.log('Error in register api',error);
        throw error;
    }
}