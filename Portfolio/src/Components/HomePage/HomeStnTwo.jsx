import cadburyImg from "../../assets/cadbury.png";
import supraImg from "../../assets/supra.png";
import nescafe from "../../assets/nescafe.png";
import shopifyImg from "../../assets/shopify.png";
import perisImg from "../../assets/peris.png";
import cruncyImg from "../../assets/pesa.png";

const HomeStnTwo = () => {
  return (
    <div className="section-two">
      <h1>Projacts</h1>
      <div className="pr-cards">
        <a href="https://keen-centaur-eb04f1.netlify.app/" target="_blank">
          <div className="pr-card">
            <h2>Cadbury Page</h2>
            <p>
              Sweet vibes only, chocolate-style UI, zero calories, full frontend
              flex.
            </p>
            <img src={cadburyImg} alt="cadbury" />
          </div>
        </a>
        <a href="https://frabjous-gecko-d31f4c.netlify.app/" target="_blank">
          <div className="pr-card">
            <h2>Supra Page</h2>
            <p>
              Speed-inspired design, clean code, turbocharged visuals, pure
              performance energy.
            </p>
            <img src={supraImg} alt="cadbury" />
          </div>
        </a>
        <a href="https://fancy-taiyaki-ba8444.netlify.app/" target="_blank">
          <div className="pr-card">
            <h2>Nescafe Page</h2>
            <p>
              Strong coffee vibes, smooth UI, frontend brewed perfectly, no
              jitters.
            </p>
            <img src={nescafe} at="cadbury" />
          </div>
        </a>
        <a href="https://luxury-crostata-4abdda.netlify.app/" target="_blank">
          {" "}
          <div className="pr-card">
            <h2>Shopify Page</h2>
            <p>
              E-commerce feel, clean layout, checkout vibes without spending
              real money.
            </p>
            <img src={shopifyImg} at="cadbury" />
          </div>
        </a>
        <a
          href="https://vermillion-youtiao-6df8ad.netlify.app/"
          target="_blank"
        >
          <div className="pr-card">
            <h2>Loreal Paris</h2>
            <p>
              Luxury look, flawless UI, coded clean—because frontend also
              deserves glow.
            </p>
            <img src={perisImg} at="cadbury" />
          </div>
        </a>
        <a
          href="https://courageous-rolypoly-daa43f.netlify.app/"
          target="_blank"
        >
          {" "}
          <div className="pr-card">
            <h2>Currency Converter</h2>
            <p>
              Real-time logic, fast conversions, numbers switching faster than
              moods.
            </p>
            <img src={cruncyImg} at="cadbury" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomeStnTwo;
