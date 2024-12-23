// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import '../src/global.scss'
// import { Provider } from 'react-redux'
// import { store } from './store/index.js'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/global.scss'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
