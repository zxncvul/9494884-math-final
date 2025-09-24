// 📁 mathMode/modules/numaKeypad.js

export function createNumericKeypad() {
  const term = document.getElementById('numa-terminal');
  if (!term) return;

  const keypad = document.createElement('div');
  keypad.id = 'numeric-keypad';

  const layout = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', 'C', '←']
  ];

  layout.forEach(rowKeys => {
    const row = document.createElement('div');
    row.className = 'numa-keypad-row';
    rowKeys.forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'numa-key';
      btn.dataset.key = key;
      btn.textContent = key;
      row.appendChild(btn);
    });
    keypad.appendChild(row);
  });

  const extraRow = document.createElement('div');
  extraRow.className = 'numa-keypad-row';
  [':', '/', '%', '.'].forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'numa-key';
    btn.dataset.key = key;
    btn.textContent = key;
    extraRow.appendChild(btn);
  });
  keypad.appendChild(extraRow);

  term.appendChild(keypad);

  keypad.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    const k = e.target.dataset.key;
    const input = document.querySelector('.answer-input');
    if (!input) return;

    if (k === 'C')      input.value = '';
    else if (k === '←') input.value = input.value.slice(0, -1);
    else                input.value += k;

    input.focus();
    input.dispatchEvent(new Event('input'));
  });
}
