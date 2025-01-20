import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import edin
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/authSlice';

const Login = () => {
    const [username, setUsername] = useState('');  // username state'i
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate(); // Yönlendirme için navigate fonksiyonunu kullanın

    const handleLogin = async () => {
        try {
            axios.post('http://localhost:8080/api/users/login', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
              //  withCredentials: true  // Eğer çerezler (cookies) veya kimlik doğrulama bilgileri gönderiliyorsa
            }).then(response => {
                window.console.log("token", response.data.token);
                dispatch(setToken(response.data.token)); // Dispatch setToken action
                navigate('/flights');
            }).catch(error => {
                console.error('Login failed', error);
            });
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Login</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Username</label>  {/* Label güncellendi */}
                        <input
                            type="text"  // input tipi email'den text'e çevrildi
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary mt-4 w-100" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
