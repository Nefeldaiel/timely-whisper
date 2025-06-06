'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { APP_NAME } from '@/constants/app';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoPersonOutline, IoMailOutline } from 'react-icons/io5';
import { useUser } from '@/context/UserContext';
import { sampleUser } from '@/data/sampleUser';
import { LegalDialog } from '@/components/LegalDialog';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser();
  const [legalDialog, setLegalDialog] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' }>({
    isOpen: false,
    type: 'terms',
  });

  const handleGuestLogin = async () => {
    setIsLoading(true);
    try {
      // Simulate login delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Set the sample user data
      setUser(sampleUser);
      router.push('/list');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const openLegalDialog = (type: 'terms' | 'privacy') => {
    setLegalDialog({ isOpen: true, type });
  };

  const closeLegalDialog = () => {
    setLegalDialog(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <Image
              src="/mail-icon.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to {APP_NAME}
          </h1>
          <p className="text-gray-600">
            Please sign in to continue
          </p>
        </div>

        {/* Login Options */}
        <div className="space-y-4">
          {/* Social Login Buttons */}
          <button
            disabled
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed opacity-50"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-gray-700">Continue with Google (Coming Soon)</span>
          </button>

          <button
            disabled
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed opacity-50"
          >
            <FaFacebook className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">Continue with Facebook (Coming Soon)</span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            disabled
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed opacity-50"
          >
            <IoMailOutline className="w-5 h-5" />
            <span>Create New Account (Coming Soon)</span>
          </button>

          {/* Guest Login */}
          <button
            onClick={handleGuestLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <IoPersonOutline className="w-5 h-5" />
            <span className="text-gray-700">
              {isLoading ? 'Logging in...' : 'Continue as Guest'}
            </span>
          </button>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-sm text-gray-500 mt-8">
          By continuing, you agree to our{' '}
          <button
            onClick={() => openLegalDialog('terms')}
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            onClick={() => openLegalDialog('privacy')}
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </button>
        </p>
      </motion.div>

      {/* Legal Dialog */}
      <LegalDialog
        isOpen={legalDialog.isOpen}
        onClose={closeLegalDialog}
        type={legalDialog.type}
      />
    </div>
  );
} 