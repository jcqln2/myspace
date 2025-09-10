function handleCommand(event) {
  if (event.key === 'Enter') {
    const input = event.target.value.trim().toLowerCase();
    const outputDiv = document.createElement('div');
    outputDiv.className = 'output';
    if (input === 'help') {
      outputDiv.textContent = 'Available commands: ls (list projects), contact (contact info), clear (clear screen)';
    } else if (input === 'ls') {
      outputDiv.textContent = 'smartcontracts  ParrotCraft  shapeEscape  ShapeEscapeTS  PythonScripts  RustyShapeEscape';
    } else if (input === 'contact') {
      outputDiv.innerHTML = 'Find me on <a href="https://github.com/jcqln2">GitHub</a> or reach out via GitHub issues.';
    } else if (input === 'clear') {
      document.querySelector('.terminal').innerHTML = '<div class="section"><span class="prompt">$</span> <input type="text" placeholder="Type \'help\' for commands..." onkeydown="handleCommand(event)"></div>';
      return;
    } else {
      outputDiv.textContent = `Command not found: ${input}. Type 'help' for available commands.`;
    }
    event.target.parentElement.insertBefore(outputDiv, event.target);
    event.target.value = '';
  }
}