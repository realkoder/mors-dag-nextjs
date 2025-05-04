import Image from "next/image";
import { toast } from "sonner";

const DifferentImages = () => {
  return (
    <>
      <Image
        src="familie1.jpg"
        alt="Grand danois wearing costume"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("Altid en fornøjelse med faacetime og drinxxx")}
      />
      {/* <div className="flex justify-center">
        <Image
          src="malle-og-mor.jpg"
          alt="Hundemad"
          width={350}
          height={350}
          className="m-2 rounded-lg shadow-lg cursor-pointer"
          onClick={() => toast.info("De spiser rigtig meget mad!")}
        />
        <Image
          src="malle-og-mor2.jpg"
          alt="Hundemad"
          width={350}
          height={350}
          className="m-2 rounded-lg shadow-lg cursor-pointer"
          onClick={() => toast.info("De spiser rigtig meget mad!")}
        />
      </div> */}
      <Image
        src="malle-og-mor2.jpg"
        alt="Horse"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("MORS DAG!")}
      />
      <Image
        src="malle-og-mor.jpg"
        alt="Birthday hat"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("MORS DAG!")}
      />
      {/* <Image
        src="https://partyvikings.dk/media/catalog/product/cache/a8a7725c9f67a2f4a037f0ab6a30a27c/0/4/04104_1.jpg"
        alt="Birthday hat"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("STIVAL HATTEN AF HATTENE!")}
      />
      <Image
        src="https://www.telegraph.co.uk/content/dam/music/2024/06/12/TELEMMGLPICT000380886812_17182159432580_trans_NvBQzQNjv4BqA7N2CxnJWnYI3tCbVBgu9T0aesusvN1TE7a0ddd_esI.jpeg"
        alt="Birthday hat"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("TAYLEEEEEE!!!")}
      /> */}
    </>
  );
};

export default DifferentImages;
