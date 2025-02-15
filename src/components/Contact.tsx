import { TbMapSearch } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div id="contact" className="relative grid grid-cols-12 gap-5 px-20 h-screen place-content-center  bg-neutral-950 p-8">
      <div className="col-start-4 col-end-8">
        <p className="text-left text-6xl font-black text-neutral-50">
          Contact me
        </p>
        <p className="text-left mx-auto pl-2 mt-4 text-neutral-400">
          Don't be shy! Hit me up! 👇
        </p>
      </div>

      <div className="col-start-4 col-end-8 grid grid-cols-4 gap-4">
        <div className=" grid grid-cols-2 justify-items-start place-items-center text-neutral-20 text-neutral-200">
          <TbMapSearch className="size-8" />
          <div>
            <p className="text-left mx-auto text-xl font-bold pl-2  text-neutral-400">
              Location
            </p>
            <p className="text-left mx-auto pl-2  text-neutral-400">
              Uttarakhand,India
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 col-start-3 justify-items-start place-items-center text-neutral-20 text-neutral-200">
          <MdOutlineEmail className="size-8" />
          <div>
            <p className="text-left mx-auto text-xl font-bold pl-2  text-neutral-400">
              Mail
            </p>
            <p className="text-left mx-auto pl-2  text-neutral-400">
              dashauni007@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
