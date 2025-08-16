// ===============================
// ✉️ Handle Message Form Submission
// ===============================
document.querySelector('.message-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const recipientInput = document.querySelector('#recipient');
  const subjectInput = document.querySelector('#subject');
  const messageInput = document.querySelector('#message');

  const recipient = recipientInput.value;
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  // Clear previous error styles
  subjectInput.classList.remove('error');
  messageInput.classList.remove('error');

  // Validate fields
  if (!subject || !message) {
    if (!subject) subjectInput.classList.add('error');
    if (!message) messageInput.classList.add('error');
    alert('Please fill in both subject and message.');
    return;
  }

  // Simulate sending message (replace with actual API call)
  const status = recipient === 'individual' ? 'Pending 🕓' : 'Delivered ✅';
  const timestamp = new Date().toLocaleString();

  const logEntry = `
    <li>
      <strong>To:</strong> ${formatRecipient(recipient)} |
      <strong>Subject:</strong> ${subject} |
      <strong>Status:</strong> ${status} |
      <em>${timestamp}</em>
    </li>
  `;

  document.querySelector('.sent-log').insertAdjacentHTML('afterbegin', logEntry);

  // Show confirmation toast
  showConfirmationToast('✅ Message sent!');

  // Reset form
  e.target.reset();
});

// ===============================
// 🧾 Format Recipient Label
// ===============================
function formatRecipient(value) {
  switch (value) {
    case 'all': return 'All Users';
    case 'tailoring': return 'Tailoring Guild';
    case 'mentors': return 'Mentors';
    case 'individual': return 'Specific User';
    default: return value;
  }
}

// ===============================
// ✅ Show Confirmation Toast
// ===============================
function showConfirmationToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'confirmation-toast';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
