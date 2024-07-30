import { StatusBar } from 'expo-status-bar';
import { Logo, Container } from '../components'



export const SplashScreen = () => {
  return (
    <Container align="center" justify="center" >
      <Logo />
      <StatusBar style="auto" />
    </Container>
  );
}

