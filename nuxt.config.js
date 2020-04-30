export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Shape Plus',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "SHAPE+ è un plug in di gestione dell'anagrafica materiali che semplifica la raccolta dei dati integrandosi in modo pervasivo, e non invasivo, con il gestionale SAP®.\n" +
          "L'applicazione di regole permette di estendere i controlli e validare l'intero processo di lavoro."
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'sap, shape plus, IT, applicazioni, anagrafiche SAP, gestionali, software, SAP, ABAP, soluzione dati, gestione dati, analisi dati, open source, web application'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'ESC Enterprise Software Consulting srl'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'CES2huMqJSSTMVeZkv2_MZH0oY2peCpBxPVHuPNrdbc'
      },
      { 'http-equiv': 'Content-Language', content: 'IT' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
      }
    ],
    script: [
      {
        src:
          'https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver',
        body: true
      },
      {
        hid: 'iubendascript',
        src: '/iubenda.js',
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        hid: 'iubenda',
        src: '//cdn.iubenda.com/cs/iubenda_cs.js',
        charset: 'utf-8',
        defer: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-fontawesome',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-128979501-2',
        dev: false
      }
    ],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  sitemap: {
    hostname: 'https://shape-plus.it',
    gzip: true
  }
}
