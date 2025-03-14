import axios from 'axios';

export const login = async (name, password) => {
  try {
    const response = await axios.post(
      `/login`,
      { name, password }, 
			{ withCredentials: true }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Login failed. Please try again.',
      status: error.response?.status || 500,
    };
  }
};

export const signup = async (name, password) => {
  try {
    const response = await axios.post(
      `/users`,
      { name, password }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Signup failed. Please try again.',
      status: error.response?.status || 500,
    };
  }
};

export const checkLoginStatus = async () => {
  try {
    const response = await axios.get(`/users/me`, {
      withCredentials: true,
    });

    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: 'User is not logged in',
      status: error.response?.status || 500,
    };
  }
};