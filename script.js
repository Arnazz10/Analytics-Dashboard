const sectionGrid = document.querySelector("#sectionGrid");
const searchInput = document.querySelector("#searchInput");
const heroKicker = document.querySelector("#heroKicker");
const heroTitle = document.querySelector("#heroTitle");
const heroCopy = document.querySelector("#heroCopy");
const heroSection = document.querySelector(".hero");
const navItems = document.querySelectorAll(".nav-item");

const sectionContent = {
  analytics: {
    kicker: "Performance intelligence",
    title: "Analytics",
    copy: "Traffic, conversions, and product behavior update in real time. Click charts and controls to explore each metric.",
    render: () => `
      <article class="card stat-card" data-title="Traffic value">
        <div class="card-head"><span>Site traffic</span><span class="muted">◫</span></div>
        <h3>128.4K</h3>
        <p class="delta positive">+18% vs last week</p>
      </article>

      <article class="card stat-card" data-title="Conversion rate">
        <div class="card-head"><span>Conversion rate</span><span class="muted">◫</span></div>
        <h3>7.9%</h3>
        <p class="delta positive">+1.3 points</p>
      </article>

      <article class="card gauge-card span-2-row" data-title="Goal progress">
        <div class="gauge-wrap">
          <div class="gauge">
            <div class="gauge-ring"></div>
            <div class="gauge-center">
              <strong>71.4%</strong>
              <span>Goal completion</span>
            </div>
          </div>
          <div class="gauge-stats">
            <div><p class="label">Qualified leads</p><strong>2,184</strong><span class="tiny positive">+21%</span></div>
            <div><p class="label">Pipeline value</p><strong>$92.8K</strong><span class="tiny positive">+12%</span></div>
          </div>
        </div>
      </article>

      <article class="card chart-card" data-title="Engagement trend">
        <div class="card-head"><span>Engagement trend</span><span class="muted">···</span></div>
        <div class="segment-control">
          <button class="segment-btn active" data-action="segment" type="button">Weekly</button>
          <button class="segment-btn" data-action="segment" type="button">Monthly</button>
          <button class="segment-btn" data-action="segment" type="button">Quarterly</button>
        </div>
        <div class="bar-chart" data-action="bar-group">
          <div class="bar low" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
          <div class="bar high active" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
          <div class="bar tall" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
          <div class="bar low" data-action="bar"></div>
        </div>
        <div class="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
        <p class="inline-note" data-role="bar-value">Selected: Wednesday</p>
      </article>

      <article class="card heatmap-card span-2" data-title="Product heatmap">
        <div class="card-head"><span>Product analytics</span><div class="legend"><span><i class="swatch high"></i>High traffic</span><span><i class="swatch low"></i>Low traffic</span></div></div>
        <p class="subtle">Time visit in hours</p>
        <div class="heatmap" aria-hidden="true">
          <span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c2"></span><span class="c4"></span><span class="c5"></span><span class="c4"></span><span class="c2"></span><span class="c1"></span>
          <span class="c2"></span><span class="c1"></span><span class="c5"></span><span class="c2"></span><span class="c1"></span><span class="c5"></span><span class="c2"></span><span class="c1"></span><span class="c0"></span>
          <span class="c4"></span><span class="c0"></span><span class="c3"></span><span class="c5"></span><span class="c0"></span><span class="c0"></span><span class="c5"></span><span class="c0"></span><span class="c1"></span>
          <span class="c0"></span><span class="c0"></span><span class="c5"></span><span class="c5"></span><span class="c4"></span><span class="c5"></span><span class="c1"></span><span class="c2"></span><span class="c3"></span>
          <span class="c0"></span><span class="c0"></span><span class="c4"></span><span class="c4"></span><span class="c5"></span><span class="c2"></span><span class="c0"></span><span class="c3"></span><span class="c0"></span>
        </div>
        <div class="chart-labels heatmap-labels"><span>12 AM</span><span>4 AM</span><span>8 AM</span><span>12 PM</span><span>4 PM</span><span>8 PM</span><span>11 PM</span></div>
      </article>

      <article class="card growth-card" data-title="Growth pulse">
        <div><div class="card-head"><span>Growth pulse</span></div><h3>+24%</h3><p>Campaign performance is above baseline this week.</p></div>
        <div class="signal"><span></span><span></span><span></span><span></span></div>
      </article>

      <article class="card feedback-card" data-title="Team feedback">
        <p>How useful is this analytics view?</p>
        <div class="feedback-row">
          <button type="button" data-action="feedback">😐</button>
          <button type="button" data-action="feedback">🙂</button>
          <button type="button" data-action="feedback" class="selected">😊</button>
          <button type="button" data-action="feedback">😀</button>
          <button type="button" data-action="feedback">🤩</button>
        </div>
      </article>
    `,
  },
  sales: {
    kicker: "Revenue control",
    title: "Sales",
    copy: "Track deals, team output, and revenue momentum. Click a deal row to focus, and use controls to adjust targets.",
    render: () => `
      <article class="card stat-card" data-title="Monthly revenue">
        <div class="card-head"><span>Monthly revenue</span><span class="muted">◫</span></div>
        <h3>$182.4K</h3>
        <p class="delta positive">+11% vs previous month</p>
      </article>

      <article class="card stat-card" data-title="Pending invoices">
        <div class="card-head"><span>Pending invoices</span><span class="muted">◫</span></div>
        <h3>$24.7K</h3>
        <p class="delta negative">4 invoices due this week</p>
      </article>

      <article class="card gauge-card span-2-row" data-title="Quarter target">
        <div class="card-head"><span>Quarter target</span></div>
        <div class="range-wrap">
          <input type="range" min="40" max="100" value="68" data-action="target-range" />
          <strong class="range-value" data-role="target-output">68% achieved</strong>
        </div>
        <div class="inline-note">Drag to simulate forecast changes</div>
      </article>

      <article class="card sales-card interactive-list span-2" data-title="Recent deals">
        <div class="card-head"><span>Recent deals</span><a href="#" onclick="return false;">Full history</a></div>
        <div class="sale-row is-selected" data-action="select-row"><div class="sale-user"><div class="avatar badge">RK</div><div><strong>Ritika K</strong><p>Mar 21, 2026 • 14:20</p></div></div><div class="sale-value"><strong>+$5,240.00</strong><p>Enterprise</p></div></div>
        <div class="sale-row" data-action="select-row"><div class="sale-user"><div class="avatar badge muted-badge">AJ</div><div><strong>Arjun J</strong><p>Mar 21, 2026 • 12:05</p></div></div><div class="sale-value"><strong>+$2,850.50</strong><p>Growth</p></div></div>
        <div class="sale-row" data-action="select-row"><div class="sale-user"><div class="avatar badge">NR</div><div><strong>Nira R</strong><p>Mar 20, 2026 • 17:41</p></div></div><div class="sale-value"><strong>+$1,920.00</strong><p>Starter</p></div></div>
      </article>

      <article class="card chart-card" data-title="Deal velocity">
        <div class="card-head"><span>Deal velocity</span><span class="muted">···</span></div>
        <div class="bar-chart" data-action="bar-group">
          <div class="bar low" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
          <div class="bar tall" data-action="bar"></div>
          <div class="bar high active" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
          <div class="bar low" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
        </div>
        <div class="chart-labels"><span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span></div>
        <p class="inline-note" data-role="bar-value">Selected: Week 4</p>
      </article>

      <article class="card growth-card" data-title="Quota status">
        <div><div class="card-head"><span>Quota status</span></div><h3>92%</h3><p>3 reps are above target this month.</p></div>
        <div class="signal"><span></span><span></span><span></span><span></span></div>
      </article>
    `,
  },
  engagement: {
    kicker: "Audience behavior",
    title: "Engagement",
    copy: "Measure session quality, retention, and channel impact. Click bars and feedback to inspect user sentiment quickly.",
    render: () => `
      <article class="card stat-card" data-title="Active users">
        <div class="card-head"><span>Active users</span><span class="muted">◫</span></div>
        <h3>35,260</h3>
        <p class="delta positive">+9% in last 24 hours</p>
      </article>

      <article class="card stat-card" data-title="Avg session length">
        <div class="card-head"><span>Avg session</span><span class="muted">◫</span></div>
        <h3>8m 24s</h3>
        <p class="delta positive">+42s from yesterday</p>
      </article>

      <article class="card chart-card span-2" data-title="Channel engagement">
        <div class="card-head"><span>Channel engagement</span><span class="muted">···</span></div>
        <div class="segment-control">
          <button class="segment-btn active" data-action="segment" type="button">Organic</button>
          <button class="segment-btn" data-action="segment" type="button">Paid</button>
          <button class="segment-btn" data-action="segment" type="button">Referral</button>
        </div>
        <div class="bar-chart" data-action="bar-group">
          <div class="bar mid" data-action="bar"></div>
          <div class="bar high active" data-action="bar"></div>
          <div class="bar tall" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
          <div class="bar low" data-action="bar"></div>
          <div class="bar mid" data-action="bar"></div>
          <div class="bar high" data-action="bar"></div>
        </div>
        <div class="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
        <p class="inline-note" data-role="bar-value">Selected: Tuesday</p>
      </article>

      <article class="card heatmap-card span-2" data-title="Session heatmap">
        <div class="card-head"><span>Session heatmap</span><div class="legend"><span><i class="swatch high"></i>High activity</span><span><i class="swatch low"></i>Low activity</span></div></div>
        <p class="subtle">Engagement density by hour</p>
        <div class="heatmap" aria-hidden="true">
          <span class="c0"></span><span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span><span class="c5"></span><span class="c4"></span><span class="c2"></span><span class="c1"></span>
          <span class="c0"></span><span class="c0"></span><span class="c2"></span><span class="c3"></span><span class="c5"></span><span class="c5"></span><span class="c3"></span><span class="c1"></span><span class="c0"></span>
          <span class="c1"></span><span class="c2"></span><span class="c4"></span><span class="c5"></span><span class="c5"></span><span class="c4"></span><span class="c2"></span><span class="c1"></span><span class="c0"></span>
          <span class="c0"></span><span class="c1"></span><span class="c3"></span><span class="c4"></span><span class="c5"></span><span class="c4"></span><span class="c3"></span><span class="c2"></span><span class="c1"></span>
          <span class="c0"></span><span class="c0"></span><span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c2"></span><span class="c1"></span><span class="c0"></span><span class="c0"></span>
        </div>
        <div class="chart-labels heatmap-labels"><span>12 AM</span><span>4 AM</span><span>8 AM</span><span>12 PM</span><span>4 PM</span><span>8 PM</span><span>11 PM</span></div>
      </article>

      <article class="card feedback-card" data-title="User sentiment">
        <p>How positive is current user sentiment?</p>
        <div class="feedback-row">
          <button type="button" data-action="feedback">😠</button>
          <button type="button" data-action="feedback">😕</button>
          <button type="button" data-action="feedback" class="selected">😐</button>
          <button type="button" data-action="feedback">🙂</button>
          <button type="button" data-action="feedback">😍</button>
        </div>
      </article>

      <article class="card growth-card" data-title="Retention trend">
        <div><div class="card-head"><span>Retention trend</span></div><h3>+13%</h3><p>Week-over-week retention is improving steadily.</p></div>
        <div class="signal"><span></span><span></span><span></span><span></span></div>
      </article>
    `,
  },
  settings: {
    kicker: "Workspace preferences",
    title: "Settings",
    copy: "Manage dashboard behavior with live controls. Every switch and option is interactive and updates instantly.",
    render: () => `
      <article class="card span-2" data-title="Notification controls">
        <div class="card-head"><span>Notifications</span></div>
        <div class="toggle-row"><div><strong>Email alerts</strong><p class="subtle">Weekly performance summaries</p></div><button class="switch on" data-action="toggle-switch" type="button" aria-label="Toggle email alerts"></button></div>
        <div class="toggle-row"><div><strong>Push alerts</strong><p class="subtle">Critical system updates</p></div><button class="switch on" data-action="toggle-switch" type="button" aria-label="Toggle push alerts"></button></div>
        <div class="toggle-row"><div><strong>Sales notifications</strong><p class="subtle">Deal stage and payment events</p></div><button class="switch" data-action="toggle-switch" type="button" aria-label="Toggle sales notifications"></button></div>
      </article>

      <article class="card chart-card" data-title="Default time window">
        <div class="card-head"><span>Default time window</span></div>
        <div class="segment-control">
          <button class="segment-btn" data-action="segment" type="button">7 days</button>
          <button class="segment-btn active" data-action="segment" type="button">30 days</button>
          <button class="segment-btn" data-action="segment" type="button">90 days</button>
        </div>
        <p class="inline-note">Selection updates how cards load by default.</p>
      </article>

      <article class="card customer-card" data-title="Access level">
        <div class="card-head"><span>Access level</span></div>
        <h3>Admin</h3>
        <p>Full access to analytics, sales, and engagement modules.</p>
        <div class="mini-avatars"><span></span><span></span><span></span></div>
        <button class="primary-button" type="button">Manage team roles</button>
      </article>

      <article class="card sales-card" data-title="Data refresh">
        <div class="card-head"><span>Data refresh interval</span></div>
        <div class="range-wrap">
          <input type="range" min="1" max="30" value="8" data-action="refresh-range" />
          <strong class="range-value" data-role="refresh-output">Every 8 minutes</strong>
        </div>
        <p class="inline-note">Lower intervals use more API calls.</p>
      </article>

      <article class="card feedback-card" data-title="Dashboard feedback">
        <p>How intuitive does this settings page feel?</p>
        <div class="feedback-row">
          <button type="button" data-action="feedback">😕</button>
          <button type="button" data-action="feedback">🙂</button>
          <button type="button" data-action="feedback" class="selected">😊</button>
          <button type="button" data-action="feedback">😀</button>
          <button type="button" data-action="feedback">🚀</button>
        </div>
      </article>
    `,
  },
};

const uiState = {
  activeSection: "analytics",
  search: "",
};

let sectionSwitchTimer = null;

function setActiveNav(section) {
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === section);
  });
}

function applySearchFilter() {
  const searchValue = uiState.search.trim().toLowerCase();
  const cards = sectionGrid.querySelectorAll(".card[data-title]");

  cards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    card.classList.toggle("is-hidden", searchValue && !title.includes(searchValue));
  });
}

function mountSection(sectionKey) {
  const section = sectionContent[sectionKey];
  if (!section) {
    return;
  }

  heroKicker.textContent = section.kicker;
  heroTitle.textContent = section.title;
  heroCopy.textContent = section.copy;
  sectionGrid.innerHTML = section.render();
  setActiveNav(sectionKey);
  applySearchFilter();
}

function clearTransitionClasses() {
  heroSection.classList.remove("section-transition-in", "section-transition-out");
  sectionGrid.classList.remove("section-transition-in", "section-transition-out");
}

function renderSection(sectionKey, options = { animate: true }) {
  const section = sectionContent[sectionKey];
  if (!section) {
    return;
  }

  if (!options.animate) {
    clearTransitionClasses();
    mountSection(sectionKey);
    return;
  }

  clearTimeout(sectionSwitchTimer);
  clearTransitionClasses();
  heroSection.classList.add("section-transition-out");
  sectionGrid.classList.add("section-transition-out");

  sectionSwitchTimer = setTimeout(() => {
    mountSection(sectionKey);
    heroSection.classList.remove("section-transition-out");
    sectionGrid.classList.remove("section-transition-out");
    heroSection.classList.add("section-transition-in");
    sectionGrid.classList.add("section-transition-in");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroSection.classList.remove("section-transition-in");
        sectionGrid.classList.remove("section-transition-in");
      });
    });
  }, 140);
}

document.addEventListener("click", (event) => {
  const navTarget = event.target.closest(".nav-item[data-section]");
  if (navTarget) {
    uiState.activeSection = navTarget.dataset.section;
    renderSection(uiState.activeSection);
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    return;
  }

  if (actionTarget.dataset.action === "feedback") {
    const group = actionTarget.closest(".feedback-row");
    if (group) {
      group.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
      actionTarget.classList.add("selected");
    }
  }

  if (actionTarget.dataset.action === "segment") {
    const group = actionTarget.closest(".segment-control");
    if (group) {
      group.querySelectorAll(".segment-btn").forEach((item) => item.classList.remove("active"));
      actionTarget.classList.add("active");
    }
  }

  if (actionTarget.dataset.action === "bar") {
    const chart = actionTarget.closest("[data-action='bar-group']");
    if (chart) {
      const bars = [...chart.querySelectorAll(".bar")];
      bars.forEach((bar) => bar.classList.remove("active"));
      actionTarget.classList.add("active");

      const index = bars.indexOf(actionTarget);
      const labelContainer = chart.parentElement.querySelector("[data-role='bar-value']");
      if (labelContainer) {
        labelContainer.textContent = `Selected column: ${index + 1}`;
      }
    }
  }

  if (actionTarget.dataset.action === "select-row") {
    const list = actionTarget.closest(".interactive-list");
    if (list) {
      list.querySelectorAll(".sale-row").forEach((row) => row.classList.remove("is-selected"));
      actionTarget.classList.add("is-selected");
    }
  }

  if (actionTarget.dataset.action === "toggle-switch") {
    actionTarget.classList.toggle("on");
  }

  const clickedCard = event.target.closest(".card");
  if (clickedCard && !clickedCard.classList.contains("is-hidden")) {
    sectionGrid.querySelectorAll(".card").forEach((card) => card.classList.remove("is-focused"));
    clickedCard.classList.add("is-focused");
  }
});

document.addEventListener("input", (event) => {
  if (event.target.dataset.action === "target-range") {
    const output = event.target.closest(".card")?.querySelector("[data-role='target-output']");
    if (output) {
      output.textContent = `${event.target.value}% achieved`;
    }
  }

  if (event.target.dataset.action === "refresh-range") {
    const output = event.target.closest(".card")?.querySelector("[data-role='refresh-output']");
    if (output) {
      output.textContent = `Every ${event.target.value} minutes`;
    }
  }
});

searchInput.addEventListener("input", (event) => {
  uiState.search = event.target.value;
  applySearchFilter();
});

renderSection(uiState.activeSection, { animate: false });
