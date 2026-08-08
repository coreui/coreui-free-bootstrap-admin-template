/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template main.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas', 'Roberts', 'Walker']
const departments = ['Engineering', 'Sales', 'Marketing', 'Support', 'Finance', 'People']
const roles = ['Manager', 'Lead', 'Senior', 'Junior', 'Contractor']
const statuses = ['active', 'invited', 'suspended']
const countries = ['Poland', 'Germany', 'France', 'Spain', 'Italy', 'United States', 'United Kingdom']
const cities = ['Warsaw', 'Berlin', 'Paris', 'Madrid', 'Rome', 'New York', 'London']

const badges = { active: 'success', invited: 'info', suspended: 'danger' }

let items = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
  email: `user${i + 1}@example.com`,
  department: departments[i % departments.length],
  role: roles[i % roles.length],
  status: statuses[i % statuses.length],
  salary: 45000 + ((i % 60) * 1500),
  rating: ((i % 9) + 1) / 2,
  projects: (i % 24) + 1,
  country: countries[i % countries.length],
  city: cities[i % cities.length],
  startDate: new Date(2021, i % 12, (i % 28) + 1).toISOString(),
  lastActive: new Date(2026, i % 6, (i % 27) + 1).toISOString(),
  phone: `+1 555 ${String(1000 + (i % 9000))}`
}))

const currency = value => Number(value).toLocaleString('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0
})
const date = value => new Date(value).toLocaleDateString('en-US')

const element = document.getElementById('dataGrid')

const dataGrid = new coreui.DataGrid(element, {
  columns: [
    {
      key: 'id', label: '#', width: 72, hideable: false
    },
    {
      key: 'name', label: 'Name', width: 180, editable: true, editValidate: value => (value === '' ? 'Name is required' : true)
    },
    { key: 'email', label: 'Email', width: 220 },
    {
      key: 'department', label: 'Department', width: 150, filterType: 'select', editable: { type: 'select', options: departments }
    },
    {
      key: 'role', label: 'Role', width: 130, filterType: 'select', editable: { type: 'select', options: roles }
    },
    {
      key: 'status',
      label: 'Status',
      width: 130,
      filterType: 'select',
      editable: { type: 'select', options: statuses },
      render(item) {
        return `<span class="badge text-bg-${badges[item.status]}">${item.status}</span>`
      }
    },
    {
      key: 'salary', label: 'Salary', width: 130, filterType: 'number', formatter: currency, editable: { type: 'number', min: 0 }
    },
    {
      key: 'rating', label: 'Rating', width: 110, filterType: 'number'
    },
    {
      key: 'projects', label: 'Projects', width: 120, filterType: 'number'
    },
    {
      key: 'country', label: 'Country', width: 160, filterType: 'select'
    },
    { key: 'city', label: 'City', width: 150 },
    {
      key: 'startDate', label: 'Started', width: 140, filterType: 'date', formatter: date
    },
    {
      key: 'lastActive', label: 'Last active', width: 140, filterType: 'date', formatter: date
    },
    { key: 'phone', label: 'Phone', width: 160 }
  ],
  items,
  itemKey: item => String(item.id),
  columnFilters: true,
  columnMenu: true,
  columnOrder: true,
  columnPinning: { start: ['id'] },
  columnSizing: true,
  columnVisibility: {
    projects: false, city: false, lastActive: false, phone: false
  },
  rowSelection: true,
  rowOrder: true,
  editing: true,
  sorting: { multiple: true },
  pagination: { pageSize: 20, pageSizeOptions: [10, 20, 50, 100] },
  toolbar: {
    columns: true,
    export: { filename: 'employees.csv' },
    search: true
  }
})

// The grid never mutates items - apply committed changes yourself.
element.addEventListener('rowOrderChange.coreui.data-grid', event => {
  items = event.items
  dataGrid.setItems(items)
})

element.addEventListener('editCommit.coreui.data-grid', event => {
  items = items.map(row => (row === event.item ? { ...row, [event.columnId]: event.value } : row))
  dataGrid.setItems(items)
});

// 100,000 rows, virtualized
(() => {
  const virtualElement = document.getElementById('dataGridVirtual')
  const virtualFirstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
  const virtualLastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
  const virtualRoles = ['admin', 'editor', 'viewer']
  const virtualStatuses = ['active', 'pending', 'banned']
  const virtualItems = Array.from({ length: 100000 }, (_, i) => {
    const name = `${virtualFirstNames[i % virtualFirstNames.length]} ${virtualLastNames[i % virtualLastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: virtualRoles[i % virtualRoles.length],
      status: virtualStatuses[i % virtualStatuses.length],
      score: (i * 37) % 1000
    }
  })

  const start = performance.now()
  // eslint-disable-next-line no-new
  new coreui.DataGrid(virtualElement, {
    columns: [
      { key: 'id', label: '#', width: 90 },
      { key: 'name', label: 'Name', width: 200 },
      { key: 'email', label: 'Email', width: 260 },
      { key: 'role', label: 'Role', width: 110 },
      { key: 'status', label: 'Status', width: 110 },
      { key: 'score', label: 'Score', width: 90 }
    ],
    items: virtualItems,
    itemKey: item => String(item.id),
    columnFilters: true,
    globalFilter: true,
    rowSelection: true
  })

  const meta = document.getElementById('dataGridVirtualMeta')
  if (meta) {
    meta.textContent = `100,000 rows initialized in ${Math.round(performance.now() - start)} ms`
  }
})()
