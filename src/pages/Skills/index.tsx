import * as S from './styles';
import * as Styles from '../../../src/styles/styles';

import { FileCode } from 'phosphor-react';
import { cardSkills } from './skills';

export function Skills() {
  return (
    <S.Container>
      <Styles.Title>
        Habilidades
        <span><FileCode /> Skills</span>
      </Styles.Title>
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
