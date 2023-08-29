import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

import NavigationBar from './NavigationBar';
import CoverImage from './CoverImage';
import HeaderFreelancer from './HeaderFreelancer1';
import CardList from './CardList1';
import Button from './Button1'
import HeaderCustomer from './HeaderCustomer1';
import CustomerCardList from './CustomerCardList'
import EmailBanner from './EmailBanner'
import FooterBanner from './FooterBanner1'
import FooterDevLinks from './FooterDevLinks1';



ReactDOM.render(<div>
  <NavigationBar />
  <CoverImage />
  <HeaderFreelancer />
  <CardList />
  <Button />
  <HeaderCustomer />
  <CustomerCardList />
  <Button />
  <EmailBanner />
  <FooterBanner />
  <FooterDevLinks />


  </div>
  , document.getElementById('root'));