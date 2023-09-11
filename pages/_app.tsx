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
import ProductCardSample from 'components/ProductCardSample/ProductCardSample'
import Contentcontainer from 'components/Contentcontainer/Contentcontainer'
import SectionHeader from 'components/SectionHeader/SectionHeader'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={MowoDesignSystemLightTheme}>
      <Navbar />
      <Header />
      <SectionHeader />
      <div id="modern-workplace"></div>
      <ModernWorkplace />
      <div id="products"></div>
      <ProductSectionSurfaceHubDevice />
      <ProductSectionSurfaceHubDevice />
      <ProductSectionSurfaceHubDevice />
      <div id="cases"></div>
      <CustomerCases />
      <div id="contact"></div>
      <ContactUs />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
