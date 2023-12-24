import dynamic from 'next/dynamic';

import '@/styles/globals.css'
// import Layout from '@/components/layout/Layout'
const Layout = dynamic(import('@/components/layout/Layout'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
