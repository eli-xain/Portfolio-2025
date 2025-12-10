// JavaScript Document

/*

TemplateMo 600 Prism Flux

https://templatemo.com/tm-600-prism-flux

*/

// Portfolio data for carousel

        const portfolioData = [
            {
                id: 1,
                title: 'Illustrations',
                description: 'Advanced AI system with deep learning capabilities for predictive analytics and pattern recognition.',
                longDescription: 'The core of our AI strategy, this Neural Network uses a multi-layered architecture to process vast datasets. It is trained on proprietary algorithms to achieve state-of-the-art accuracy in forecasting and anomaly detection. Its deployment in the Quantum Cloud minimizes latency and maximizes computational efficiency, making real-time decision-making a reality.',
                image: 'images/neural-network.jpg',
                tech: ['TensorFlow', 'Python', 'CUDA'],
                galleryImages: ['images/neural-network.jpg', 'images/data-nexus.jpg', 'images/cyber-defense.jpg'] // Cleaned placeholder gallery
            },
            {
                id: 2,
                title: '2D Game Sprites',
                description: 'Next-generation cloud infrastructure leveraging quantum computing for unprecedented processing power.',
                longDescription: 'A paradigm shift in infrastructure, the Quantum Cloud provides exponential performance gains over classical systems. Built on a hybrid architecture, it offers secure, scalable, and highly available resources for complex simulations, cryptographic cracking, and advanced machine learning tasks. This is the foundation for all future digital services.',
                image: 'images/quantum-cloud.jpg',
                tech: ['AWS', 'Kubernetes', 'Docker'],
                galleryImages: ['images/quantum-cloud.jpg', 'images/iot-matrix.jpg', 'images/blockchain-vault.jpg'] // Placeholder gallery
            },
            {
                id: 3,
                title: 'Game Assets',
                description: 'Secure decentralized storage solution using advanced encryption and distributed ledger technology.',
                longDescription: 'This project is a high-security decentralized file storage solution. By distributing data across a private, permissioned blockchain, we ensure immutability and resistance to single points of failure. Every transaction and file retrieval is cryptographically logged, providing an unparalleled level of auditability and data integrity for sensitive records.',
                image: 'images/blockchain-vault.jpg',
                tech: ['Ethereum', 'Solidity', 'Web3'],
                galleryImages: ['images/blockchain-vault.jpg', 'images/neural-network.jpg', 'images/data-nexus.jpg'] // Placeholder gallery
            },
            {
                id: 4,
                title: '3D Models',
                description: 'Military-grade cybersecurity framework with real-time threat detection and automated response.',
                longDescription: 'Our Cyber Defense framework implements a Zero Trust model, where no user or device is trusted by default. It utilizes AI-powered behavioral analytics to identify and neutralize threats in milliseconds, providing an invisible, multi-layered shield against sophisticated cyber-attacks and ensuring continuous operational resilience.',
                image: 'images/cyber-defense.jpg',
                tech: ['Zero Trust', 'AI Defense', 'Encryption'],
                galleryImages: ['images/cyber-defense.jpg', 'images/ar-interface.jpg', 'images/quantum-cloud.jpg'] // Placeholder gallery
            },
            {
                id: 5,
                title: 'UI/UX Design',
                description: 'Big data processing platform capable of analyzing petabytes of information in real-time.',
                longDescription: 'Data Nexus is a scalable platform engineered to ingest, process, and analyze petabytes of heterogeneous data streams. Utilizing a unified pipeline with Apache Spark and Kafka, it delivers real-time insights for mission-critical applications, transforming raw information into actionable business intelligence.',
                image: 'images/data-nexus.jpg',
                tech: ['Apache Spark', 'Hadoop', 'Kafka'],
                galleryImages: ['images/data-nexus.jpg', 'images/iot-matrix.jpg', 'images/neural-network.jpg'] // Placeholder gallery
            },
            {
                id: 6,
                title: 'Academic Game Works',
                description: 'Augmented reality system for immersive data visualization and interactive experiences.',
                longDescription: 'The AR Interface projects complex data models and interactive controls directly into the user\'s field of view. Built with Unity and custom Computer Vision algorithms, it enhances productivity in engineering and design by allowing users to manipulate 3D models and real-time telemetry with natural gestures.',
                image: 'images/ar-interface.jpg',
                tech: ['Unity', 'ARCore', 'Computer Vision'],
                galleryImages: ['images/ar-interface.jpg', 'images/cyber-defense.jpg', 'images/blockchain-vault.jpg'] // Placeholder gallery
            }
        ];

        // NEW Data for the Main Projects (Pillars)
        const pillarData = [
            {
                id: 'Ashbone',
                title: 'Ashbone',
                description: 'A 2D Action RPG/Metroidvania game inspired by Hollow Knight and the souls-like genre. The game features an original narrative, challenging boss fights, and a complex upgrade system.',
                longDescription: 'Ashbone is the culminating project of my studies—a challenging 2D action RPG. My primary role encompassed all level design, boss fight scripting in C#, and managing the tile-based world generation. It utilizes Unity’s 2D lighting system to create a moody atmosphere reflective of the \'Souls-like\' theme. The design philosophy centers on player mastery and environmental storytelling.',
                tech: ['Unity', 'C#', 'Aseprite', 'Figma'],
                galleryImages: ['images/neural-network.jpg', 'images/data-nexus.jpg'],
            },
            {
                id: 'Karinder-NYA!',
                title: 'Karinder-NYA!',
                description: 'A fast-paced, 3D cooking and management game where players run a Filipino "karinderya" (eatery) managed by cats. Focuses on time management and quick recipe execution.',
                longDescription: 'Developed during a 48-hour game jam, Karinder-NYA! focuses on rapid prototyping and user feedback integration. I handled all 3D asset modeling (Blender) and game programming (C#) for the core cooking loop, ensuring responsive controls and accurate score tracking. It was designed to be easily scalable with new recipes and assets.',
                tech: ['Unity', 'C#', 'Blender', 'Photoshop'],
                galleryImages: ['images/quantum-cloud.jpg', 'images/iot-matrix.jpg'],
            },
            {
                id: 'Another I',
                title: 'Another I',
                description: 'A narrative-driven 2D puzzle platformer exploring themes of self-identity and mental health, requiring two characters to cooperate to solve puzzles.',
                longDescription: 'This academic project was a deep dive into complex narrative design and player mechanics. The core innovation is the dual-character control system, where player actions must be synchronized. I was responsible for the sound design (Audacity), puzzle scripting, and ensuring the narrative branched correctly based on player choices, emphasizing an emotional connection to the themes.',
                tech: ['Unity', 'C#', 'Visual Studio', 'Audacity'],
                galleryImages: ['images/blockchain-vault.jpg', 'images/ar-interface.jpg'],
            }
        ];

        // NEW Data for the Activities (Stats Section)
        const activityData = [
            {
                id: 'sanguine',
                title: 'SANGUINE SAPLINGS',
                tech: ['Game Jam', 'Team Lead', 'Project Planning'],
                itchioUrl: 'https://team-mysclick.itch.io/sanguine-saplings',
            },
            {
                id: 'matchup',
                title: 'MATCH-UP CHAMPIONSHIPP',
                tech: ['Exhibition', 'Networking', 'Pitching'],
                itchioUrl: 'https://mapuagameconsensus.itch.io/match-up-championship',
            },
            {
                id: 'poperfish',
                title: 'POP\'ER FISH!',
                tech: ['Global Game Jam', 'Rapid Prototyping', 'Art & Design'],
                itchioUrl: 'https://dyke-dog.itch.io/pop-er-fish',
            }
        ];

       // Skills data
        const skillsData = [
            // Creative Skills
            { name: 'Clip Studio Paint', icon: '🎨', level: 95, category: 'creative' },
            { name: 'Moho Animation', icon: '✏️', level: 70, category: 'creative' },
            { name: 'Canva', icon: '🖼️', level: 95, category: 'creative' },
            { name: 'Adobe Photoshop', icon: '📸', level: 80, category: 'creative' },
            { name: 'Adobe Premiere', icon: '🎬', level: 75, category: 'creative' },
            { name: 'Autodesk Maya', icon: '🏛️', level: 65, category: 'creative' },
            { name: 'Da Vinci Resolve', icon: '🎞️', level: 80, category: 'creative' },
            { name: 'Figma', icon: '📐', level: 90, category: 'creative' },
            { name: 'Blender', icon: '🧊', level: 70, category: 'creative' },
            { name: 'Audacity', icon: '🎤', level: 90, category: 'creative' },
            { name: 'Procreate', icon: '🖌️', level: 50, category: 'creative' },

            // Technical Skills
            { name: 'Unity', icon: '🎮', level: 60, category: 'technical' },
            { name: 'GitHub', icon: '🐙', level: 80, category: 'technical' },
            { name: 'Apache Netbeans', icon: '⚙️', level: 60, category: 'technical' },
            { name: 'C#', icon: '#️⃣', level: 55, category: 'technical' },
            { name: 'C++', icon: '++|', level: 70, category: 'technical' },
            { name: 'CSS', icon: '💅', level: 75, category: 'technical' },
            { name: 'Java', icon: '☕', level: 70, category: 'technical' },
            { name: 'HTML', icon: '🌐', level: 80, category: 'technical' },
            { name: 'Windows', icon: '🪟', level: 95, category: 'technical' },

            // Workflow
            { name: 'Notion', icon: '📝', level: 100, category: 'workflow' },
            { name: 'Google Workspace', icon: '💼', level: 100, category: 'workflow' },
            { name: 'Trello', icon: '📋', level: 95, category: 'workflow' },
            { name: 'Milanote', icon: '💡', level: 85, category: 'workflow' },
            { name: 'Microsoft Office 360', icon: '📊', level: 92, category: 'workflow' }
        ];

        // Scroll to section function
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            const header = document.getElementById('header');
            if (section) {
                const headerHeight = header.offsetHeight;
                const targetPosition = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Initialize particles for philosophy section
        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random horizontal position
                particle.style.left = Math.random() * 100 + '%';
                
                // Start particles at random vertical positions throughout the section
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay for natural movement
                particle.style.animationDelay = Math.random() * 20 + 's';
                
                // Random animation duration for variety
                particle.style.animationDuration = (18 + Math.random() * 8) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize carousel
        let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const indicatorsContainer = document.getElementById('indicators');

        function createCarouselItem(data, index) {
                    const item = document.createElement('div');
                    item.className = 'carousel-item';
                    item.dataset.index = index;
            
                    // SIMPLIFIED CARD HTML (RE-ADDED SHORT DESCRIPTION)
                    item.innerHTML = `
                        <div class="card">
                            <div class="card-number">0${data.id}</div>
                            <div class="card-image">
                                <img src="${data.image}" alt="${data.title}">
                            </div>
                            <h3 class="card-title">${data.title}</h3>
                            <p class="card-description">${data.description}</p>
                            <button class="card-cta" onclick="openProjectModal(${data.id})">Explore</button>
                        </div>
                    `;
            
                    return item;
          }

        function initCarousel() {
            // Create carousel items
            portfolioData.forEach((data, index) => {
                const item = createCarouselItem(data, index);
                carousel.appendChild(item);
                
                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.dataset.index = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            const totalItems = items.length;
            const isMobile = window.innerWidth <= 768;
            const isTablet = window.innerWidth <= 1024;
            
            items.forEach((item, index) => {
                // Calculate relative position
                let offset = index - currentIndex;
                
                // Wrap around for continuous rotation
                if (offset > totalItems / 2) {
                    offset -= totalItems;
                } else if (offset < -totalItems / 2) {
                    offset += totalItems;
                }
                
                const absOffset = Math.abs(offset);
                const sign = offset < 0 ? -1 : 1;
                
                // Reset transform
                item.style.transform = '';
                item.style.opacity = '';
                item.style.zIndex = '';
                item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                
                // Adjust spacing based on screen size
                let spacing1 = 400;
                let spacing2 = 600;
                let spacing3 = 750;
                
                if (isMobile) {
                    spacing1 = 280;  // Was 400, now 100px closer
                    spacing2 = 420;  // Was 600, now 180px closer
                    spacing3 = 550;  // Was 750, now 200px closer
                } else if (isTablet) {
                    spacing1 = 340;
                    spacing2 = 520;
                    spacing3 = 650;
                }
                
                if (absOffset === 0) {
                    // Center item
                    item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (absOffset === 1) {
                    // Side items
                    const translateX = sign * spacing1;
                    const rotation = isMobile ? 25 : 30;
                    const scale = isMobile ? 0.88 : 0.85;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.8';
                    item.style.zIndex = '5';
                } else if (absOffset === 2) {
                    // Further side items
                    const translateX = sign * spacing2;
                    const rotation = isMobile ? 35 : 40;
                    const scale = isMobile ? 0.75 : 0.7;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else if (absOffset === 3) {
                    // Even further items
                    const translateX = sign * spacing3;
                    const rotation = isMobile ? 40 : 45;
                    const scale = isMobile ? 0.65 : 0.6;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.3';
                    item.style.zIndex = '2';
                } else {
                    // Hidden items (behind)
                    item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                    item.style.opacity = '0';
                    item.style.zIndex = '1';
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % portfolioData.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Initialize hexagonal skills grid
        function initSkillsGrid() {
            const skillsGrid = document.getElementById('skillsGrid');
            const categoryTabs = document.querySelectorAll('.category-tab');
            
            function displaySkills(category = 'all') {
                skillsGrid.innerHTML = '';
                
                const filteredSkills = category === 'all' 
                    ? skillsData 
                    : skillsData.filter(skill => skill.category === category);
                
               filteredSkills.forEach((skill, index) => {
                    const hexagon = document.createElement('div');
                    // ADDED title attribute to main hexagon for full name on hover
                    hexagon.className = 'skill-hexagon';
                    hexagon.style.animationDelay = `${index * 0.1}s`;
                    hexagon.setAttribute('title', skill.name);
                    
                    // CORRECTED HTML STRUCTURE FOR SKILL BAR
                    hexagon.innerHTML = `
                        <div class="hexagon-inner">
                            <div class="hexagon-content">
                                <div class="skill-icon-hex">${skill.icon}</div>
                                <div class="skill-name-hex">${skill.name}</div>
                                <div class="skill-level">
                                    <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                                </div>
                                <div class="skill-percentage-hex">${skill.level}%</div>
                            </div>
                        </div>
                    `;
                    
                    skillsGrid.appendChild(hexagon);
                });
            }
            
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    displaySkills(tab.dataset.category);
                });
            });
            
            displaySkills();
        }

        // Modal Functions (UPDATED to handle both Carousel and Pillar data)
        const projectModal = document.getElementById('projectModal');
        const modalBody = projectModal ? projectModal.querySelector('.modal-body') : null;
        const closeModalBtn = document.getElementById('closeModalBtn');

        function openProjectModal(projectIdentifier) {
            let project;

            // 1. Check if the identifier is a number (for carousel projects)
            if (!isNaN(projectIdentifier)) {
                project = portfolioData.find(p => p.id === parseInt(projectIdentifier));
            }

            // 2. If not found, check the pillar data (using string ID/title)
            if (!project) {
                 project = pillarData.find(p => p.id === projectIdentifier);
            }
            
            if (!project || !projectModal || !modalBody) {
                console.error('Project data or modal elements not found.', projectIdentifier);
                return;
            }
            
            // Generate the technology badges HTML for the pop-up
            const techBadges = project.tech.map(tech => 
                `<span class="tech-badge">${tech}</span>`
            ).join('');

            // Generate Gallery HTML (safely access galleryImages, falls back to empty array)
            const galleryHtml = (project.galleryImages || []).map(imgSrc => 
                `<img src="${imgSrc}" alt="${project.title} screenshot" class="gallery-image">`
            ).join('');
            
            // Populate modal with detailed project data
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                
                <h3>Project Showcase</h3>
                <div class="project-gallery">${galleryHtml}</div>

                <p><strong>Overview:</strong> ${project.description || 'No short overview available.'}</p>
                <p>${project.longDescription}</p>
                <div class="detail-meta">
                    <p><strong>Type:</strong> ${typeof projectIdentifier === 'string' ? 'Main Academic Project' : 'Portfolio Showcase'}</p>
                    <p><strong>Status:</strong> ${typeof projectIdentifier === 'string' ? 'Completed' : 'On-going'}</p>
                </div>
                <h3>Key Technologies</h3>
                <div class="card-tech">${techBadges}</div>
            `;

            // Display the modal and prevent background scrolling
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            modalBody.scrollTop = 0; // Scroll modal content to top on open
        }

        function closeModal() {
            if (projectModal) {
                projectModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }
        
        // Modal Event Listeners
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }

        if (projectModal) {
            // Close modal when clicking on the overlay background
            projectModal.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal-overlay')) {
                    closeModal();
                }
            });
            // Close modal with 'Escape' key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                    closeModal();
                }
            });
        }
        
        // NEW: Function to initialize buttons in the philosophy/pillar section
        function initPillarButtons() {
            const pillarButtons = document.querySelectorAll('.pillar-more-btn');
            pillarButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const projectId = button.dataset.project;
                    openProjectModal(projectId);
                });
            });
        }

        // NEW: Function to render content into the stats section (activities)
        function initActivityCards() {
            const statCards = document.querySelectorAll('.stat-card-details');
            
            statCards.forEach((card, index) => {
                const activity = activityData.find(a => a.id === card.dataset.activityId);
                if (!activity) return;

                // 1. Create Tech Badges
                const techBadges = activity.tech.map(tech => 
                    `<span class="tech-badge">${tech}</span>`
                ).join('');
                
                // 2. Create itch.io button (using existing button style)
                const itchIoButton = `
                    <a href="${activity.itchioUrl}" target="_blank" rel="noopener noreferrer" class="stat-cta">
                        itch.io ↗
                    </a>
                `;

                // Insert elements into the card
                card.innerHTML = `
                    <div class="card-tech">${techBadges}</div>
                    ${itchIoButton}
                `;
            });
        }

        // Event listeners (Update initialization calls)
        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);

        // Auto-rotate carousel
        setInterval(nextSlide, 5000);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Update carousel on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateCarousel();
            }, 250);
        });

        // Initialize on load
        initCarousel();
        initSkillsGrid();
        initParticles();
        initPillarButtons(); // NEW CALL
        initActivityCards(); // NEW CALL

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling and active navigation
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Update active navigation on scroll
        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href').substring(1);
                        if (href === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        // Animated counter for stats
        function animateCounter(element) {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(counter);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }

        // Intersection Observer for stats animation
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(number => {
                        if (!number.classList.contains('animated')) {
                            number.classList.add('animated');
                            animateCounter(number);
                        }
                    });
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });

        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 3000);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });