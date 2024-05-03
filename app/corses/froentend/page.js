import WhatLernFontend from "@/components/WhatLernFontend";
import GetFromUs from "@/components/GetFromUs";
import QurtionAns from "@/components/QurtionAns";
import Services from "@/components/Services";
import WhoChorseFor from "@/components/WhoChorseFor";
import Subject from "@/components/Subject";
import CorseEnrolRabon from "@/components/CorseEnrolRabon";
import FontendBanner from "@/components/FontendBanner";

export default function Home() {
  return (
    <main className="text-gray-300 container w-[90%]  mx-auto">
      <FontendBanner/>
      <WhatLernFontend></WhatLernFontend>
      <Services></Services>
      <GetFromUs></GetFromUs>
      <Subject></Subject>
      <WhoChorseFor></WhoChorseFor>
      <QurtionAns></QurtionAns>
      <CorseEnrolRabon data={{title:'ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্ট কোর্স', endtime:'এনরোলমেন্ট শেষ তারিখ ০১/০৬/২০২৪',price:"৪,০০০"}}></CorseEnrolRabon>

    </main>
  );
}