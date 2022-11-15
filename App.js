import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateSellerComponent from './components/CreateSellerComponent';
import LoginSellerComponent from './components/LoginSellerComponent';
import UpdateProductComponent from './components/UpdateProductComponent';



function App() {
  return (
    <div>
            <Router forceRefresh={true}>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route exact path = "/" component = {CreateSellerComponent}></Route>
                          <Route path = "/sellers" component = {CreateSellerComponent}></Route>
                          <Route path = "/loginsellers" component = {LoginSellerComponent}></Route>
                          <Route exact path = "/products" component = {ListProductComponent}></Route>
                          <Route exact path = "/add-product/" component = {CreateProductComponent}></Route>
                          <Route exact path = "/update-product/:id" component = {UpdateProductComponent}></Route>
                         
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
      
  );
}

export default App;
