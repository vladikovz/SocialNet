import {Dispatch} from "react";
import axios from "axios";

//test request
export const fetchAds = ()=> {
    return async (dispatch: Dispatch<any>)=>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1/posts")
            console.log(response.data)
        }catch(e){
            console.log(e)
        }
    }
}