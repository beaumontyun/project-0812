import { createRouter, createWebHistory } from 'vue-router'


function loadPage(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`
    );
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage("Home")
  },
  {
    path: '/physical-nfts',
    name: 'PhysicalNFTs',
    component: loadPage("PhysicalNFTs")
  },
  {
    path: '/metaverse-marketing',
    name: 'Metaverse',
    component: loadPage("Metaverse")
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: loadPage("Documentation")
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: loadPage("FAQ")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
