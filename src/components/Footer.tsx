export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-cyan-500">Steel Pack</h3>
            <p className="text-slate-400 mt-2">Premium Adhesive Tape Solutions</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Steel Pack. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}