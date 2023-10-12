
import { Home, Search, Tools, Model } from '~/pages'
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/tools', component: Tools },
  { path: '/model/:slug', component: Model }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
