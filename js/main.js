// Espera que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do menu móvel
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        // Alterna a visibilidade do menu móvel ao clicar no botão
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
        });
    }

    // Fecha o menu móvel ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
        }
    });

    // Animações de scroll para as secções
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Observador para adicionar a classe 'visible' quando a secção entra na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observa todas as secções com a classe 'section-fade'
    document.querySelectorAll('.section-fade').forEach(section => {
        observer.observe(section);
    });

    // Scroll suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Fecha o menu móvel se estiver aberto
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
            }
        });
    });

    // Adiciona sombra ao cabeçalho ao fazer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
});

    // API do Tawk.to para o chat em direto
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6802f00dc692ef190bd10248/1ip5njdjh';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);

})();
