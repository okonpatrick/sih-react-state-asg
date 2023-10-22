import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/Facebook";

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-top">
    <footer className="my-28 h-auto w-full flex items-center justify-center flex-col">
      <div className="flex w-1/2 items-center justify-center gap-x-6 mb-4">
        <Facebook/>
        <InstagramIcon href="www.instagram/patowhizzy"/>
        <TwitterIcon />
        <YouTubeIcon />
      </div>
      <div className="flex w-1/2 my-6 text-textMain font-bold text-base items-center justify-around mb-4">
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="text-textMinor font-bold text-base mb-10">
        © {currentYear} <span>React State App</span> by <span>PatoWhizzy</span>
      </p>
    </footer>
    </div>
  );
}

export default Footer;