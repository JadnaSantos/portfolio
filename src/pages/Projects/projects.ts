import appMovie from '../../assets/projects/appMovies/movie.png';
import localMaps from '../../assets/projects/localMaps/web-login.png';
import SPedidos from '../../assets/projects/orderSystem/add-product.png';
import coffeDelivery from '../../assets/projects/coffeDelivery/coffee.png';
import cout from '../../assets/projects/countDownTime/time.png';
import quiz from '../../assets/projects/quiz/quiz.png';


export const projects = [
  {
    id: 1,
    url: 'App-Movie',
    img: `${appMovie}`,
    title: 'App-Movie',
    github: 'https://github.com/JadnaSantos/app-theMovie',
    description: ' Lista os Filmes mais populares do momento, para isto todos os dados dos catálogos como título, descrição, capa, foto de background e avaliação foram extraídos ao usar a API TMDb.',
  },
  {
    id: 2,
    url: 'Local Maps',
    img: `${localMaps}`,
    title: 'Local Maps',
    github: 'https://github.com/JadnaSantos/local-maps',
    description: 'Local Maps é um app que ajuda as pessoas a conhecer melhor o comércio local, ou seja, o projeto é constituído por uma plataforma web que as pessoas possam cadastrar os estabelecimentos.',
  },
  {
    id: 3,
    url: 'Sistema de Pedidos',
    img: `${SPedidos}`,
    title: 'Sistema de Pedidos',
    github: 'https://github.com/JadnaSantos/sistema-de-pedidos',
    description: 'Local Maps é um app que ajuda as pessoas a conhecer melhor o comércio local, ou seja, o projeto é constituído por uma plataforma web que as pessoas possam cadastrar os estabelecimentos.',
  },
  {
    id: 4,
    url: 'Coffee Delivery',
    img: `${coffeDelivery}`,
    title: 'Coffee Delivery',
    github: 'https://github.com/JadnaSantos/coffee-delivery',
    description: 'Nesse desafio, foi proposto desenvolver uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia',
  },
  {
    id: 5,
    url: 'Count Down Time',
    img: `${cout}`,
    title: 'Count Down Time',
    github: 'https://github.com/JadnaSantos/CountDownTime-',
    description: 'Nesse desafio, foi proposto desenvolver uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia',
  },
  {
    id: 6,
    url: 'Quiz',
    img: `${quiz}`,
    title: 'Quiz',
    github: 'https://github.com/JadnaSantos/QuizApp',
    description: 'Nesse desafio, foi proposto desenvolver uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia',
  }
];
