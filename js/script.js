// PRE LOADER

window.onload = () => {
  const layer = document.getElementById("layer");
  const body = document.querySelector("body");

  setTimeout(() => {
    body.style.overflowY = "visible";
    layer.style.opacity = "0";

    if (layer.style.opacity == 0) {
      setTimeout(() => {
        layer.style.display = "none";
      }, 500);
    }
  }, 1200);
};

// NAV

const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("navigation");

const dropBtn = document.getElementById("dropA");
const dropList = document.getElementById("dropUl");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");

  document.documentElement.onclick = function (event) {
    if (event.target !== dropBtn && event.target !== dropList) {
      if (window.screen.width <= 990) {
        dropBtn.classList.remove("active");
        dropList.classList.remove("active");
        nav.classList.remove("active");
      }
    }
  };
}

function dropdown() {
  dropBtn.classList.toggle("active");
  dropList.classList.toggle("active");

  if (window.screen.width > 990) {
    document.documentElement.onclick = function (event) {
      if (event.target !== dropBtn && event.target !== dropList) {
        dropBtn.classList.remove("active");
        dropList.classList.remove("active");
      }
    };
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
dropBtn.addEventListener("click", dropdown);

// NAV FIXED ON SCROLL  &&  SCROLL TO TOP BTN

const btnUp = document.getElementById("arrowUp");
const menu = document.getElementById("nav");

(function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      menu.classList.add("navFixed");
    } else {
      menu.classList.remove("navFixed");
    }

    if (window.scrollY > 400) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }
  });
})();

btnUp.onclick = () => {
  window.scroll({
    top: 0,
  });
};

// NAV ANIMATION

window.onscroll = () => {
  onScrollNavAnimation();
  indicatorsAnimation();
};

function onScrollNavAnimation() {
  activateMenuCurrentSection(home);
  activateMenuCurrentSection(intro);
  activateMenuCurrentSection(services);
  activateMenuCurrentSection(call);
  activateMenuCurrentSection(projects);
  activateMenuCurrentSection(about);
  activateMenuCurrentSection(contact);
}

function activateMenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu li a[href*=${sectionId}]`);

  menuElement.classList.remove("selected");
  if (sectionBoundaries) {
    menuElement.classList.add("selected");
  }
}

// ADDITIONAL 1 ANIMATION

const additionalOneGroup = document.querySelectorAll(".group");
const additionalOneText = document.querySelectorAll(".group p");

function handleAdditionalOneAnimation(event) {
  additionalOneGroup.forEach((group) => {
    group.classList.remove("active", "p-active");
  });
  this.classList.add("active", "p-active");
}

additionalOneGroup.forEach((group) => {
  group.addEventListener("click", handleAdditionalOneAnimation);
});

// ADDITIONAL 2 ANIMATION

const additionalContainer = document.querySelector(".additional-2-txt");
const additionalBtn = document.querySelectorAll(".additional-2-btn");
const additionalContent = document.querySelectorAll(".additional-content-box");

additionalContainer.addEventListener("click", (e) => {
  const additionalId = e.target.dataset.id;
  if (additionalId) {
    additionalBtn.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    additionalContent.forEach((additionalContent) => {
      additionalContent.classList.remove("active");
    });

    const element = document.getElementById(additionalId);
    element.classList.add("active");
  }
});

// SLIDER

$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// INDICATORS ANIMATION

const sectionIndicator = document.getElementById("about");
const valueDisplays = document.querySelectorAll(".numbers");
let enteredIndicatorSection = false;
let valueInterval = 2000;

function indicatorsAnimation() {
  const activeAnimation = window.scrollY + window.innerHeight >= sectionIndicator.offsetTop;

  if (activeAnimation && !enteredIndicatorSection) {
    enteredIndicatorSection = true;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(valueInterval / endValue);

      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;

        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
}
