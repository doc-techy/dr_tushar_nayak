"use client";

import { useRef } from "react";

const invoiceData = {
  invoiceNumber: "INV-20260213-001",
  from: {
    name: "Vimal Shetty",
    role: "Web Developer",
    email: "shettyvimal07@gmail.com",
    phone: "7624928621",
  },
  to: {
    name: "Dr. Tushar Nayak",
    role: "Orthopaedic Surgeon",
    hospital: "SPARSH Hospital",
    area: "HBR Layout, Hennur Road",
    city: "Bengaluru - 560043",
  },
  items: [
    {
      description: "Website Development Services",
      qty: 1,
      rate: 20000,
      amount: 20000,
    },
    {
      description: "Yearly Maintenance & Support",
      qty: 1,
      rate: 6000,
      amount: 6000,
    },
    {
      description: "Domain Registration & Hosting (Annual)",
      qty: 1,
      rate: 3800,
      amount: 3800,
    },
  ],
  advancePaid: 0,
  payment: {
    bank: "ICICI BANK",
    branch: "Hsr Layout 7Th Sector Branch",
    accountNo: "316801505087",
    ifsc: "ICIC0003168",
    upiId: "shettyvimal07-2@okicici",
  },
};

const subtotal = invoiceData.items.reduce((sum, item) => sum + item.amount, 0);
const totalAmount = subtotal;
const remaining = totalAmount - invoiceData.advancePaid;
const today = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatCurrency(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function InvoicePage() {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          .no-print {
            display: none !important;
          }

          body * {
            visibility: hidden !important;
          }

          .invoice-card,
          .invoice-card * {
            visibility: visible !important;
          }

          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .invoice-card {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
          }

          .invoice-card {
            box-shadow: none !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      <section className="min-h-screen bg-white py-10 sm:py-16 px-4">
        {/* Download Button */}
        <div className="no-print max-w-3xl mx-auto mb-6 flex justify-end">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </button>
        </div>

        {/* Invoice Card */}
        <div
          ref={invoiceRef}
          className="invoice-card max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Header Banner */}
          <div className="bg-[#2c3e50] px-6 sm:px-10 py-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                INVOICE
              </h1>
              <p className="text-sm text-white/70 mt-1">
                Invoice #{invoiceData.invoiceNumber}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs text-white/50">Date:</p>
              <p className="text-lg font-bold text-white">{today}</p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8">
            {/* From / To */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 pb-8 mb-8 border-b border-gray-200">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">FROM:</p>
                <p className="text-lg font-bold text-black">{invoiceData.from.name}</p>
                <p className="text-sm text-gray-500">{invoiceData.from.role}</p>
                <p className="text-sm text-gray-500 mt-2">Email: {invoiceData.from.email}</p>
                <p className="text-sm text-gray-500">Phone: {invoiceData.from.phone}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">BILL TO:</p>
                <p className="text-lg font-bold text-black">{invoiceData.to.name}</p>
                <p className="text-sm text-gray-500">{invoiceData.to.role}</p>
                <p className="text-sm text-gray-500 mt-2">{invoiceData.to.hospital}</p>
                <p className="text-sm text-gray-500">{invoiceData.to.area}</p>
                <p className="text-sm text-gray-500">{invoiceData.to.city}</p>
              </div>
            </div>

            {/* Table */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-y-2 border-gray-800">
                    <th className="py-3 px-3 text-xs font-bold uppercase tracking-wide text-black">Description</th>
                    <th className="py-3 px-3 text-xs font-bold uppercase tracking-wide text-black text-center">Qty</th>
                    <th className="py-3 px-3 text-xs font-bold uppercase tracking-wide text-black text-right">Rate (₹)</th>
                    <th className="py-3 px-3 text-xs font-bold uppercase tracking-wide text-black text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-5 px-3 text-sm text-black align-top">{item.description}</td>
                      <td className="py-5 px-3 text-sm text-black text-center align-top">{item.qty}</td>
                      <td className="py-5 px-3 text-sm text-black text-right align-top whitespace-nowrap">
                        {item.rate.toLocaleString("en-IN")}
                      </td>
                      <td className="py-5 px-3 text-sm font-bold text-black text-right align-top whitespace-nowrap">
                        {item.amount.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-10">
              <div className="w-full sm:w-80">
                <div className="flex items-center justify-between py-2.5 px-3">
                  <span className="text-sm text-gray-500">Subtotal:</span>
                  <span className="text-sm font-semibold text-black">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between py-2.5 px-3">
                  <span className="text-sm text-gray-500">Total:</span>
                  <span className="text-sm font-semibold text-black">{formatCurrency(totalAmount)}</span>
                </div>
                {invoiceData.advancePaid > 0 && (
                  <div className="flex items-center justify-between py-2.5 px-3">
                    <span className="text-sm text-gray-500">Advance Paid:</span>
                    <span className="text-sm font-semibold text-black">{formatCurrency(invoiceData.advancePaid)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-3 px-3 mt-2 border-t-2 border-black">
                  <span className="text-base font-black text-black">Remaining:</span>
                  <span className="text-xl font-black text-black">{formatCurrency(remaining)}</span>
                </div>
              </div>
            </div>

            {/* Payment Details & Signature */}
            <div className="grid sm:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="text-sm font-bold text-black mb-3">Payment Details</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-semibold text-black">Bank:</span> {invoiceData.payment.bank}</p>
                  <p><span className="font-semibold text-black">Branch:</span> {invoiceData.payment.branch}</p>
                  <p><span className="font-semibold text-black">A/c No:</span> {invoiceData.payment.accountNo}</p>
                  <p><span className="font-semibold text-black">IFSC:</span> {invoiceData.payment.ifsc}</p>
                  <p className="pt-2"><span className="font-semibold text-black">UPI ID:</span> {invoiceData.payment.upiId}</p>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end justify-end">
                <p className="text-xs text-gray-400 mb-4">Authorized Signature</p>
                <p className="text-base font-bold text-black">{invoiceData.from.name}</p>
                <p className="text-sm text-gray-500">{invoiceData.from.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
