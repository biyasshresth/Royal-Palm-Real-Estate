import React, { useEffect } from "react";

export default function DataDeletion(): React.ReactElement {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 lg:px-32 py-10 text-left">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
        Data Deletion Policy for Palm Real Estate
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-base leading-relaxed mb-8 font-sans">
        At Palm Real Estate, we are committed to protecting your privacy and
        providing transparency regarding the collection, use, and retention of
        your personal data. This Data Deletion Policy outlines how your personal
        data is deleted when you request it and explains the circumstances under
        which your data may be deleted. By using our services, you acknowledge
        and agree to the terms of this policy. Please read it carefully.
      </p>

      {/* 1. Data Retention Period */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2 font-sans">
          1. Data Retention Period
        </h2>
        <ul className="list-disc list-outside pl-6 text-gray-700 leading-relaxed font-sans">
          <li>
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in our Privacy Policy or as required
            by law. The data we collect includes user information (such as your
            registration details) and other relevant information.
          </li>
          <li className="mt-2">
            We retain your data depending on the type of information:
            <ul className="list-square list-outside pl-6 mt-2">
              <li>
                <strong>User Information:</strong> We retain your account
                details (e.g., name, contact information, and account details)
                for as long as your account remains active.
              </li>
              <li>
                <strong>User Property Listings:</strong> Listings are retained
                as long as the properties are listed on the platform. If you
                remove a property listing or delete your account, the listing
                will be deleted along with your account.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 2. Requesting Data Deletion */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2 font-sans">
          2. Requesting Data Deletion
        </h2>
        <ul className="list-disc list-outside pl-6 text-gray-700 leading-relaxed font-sans">
          <li>
            <strong>Submit a Request:</strong> <br />
            <ul className="list-circle list-inside pl-8 text-gray-700 leading-relaxed font-sans">
              <li>
                You can request the deletion of your data by contacting us at{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  this Google Form
                </a>
                . Include your account details (e.g., registered email address
                or username) to help us locate your account.
              </li>
            </ul>
          </li>
          <li>
            <strong>Verification:</strong> <br />
            <ul className="list-circle list-inside pl-8 text-gray-700 leading-relaxed font-sans">
              <li>
                We may ask for additional information to verify your identity to
                ensure that the request is legitimate and to protect your
                information from unauthorized deletion requests.
              </li>
            </ul>
          </li>
          <li>
            <strong>Processing the Request:</strong> <br />
            <ul className="list-circle list-inside pl-8 text-gray-700 leading-relaxed font-sans">
              <li>
                After verifying your identity, we will initiate the deletion of
                your personal data, including your account information and
                property listings. This process typically takes up to 30 days.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 3. What Happens After Data Deletion? */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2 font-sans">
          3. What Happens After Data Deletion?
        </h2>
        <ul className="list-disc list-outside pl-6 text-gray-700 leading-relaxed font-sans">
          <li>
            <strong>Account Deletion:</strong> Your account will be permanently
            deleted from our system, and you will lose access to any
            account-related services, including property listings, saved
            searches, and other personalized features.
          </li>
          <li>
            <strong>Property Listings:</strong> Any property listings associated
            with your account will be removed from the platform. If you delete
            your account, any listings you have posted will also be deleted.
          </li>
          <li>
            <strong>Backup Copies:</strong> As mentioned, backup copies of your
            data may still exist in our systems for a limited time as part of
            our backup protocols, but they will not be used for any active
            processing.
          </li>
          <li>
            <strong>Irreversibility:</strong> Once deleted, your data cannot be
            recovered. If you wish to use Palm Real Estate again after deletion,
            you will need to create a new account and re-submit any property
            listings.
          </li>
        </ul>
      </section>

      {/* 4. Your Rights Regarding Data Deletion */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2 font-sans">
          4. Your Rights Regarding Data Deletion
        </h2>
        <ul className="list-disc list-outside pl-6 text-gray-700 leading-relaxed font-sans">
          <li>
            <strong>Right to Delete:</strong> You can request the deletion of
            your personal data at any time.
          </li>
          <li>
            <strong>Right to Access:</strong> You may request a copy of the
            personal data we hold about you before deletion.
          </li>
          <li>
            <strong>Right to Rectify:</strong> You may request corrections to
            any inaccurate or incomplete data before deletion.
          </li>
        </ul>
      </section>
    </div>
  );
}
