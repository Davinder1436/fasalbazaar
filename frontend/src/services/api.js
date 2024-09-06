import axios from 'axios';

export const registerUser = async (data) =>{
    try {
        await axios.post("http://localhost:8000/api/farmers/register", data);
    } catch (error) {
        console.log('Error while registering user:', error.message);
    }
}

export const loginUser = async(data) =>{
    try {
        await axios.post("http://localhost:8000/api/farmers/login", data);
    } catch (error) {
        console.log('Error while registering user:', error.message);
    }
}