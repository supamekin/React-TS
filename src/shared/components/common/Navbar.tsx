import { useNavigate } from "react-router-dom";
import { logo_profile_W } from "../../../assets/images";

const Navbar = () => {
  const navigate = useNavigate();
  const routeTo = (path) => {
    navigate(path);
  };

  const navLinks = document.querySelector('.nav-links');
  function onToggleMenu(e) {
  const iconName = e.currentTarget.getAttribute('name') === 'Menu' ? 'close' : 'Menu';
  e.currentTarget.setAttribute('name', iconName);
  navLinks?.classList.toggle('top-[0%]')
  }
  
  return (
    <header className=" bg-[#383838] p-2 font-bold">
      <nav className=" flex items-center justify-between max-w-[1140px] m-auto ">
        <div className="flex items-center w-[180px] h-[30px] ">
          <img src={logo_profile_W} className="" />
        </div>
        <div className=" nav-links min-[1000px]:static absolute bg-[#383838] min-h-full right-0 top-[-100%] min-[1000px]:w-auto w-[30vw] flex items-start px-5">
          <ul className=" flex min-[1000px]:flex-row flex-col min-[1000px]:gap-[4vw] gap-8 max-[1000px]:mt-5 text-white ">
            <li><a className=" mr-7 hover:text-[#FF8C32]" href="#">HOME</a></li>
            <li><a className=" mr-7 hover:text-[#FF8C32]" href="#">PORTFOLIO</a></li>
            <li><a className=" mr-7 hover:text-[#FF8C32]" href="#">ABOUT</a></li>
            <li><a className=" mr-7 hover:text-[#FF8C32]" href="#">BLOG</a></li>
          </ul>
        </div>
        <div className=" flex items-center">
          <div onClick={() => routeTo("/userlogin")} className=" w-[70px] bg-[#FF7700] text-center rounded m-2 p-1 cursor-pointer hover:bg-[#FF8C32] text-white">Sign in</div>
          <div onClick={() => routeTo("/register")} className=" w-[70px] bg-blue-500 text-center rounded m-2 p-1 text-white cursor-pointer">Sign up</div>
        <div className=" flex items-center text-3xl cursor-pointer min-[1000px]:hidden text-white">
        <ion-icon onClick={(e) => onToggleMenu(e)} name="Menu"></ion-icon>
        </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
