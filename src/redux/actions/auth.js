import { Types } from "../Types";
import axios from "axios";
import { BASE_URL } from "../../config/config";

export const userRegister =
  (formData, setEmail, setName, setPassword, navigate, setLoading) =>
  async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(
        `${BASE_URL}/api/auth/register`,
        formData
      );
      // console.log(response.data)
      localStorage.setItem("token", response?.data?.token);
      dispatch({ type: Types.USER_REGISTERED, payload: response?.data });
      setLoading(false);
      navigate("/");
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      dispatch({
        type: Types.USER_REGISTERED_FAILED,
        payload: error?.response?.status,
      });
      console.log(error);
      setLoading(false);
    }
  };

  export const userLogin = (formData, setEmail, setPassword, navigate, setLoading)=>
    async (dispatch) => {
      setLoading(true);
      try {
        let response = await axios.post(
          `${BASE_URL}/api/auth/login`,
          formData
        );
        // console.log(response.data)
        localStorage.setItem("token", response?.data?.token);
        dispatch({ type: Types.USER_LOGIN, payload: response?.data });
        setLoading(false);
        navigate("/");
        setEmail("");
        setPassword("");
      } catch (error) {
        dispatch({
          type: Types.USER_LOGIN_FAILED,
          payload: error?.response?.status,
        });
        console.log(error);
        setLoading(false);
      }
    };
  
