import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full h-auto flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">
        <ContactLeft></ContactLeft>
        <div className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <p>Your Name</p>
                <input className="contactInput" type="text" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <p>Your Name</p>
                <input className="contactInput" type="text" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>Your Name</p>
              <input className="contactInput" type="text" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>Your Name</p>
              <input className="contactInput" type="text" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>Your Name</p>
              <textarea
                cols="30"
                rows="8"
                className="contactTextArea"
                type="text"
              />
            </div>
            <div className="w-full">
              <button
                //   onClick={handleSend}
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
