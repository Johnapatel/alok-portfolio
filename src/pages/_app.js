import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import { ContactProvider } from '@/context/ContactContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <div className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <ContactProvider>
        <Layout>
          <AnimatePresence mode="wait">
            <div key={router.asPath} className="w-full min-h-screen">
              <TransitionEffect />
              <Component {...pageProps} />
            </div>
          </AnimatePresence>
        </Layout>
      </ContactProvider>
    </div>
  )
}
