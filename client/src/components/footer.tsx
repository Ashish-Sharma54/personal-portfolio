import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Alex Chen</div>
          <p className="text-slate-400 mb-8">Full Stack Developer & UI/UX Designer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
