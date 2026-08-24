import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-full h-full inline-block z-0 bg-light p-32 pt-0 dark:bg-dark">
        {children}
      </main>
      <Footer />
    </>
  );
}
