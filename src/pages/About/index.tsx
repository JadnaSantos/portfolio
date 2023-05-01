import React from 'react';
import { DownloadSimple, User } from 'phosphor-react';
import { Button } from '../../components/Button';
import * as Style from '../../../src/styles/styles';
import * as S from './styles';

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
          Sou apaixonada por tecnologia inovação e código.
          Estou trabalhando constantemente para me aprimorar buscando alcançar a melhor versão de mim mesmo
          estou sempre aprendendo mais sobre JavaScript, ReactJs, React Native e NodeJs 🚀.
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
