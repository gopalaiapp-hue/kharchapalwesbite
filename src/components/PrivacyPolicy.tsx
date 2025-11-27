import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Wallet } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-orange-600">
                KharchaPal
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-10 h-10 text-orange-600" />
          <h1 className="text-4xl text-gray-900">
            Privacy Policy
          </h1>
        </div>

        <p className="text-gray-600 mb-8">
          Last updated: November 27, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              At KharchaPal, we believe your financial data is
              yours and yours alone. We've built our app with a
              privacy-first approach designed specifically for
              Indian families who want complete control over
              their financial information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Data Storage & Control
            </h2>
            <div className="bg-orange-50 p-6 rounded-xl mb-4">
              <h3 className="text-xl text-gray-900 mb-3">
                100% Local Data Storage
              </h3>
              <p className="text-gray-700">
                All your financial data stays on your device. We
                do not store your transaction data, expense
                records, or financial information on our
                servers.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Your expenses, transactions, and goals are
                stored locally on your device
              </li>
              <li>We cannot access your financial data</li>
              <li>
                Optional encrypted cloud backup is available
                (controlled by you)
              </li>
              <li>You can delete all data at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              What We Do NOT Collect
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                We do NOT require your bank login credentials
              </li>
              <li>
                We do NOT track your spending habits for
                advertising
              </li>
              <li>We do NOT sell your data to third parties</li>
              <li>
                We do NOT share your data with other apps or
                services
              </li>
              <li>
                We do NOT collect personally identifiable
                information (PII) beyond what's necessary for
                app functionality
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              What We Collect (Minimal Data)
            </h2>
            <p className="text-gray-700 mb-4">
              To provide you with the best experience, we
              collect only essential information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Device Information:</strong> Device
                type, OS version (for app compatibility)
              </li>
              <li>
                <strong>Usage Analytics:</strong> Anonymous app
                usage patterns to improve features (opt-in only)
              </li>
              <li>
                <strong>Crash Reports:</strong> Anonymous
                technical data to fix bugs and improve stability
              </li>
              <li>
                <strong>Account Email:</strong> Only if you
                choose to create a cloud backup
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              File & Statement Imports
            </h2>
            <p className="text-gray-700 mb-4">
              When you import bank statements, UPI transactions,
              or other financial files:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All processing happens on your device</li>
              <li>Files are never uploaded to our servers</li>
              <li>Data is extracted and stored locally</li>
              <li>
                Original files can be deleted after import
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Optional Cloud Backup
            </h2>
            <p className="text-gray-700 mb-4">
              If you choose to enable cloud backup:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Your data is encrypted before leaving your
                device
              </li>
              <li>
                We use industry-standard encryption (AES-256)
              </li>
              <li>Only you have the decryption key</li>
              <li>
                Backups are stored securely and cannot be
                accessed by KharchaPal staff
              </li>
              <li>
                You can disable cloud backup and delete all
                backup data at any time
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">
              KharchaPal may use third-party services for
              specific functions:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Analytics:</strong> Anonymous usage data
                (opt-in only)
              </li>
              <li>
                <strong>Cloud Storage:</strong> Encrypted backup
                storage (if you enable backups)
              </li>
              <li>
                <strong>Crash Reporting:</strong> Anonymous
                technical diagnostics
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              These services do not have access to your
              financial data or personally identifiable
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-4">
              You have complete control over your data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Access:</strong> View all data stored in
                the app
              </li>
              <li>
                <strong>Export:</strong> Export your data in CSV
                or PDF format
              </li>
              <li>
                <strong>Delete:</strong> Permanently delete all
                data from the app
              </li>
              <li>
                <strong>Opt-out:</strong> Disable analytics and
                crash reporting at any time
              </li>
              <li>
                <strong>Portability:</strong> Take your data to
                another service
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Security Measures
            </h2>
            <p className="text-gray-700 mb-4">
              We implement robust security measures:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All data is encrypted on your device</li>
              <li>
                Optional PIN/biometric lock for app access
              </li>
              <li>
                Secure communication protocols (HTTPS/TLS)
              </li>
              <li>Regular security audits and updates</li>
              <li>No data transmission without encryption</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700">
              KharchaPal is not intended for use by children
              under 13. We do not knowingly collect personal
              information from children under 13. If you believe
              we have collected such data, please contact us
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to
              time. We will notify you of any changes by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Posting the new Privacy Policy in the app</li>
              <li>Updating the "Last updated" date</li>
              <li>
                Sending an in-app notification for significant
                changes
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Compliance
            </h2>
            <p className="text-gray-700 mb-4">
              KharchaPal is committed to complying with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Information Technology Act, 2000 (India)</li>
              <li>
                Personal Data Protection Bill (when enacted)
              </li>
              <li>RBI guidelines for digital payment data</li>
              <li>
                Industry best practices for data protection
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy
              Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700">
                <strong>Email:</strong> niteshjha.uiux@yahoo.com
              </p>
              <p className="text-gray-700 mt-4">
                We typically respond to privacy inquiries within
                48 hours.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
              <h3 className="text-xl text-gray-900 mb-2">
                Our Privacy Promise
              </h3>
              <p className="text-gray-700">
                Your trust is our most valuable asset. We
                promise to never compromise your privacy or sell
                your data. KharchaPal exists to help you manage
                your money better — not to exploit your
                financial information.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 KharchaPal. All rights reserved. Made with
            ❤️ in India.
          </p>
        </div>
      </footer>
    </div>
  );
}