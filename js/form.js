/* form.js — validates the contact form, then submits it to Web3Forms
   (a free form-delivery API — no backend needed). The message lands
   directly in the destination inbox; no email client popup required.
   Docs: https://docs.web3forms.com */
(function () {
  const submitBtn = document.getElementById('formSubmit');
  if (!submitBtn) return;

  // ── CHANGE THIS to your own Web3Forms access key ──
  // Get a free key in ~10 seconds at https://web3forms.com (no signup
  // required to generate one, just enter the destination email).
  const WEB3FORMS_ACCESS_KEY = '1c6492c9-c075-41a1-830f-cea7c01230a3';
  const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

  const fields = {
    name: document.getElementById('fName'),
    contact: document.getElementById('fContact'),
    type: document.getElementById('fType'),
    msg: document.getElementById('fMsg'),
  };
  const formArea = document.getElementById('formArea');
  const successArea = document.getElementById('formSuccess');
  const errorArea = document.getElementById('formError');
  const defaultLabel = submitBtn.innerHTML;

  function flashInvalid() {
    submitBtn.textContent = 'Lengkapi semua field dulu';
    submitBtn.style.background = 'var(--rust)';
    submitBtn.style.borderColor = 'var(--rust)';
    setTimeout(() => {
      submitBtn.innerHTML = defaultLabel;
      submitBtn.style.background = '';
      submitBtn.style.borderColor = '';
    }, 1900);
  }

  function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    submitBtn.style.opacity = isLoading ? '0.6' : '1';
    submitBtn.style.cursor = isLoading ? 'wait' : 'pointer';
    submitBtn.textContent = isLoading ? 'mengirim…' : defaultLabel;
    if (!isLoading) submitBtn.innerHTML = defaultLabel;
  }

  submitBtn.addEventListener('click', async () => {
    const empty = Object.values(fields).some((el) => !el.value.trim());
    if (empty) { flashInvalid(); return; }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `[OZ Creative] Project Inquiry — ${fields.name.value.trim()}`,
      from_name: 'OZ Creative Agency — Website',
      name: fields.name.value.trim(),
      contact: fields.contact.value.trim(),
      category: fields.type.value,
      message: fields.msg.value.trim(),
    };

    setLoading(true);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      setLoading(false);

      if (data.success) {
        formArea.style.display = 'none';
        successArea.classList.add('show');
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setLoading(false);
      if (errorArea) {
        errorArea.classList.add('show');
        setTimeout(() => errorArea.classList.remove('show'), 5000);
      }
      console.error('Web3Forms submission error:', err);
    }
  });
})();