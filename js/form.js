/* form.js — validates contact form, then opens the visitor's email client
   (mailto:) addressed to OZ Creative Agency with subject/body pre-filled
   from what they typed. Shows a success state once the email client opens. */
(function () {
  const submitBtn = document.getElementById('formSubmit');
  if (!submitBtn) return;

  // ── CHANGE THIS to the real inbox you want messages sent to ──
  const DESTINATION_EMAIL = 'ozcreativeagency@gmail.com';

  const fields = {
    name: document.getElementById('fName'),
    contact: document.getElementById('fContact'),
    type: document.getElementById('fType'),
    msg: document.getElementById('fMsg'),
  };
  const formArea = document.getElementById('formArea');
  const successArea = document.getElementById('formSuccess');
  const defaultLabel = submitBtn.innerHTML;

  function buildMailto() {
    const name = fields.name.value.trim();
    const contact = fields.contact.value.trim();
    const type = fields.type.value;
    const msg = fields.msg.value.trim();

    const subject = `[OZ Creative] Project Inquiry — ${name}`;
    const body =
      `Nama / Name: ${name}\n` +
      `Email / Kontak: ${contact}\n` +
      `Kategori Project: ${type}\n` +
      `\n` +
      `Pesan:\n${msg}\n` +
      `\n---\nDikirim dari form contact oz-creative-agency`;

    const params = new URLSearchParams({ subject, body });
    return `mailto:${DESTINATION_EMAIL}?${params.toString().replace(/\+/g, '%20')}`;
  }

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

    // Open the visitor's default mail client addressed to us, pre-filled.
    window.location.href = buildMailto();

    formArea.style.display = 'none';
    successArea.classList.add('show');
  });
})();