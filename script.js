const categories = {
  mobile: { title: "APP / AI 设计", en: "Mobile & AI Design" },
  pc: { title: "PC 端设计", en: "Desktop & Web" },
  operation: { title: "运营设计", en: "Campaign Design" },
  other: { title: "其他设计", en: "Visual & IP" },
};

const projects = [
  {
    id: "didi-hotel-redesign",
    category: "mobile",
    title: "滴滴酒店 · 全流程改版",
    subtitle: "酒店预订 · 数据洞察 · AI 工作流",
    description: "围绕滴滴酒店预订全流程，从数据洞察、信息架构到关键链路交互与视觉体系，系统提升搜索、筛选、详情、预订及权益转化体验。",
    role: "UX/UI、体验策略、数据分析、AI 辅助设计",
    pages: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  {
    id: "tongtong-ai-social",
    category: "mobile",
    title: "通通 AI 社交 App",
    subtitle: "产品改版 · 社交体验 · 视觉系统",
    description: "围绕“交互重塑回归体验、业务诉求与视觉焕新”展开的产品改版，覆盖账号创建、消息、内容消费、互动玩法与虚拟身份等核心链路。",
    role: "UI/UX、交互原型、视觉系统",
    pages: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
  {
    id: "papo-checkin",
    category: "mobile",
    title: "PAPO 打卡小程序",
    subtitle: "打卡养成 · IP 体验 · 小程序",
    description: "以甜酷、年轻、趣味为设计关键词，将打卡、养成、数字藏品与 IP 互动整合为连续的轻量体验。",
    role: "产品视觉、UI 设计、IP 延展",
    pages: [41, 42, 43, 44, 45, 46, 47, 48, 49],
  },
  {
    id: "design-system-skill",
    category: "mobile",
    title: "设计规范 Skill",
    subtitle: "Design System · AI 工作流",
    description: "把设计规范与 AI 工作流沉淀为可复用的 Skill，辅助方案探索、设计表达和团队协作，提升设计交付效率。",
    role: "Design System、AI 工作流、Skill 设计",
    pages: [18],
  },
  {
    id: "operation-expansion-tool",
    category: "mobile",
    title: "运营扩图 Skill",
    subtitle: "MasterGo 插件 · 批量生产 · AI 提效",
    description: "面向运营活动制作场景，将画面延展与多尺寸适配能力封装为可复用工具，降低重复操作成本并提升批量生产效率。",
    role: "插件设计、AI 工作流、运营提效",
    pages: [19],
  },
  {
    id: "partner-platform",
    category: "pc",
    title: "通通伙伴移动平台",
    subtitle: "业务平台 · 多场景组件",
    description: "以技术基建普惠化、全链路协作中枢和开发即变现体系为核心，构建面向伙伴的移动业务平台。",
    role: "产品视觉、界面设计、组件规范",
    pages: [50],
  },
  {
    id: "open-platform",
    category: "pc",
    title: "通通开放平台",
    subtitle: "开放平台 · 管理后台 · 数据展示",
    description: "面向开发者与业务管理人员的开放平台设计，统一复杂表格、筛选、配置和数据展示体验。",
    role: "后台 UI、信息架构、设计规范",
    pages: [51],
  },
  {
    id: "didi-hotel-growth",
    category: "operation",
    title: "滴滴酒店 · 营销导流提效",
    subtitle: "营销增长 · 导流转化 · 运营视觉",
    description: "以设计驱动转化，让流量创造价值。围绕酒店业务营销场景优化导流路径、运营表达与关键转化触点。",
    role: "增长设计、运营视觉、转化体验",
    pages: [52, 53, 54, 55, 56, 57, 58],
  },
  {
    id: "qianmen-festival",
    category: "other",
    title: "前门国风节活动设计",
    subtitle: "国风活动 · 线下延展",
    description: "将传统文化元素转化为年轻化活动视觉，并延展至主画面、物料、导视与线下展示场景。",
    role: "主视觉、活动物料、视觉延展",
    pages: [59, 60, 61],
  },
];

const projectSections = document.querySelector("#project-sections");
const dialog = document.querySelector("[data-project-dialog]");
const gallery = document.querySelector("[data-case-gallery]");

function imagePath(page) {
  return `assets/portfolio/page-${String(page).padStart(2, "0")}.jpg`;
}

function renderProjects(filter = "all") {
  projectSections.innerHTML = "";
  let globalRowIndex = 0;
  Object.entries(categories).forEach(([key, category]) => {
    if (filter !== "all" && filter !== key) return;
    const items = projects.filter((project) => project.category === key);
    const rows = [];
    for (let index = 0; index < items.length; index += 2) rows.push(items.slice(index, index + 2));
    const section = document.createElement("section");
    section.className = "project-section";
    section.dataset.category = key;
    section.innerHTML = `
      <div class="section-heading">
        <div><p class="eyebrow">${category.en}</p><h2>${category.title}</h2></div>
        <span>${String(items.length).padStart(2, "0")} PROJECTS</span>
      </div>
      <div class="project-grid">
        ${rows.map((row) => {
          const rowIndex = globalRowIndex++;
          return `<div class="project-row" style="--row-index:${rowIndex}">${row.map((project) => {
            const itemIndex = items.indexOf(project);
            return `
              <button class="project-card reveal" type="button" data-project-id="${project.id}" aria-label="查看 ${project.title} 案例">
                <span class="project-media">
                  <img src="${imagePath(project.pages[0])}" alt="${project.title} 项目封面" loading="lazy" />
                  <span class="project-index">${String(itemIndex + 1).padStart(2, "0")}</span>
                </span>
                <span class="project-meta">
                  <span><h3>${project.title}</h3><p>${project.subtitle}</p></span>
                  <span aria-hidden="true">↗</span>
                </span>
              </button>`;
          }).join("")}</div>`;
        }).join("")}
      </div>`;
    projectSections.append(section);
  });
  observeReveals();
  initProjectRowStack();
}

function openProject(project) {
  const category = categories[project.category];
  dialog.querySelector("[data-dialog-category]").textContent = `${category.en} / ${category.title}`;
  dialog.querySelector("[data-dialog-title]").textContent = project.title;
  dialog.querySelector("[data-dialog-description]").textContent = project.description;
  dialog.querySelector("[data-dialog-type]").textContent = project.subtitle;
  dialog.querySelector("[data-dialog-role]").textContent = project.role;
  gallery.innerHTML = project.pages.map((page, index) => `
    <figure>
      <img src="${imagePath(page)}" alt="${project.title} 案例页面 ${index + 1}" loading="lazy" />
    </figure>
  `).join("");
  dialog.showModal();
  document.body.classList.add("dialog-open");
  dialog.scrollTop = 0;
}

function closeProject() {
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
  gallery.innerHTML = "";
}

projectSections.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (!card) return;
  const project = projects.find((item) => item.id === card.dataset.projectId);
  if (project) openProject(project);
});

document.querySelector("[data-filter-bar]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
  renderProjects(button.dataset.filter);
});

document.querySelectorAll("[data-dialog-close]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  gallery.innerHTML = "";
});

const copyStatus = document.querySelector("[data-copy-status]");
document.querySelectorAll("[data-copy]").forEach((copyButton) => {
  copyButton.addEventListener("click", async () => {
    const copyLabel = copyStatus.querySelector("span") || copyStatus;
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      copyLabel.textContent = "已复制 · sunmw623";
    } catch {
      copyLabel.textContent = `微信号 · ${copyButton.dataset.copy.toLowerCase()}`;
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
}

let projectRowStackTeardown = null;

function initProjectRowStack() {
  projectRowStackTeardown?.();
  projectRowStackTeardown = null;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canStack = window.matchMedia("(min-width: 761px)").matches;
  const rows = [...document.querySelectorAll(".project-row")];
  if (reduceMotion || !canStack || rows.length < 2) return;

  const updateRows = () => {
    const viewportHeight = window.innerHeight || 1;
    const triggerLine = viewportHeight * 0.78;
    const progressRange = viewportHeight * 0.34;

    rows.forEach((row, index) => {
      const nextRow = rows[index + 1];
      let progress = 0;
      if (nextRow) {
        const nextTop = nextRow.getBoundingClientRect().top;
        progress = Math.max(0, Math.min(1, (triggerLine - nextTop) / progressRange));
      }
      row.style.setProperty("--row-scale", (1 - progress * 0.5).toFixed(3));
      row.style.setProperty("--row-opacity", (1 - progress * 0.92).toFixed(3));
      row.style.setProperty("--row-brightness", (1 - progress * 0.62).toFixed(3));
      row.style.setProperty("--row-offset", `${(progress * -72).toFixed(2)}px`);
    });
  };

  let ticking = false;
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateRows();
      ticking = false;
    });
  };

  updateRows();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  projectRowStackTeardown = () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
  };
}

const navPill = document.querySelector("[data-nav-pill]");
const navIndicator = navPill.querySelector(".nav-indicator");
const navLinks = [...navPill.querySelectorAll("[data-section]")];

function setActiveSection(sectionId, animate = false) {
  const activeLink = navLinks.find((link) => link.dataset.section === sectionId) || navLinks[0];
  navLinks.forEach((link) => link.classList.toggle("is-active", link === activeLink));
  const navRect = navPill.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  navIndicator.style.left = `${linkRect.left - navRect.left}px`;
  navIndicator.style.width = `${linkRect.width}px`;
  if (animate) {
    navIndicator.classList.remove("is-moving");
    void navIndicator.offsetWidth;
    navIndicator.classList.add("is-moving");
    emitNavParticles(linkRect.left - navRect.left + linkRect.width / 2);
  }
}

function randomNoise(value = 1) {
  return value / 2 - Math.random() * value;
}

function navParticlePoint(distance, pointIndex, totalPoints) {
  const angle = ((360 + randomNoise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
  return [distance * Math.cos(angle), distance * Math.sin(angle)];
}

function emitNavParticles(centerX) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  navPill.querySelectorAll(".nav-particle").forEach((particle) => particle.remove());
  const animationTime = 600;
  const timeVariance = 300;
  const particleCount = 15;
  const colors = [1, 2, 3, 1, 2, 3, 1, 4];
  for (let index = 0; index < particleCount; index += 1) {
    const start = navParticlePoint(90, particleCount - index, particleCount);
    const end = navParticlePoint(10 + randomNoise(7), particleCount - index, particleCount);
    const time = animationTime * 2 + randomNoise(timeVariance * 2);
    const rotateBase = randomNoise(10);
    const rotate = rotateBase > 0 ? (rotateBase + 5) * 10 : (rotateBase - 5) * 10;
    const particle = document.createElement("span");
    const point = document.createElement("span");
    particle.className = "nav-particle";
    point.className = "nav-particle-point";
    particle.style.left = `${centerX}px`;
    particle.style.setProperty("--start-x", `${start[0].toFixed(2)}px`);
    particle.style.setProperty("--start-y", `${start[1].toFixed(2)}px`);
    particle.style.setProperty("--end-x", `${end[0].toFixed(2)}px`);
    particle.style.setProperty("--end-y", `${end[1].toFixed(2)}px`);
    particle.style.setProperty("--time", `${time.toFixed(0)}ms`);
    particle.style.setProperty("--scale", `${(1 + randomNoise(0.2)).toFixed(2)}`);
    particle.style.setProperty("--rotate", `${rotate.toFixed(2)}deg`);
    particle.style.setProperty("--color", `var(--nav-particle-${colors[Math.floor(Math.random() * colors.length)]})`);
    particle.append(point);
    navPill.append(particle);
    window.setTimeout(() => particle.remove(), time);
  }
}

let activeSection = "home";
function syncActiveSection() {
  const probe = window.innerHeight * 0.42;
  let nextSection = "home";
  ["home", "work", "about"].forEach((id) => {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= probe) nextSection = id;
  });
  if (nextSection !== activeSection) {
    activeSection = nextSection;
    setActiveSection(activeSection, true);
  }
}

navLinks.forEach((link) => link.addEventListener("click", () => {
  activeSection = link.dataset.section;
  setActiveSection(activeSection, true);
}));

let navTicking = false;
window.addEventListener("scroll", () => {
  if (navTicking) return;
  navTicking = true;
  requestAnimationFrame(() => {
    syncActiveSection();
    navTicking = false;
  });
}, { passive: true });
window.addEventListener("resize", () => setActiveSection(activeSection));

const themeToggle = document.querySelector("[data-theme-toggle]");
themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("theme-dark");
  themeToggle.setAttribute("aria-label", dark ? "切换浅色模式" : "切换深色模式");
});

renderProjects();
observeReveals();
setActiveSection("home");
syncActiveSection();
