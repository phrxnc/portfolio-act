function portfolioApp() {
    return {
    showTop: false,
    backTopButton: null,
    backTopVisibleState: false,
    activeSection: "home",
    activeTab: "all",
    navItems: [
        { id: "home", label: "Home", icon: "fa-solid fa-house" },
        { id: "projects", label: "Projects", icon: "fa-regular fa-folder-open" },
        { id: "about", label: "About Me", icon: "fa-solid fa-user" },
        { id: "skills", label: "Skills & Tech", icon: "fa-solid fa-wrench" },
        { id: "contact", label: "Contact", icon: "fa-regular fa-envelope" }
    ],
    skills: [
        { name: "HTML5", type: "frontend", icon: "bx bxl-html5", color: "text-orange-500" },
        { name: "CSS3", type: "frontend", icon: "bx bxl-css3", color: "text-blue-500" },
        { name: "JavaScript", type: "frontend", icon: "bx bxl-javascript", color: "text-yellow-500" },
        { name: "Tailwind", type: "frontend", icon: "bx bxl-tailwind-css", color: "text-cyan-500" },
        { name: "Python", type: "backend", icon: "bx bxl-python", color: "text-yellow-400" },
        { name: "Django", type: "backend", icon: "bx bxl-django", color: "text-green-500" },
        { name: "PHP", type: "backend", icon: "bx bxl-php", color: "text-indigo-400" },
        { name: "Laravel", type: "backend", icon: "bx bxl-php", color: "text-red-400" },
        { name: "MySQL", type: "tools", icon: "bx bxs-data", color: "text-sky-400" },
        { name: "Git", type: "tools", icon: "bx bxl-git", color: "text-orange-500" },
        { name: "ChatGPT", type: "tools", icon: "fa-brands fa-openai", color: "text-black-400" },
        { name: "Claude", type: "tools", icon: "fa-solid fa-robot", color: "text-orange-400" }
    ],
    projects: [
        {
        title: "ReviewAI",
        description: "A machine learning web system that detects and flags fake product reviews across global e-commerce platforms.",
        tech: ["Django", "Python", "Tailwind", "MySQL"],
        image: "static/images/reviewai.png",
        url: "https://github.com/JEJ07/2025-CP_ReviewAI",
        previewBg: "bg-gradient-to-br from-brand-green/30 to-emerald-500/20"
        },
        {
        title: "3DMags",
        description: "A company website and appointment system for a firm that offers architectural and engineering services.",
        tech: ["Laravel", "Tailwind", "MySQL"],
        image: "static/images/3dmags.png",
        url: "https://github.com/phrxnc/3DMags",
        previewBg: "bg-gradient-to-br from-emerald-500/20 to-green-500/20"
        },
        {
        title: "EduSolve",
        description: "An educational app that provides lessons and tests for high school students.",
        tech: ["PHP", "MySQL", "CSS"],
        image: "static/images/edusolve.png",
        url: "https://github.com/phrxnc/EduSolve",
        previewBg: "bg-gradient-to-br from-lime-500/20 to-emerald-500/20"
        }
    ],
    init() {
        this.onScroll();
        if (window.innerWidth < 768) {
        document.querySelectorAll('[data-aos="fade-left"], [data-aos="fade-right"]').forEach((el) => {
            el.setAttribute("data-aos", "fade-up");
        });
        }
        AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 80
        });

        this.initCustomCursor();
        this.initBackToTopAnimations();
    },
    scrollTo(id) {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    },
    onScroll() {
        this.showTop = window.scrollY > 300;
        this.syncBackToTopState();

        const sections = document.querySelectorAll("section[id]");
        const marker = window.scrollY + 180;
        let current = this.activeSection || "home";

        sections.forEach((section) => {
        if (marker >= section.offsetTop) {
            current = section.id;
        }
        });

        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
            current = lastSection.id;
        }
        }

        this.activeSection = current;
    },

    initBackToTopAnimations() {
        this.backTopButton = document.querySelector('button[aria-label="Back to top"]');
        if (!this.backTopButton) {
        return;
        }

        this.backTopButton.classList.add("back-top-btn");
        this.syncBackToTopState();

        // Use rAF + easing for smoother top scroll than native linear smooth behavior.
        this.backTopButton.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.scrollToTopEased();
        },
        true
        );
    },

    syncBackToTopState() {
        if (!this.backTopButton) {
        return;
        }

        const shouldShow = window.scrollY > 300;
        this.showTop = shouldShow;

        if (shouldShow === this.backTopVisibleState) {
        return;
        }

        this.backTopVisibleState = shouldShow;
        this.backTopButton.classList.toggle("is-visible", shouldShow);

        if (shouldShow) {
        this.backTopButton.classList.remove("back-top-attention");
        requestAnimationFrame(() => {
            this.backTopButton.classList.add("back-top-attention");
        });
        }
    },

    scrollToTopEased(duration = 650) {
        const startY = window.scrollY;
        if (startY <= 0) {
        return;
        }

        const startTime = performance.now();
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const nextY = startY * (1 - eased);

        window.scrollTo(0, nextY);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
        };

        requestAnimationFrame(step);
    },

    initCustomCursor() {
        // Keep the native cursor for touch-first devices.
        const isTouchDevice =
        window.matchMedia("(hover: none), (pointer: coarse)").matches ||
        navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
        return;
        }

        const dot = document.getElementById("cursor-dot");
        const ring = document.getElementById("cursor-ring");
        const glow = document.getElementById("cursor-glow");

        if (!dot || !ring || !glow) {
        return;
        }

        document.documentElement.classList.add("custom-cursor-enabled");

        const state = {
        targetX: window.innerWidth / 2,
        targetY: window.innerHeight / 2,
        ringX: window.innerWidth / 2,
        ringY: window.innerHeight / 2,
        glowX: window.innerWidth / 2,
        glowY: window.innerHeight / 2,
        dotScale: 1,
        dotScaleTarget: 1,
        ringScale: 1,
        ringScaleTarget: 1,
        glowScale: 1,
        glowScaleTarget: 1,
        visible: false,
        prevRingX: window.innerWidth / 2,
        prevRingY: window.innerHeight / 2
        };

        const ease = (from, to, speed) => from + (to - from) * speed;

        const interactiveSelector = [
        "a",
        "button",
        "[role='button']",
        "input",
        "textarea",
        "select",
        "label",
        "summary"
        ].join(",");

        const interactiveElements = document.querySelectorAll(interactiveSelector);
        interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            state.dotScaleTarget = 1.7;
            state.ringScaleTarget = 1.35;
            state.glowScaleTarget = 1.2;
        });

        element.addEventListener("mouseleave", () => {
            state.dotScaleTarget = 1;
            state.ringScaleTarget = 1;
            state.glowScaleTarget = 1;
        });
        });

        // Magnetic hover is opt-in via data-magnetic for better control.
        const magneticElements = document.querySelectorAll("[data-magnetic]");
        magneticElements.forEach((element) => {
        element.addEventListener("mousemove", (event) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;

            const strength = parseFloat(element.dataset.magneticStrength || "0.18");
            const maxOffset = parseFloat(element.dataset.magneticOffset || "14");

            const offsetX = Math.max(Math.min(deltaX * strength, maxOffset), -maxOffset);
            const offsetY = Math.max(Math.min(deltaY * strength, maxOffset), -maxOffset);

            element.style.setProperty("--mx", `${offsetX.toFixed(2)}px`);
            element.style.setProperty("--my", `${offsetY.toFixed(2)}px`);

            // Nudge cursor target toward the magnetic element center.
            state.targetX += (centerX - state.targetX) * 0.035;
            state.targetY += (centerY - state.targetY) * 0.035;
        });

        element.addEventListener("mouseleave", () => {
            element.style.setProperty("--mx", "0px");
            element.style.setProperty("--my", "0px");
        });
        });

        const onMouseMove = (event) => {
        state.targetX = event.clientX;
        state.targetY = event.clientY;

        if (!state.visible) {
            state.visible = true;
            dot.style.opacity = "1";
            ring.style.opacity = "1";
            glow.style.opacity = "1";
        }
        };

        document.addEventListener("mousemove", onMouseMove, { passive: true });

        document.addEventListener("mouseleave", () => {
        state.visible = false;
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        glow.style.opacity = "0";
        });

        document.addEventListener("mousedown", () => {
        state.dotScaleTarget = 1.3;
        state.ringScaleTarget = 0.95;
        });

        document.addEventListener("mouseup", () => {
        state.dotScaleTarget = 1;
        state.ringScaleTarget = 1;
        });

        const animate = () => {
        state.ringX = ease(state.ringX, state.targetX, 0.18);
        state.ringY = ease(state.ringY, state.targetY, 0.18);
        state.glowX = ease(state.glowX, state.targetX, 0.12);
        state.glowY = ease(state.glowY, state.targetY, 0.12);

        state.dotScale = ease(state.dotScale, state.dotScaleTarget, 0.2);
        state.ringScale = ease(state.ringScale, state.ringScaleTarget, 0.14);

        const velocity = Math.hypot(state.ringX - state.prevRingX, state.ringY - state.prevRingY);
        const motionGlow = 1 + Math.min(velocity * 0.045, 0.45);
        state.glowScale = ease(state.glowScale, state.glowScaleTarget * motionGlow, 0.1);

        dot.style.transform = `translate3d(${state.targetX}px, ${state.targetY}px, 0) scale(${state.dotScale})`;
        ring.style.transform = `translate3d(${state.ringX}px, ${state.ringY}px, 0) scale(${state.ringScale})`;
        glow.style.transform = `translate3d(${state.glowX}px, ${state.glowY}px, 0) scale(${state.glowScale})`;

        state.prevRingX = state.ringX;
        state.prevRingY = state.ringY;

        requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }
    };
}