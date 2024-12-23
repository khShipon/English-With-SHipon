import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  onLogin: () => void;
  onSignUp: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ onLogin, onSignUp }) => {
  return (
    <>
      <button
        onClick={onLogin}
        className="flex items-center text-gray-500 hover:text-primary hover-scale"
      >
        <LogIn className="h-4 w-4 mr-1" />
        Log in
      </button>
      <button
        onClick={onSignUp}
        className="flex items-center bg-primary hover:bg-primary-dark text-white 
                 px-4 py-2 rounded-full hover-scale transition-colors"
      >
        <UserPlus className="h-4 w-4 mr-1" />
        Sign up
      </button>
    </>
  );
};

export default AuthButtons;