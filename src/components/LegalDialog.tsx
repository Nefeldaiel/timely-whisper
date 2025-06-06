import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import { termsContent } from '@/data/termsContent';
import { privacyContent } from '@/data/privacyContent';
import { LegalContent } from '@/types/legal';

type LegalDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
};

export function LegalDialog({ isOpen, onClose, type }: LegalDialogProps) {
  const content: LegalContent = type === 'terms' ? termsContent : privacyContent;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                    onClick={onClose}
                  >
                    <IoClose className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <div className="mt-2 pr-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{content.title}</h2>
                  <div className="space-y-6 text-gray-600">
                    {content.sections.map((section, index) => (
                      <section key={index}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                        <p>{section.content}</p>
                        {section.list && (
                          <ul className="list-disc ml-6 mt-2 space-y-2">
                            {section.list.map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}
                    <section className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">
                        Last updated: {content.lastUpdated}
                      </p>
                    </section>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 