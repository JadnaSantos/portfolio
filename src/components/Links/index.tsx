import { Icons } from './styles';
import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo
} from 'phosphor-react';
export function Links() {
  return (
    <>
      <Icons>
        <a href="https://github.com/JadnaSantos" target="_blank" aria-label="Link para o Github">
          <GithubLogo
            size={30}
            color='#8543ff'
          />
        </a>

        <a href="https://www.linkedin.com/in/jadna-jesus/" target="_blank" aria-label="Link para o Linkedin">
          <LinkedinLogo
            size={30}
            color='#8543ff'
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=559942821740" target="_blank" aria-label="Link para o Whatsapp">
          <WhatsappLogo
            size={30}
            color='#8543ff'
          />
        </a>

        <div className="barra"></div>
      </Icons>
    </>
  );
}
