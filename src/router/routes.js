const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')
const Tables = () => import('@/views/Tables')
const Table = () => import('@/views/Table')
const Orders = () => import('@/views/Orders')
const Menu = () => import('@/views/Menu')

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    meta: { requiresAuth: true },
    path: '/',
    component: Home,
    children: [
      {
        path: '/tables',
        alias: '/',
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
