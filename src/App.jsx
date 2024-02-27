import logo from "./assets/logo.png";
import img3 from "./assets/3.png";
import img2 from "./assets/2.png";
import img1 from "./assets/1.png";
import facebook from "./assets/facebook.png";
import globe from "./assets/globe.png"
import phone from "./assets/phone-call.png"
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="main-wrapper">
        <div className="aside">
          <img src={img1} alt="award" />
        </div>
        <div className="main">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              <p>
                C.R.I.&apos;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </p>
            </li>
            <li>
              <p>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </p>
            </li>
          </ul>
          <div className="main-img">
            <img src={img2} alt="getting the award" />
          </div>
          <p>
            Government of India has awarded the &ldquo;National Energy
            Conservation Award 2018&rdquo;. Mr. G. Selvaraj, Joint Managing
            Director of C.R.I. Group received the award from Smt. Sumitra
            Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
            Minister of State.
          </p>
        </div>
      </div>
      <div className="products">
        <h3>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h3>
        <img src={img3} alt="products" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>

        <h3 className="product-list__heading">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h3>
        <ul className="product-list">
          <li>CHEMICALS & PROCESS</li>
          <li>POWER</li>
          <li>WATER & WASTE WATER</li>
          <li>OILS & GAS</li>
          <li>PHARMA</li>
          <li>SUGARS & DISTILLERIES</li>
          <li>PAPER & PULP</li>
          <li>MARINE & DEFENCE</li>
          <li>METAL & MINING</li>
          <li>FOOD & BEVERAGE</li>
          <li>PETROCHEMICAL & REFINERIES</li>
          <li>SOLAR</li>
          <li>BUILDING</li>
          <li>HVAC</li>
          <li>FIRE FIGHTING</li>
          <li>AGRICULTURE & RESIDENTIAL</li>
        </ul>
      </div>
      <div className="footer-wrapper">
        <ul className="footer">
          <li>
            <img src={phone} alt="phone icon" />
            Toll free <span>1800 200 1234</span>
          </li>
          <li>
            <img src={facebook} alt="facebook icon" />
            www.facebook.com/cripumps
          </li>
          <li>
            <img src={globe} alt="globe" />
            www.crigroups.com
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
