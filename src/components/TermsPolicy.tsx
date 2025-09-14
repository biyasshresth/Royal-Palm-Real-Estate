import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
const TermsPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
          <img
            src={logo}
            alt="Palm Real Estate Logo"
            className="h-24 left-72 justify-start"
          />
          {/* Title */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-left sm:text-center leading-snug">
              Terms and Conditions for <br /> Real Estate Palm Transactions in
              Nepal
            </h1>
          </div>
        </div>

        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed mb-8 text-left">
          Welcome to Palm Real Estate, a platform for real estate transactions
          in Nepal. By using this website or engaging in any real estate
          transactions facilitated through this platform, you agree to the
          following terms and conditions. Please read them carefully.
        </p>

        {/* 1. General Terms */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            1. General Terms
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Scope:</span> These Terms and
              Conditions apply to all users of Palm Real Estate, including
              buyers, sellers, and any third-party service providers.
            </li>
            <li>
              <span className="font-medium">Eligibility:</span> To use this
              website, you must be legally capable of entering into binding
              agreements under the laws of Nepal.
            </li>
            <li>
              <span className="font-medium">Account Registration:</span> Users
              may be required to create an account to access certain features.
              You agree to provide accurate and up-to-date information when
              registering.
            </li>
          </ul>
        </section>

        {/* 2. Property Listings */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            2. Property Listings
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Accuracy of Listings:</span> We
              strive to provide accurate, up-to-date property listings. However,
              we do not guarantee the accuracy, completeness, or timeliness of
              the information provided by sellers.
            </li>
            <li>
              <span className="font-medium">Property Availability:</span> The
              availability of properties listed on the website may change
              without notice. We do not guarantee that a particular property
              will remain available.
            </li>
          </ul>
        </section>

        {/* 3. Buyer Responsibilities */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            3. Buyer Responsibilities
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Property Availability:</span> The
              availability of properties listed on the website may change
              without notice. We do not guarantee that a particular property
              will remain available.
            </li>
            <li>
              Conduct your due diligence before entering into any agreement,
              including verifying ownership and legal status of the property.
            </li>
            <li>
              Comply with all applicable laws, taxes, and registration
              procedures related to property purchase.
            </li>
          </ul>
        </section>

        {/* 4. Seller Responsibilities */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            4. Seller Responsibilities
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              You guarantee that the property listed is legally owned by you,
              and that there are no encumbrances, disputes, or pending legal
              actions related to the property.
            </li>
            <li>
              Provide accurate, complete, and honest information about the
              property.
            </li>
            <li>
              Ensure the property is available for sale and is in the condition
              described in your listing.
            </li>
          </ul>
        </section>

        {/* 5. Legal Compliance */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            5. Legal Compliance
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Applicable Laws:</span> All
              transactions conducted via this website are governed by the laws
              of Nepal, including the Land Revenue Act and any other relevant
              legal frameworks.
            </li>
            <li>
              <span className="font-medium">Disputes:</span> Any disputes
              between buyers and sellers arising from a transaction should be
              resolved directly between the parties. If necessary, legal action
              may be pursued under Nepalese law.
            </li>
            <li>
              <span className="font-medium">Property Transfer:</span> The final
              transfer of ownership will occur upon full payment and the
              completion of all required legal processes, including land
              registration with the local authorities.
            </li>
          </ul>
        </section>

        {/* 6. Liability Disclaimer */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            6. Liability Disclaimer
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Platform Limitations:</span> Palm
              Real Estate acts only as an intermediary platform for real estate
              transactions. We are not responsible for any direct or indirect
              damages arising from transactions between buyers and sellers,
              including but not limited to issues with property title, legal
              disputes, or payment conflicts.
            </li>
            <li>
              <span className="font-medium">User Conduct:</span> Users must not
              engage in any illegal or fraudulent activity on the website,
              including providing false information or misleading other users.
            </li>
          </ul>
        </section>

        {/* 7. Modification of Terms */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            7. Modification of Terms
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              We reserve the right to modify or update these Terms and
              Conditions at any time. Any changes will be posted on this page
              with the updated date. By continuing to use the website, you agree
              to abide by the revised terms.
            </li>
          </ul>
        </section>

        {/* 8. Termination of Use */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            8. Termination of Use
          </h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>
              We may suspend or terminate access to the website for users who
              violate these terms, engage in fraudulent activity, or for any
              other reason deemed necessary by Palm Real Estate.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsPolicy;
