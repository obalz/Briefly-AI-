import { logo } from "../assets";

const Hero = () => {
  return (
    <header
      className="w-full flex 
    justify-center items-center flex-col"
    >
      <nav
        className="flex justify-between
      items-center w-full mb-10 pt-3"
      >
        <img
          src={logo}
          alt="brieflyai_logo"
          className="max-w-56 object-contain"
        />

        <button
          type="button"
          onClick={() => window.open("https://github.com/obalz")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Briefly AI - 1.0</span>
      </h1>
      <h2 className="desc">
        Streamline your reading experience with Briefly AI, an open-source tool
        designed to condense lengthy articles into clear and easy-to-understand
        summaries.
      </h2>
    </header>
  );
};

export default Hero;
