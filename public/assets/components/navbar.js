const state = {
  window: window.innerWidth,
};

const hamburger = document.createElement("div");
hamburger.setAttribute("id", "hamburger");
hamburger.classList = "hamburger";
hamburger.innerHTML =
  "<span class='meat'></span><span class='meat'></span><span class='meat'></span><span class='meat'></span>";

const sideNav = document.createElement("aside");
sideNav.setAttribute("id", "sideNav");
sideNav.classList = "sidenav hidden";
const sideNavLinks = document.createElement("ul");
sideNavLinks.classList = "sidenav-links";
makeLinks(sideNavLinks);
let li = document.createElement("li");
li.classList = "nav-link";
li.innerText = "CLOSE MENU";
li.addEventListener("click", toggleSidebar);
sideNavLinks.append(li);
sideNav.append(sideNavLinks);

window.addEventListener("resize", handleResize);

hamburger.addEventListener("click", toggleSidebar);

const topNav = document.createElement("ul");
topNav.classList = "topnav";
makeLinks(topNav);

const footTopLink = document.createElement("a");
footTopLink.setAttribute("href", "#main");
footTopLink.innerHTML = "<p>TOP</p>";

const footAndCopy = document.createElement("p");
footAndCopy.classList = "and-copy";
const copyrightsym = "&#169;"
footAndCopy.innerHTML = copyrightsym + " 2022";

const footLinks = document.createElement("ul");
footLinks.classList = "footlinks";
makeLinks(footLinks);

function toggleSidebar() {
  if ([...sideNav.classList].includes("hidden")) {
    sideNav.classList.remove("hidden");
    hamburger.removeEventListener("click", toggleSidebar);
  } else {
    sideNav.classList.add("hidden");
    hamburger.addEventListener("click", toggleSidebar);
  }
}
function makeLinks(ul) {
  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.classList = "nav-link";
    const a = document.createElement("a");
    if (i === 1 && !document.URL.includes("index.html")) {
      a.innerText = "HOME";
      a.setAttribute("href", "http://localhost:3000");
      li.append(a);
      ul.append(li);
    }
    if(i === 2 && !document.URL.includes("business.html")){
      a.innerText = "BUSINESS";
      a.setAttribute("href", "http://localhost:3000/business");
      li.append(a);
      ul.append(li);
    }
    if (i === 3 && !document.URL.includes("gallery.html")) {
      a.innerText = "GALLERY";
      a.setAttribute("href", "http://localhost:3000/gallery");
      li.append(a);
      ul.append(li);
    }
  }
}

function handleResize() {
  state.window = window.innerWidth;
  setNav();
  setFoot();
}

function setNav() {
  if (state.window < 500) {
    navContentDiv.innerHTML = "";
    navContentDiv.append(hamburger);
    navContentDiv.append(sideNav);
  } else {
    navContentDiv.innerHTML = "";
    navContentDiv.append(topNav);
  }
}

function setFoot() {
  if (state.window < 500) {
    footContentDiv.innerHTML = "";
    footContentDiv.append(footTopLink);
    footContentDiv.append(footAndCopy);
  } else {
    footContentDiv.innerHTML = "";
    footContentDiv.append(footLinks);
    footContentDiv.append(footAndCopy);
  }
}

export function navigate() {
  document.addEventListener("DOMContentLoaded", () => {
    const navContentDiv = document.getElementById("navContentDiv");
    const footContentDiv = document.getElementById("footContentDiv");
    setNav();
    setFoot();
  });
}

