import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import styles from "../styles/Login.module.css";
import Footer from "../components/Footer";

const Login = () => {
  // 폼 상태 관리를 위한 useState
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // 로그인 실패 시 오류 메시지를 표시하기 위한 useState
  const [loginError, setLoginError] = useState('');

  // 폼 입력 값 변경을 처리하는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 로그인 폼 제출을 처리하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    // 서버로 로그인 데이터를 보내고, 결과를 처리하는 로직
    if (formData.username === 'user' && formData.password === 'password') {
      // 로그인 성공 시의 처리
      setLoginError('');
      alert('로그인 성공!');
    } else {
      // 로그인 실패 시의 처리
      setLoginError('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div><Navigation />
      <div className={styles.container}>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="아이디"
              
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호"
            />
          </label>
          <br />
        </form>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
