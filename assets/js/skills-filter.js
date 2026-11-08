document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('.skills-list__pill[data-skill]')];
  const results = document.querySelector('.skills-results');
  const empty = document.querySelector('.skills-results-empty');
  if (!results || !empty) return;

  const projects = [...results.querySelectorAll('.project-list-item[data-tools]')];
  const toolsByProject = projects.map(project => JSON.parse(project.dataset.tools) || []);

  function updateResults() {
    const selected = buttons.filter(button => button.getAttribute('aria-pressed') === 'true').map(button => button.dataset.skill);
    let matches = 0;
    projects.forEach((project, index) => {
      const show = selected.length > 0 && selected.every(skill => toolsByProject[index].includes(skill));
      project.hidden = !show;
      if (show) matches += 1;
    });
    results.hidden = selected.length === 0 || matches === 0;
    empty.hidden = selected.length === 0 || matches > 0;
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', button.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    updateResults();
  }));
});
