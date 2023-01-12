import { DownloadSimple, User } from 'phosphor-react';
import { Button } from '../../components/Button';
import * as Style from '../../../src/styles/styles';
import * as S from './styled';

export function About() {
  return (
    <Style.Container>
      <Style.Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Style.Title>

      <S.Content>
        <span>
          Eu sou a Jadna Silva, moro em São Paulo capital.Trabalho com desenvolvimento front end há pouco mais de 3 anos.
          Sou apaixonada por tecnologia inovação e código, sou uma pessoa que persegue seus sonhos,que trabalha dure e
          que é orientada para resultados.
          Na verdade, trabalho constantemente para me aprimorar buscando alcaçar a melhor versão de mim mesmo
          Estou sempre aprendendo mais sobre JavaScript, ReactJs, React Native e NodeJs.
        </span>
      </S.Content>

      <a href="/pdf/Jadna-Silva.pdf" download>
        <Button>
          <b>Download CV</b> <DownloadSimple weight="bold" color='#ffff' />
        </Button>
      </a>
    </Style.Container >
  );
}
