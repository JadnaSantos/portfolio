import Typewriter from 'typewriter-effect';
import * as S from './styles';
import photo from '../../assets/jadna.jpg';
import { Links } from '../../components/Links';


export function Home() {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.HomeText>
            <div className="cubo-animation"></div>
            <h3>Olá, eu sou</h3>
            <h1>Jadna Silva</h1>
            <h2>
              <Typewriter
                options={{
                  strings: ['Front-End Developer.', 'Desenvolvedora Front-End.'],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                }}
              />
            </h2>
          </S.HomeText>

          <div>
            <S.Image src={photo} alt="Jadna Photo" width="455px" height="auto" />
          </div>

        </S.Content>

        <Links />

      </S.Container>
    </>

  );
}
