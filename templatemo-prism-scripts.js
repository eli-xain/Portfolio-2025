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
        description: '',
        longDescription: '',
        image: 'images/illus/Sylveon.png',
        tech: ['Clip Studio Paint', 'Adobe Photoshop', 'Procreate', 'Medibang', 'Portraits', 'Stylized Art', 'Semi-Realism', 'Design'],
        galleryImages: [
            'images/illus/D2 Exchange Gift(Art).png',
            'images/illus/PokemonCard1.jpg',
            'images/illus/Self-Portrait.png',
            'images/illus/Sylveon.png',
            'images/illus/IsometricRoom-Academic.png',
            'images/illus/Self-Portrait_Parody.png',
            'images/illus/Commission2.png',
            'images/illus/Commission.png',
            'images/illus/FanArt.png',
            'images/illus/Female Mapua - Pokemon.png',
            'images/illus/Male Mapua - Pokemon.png',
            'images/illus/OC-Art.png',
            'images/illus/RobertFanart.png',
            'images/illus/AngryArt.png',
            'images/illus/CharacterDesign.png',
            'images/illus/Self-Portrait2.png',
            'images/illus/Self-Portrait3.png'
        ],
        status: "N/A",
        type: "Portfolio Showcase" 
    },
    {
        id: 2,
        title: '2D Game Sprites',
        description: '',
        longDescription: '',
        image: 'images/game-sprite/Splice Art2.png',
        tech: ['Clip Studio Paint'],
        galleryImages: [
            'images/game-sprite/Didon Sprite.png',
            'images/game-sprite/Sanguin Saplings Sprites.gif',
            'images/game-sprite/Splice Art2.png',
            'images/game-sprite/Rigged Character Sprite.gif',
             'images/game-sprite/Pixel-Sprite.png',
             'images/game-sprite/Sprite-CashStaticStandSbeet.png',
             'images/game-sprite/MonsterIdle-960px.png',
            'images/game-sprite/Monster-Idle(2SecLoop).gif',
            'images/game-sprite/MonsterDamage-960px.png'
        ],
        layout: 'single',
        secondGallery: {
        title: 'Full Sprites', 
        layout: 'list',                     
        images: [
            'images/game-sprite/Splice Art.png',
            'images/game-sprite/Elle - MUC Visual Novel Sprites.png',
            'images/game-sprite/KC - MUC Visual Novel Sprites.png',
            'images/game-sprite/Jamie - MUC Visual Novel Sprites.png',
            'images/game-sprite/MUC Visual Novel Sprites.png'
        ]
        },
        status: "N/A",
        type: "Portfolio Showcase" 
    },
    {
        id: 3,
        title: 'Other Game Assets',
        description: '',
        longDescription: '',
        image: 'images/game-asset/Splash Screen - Didon.gif',
        tech: ['Clip Studio Paint'],
        galleryImages: [
            'images/game-asset/Menu Splash Screen Art - Didon UPLB Game Jam 2024.png',
            'images/game-asset/Menu Splash Screen Art - Sanguine Saplings GJ+ 2023.png',
            'images/game-asset/Splash Screen - Didon.gif',
            'images/game-asset/Menu Splash - Sample.png',
            'images/game-asset/Spear-Sillhoute Design.png'
        ],
        status: "N/A",
        type: "Portfolio Showcase" 
    },
    {
        id: 4,
        title: '3D Models',
        description: '',
        longDescription: '',
        image: 'images/3d/IsometricRoom3D-2.jpg',
        tech: ['Autodesk Maya'],
         galleryImages: [
            'images/3d/Academic3D.png',
            'images/3d/Academic3D-2.png',
            'images/3d/Academic3D-3.jpg',
            'images/3d/IsometricRoom3D.jpg',
            'images/3d/IsometricRoom3D-2.jpg',
            'images/3d/MGC-3DLogo.jpg'
        ],
        status: "N/A",
        type: "Portfolio Showcase"
    },
    //{
     //   id: 5,
    //    title: 'Graphic Design (UI/Marketing)',
    //    description: 'Big data processing platform capable of analyzing petabytes of information in real-time.',
     //   longDescription: 'Data Nexus is a scalable platform engineered to ingest, process, and analyze petabytes of heterogeneous data streams. Utilizing a unified pipeline with Apache Spark and Kafka, it delivers real-time insights for mission-critical applications, transforming raw information into actionable business intelligence.',
    //    image: 'images/data-nexus.jpg',
     //   tech: ['Apache Spark', 'Hadoop', 'Kafka'],
    //    galleryImages: ['images/data-nexus.jpg', 'images/iot-matrix.jpg', 'images/neural-network.jpg'] // Placeholder gallery
    //},
    //{
    //    id: 6,
    //    title: 'Academic Game Works',
    //    description: 'Augmented reality system for immersive data visualization and interactive experiences.',
    //    longDescription: 'The AR Interface projects complex data models and interactive controls directly into the user\'s field of view. Built with Unity and custom Computer Vision algorithms, it enhances productivity in engineering and design by allowing users to manipulate 3D models and real-time telemetry with natural gestures.',
    //    image: 'images/ar-interface.jpg',
    //    tech: ['Unity', 'ARCore', 'Computer Vision'],
    //   galleryImages: ['images/ar-interface.jpg', 'images/cyber-defense.jpg', 'images/blockchain-vault.jpg'] // Placeholder gallery
    //}
];

// NEW Data for the Main Projects (Pillars)
const pillarData = [
    {
        id: 'Ashbone',
        title: 'Ashbone',
        longDescription: 'Play as a shadow-born hunter in the decaying city of Ashbone, tasked by a White Lady to purge corrupted Marbles. Master swift hack-and-slash combat and the devastating Black Flame to restore balance. But beware: a mysterious purple figure from your past waits in the darkness, forcing you to question the truth of your mission.',
        externalLink: 'https://drive.google.com/file/d/1fDff2garUGvA7fkIZmbcSUcQOWmq0iKe/view?usp=sharing',
        tech: ['Unity', 'C#', 'Clip Studio Paint', 'Figma', 'UI/UX Design', 'Moho Animation', 'Character Design', 'Technical Artist/Programmer', 'Game Design', 'Game Pitch'],
        galleryImages: [''],
        status: "On-Hold",
        type: "Game Development"
    },
    {
        id: 'Karinder-NYA!',
        title: 'Karinder-NYA!',
        longDescription: 'Play as Aling Kitty, a cute middle-aged cat lady, surviving her way through cooking popular Karinderya Menus! Ensure her in overcoming challenges and sell enough for each day through a full interactive and fun game.',
        externalLink: 'https://drive.google.com/file/d/10239Y7Mq_dI9AHg-8TxRHAPoODMGDYbm/view?usp=sharing',
        tech: ['Unity', 'C#', 'Blender', 'Clip Studio Paint', 'Figma', 'Autodesk Maya', 'Game Design', 'Environment Design', 'UI/UX', 'Technical Programmer', 'Task Management'],
        galleryImages: [''],
        status: "Ongoing as Capstone",
        type: "Game Production"
    },
    {
        id: 'Another I',
        title: 'Another I',
        longDescription: 'Navigate Iris between the truths and visions under the weight of her psyche. Her quest to form her first true connection becomes a battle against the encroaching darkness of her mind and impending graduation that pushes her over the edge.',
        externalLink: 'https://drive.google.com/file/d/16oh94juQc82K_J1_8PHvMxN8ogVsKLTG/view?usp=sharing',
        tech: ['Clip Studio Paint', 'Game Design', 'Character Design', 'Project Management'],
        galleryImages: [''],
        status: "Discontinued",
        type: "Game Design"
    }
];

// NEW Data for the Activities (Stats Section)
const activityData = [
    {
        id: 'sanguine',
        title: 'SANGUINE SAPLINGS',
        tech: ['Game Jam', 'Character Design', '2D Sprite Animation'],
        itchioUrl: 'https://team-mysclick.itch.io/sanguine-saplings',
    },
    {
        id: 'matchup',
        title: 'MATCH-UP CHAMPIONSHIPP',
        tech: ['Character Design', 'Visual Novel Sprites', 'Splice', 'Task Assignment'],
        itchioUrl: 'https://mapuagameconsensus.itch.io/match-up-championship',
    },
    {
        id: 'poperfish',
        title: 'POP\'ER FISH!',
        tech: ['Global Game Jam', 'Assistant Leader', '2D Sprite Animation', 'Splash Menu Art', 'UI Assistant'],
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
                            <button class="card-cta" onclick="openProjectModal(${data.id})">View Gallery</button>
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

    // --- 1. SETUP GALLERIES (From previous steps) ---
    const mainClass = (project.layout === 'list') ? 'list-view' : '';
    const mainGalleryHtml = (project.galleryImages || []).map(imgSrc =>
        `<img src="${imgSrc}" alt="${project.title} image" class="gallery-image">`
    ).join('');

    let secondGalleryHtml = '';
    if (project.secondGallery) {
        const secClass = (project.secondGallery.layout === 'list') ? 'list-view' : '';
        const secImages = project.secondGallery.images.map(imgSrc => 
            `<img src="${imgSrc}" alt="Secondary gallery image" class="gallery-image">`
        ).join('');

        secondGalleryHtml = `
            <h3 style="margin-top: 40px; color: var(--accent-cyan);">
                ${project.secondGallery.title || 'Additional Images'}
            </h3>
            <div class="project-gallery ${secClass}">
                ${secImages}
            </div>
        `;
    }

    // --- 2. GENERATE TECH BADGES ---
    const techBadges = (project.tech || []).map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');

    // --- 3. NEW: GENERATE EXTERNAL LINK BUTTON ---
    let linkButtonHtml = '';
    if (project.externalLink) {
        linkButtonHtml = `
            <div style="margin-top: 30px; text-align: center; border-top: 1px dashed var(--metal-dark); padding-top: 20px;">
                <a href="${project.externalLink}" target="_blank" class="card-cta" style="text-decoration: none; display: inline-block;">
                    View HCD ↗
                </a>
            </div>
        `;
    }

    // --- 4. POPULATE MODAL ---
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
    
        <h3>Showcase</h3>
        <div class="project-gallery ${mainClass}">
            ${mainGalleryHtml}
        </div>

        ${secondGalleryHtml}

        <p style="margin-top: 30px;">${project.longDescription}</p>
        
        <div class="detail-meta">
            <p><strong>Type:</strong> ${project.type || 'Project'}</p>
            <p><strong>Status:</strong> ${project.status || 'Completed'}</p>
        </div>
        
        <h3>Application</h3>
        <div class="card-tech">${techBadges}</div>

        ${linkButtonHtml}
    `;

    // Display the modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalBody.scrollTop = 0;
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
    link.addEventListener('click', function (e) {
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
//const contactForm = document.getElementById('contactForm');
//contactForm.addEventListener('submit', (e) => {
//    e.preventDefault();
//    e.preventDefault();

//    // Get form data
//    const formData = new FormData(contactForm);
//    const data = Object.fromEntries(formData);

//    // Show success message
//    alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);

//    // Reset form
//    contactForm.reset();
//});

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

/* =========================================
   SMART SCROLL BUTTON (SAFE VERSION)
   ========================================= */
document.addEventListener("DOMContentLoaded", function () {
    // 1. Try to find the button
    const scrollBtn = document.getElementById('smartScrollBtn');

    // 2. Only run the logic if the button ACTUALLY exists
    if (scrollBtn) {

        function updateScrollButton() {
            // Robust height calculation
            const totalHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            ) - window.innerHeight;

            const currentScroll = window.scrollY || window.pageYOffset;

            if (currentScroll > totalHeight / 2) {
                scrollBtn.innerHTML = "⬆";
                scrollBtn.title = "Scroll to Top";
                scrollBtn.setAttribute('data-dir', 'up');
            } else {
                scrollBtn.innerHTML = "⬇";
                scrollBtn.title = "Scroll to Bottom";
                scrollBtn.setAttribute('data-dir', 'down');
            }
        }

        // Click Event
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const direction = scrollBtn.getAttribute('data-dir');
            if (direction === 'up') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        });

        // Scroll Listener
        window.addEventListener('scroll', updateScrollButton);
        updateScrollButton(); // Init

    } else {
        // Log a warning but DO NOT CRASH the site
        console.warn("Smart Scroll Button not found in HTML. Skipping feature.");
    }
});

