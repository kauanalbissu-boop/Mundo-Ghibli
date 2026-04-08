// script.js
const movies = [
    { title: "Nausicaä do Vale do Vento", year: 1984, desc: "Uma jovem princesa luta para proteger seu vale de uma floresta tóxica em um mundo pós-apocalíptico.", img: "https://www.assistirfilme.com.br/wp-content/uploads/2025/06/nausicaa-do-vale-do-vento-poster.jpg" },
    { title: "O Castelo no Céu", year: 1986, desc: "Uma menina e um menino embarcam em uma jornada em busca de uma cidade flutuante lendária.", img: "https://images.justwatch.com/poster/265225789/s718/o-castelo-no-ceu.jpg" },
    { title: "Meu Amigo Totoro", year: 1988, desc: "Duas irmãs descobrem espíritos da floresta e fazem amizade com o adorável Totoro.", img: "https://i.pinimg.com/originals/a6/83/9e/a6839e22b27af52d0e1677c5c1f14f7e.jpg" },
    { title: "Túmulo dos Vagalumes", year: 1988, desc: "A comovente história de dois irmãos sobrevivendo durante a Segunda Guerra Mundial.", img: "https://www.themoviedb.org/t/p/original/kHFUyxNJfhMkKk1FwrNHd62KTEs.jpg" },
    { title: "O Serviço de Entregas da Kiki", year: 1989, desc: "Uma jovem bruxa inicia seu ano de independência entregando pacotes em uma cidade costeira.", img: "https://www.tallengestore.com/cdn/shop/files/KikisDeliveryService-StudioGhibli-JapaneseAnimatedMoviePoster_33398db4-a6a9-4788-beee-5b06e62985dc.jpg?v=1733296936" },
    { title: "Memórias de Ontem", year: 1991, desc: "Uma mulher relembra sua infância enquanto viaja para o interior.", img: "https://images.justwatch.com/poster/265225757/s718/memorias-de-ontem.%7Bformat%7D" },
    { title: "Porco Rosso", year: 1992, desc: "Um piloto transformado em porco caça recompensas nos céus do Adriático.", img: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/4/2022/10/03150627/porco-rosso-poster.jpg" },
    { title: "Eu Posso Ouvir o Oceano", year: 1993, desc: "Uma delicada história de amizade e primeiro amor entre dois estudantes.", img: "https://images.justwatch.com/poster/265229089/s718/eu-posso-ouvir-o-oceano.%7Bformat%7D" },
    { title: "Pom Poko", year: 1994, desc: "Guaxinins mágicos lutam para proteger sua floresta da expansão urbana.", img: "https://image.tmdb.org/t/p/original/fx6C5OHgWuiVFr7LydrrH0hzue8.jpg" },
    { title: "Sussurros do Coração", year: 1995, desc: "Uma garota sonhadora encontra inspiração e amor em uma antiga livraria.", img: "https://image.tmdb.org/t/p/original/5q752lJ1XoRwj6yKVx999avJ8eO.jpg" },
    { title: "Princesa Mononoke", year: 1997, desc: "Uma épica batalha entre humanos e deuses da floresta em busca de equilíbrio.", img: "https://i.pinimg.com/originals/43/20/e3/4320e326015072795dea72d737e4e691.jpg" },
    { title: "Meus Vizinhos, os Yamadas", year: 1999, desc: "As divertidas aventuras cotidianas de uma família japonesa comum.", img: "https://image.tmdb.org/t/p/original/1R9OGxxenuxG7QbRPuFOUDdbWcH.jpg" },
    { title: "A Viagem de Chihiro", year: 2001, desc: "Uma menina entra em um mundo espiritual para salvar seus pais e descobre sua coragem.", img: "https://images.justwatch.com/poster/265231008/s332/a-viagem-de-chihiro" },
    { title: "O Reino dos Gatos", year: 2002, desc: "Uma garota é transformada em gata e vive grandes aventuras no reino felino.", img: "https://www.themoviedb.org/t/p/original/zCmU60poVbBhPdzIipgHNEDJuly.jpg" },
    { title: "O Castelo Animado", year: 2004, desc: "Uma jovem amaldiçoada encontra um castelo mágico e um misterioso mago.", img: "https://image.tmdb.org/t/p/w500/1hTfaEWktMJPxCk5nZNtK7F86C9.jpg" },
    { title: "Contos de Terramar", year: 2006, desc: "Um jovem mago busca restaurar o equilíbrio entre vida e morte.", img: "https://images.justwatch.com/poster/265223888/s718/contos-de-terramar.%7Bformat%7D" },
    { title: "Ponyo", year: 2008, desc: "Uma peixinha mágica deseja se tornar humana e vive uma aventura com um menino.", img: "https://image.tmdb.org/t/p/original/lnXuAfcpWFbDxa4ZxObPIgDJAl2.jpg" },
    { title: "O Mundo dos Pequeninos", year: 2010, desc: "Pequenos 'emprestadores' vivem grandes aventuras dentro de uma casa humana.", img: "https://image.tmdb.org/t/p/original/tEvLgolMKidszU2f2BDFN0H7cPX.jpg" },
    { title: "Da Colina Kokuriko", year: 2011, desc: "Estudantes lutam para salvar um clube escolar com vista para o mar.", img: "https://static.wikia.nocookie.net/dublagem/images/4/47/Kokuriko.jpg/revision/latest?cb=20210112183746&path-prefix=pt-br" },
    { title: "Vidas ao Vento", year: 2013, desc: "A inspiradora história real de um designer de aviões no Japão da guerra.", img: "https://emilaynerodrigues.github.io/ghibli-stories/assets/movies/12-vidas-ao-vento.jpg" },
    { title: "O Conto da Princesa Kaguya", year: 2013, desc: "A lenda da princesa da lua que cresce entre humanos.", img: "https://www.themoviedb.org/t/p/original/cerV9QJhSdDlnUigrsKZQfOeTpA.jpg" },
    { title: "As Memórias de Marnie", year: 2014, desc: "Uma órfã solitária faz amizade com uma misteriosa menina à beira-mar.", img: "https://www.themoviedb.org/t/p/original/q8dKK0OdBR91gEJWRdo9osvxvM6.jpg" },
    { title: "Aya e a Bruxa", year: 2020, desc: "Uma garota adotada descobre ser filha de uma bruxa e entra no mundo da magia.", img: "https://br.web.img3.acsta.net/pictures/20/12/18/10/25/4299038.jpg" },
    { title: "O Menino e a Garça", year: 2023, desc: "Um menino entra em um mundo fantástico em busca de sua mãe perdida.", img: "https://s2-quem.glbimg.com/fTu3hlT9y7ADSAfjqaWG89nGKWc=/0x0:1400x2001/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/r/l/YAE6UETp28OU2vpYDFMg/mi2.jpg" }
];

let currentOffset = 0;
const cardWidth = 275 + 30;

// Função para remover acentos e deixar tudo minúsculo
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")                    // Separa acentos
        .replace(/[\u0300-\u036f]/g, "")     // Remove acentos
        .trim();
}

function renderMovies(filteredMovies) {
    const track = document.getElementById('carousel-track');
    track.innerHTML = '';

    if (filteredMovies.length === 0) {
        track.innerHTML = `<div style="width:100%; padding:100px 20px; text-align:center; color:#747572; font-size:18px;">Nenhum filme encontrado.</div>`;
        return;
    }

    filteredMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <div class="card-content">
                <h3>${movie.title}</h3>
                <span class="year">${movie.year}</span>
                <p>${movie.desc}</p>
            </div>
        `;
        track.appendChild(card);
    });
}

function moveCarousel(direction) {
    const track = document.getElementById('carousel-track');
    const viewport = document.getElementById('carousel-viewport');
    const maxScroll = track.scrollWidth - viewport.clientWidth;

    if (direction === 'next') {
        currentOffset = Math.min(currentOffset + cardWidth * 2, maxScroll);
    } else {
        currentOffset = Math.max(currentOffset - cardWidth * 2, 0);
    }

    track.style.transform = `translateX(-${currentOffset}px)`;
}

function setupSearch() {
    const searchBtn = document.getElementById('btn-search');
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    const closeBtn = document.getElementById('btn-close-search');

    searchBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        input.focus();
    });

    function closeSearch() {
        overlay.classList.remove('active');
        input.value = '';
        resultsContainer.innerHTML = '';
        resultsContainer.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeSearch);

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && overlay.classList.contains('active')) {
            closeSearch();
        }
    });

    // === BUSCA MELHORADA ===
    input.addEventListener('input', () => {
        const term = normalizeText(input.value.trim());
        
        if (!term) {
            resultsContainer.innerHTML = '';
            resultsContainer.classList.remove('active');
            return;
        }

        const filtered = movies.filter(movie => {
            const titleNormalized = normalizeText(movie.title);
            const descNormalized = normalizeText(movie.desc);
            return titleNormalized.includes(term) || descNormalized.includes(term);
        });

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `<div class="no-results">Nenhum filme encontrado para "<strong>${input.value}</strong>"</div>`;
            resultsContainer.classList.add('active');
            return;
        }

        let html = '';
        filtered.forEach(movie => {
            html += `
                <div class="search-result-item" data-title="${movie.title}">
                    <img src="${movie.img}" alt="${movie.title}">
                    <div class="search-result-info">
                        <h4>${movie.title}</h4>
                        <span class="year">${movie.year}</span>
                        <p>${movie.desc}</p>
                    </div>
                </div>
            `;
        });

        resultsContainer.innerHTML = html;
        resultsContainer.classList.add('active');
    });
}

function setupScrollTop() {
    const btnTop = document.getElementById('btn-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            btnTop.style.display = 'flex';
        } else {
            btnTop.style.display = 'none';
        }
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderMovies(movies);

    document.getElementById('btn-next').addEventListener('click', () => moveCarousel('next'));
    document.getElementById('btn-prev').addEventListener('click', () => moveCarousel('prev'));

    // Drag do carrossel
    const viewport = document.getElementById('carousel-viewport');
    const track = document.getElementById('carousel-track');
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    viewport.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.pageX - viewport.offsetLeft;
        scrollLeft = currentOffset;
        viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        viewport.style.cursor = 'grab';
    });

    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const x = e.pageX - viewport.offsetLeft;
        const walk = (x - startX) * 2.2;
        currentOffset = Math.max(0, Math.min(scrollLeft - walk, track.scrollWidth - viewport.clientWidth));
        track.style.transform = `translateX(-${currentOffset}px)`;
    });

    setupSearch();
    setupScrollTop();

    // Botão A História
    document.getElementById('btn-historia').addEventListener('click', () => {
        document.getElementById('historia').scrollIntoView({ behavior: 'smooth' });
    });
});