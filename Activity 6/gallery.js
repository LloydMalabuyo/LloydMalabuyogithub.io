document.addEventListener("DOMContentLoaded", function () {
    const switchThemeButton = document.getElementById("switch-theme");
    const scrollToTopButton = document.getElementById("scrollToTop");
    const preloader = document.getElementById("preloader");
    
   
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.toggle("dark-mode", savedTheme === "dark");
        switchThemeButton.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }

   
    switchThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        switchThemeButton.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    
    setTimeout(() => {
        preloader.classList.add("hidden");
    }, 1000); 
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



