const Login = () => import('@/views/Login')
const Logout = () => import('@/views/Logout')
const Home = () => import('@/views/Home')
const Tables = () => import('@/views/Tables')
const Table = () => import('@/views/Table')
const Orders = () => import('@/views/Orders')
const Menu = () => import('@/views/Menu')

export default [
  {
    path: '/login',
    alias: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    meta: { requiresAuth: true },
    path: '/app',
    component: Home,
    children: [
      {
        path: '/tables',
        // alias: '/',
        name: 'tables-list',
        component: Tables
      },
      {
        path: '/orders',
        name: 'orders-list',
        component: Orders
      },
      {
        path: '/menu',
        name: 'menu',
        component: Menu
      }
    ]
  },
  {
    path: '/table/:id',
    name: 'table',
    meta: { requiresAuth: true },
    component: Table

  },
  {
    path: '/table',
    redirect: { name: 'tables-list' }
  }
]
