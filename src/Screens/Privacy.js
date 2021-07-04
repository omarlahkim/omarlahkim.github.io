import React, { lazy, Suspense } from "react";
import "../Styles/styles.css";

function Privacy({ match }) {
  const policy = {
    title: "Askme",
    subtitle: "Privacy Policy",
    description: "",
  };
  const appLogo = require("../Assets/img/askme.png");
  return (
    <div className="privacyContainer">
      <div className="slider">
        <img src={appLogo} style={{ maxWidth: 100, paddingTop: "2vh" }} />
        <h1
          style={{
            color: "white",
            fontSize: 40,
            fontFamily: "Times New Roman",
          }}
        >
          {policy.title}
        </h1>
        <h4 style={{ color: "#c1c1c1", fontSize: 20 }}>{policy.subtitle}</h4>
        <p style={{ color: "white" }}>Last updated: June 21, 2020</p>
      </div>
      <div className="projectdesc">
        <div className="projectintro centered">
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
          <h3>Interpretation and Definitions</h3>
          <h4>Interpretation</h4>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>
          <h4>Definitions</h4>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li>
              <p>
                <b>You</b> means the individual accessing or using the Service,
                or the company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </p>
              <p>
                Under GDPR (General Data Protection Regulation), You can be
                referred to as the Data Subject or as the User as you are the
                individual using the Service.
              </p>
            </li>
            <li>
              <p>
                <b>Company</b> (referred to as either "the Company", "We", "Us"
                or "Our" in this Agreement) refers to Omar Lahkim, Riyad Toulal
                2 Villa 587, Morocco, Meknes 50000.
              </p>
              <p>
                For the purpose of the GDPR, the Company is the Data Controller.
              </p>
            </li>
            <li>
              <p>
                <b>Application</b> means the software program provided by the
                Company downloaded by You on any electronic device, named Askme.
              </p>
            </li>
            <li>
              <p>
                <b>Affiliate</b> means an entity that controls, is controlled by
                or is under common control with a party, where "control" means
                ownership of 50% or more of the shares, equity interest or other
                securities entitled to vote for election of directors or other
                managing authority.
              </p>
            </li>
            <li>
              <p>
                <b>Account</b> means a unique account created for You to access
                our Service or parts of our Service.
              </p>
            </li>
            <li>
              <p>
                <b>Service</b> refers to the Application.
              </p>
            </li>
            <li>
              <p>
                <b>Country</b> refers to: Morocco
              </p>
            </li>
            <li>
              <p>
                <b>Service Provider</b> means any natural or legal person who
                processes the data on behalf of the Company. It refers to
                third-party companies or individuals employed by the Company to
                facilitate the Service, to provide the Service on behalf of the
                Company, to perform services related to the Service or to assist
                the Company in analyzing how the Service is used.
              </p>
              <p>
                For the purpose of the GDPR, Service Providers are considered
                Data Processors.
              </p>
            </li>
            <li>
              <p>
                <b>Third-party Social Media Service</b> refers to any website or
                any social network website through which a User can log in or
                create an account to use the Service.
              </p>
            </li>
            <li>
              <p>
                <b>Personal Data</b> is any information that relates to an
                identified or identifiable individual.
              </p>
              <p>
                For the purposes for GDPR, Personal Data means any information
                relating to You such as a name, an identification number,
                location data, online identifier or to one or more factors
                specific to the physical, physiological, genetic, mental,
                economic, cultural or social identity.
              </p>
              <p>
                For the purposes of the CCPA, Personal Data means any
                information that identifies, relates to, describes or is capable
                of being associated with, or could reasonably be linked,
                directly or indirectly, with You.
              </p>
            </li>
            <li>
              <p>
                <b>Device</b> means any device that can access the Service such
                as a computer, a cellphone or a digital tablet.
              </p>
            </li>
            <li>
              <p>
                <b>Usage Data</b> refers to data collected automatically, either
                generated by the use of the Service or from the Service
                infrastructure itself (for example, the duration of a page
                visit).
              </p>
            </li>
            <li>
              <p>
                <b>Data Controller</b>, for the purposes of the GDPR (General
                Data Protection Regulation), refers to the Company as the legal
                person which alone or jointly with others determines the
                purposes and means of the processing of Personal Data.
              </p>
            </li>
            <li>
              <p>
                <b>Do Not Track</b> (DNT) is a concept that has been promoted by
                US regulatory authorities, in particular the U.S. Federal Trade
                Commission (FTC), for the Internet industry to develop and
                implement a mechanism for allowing internet users to control the
                tracking of their online activities across websites.
              </p>
            </li>
            <li>
              <p>
                <b>Business</b>, for the purpose of the CCPA (California
                Consumer Privacy Act), refers to the Company as the legal entity
                that collects Consumers' personal information and determines the
                purposes and means of the processing of Consumers' personal
                information, or on behalf of which such information is collected
                and that alone, or jointly with others, determines the purposes
                and means of the processing of consumers' personal information,
                that does business in the State of California.
              </p>
            </li>
            <li>
              <p>
                <b>Consumer</b>, for the purpose of the CCPA (California
                Consumer Privacy Act), means a natural person who is a
                California resident. A resident, as defined in the law, includes
                (1) every individual who is in the USA for other than a
                temporary or transitory purpose, and (2) every individual who is
                domiciled in the USA who is outside the USA for a temporary or
                transitory purpose.
              </p>
            </li>
            <li>
              <p>
                <b>Sale</b>, for the purpose of the CCPA (California Consumer
                Privacy Act), means selling, renting, releasing, disclosing,
                disseminating, making available, transferring, or otherwise
                communicating orally, in writing, or by electronic or other
                means, a Consumer's Personal information to another business or
                a third party for monetary or other valuable consideration.
              </p>
            </li>
          </ul>
          <h3>Collecting and Using Your Personal Data</h3>
          <h4>Types of Data Collected</h4>
          <h5>Personal Data</h5>
          <p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul>
            <li>
              <p>Email address</p>
            </li>
            <li>
              <p>First name and last name</p>
            </li>
            <li>
              <p>Phone number</p>
            </li>
            <li>
              <p>Usage Data</p>
            </li>
          </ul>
          <h5>Usage Data</h5>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
          </p>
          <p>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>
          <h5>Information from Third-Party Social Media Services</h5>
          <p>
            The Company may allow You to create an account and log in to use the
            Service through the Third-party Social Media Services.
          </p>
          <p>
            If You decide to register through or otherwise grant us access to a
            Third- Party Social Media Service, We may collect Personal data that
            is already associated with Your Third-Party Social Media Service's
            account, such as Your name, Your email address, Your activities or
            Your contact list associated with that account.
          </p>
          <p>
            You may also have the option of sharing additional information with
            the Company through Your Third-Party Social Media Service's account.
            If You choose to provide such information and Personal Data, during
            registration or otherwise, You are giving the Company permission to
            use, share, and store it in a manner consistent with this Privacy
            Policy.
          </p>
          <h5>Information Collected while Using the Application</h5>
          <p>
            While using Our Application, in order to provide features of Our
            Application, We may collect, with your prior permission:
          </p>
          <ul>
            <li>
              <p>Information regarding your location</p>
            </li>
            <li>
              <p>Information from your Device's phone book (contacts list)</p>
            </li>
            <li>
              <p>
                Pictures and other information from your Device's camera and
                photo library
              </p>
            </li>
          </ul>
          <p>
            We use this information to provide features of Our Service, to
            improve and customize Our Service. The information may be uploaded
            to the Company's servers and/or a Service Provider's server or it be
            simply stored on Your device.
          </p>
          <p>
            You can enable or disable access to this information at any time,
            through Your Device settings.
          </p>
          <h4>Use of Your Personal Data</h4>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul>
            <li>
              <p>
                To provide and maintain our Service , including to monitor the
                usage of our Service.
              </p>
            </li>
            <li>
              <p>
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
              </p>
            </li>
            <li>
              <p>
                For the performance of a contract: the development, compliance
                and undertaking of the purchase contract for the products, items
                or services You have purchased or of any other contract with Us
                through the Service.
              </p>
            </li>
            <li>
              <p>
                To contact You: To contact You by email, telephone calls, SMS,
                or other equivalent forms of electronic communication, such as a
                mobile application's push notifications regarding updates or
                informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </p>
            </li>
            <li>
              <p>
                To provide You with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless You have opted not to receive such information.
              </p>
            </li>
            <li>
              <p>
                To manage Your requests: To attend and manage Your requests to
                Us.
              </p>
            </li>
          </ul>
          <p>
            We may share your personal information in the following situations:
          </p>
          <ul>
            <li>
              <p>
                With Service Providers: We may share Your personal information
                with Service Providers to monitor and analyze the use of our
                Service, to show advertisements to You to help support and
                maintain Our Service, for payment processing, to contact You.
              </p>
            </li>
            <li>
              <p>
                For Business transfers: We may share or transfer Your personal
                information in connection with, or during negotiations of, any
                merger, sale of Company assets, financing, or acquisition of all
                or a portion of our business to another company.
              </p>
            </li>
            <li>
              <p>
                With Affiliates: We may share Your information with Our
                affiliates, in which case we will require those affiliates to
                honor this Privacy Policy. Affiliates include Our parent company
                and any other subsidiaries, joint venture partners or other
                companies that We control or that are under common control with
                Us.
              </p>
            </li>
            <li>
              <p>
                With Business partners: We may share Your information with Our
                business partners to offer You certain products, services or
                promotions.
              </p>
            </li>
            <li>
              <p>
                With other users: when You share personal information or
                otherwise interact in the public areas with other users, such
                information may be viewed by all users and may be publicly
                distributed outside. If You interact with other users or
                register through a Third-Party Social Media Service, Your
                contacts on the Third-Party Social Media Service may see Your
                name, profile, pictures and description of Your activity.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You and view Your profile.
              </p>
            </li>
          </ul>
          <h3>Retention of Your Personal Data</h3>
          <p>
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p>
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
          <h3>Transfer of Your Personal Data</h3>
          <p>
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p>
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p>
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>
          <h3>Disclosure of Your Personal Data</h3>
          <h4>Business Transactions</h4>
          <p>
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <h4>Law enforcement</h4>
          <p>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <h4>Other legal requirements</h4>
          <p>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul>
            <li>
              <p>Comply with a legal obligation</p>
            </li>
            <li>
              <p>Protect and defend the rights or property of the Company</p>
            </li>
            <li>
              <p>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </p>
            </li>
            <li>
              <p>
                Protect the personal safety of Users of the Service or the
                public
              </p>
            </li>
            <li>
              <p>Protect against legal liability</p>
            </li>
          </ul>
          <h3>Security of Your Personal Data</h3>
          <p>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
          <h3>Detailed Information on the Processing of Your Personal Data</h3>
          <p>
            Service Providers have access to Your Personal Data only to perform
            their tasks on Our behalf and are obligated not to disclose or use
            it for any other purpose.
          </p>
          <h4>Analytics</h4>
          <p>
            We may use third-party Service providers such as but not limited to
            Firebase, Facebook Analytics, Amplitude, Mixpanel and similar to
            monitor and analyze the use of our Service.
          </p>
          <h5>Firebase</h5>
          <p>Firebase is an analytics service provided by Google Inc.</p>
          <p>
            You may opt-out of certain Firebase features through your mobile
            device settings, such as your device advertising settings or by
            following the instructions provided by Google in their{" "}
            <a href="https://policies.google.com/privacy?hl=en">
              Privacy Policy
            </a>
          </p>
          <p>
            We also encourage you to review the{" "}
            <a href="https://support.google.com/analytics/answer/6004245">
              Google's policy
            </a>{" "}
            for safeguarding your data.
          </p>
          <p>
            For more information on what type of information Firebase collects,
            please visit the{" "}
            <a href="https://policies.google.com/privacy?hl=en">
              Google Privacy &amp; Terms
            </a>{" "}
            web page
          </p>
          <h4>Advertising</h4>
          <p>
            We may use Service providers such as but not limited to AdMob by
            Google, Facebook Ads, Pub Native and similar to show advertisements
            to You to help support and maintain Our Service.
          </p>
          <h5>AdMob by Google</h5>
          <p>AdMob by Google is provided by Google Inc.</p>
          <p>
            You can opt-out from the AdMob by Google service by following the{" "}
            <a href="https://support.google.com/ads/answer/2662922?hl=en">
              instructions
            </a>{" "}
            described by Google
          </p>
          <p>
            For more information on how Google uses the collected information,
            please visit the "How Google uses data when you use our partners'
            sites or app"{" "}
            <a href="https://policies.google.com/technologies/partner-sites">
              page
            </a>{" "}
            or visit the{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> of
            Google
          </p>
          <h4>Payments</h4>
          <p>
            We may provide paid products and/or services within the Service. In
            that case, we may use third-party services for payment processing
            (e.g. payment processors).
          </p>
          <p>
            We will not store or collect Your payment card details. That
            information is provided directly to Our third-party payment
            processors whose use of Your personal information is governed by
            their Privacy Policy. These payment processors adhere to the
            standards set by PCI-DSS as managed by the PCI Security Standards
            Council, which is a joint effort of brands like Visa, Mastercard,
            American Express and Discover. PCI-DSS requirements help ensure the
            secure handling of payment information.
          </p>
          <h5>Apple Store In-App Payments</h5>
          <p>
            Their Privacy Policy can be viewed at{" "}
            <a href="https://www.apple.com/legal/privacy/en-ww">
              https://www.apple.com/legal/privacy/en-ww
            </a>
          </p>
          <h5>Google Play In-App Payments</h5>
          <p>
            Their Privacy Policy can be viewed at{" "}
            <a href="https://www.google.com/policies/privacy">
              https://www.google.com/policies/privacy
            </a>
          </p>
          <h3>GDPR Privacy</h3>
          <h4>Legal Basis for Processing Personal Data under GDPR</h4>
          <p>We may process Personal Data under the following conditions:</p>
          <ul>
            <li>
              <p>
                Consent: You have given Your consent for processing Personal
                Data for one or more specific purposes.
              </p>
            </li>
            <li>
              <p>
                Performance of a contract: Provision of Personal Data is
                necessary for the performance of an agreement with You and/or
                for any pre-contractual obligations thereof.
              </p>
            </li>
            <li>
              <p>
                Legal obligations: Processing Personal Data is necessary for
                compliance with a legal obligation to which the Company is
                subject.
              </p>
            </li>
            <li>
              <p>
                Vital interests: Processing Personal Data is necessary in order
                to protect Your vital interests or of another natural person.
              </p>
            </li>
            <li>
              <p>
                Public interests: Processing Personal Data is related to a task
                that is carried out in the public interest or in the exercise of
                official authority vested in the Company.
              </p>
            </li>
            <li>
              <p>
                Legitimate interests: Processing Personal Data is necessary for
                the purposes of the legitimate interests pursued by the Company.
              </p>
            </li>
          </ul>
          <p>
            In any case, the Company will gladly help to clarify the specific
            legal basis that applies to the processing, and in particular
            whether the provision of Personal Data is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </p>
          <h4>Your Rights under the GDPR</h4>
          <p>
            The Company undertakes to respect the confidentiality of Your
            Personal Data and to guarantee You can exercise Your rights.
          </p>
          <p>
            You have the right under this Privacy Policy, and by law if You are
            within the EU, to:
          </p>
          <ul>
            <li>
              <p>
                Request access to Your Personal Data. The right to access,
                update or delete the information We have on You. Whenever made
                possible, you can access, update or request deletion of Your
                Personal Data directly within Your account settings section. If
                you are unable to perform these actions yourself, please contact
                Us to assist You. This also enables You to receive a copy of the
                Personal Data We hold about You.
              </p>
            </li>
            <li>
              <p>
                Request correction of the Personal Data that We hold about You.
                You have the right to to have any incomplete or inaccurate
                information We hold about You corrected.
              </p>
            </li>
            <li>
              <p>
                Object to processing of Your Personal Data. This right exists
                where We are relying on a legitimate interest as the legal basis
                for Our processing and there is something about Your particular
                situation, which makes You want to object to our processing of
                Your Personal Data on this ground. You also have the right to
                object where We are processing Your Personal Data for direct
                marketing purposes.
              </p>
            </li>
            <li>
              <p>
                Request erasure of Your Personal Data. You have the right to ask
                Us to delete or remove Personal Data when there is no good
                reason for Us to continue processing it.
              </p>
            </li>
            <li>
              <p>
                Request the transfer of Your Personal Data. We will provide to
                You, or to a third-party You have chosen, Your Personal Data in
                a structured, commonly used, machine-readable format. Please
                note that this right only applies to automated information which
                You initially provided consent for Us to use or where We used
                the information to perform a contract with You.
              </p>
            </li>
            <li>
              <p>
                Withdraw Your consent. You have the right to withdraw Your
                consent on using your Personal Data. If You withdraw Your
                consent, We may not be able to provide You with access to
                certain specific functionalities of the Service.
              </p>
            </li>
          </ul>
          <h4>Exercising of Your GDPR Data Protection Rights</h4>
          <p>
            You may exercise Your rights of access, rectification, cancellation
            and opposition by contacting Us. Please note that we may ask You to
            verify Your identity before responding to such requests. If You make
            a request, We will try our best to respond to You as soon as
            possible.
          </p>
          <p>
            You have the right to complain to a Data Protection Authority about
            Our collection and use of Your Personal Data. For more information,
            if You are in the European Economic Area (EEA), please contact Your
            local data protection authority in the EEA.
          </p>
          <h3>CCPA Privacy</h3>
          <h4>Your Rights under the CCPA</h4>
          <p>
            Under this Privacy Policy, and by law if You are a resident of
            California, You have the following rights:
          </p>
          <ul>
            <li>
              <p>
                The right to notice. You must be properly notified which
                categories of Personal Data are being collected and the purposes
                for which the Personal Data is being used.
              </p>
            </li>
            <li>
              <p>
                The right to access / the right to request. The CCPA permits You
                to request and obtain from the Company information regarding the
                disclosure of Your Personal Data that has been collected in the
                past 12 months by the Company or its subsidiaries to a
                third-party for the third party's direct marketing purposes.
              </p>
            </li>
            <li>
              <p>
                The right to say no to the sale of Personal Data. You also have
                the right to ask the Company not to sell Your Personal Data to
                third parties. You can submit such a request by visiting our "Do
                Not Sell My Personal Information" section or web page.
              </p>
            </li>
            <li>
              <p>
                The right to know about Your Personal Data. You have the right
                to request and obtain from the Company information regarding the
                disclosure of the following:
              </p>
              <ul>
                <li>
                  <p>The categories of Personal Data collected</p>
                </li>
                <li>
                  <p>The sources from which the Personal Data was collected</p>
                </li>
                <li>
                  <p>
                    The business or commercial purpose for collecting or selling
                    the Personal Data
                  </p>
                </li>
                <li>
                  <p>
                    Categories of third parties with whom We share Personal Data
                  </p>
                </li>
                <li>
                  <p>
                    The specific pieces of Personal Data we collected about You
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                The right to delete Personal Data. You also have the right to
                request the deletion of Your Personal Data that have been
                collected in the past 12 months.
              </p>
            </li>
            <li>
              <p>
                The right not to be discriminated against. You have the right
                not to be discriminated against for exercising any of Your
                Consumer's rights, including by:
              </p>
              <ul>
                <li>
                  <p>Denying goods or services to You</p>
                </li>
                <li>
                  <p>
                    Charging different prices or rates for goods or services,
                    including the use of discounts or other benefits or imposing
                    penalties
                  </p>
                </li>
                <li>
                  <p>
                    Providing a different level or quality of goods or services
                    to You
                  </p>
                </li>
                <li>
                  <p>
                    Suggesting that You will receive a different price or rate
                    for goods or services or a different level or quality of
                    goods or services.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <h4>Exercising Your CCPA Data Protection Rights</h4>
          <p>
            In order to exercise any of Your rights under the CCPA, and if you
            are a California resident, You can email us.
          </p>
          <p>
            The Company will disclose and deliver the required information free
            of charge within 45 days of receiving Your verifiable request. The
            time period to provide the required information may be extended once
            by an additional 45 days when reasonable necessary and with prior
            notice.
          </p>
          <h4>Do Not Sell My Personal Information</h4>
          <p>
            We do not sell personal information. However, the Service Providers
            we partner with (for example, our advertising partners) may use
            technology on the Service that "sells" personal information as
            defined by the CCPA law.
          </p>
          <p>
            If you wish to opt out of the use of your personal information for
            interest- based advertising purposes and these potential sales as
            defined under CCPA law, you may do so by following the instructions
            below.
          </p>
          <p>
            Please note that any opt out is specific to the browser You use. You
            may need to opt out on every browser that you use.
          </p>
          <h5>Mobile Devices</h5>
          <p>
            Your mobile device may give you the ability to opt out of the use of
            information about the apps you use in order to serve you ads that
            are targeted to your interests:
          </p>
          <ul>
            <li>
              <p>
                "Opt out of Interest-Based Ads" or "Opt out of Ads
                Personalization" on Android devices
              </p>
            </li>
            <li>
              <p>"Limit Ad Tracking" on iOS devices</p>
            </li>
          </ul>
          <p>
            You can also stop the collection of location information from Your
            mobile device by changing the preferences on your mobile device.
          </p>
          <h3>
            "Do Not Track" Policy as Required by California Online Privacy
            Protection Act (CalOPPA)
          </h3>
          <p>Our Service does not respond to Do Not Track signals.</p>
          <p>
            However, some third party websites do keep track of Your browsing
            activities. If You are visiting such websites, You can set Your
            preferences in Your web browser to inform websites that You do not
            want to be tracked. You can enable or disable DNT by visiting the
            preferences or settings page of Your web browser.
          </p>
          <h3>Children's Privacy</h3>
          <p>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <h3>
            Your California Privacy Rights (California Business and Professions
            Code Section 22581)
          </h3>
          <p>
            California Business and Professions Code section 22581 allow
            California residents under the age of 18 who are registered users of
            online sites, services or applications to request and obtain removal
            of content or information they have publicly posted.
          </p>
          <p>
            To request removal of such data, and if you are a California
            resident, You can contact Us using the contact information provided
            below, and include the email address associated with Your account.
          </p>
          <p>
            Be aware that Your request does not guarantee complete or
            comprehensive removal of content or information posted online and
            that the law may not permit or require removal in certain
            circumstances.
          </p>
          <h3>Links to Other Websites</h3>
          <p>
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </p>
          <h3>Changes to this Privacy Policy</h3>
          <p>
            We change this Privacy Policy from time to time. We always indicate
            the date the last changes were published.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul>
            <li>
              <p>
                By email:{" "}
                <a href="mailto:contact@omarlahkim.com">
                  contact@omarlahkim.com
                </a>
              </p>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
