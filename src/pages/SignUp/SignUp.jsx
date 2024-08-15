import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  height: 100vh;
  background: linear-gradient(to right, var(--background), var(--accent));

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  background-color: var(--background);
  color: var(--text);
  width: 55rem;
  height: 35rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url('./src/img/bkg.jpg') no-repeat left center;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  text-align: start;
  margin: 2rem 1rem 1rem;
`;

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LabelUpper = styled.label`
  text-transform: uppercase;
`;

const Content = styled.div`
  margin: 0 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid var(--primary);
`;

const Input = styled.input`
  width: 8rem;
`;

const ButtonNavigate = styled(Link)`
  position: absolute;
  top: 0;
  right: -8rem;
  display: flex;
  justify-content: space-evenly;
  width: 8rem;
  padding: 1rem;
  background-color: var(--accent);
  color: var(--text);
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  line-height: 1.2;
`;

const Button = styled.button`
  margin: 2rem auto;
  background-color: var(--accent);
  color: var(--text);
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      alert('Usuário cadastrado com sucesso.');
      navigate('/home'); // Redireciona após o cadastro
    } else {
      alert('As senhas não coincidem');
    }
  };

  return (
    <Container>
      <Section>
        <FormContainer>
          <ButtonNavigate to="/">
            Login <i className="fa-solid fa-angles-right"></i>
          </ButtonNavigate>
          <Form onSubmit={handleSignUp}>
            <Title>Sign Up</Title>
            <Content>
              <LabelUpper>Username</LabelUpper>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Content>
            <Content>
              <LabelUpper>Password</LabelUpper>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Content>
            <Content>
              <LabelUpper>Confirm Password</LabelUpper>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Content>
            <Button type="submit">Sign Up</Button>
          </Form>
        </FormContainer>
        <Image />
      </Section>
    </Container>
  );
};