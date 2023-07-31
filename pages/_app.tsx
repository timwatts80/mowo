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
import ProductList from 'components/ProductList/ProductList'
import ProductBox from 'components/ProductBox/ProductBox'
import ProductCard from 'components/ProductCard/ProductCard'
import ProductCarousel from 'components/ProductCarousel/ProductCarousel'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MowoDesignSystemLightTheme}>
      <Header />
      <ReactSimplyCarouselExample />
      <ModernWorkplace />
      <ProductSectionSurfaceHubDevice />
      <CustomerCases />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
