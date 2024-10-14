import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Products from './components/Products'
import ProductPage from './components/ProductPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:id' element={<ProductPage />} />
          <Route path='contacts' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
