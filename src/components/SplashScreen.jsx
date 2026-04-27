import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Activity } from 'lucide-react';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  animation: ${({ $isFadingOut }) => ($isFadingOut ? fadeOut : 'none')} 0.5s ease-out forwards;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  width: 90px;
  height: 90px;
  border-radius: 24px;
  backdrop-filter: blur(8px);
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s infinite ease-in-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
`;

const AppName = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin: 0;
  animation: ${slideUp} 0.6s ease-out forwards;
`;

const LoadingBarContainer = styled.div`
  position: fixed;
  bottom: 20%;
  width: 150px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
`;

const load = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const LoadingBar = styled.div`
  height: 100%;
  background: #ffffff;
  border-radius: 4px;
  animation: ${load} 2s ease-in-out forwards;
`;

export function SplashScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Começa a desaparecer um pouco antes de sumir por completo
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Remove do DOM após a animação de fade out
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <SplashContainer $isFadingOut={isFadingOut}>
      <LogoWrapper>
        <Activity size={48} color="#ffffff" strokeWidth={2.5} />
      </LogoWrapper>
      <AppName>CinesioFit</AppName>
      
      <LoadingBarContainer>
        <LoadingBar />
      </LoadingBarContainer>
    </SplashContainer>
  );
}
