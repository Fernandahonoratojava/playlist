var musicas = [
    {titulo:'See you again', artista:'Wiz Khalifa ft. Charlie Puth (Pop Rap)', src:'musicas/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3', img:'imagens/seeyou.jpg'},
    {titulo:'Por onde andei', artista:'Nando Reis (MPB)', src:'musicas/Nando Reis - Por Onde Andei.mp3', img:'imagens/nando.jpg'},
    {titulo:'Xote da alegria', artista:'Falamansa (Forró)', src:'musicas/Falamansa - Xote da Alegria.mp3', img:'imagens/falamansa.jpg'},
    {titulo:'Os anjos te louvam', artista:'Eli Soares (Gospel)', src:'musicas/Eli Soares - Os Anjos Te Louvam.mp3', img:'imagens/eli.jpg'},
    {titulo:'Always', artista:'Bon Jovi (Rock)', src:'musicas/Always - Bon Jovi (Lyrics) 🎵.mp3', img:'imagens/jovi.jpg'},
    {titulo:'paradise', artista:'Coldplay (POP)', src:'musicas/Coldplay - Paradise (Lyrics).mp3', img:'imagens/coldplay.jpg'},
    {titulo:'Rude', artista:'Magic (Raggae)', src:'musicas/MAGIC! - Rude (Lyrics).mp3', img:'imagens/magic.jpg'},
    {titulo:'Borboletas', artista:'Victor & Léo (Sertanejo)', src:'musicas/Vitor & Leo - Borboletas (Letras) ALTA QUALIDADE.mp3', img:'imagens/victorleo.jpg'},
    {titulo:'Quando te encontrei', artista:'Raça negra (Samba)', src:'musicas/Raça Negra - Quando Te Encontrei (Deezer Sessions).mp3', img:'imagens/racanegra.jpg'},
    {titulo:'Praise God', artista:'Kanye West (Rap)', src:'musicas/Kanye West - Praise God (Audio).mp3', img:'imagens/kanye.jpg'},
];

var musica = document.querySelector('audio');
var indexMusica = 0;

var duracaoMusica = document.querySelector('.fim');
var imagem = document.querySelector('img');
var letra = document.querySelector('letra');
var nomeMusica = document.querySelector('.descricao h2');
var nomeArtista = document.querySelector('.descricao i');


renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 9;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 9){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}