import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import App from './App'
import './styles.css'

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
    <div class="center">Scroll</div>
  </Suspense>,
  document.getElementById('root')
)
