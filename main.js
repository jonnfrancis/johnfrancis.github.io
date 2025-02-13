    import './style.css'
    import './font.css'
    import Lenis from '@studio-freight/lenis'
    import lottie from 'lottie-web'

    console.log("Portfolio is live!")

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: import.meta.env.DBNAME,
        authDomain: "portfolio-messages-cff28.firebaseapp.com",
        databaseURL: "https://portfolio-messages-cff28-default-rtdb.firebaseio.com",
        projectId: "portfolio-messages-cff28",
        storageBucket: "portfolio-messages-cff28.appspot.com",
        messagingSenderId: "571131098691",
        appId: "1:571131098691:web:68b9662aa92d0c9b2706f6",
        measurementId: "G-L3Y4Z6MQ77"
    };
    firebase.initializeApp(firebaseConfig)

    gsap.registerPlugin(ScrollTrigger);




    addHeroSection()
    addAboutMeSection()
    addProjectsSection()

    function addHeroSection() {
        // Create a GSAP timeline
        const timeline = gsap.timeline();
        const textLines = document.querySelectorAll(".catchy-text")

        textLines.forEach(textLine => {
            const split = new SplitType(textLine, {
                types: "chars"
            })
        })

        // Animation for the hero section
        timeline.to('.hero', {
            opacity: 1,
            duration: .1,
            ease: 'power2.out'
        })

        timeline.to('.navbar', {
                // y: 50,
                opacity: 1,
                duration: 0.2,
                ease: 'power2.out'
            })
            .from('.navbar ul li', {
                y: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power1.out'
            }, "-=.6")
            .from('.navbar .cta-button', {
                y: -20,
                opacity: 0,
                duration: 0.2,
                ease: 'power2.out'
            }, "-=.2");

        // timeline.to('.hero-illustration', {
        //     clipPath: 'polygon(0 0, 100% 0, 100% 99%, 0 99%)',
        //     scale: 1,
        //     duration: 1.4
        // })
        timeline.from(".grid-item", {
                y: 15,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
                ease: "power3.in"
            })
            .from('.hero-content', {
                height: 0,
                opacity: 0,
                duration: .8,
                ease: 'power2.out'
            }, "-=.4")

        timeline.from(".name-animation", {
                opacity: 0,
                y: -20,
                stagger: 0.05,
                duration: .4,
                delay: 0.5,
                ease: "power2.out"
            }, "-=.4")
            .from('.char', {
                opacity: 0,
                yPercent: -100,
                stagger: 0.007,
                ease: "power2.out"
            }, "-=1.6")
            .from('.hero .cta-button', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, "-=.6");

        timeline.to(".blob", {
            duration: 2,
            scale: 1,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.3,
            delay: .5
        });

        timeline.play();

        const blobs = document.querySelectorAll(".blob");
        blobs.forEach(blob => {
            blob.style.top = `${Math.random() * 100}vh`;
            blob.style.left = `${Math.random() * 50}vw`;
        });

        const mobileNavbar = document.querySelector('.mobile-bottom-navbar');
        const xlNavbar = document.querySelector('.navbar-menu');
        const resume = xlNavbar.querySelector('#resume')
        const profile = xlNavbar.querySelector('#profile')
        const projo = xlNavbar.querySelector('#projects')
        // const bton = document.querySelector('#contact')
        const briefcaseIcon = mobileNavbar.querySelector('.bx-briefcase-alt');
        const homeIcon = mobileNavbar.querySelector('.bx-home-alt');
        const boxIcon = mobileNavbar.querySelector('.bx-box');


        briefcaseIcon.addEventListener('click', () => {
            clearHeroSection(() => {
                addResumeSection();
            });
        });

        homeIcon.addEventListener('click', () => {
            clearHeroSection(() => {
                addAboutMeSection();
            });
        });

        boxIcon.addEventListener('click', () => {
            clearHeroSection(() => {
                addContactUsSection();
            });
        });



        resume.addEventListener('click', () => {
            clearHeroSection(() => {
                addResumeSection();
            });
        });

        profile.addEventListener('click', () => {
            clearHeroSection(() => {
                addContactUsSection();
            });
        });

        projo.addEventListener('click', () => {
            clearHeroSection(() => {
                addAboutMeSection();
            });
        });
        // bton.addEventListener('click', () => {
        //     clearHeroSection(() => {
        //         addContactUsSection();
        //     });
        // });

        gsap.to('#mouse-down', {
            repeat: -1,
            y: -5,
            duration: .5,
            ease: Power2.out,
            yoyo: true
        })

        function clearHeroSection(callback) {
            const timeline = gsap.timeline({
                onComplete: callback
            });

            timeline.call(removeHeroSection);
        }

        function removeHeroSection() {
            const heroSection = document.querySelector('.hero');
            const projectsContent = document.querySelector('.projects-section');
            const projectsSection = document.querySelector('#root');
            const aboutUs = document.querySelector('.about-section');

            if (heroSection) {
                heroSection.remove();
            }
            if (projectsContent) {
                projectsContent.remove();
            }
            if (projectsSection) {
                projectsSection.remove();
            }
            if (aboutUs) {
                aboutUs.remove();
            }
        }



        // Set up a click event listener for the button
        const exploreBtn = document.getElementById('explore-btn');
        exploreBtn.addEventListener('click', clearScreen);

        const profileBtn = document.getElementById('profile-btn');
        profileBtn.addEventListener('click', clearMobileScreen);

        function clearMobileScreen() {
            console.log("clicked")
            const heroContent = document.querySelector('.name-container');
            heroContent.parentNode.removeChild(heroContent);

            const heroSection = document.querySelector('.hero');
            heroSection.parentNode.removeChild(heroSection);

            const projectsContent = document.querySelector('.projects-section');
            projectsContent.parentNode.removeChild(projectsContent);

            const projectsSection = document.querySelector('#root');
            projectsSection.parentNode.removeChild(projectsSection);

            const aboutUs = document.querySelector('.about-section');
            aboutUs.parentNode.removeChild(aboutUs);

            addResumeSection()

        }
        // Function to animate and clear the screen
        function clearScreen() {
            // Create a GSAP timeline
            const tl = gsap.timeline({
                onComplete: removeElements
            });

            // Add animations to the timeline
            tl.to('.hero-content', {
                    opacity: 0,
                    y: -100,
                    duration: 0.5,
                    ease: 'power2.inOut'
                }, '-=0.3')
                .to('.hero-illustration', {
                    opacity: 0,
                    y: 100,
                    duration: 0.5,
                    ease: 'power2.inOut'
                }, '-=0.3')
                .to('.hero', {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                }, '-=0.3')
                .to('.navbar', {
                    opacity: .8,
                    width: "100%",
                    duration: 0.5,
                    ease: 'power2.inOut',
                    // zIndex: "1000"
                })
                .call(addResumeSection);


            function removeElements() {
                // Remove the elements from the DOM

                const heroContent = document.querySelector('.hero-content');
                heroContent.parentNode.removeChild(heroContent);

                const heroIllustration = document.querySelector('.hero-illustration');
                heroIllustration.parentNode.removeChild(heroIllustration);

                const heroSection = document.querySelector('.hero');
                heroSection.parentNode.removeChild(heroSection);


                const projectsContent = document.querySelector('.projects-section');
                projectsContent.parentNode.removeChild(projectsContent);

                const projectsSection = document.querySelector('#root');
                projectsSection.parentNode.removeChild(projectsSection);

                const aboutUs = document.querySelector('.about-section');
                aboutUs.parentNode.removeChild(aboutUs);
            }

        }
    }


    function addAboutMeSection() {
        const heroSection = document.querySelector('.hero');
        const section = document.createElement('section');
        section.classList.add('about-section');

        const content = document.createElement('div');
        content.classList.add('about-content');

        const backgroundImage = 'url(./about-me/about-bg.png)';
        section.style.backgroundImage = backgroundImage;

        const profileContainer = document.createElement('div');
        profileContainer.classList.add('prof-container');


        const defaultSrc = './profile-picture.png';
        const alternativeSrc = './Projects/profile.png';

        const profilePicture = document.createElement('img');
        profilePicture.alt = 'A closeup of John Francis';
        profilePicture.src = window.innerWidth <= 768 ? alternativeSrc : alternativeSrc;;
        profilePicture.loading = 'lazy';
        profilePicture.classList.add('profile-picture');
        gsap.from(profilePicture, {
            scrollTrigger: {
                trigger: profilePicture,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        profileContainer.appendChild(profilePicture);

        const johnFrancisHeader = document.createElement('h2');
        johnFrancisHeader.textContent = 'John Francis';
        johnFrancisHeader.style.fontFamily = 'EB Garamond';
        johnFrancisHeader.classList.add('catchy-text');
        gsap.from(johnFrancisHeader, {
            scrollTrigger: {
                trigger: johnFrancisHeader,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        profileContainer.appendChild(johnFrancisHeader);

        const catchyText = document.createElement('h4');
        catchyText.textContent = 'Crafting Innovative Web Experiences';
        catchyText.classList.add('catchy-text2');
        gsap.from(catchyText, {
            scrollTrigger: {
                trigger: catchyText,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        profileContainer.appendChild(catchyText);

        content.appendChild(profileContainer);

        const iconElement = document.createElement("i");
        iconElement.className = heroSection ? "back-main" : "bx bx-arrow-back back-main";
        iconElement.addEventListener('click', () => {
            // Create a timeline for the animation
            const tl = gsap.timeline();

            tl.to(profilePicture, {
                    rotation: 45,
                    scale: 1.2,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                })
                .to(catchyText, {
                    y: '-50',
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.6')
                .to(aboutTextContent, {
                    y: '-30',
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.6');

            tl.call(() => {
                section.remove();

                location.reload();
            });
        });

        content.appendChild(iconElement);

        const aboutTextContent = document.createElement('div');
        aboutTextContent.classList.add('about-text-content');

        const tabsWrapper = document.createElement('div');
        tabsWrapper.classList.add('wrapper');

        const tabsContainer = document.createElement('div');
        tabsContainer.classList.add('tabs-container');

        const tabsList = document.createElement('ul');
        tabsList.setAttribute('aria-labelledby', 'tabs-title');
        gsap.from(tabsList, {
            scrollTrigger: {
                trigger: tabsList,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })

        const tab1 = document.createElement('li');
        const tab1Link = document.createElement('a');
        tab1Link.id = 'tab-1';
        tab1Link.href = '#advertising';
        tab1Link.textContent = 'About Me';
        tab1.appendChild(tab1Link);
        tabsList.appendChild(tab1);

        const tab2 = document.createElement('li');
        const tab2Link = document.createElement('a');
        tab2Link.id = 'tab-2';
        tab2Link.href = '#social-media';
        tab2Link.textContent = 'Bio';
        tab2.appendChild(tab2Link);
        tabsList.appendChild(tab2);

        const tab3 = document.createElement('li');
        const tab3Link = document.createElement('a');
        tab3Link.id = 'tab-3';
        tab3Link.href = '#content-marketing';
        tab3Link.textContent = 'Experience';
        tab3.appendChild(tab3Link);
        tabsList.appendChild(tab3);

        tabsContainer.appendChild(tabsList);

        tabsWrapper.appendChild(tabsContainer);

        const tabsPanels = document.createElement('div');
        tabsPanels.classList.add('tabs__panels', 'flow');
        gsap.from(tabsPanels, {
            scrollTrigger: {
                trigger: tabsPanels,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })

        const advertisingPanel = document.createElement('div');
        advertisingPanel.id = 'advertising';
        advertisingPanel.setAttribute('aria-labelledby', 'tab-1');

        const aboutMeSection = document.createElement('div');
        const aboutMeTitle = document.createElement('h2');
        aboutMeTitle.textContent = 'About Me';
        aboutMeSection.appendChild(aboutMeTitle);

        const aboutMeParagraph = document.createElement('p');
        aboutMeParagraph.textContent =
            'Meet John Francis, an experienced Web developer specializing in modern web applications and code projects. With a background in sales, marketing, UI design, SEO, and web frameworks, John brings a mindful and competitive approach to web development.';
        aboutMeSection.appendChild(aboutMeParagraph);

        const contactParagraph = document.createElement('p');
        contactParagraph.textContent = 'Explore the possibilities with John by reaching out below.';
        aboutMeSection.appendChild(contactParagraph);

        advertisingPanel.appendChild(aboutMeSection);
        tabsPanels.appendChild(advertisingPanel);

        const experiencePanel = document.createElement('div');
        experiencePanel.id = 'social-media';
        experiencePanel.setAttribute('aria-labelledby', 'tab-2');

        const bioPanel = document.createElement('div');
        const bioTitle = document.createElement('h2');
        bioTitle.textContent = 'Bio';
        bioPanel.appendChild(bioTitle);

        const bioContent = document.createElement('div');

        const nameDiv = document.createElement('div');
        const nameTitle = document.createElement('h2');
        nameTitle.textContent = 'Name:';
        const nameText = document.createElement('p');
        nameText.textContent = 'John Francis';
        nameDiv.appendChild(nameTitle);
        nameDiv.appendChild(nameText);
        bioContent.appendChild(nameDiv);

        const occupationDiv = document.createElement('div');
        const occupationTitle = document.createElement('h2');
        occupationTitle.textContent = 'Occupation:';
        const occupationText = document.createElement('p');
        occupationText.textContent = 'Front-End Developer';
        occupationDiv.appendChild(occupationTitle);
        occupationDiv.appendChild(occupationText);
        bioContent.appendChild(occupationDiv);

        const ageDiv = document.createElement('div');
        const ageTitle = document.createElement('h2');
        ageTitle.textContent = 'Hobbies:';
        const ageText = document.createElement('p');
        ageText.textContent = 'Music, Gaming, Design';
        ageDiv.appendChild(ageTitle);
        ageDiv.appendChild(ageText);
        bioContent.appendChild(ageDiv);

        bioPanel.appendChild(bioContent);
        experiencePanel.appendChild(bioPanel);
        tabsPanels.appendChild(advertisingPanel);

        tabsPanels.appendChild(experiencePanel);

        const reviewsPanel = document.createElement('div');
        reviewsPanel.id = 'content-marketing';
        reviewsPanel.setAttribute('aria-labelledby', 'tab-3');

        const expPanel = document.createElement('div');

        const experienceTitle = document.createElement('h2');
        experienceTitle.textContent = 'Experience';
        expPanel.appendChild(experienceTitle);


        const experienceList = document.createElement('ul');
        experienceList.innerHTML = `
            <li class="experience-item">
                <p class="experiences-title">Front End<span class="experiences-span">@tripplesee | 2022</span></p>
            </li>
            <li class="experience-item">
                <p class="experiences-title">Consultant <span class="experiences-span">@Ilepa | 2023</span></p>
            </li>
            <li class="experience-item">
                <p class="experiences-title">Data Visualizations<span class="experiences-span">@Itech | 2024</span></p>
            </li>
        `;
        expPanel.appendChild(experienceList)
        reviewsPanel.appendChild(expPanel);

        const reviewsTitle = document.createElement('div');
        reviewsTitle.textContent = 'Reviews';
        reviewsPanel.appendChild(reviewsTitle);

        tabsPanels.appendChild(reviewsPanel);

        tabsContainer.appendChild(tabsPanels);
        tabsWrapper.appendChild(tabsContainer);
        aboutTextContent.appendChild(tabsWrapper)

        const tabButtons = tabsList.querySelectorAll("a");
        const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");
        tabsList.setAttribute("role", "tablist");

        tabsList.querySelectorAll("li").forEach((listitem) => {
            listitem.setAttribute("role", "presentation");
        });

        tabButtons.forEach((tab, index) => {
            tab.setAttribute("role", "tab");
            if (index === 0) {
                tab.setAttribute("aria-selected", "true");
                // we'll add something here
            } else {
                tab.setAttribute("tabindex", "-1");
                tabPanels[index].setAttribute("hidden", "");
            }
        });

        tabPanels.forEach((panel) => {
            panel.setAttribute("role", "tabpanel");
            panel.setAttribute("tabindex", "0");
        });

        tabsContainer.addEventListener("click", (e) => {
            const clickedTab = e.target.closest("a");
            if (!clickedTab) return;
            e.preventDefault();

            switchTab(clickedTab);
        });

        tabsContainer.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    moveLeft();
                    break;
                case "ArrowRight":
                    moveRight();
                    break;
                case "Home":
                    e.preventDefault();
                    switchTab(tabButtons[0]);
                    break;
                case "End":
                    e.preventDefault();
                    switchTab(tabButtons[tabButtons.length - 1]);
                    break;
            }
        });

        function moveLeft() {
            const currentTab = document.activeElement;
            if (!currentTab.parentElement.previousElementSibling) {
                switchTab(tabButtons[tabButtons.length - 1]);
            } else {
                switchTab(
                    currentTab.parentElement.previousElementSibling.querySelector("a")
                );
            }
        }

        function moveRight() {
            const currentTab = document.activeElement;
            if (!currentTab.parentElement.nextElementSibling) {
                switchTab(tabButtons[0]);
            } else {
                switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
            }
        }

        function switchTab(newTab) {
            const activePanelId = newTab.getAttribute("href");
            const activePanel = tabsContainer.querySelector(activePanelId);

            tabButtons.forEach((button) => {
                button.setAttribute("aria-selected", false);
                button.setAttribute("tabindex", "-1");
            });

            tabPanels.forEach((panel) => {
                panel.setAttribute("hidden", true);
            });

            activePanel.removeAttribute("hidden", false);

            newTab.setAttribute("aria-selected", true);
            newTab.setAttribute("tabindex", "0");
            newTab.focus();
        }

        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video-div');
        gsap.from(videoDiv, {
            scrollTrigger: {
                trigger: videoDiv,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })

        // Video Element
        const videoElement = document.createElement('video');
        videoElement.setAttribute('autoplay', 'true');
        videoElement.setAttribute('muted', 'true');
        videoElement.setAttribute('loop', 'true');
        videoElement.setAttribute('playsinline', 'true');
        videoElement.setAttribute('preload', 'true');
        videoElement.setAttribute('poster', './about-me/orange-bg.png');
        videoElement.classList.add('fullscreen-video');

        // Source Element within Video
        const videoSource = document.createElement('source');
        videoSource.setAttribute('src', './vid-1.mp4');
        videoSource.setAttribute('type', 'video/mp4');

        // Browser Compatibility Message
        const videoFallbackText = document.createElement('p');
        videoFallbackText.textContent = 'Your browser does not support this video file.';

        // const overlay = document.createElement('div');
        // overlay.classList.add('overlay');
        // overlay.innerHTML = `<img src="./icons/play.svg" alt="Play Icon" class="play">`

        // Appending elements
        videoElement.appendChild(videoSource);
        videoElement.appendChild(videoFallbackText);
        videoDiv.appendChild(videoElement);
        // videoDiv.appendChild(overlay);
        aboutTextContent.appendChild(videoDiv);

        document.addEventListener('click', () => {
            videoElement.play().catch(error => {
                console.error('Autoplay failed:', error);
            });

            // overlay.style.display = 'none';
        });

        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('phone-div');
        phoneDiv.addEventListener('click', clearAboutSection);
        gsap.from(phoneDiv, {
            scrollTrigger: {
                trigger: phoneDiv,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })


        const phoneIcon = document.createElement('img');
        phoneIcon.setAttribute('src', './about-me/bxs-phone-call.svg');
        phoneIcon.setAttribute('alt', 'Phone Icon');
        phoneIcon.setAttribute('title', 'Contact Me');
        phoneDiv.appendChild(phoneIcon);

        aboutTextContent.appendChild(phoneDiv);

        const customizationDiv = document.createElement('div');
        customizationDiv.classList.add('customization-div');
        gsap.from(customizationDiv, {
            scrollTrigger: {
                trigger: customizationDiv,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })

        const customizationImage = document.createElement('img');
        customizationImage.setAttribute('src', './about-me/Hobby1.png');
        customizationImage.setAttribute('alt', 'Customization Image');

        customizationDiv.appendChild(customizationImage);

        aboutTextContent.appendChild(customizationDiv);

        content.appendChild(aboutTextContent);

        section.appendChild(content);
        switchTab(tabButtons[1]);

        function addInfiniteAnimation() {
            const firstInactiveTab = tabsList.querySelector('[role="tab"]:not([aria-selected="true"]');
            if (firstInactiveTab) {
                firstInactiveTab.classList.add('infiniteAnimation');
            }
        }

        // Add a click event listener to tabsContainer
        tabsContainer.addEventListener("click", (e) => {
            const clickedTab = e.target.closest("a");
            if (!clickedTab) return;
            e.preventDefault();

            switchTab(clickedTab);

            // Remove the animation class from all tabs
            tabsList.querySelectorAll('[role="tab"]').forEach(tab => {
                tab.classList.remove('infiniteAnimation');
            });

            // Add the infinite animation class to the first inactive tab
            addInfiniteAnimation();
        });

        // Call the function on page load to initialize the animation
        addInfiniteAnimation();
        document.body.appendChild(section);

        function clearAboutSection() {
            const timeline = gsap.timeline();



            // Select the "About Us" section element
            const aboutSection = section
            const heroSection = document.querySelector('.hero');
            const projectsContent = document.querySelector('.projects-section');
            const projectsSection = document.querySelector('#root');
            console.log("clicked")

            if (heroSection) {
                heroSection.remove();
            }
            if (projectsContent) {
                projectsContent.remove();
            }
            if (projectsSection) {
                projectsSection.remove();
            }
            aboutSection.remove();
            addContactUsSection();
        }
    }

    function addProjectsSection() {
        const projectsData = [{
                id: 1,
                title: "Project Tripplesee",
                tags: ["#business", "#webapp", "#marketing"],
                url: "https://github.com/jonnfrancis/tripplesee-ltd"
            },
            {
                id: 2,
                title: "Project Portfolio",
                tags: ["#webdev", "#personal"],
                url: "https://github.com/jonnfrancis/jonnfrancis.github.io/"
            },
            {
                id: 3,
                title: "Project Data",
                tags: ["#2024", "#data", "#visualization"],
            },
            {
                id: 4,
                title: "Project ViteVocab",
                tags: ["#2023", "#vocabulary", "#learn"],
                url: "https://www.johnfrancis.dev/VocabBoost/"
            },
            {
                id: 5,
                title: "Project Movie",
                tags: ["#movies", "#landingpage", "#series"],
                url: "https://movie.johnfrancis.dev/"
            },
            {
                id: 6,
                title: "Project Dashboard",
                tags: ["#data", "#analytics", "#datascience"],
            }
            // {
            //     id: 7,
            //     title: "All Projects",
            //     tags: ["#modern", "#ui", "#web"]
            // }
        ]





        // Create the root container element
        const rootContainer = document.createElement('div');
        rootContainer.id = 'root';

        const section = document.createElement('section');
        section.classList.add('projects-section');

        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('projects-container');


        // Create the title element
        const header = document.createElement('h1');
        header.textContent = 'Projects';
        header.classList.add('projects-header');
        gsap.from(header, {
            scrollTrigger: {
                trigger: section,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        projectsContainer.appendChild(header);

        const projectText = document.createElement('div');
        projectText.classList.add('projects-text');

        const projectsP = document.createElement('p');
        projectsP.textContent = 'Innovate. Inspire. Impress.';
        projectsP.classList.add('projects-P');
        gsap.from(projectsP, {
            scrollTrigger: {
                trigger: projectsP,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        projectText.appendChild(projectsP);

        const title = document.createElement('h2');
        title.textContent = 'Innovations Gallery -  My Web  Projects';
        title.classList.add('projects-title');
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        projectText.appendChild(title);

        const paragraph = document.createElement('p');
        paragraph.textContent = 'Find my best projects below!';
        paragraph.classList.add('projects-paragraph');
        gsap.from(paragraph, {
            scrollTrigger: {
                trigger: paragraph,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        projectText.appendChild(paragraph);

        const link = document.createElement('div');
        link.textContent = 'Visit my resumè';
        link.addEventListener('click', function () {
            removeProjectsSection();
            addResumeSection();
        });
        link.classList.add('projects-link');
        gsap.from(link, {
            scrollTrigger: {
                trigger: link,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        projectText.appendChild(link);

        projectsContainer.appendChild(projectText);

        section.appendChild(projectsContainer);

        const socialMediaDiv = document.createElement('div');
        socialMediaDiv.classList.add('contact-social-media');

        const linkedInLink = createSocialMediaLink('Linkedin', 'https://linkedin.com/in/john-francis-732259211', 'bx bxl-linkedin');
        gsap.from(linkedInLink, {
            scrollTrigger: {
                trigger: linkedInLink,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })
        socialMediaDiv.appendChild(linkedInLink);

        const twitterLink = createSocialMediaLink('Twitter', 'https://github.com/jonnfrancis', 'bx bxl-github');
        gsap.from(twitterLink, {
            scrollTrigger: {
                trigger: twitterLink,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })

        socialMediaDiv.appendChild(twitterLink);

        const instagramLink = createSocialMediaLink('Instagram', 'https://instagram.com/johnfrancis.dev', 'bx bxl-instagram');
        gsap.from(instagramLink, {
            scrollTrigger: {
                trigger: instagramLink,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })

        socialMediaDiv.appendChild(instagramLink);

        section.appendChild(socialMediaDiv);

        const scrollDown = document.createElement('div');
        scrollDown.textContent = "Keep Scrolling"
        scrollDown.classList.add('scroll-down');

        const arrow = document.createElement('div');
        arrow.classList.add('arrow')
        arrow.classList.add('bx')
        arrow.classList.add('bxs-chevron-down')

        scrollDown.appendChild(arrow);
        section.appendChild(scrollDown);

        gsap.to(arrow, {
            repeat: -1,
            duration: .75,
            yoyo: true,
            y: 0,
            ease: Power2.out
        })

        // Create the projects section element
        const lineSection = document.createElement('div');
        lineSection.classList.add('line-section');

        const line1 = document.createElement('div');
        line1.classList.add('line');

        lineSection.appendChild(line1);

        const line2 = document.createElement('div');
        line2.classList.add('line');

        lineSection.appendChild(line2);

        const line3 = document.createElement('div');
        line3.classList.add('line');

        lineSection.appendChild(line3);

        section.appendChild(lineSection);



        // Create the container for project cards
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('project-cards-container');
        section.appendChild(cardContainer);


        // Create the projects cards dynamically
        projectsData.forEach((project) => {
            const card = document.createElement("div");
            card.classList.add("project-cardd")

            const cardImage = document.createElement("div");
            cardImage.classList.add("project-card");
            // Set the background image
            cardImage.style.backgroundImage = `url('./Projects/${project.id}.png')`;

            // Create the card text elements
            const cardSubtitle = document.createElement("div");
            cardSubtitle.classList.add("card-subtitle");

            const cardNumber = document.createElement("div");
            cardNumber.classList.add("card-number");
            cardNumber.textContent = project.id;
            cardSubtitle.appendChild(cardNumber);

            const cardTags = document.createElement("div");
            cardTags.classList.add("card-tags");
            project.tags.slice(0, 3).forEach((tag) => {
                const tagElement = document.createElement("span");
                tagElement.textContent = tag;
                cardTags.appendChild(tagElement);
            });
            cardSubtitle.appendChild(cardTags);

            const cardTitle = document.createElement("div");
            cardTitle.classList.add("card-title");
            cardTitle.innerHTML = `<a href=${project.url} ><span class="title-text">${project.title}</span></a>`;

            // Append the card text elements to the card
            cardImage.appendChild(cardSubtitle);
            cardImage.appendChild(cardTitle);

            const cardLink = document.createElement("a");
            cardLink.classList.add('card-link');
            cardLink.innerHTML = `Project Details <img src="./icons/Arrow.svg" class="project-arrow" alt="Arrow icon" style="vertical-align: middle; display: inline;">`
            cardLink.href = project.url
            cardLink.style.display = project.url ? "block" : "none"
            card.appendChild(cardLink)

            card.appendChild(cardImage)

            // Append the card to the projects container
            cardContainer.appendChild(card);

        });

        const ctaButton1 = document.createElement('a');
        ctaButton1.href = "https://github.com/jonnfrancis?tab=repositories";
        ctaButton1.textContent = 'All Projects';
        ctaButton1.setAttribute('title', 'Visit my Github Repositories');
        ctaButton1.target = '_blank';
        ctaButton1.classList.add('cta-button', 'projects-btn');
        section.appendChild(ctaButton1);

        const ctaButton = document.createElement('a');
        ctaButton.addEventListener('click', function () {
            removeProjectsSection();
            addContactUsSection();
        });
        ctaButton.textContent = 'Contact Me';
        ctaButton.setAttribute('title', 'Contact Me');
        ctaButton.classList.add('cta-button', 'contact-btn');
        section.appendChild(ctaButton);

        rootContainer.appendChild(section);

        document.body.appendChild(rootContainer);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })

        lenis.on('scroll', (e) => {
            // console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        if (window.innerWidth >= 780) {
            gsap.timeline({
                    scrollTrigger: {
                        trigger: '.project-card',
                        scrub: true,
                    }
                })
                .to('.project-card', {
                    stagger: .2,
                    y: -500
                })
                .to('.card-link', {
                    stagger: .2,
                    y: -500
                }, 0)

            gsap.set('.projects-container', {
                opacity: 0,
                y: 100
            });
            gsap.set('.projects-title, .projects-text, .projects-paragraph, .projects-link, .scroll-down', {
                opacity: 0,
                y: 50
            });

            gsap.to('.projects-container', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out'
            });
            gsap.to('.projects-title', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power2.out'
            });
            gsap.to('.projects-text', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: 'power2.out'
            });
            gsap.to('.projects-paragraph', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1.5,
                ease: 'power2.out'
            });
            gsap.to('.projects-link', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 2,
                ease: 'power2.out'
            });
            gsap.to('.scroll-down', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 2.5,
                ease: 'power2.out'
            });

        }



        function removeProjectsSection() {
            const heroSection = document.querySelector('.hero');
            const projectsContent = document.querySelector('.projects-section');
            const projectsSection = document.querySelector('#root');
            const aboutUs = document.querySelector('.about-section');


            gsap.timeline()
                .to(projectsSection, {
                    rotationX: -90,
                    opacity: 0,
                    duration: 0.1,
                    onComplete: removeSection
                });

            function removeSection() {
                rootContainer.remove();

                if (heroSection) {
                    heroSection.remove();
                }
                if (projectsContent) {
                    projectsContent.remove();
                }
                if (projectsSection) {
                    projectsSection.remove();
                }
                if (aboutUs) {
                    aboutUs.remove();
                }
            }

        }


    }

    function addResumeSection() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        gsap.timeline()
            .to(".logo", {
                autoAlpha: 0,
                y: -20,
                duration: 0.25,
                ease: "power2.in",
            })
            .to(".navbar", {
                autoAlpha: 0,
                y: -20,
                duration: 0.25,
                ease: "power2.in",
            })
            .set(".resume-section", {
                opacity: 0,
                display: "grid",
            })
            .to(".resume-section", {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            })
            .from(".resume-section", {
                y: -20,
                duration: 0.5,
                ease: "power2.out",
            });

        const resumeSection = document.createElement("section");
        resumeSection.classList.add("resume-section");

        const main = document.createElement("main");

        const eyebrow = document.createElement("p");
        eyebrow.classList.add("eyebrow");
        eyebrow.textContent = "Skills and Experience";
        main.appendChild(eyebrow);

        gsap.from(eyebrow, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
        });

        const pageTitle = document.createElement("h1");
        pageTitle.classList.add("page-title");
        pageTitle.textContent = "My Resumè";
        main.appendChild(pageTitle);

        gsap.from(pageTitle, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out",
        });

        const intro = document.createElement("p");
        intro.classList.add("intro");
        intro.innerHTML = `I embarked on my journey with short courses and youtube tutorials in 2020, progressively advancing to complete three courses from Harvard University.<hr>In 2021, I proudly earned a professional credential as a proficient web developer from Harvard University, specializing in Python and JavaScript. This comprehensive course delved into full-stack web development, best web practices, web testing, and web security, all through real-world projects.  In 2024, I achieved another milestone by obtaining a certification in Artificial Intelligence from Harvard University. This program enriched my knowledge and skills in LLMs, neural networks, machine learning, and the development of game AIs.<hr>Currently my expertise extends to designing modern web projects and applications, Website Optimizations, Backend Engineering and Database Management.`;
        main.appendChild(intro);

        gsap.from(intro, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: 0.6,
            ease: "power2.out",
        });

        const jobExperience = document.createElement("div");
        jobExperience.classList.add("job-experience");

        const jobHeader = document.createElement("h3");
        jobHeader.classList.add("page-subtitle");
        jobHeader.textContent = "Skills & Education";
        jobExperience.appendChild(jobHeader);


        const jobsData = [{
                year: "2024",
                certificate: "Interactive UI/UX",
                institution: "DesignCourse",
                info: "In this course, led by Gary Simon, I am learning the essentials and advanced techniques of UI and motion design.",
            },{
                year: "2024",
                certificate: "CS for AI",
                institution: "Harvard",
                info: "This course explores the concepts and algorithms at the foundation of modern artificial intelligence with python.",
                credential: "https://credentials.edx.org/credentials/e49fece8ecf24d0ea5c00a12890d4b4f/"
            },
            {
                year: "2022",
                certificate: "React",
                institution: "Scrimba",
                info: "A hands-on course that teaches the fundamentals of React Js, its usage, and building UI.",
            },
            {
                year: "2021",
                certificate: "Web Programming",
                institution: "Harvard",
                info: "A comprehensive course on web programming, covering Python and JavaScript.",
                credential: "https://credentials.edx.org/credentials/77a6a4ad9c1e46e8ae2d9225788b91eb/"
            },
            {
                year: "2020",
                certificate: "Introduction to CS",
                institution: "Harvard",
                info: "An introductory course providing an overview of computer science concepts and principles.",
                credential: "https://courses.edx.org/certificates/f2b836da46574f27815560d09ec90416"
            },
        ];

        jobsData.forEach((jobData, index) => {
            const job = document.createElement("div");
            job.classList.add("job");
            job.style.opacity = 0;

            const year = document.createElement("p");
            year.classList.add("year");
            year.textContent = jobData.year;
            job.appendChild(year);

            const jobInfo = document.createElement("div");
            jobInfo.classList.add("job-info");

            const role = document.createElement("h2");
            role.classList.add("role");
            role.textContent = jobData.certificate;

            const company = document.createElement("span");
            company.classList.add("company");
            company.textContent = jobData.institution;
            jobInfo.appendChild(role);
            jobInfo.appendChild(company);

            const infoParagraph = document.createElement("p");
            infoParagraph.classList.add("info-paragraph");
            infoParagraph.textContent = jobData.info;

            const credential = document.createElement("a");
            credential.classList.add("credential-link");
            credential.href = jobData.credential;
            credential.innerHTML = `View My Credentials <i class='bx bx-right-top-arrow-circle credential-icon'></i>`;
            credential.style.display = jobData.credential ? "block" : "none";


            job.appendChild(jobInfo);
            job.appendChild(infoParagraph);
            job.appendChild(credential)
            jobExperience.appendChild(job);

            gsap.to(job, {
                opacity: 1,
                duration: 0.5,
                delay: 0.2 * index,
                ease: "power2.out",
            });
        });

        const iconElement = document.createElement("i");
        iconElement.className = "bx bxs-right-arrow-alt scroll-side";
        jobExperience.appendChild(iconElement);

        main.appendChild(jobExperience);

        const aside = document.createElement("aside");

        const iconList = document.createElement("ul");
        iconList.classList.add("icon-list");

        const iconsData = [{
                imgSrc: "./icons/html.svg",
                text: "html",
            },
            {
                imgSrc: "./icons/css.svg",
                text: "css",
            },
            {
                imgSrc: "./icons/js.svg",
                text: "javascript",
            },
            {
                imgSrc: "./icons/react.svg",
                text: "react",
            },
            {
                imgSrc: "./icons/tailwind.svg",
                text: "tailwind",
            },
            {
                imgSrc: "./icons/postgresql.svg",
                text: "postgresql",
            },
            {
                imgSrc: "./icons/python.svg",
                text: "python",
            },
            {
                imgSrc: "./icons/nodejs.svg",
                text: "nodejs",
            },
        ];

        iconsData.forEach((iconData, index) => {
            const listItem = document.createElement("li");
            const hiddenText = document.createElement("p");
            hiddenText.classList.add("visually-hidden");
            hiddenText.textContent = iconData.text;

            const iconImg = document.createElement("img");
            iconImg.src = iconData.imgSrc;
            iconImg.alt = "John Francis - Web Developer and UI Designer | icon"

            listItem.appendChild(hiddenText);
            listItem.appendChild(iconImg);
            iconList.appendChild(listItem);

            gsap.fromTo(
                listItem, {
                    opacity: 0,
                    y: 20,
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.15 * index,
                    ease: "power2.out",
                }
            );
        });

        aside.appendChild(iconList);

        if (window.innerWidth <= 640) {
            const iconElement2 = document.createElement("i");
            iconElement2.className = "bx bxs-right-arrow-alt scroll-side";
            aside.appendChild(iconElement2);
        }


        const backButton = document.createElement("div");
        backButton.classList.add("back-button");
        backButton.innerHTML = '<i class="bx bx-left-arrow-alt icon"></i>';
        backButton.addEventListener("click", () => {
            removeResumeSection();
        });

        // Create the GSAP animation for the back arrow icon
        gsap.to(backButton.querySelector(".icon"), {
            x: -10,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power1.inOut",
        });
        resumeSection.appendChild(backButton);
        resumeSection.appendChild(main);
        resumeSection.appendChild(aside);

        document.body.appendChild(resumeSection);

        function removeResumeSection() {
            const tl = gsap.timeline({});

            tl.to(".navbar", {
                    width: "100%",
                    borderRadius: "0",
                    y: 20,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                })
                .to(".navbar", {
                    right: "auto",
                    duration: 0.5,
                    ease: "power2.out",
                })
                .to("main, aside", {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: "power2.out",
                })
                .to(".resume-section", {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        resumeSection.remove();
                        location.replace(location.href);
                    },
                });



        }

    }


    function addContactUsSection() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        gsap.timeline().to('.navbar', {
            y: '-50',
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out'
        });
        const section = document.createElement('section');
        section.classList.add('contact-us-section');

        const container = document.createElement('div');
        container.classList.add('contact-container');

        const backButton = document.createElement("div");
        backButton.classList.add("back-button");
        backButton.innerHTML = '<i class="bx bx-left-arrow-alt icon"></i>';
        backButton.addEventListener('click', () => {
            location.replace(location.href);
        });
        container.appendChild(backButton);

        // Create the GSAP animation for the back arrow icon
        gsap.to(backButton.querySelector(".icon"), {
            x: -10,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power1.inOut",
        });

        // Div for title and p
        const titleWrapper = document.createElement('div');
        titleWrapper.classList.add('title-wrapper');

        const title = document.createElement('h2');
        title.textContent = 'Contacts';
        title.classList.add('contact-title');
        titleWrapper.appendChild(title);

        const subtitle = document.createElement('p');
        subtitle.textContent = 'Want to create something amazing together? Just book a meeting!';
        subtitle.classList.add('contact-subtitle');
        titleWrapper.appendChild(subtitle);

        container.appendChild(titleWrapper);

        // Feedback Section
        const feedbackSection = document.createElement('div');
        feedbackSection.classList.add('contact-feedback');

        const lottieWrapper = document.createElement('div');
        lottieWrapper.classList.add('lottie-wrapper');
        lottieWrapper.style.width = '350px';
        lottieWrapper.style.height = '350px';
        lottieWrapper.style.margin = 'auto';
        feedbackSection.appendChild(lottieWrapper);

        // Load Lottie animation
        const lottieAnimation = lottie.loadAnimation({
            container: lottieWrapper,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: './Projects/vid-call.json'
        });

        const calendly = document.createElement('div');

        // Set the class attribute
        calendly.className = 'calendly-inline-widget';

        // Set the data-url attribute
        calendly.setAttribute('data-url', 'https://calendly.com/johnfrancis3431/conferencecall?hide_gdpr_banner=1&background_color=1d2549&text_color=ffffff&primary_color=08d463');
        calendly.setAttribute('data-resize', 'true');

        // Set the style attributes
        calendly.style.minWidth = '320px';
        calendly.style.height = '700px';
        calendly.style.visibility = 'hidden';

        Calendly.initInlineWidget({
            url: 'https://calendly.com/johnfrancis3431/conferencecall?hide_gdpr_banner=1&background_color=1d2549&text_color=ffffff&primary_color=08d463',
            parentElement: calendly,
            resize: true,
            prefill: {},
            utm: {},
           });
        
           setTimeout(() => {
            lottieAnimation.destroy();
        
            gsap.timeline()
            .to(lottieWrapper, {
                autoAlpha: 0.6,
                rotation: 50,
                duration: 0.7,
                ease: 'power2.inOut',
                duration: 0.5,
                scale: 0.8,
            })
            .to(lottieWrapper, {
                autoAlpha: 0,
                rotation: 100,
                duration: 0.5,
                onComplete: () => {
                    lottieWrapper.remove(); 
                   
                    gsap.to(calendly, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: 'power4.out'
                    });
                }
            });
        }, 4000);

        feedbackSection.appendChild(calendly)

        container.appendChild(feedbackSection);

        section.appendChild(container);

        document.body.appendChild(section);
    }


    // Helper function to create contact info items
    function createContactInfoItem(labelText, valueText, iconClass) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('contact-info-item');

        const icon = document.createElement('i');
        icon.classList.add(...iconClass.split(" "));

        const label = document.createElement('p');
        label.textContent = labelText;
        label.classList.add('label')

        const value = document.createElement('p');
        value.textContent = valueText;

        itemDiv.appendChild(icon);
        itemDiv.appendChild(label);
        itemDiv.appendChild(value);

        return itemDiv;
    }

    // Helper function to create social media links
    function createSocialMediaLink(labelText, url, iconClass) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';

        const icon = document.createElement('i');
        icon.classList.add(...iconClass.split(" "));

        const label = document.createElement('p');
        label.textContent = labelText;
        label.classList.add('label')

        link.appendChild(icon);
        link.appendChild(label);

        return link;
    }

    // Helper function to create feedback inputs
    function createFeedbackInput(labelText, type, id, placeholder) {
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('contact-feedback-input');

        const label = document.createElement('label');
        label.textContent = labelText;
        label.setAttribute('for', id);

        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('id', id);
        input.setAttribute('placeholder', placeholder);

        inputDiv.appendChild(label);
        inputDiv.appendChild(input);

        return inputDiv;
    }