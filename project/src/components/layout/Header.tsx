import React from 'react';
import { User } from '@supabase/supabase-js';
import { NavItems } from '../../types';
import Navigation from './Navigation';
import Logo from './Logo';
import AuthButtons from './AuthButtons';
import MobileMenuButton from './MobileMenuButton';
import UserProfile from './UserProfile';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  handleSectionChange: (section: string) => void;
  navItems: NavItems[];
  user: User | null;
  onLogin: () => void;
  onSignUp: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  handleSectionChange,
  navItems,
  user,
  onLogin,
  onSignUp,
  onLogout,
}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:block animate-fadeIn">
            <Navigation
              navItems={navItems}
              activeSection={activeSection}
              handleSectionChange={handleSectionChange}
            />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <UserProfile user={user} onLogout={onLogout} />
            ) : (
              <AuthButtons onLogin={onLogin} onSignUp={onSignUp} />
            )}
          </div>

          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-slideInRight">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Navigation
              navItems={navItems}
              activeSection={activeSection}
              handleSectionChange={handleSectionChange}
              isMobile={true}
            />
            {user ? (
              <div className="mt-4 px-3">
                <UserProfile user={user} onLogout={onLogout} />
              </div>
            ) : (
              <div className="mt-4 px-3 space-y-2">
                <button
                  onClick={onLogin}
                  className="w-full flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={onSignUp}
                  className="w-full flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;