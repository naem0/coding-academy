import WhatLernFontend from "@/components/WhatLernFontend";
import GetFromUs from "@/components/GetFromUs";
import QurtionAns from "@/components/QurtionAns";
import Services from "@/components/Services";
import WhoChorseFor from "@/components/WhoChorseFor";

export default function Home() {
  return (
    <main className="text-gray-300 container w-[90%]  mx-auto">
      <WhatLernFontend></WhatLernFontend>
      <Services></Services>
      <GetFromUs></GetFromUs>
      <WhoChorseFor></WhoChorseFor>
      <QurtionAns></QurtionAns>

    </main>
  );
}