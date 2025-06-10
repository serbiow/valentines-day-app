import React from 'react';
import './styles/MusicPlayer.css';

function MusicPlayer() {
  return (
    <div className="music-player">
      <h2><span>Nossa música:</span> I Was Made For Lovin' You</h2>
      <p>
        Dê play antes de continuar lendo, é a música que mais me lembra de nós! A gente é do rock porra <br />
        🤘💀🖤
      </p>
      <img
        src="/capa_musica.jpg"
        alt="Capa da música"
        className="music-cover"
      />
      <audio controls>
        <source src="/music/love-song.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default MusicPlayer;