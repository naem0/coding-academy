import WhatLernFontend from "@/components/WhatLernFontend";
import GetFromUs from "@/components/GetFromUs";
import QurtionAns from "@/components/QurtionAns";
import Services from "@/components/Services";
import WhatLearn from "@/components/WhatLearn";
import WhoChorseFor from "@/components/WhoChorseFor";
import Subject from "@/components/Subject";

export default function Home() {
  return (
    <main className="text-gray-300 container w-[90%]  mx-auto">
      <WhatLearn></WhatLearn>
      <Services></Services>
      <GetFromUs></GetFromUs>
      <WhoChorseFor></WhoChorseFor>
      <Subject></Subject>
      <QurtionAns></QurtionAns>

    </main>
  );
}