import * as S from './styled';
import { DownloadSimple, User } from 'phosphor-react';
import { Button } from '../../components/Button';


export function About() {
  return (
    <S.Container>
      <S.Title>
        Sobre
        <span>
          <User /> About
        </span>
      </S.Title>

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
    </S.Container >
  );
}
