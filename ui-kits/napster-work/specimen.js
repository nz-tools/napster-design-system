/* Demonstration behavior only. Integrate host actions in the consuming app. */
const app = document.querySelector('#app');
const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
  const light = app.dataset.theme !== 'light';
  app.dataset.theme = light ? 'light' : 'dark';
  themeToggle.textContent = light ? 'Switch to dark' : 'Switch to light';
});

const tabs = [...app.querySelectorAll('[role="tab"]')];
function activateTab(tab) {
  hideTip();
  for (const item of tabs) {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    const next = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault(); activateTab(tabs[next]); tabs[next].focus();
  });
});

const dialog = document.querySelector('#confirm');
let dialogTrigger;
for (const id of ['reset', 'show-dialog']) document.getElementById(id).addEventListener('click', event => {
  hideTip(); dialogTrigger = event.currentTarget; dialog.returnValue = 'cancel'; dialog.showModal();
});
dialog.addEventListener('cancel', () => { dialog.returnValue = 'cancel'; });
dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'confirm') {
    document.querySelector('#topic').value = '';
    document.querySelector('#practice-status').textContent = 'Sample topic reset.';
  }
  dialogTrigger?.focus();
});

const start = document.querySelector('#start');
start.addEventListener('click', () => {
  const topic = document.querySelector('#topic');
  const status = document.querySelector('#practice-status');
  if (!topic.value.trim()) { status.textContent = 'Enter a topic to continue.'; topic.focus(); return; }
  status.textContent = 'Practice preview ready. No session was created.';
});
document.querySelector('#toggle').addEventListener('click', event => {
  const pressed = event.currentTarget.getAttribute('aria-pressed') !== 'true';
  event.currentTarget.setAttribute('aria-pressed', String(pressed));
  document.querySelector('#pin-status').textContent = pressed ? 'Briefing is pinned.' : 'Briefing is not pinned.';
});
document.querySelector('#retry').addEventListener('click', event => {
  const button = event.currentTarget;
  button.disabled = true; button.setAttribute('aria-busy', 'true'); button.textContent = 'Loading…';
  document.querySelector('#retry-status').textContent = 'Loading the sample brief.';
  window.setTimeout(() => {
    button.disabled = false; button.removeAttribute('aria-busy'); button.textContent = 'Retry demo';
    const label = document.querySelector('#error-label');
    label.className = 'nfw-status nfw-status--success'; label.textContent = 'Brief loaded';
    document.querySelector('#retry-status').textContent = 'The sample brief is ready.';
  }, 900);
});

const help = document.querySelector('#help');
const tip = document.querySelector('#focus-tip');
let tipTimer, dismissTimer;
function positionTip() {
  if (tip.hidden) return;
  const anchor = help.getBoundingClientRect();
  const bounds = tip.getBoundingClientRect();
  const left = Math.max(8, Math.min(anchor.left + anchor.width / 2 - bounds.width / 2, window.innerWidth - bounds.width - 8));
  const top = anchor.bottom + bounds.height + 8 <= window.innerHeight ? anchor.bottom + 8 : Math.max(8, anchor.top - bounds.height - 8);
  tip.style.left = `${left}px`; tip.style.top = `${top}px`;
}
function showTipSoon() {
  clearTimeout(dismissTimer); clearTimeout(tipTimer);
  tipTimer = window.setTimeout(() => { tip.hidden = false; positionTip(); }, 400);
}
function hideTip() { clearTimeout(tipTimer); clearTimeout(dismissTimer); tip.hidden = true; }
function leaveTip() {
  clearTimeout(tipTimer);
  dismissTimer = window.setTimeout(() => {
    if (!help.matches(':hover, :focus') && !tip.matches(':hover')) hideTip();
  }, 150);
}
help.addEventListener('mouseenter', showTipSoon);
help.addEventListener('focus', showTipSoon);
help.addEventListener('mouseleave', leaveTip);
help.addEventListener('blur', leaveTip);
tip.addEventListener('mouseenter', () => clearTimeout(dismissTimer));
tip.addEventListener('mouseleave', leaveTip);
document.addEventListener('keydown', event => { if (event.key === 'Escape') hideTip(); });
window.addEventListener('resize', positionTip);
window.addEventListener('scroll', positionTip, true);
