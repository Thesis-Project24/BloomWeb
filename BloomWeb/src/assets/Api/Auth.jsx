import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { useMutation } from 'react-query';
import { useNavigate, useNavigation } from 'react-router-dom';
import { app } from '../../../firebase.config';

export const signup = (navigate) => {
    const query = useMutation({
        mutationFn: async ({ email, password, username }) => {
            try{
                const auth = getAuth(app);
                const userCred = await createUserWithEmailAndPassword(auth, email, password);
                await axios.post(`http://localhost:3000/users/signup`, {
                    email: email,
                    username: username,
                    id: userCred.user.uid,
                });
                await sendEmailVerification(userCred.user);
                alert("Verification mail sent");
                if (auth.currentUser) {
                    // navigate("/signin"); 
                }
            } catch (error) {
                console.error("Error occurred during signup:", error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error', error.message);
                }
                alert("Error occurred during signup: " + error.message);
            }
            
        },
    });

    return query;
};

export const login = () => {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: async ({ email, password, role }) => {
            const auth = getAuth(app);
            try {
                await signInWithEmailAndPassword(auth, email, password);
                const res = await axios.post(`http://localhost:3000/users/signin/${role}`, {
                    email,
                    password,
                    role
                });
                localStorage.setItem('user', JSON.stringify(res.data));
                
                if (res.data.role === 'doctor') {
                    navigate('/DoctorPersonalProfile', { state: { doctor: res.data } });
                } else {
                    navigate('/User', { state: { user: res.data } });
                }
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    alert('User does not exist or incorrect credentials.'); // Inform the user
                } else {
                    console.error(error);
                }
            }
        },
    });

    return mutation;
};

