const searchInput = document.getElementById('searchInput');
const branchFilter = document.getElementById('branchFilter');
const schemeFilter = document.getElementById('schemeFilter');
const semesterFilter = document.getElementById('semesterFilter');
const notesContainer = document.querySelector('.notes-container');
const searchClearBtn = document.querySelector('.search-clear');

// Function to filter and display notes
function filterAndDisplayNotes() {
    const branch = branchFilter.value;
    const scheme = schemeFilter.value;
    const semester = semesterFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Toggle clear button visibility
    if (searchTerm) {
        searchClearBtn.classList.add('visible');
    } else {
        searchClearBtn.classList.remove('visible');
    }

    // If using search, bypass filter requirements
    if (searchTerm) {
        const searchResults = subjectNotes.filter(subject => (
            subject.title.toLowerCase().includes(searchTerm) ||
            subject.id.toLowerCase().includes(searchTerm) ||
            subject.modules.some(module => 
                module.title.toLowerCase().includes(searchTerm) ||
                module.topics.some(topic => 
                    topic.toLowerCase().includes(searchTerm)
                )
            ) ||
            subject.importantNotes.some(note =>
                note.title.toLowerCase().includes(searchTerm)
            )
        ));

        if (searchResults.length === 0) {
            notesContainer.innerHTML = `
                <div class="no-results">
                    <h3>No matching results</h3>
                    <p>No results found for "${searchTerm}"</p>
                </div>
            `;
        } else {
            displayFilteredNotes(searchResults);
        }
        return;
    }

    // Check if all filters are selected
    if (!branch || !scheme || !semester) {
        notesContainer.innerHTML = `
            <div class="no-results">
                <h3>Please select all filters</h3>
                <p>Select Branch, Scheme, and Semester to view available notes</p>
            </div>
        `;
        return;
    }

    // Filter subjects based on all criteria
    const filteredSubjects = subjectNotes.filter(subject => 
        subject.branch === branch &&
        subject.scheme === scheme &&
        subject.semester === semester
    );

    // Display filtered subjects
    if (filteredSubjects.length === 0) {
        notesContainer.innerHTML = `
            <div class="no-results">
                <h3>No subjects found</h3>
                <p>No subjects available for the selected combination of filters</p>
            </div>
        `;
    } else {
        displayFilteredNotes(filteredSubjects);
    }
}

// Function to display filtered notes
function displayFilteredNotes(subjects) {
    if (subjects.length === 0) {
        notesContainer.innerHTML = `
            <div class="no-results">
                <h3>No subjects found</h3>
                <p>No subjects available for the selected filters</p>
            </div>
        `;
        return;
    }

    const subjectsHTML = subjects.map(subject => `
        <div class="subject-card" data-subject-id="${subject.id}">
            <div class="subject-header">
                <h3>${subject.title}</h3>
                <div class="subject-meta">
                    <span class="subject-code">${subject.id}</span>
                    <span class="credits">${subject.credits} Credits</span>
                </div>
            </div>
            
            <div class="modules-grid">
                ${subject.modules.map(module => `
                    <div class="module-card">
                        <div class="module-header">
                            <h4>Module ${module.moduleNo}</h4>
                            <span class="module-duration">${module.duration}</span>
                        </div>
                        <p>${module.title}</p>
                        <div class="module-topics">
                            ${module.topics.map(topic => `
                                <span class="topic-item">${topic}</span>
                            `).join('')}
                        </div>
                        <div class="module-actions">
                            <a href="${module.notesUrl}" class="view-notes">View Notes</a>
                            <a href="${module.downloadUrl}" class="download-notes">Download</a>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="subject-resources">
                <a href="${subject.syllabus}" class="resource-link syllabus-link">
                    <i class="fas fa-book"></i> Syllabus
                </a>
                <div class="model-papers-dropdown">
                    <button class="model-papers-btn">
                        <i class="fas fa-file-alt"></i> Important Questions
                    </button>
                    <div class="model-papers-content">
                        ${subject.modelPapers.map(paper => `
                            <a href="${paper.url}" class="model-paper-link">
                                ${paper.year} Question Paper
                            </a>
                        `).join('')}
                    </div>
                </div>
                <div class="model-papers-dropdown">
                    <button class="model-papers-btn">
                        <i class="fas fa-graduation-cap"></i> Learning Resources
                    </button>
                    <div class="model-papers-content">
                        ${subject.importantNotes.map(note => `
                            <a href="${note.url}" class="model-paper-link">
                                ${note.title}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    notesContainer.innerHTML = subjectsHTML;
    initializeModuleActions();
}

// Function to handle module interactions
function initializeModuleActions() {
    document.querySelectorAll('.view-notes').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleCard = e.target.closest('.module-card');
            const subjectCard = moduleCard.closest('.subject-card');
            const subjectId = subjectCard.dataset.subjectId;
            const moduleNo = moduleCard.querySelector('h4').textContent.split(' ')[1];
            console.log(`Viewing notes for subject ${subjectId}, module ${moduleNo}`);
        });
    });

    document.querySelectorAll('.download-notes').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleCard = e.target.closest('.module-card');
            const subjectCard = moduleCard.closest('.subject-card');
            const subjectId = subjectCard.dataset.subjectId;
            const moduleNo = moduleCard.querySelector('h4').textContent.split(' ')[1];
            console.log(`Downloading notes for subject ${subjectId}, module ${moduleNo}`);
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Add event listeners to all filter elements
    [branchFilter, schemeFilter, semesterFilter].forEach(filter => {
        filter.addEventListener('change', () => {
            // Clear search when using filters
            searchInput.value = '';
            searchClearBtn.classList.remove('visible');
            filterAndDisplayNotes();
        });
    });

    // Add event listener for search input with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        // Clear filters when searching
        branchFilter.value = '';
        schemeFilter.value = '';
        semesterFilter.value = '';
        searchTimeout = setTimeout(filterAndDisplayNotes, 300);
    });

    // Clear search button functionality
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchClearBtn.classList.remove('visible');
        filterAndDisplayNotes();
    });

    // Show initial message
    notesContainer.innerHTML = `
        <div class="no-results">
            <h3>Welcome to VTU Notes</h3>
            <p>Select Branch, Scheme, and Semester to view available notes</p>
        </div>
    `;

    // Scroll reveal animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });

    // Particle animation for hero section
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        createParticle(hero);
    }

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section, .hero');
        const navLinks = document.querySelectorAll('.nav-links a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const targetId = '#' + section.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === targetId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Added scroll event listener
    window.addEventListener('scroll', updateActiveNavLink);
});

function createParticle(parent) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    particle.style.animation = `
        float ${Math.random() * 4 + 4}s linear infinite,
        fade ${Math.random() * 2 + 2}s ease-in-out infinite
    `;
    
    parent.appendChild(particle);
}

