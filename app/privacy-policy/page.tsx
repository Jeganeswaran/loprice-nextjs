import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how LoPrice.com collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains how we collect, use, and safeguard your information."
      lastUpdated="October 24, 2024"
      activePath="/privacy-policy"
    >
      <p>
        At <strong>LoPrice.com</strong> ("we", "our", "us"), we are committed to protecting your personal 
        information. This Privacy Policy describes how we collect, use, and share information when you 
        use our website, mobile application, and related services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly to us, including:</p>
      <ul>
        <li><strong>Personal Details:</strong> Name, email address, mobile number, and date of birth.</li>
        <li><strong>Travel Information:</strong> Passenger names, boarding points, and destination details.</li>
        <li><strong>Payment Information:</strong> Securely processed via third-party payment gateways (UPI, cards, net banking). We do not store full card details.</li>
        <li><strong>Device & Usage Data:</strong> IP address, browser type, device ID, and pages visited.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Process bookings, send tickets, and provide trip updates.</li>
        <li>Improve our services, personalize your experience, and offer relevant promotions.</li>
        <li>Communicate booking confirmations, cancellation notices, and customer support responses.</li>
        <li>Comply with legal obligations and prevent fraudulent activity.</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>
        We share your information only with trusted partners, including bus operators (to fulfill your 
        booking), payment gateways (to process transactions), and analytics providers. We never sell 
        your personal data to third parties.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard encryption (SSL/TLS) and secure server infrastructure to protect 
        your data. However, no transmission over the internet is 100% secure, and we cannot guarantee 
        absolute security.
      </p>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal information from your Profile page.</li>
        <li>Opt out of promotional emails via the unsubscribe link.</li>
        <li>Request a copy of your data by contacting our support team.</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience, remember your preferences, and analyze 
        site traffic. You can disable cookies in your browser settings, though some features may not 
        function properly.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        For any privacy-related concerns, please reach out to us at{" "}
        <a href="mailto:privacy@loprice.com">privacy@loprice.com</a>.
      </p>
    </LegalPageLayout>
  );
}