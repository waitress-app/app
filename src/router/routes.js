const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: Home
  }
]
