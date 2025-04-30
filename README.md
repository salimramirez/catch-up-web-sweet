# Guia Vue para PC1

por cada bounded front end:
- components
- models/model
- services

Para componentes:
-> Poner nombre seguido de ".component.vue"

para pc:
- i18n
- i11y

#### GUIA

- En terminal

```
npm create vite
```

-> Elegir nombre

-> Elegir vue

-> Elegir javascript

- Abrimos webstorm

````
npm install (UPC0000)
npm fund
npm run dev
````

#### INSTALAR DEPENDENCIAS:

````
npm install primevue primeicons
npm install @primevue/themes
npm install primeflex
npm install axios
npm install vue-i18n
````

- Crear carpeta archivos:

src/locales/en.json

src/locales/es.json

EJ:
```json
{
  "hello": "¡Hola i18n!",
  "welcome": "¡Bienvenido!"
}
```

- Configurar i18n.js:

```javascript
import en from './locales/en.json';
import es from './locales/es.json';

import { createI18n } from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    globalInjection: true,
    messages: {en, es}
})

export default i18n;
```

- Configurar main.js:

```javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import i18n from './i18n.js'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import {
    Avatar, Button, Card, Drawer, Image,
    InputText, Menu, Menubar, SelectButton,
    Toolbar, Tooltip
} from 'primevue'

const app = createApp(App)
app
    .use(PrimeVue, { ripple: true, theme: { preset: Aura }})
    .component('pv-button', Button)
    .component('pv-input-text', InputText)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-tooltip', Tooltip)
    .component('pv-image', Image)
    .use(i18n)
    .mount('#app')

```

- Borrar la carpeta "components"

- Crear el modelo/entity (name.entity.js)

- Crear el assembler del entity (name.assembler.js)

- Creamos las variables de entorno en la raiz (.env.development y .env.production)

```markdown
VITE_BASE_URL=https://api.tvmaze.com
VITE_EPISODES_ENDPOINT_PATH=/shows/1/episodes
```

- Crear el servicio que llama a la api (name-api.service.js)

- Crear el componente del item con Options API (name-item.component.vue)

- Crear el component del list con Options API (name-list.component.vue)

- Actualizar App.vue

- Creamos el toolbar

- Creamos el footer

- Creamos el language switcher
  
- Actualizar App.vue

