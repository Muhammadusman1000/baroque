import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";

export const FooterIcon = () => {
  return (
    <div className="w-full relative bg-[#F6F6F6] h-10 text-dark flex justify-center items-center">
      <div className="lg:w-[7%] md:w-[12%] sm:w-[15%] xs:w-[17%] h-10 flex justify-between items-center cursor-pointer">
        <FacebookIcon />
        <InstagramIcon />
        <FaTiktok />
      </div>
    </div>
  );
};
export default FooterIcon;
