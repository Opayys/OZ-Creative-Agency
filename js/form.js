/* form.js — basic client-side validation + success state swap for contact form */
(function () {
  const submitBtn = document.getElementById('formSubmit');
  if (!submitBtn) return;

  const fields = {
    name: document.getElementById('fName'),
    contact: document.getElementById('fContact'),
    type: document.getElementById('fType'),
    msg: document.getElementById('fMsg'),
  };
  const formArea = document.getElementById('formArea');
  const successArea = document.getElementById('formSuccess');
  const defaultLabel = submitBtn.innerHTML;

  submitBtn.addEventListener('click', () => {
    const empty = Object.values(fields).some((el) => !el.value.trim());

    if (empty) {
      submitBtn.textContent = 'Lengkapi semua field dulu';
      submitBtn.style.background = 'var(--rust)';
      submitBtn.style.borderColor = 'var(--rust)';
      setTimeout(() => {
        submitBtn.innerHTML = defaultLabel;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
      }, 1900);
      return;
    }

    formArea.style.display = 'none';
    successArea.classList.add('show');
  });
})();