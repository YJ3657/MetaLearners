import axios from 'axios';

export const signUp(dataSubmitted) {
    const req = axios
    .post("/api/users/signup", dataSubmitted)
    .then((res) => res.data);
}