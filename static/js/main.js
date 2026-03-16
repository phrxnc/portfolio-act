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
        {
        name: "Claude",
        type: "tools",
        iconType: "svg",
        iconPath: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z",
        color: "text-orange-400"
        }
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