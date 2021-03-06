import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
// createApp(App).mount('#app')

// import "bootstrap/dist/css/bootstrap.css"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// const resolved = this.$router.resolve({
//      name: 'TestingView',
//      params: { id: item.id }
//    })
// resolved.href // '/some-route-name/:id'
