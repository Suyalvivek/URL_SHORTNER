import {zodResolver} from '@hookform/resolvers/zod';
import { registerSchema } from '../validation/register-schema';
import { registerApi } from '../api/user-api.js';
import { useForm } from 'react-hook-form';
export const useRegister=()=>{
    const{register,handleSubmit,formState:{errors}}=useForm(
        {
            resolver:zodResolver(registerSchema),
          
        }
    );
    const doSubmit = async (formData) => {
        console.log(formData);
        try {
            console.log(formData);
            const response = await registerApi(formData);
            if(response.data.id){
                alert('Registration successful');
            } else {
                alert('Registration failed');
            }
        } catch(error) {
            console.log('Error in register hook', error);
            alert('Registration failed: ' + error.message);
        }
    };

    return {doSubmit, register, handleSubmit, errors};
}