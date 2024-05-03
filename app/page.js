import Banner from "@/components/Banner";
import Corses from "@/components/Corses";
import GetFromUs from "@/components/GetFromUs";
import QurtionAns from "@/components/QurtionAns";
import Services from "@/components/Services";
import Subject from "@/components/Subject";
import TumiRady from "@/components/TumiRady";
import UpcamingBatch from "@/components/UpcamingBatch";
import WhatLearn from "@/components/WhatLearn";
import WhoChorseFor from "@/components/WhoChorseFor";


export default function Home() {
  return (
    <main className="text-gray-300 container w-[90%]  mx-auto">
      <Banner/>
      <UpcamingBatch/>
      <Corses/>
      <Services/>
      <WhatLearn/>
      <GetFromUs/>
      <TumiRady/>
      <Subject/>
      <WhoChorseFor/>
      <QurtionAns/>
    </main>
  );
}