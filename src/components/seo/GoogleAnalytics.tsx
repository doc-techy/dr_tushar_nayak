import Script from "next/script";
import { gaMeasurementId } from "@/lib/seo";

export function GoogleAnalytics() {
  const measurementId = gaMeasurementId(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`}
      </Script>
    </>
  );
}
