import * as S from './styles';
import { FileCode } from 'phosphor-react';
import { cardSkills } from './skills';

interface Skills {
  title: string,
  color?: string,
  img?: string,
  id: number,
}

export function Skills() {
  return (
    <S.Container>
      <S.Title>
        Habilidades
        <span><FileCode /> Skills</span>
      </S.Title>
      <S.Content>
        {cardSkills.map(skill => {
          return (
            <S.SkillsContent color={skill.color} key={skill.id}>
              <img
                src={skill.img}
                alt={skill.title}
              />
              <h4>{skill.title}</h4>
              <span className='border'></span>
            </S.SkillsContent>
          );
        })}
      </S.Content>
    </S.Container>
  );
}
