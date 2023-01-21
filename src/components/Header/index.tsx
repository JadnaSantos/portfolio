import React from 'react';
import * as S from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import logo from '../../assets/logo.svg';

export function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleClickInitial = () => {
    navigate('/');
  };

  const handleClickSkills = () => {
    navigate('/skills');
  };

  const handleClickAbout = () => {
    navigate('/about');
  };

  const handleClickProjects = () => {
    navigate('/projects');
  };

  const handleClickContact = () => {
    navigate('/contact');
  };


  return (
    <S.Container>

      <S.Content onClick={handleClickLogo}>
        <img src={logo} alt="logo" />
      </S.Content>


      <S.MobileIcon onClick={handleOpen}>
        {open ? (
          <X size={24} weight="bold" />
        ) : (
          <List size={24} weight="bold" />
        )}
      </S.MobileIcon>

      <S.HeaderItem onClick={handleOpen} click={open}>
        <S.HeaderItems onClick={handleClickInitial}>Inicio</S.HeaderItems>
        <S.HeaderItems onClick={handleClickAbout}>Sobre</S.HeaderItems>
        <S.HeaderItems onClick={handleClickProjects}>Projetos</S.HeaderItems>
        <S.HeaderItems onClick={handleClickSkills}>Habilidades</S.HeaderItems>
        <S.HeaderItems onClick={handleClickContact}>Contato</S.HeaderItems>
      </S.HeaderItem>
    </S.Container>
  );
}
