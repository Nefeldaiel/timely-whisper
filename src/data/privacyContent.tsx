import { APP_NAME } from '@/constants/app';
import { LegalContent } from '../types/legal';

export const privacyContent: LegalContent = {
  title: 'Privacy Policy',
  lastUpdated: 'March 21, 2024',
  sections: [
    {
      title: '1. Information We Collect',
      content: `${APP_NAME} collects information to provide better services to our users. We collect information in the following ways:`,
      list: [
        'Information you provide to us (email address, profile information)',
        'Information we get from your use of our services',
        'Information from third-party sources'
      ]
    },
    {
      title: '2. How We Use Information',
      content: `We use the information we collect to provide, maintain, protect and improve our services, to develop new ones, and to protect our users. We also use this information to offer you tailored content.`
    },
    {
      title: '3. Information Security',
      content: `We work hard to protect ${APP_NAME} and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.`
    },
    {
      title: '4. Data Retention',
      content: `We retain your personal information only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.`
    },
    {
      title: '5. Your Rights',
      content: 'You have the right to:',
      list: [
        'Access your personal information',
        'Correct inaccurate information',
        'Request deletion of your information',
        'Object to our use of your information'
      ]
    }
  ]
}; 