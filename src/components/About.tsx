import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const features = [
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO certified manufacturing processes ensuring the highest quality standards.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to delivering excellence.',
  },
  {
    icon: Target,
    title: 'Customer Focused',
    description: 'Tailored solutions to meet your specific packaging needs.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation Driven',
    description: 'Continuously improving our products and processes.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-600/10 border border-cyan-500/30 rounded-full text-cyan-400">
              Our Story
            </div>
            <h2 className="mb-6 text-white">About Steel Pack</h2>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Steel Pack has been a leading manufacturer of adhesive tape solutions since 2003. With over 20 years of experience, we've built a reputation for delivering high-quality, durable, and innovative tape products.
            </p>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Our commitment to excellence, customer satisfaction, and environmental responsibility drives everything we do. We work closely with our clients to understand their unique requirements and deliver customized solutions that exceed expectations.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              From small businesses to large industrial enterprises, Steel Pack serves a diverse range of industries including electronics, packaging, construction, and manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-xl hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-600/20"
                >
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="mb-2 text-white">{feature.title}</h4>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}