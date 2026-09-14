import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Refund Policy",
  description: "Learn about refund timelines and methods on LoPrice.com.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="Understand how, when, and where your refunds are processed for cancelled or failed bookings."
      lastUpdated="October 24, 2024"
      activePath="/refund-policy"
    >
      <p>
        This Refund Policy outlines the process, timelines, and conditions for refunds on{" "}
        <strong>LoPrice.com</strong>. Our goal is to ensure a smooth and transparent refund experience.
      </p>

      <h2>1. When Are You Eligible for a Refund?</h2>
      <ul>
        <li><strong>Cancelled Bookings:</strong> Refunds are processed as per the <a href="/cancellation-policy">Cancellation Policy</a>.</li>
        <li><strong>Operator Cancellations:</strong> 100% refund if the bus operator cancels the trip.</li>
        <li><strong>Failed Payments:</strong> If money was debited but the booking failed, a full refund is initiated automatically.</li>
        <li><strong>Duplicate Bookings:</strong> If you accidentally booked the same trip twice, the duplicate booking will be refunded.</li>
      </ul>

      <h2>2. Refund Timelines</h2>
      <p>
        Once a cancellation is confirmed, the refund is initiated immediately. The time taken for the 
        amount to reflect in your account depends on your payment method:
      </p>

      <ul>
        <li><strong>LoPrice Wallet:</strong> Instant (within minutes).</li>
        <li><strong>UPI / Net Banking:</strong> 3 - 5 business days.</li>
        <li><strong>Credit / Debit Card:</strong> 5 - 7 business days.</li>
        <li><strong>Wallets (Paytm, PhonePe, etc.):</strong> 2 - 4 business days.</li>
      </ul>

      <p>
        <strong>Note:</strong> The above timelines are indicative and depend on your bank's processing 
        time. LoPrice is not responsible for delays caused by your bank.
      </p>

      <h2>3. Refund Method</h2>
      <p>
        Refunds are credited back to the <strong>original payment method</strong> used during the 
        booking. If you choose a refund to your LoPrice Wallet, you get instant credit and can use 
        it for future bookings.
      </p>

      <h2>4. Non-Refundable Charges</h2>
      <p>
        The following charges are non-refundable:
      </p>
      <ul>
        <li>Cancellation charges as per policy.</li>
        <li>Convenience fees (if applicable) charged at the time of booking.</li>
        <li>Payment gateway fees (if any).</li>
      </ul>

      <h2>5. How to Track Your Refund</h2>
      <ol>
        <li>Log in to your LoPrice account.</li>
        <li>Go to <strong>My Account → Wallet & Refunds</strong>.</li>
        <li>View the status of all refunds (Initiated, Processing, Credited).</li>
      </ol>

      <h2>6. Refund Disputes</h2>
      <p>
        If you have not received your refund within the stated timeline, please contact us at{" "}
        <a href="mailto:refunds@loprice.com">refunds@loprice.com</a> with your Booking ID and payment 
        reference. Our team will investigate and resolve the issue within 5 business days.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        For any refund-related queries, reach out to us at{" "}
        <a href="mailto:support@loprice.com">support@loprice.com</a>.
      </p>
    </LegalPageLayout>
  );
}