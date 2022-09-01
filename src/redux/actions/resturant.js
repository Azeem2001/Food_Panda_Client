import axios from "axios";
import { BASE_URL } from "../../config/config";
import { Types } from "../Types";

export const allCities_ByName = (id,setLoading)=> async (dispatch)=>{
    try{
      let response = await axios.get(`${BASE_URL}/api/restaurant/all-restaurant/${id}`);
      console.log(response.data)
      dispatch({ type: Types.GET_RESTURANT_NAME, payload: response?.data });
      setLoading(false)
    } catch (error) {
    
     setLoading(false)  
      dispatch({
        type: Types.GET_RESTURANT_NAME_FAILED,
        payload: error?.response?.status,
        state: null,

      }
      );
      console.log(error)
    }
    
}