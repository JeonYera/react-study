import React, { useState } from 'react';
import Navigation from './Navigation';
import styles from '../styles/Login.module.css';
import Footer from './Footer';

const Login = ({ onCloseModal }) => {
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
      // 모달을 닫도록 부모 컴포넌트로부터 전달된 콜백 함수 호출
      onCloseModal();
    } else {
      // 로그인 실패 시의 처리
      setLoginError('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="아이디"
              className={styles.input}
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
              className={styles.input}
            />
          </label>
          <br />
          <button type="submit">로그인</button>
        </form>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      </div>
    </div>
  );
};

export default Login;
