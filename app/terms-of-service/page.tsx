import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
    title: "Terms of Service",
    description: "Read the terms and conditions for using LoPrice.com services.",
};

export default function TermsOfServicePage() {
    return (
        <LegalPageLayout
            title="Terms of Service"
            subtitle="Please read these terms carefully before using LoPrice.com. By using our platform, you agree to be bound by them."
            lastUpdated="October 24, 2024"
            activePath="/terms-of-service"
        >
            <p>
                Welcome to <strong>LoPrice.com</strong>. These Terms of Service ("Terms") govern your access
                to and use of our website, mobile application, and services. By accessing or using our
                platform, you agree to comply with these Terms.
            </p>

            <h2>1. Eligibility</h2>
            <p>
                You must be at least 18 years old to make a booking. Minors may travel only when accompanied
                by a parent or guardian, or as per the bus operator's policy.
            </p>

            <h2>2. Booking & Payment</h2>
            <ul>
                <li>All bookings are subject to availability and confirmation by the bus operator.</li>
                <li>Fares displayed are inclusive of applicable taxes unless stated otherwise.</li>
                <li>Payments must be completed at the time of booking via our approved payment methods.</li>
                <li>LoPrice acts as a booking aggregator and is not the transport service provider.</li>
            </ul>

            <h2>3. User Responsibilities</h2>
            <ul>
                <li>You agree to provide accurate passenger and contact information.</li>
                <li>You must carry a valid government-issued ID during travel.</li>
                <li>You agree not to misuse the platform, including fraudulent bookings or abuse of offers.</li>
            </ul>

            <h2>4. Ticket & Boarding</h2>
            <ul>
                <li>Your e-ticket (SMS/email) is mandatory for boarding.</li>
                <li>Please arrive at the boarding point at least 15 minutes before departure.</li>
                <li>The bus operator reserves the right to deny boarding if valid ID or ticket is not presented.</li>
            </ul>

            <h2>5. Changes by Operator</h2>
            <p>
                Bus operators may change the bus type, seating layout, or schedule due to operational reasons.
                In such cases, LoPrice will notify you and offer alternative options where applicable.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
                LoPrice.com is not liable for delays, accidents, loss of luggage, or any other incident
                arising during the journey. All such matters are the sole responsibility of the bus operator.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
                All content on LoPrice.com (logos, designs, code, and text) is the property of LoPrice and
                protected by applicable copyright laws.
            </p>

            <h2>8. Modifications</h2>
            <p>
                We may update these Terms from time to time. Continued use of our services after changes
                constitutes acceptance of the revised Terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
                These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
                jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2>10. Contact</h2>
            <p>
                For any questions, contact us at{" "}
                <a href="mailto:support@loprice.com">support@loprice.com</a>.
            </p>
        </LegalPageLayout>
    );
}