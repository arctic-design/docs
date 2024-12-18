import {
  Accordion,
  AccordionItem,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I reset my password?',
    answer:
      'To reset your password, navigate to the login page and click on the "Forgot Password" link. Enter your registered email address, and we will send you instructions to reset your password.',
  },
  {
    id: 'faq-2',
    question: 'Where can I view my purchase history?',
    answer:
      'You can view your purchase history by logging into your account and clicking on the "Orders" section. Here, you will find a list of all your past purchases along with their details.',
  },
  {
    id: 'faq-3',
    question: 'How do I contact customer support?',
    answer:
      'Customer support can be reached via the "Contact Us" page. You can submit a support ticket, send us an email at support@example.com, or call us directly at (123) 456-7890.',
  },
  {
    id: 'faq-4',
    question: 'Can I change my subscription plan later?',
    answer:
      'Yes, you can change your subscription plan at any time from your account settings. Navigate to the "Subscription" section, select your desired plan, and confirm the changes.',
  },
  {
    id: 'faq-5',
    question: 'Is my personal information secure?',
    answer:
      'We prioritize the security of your personal information. All data is encrypted and stored securely. For more details, please refer to our Privacy Policy.',
  },
];

interface DemoProps extends PropsWithChildren {
  faqs: FAQItem[];
}

function Demo({ faqs, ...props }: DemoProps) {
  return (
    <Accordion {...props}>
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} title={faq.question}>
          {faq.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQAccordion() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
        <CardDescription>
          Find answers to the most common questions about our services.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Demo faqs={faqData} />
      </CardContent>
    </Card>
  );
}
