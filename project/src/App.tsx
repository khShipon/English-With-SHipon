import { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ContentSection from './components/content/ContentSection';
import CommentForm from './components/comments/CommentForm';
import CommentList from './components/comments/CommentList';
import AuthModal from './components/auth/AuthModal';
import HeroSection from './components/ui/HeroSection';
import FeatureSection from './components/ui/FeatureSection';
import Footer from './components/layout/footer/Footer';
import { navItems } from './constants/navigation';
import { Comment, FormData } from './types';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [comments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [error] = useState('');
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'signup';
  }>({
    isOpen: false,
    mode: 'login',
  });

  const handleLogout = async () => {
    try {
      await signOut();
      setAuthModal({ isOpen: false, mode: 'login' });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        handleSectionChange={setActiveSection}
        navItems={navItems}
        user={user}
        onLogin={() => setAuthModal({ isOpen: true, mode: 'login' })}
        onSignUp={() => setAuthModal({ isOpen: true, mode: 'signup' })}
        onLogout={handleLogout}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'home' ? (
          <>
            <HeroSection />
            <FeatureSection />
          </>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar
              navItems={navItems}
              activeSection={activeSection}
              handleSectionChange={setActiveSection}
            />
            <div className="flex-1">
              <ContentSection activeSection={activeSection} />
              <div className="mt-8">
                <CommentForm
                  formData={formData}
                  error={error}
                  setFormData={setFormData}
                  handleSubmit={() => {}}
                />
                <CommentList comments={comments} />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onToggleMode={() =>
          setAuthModal({
            ...authModal,
            mode: authModal.mode === 'login' ? 'signup' : 'login',
          })
        }
      />
    </div>
  );
};

export default App;