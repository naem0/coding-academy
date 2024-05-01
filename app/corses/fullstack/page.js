import WhatLernFontend from "@/components/WhatLernFontend";
import GetFromUs from "@/components/GetFromUs";
import QurtionAns from "@/components/QurtionAns";
import Services from "@/components/Services";
import WhatLearn from "@/components/WhatLearn";
import WhoChorseFor from "@/components/WhoChorseFor";
import Subject from "@/components/Subject";
import CorseEnrolRabon from "@/components/CorseEnrolRabon";

export default function Home() {
  return (
    <main className="text-gray-300 container w-[90%]  mx-auto">
      <WhatLearn></WhatLearn>
      <Services></Services>
      <GetFromUs></GetFromUs>
      <WhoChorseFor></WhoChorseFor>
      <Subject></Subject>
      <QurtionAns></QurtionAns>
      <CorseEnrolRabon data={{title:'কমপ্লিট ওয়েব ডেভেলপমেন্ট কোর্স (MERN Stack)', endtime:'এনরোলমেন্ট শেষ তারিখ ০১/০৬/২০২৪',price:"৮,০০০"}}></CorseEnrolRabon>

    </main>
  );
}