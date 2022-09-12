import { Types } from "../Types";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { setAlert } from "./alert";
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
      dispatch(setAlert({
        time:1000,
        message:"Sign Up SuccessFully Done",
        type:"success"
      }))
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

export const userLogin =
  (formData, setEmail, setPassword, navigate, setLoading) =>
  async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(`${BASE_URL}/api/auth/login`, formData);
      // console.log(response.data)
      localStorage.setItem("token", response?.data?.token);
      dispatch({ type: Types.USER_LOGIN, payload: response?.data });
      dispatch(setAlert({
        time:1000,
        message:"Login SuccessFully Done",
        type:"success"
      }))
      setLoading(false);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      dispatch({
        type: Types.USER_LOGIN_FAILED,
        payload: error?.response?.status,
      });
      dispatch(
        setAlert({
          time: 1000,
          message: error?.message,
          type: "error",
        }))
        dispatch(
          setAlert({
            time: 1000,
            message: error?.response?.data?.status,
            type: "error",
          }))
    }
  };

export const checkEmail =
  (formData, setLoading, navigate, setRigester) => async (dispatch) => {
    setLoading(true);
    try {
      // console.log(formData);
      let response = await axios.post(`${BASE_URL}/api/auth/is-email`, {
        email: formData.email,
      });
      response.data.isRegistered
        ? navigate("/LoginPage")
        : setRigester("account");
      dispatch({ type: Types.CHECK_EMAIL, payload: response?.data });
      setLoading(false);
      // navigate("/");
      // setEmail("");
    } catch (error) {
      dispatch({
        type: Types.CHECK_EMAIL_FAILED,
        payload: error?.response?.status,
      });
      console.log(error);
      setLoading(false);
    }
  };
export const currentUser = () => async (dispatch) => {
  try {
    let response = await axios.get(`${BASE_URL}/api/auth/current-user`);
    dispatch({ type: Types.GET_CURRENT_USER, payload: response?.data });
  } catch (error) {
    dispatch({
      type: Types.GET_CURRENT_USER_FAILED,
      payload: error?.response?.status,
    });
    console.log(error);
  }
};
export const logout = (navigate) => async (dispatch) => {
  localStorage.removeItem("token");
  
  dispatch({type:Types.USER_LOGOUT});
  dispatch(
    setAlert({
      time: 1000,
      message:'User has been logout',
      type: "success",
    }))
   navigate("/LoginPage")
};
