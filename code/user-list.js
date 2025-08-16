document.addEventListener('DOMContentLoaded', () => {
  const searchInput   = document.querySelector('.filter-bar input');
  const statusSelect  = document.querySelector('.filter-bar select');
  const tableBody     = document.querySelector('.data-table tbody');
  const applyBtn      = document.querySelector('.filter-bar .btn.secondary');
  const prevBtn       = document.getElementById('prevPage');
  const nextBtn       = document.getElementById('nextPage');
  const pageInfo      = document.getElementById('pageInfo');
  const apiEndpoint   = '/api/users';

  let currentPage = 1;
  const pageSize = 10;

  function showLoading() {
    tableBody.innerHTML = `<tr><td colspan="7">Loading...</td></tr>`;
  }

  function fetchUsers(query = {}) {
    const url = new URL(apiEndpoint, location.origin);
    Object.keys(query).forEach(k => url.searchParams.append(k, query[k]));
    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .catch(err => {
        tableBody.innerHTML = `<tr><td colspan="7">Error loading users</td></tr>`;
        console.error(err);
        return [];
      });
  }

  function renderRows(users) {
    if (!users.length) {
      tableBody.innerHTML = `<tr><td colspan="7">No users found</td></tr>`;
      return;
    }

    tableBody.innerHTML = users
      .map(u => `
        <tr>
          <td>${u.id}</td>
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>${u.joined}</td>
          <td><span class="status ${u.status}">${u.status}</span></td>
          <td>${u.role}</td>
          <td>
            <button class="btn icon">View</button>
            ${u.status === 'pending'
              ? '<button class="btn icon primary">Approve</button>'
              : '<button class="btn icon warning">Deactivate</button>'}
          </td>
        </tr>
      `).join('');
  }

  function updatePageInfo(totalPages) {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  function loadUsers() {
    showLoading();
    fetchUsers({
      q: searchInput.value,
      status: statusSelect.value,
      page: currentPage,
      limit: pageSize
    }).then(data => {
      renderRows(data.users);
      updatePageInfo(data.totalPages);
    });
  }

  applyBtn.addEventListener('click', () => {
    currentPage = 1;
    loadUsers();
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      loadUsers();
    }
  });

  nextBtn.addEventListener('click', () => {
    currentPage++;
    loadUsers();
  });

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentPage = 1;
      loadUsers();
    }, 300);
  });

  // Initial load
  loadUsers();
});
