document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('.skills-list__pill[data-skill]')];
  const results = document.querySelector('.skills-results');
  const empty = document.querySelector('.skills-results-empty');
  const prompt = document.querySelector('.skills-prompt');
  const clear = document.querySelector('.skills-clear');
  if (!results || !empty || !prompt || !clear) return;

  const projects = [...results.querySelectorAll('.project-list-item[data-tools]')];
  const toolsByProject = projects.map(project => JSON.parse(project.dataset.tools) || []);

  function updateResults() {
    const selected = buttons.filter(button => button.getAttribute('aria-pressed') === 'true').map(button => button.dataset.skill);
    buttons.forEach(button => {
      const required = selected.includes(button.dataset.skill) ? selected : [...selected, button.dataset.skill];
      const count = toolsByProject.filter(tools => required.every(skill => tools.includes(skill))).length;
      const label = button.querySelector('.skills-list__count');
      label.textContent = count;
      label.setAttribute('aria-label', `${count} projects`);
      label.hidden = selected.length === 0 && count === 0;
    });
    let matches = 0;
    projects.forEach((project, index) => {
      const show = selected.length > 0 && selected.every(skill => toolsByProject[index].includes(skill));
      project.hidden = !show;
      if (show) matches += 1;
    });
    results.hidden = selected.length === 0 || matches === 0;
    empty.hidden = selected.length === 0 || matches > 0;
    prompt.hidden = selected.length > 0;
    clear.hidden = selected.length === 0;
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', button.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    updateResults();
  }));
  clear.addEventListener('click', () => {
    buttons.forEach(button => button.setAttribute('aria-pressed', 'false'));
    updateResults();
  });
});
