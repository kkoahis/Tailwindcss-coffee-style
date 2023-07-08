const topMenu = document.getElementById('koa-top-menu')
const toggleTopMenuIcon = document.getElementById('koa-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
   if (toggleTopMenuIcon.contains(e.target)) {
      // click on toggle top menu icon
      topMenu.classList.toggle('koa-top-menu-expanded')
      topMenu.classList.toggle('hidden') //neu co class hidden thi remove, neu khong co thi add
   }
   else {
      // click outside toggle top menu icon
      if (topMenu.classList.contains('koa-top-menu-expanded')) {
         topMenu.classList.remove('koa-top-menu-expanded')
         topMenu.classList.add('hidden')
      }
   }
})

// fix bug when resize window without off top menu
window.addEventListener("resize", (e) => {
   if (window.innerWidth > 1024) {
      if (topMenu.classList.contains("koa-top-menu-expanded")) {
         topMenu.classList.add("hidden");
         topMenu.classList.toggle("koa-top-menu-expanded");
      } else {
         topMenu.classList.add("hidden");
      }
   }
});

const toTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
      toTop.classList.add("active");
   } else {
      toTop.classList.remove("active");
   }
})