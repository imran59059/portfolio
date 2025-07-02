import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import {
  LinkedinIcon,
  GithubIcon,
} from 'lucide-react'; // Optional if you use lucide-react for nicer brand icons

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-16 pb-37">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[var(--color-text-hover)]">Contact Me</h2>
        <p className="mt-2 text-gray-600 text-base">
          Feel free to get in touch for collaborations, inquiries, or just a friendly hello!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ContactCard
          icon={<EnvelopeIcon className="h-6 w-6 text-indigo-600" />}
          label="Email"
          value="imranali5095@gmail.com"
          link="mailto:imranali5095@gmail.com"
        />
        <ContactCard
          icon={<PhoneIcon className="h-6 w-6 text-green-600" />}
          label="Phone"
          value="+91 7095974613"
          link="tel:+917095974613"
        />
        <ContactCard
          icon={<LinkedinIcon className="h-6 w-6 text-blue-700" />}
          label="LinkedIn"
          value="linkedin.com/in/imranali5095"
          link="https://www.linkedin.com/in/imranali59059/"
        />
        <ContactCard
          icon={<GithubIcon className="h-6 w-6 text-gray-800" />}
          label="GitHub"
          value="github.com/imranali5095"
          link="https://github.com/imran59059"
        />
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-5 bg-[var(--color-bg-primary)] shadow-sm hover:shadow-lg border border-gray-200 rounded-xl transition"
  >
    <div>{icon}</div>
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-[var(--color-text-hover)] font-medium hover:underline">{value}</span>
    </div>
  </a>
);

export default Contact;
