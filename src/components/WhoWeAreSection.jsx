import { midImage } from "../assets"
import HeaderText from "./textComponents/HeaderText";

function WhoWeAreSection() {
  return (
    <div className="w-full h-fit flex flex-col font-manrope justify-center items-center py-10 px-[8%]">
      <div className="w-full flex flex-col items-start text-xl font-medium pr-0 lgss:pr-14">
        <HeaderText h1={"Who we are"} />
        <h4 className="text-left font-manrope">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </h4>
      </div>
      <div className="w-full pt-10 mt-6">
        <img src={midImage} className="w-full" alt="Who We Are Image" />
      </div>
    </div>
  );
}

export default WhoWeAreSection
