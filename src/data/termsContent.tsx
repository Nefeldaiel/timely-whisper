import { APP_NAME } from '@/constants/app';
import { LegalContent } from '../types/legal';

export const termsContent: LegalContent = {
  title: 'Terms of Service',
  lastUpdated: 'March 21, 2024',
  sections: [
    {
      title: '1. Introduction',
      content: `Welcome to ${APP_NAME}. By using our service, you agree to these terms. Please read them carefully.`
    },
    {
      title: '2. Using Our Services',
      content: `You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies.`
    },
    {
      title: '3. Privacy and Copyright Protection',
      content: `Our privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that ${APP_NAME} can use such data in accordance with our privacy policies.`
    },
    {
      title: '4. Your Content in our Services',
      content: `Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content.`
    },
    {
      title: '5. Modifying and Terminating our Services',
      content: `We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.`
    }
  ]
}; 