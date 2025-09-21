socket.on('error', err => {
  const box = document.createElement('div');
  box.className = `toast ${err.level}`;
  box.innerHTML = `<b>${err.type}</b><br>${err.message}<br><small>${err.instanceId}</small>`;
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 6000);
});