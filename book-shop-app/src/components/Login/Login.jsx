import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

import './styleLogin.css';

import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        axios.post('http://localhost:8080/api/auth/authenticate', { username, password })
            .then((response) => {
                if (response.data.accessToken && response.data.refreshToken) {
                    setLoggedIn(true);
                    setLoginError(null);

                    const accessToken = response.data.accessToken;
                    const refreshToken = response.data.refreshToken;

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);

                    const storedAccessToken = localStorage.getItem('accessToken');
                    const storedRefreshToken = localStorage.getItem('refreshToken');

                    if (storedAccessToken) {
                        if (storedAccessToken === response.data.accessToken) {
                           // alert("Đăng nhập thành công");
                            navigate("/Home");
                        }
                    } else {
                       // alert("Đăng nhập thất bại");
                    }
                } else {
                    setLoggedIn(false);
                    setLoginError("Tên đăng nhập hoặc mật khẩu không hợp lệ");
                }
            })
            .catch((error) => {
                setLoggedIn(false);
                setLoginError("Đăng nhập thất bại");
            });
        axios.interceptors.response.use(
            response => response,
            error => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const refreshToken = localStorage.getItem('refreshToken');
                    return axios.post('http://localhost:8080/api/auth/refreshToken', { refreshToken })
                        .then(res => {
                            if (res.status === 200) {
                                localStorage.setItem('accessToken', res.data.accessToken);
                                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken;
                                return axios(originalRequest);
                            }
                        });
                }
                return Promise.reject(error);
            }
        );
    };
    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
                        BookStore <br />
                        <span style={{color: 'hsl(218, 81%, 75%)'}}>Thả tâm hồn vào sách</span>
                    </h1>

                    <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
                        Đến với cửa hàng của chúng tôi, bạn không chỉ đến
                        với nơi bán những cuốn sách chất lượng và uy tín,
                        hãy cùng cảm nhận và hoà mình vào lý tưởng của tác giả
                        trong những cuốn sách nổi tiếng, hay và tâm đắc nhất của cửa hàng
                        chúng tôi.
                    </p>

                </MDBCol>

                <MDBCol md='6' className='position-relative'>

                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>

                            <MDBInput wrapperClass='mb-4' id='form3' type='text' placeholder="Tên tài khoản" value={username} onChange={handleUsernameChange}/>

                            <MDBInput wrapperClass='mb-4' id='form4' type='password' placeholder="Mật khẩu" value={password} onChange={handlePasswordChange}/>

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Ghi nhớ mật khẩu' />
                            </div>

                            <MDBBtn className='w-100 mb-4' size='md' onClick={handleLogin}>Đăng nhập</MDBBtn>

                            <div className="text-center">
                                <p>Bạn chưa có tài khoản?</p>
                                <Link to="/register">Đăng kí</Link>
                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;
