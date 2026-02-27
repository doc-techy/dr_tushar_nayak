export default function InvoiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hide site header, footer, whatsapp button, and dark background for invoice */}
      <style>{`
        header, footer, .floating-whatsapp, [class*="FloatingWhatsApp"] {
          display: none !important;
        }
        body {
          background: #ffffff !important;
        }
        body > div.pointer-events-none {
          display: none !important;
        }
      `}</style>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </>
  );
}
