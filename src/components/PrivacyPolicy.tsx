import React, { useEffect } from "react";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 text-left">
      {/* Title */}
      <h1 className="text-2xl sm:text-xl md:text-xl font-bold text-gray-800 text-left">
        PRIVACY POLICY
      </h1>
      <p className="text-sm text-gray-500 mb-6">Last updated May 07, 2025</p>

      {/* Intro */}
      <p className="text-gray-800 mb-3 text-left text-sm">
        This Privacy Notice for Royal Palm Real Estate Pvt. Ltd., describes how
        and why we might access, collect, store, use, and share (“process") your
        personal information when you use our services (“Services"), including
        when you:
      </p>
      <ul className="list-disc text-left flex flex-col justify-start text-gray-800 space-y-2 mb-4 ml-6">
        <li>
          <span className="text-sm">
            Download and use our mobile application (Bhumi), or any other
            application of ours that links to this Privacy Notice
          </span>
        </li>
        <li>
          <span className="text-sm">
            Engage with us in other related ways, including any sales,
            marketing, or events
          </span>
        </li>
      </ul>

      <p className="mb-6 text-sm text-gray-800">
        Questions or concerns? Reading this Privacy Notice will help you
        understand your privacy rights and choices. We are responsible for
        making decisions about how your personal information is processed. If
        you do not agree with our policies and practices, please do not use our
        Services. If you still have any questions or concerns, please contact us
        at <br />
        <span className="font-medium">bhu.bhumi8@gmail.com</span>.
      </p>

      {/* Summary Heading */}
      <h2 className="text-md font-bold uppercase mb-2">SUMMARY OF KEY POINTS</h2>
      <p className="italic text-sm mb-6 text-left">
        This summary provides key points from our Privacy Notice, but you can
        find out more details about any of these topics below to find the
        section you are looking for.
      </p>

      {/* Key points */}
      <div className="space-y-4 text-sm leading-relaxed text-left text-gray-800">
        <p>
          What personal information do we process? When you visit, use, or
          navigate our Services, we may process personal information depending
          on how you interact with us and the Services, the choices you make,
          and the products and features you use. Learn more about{' '}
          <a href="#" className="text-blue-600 hover:underline">
            personal information you disclose to us
          </a>
          .
        </p>

        <p>
          Do we process any sensitive personal information? Some of the
          information may be considered “special” or “sensitive” in certain
          jurisdictions, for example your racial or ethnic origins, sexual
          orientation, and religious beliefs. We do not process sensitive
          personal information.
        </p>

        <p>
          Do we collect any information from third parties? We do not collect
          any information from third parties.
        </p>

        <p>
          How do we process your information? We process your information to
          provide, improve, and administer our Services, communicate with you,
          for security and fraud prevention, and to comply with law. We may also
          process your information for other purposes with your consent. We
          process your information only when we have a valid legal reason to do
          so. Learn more about{' '}
          <a href="#" className="text-blue-600 hover:underline">
            how we process your information
          </a>
          .
        </p>

        <p>
          In what situations and with which parties do we share personal
          information? We may share information in specific situations and with
          specific third parties. Learn more about{' '}
          <a href="#" className="text-blue-600 hover:underline">
            when and with whom we share your personal information
          </a>
          .
        </p>

        <p>
          How do we keep your information safe? We have adequate organizational
          and technical processes and procedures in place to protect your
          personal information. However, no electronic transmission over the
          internet or information storage technology can be guaranteed to be
          100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Learn more about{' '}
          <a href="#" className="text-blue-600 hover:underline">
            how we keep your information safe
          </a>
          .
        </p>

        <p>
          What are your rights? Depending on where you are located
          geographically, the applicable privacy law may mean you have certain
          rights regarding your personal information. Learn more about{' '}
          <a href="#" className="text-blue-600 hover:underline">
            your privacy rights
          </a>
          .
        </p>

        <p>
          How do you exercise your rights? The easiest way to exercise your
          rights is by visiting{' '}
          <a
            href="https://royalpalmrealestate.com.np/data-request"
            className="text-blue-600 hover:underline"
          >
            https://royalpalmrealestate.com.np/data-request
          </a>
          , or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </p>

        <p>
          Want to learn more about what we do with any information we collect?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Review the Privacy Notice in full.
          </a>
        </p>

        {/* contents */}
        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <h3 className="font-bold">Personal information you disclose to us</h3>

          <div className="text-gray-700 space-y-2">
            <p>In Short: We collect personal information that you provide to us.</p>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in obtaining
              information about us or our products and Services, when you
              participate in activities on the Services, or otherwise when you
              contact us.
            </p>

            <p className="font-semibold whitespace-normal">Personal Information Provided by You:</p>
            <p>
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>

            <ul className="list-disc ml-7">
              <li>name</li>
              <li>email addresses</li>
              <li>phone number</li>
              <li>passwords</li>
              <li>contact preferences</li>
            </ul>

            <p className="font-medium">Sensitive Information:</p>
            <p>We do not process sensitive information.</p>

            <p className="font-medium">Application Data:</p>
            <p>
              If you use our application(s), we also may collect the following
              information if you choose to provide us with access or permission:
            </p>

            <ul className="list-disc ml-9">
              <li>
                <strong>Geolocation Information:</strong> We may request access
                or permission to track location-based information from your
                mobile device, either continuously or while you are using our
                mobile application(s), to provide certain location-based
                services. If you wish to change our access or permissions, you
                may do so in your device's settings.
              </li>
            </ul>

            <p>
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes.
            </p>

            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <h3 className="font-bold">In Short:</h3>

          <div className="text-gray-700 space-y-2">
            <p>
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent.
            </p>

            <p className="font-semibold whitespace-normal">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>

            <ul className="list-disc ml-7">
              <li>
                <strong>To facilitate account creation and authentication and otherwise
                manage user accounts:</strong> We may process your information so you can create and log in to
                your account, as well as keep your account in working order.
              </li>

              <li>
                <strong>To respond to user inquiries/offer support to users:</strong>
                We may process your information to respond to your inquiries and
                solve any potential issues you might have with the requested
                service.
              </li>

              <li>
                <strong>To send administrative information to you:</strong>
                We may process your information to send you details about our
                products and services, changes to our terms and policies, and
                other similar information.
              </li>

              <li>
                <strong>To request feedback:</strong> We may process your information when necessary to request feedback and to
                contact you about your use of our Services.
              </li>

              <li>
                <strong>To send you marketing and promotional communications:</strong>
                We may process the personal information you send to us for our
                marketing purposes, if this is in accordance with your marketing
                preferences. You can opt out of our marketing emails at any time.
              </li>

              <li>
                <strong>To comply with our legal obligations:</strong>
                We may process your information to comply with our legal
                obligations, respond to legal requests, and exercise, establish,
                or defend our legal rights.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <h3 className="font-bold">In Short:</h3>

          <div className="text-gray-700 space-y-2">
            <p>
              We may share information in specific situations described in this
              section and/or with the following third parties.
            </p>

            <p>We may need to share your personal information in the following
            situations:</p>

            <ul className="list-disc ml-7">
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during
                negotiations of, any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business to another
                company.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
          </h2>
          <h3 className="font-bold">In Short:</h3>

          <div className="text-gray-700 space-y-2">
            <p>
              We are not responsible for the safety of any information that you
              share with third parties that we may link to or who advertise on
              our Services, but are not affiliated with, our Services.
            </p>

            <p>
              The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from
              third parties that are not affiliated with us and which may link to
              other websites, services, or applications. Accordingly, we do not
              make any guarantee regarding any such third parties, and we will not
              be liable for any loss or damage caused by the use of such
              third-party websites, services, or applications. The inclusion of a
              link towards a third-party website, service, or application does not
              imply an endorsement by us. We cannot guarantee the safety and
              privacy of data you provide to any third-party websites. Any data
              collected by third parties is not covered by this Privacy Notice. We
              are not responsible for the content or privacy and security
              practices and policies of any third parties, including other
              websites, services, or applications that may be linked to or from
              the Services. You should review the policies of such third parties
              and contact them directly to respond to your question.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              We keep your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Notice unless otherwise required
              by law.
            </p>

            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless a
              longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for longer
              than the period of time in which users have an account with us.
            </p>

            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because your
              personal information has been stored in backup archives), then we
              will securely store your personal information and isolate it from
              any further processing until deletion is possible.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              We aim to protect your personal information through a system of
              organizational and technical security measures.
            </p>

            <p>
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security of
              any personal information we process. However, despite our safeguards
              and efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee that
              hackers, cybercriminals, or other unauthorized third parties will
              not be able to defeat our security and improperly collect, access,
              steal, or modify your information. Although we will do our best to
              protect your personal information, transmission of personal
              information to and from our Services is at your own risk. You should
              only access the Services within a secure environment.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            7. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              We do not knowingly collect data from or market to children under
              18 years of age.
            </p>

            <p>
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age, nor do we knowingly sell such
              personal information. By using the Services, you represent that you
              are at least 18 or that you are the parent or guardian of such a
              minor and consent to such minor dependent’s use of the Services. If
              we learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from children
              under age 18, please contact us at bhu.bhumi8@gmail.com.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              You may review, change, or terminate your account at any time,
              depending on your country, province, or state of residence.
            </p>

            <p>
              <strong>Withdrawing your consent:</strong> We may share or transfer your information in connection with, or during
              negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business to another company.
            </p>

            <p>
              However, please note that this will not affect the lawfulness of the
              processing before its withdrawal nor, when applicable law allows,
              will it affect the processing of your personal information conducted
              in reliance on lawful processing grounds other than consent.
            </p>

            <p>
              <strong>Opting out of marketing and promotional communications:</strong>
              You can unsubscribe from our marketing and promotional
              communications at any time by clicking on the unsubscribe link in
              the emails that we send, or by contacting us using the details
              provided in the section below. You will then be removed from the
              marketing lists. However, we may still communicate with you — for
              example, to send you service-related messages that are necessary for
              the administration and use of your account, to respond to service
              requests, or for other non-marketing purposes.
            </p>

            <p>
              <strong>Account Information</strong>
            </p>

            <p>
              If you would at any time like to review or change the information in
              your account or terminate your account, you can:
            </p>

            <ul className="list-disc ml-9">
              <li>Log in to your account settings and update your user account.</li>
            </ul>

            <p>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </p>

            <p>
              If you have questions or comments about your privacy rights, you may
              email us at bhu.bhumi8@gmail.com.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism that
              automatically communicates your choice not to be tracked online. If
              a standard for online tracking is adopted that we must follow in the
              future, we will inform you about that practice in a revised version
              of this Privacy Notice.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            10. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

            <p>
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date at the top of
              this Privacy Notice. If we make material changes to this Privacy
              Notice, we may notify you either by prominently posting a notice of
              such changes or by directly sending you a notification. We encourage
              you to review this Privacy Notice frequently to be informed of how
              we are protecting your information.
            </p>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>If you have questions or comments about this notice, you may email
            us at bhu.bhumi8@gmail.com or contact us by post at:</p>

            <address className="not-italic">
              Royal Palm Real Estate Pvt. Ltd.<br />
              Chunikhel<br />
              Budhanilkhantha, Bagmati 44600<br />
              Nepal
            </address>
          </div>
        </section>

        <section className="mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              Based on the applicable laws of your country, you may have the right
              to request access to the personal information we collect from you,
              details about how we have processed it, correct inaccuracies, or
              delete your personal information. You may also have the right to
              withdraw your consent to our processing of your personal
              information. These rights may be limited in some circumstances by
              applicable law. To request to review, update, or delete your
              personal information, please visit: https://royalpalmrealestate.com.np.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
