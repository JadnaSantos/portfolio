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
        <div className="aboutDescription">
          <span>
            Eu sou a Jadna Silva, moro em São Paulo capital.
            Trabalho com desenvolvimento fron end a pouco mais de 3 anos.
            Sou apaixonada por tecnologia inovação e código!
            Estou sempre aprendendo mais sobre ReactJs, React Native e NodeJs.
          </span>
        </div>
      </S.Content>
      <a href="/pdf/Jadna-Silva.pdf" download>
        <Button>
          <b>Download CV</b> <DownloadSimple weight="bold" />
        </Button>
      </a>
    </Style.Container >
  );
}
