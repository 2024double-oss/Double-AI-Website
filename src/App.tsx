import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Play, Mail, Twitter } from 'lucide-react';

type Page = 'home' | 'about' | 'experience' | 'contact';

interface VideoWork {
  title: string;
  url: string;
  type: 'shortform' | 'longform' | 'highlight';
}

const works: VideoWork[] = [
  {
    title: "Fruity Short-Form Trial Reel",
    url: "https://x.com/VisualsByDouble/status/1948354589121474852",
    type: 'Shortform'
  },
  {
    title: "Valify Video (Outdated)",
    url: "https://youtube.com/embed/NFPkEvrvOq0",
    type: 'Longform'
  },
  {
    title: "Preview for @FruityINC (Seryx Style)",
    url: "https://x.com/VisualsByDouble/status/1912659231485964470",
    type: 'Fortnite Highlight'
  }
];

const experienceWorks = {
  shortform: [
    {
      title: "Fruity Short-Form Trial Video",
      url: "https://x.com/VisualsByDouble/status/1948354589121474852",
      embed: "https://x.com/VisualsByDouble/status/1948354589121474852"
    },
    {
      title: "WLG Esports Minimal Editing Short",
      url: "https://youtube.com/shorts/drSKuO0PwgQ",
      embed: "https://www.youtube.com/embed/drSKuO0PwgQ"
    },
    {
      title: "Coming Soon",
      url: "",
      embed: ""
    }
  ],
  longform: [
    {
      title: "WLG Esports Vlog (Minimal Edit)",
      url: "https://www.youtube.com/watch?v=fDumiklliks",
      embed: "https://www.youtube.com/embed/fDumiklliks"
    },
    {
      title: "Valify Video (Outdated)",
      url: "https://youtu.be/watch?v=NFPkEvrvOq0",
      embed: "https://www.youtube.com/embed/NFPkEvrvOq0"
    },
    {
      title: "Coming Soon",
      url: "",
      embed: ""
    }
  ],
  highlights: [
    {
      title: "Preview for @scoutfnr / @FruityINC (Seryx Style)",
      url: "https://x.com/VisualsByDouble/status/1912659231485964470",
      embed: "https://x.com/VisualsByDouble/status/1912659231485964470"
    },
    {
      title: "Preview for @Zeroxakos (Seryx Style)",
      url: "https://x.com/VisualsByDouble/status/1911037832413536746",
      embed: "https://x.com/VisualsByDouble/status/1911037832413536746"
    },
    {
      title: "Preview for @SNMeSportsggs / @VaxotiaFN",
      url: "https://x.com/VisualsByDouble/status/1901332637161275776",
      embed: "https://x.com/VisualsByDouble/status/1901332637161275776"
    }
  ]
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigation = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'about' as Page, label: 'About Me' },
    { id: 'experience' as Page, label: 'Experience' },
    { id: 'contact' as Page, label: 'Hire Me' },
  ];

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900/95 border-gray-800' 
        : 'bg-white/95 border-gray-200'
    } backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div onClick={() => setCurrentPage('home')} className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            DoubleVisuals
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? isDarkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="pt-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? isDarkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );

  const Footer = () => (
    <footer className={`border-t transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-800 text-gray-300' 
        : 'bg-white border-gray-200 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-4">
              DoubleVisuals
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Professional video editing and visual effects services
            </p>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h3>
            <div className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`block text-sm transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/VisualsByDouble"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? 'bg-gray-800 text-blue-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-blue-500 hover:bg-gray-200'
                }`}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:doublemanagementgr@gmail.com"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? 'bg-gray-800 text-teal-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-teal-500 hover:bg-gray-200'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t text-center text-sm ${
          isDarkMode 
            ? 'border-gray-800 text-gray-400' 
            : 'border-gray-200 text-gray-500'
        }`}>
          Copyright Double© All rights reserved.
        </div>
      </div>
    </footer>
  );

  const VideoEmbed = ({ url, title, className = "" }: { url: string; title: string; className?: string }) => {
    if (!url) {
      return (
        <div className={`aspect-video rounded-xl border-2 border-dashed flex items-center justify-center ${
          isDarkMode 
            ? 'border-gray-700 bg-gray-800 text-gray-400' 
            : 'border-gray-300 bg-gray-100 text-gray-500'
        } ${className}`}>
          <div className="text-center">
            <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="font-medium">Coming Soon</p>
          </div>
        </div>
      );
    }

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.includes('youtube.com/shorts/')
          ? url.split('shorts/')[1]?.split('?')[0]
          : url.split('v=')[1]?.split('&')[0];
      
      return (
        <div className={`aspect-video rounded-xl overflow-hidden shadow-lg ${className}`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    }

    if (url.includes('x.com') || url.includes('twitter.com')) {
      return (
        <div className={`aspect-video rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center ${className}`}>
          <div className="text-center text-white">
            <Play className="w-12 h-12 mx-auto mb-2" />
            <p className="font-medium mb-2">{title}</p>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              View on X
            </a>
          </div>
        </div>
      );
    }

    return null;
  };

  // ... HomePage, AboutPage, ExperiencePage, ContactPage (same as last version)
  // The only change: in ExperiencePage, titles are now <a href={work.url}> links

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'experience': return <ExperiencePage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    } ${
      hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <Header />
      <main className="transition-all duration-300">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
