import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Cancellation Policy",
  description: "Learn about LoPrice.com's bus ticket cancellation rules and timelines.",
};

export default function CancellationPolicyPage() {
  return (
    <LegalPageLayout
      title="Cancellation Policy"
      subtitle="Understand the timelines, charges, and process for cancelling your LoPrice bus ticket."
      lastUpdated="October 24, 2024"
      activePath="/cancellation-policy"
    >
      <p>
        At <strong>LoPrice.com</strong>, we understand that travel plans can change. Our cancellation 
        policy is designed to be transparent and fair, while respecting the rules set by our partner 
        bus operators.
      </p>

      <h2>1. Cancellation Timelines & Charges</h2>
      <p>
        The cancellation charges depend on how early you cancel before the scheduled departure time. 
        The general structure is as follows:
      </p>
      
      <ul>
        <li><strong>More than 24 hours before departure:</strong> 10% of the ticket fare (minimum ₹50).</li>
        <li><strong>Between 12 and 24 hours before departure:</strong> 25% of the ticket fare.</li>
        <li><strong>Between 4 and 12 hours before departure:</strong> 50% of the ticket fare.</li>
        <li><strong>Less than 4 hours before departure:</strong> 100% of the ticket fare (no refund).</li>
      </ul>

      <p>
        <strong>Note:</strong> Some bus operators may have stricter or more relaxed policies. The exact 
        cancellation terms applicable to your ticket will be displayed at the time of booking and in 
        the cancellation confirmation.
      </p>

      <h2>2. How to Cancel Your Ticket</h2>
      <ol>
        <li>Go to the <a href="/bookings">Track Ticket</a> page.</li>
        <li>Enter your Booking ID and registered mobile number.</li>
        <li>Click on "Cancel Ticket" and confirm the cancellation.</li>
        <li>You will receive a confirmation SMS/email with the refund details.</li>
      </ol>
      <p>
        Alternatively, you can cancel via the "My Bookings" section in your Profile.
      </p>

      <h2>3. Partial Cancellation</h2>
      <p>
        Partial cancellation (cancelling only some seats from a multi-seat booking) may be allowed 
        depending on the operator's policy. The cancellation charges will apply proportionally.
      </p>

      <h2>4. Operator-Initiated Cancellations</h2>
      <p>
        If the bus operator cancels the trip due to technical issues, weather, or other unavoidable 
        reasons, you will be entitled to a <strong>100% refund</strong> or a free reschedule to an 
        alternative bus (subject to availability).
      </p>

      <h2>5. No-Show</h2>
      <p>
        If you do not board the bus at the designated boarding point and time, it will be treated as 
        a "No-Show", and <strong>no refund</strong> will be provided.
      </p>

      <h2>6. Cancellation Fee Waiver</h2>
      <p>
        LoPrice occasionally runs promotional offers where cancellation fees are waived. Such offers 
        will be clearly marked on the booking page.
      </p>

      <h2>7. Contact Support</h2>
      <p>
        If you face any issues with cancellation, contact us at{" "}
        <a href="mailto:support@loprice.com">support@loprice.com</a> or call our 24/7 helpline.
      </p>
    </LegalPageLayout>
  );
}