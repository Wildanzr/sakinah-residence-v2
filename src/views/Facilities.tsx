import Image from "next/image";
import { FacilitiesCard } from "@/components";

import { facilities } from "@/constants";

const Facilities = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-20 bg-white md:py-28 lg:py-32 text-shadow">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[1440px] px-14 gap-10 bg-transparent">
        <div className="grid items-center justify-center w-full h-full gap-5 md:gap-10 auto-rows-auto md:grid-cols-3 lg:grid-cols-4">
          {facilities.map((item, idx) => (
            <FacilitiesCard key={idx} image={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
