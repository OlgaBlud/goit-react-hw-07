import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://66cb624b4290b1c4f19a33bc.mockapi.io/";
export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress);
    const response = await axios.get("/contacts");
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
