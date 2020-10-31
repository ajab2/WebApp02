import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06f5bc23 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _6c109b3d = () => interopDefault(import('..\\pages\\agencies.vue' /* webpackChunkName: "pages_agencies" */))
const _23f03a47 = () => interopDefault(import('..\\pages\\agriculture.vue' /* webpackChunkName: "pages_agriculture" */))
const _2f26f7b6 = () => interopDefault(import('..\\pages\\become-teacher.vue' /* webpackChunkName: "pages_become-teacher" */))
const _b46f458a = () => interopDefault(import('..\\pages\\climate.vue' /* webpackChunkName: "pages_climate" */))
const _22f413b6 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _0cc45a88 = () => interopDefault(import('..\\pages\\corporates.vue' /* webpackChunkName: "pages_corporates" */))
const _734f0e6a = () => interopDefault(import('..\\pages\\course-details.vue' /* webpackChunkName: "pages_course-details" */))
const _1c9c874e = () => interopDefault(import('..\\pages\\courses.vue' /* webpackChunkName: "pages_courses" */))
const _b327e884 = () => interopDefault(import('..\\pages\\education.vue' /* webpackChunkName: "pages_education" */))
const _4721073c = () => interopDefault(import('..\\pages\\energy.vue' /* webpackChunkName: "pages_energy" */))
const _0c603eac = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages_faq" */))
const _06910638 = () => interopDefault(import('..\\pages\\financials.vue' /* webpackChunkName: "pages_financials" */))
const _bf2f0430 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages_gallery" */))
const _898d7b94 = () => interopDefault(import('..\\pages\\health.vue' /* webpackChunkName: "pages_health" */))
const _a2b22fa0 = () => interopDefault(import('..\\pages\\ict.vue' /* webpackChunkName: "pages_ict" */))
const _2c106e0d = () => interopDefault(import('..\\pages\\index-2.vue' /* webpackChunkName: "pages_index-2" */))
const _2c1e858e = () => interopDefault(import('..\\pages\\index-3.vue' /* webpackChunkName: "pages_index-3" */))
const _c63c3006 = () => interopDefault(import('..\\pages\\infrastructure.vue' /* webpackChunkName: "pages_infrastructure" */))
const _77154e06 = () => interopDefault(import('..\\pages\\initiatives.vue' /* webpackChunkName: "pages_initiatives" */))
const _68714158 = () => interopDefault(import('..\\pages\\manufacturing.vue' /* webpackChunkName: "pages_manufacturing" */))
const _32933fcd = () => interopDefault(import('..\\pages\\markets.vue' /* webpackChunkName: "pages_markets" */))
const _bf9ac0a6 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */))
const _8b0264bc = () => interopDefault(import('..\\pages\\news-details.vue' /* webpackChunkName: "pages_news-details" */))
const _48a4fa32 = () => interopDefault(import('..\\pages\\nonprofit.vue' /* webpackChunkName: "pages_nonprofit" */))
const _69db5ec6 = () => interopDefault(import('..\\pages\\operations.vue' /* webpackChunkName: "pages_operations" */))
const _7d634c5c = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages_pricing" */))
const _67f73d6d = () => interopDefault(import('..\\pages\\teacher-details.vue' /* webpackChunkName: "pages_teacher-details" */))
const _234834aa = () => interopDefault(import('..\\pages\\teachers.vue' /* webpackChunkName: "pages_teachers" */))
const _26ad96e8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _06f5bc23,
    name: "about"
  }, {
    path: "/agencies",
    component: _6c109b3d,
    name: "agencies"
  }, {
    path: "/agriculture",
    component: _23f03a47,
    name: "agriculture"
  }, {
    path: "/become-teacher",
    component: _2f26f7b6,
    name: "become-teacher"
  }, {
    path: "/climate",
    component: _b46f458a,
    name: "climate"
  }, {
    path: "/contact",
    component: _22f413b6,
    name: "contact"
  }, {
    path: "/corporates",
    component: _0cc45a88,
    name: "corporates"
  }, {
    path: "/course-details",
    component: _734f0e6a,
    name: "course-details"
  }, {
    path: "/courses",
    component: _1c9c874e,
    name: "courses"
  }, {
    path: "/education",
    component: _b327e884,
    name: "education"
  }, {
    path: "/energy",
    component: _4721073c,
    name: "energy"
  }, {
    path: "/faq",
    component: _0c603eac,
    name: "faq"
  }, {
    path: "/financials",
    component: _06910638,
    name: "financials"
  }, {
    path: "/gallery",
    component: _bf2f0430,
    name: "gallery"
  }, {
    path: "/health",
    component: _898d7b94,
    name: "health"
  }, {
    path: "/ict",
    component: _a2b22fa0,
    name: "ict"
  }, {
    path: "/index-2",
    component: _2c106e0d,
    name: "index-2"
  }, {
    path: "/index-3",
    component: _2c1e858e,
    name: "index-3"
  }, {
    path: "/infrastructure",
    component: _c63c3006,
    name: "infrastructure"
  }, {
    path: "/initiatives",
    component: _77154e06,
    name: "initiatives"
  }, {
    path: "/manufacturing",
    component: _68714158,
    name: "manufacturing"
  }, {
    path: "/markets",
    component: _32933fcd,
    name: "markets"
  }, {
    path: "/news",
    component: _bf9ac0a6,
    name: "news"
  }, {
    path: "/news-details",
    component: _8b0264bc,
    name: "news-details"
  }, {
    path: "/nonprofit",
    component: _48a4fa32,
    name: "nonprofit"
  }, {
    path: "/operations",
    component: _69db5ec6,
    name: "operations"
  }, {
    path: "/pricing",
    component: _7d634c5c,
    name: "pricing"
  }, {
    path: "/teacher-details",
    component: _67f73d6d,
    name: "teacher-details"
  }, {
    path: "/teachers",
    component: _234834aa,
    name: "teachers"
  }, {
    path: "/",
    component: _26ad96e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
