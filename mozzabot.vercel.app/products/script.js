// Add fading effects when switching tabs

document.addEventListener("DOMContentLoaded", function () {
    // Assume tabs are <a> elements inside nav, and tab contents have class "tab-content"
    const tabLinks = document.querySelectorAll("nav ul li a");
    const tabContents = document.querySelectorAll(".tab-content");

    function showTab(targetId) {
        tabContents.forEach(content => {
            if (content.id === targetId) {
                content.style.opacity = 0;
                content.style.display = "block";
                setTimeout(() => {
                    content.style.transition = "opacity 0.5s";
                    content.style.opacity = 1;
                }, 10);
            } else {
                content.style.transition = "opacity 0.5s";
                content.style.opacity = 0;
                setTimeout(() => {
                    content.style.display = "none";
                }, 500);
            }
        });
    }

    tabLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").replace("/index.html", "");
            if (document.getElementById(targetId)) {
                e.preventDefault();
                showTab(targetId);
            }
        });
    });

    // Optional: Show the first tab by default
    if (tabContents.length > 0) {
        tabContents.forEach((c, i) => {
            c.style.opacity = i === 0 ? 1 : 0;
            c.style.display = i === 0 ? "block" : "none";
            c.style.transition = "opacity 0.5s";
        });
    }

});
