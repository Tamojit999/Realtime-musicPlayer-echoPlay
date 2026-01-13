import { axiosInstance } from '@/lib/axios';
import {create} from 'zustand';

// to make the useAthStore type safe
interface AuthStore{
    isAdmin:boolean; // store admin or not 
    isLoading:boolean; // is loading or not 
    error:string|null; // error message



    checkAdminStatus:()=>Promise<void> //function store admin status
    reset:()=>void // reset the store 
}
export const useAuthStore=create<AuthStore>((set)=>({
    isAdmin:false,
    isLoading:false,
    error:null,
    checkAdminStatus:async()=>{
        set({isLoading:true});
        try {
            const response=await axiosInstance.get('/admin/check');
                set({isAdmin:response.data.admin});
            

            
        } catch (error:any) {
            set({error:error.response.data.message,isAdmin:false});
            
        }
        finally{
            set({isLoading:false});

        }
    },
    reset:()=>{
        set({
            isAdmin:false,
            isLoading:false,
            error:null
        })
    }
    

}));