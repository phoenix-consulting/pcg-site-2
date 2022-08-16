import Navbar from "./Navbar";
import Footer from "./Footer";
import phxGroup from './assets/temp.JPG'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="bg-slate-200 mt-10">
          <div>
            Improving Healthcare,
          </div>
          <div>
            4 projects at a time
          </div>
          <div>
            Phoenix Consulting Group is a team of UC Berkeley students who consult for health-sector business problems.
          </div>
          <div>
            button here
          </div>
        </div>

        <div className="bg-slate-200 mt-10">
          <div>
            About Us
          </div>
          <div>
            We’re a diverse community of engineers, scientists, business leaders, and policymakers with one vision: train the healthcare leaders of tomorrow by solving the healthcare problems of today. Our members grow together through high-impact consulting projects and our club is a hub for healthcare innovation.
          </div>
          <div>
            <div>
              4
            </div>
            <div>
              projects every semester
            </div>
          </div>
          <div>
            <div>
              4
            </div>
            <div>
              projects every semester
            </div>
          </div>
          <div>
            <div>
              4
            </div>
            <div>
              projects every semester
            </div>
          </div>
          <div>
            <div>
              4
            </div>
            <div>
              projects every semester
            </div>
          </div>
          <div>
            button + more about phoenix (rmbr to link this boi to about page)
          </div>
        </div>

        <div className="bg-slate-200 mt-10">
          <img src={phxGroup}></img>
        </div>

        <div className="bg-slate-200 mt-10">
          <div>
            PHOENIX IN SPRING 2022
          </div>
          <div>
            This semester, our projects range from international marketing strategy to therapeutic treatment analysis.
          </div>
          <div>
            put a card here or smt, just build a sexy reusable element for future use so we can recycle it
            (4 clients + health engine + random acessibility stuff)
          </div>
          <div>
            Read more about our projects here. (link this boi to projects tab)
          </div>
        </div>

        <div className="bg-slate-200 mt-10">
          <div>
            Contact Us
          </div>
          <div>
            Interested in getting in touch? You can reach us via our contact forms or find us on our social media accounts!
          </div>
          <div>
            <div>
              <div>
                Useful Links
              </div>
              <div>
                Email
              </div>
              <div>
                Facebook
              </div>
              <div>
                Instagram
              </div>
              <div>
                LinkedIn
              </div>
              <div>
                Medium
              </div>
            </div>
            <div>
              <div>
                For Students
              </div>
              <div>
                We’re looking for people excited to learn, solve problems, and make an impact. If you’re interested, consider joining us!
              </div>
              <div>
                Apply button here
              </div>
            </div>
            <div>
              <div>
                For Companies
              </div>
              <div>
                We’re looking for exciting companies and nonprofits to work with. If you’re interested in partnering with us, please reach out!
              </div>
              <div>
                Contact Us Button
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 mt-10">
          Carousel here, also need updated quotes
        </div>

        <div className="bg-slate-200 mt-10">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;
