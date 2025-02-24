// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    'nuxt-mdi',
  ],
  devServer: {
    port: 3003,
    host: '0.0.0.0',
  },
  // Generate static site
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  hooks: {
    'nitro:build:public-assets': async () => {
      console.log('nitro:build:public-assets hook is running')
      const fs = await import('node:fs')
      const path = await import('node:path')
      const filesToDelete = ['200.html', '404.html']
      
      filesToDelete.forEach(file => {
        const filePath = path.join(process.cwd(), '.output', 'public', file)
        console.log(`Checking file: ${filePath}`)
        if (fs.existsSync(filePath)) {
          try {
            fs.unlinkSync(filePath)
            console.log(`Successfully deleted ${file}`)
          } catch (error) {
            console.error(`Error deleting ${file}:`, error)
          }
        } else {
          console.log(`File not found: ${file}`)
        }
      })
    }
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    forced: true,
  },
  app: {
    cdnURL: './',
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap'
        }
      ],
      script: [
        {
          src: '/libs/iframe-resizer/js/iframeResizer.contentWindow.min.js',
          defer: true
        }
      ]
    }
  },
})
