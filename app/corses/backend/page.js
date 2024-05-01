import CorseEnrolRabon from "@/components/CorseEnrolRabon";
import GetFromUs from "@/components/GetFromUs";
import QurtionAns from "@/components/QurtionAns";
import Services from "@/components/Services";
import Subject from "@/components/Subject";
import WhatLernBackend from "@/components/WhatLernBackend";




export default function Home() {
  return (
    <main className="text-gray-300 container w-[90%]  mx-auto">
      <WhatLernBackend></WhatLernBackend>
      <Services></Services>
      <GetFromUs></GetFromUs>
      <Subject/>
      <QurtionAns></QurtionAns>
      <CorseEnrolRabon data={{title:'ব্যাক-এন্ড ওয়েব ডেভেলপমেন্ট কোর্স', endtime:'এনরোলমেন্ট শেষ তারিখ ০১/০৬/২০২৪',price:"৪,০০০"}}></CorseEnrolRabon>
    </main>
  );
}