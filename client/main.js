// import './css/main.css'
import './so.css'
/*
import '@fortawesome/fontawesome-free/js/all'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab)

const camera = icon({ prefix: 'fas', iconName: 'camera' })

console.log(camera)
*/
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faNewspaper, faUserCircle, faFutbol } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle, faNewspaper, faUserCircle, faFutbol) 

dom.i2svg()
