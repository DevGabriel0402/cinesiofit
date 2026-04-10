import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Printer, Loader2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { EbookDocument } from './EbookDocument';
import toast from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const IconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  max-width: 32rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const PrintBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 1.125rem;
  font-weight: 700;
  min-width: 280px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${({ disabled, theme }) => disabled ? 'none' : theme.shadows.lg};
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;

const SpinIcon = styled(Loader2)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
`;

export const EbookGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handlePrint = async () => {
    try {
      setIsGenerating(true);

      const blob = await pdf(<EbookDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      // Abre o PDF em uma nova aba, o que aciona o leitor nativo perfeito para impressão
      window.open(url, '_blank');

      toast.success('Documento pronto! Use Ctrl+P / Cmd+P para imprimir.');
    } catch (error) {
      console.error('Erro ao gerar a impressão:', error);
      toast.error('Ocorreu um erro ao preparar o documento.');
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  return (
    <Container>
      <IconWrapper>
        <Printer size={40} />
      </IconWrapper>
      <Title>Imprimir Material</Title>
      <Description>
        Gere e imprima o guia completo do CinesioFit App direto do seu navegador. O material já vem com layout aprimorado prático para estudos físicos.
      </Description>

      <PrintBtn
        onClick={handlePrint}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <SpinIcon size={24} />
            Preparando Documento...
          </>
        ) : (
          <>
            <Printer size={24} />
            Visualizar e Imprimir
          </>
        )}
      </PrintBtn>
    </Container>
  );
};
