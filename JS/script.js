document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("img");
    const images = document.querySelectorAll("#img .imgs");
    
    let currentIndex = 0;
    const totalImages = images.length;

    function getImageWidth() {
        // Pega a largura real da imagem na tela atual
        return images[0].offsetWidth;
    }

    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            const imageWidth = getImageWidth();
            container.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }, 1800);
    }

    // Corrigir quando a tela redimensionar
    window.addEventListener('resize', function() {
        const imageWidth = getImageWidth();
        container.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    });

    // Iniciar
    startCarousel();
});


function scrollParaProdutos() {
    document.documentElement.classList.add('scroll-lento');
    
    // Executa o scroll
    document.getElementById('produtos').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    

    setTimeout(() => {
        document.documentElement.classList.remove('scroll-lento');
    }, 1000);
}