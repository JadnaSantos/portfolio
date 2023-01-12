import * as S from './styles';
import { Briefcase } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { projects } from './projects';



interface Projects {
  id: string;
  img: string;
  url: string
  title: string;
  github: string;
  description: string;
}


export function Projects() {
  return (
    <S.Container>
      <S.Title>
        Projetos
        <span><Briefcase /> Projects</span>
      </S.Title>
      <S.ProjectsContainer>
        {projects.map(project => {
          return (
            <a href={`${project.github}`} key={project.id} target="_blank" >
              <a>
                <S.ProjectsContent>
                  <img src={project.img} alt={project.title} />
                  <div className="title">
                    <h2>{project.title}</h2>
                  </div>
                </S.ProjectsContent>
              </a>
            </a>
          );
        })}
      </S.ProjectsContainer>
    </S.Container >
  );
}
