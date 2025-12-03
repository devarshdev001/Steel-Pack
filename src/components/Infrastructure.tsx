import { Factory, Cog, Truck, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const facilities = [
  {
    icon: Factory,
    title: 'Modern Manufacturing',
    description: 'State-of-the-art production facilities spanning over 50,000 sq ft.',
  },
  {
    icon: Cog,
    title: 'Advanced Machinery',
    description: 'Cutting-edge equipment for precision manufacturing and quality control.',
  },
  {
    icon: Truck,
    title: 'Logistics Network',
    description: 'Efficient distribution system ensuring timely delivery across the region.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Comprehensive testing and inspection at every stage of production.',
  },
];

export function Infrastructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="infrastructure" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-600/10 border border-cyan-500/30 rounded-full text-cyan-400">
            Our Capabilities
          </div>
          <h2 className="mb-4 text-white">Our Infrastructure</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our world-class infrastructure enables us to deliver exceptional products with consistency and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 h-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1684695749267-233af13276d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2NDQzNDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Industrial warehouse"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-600/20"
                >
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="mb-2 text-white">{facility.title}</h4>
                  <p className="text-slate-400">{facility.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="mb-2 text-4xl md:text-5xl">50,000+</div>
              <p className="text-cyan-100">Sq Ft Facility</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="mb-2 text-4xl md:text-5xl">500+</div>
              <p className="text-cyan-100">Products Daily</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="mb-2 text-4xl md:text-5xl">20+</div>
              <p className="text-cyan-100">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}