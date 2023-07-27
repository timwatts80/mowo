import '../styles/globals.css'
import MowoDesignSystemLightTheme from '../MowoDesignSystemLightTheme'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import ModernWorkplace from '../components/ModernWorkplace/ModernWorkplace'
import ProductSectionSurfaceHubDevice from '../components/ProductSectionSurfaceHubDevice/ProductSectionSurfaceHubDevice'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={MowoDesignSystemLightTheme}>
      <Header />
      <ModernWorkplace />
      <ProductSectionSurfaceHubDevice />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
