'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { User, Letter, Contact } from '@/types/user';
import { sampleUser } from '@/data/sampleUser';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updateLetters: (letters: Letter[]) => void;
  updateContacts: (contacts: Contact[]) => void;
  toggleContactFavorite: (contactId: number) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    const loadUser = async () => {
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser(sampleUser);
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const updateLetters = (letters: Letter[]) => {
    if (user) {
      setUser({ ...user, letters });
    }
  };

  const updateContacts = (contacts: Contact[]) => {
    if (user) {
      setUser({ ...user, contacts });
    }
  };

  const toggleContactFavorite = (contactId: number) => {
    if (user) {
      const updatedContacts = user.contacts.map(contact =>
        contact.id === contactId
          ? { ...contact, isFavorite: !contact.isFavorite }
          : contact
      );
      setUser({ ...user, contacts: updatedContacts });
    }
  };

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        setUser, 
        updateLetters, 
        updateContacts, 
        toggleContactFavorite,
        isLoading 
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 