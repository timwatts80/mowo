import '../styles/globals.css'
import MowoDesignSystemLightTheme from '../MowoDesignSystemLightTheme'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import ModernWorkplace from '../components/ModernWorkplace/ModernWorkplace'
import ProductSectionSurfaceHubDevice from '../components/ProductSectionSurfaceHubDevice/ProductSectionSurfaceHubDevice'
import ReactSimplyCarouselExample from '../components/ReactSimplyCarouselExample/ReactSimplyCarouselExample'
import CustomerCases from 'components/CustomerCases/CustomerCases'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ContactUs from 'components/ContactUs/ContactUs'
import Navbar from 'components/Navbar/Navbar'
import Sidebar from 'components/Sidebar/Sidebar'
import DialogSample from 'components/DialogSample/DialogSample'
import ProductCarouselTemp from 'components/ProductCarouselTemp/ProductCarouselTemp'
import Menulinklist from 'components/Menulinklist/Menulinklist'
import ProductCardList from 'components/ProductCardList/ProductCardList'
import ProductCardNew from 'components/ProductCardNew/ProductCardNew'
import { ProductList } from 'components/ProductList/ProductList'
import { ProductCardListProps } from 'types'
import ProductPageTest from 'components/ProductPageTest/ProductPageTest'


function MyApp({ Component, pageProps }: AppProps) {
    
  return (
    <ThemeProvider theme={MowoDesignSystemLightTheme}>
      <Navbar />
      <Header />
      <ProductCardList />
      <ModernWorkplace />
      <ProductSectionSurfaceHubDevice />
      <CustomerCases />
      <ContactUs />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
