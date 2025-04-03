import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import ProductList from './Pages/ProductList';
import Footer from './components/Footer';
import ProductFilter from './Pages/ProductFilter';
import { useDispatch } from 'react-redux';
import { fetchAuthsData } from './redux/slices/authSlice';

function App() {

let dispatch=useDispatch();

  // let filterProducts = products.filter((product) =>
  //   product.name.includes(searcQuery.toLowerCase()) ||
  //   product.category.includes(searcQuery.toLowerCase()) ||
  //   product.id.includes(searcQuery.toLowerCase())
  // );

  return (
    <>
      <Header />
      <ProductList />
      <Footer className="mt-5" />
    </>
  );
}

export default App;
