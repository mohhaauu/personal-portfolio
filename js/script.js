<script>
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(b => b.classList.remove('active'));
      // Add to clicked one
      btn.classList.add('active');

      // Hide all panels
      panels.forEach(panel => panel.classList.remove('active'));

      // Show the selected panel
      const target = btn.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
    });
  });
</script>
