// ===============================
// 🌐 Fetch and Render User Data
// ===============================
async function loadUsers() {
  showLoading();
  try {
    const res = await fetch('/api/users');
    const users = await res.json();
    renderUserTable(users);
  } catch (err) {
    console.error('Failed to load users:', err);
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '<tr><td colspan="4">Error loading users.</td></tr>';
  }
}

function showLoading() {
  const tbody = document.querySelector('#userTable tbody');
  tbody.innerHTML = '<tr><td colspan="4">Loading...</td></tr>';
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[tag]));
}

function renderUserTable(users) {
  const tbody = document.querySelector('#userTable tbody');
  tbody.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${escapeHTML(user.name)}</td>
      <td>${escapeHTML(user.email)}</td>
      <td><span class="status ${escapeHTML(user.status)}">${escapeHTML(user.status)}</span></td>
      <td>
        <button class="btn icon primary" data-user-id="${user.id}">Review</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// ===============================
// 🔍 Search Filter
// ===============================
document.querySelector('#searchInput').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('#userTable tbody tr');

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
});

// ===============================
// 🪟 Modal Handling
// ===============================
function openModal(id) {
  const modal = document.querySelector(`#modal-${id}`);
  if (modal) {
    modal.classList.remove('hidden');
  } else {
    console.warn(`Modal for user ${id} not found.`);
  }
}

function closeModal(id) {
  const modal = document.querySelector(`#modal-${id}`);
  if (modal) modal.classList.add('hidden');
}

// Optional: close modal on background click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      modal.classList.add('hidden');
    }
  });
});

// ===============================
// 📝 Form Submission
// ===============================
document.querySelectorAll('.reviewForm').forEach(form => {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const userId = form.dataset.userId;

    try {
      const res = await fetch(`/api/review/${userId}`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Review submitted!');
        closeModal(userId);
      } else {
        alert('Failed to submit review.');
      }
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  });
});

// ===============================
// 🧩 Event Delegation for Review Buttons
// ===============================
document.querySelector('#userTable').addEventListener('click', e => {
  if (e.target.matches('.btn.icon.primary')) {
    const userId = e.target.dataset.userId;
    openModal(userId);
  }
});

// ===============================
// 🚀 Initialize Dashboard
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});
