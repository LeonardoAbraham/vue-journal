import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBrGBBHoz7COQWIIRbmE0bXSWCHxT2UOAU'
    }
})

export default authApi


