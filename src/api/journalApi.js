import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-3ae30-default-rtdb.firebaseio.com'
})

export default journalApi


