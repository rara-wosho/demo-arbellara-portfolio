const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function initTypingAnimation() {
    const roles = ["Civil Engineer", "Draftsman", "Estimator"];
    let currentIndex = 0;
    let currentLetterIndex = 0;
    let typingIntervalId = null;

    setTimeout(() => startTypingAnimation(), 300);

    function startTypingAnimation() {
      clearInterval(typingIntervalId);
      currentLetterIndex = 0;
      typingIntervalId = setInterval(typeNextLetter, 50);
    }

    function typeNextLetter() {
      const dynamicRoleElement = document.getElementById("dynamic-role");
      const currentRole = roles[currentIndex];
      const nextLetter = currentRole[currentLetterIndex];
      dynamicRoleElement.textContent += nextLetter;
      currentLetterIndex++;

      if (currentLetterIndex >= currentRole.length) {
        clearInterval(typingIntervalId);
        setTimeout(startErasingAnimation, 1400);
      }
    }

    function startErasingAnimation() {
      clearInterval(typingIntervalId);
      typingIntervalId = setInterval(eraseLastLetter, 30);
    }

    function eraseLastLetter() {
      const dynamicRoleElement = document.getElementById("dynamic-role");
      const currentRole = roles[currentIndex];
      dynamicRoleElement.textContent = currentRole.substring(
        0,
        currentLetterIndex - 1
      );
      currentLetterIndex--;

      if (currentLetterIndex <= 0) {
        clearInterval(typingIntervalId);
        setTimeout(startNextRoleAnimation, 200);
      }
    }

    function startNextRoleAnimation() {
      currentIndex = (currentIndex + 1) % roles.length;
      startTypingAnimation();
    }
  }

  initTypingAnimation();