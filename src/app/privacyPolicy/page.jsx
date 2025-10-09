"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="text-black">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Privacy & Policy
        </h1>
        <p className="text-center text-gray-500 italic">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        {/* Introduction */}
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-bold text-blue-700">NUR.Dev</span>. 
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
        </p>

        {/* 1. Information Collection */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We may collect basic information such as your name, email address, and messages if you contact us through the contact form.
            We do <b>not</b> sell, rent, or trade your data to third parties.
          </p>
        </div>

        {/* 2. How We Use Your Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your messages or inquiries.</li>
            <li>To improve the website design and user experience.</li>
            <li>To provide updates or important notices (if applicable).</li>
          </ul>
        </div>

        {/* 3. Cookies */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. 
            You can choose to disable cookies in your browser settings at any time.
          </p>
        </div>

        {/* 4. Data Security */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We take reasonable precautions to protect your personal information. 
            However, please note that no method of data transmission over the internet is 100% secure.
          </p>
        </div>

        {/* 5. External Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">5. External Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites.
          </p>
        </div>

        {/* 6. Policy Changes */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy occasionally. Any changes will be reflected on this page with an updated date.
          </p>
        </div>

        {/* 7. Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, feel free to contact us at: <br />
            📧 <a href="mailto:mdnoyon631234@gmail.com" className="text-blue-600 underline">mdnoyon631234@gmail.com</a>
          </p>
        </div>

      </div>
    </section>
  );
}
