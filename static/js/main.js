function portfolioApp() {
    return {
    showTop: false,
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
    },
    scrollTo(id) {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    },
    onScroll() {
        this.showTop = window.scrollY > 500;

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
    }
    };
}