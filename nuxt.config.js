if (process.env.NODE_ENV !== "dev") {
  require("dotenv").config({ path: "./keys/.env" });
} else {
  require("dotenv").config({ path: "./keys/.env.dev" });
}
export default {
  mode: "universal",
  env: process.env,
  head: {
    title: "platform",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [],

  plugins: [
    { src: "~/plugins/clickOutside", ssr: false },
    { src: "~/plugins/chart", ssr: false },
    { src: "~/plugins/range", ssr: false },
    { src: "~/plugins/datepicker", ssr: false },
    { src: "~/plugins/swiper", ssr: false },
    { src: "~/plugins/mask", ssr: false },
    { src: "~/plugins/vuelidate", ssr: false },
    { src: "~/plugins/i18n" }
  ],

  components: ["~/components", { path: "~/components/ui/", prefix: "ui" }],

  buildModules: [],

  router: {
    // middleware: 'i18n',
    prefetchLinks: true,
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  modules: ["@nuxtjs/style-resources", "cookie-universal-nuxt"],

  i18n: {},

  styleResources: {
    scss: [
      "~/assets/css/default/utils/vars.scss",
      "~/assets/css/default/utils/mixins.scss"
    ]
  },

  // generate: {
  //   subFolders: true
  // },
  //
  // target: 'static',

  build: {
    loaders: {
      scss: {
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    }
    // publicPath: './'
  }
};
