
        // Smooth scrolling pour les liens de navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Effet de transparence du header au scroll
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            }
            
            lastScrollTop = scrollTop;
        });

        // Animation au scroll pour les éléments
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observer les sections pour l'animation
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Animation des éléments de timeline
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            const timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }
                });
            }, observerOptions);
            
            timelineObserver.observe(item);
        });

        // Animation des compétences
        document.querySelectorAll('.skill-item').forEach((skill, index) => {
            skill.style.opacity = '0';
            skill.style.transform = 'scale(0.9)';
            skill.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
            
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1)';
                    }
                });
            }, observerOptions);
            
            skillObserver.observe(skill);
        });

        // Animation des projets portfolio
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            const portfolioObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            portfolioObserver.observe(item);
        });

        // Gestion du formulaire de contact
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation du bouton
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;
            
            // Simulation d'envoi
            setTimeout(() => {
                submitBtn.textContent = 'Message envoyé !';
                submitBtn.style.background = '#4CAF50';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.opacity = '1';
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Menu mobile (fonctionnalité basique)
        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            const spans = this.querySelectorAll('span');
            
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
                spans.forEach(span => span.style.transform = '');
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.right = '0';
                navMenu.style.background = 'var(--white)';
                navMenu.style.padding = '1rem';
                navMenu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                navMenu.style.borderRadius = '0 0 0 10px';
                
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        });

        // Fermer le menu mobile en cliquant sur un lien
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                const toggle = document.querySelector('.mobile-menu-toggle');
                const spans = toggle.querySelectorAll('span');
                
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                    spans.forEach(span => span.style.transform = '');
                }
            });
        });

        // Effet parallax subtil sur le hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero && scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });

        // Animation du texte du hero au chargement
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero-content h1');
            const heroSubtitle = document.querySelector('.hero-content .subtitle');
            const heroDescription = document.querySelector('.hero-content .description');
            const heroButton = document.querySelector('.hero-content .cta-button');
            
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(30px)';
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            heroSubtitle.style.opacity = '0';
            heroSubtitle.style.transform = 'translateY(30px)';
            heroSubtitle.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
            
            heroDescription.style.opacity = '0';
            heroDescription.style.transform = 'translateY(30px)';
            heroDescription.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';
            
            heroButton.style.opacity = '0';
            heroButton.style.transform = 'translateY(30px)';
            heroButton.style.transition = 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s';
            
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
                
                setTimeout(() => {
                    heroSubtitle.style.opacity = '1';
                    heroSubtitle.style.transform = 'translateY(0)';
                    
                    setTimeout(() => {
                        heroDescription.style.opacity = '1';
                        heroDescription.style.transform = 'translateY(0)';
                        
                        setTimeout(() => {
                            heroButton.style.opacity = '1';
                            heroButton.style.transform = 'translateY(0)';
                        }, 200);
                    }, 200);
                }, 200);
            }, 300);
        });
    