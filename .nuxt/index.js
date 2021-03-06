import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"kipso","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Kipso - Vue Nuxt Online Education Learning & LMS Template"}],"link":[{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Fassets\u002Fimages\u002Ffavicons\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Fassets\u002Fimages\u002Ffavicons\u002Ffavicon-16x16.png"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fanimate.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fowl.carousel.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fowl.theme.default.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fplugins\u002Ffontawesome-free-5.11.2-web\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fplugins\u002Fkipso-icons\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fmagnific-popup.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fvegas.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fresponsive.css"}],"script":[{"src":"\u002Fassets\u002Fjs\u002Fjquery.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fbootstrap.bundle.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fwaypoints.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fowl.carousel.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fjquery.counterup.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002FTweenMax.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fwow.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fjquery.magnific-popup.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fcountdown.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fvegas.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fjquery.validate.min.js","body":true},{"src":"\u002Fassets\u002Fjs\u002Fjquery.ajaxchimp.min.js","body":true}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  // Plugin execution

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
