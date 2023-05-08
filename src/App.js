import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './modules/Home';
import Footer from './components/Footer';
import ProductPage from './modules/ProductPage';
import About from './modules/About';
import { Category } from './modules/Category';
import ShoppingCart from './modules/ShoppingCart';
import Context from './modules/Context';
import ErrorPage from './modules/ErrorPage';
import Products from './modules/Products';
import CategoryPage from './modules/CategoryPage';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ProductPage' element={<Category />} />
            <Route path='/ProductPage/:id' element={<ProductPage />} />
            <Route path='/About' element={<About />} />
            <Route path='/Context' element={<Context />} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Products/category/:category' element={<CategoryPage />} />
            <Route path='*' element={<ErrorPage title='Page not found' des='Sorry, we couldn&apos:t find the page you&apos;re looking for.' buttonOne='Take me Back' buttonTwo='Go Home' />} />
            <Route path='/ShoppingCard' element={<ShoppingCart />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
