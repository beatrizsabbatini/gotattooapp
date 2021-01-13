import React from 'react';

import logoImage from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Logo, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImage} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="email" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('oi');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
