import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactPopup from '../components/Popup/ContactPopup';

const ContactPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setFormSubmitted(true);
    setShowPopup(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Have questions about our services? Get in touch with our team of golf course site assessment experts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
        
        <div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How We Can Help</h2>
            <p className="text-gray-700 mb-4">
              Our team of experts is ready to assist you with all your golf course site assessment needs. 
              Whether you have questions about our services, need a custom solution, or want to discuss 
              a potential project, we're here to help.
            </p>
            <p className="text-gray-700">
              Fill out the contact form, and one of our specialists will get back to you as soon as possible 
              to address your specific requirements.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">What areas do you service?</h3>
            <p className="text-gray-700">
              We currently provide site assessment services throughout the United States, with plans to expand internationally in the near future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How much does a site assessment cost?</h3>
            <p className="text-gray-700">
              Our basic site assessment starts at $2,500, with additional costs for field verification and specialized analysis. We offer subscription plans for golf course architects and developers who need regular assessments.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How long does a site assessment take?</h3>
            <p className="text-gray-700">
              Our initial map-based assessments are available immediately through our interactive platform. Comprehensive reports are typically delivered within 5-7 business days, and field verifications are scheduled based on availability.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Can you help with regulatory approvals?</h3>
            <p className="text-gray-700">
              While we don't directly handle regulatory filings, our reports provide valuable data to support your permitting process. We can also recommend specialized consultants for specific regulatory challenges.
            </p>
          </div>
        </div>
      </div>
      
      {showPopup && (
        <ContactPopup 
          onClose={() => setShowPopup(false)}
          success={formSubmitted}
        />
      )}
    </div>
  );
};

export default ContactPage;
