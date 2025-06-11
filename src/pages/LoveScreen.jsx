import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import PhotoCarousel from '../components/PhotoCarousel';

const photos = [
  { url: '/photos/photo1.jpg', text: 'Desde o nosso primeiro momento juntos você vem transformando minha vida 💞' },
  { url: '/photos/photo2.jpg', text: 'Cada dia com você faz eu perceber o quanto sou sortudo 🍀' },
  { url: '/photos/photo3.jpg', text: 'Não importa as dificuldades no nosso caminho, desde que eu esteja com você, tudo está bem ❤️‍🩹' },
  { url: '/photos/photo4.jpg', text: 'Valeu por estar comigo todo esse tempo fia, você não tem noção do quanto sou grato a você 🥰' },
  { url: '/photos/photo5.jpg', text: 'Eu te amo mais que tudo no universo, mais do que você consegue sequer imaginar 💗' },
  { url: '/photos/photo6.jpg', text: 'Espero poder compartilhar o resto da minha vida com você, eu te quero pra sempre 🫂' },
  { url: '/photos/photo7.PNG', text: 'E continuarei te querendo, mesmo que em outros universos ou outras vidas 🪞' },
  { url: '/photos/photo8.jpg', text: 'Muito obrigado por tornar a minha vida melhor, por me amar e por ser você 😙' },
];

const LoveScreen = () => {
  return (
    <div className="center-container">
      <h1>Obrigado! 😁</h1>
      <p>Pode ter certeza que eu também te amo, mais que tudo! ❤️</p>
      <MusicPlayer />
      <PhotoCarousel photos={photos} />
    </div>
  );
};

export default LoveScreen;