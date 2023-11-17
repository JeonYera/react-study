import { useEffect, useState } from "react";
import styles from "../styles/SignUp.module.css";
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";

const SignUp = () => {
  // 폼 데이터를 관리하기 위한 상태
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthdate: '',
    phoneNumber: '',
    email: '',
  });

  // 유효성 검사 오류를 관리하기 위한 상태
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthdate: '',
    phoneNumber: '',
    email: '',
  });

  useEffect(() => {
    // 폼 데이터의 변경을 처리하는 로직을 추가해야 함
  }, [formData]);

  // 폼 입력 값의 변경을 처리하는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 폼 입력 값의 제출을 처리하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버로 회원가입 데이터를 전송하는 로직을 추가해야 함
  };

  // JSX를 반환하여 컴포넌트를 렌더링
  return (
    <div><Navigation />
    <div className={styles.container}>
        <h1>회원가입</h1>
      <form onSubmit={handleSubmit} className={styles.wrp}>
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
          <span>{errors.username}</span>

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
          <span>{errors.password}</span>

          <label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="비밀번호 확인"
              className={styles.input}
            />
          </label>
          <span>{errors.confirmPassword}</span>

          <label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름"
              className={styles.input}
            />
          </label>
          <span>{errors.name}</span>
          
          <label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="전화번호"
              className={styles.input}
            />
          </label>
          <span>{errors.phoneNumber}</span>

          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일"
              className={styles.input}
            />
          </label>
          <span>{errors.email}</span>
      </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;