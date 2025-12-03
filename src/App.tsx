import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductRange } from './components/ProductRange';
import { About } from './components/About';
import { Infrastructure } from './components/Infrastructure';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductRange />
        <About />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
