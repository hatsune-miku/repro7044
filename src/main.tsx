import { createRoot } from 'react-dom/client'

// @ts-ignore
function add(a: number, b) {
  return a + b
}

// eslint-disable-next-line
function sub(a: number, b) {
  return a + b
}

createRoot(document.getElementById('root')!).render(
  <div>{add(11, 22) + sub(11, 22)}</div>
)
