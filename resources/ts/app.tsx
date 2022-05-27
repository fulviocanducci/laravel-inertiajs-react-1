require('./bootstrap')

import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import React from 'react'
import { render } from 'react-dom'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

InertiaProgress.init({ color: '#4B5563' })

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    return render(<App {...props} />, el)
  },
})
