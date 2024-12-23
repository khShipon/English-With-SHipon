import React from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { User, LogOut } from 'lucide-react';

interface UserProfileProps {
  user: SupabaseUser;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  const fullName = user.user_metadata?.full_name || user.email?.split('@')[0];
  
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <User className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{fullName}</span>
          <span className="text-xs text-gray-500">{user.email}</span>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm"
      >
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserProfile;