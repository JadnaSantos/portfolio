import * as S from './styles';
import {
  ChatText,
  Envelope,
  LinkedinLogo,
  MapPin,
  TelegramLogo,
  User,
} from 'phosphor-react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { useRef } from 'react';
import { Button } from '../../components/Button';
import axios from 'axios';
import * as Styles from '../../../src/styles/styles';


const FormContantValidationSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  subject: zod.string(),
});

type SchemaFields = zod.infer<typeof FormContantValidationSchema>


export function Contact() {

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormContantValidationSchema)
  });

  const inputRef = useRef<HTMLInputElement>(null);


  const { handleSubmit, register, reset } = FormValidation;


  const onSendEmail = async (data: SchemaFields) => {
    try {
      const { name, email, subject } = data;

      const response = await axios.post('https://formsubmit.co/jadna.developer@gmail.com', {
        name, email, subject
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }

    reset();
  };

  return (
    <S.Container>
      <Styles.Title>
        Contato
        <span><Envelope /> Contact</span>
      </Styles.Title>
      <S.Content>
        <div className='contact-content'>
          <h4><LinkedinLogo size={22} color="#00fffb" /> WhatsApp </h4>
          <span>+55 11 9942821740</span>
        </div>
        <div className='contact-content'>
          <h4> <TelegramLogo size={22} color="#00fffb" /> Email </h4>
          <span>jadna.developer@gmail.com</span>
        </div>
        <div className='contact-content'>
          <h4><MapPin size={22} color="#00fffb" /> Localização</h4>
          <span>São Paulo - SP</span>
        </div>
      </S.Content>

      <S.Form>
        <form
          onSubmit={handleSubmit(onSendEmail)}
        >
          <h4>Envie a sua mensagem</h4>

          <input type="hidden" name="_template" value="box" />

          <Input
            icon={User}
            placeholder='Nome Completo'
            required
            {...register('name')}
          />


          <Input
            icon={Envelope}
            placeholder='E-mail'
            type='email'
            required
            {...register('email')}
            {...inputRef}
          />

          <Input
            icon={ChatText}
            placeholder='Assunto'
            type='subject'
            required
            {...register('subject')}
            {...inputRef}
          />

          <Button
            type='submit'
          >
            Enviar
          </Button>

        </form>
      </S.Form>
    </S.Container>
  );
}
