function menuToggle() {
    const toggleMenu = document.querySelector(".menu-profile");
    toggleMenu.classList.toggle("active");
	
	const arrow = document.querySelector(".arrow-wrap");
    arrow.classList.toggle("active");
}