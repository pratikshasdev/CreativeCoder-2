import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--grey-light)]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold font-poppins text-[var(--blue-primary)] cursor-link">
              Pratiksha<span className="text-[var(--yellow-accent)]">.</span>Shirsath
            </Link>
            <p className="text-[var(--grey-dark)] text-sm mt-2">Mobile Application Developer</p>
          </div>
          
          <div className="flex items-center">
            <p className="text-[var(--grey-dark)] mr-4">Download my resume:</p>
            <a 
              href="https://drive.google.com/file/d/1U8TUuF__W334d08MdMQGvtSIb2j5UeE2/view?usp=sharing" 
              className="btn-hover-effect inline-flex items-center bg-[var(--blue-primary)] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className='bx bx-download mr-2'></i> Resume
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[var(--grey-light)] text-center text-[var(--grey-dark)] text-sm">
          <p>&copy; {new Date().getFullYear()} Pratiksha Shirsath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
