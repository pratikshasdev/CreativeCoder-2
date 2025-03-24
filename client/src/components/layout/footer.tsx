import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold font-poppins text-primary cursor-link">
              Jane<span className="text-secondary">.</span>Doe
            </Link>
            <p className="text-gray-600 text-sm mt-2">UI/UX Designer & Frontend Developer</p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 mr-4">Download my resume:</p>
            <a 
              href="/resume.pdf" 
              className="btn-hover-effect inline-flex items-center bg-gray-800 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className='bx bx-download mr-2'></i> Resume
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
