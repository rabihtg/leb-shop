const burgerBtn = document.querySelector(".burger-icon");
const colseBtn = document.querySelector(".close-icon");
const mobileNavMenuItems = document.querySelector(".nav-items-cont");
const mobileNavMenu = document.querySelector(".nav");
const subMenuLinkNoHover = document.querySelectorAll(".link-sub-menu");

burgerBtn.addEventListener("click", function () {
  mobileNavMenuItems.classList.remove("off");
  mobileNavMenu.classList.remove("off");
});
colseBtn.addEventListener("click", function () {
  mobileNavMenuItems.classList.add("off");
  mobileNavMenu.classList.add("off");
});

// TODO - CHECK IF REMOVE IS NEEDED OR NEW LOGIC..........
subMenuLinkNoHover.forEach((ml) => {
  ml.addEventListener("click", () => {
    let openElement = document.querySelectorAll(".link-sub-menu.no-hover");
    if (openElement) {
      openElement.forEach((el) => {
        if (el !== ml) {
          el.classList.remove("no-hover");
        }
      });
    }
    ml.classList.toggle("no-hover");
  });
});
