import datas from "./data.js";
const navBtn = document.querySelectorAll(".link-btn");
const subMenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const toggleBtn = document.querySelector(".toggle-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const closeBtn = document.querySelector(".close-btn");
const sidebarLinks = document.querySelector(".sidebar-links");
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
  sidebarLinks.innerHTML = datas
    .map(data => {
      const { page, links } = data;
      return `
      <article>
        <h4>${page}</h4>
        <div class="sidebar-sublinks">${links
          .map(link => {
            const { label, icon, url } = link;
            return `<a href="${url}"><i class="${icon}"></i>${label}</a>`;
          })
          .join("")}
        </div>
      </article>
      `;
    })
    .join("");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

navBtn.forEach(btn => {
  btn.addEventListener("mouseover", e => {
    const position = e.currentTarget.getBoundingClientRect();
    const center = position.left + position.width / 2;
    console.log(center);
    subMenu.style.left = `${center}px`;
    subMenu.classList.add("show");
    const menu = e.target.textContent;
    datas.forEach(data => {
      const { page, links } = data;
      if (menu === page) {
        const columns = links.length;
        subMenu.innerHTML = `
      <section>
        <h4>${page}</h4>
        <div class="submenu-center col-${columns}">
        </div>
      </section>
      `;
        const submenuCenter = document.querySelector(".submenu-center");
        let subLinks = [];
        links.forEach(link => {
          const { label, icon, url } = link;
          subLinks.push(`<a href="${url}"><i class="${icon}"></i>${label}</a>`);
        });
        submenuCenter.innerHTML = subLinks.join("");
      }
    });
  });
});

hero.addEventListener("mouseover", e => {
  subMenu.classList.remove("show");
});
