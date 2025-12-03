import { Package, Shield, Layers, Box } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const products = [
  {
    icon: Package,
    title: 'Self Adhesive Tapes',
    description: 'High-quality self-adhesive tapes for various industrial and commercial applications.',
  },
  {
    icon: Box,
    title: 'Stereo Mounting Tape',
    description: 'Strong double-sided mounting tapes perfect for securing stereo systems and electronics.',
  },
  {
    icon: Layers,
    title: 'BOPP Tape',
    description: 'Biaxially Oriented Polypropylene tapes offering excellent strength and clarity for packaging.',
  },
  {
    icon: Shield,
    title: 'Red PVC Tape',
    description: 'Durable electrical insulation tape with superior adhesion and weather resistance.',
  },
];

export function ProductRange() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="products" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-600/10 border border-cyan-500/30 rounded-full text-cyan-400">
            What We Offer
          </div>
          <h2 className="mb-4 text-white">Our Product Range</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of adhesive tape products designed to meet the highest industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-600/20 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="mb-2 text-white">{product.title}</h3>
                <p className="text-slate-400">{product.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763926025678-95d196d0ab28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHByb2R1Y3RzJTIwbWV0YWx8ZW58MXx8fHwxNzY0NDQxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Steel products"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}