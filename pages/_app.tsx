import '../styles/globals.css'
import MowoDesignSystemLightTheme from '../MowoDesignSystemLightTheme'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import ModernWorkplace from '../components/ModernWorkplace/ModernWorkplace'
import ProductSectionSurfaceHubDevice from '../components/ProductSectionSurfaceHubDevice/ProductSectionSurfaceHubDevice'
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
import ProductPageTest from 'components/ProductPageTest/ProductPageTest'
import ProductCard from 'components/ProductCard/ProductCard'
import CarouselTest from 'components/ClientCarousel/ClientCarousel'
import ProductThumbCarousel from 'components/ProductThumbCarousel/ProductThumbCarousel'
import image1 from '../public/assets/images/1.png'



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={MowoDesignSystemLightTheme}>
      <Navbar />
      <Header />
      <div id="modern-workplace"></div>
      <ModernWorkplace />
      <div id="products"></div>
      <ProductSectionSurfaceHubDevice/>
      <div id="cases"></div>
      <CustomerCases />
      <div id="contact"></div>
      <ContactUs />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
