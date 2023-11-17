import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
  {/*----HEADER SECTION HEADER SECTION HEADER SECTION ----*/}
  <header>
    <div className="width-100">
      <div className="container header">
        <div className="width-25">
          <img src="images/logo.png" />
        </div>
        <div className="width-50">
          <ul className="header-menu ">
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">Jobs </a>
            </li>
            <li>
              <a href="#">Companies </a>
            </li>
            <li>
              <a href="#">Services </a>
            </li>
            <li>
              <a href="#">Contact Us </a>
            </li>
          </ul>
        </div>
        <div className="width-25">
          <a href="#" className="button-job-post">
            <i className="fa fa-shopping-bag" aria-hidden="true" /> Submit a Job </a>
          <a href="#" className="button-resume">
            <i className="fa fa-pencil-square-o" aria-hidden="true" /> Create Resume </a>
        </div>
      </div>
    </div>
  </header>
  {/*----SEARCH SECTION SEARCH SECTION SEARCH SECTION ----*/}
  <div className="width-100 banner-section">
    <div className="container">
      <h1 className="banner-heading">Find The Best Job For Your Future</h1>
      <p className="banner-para">its a long established fact that a reader will be distracted by the readable</p>
      <div className="search-sect">
        <input type="text" className="search-textbox" placeholder="Search Company" />
      </div>
      <div className="search-sect">
        <input type="text" className="search-textbox" placeholder="Select Location" />
        <i className="fa fa-life-ring icons" aria-hidden="true" />
      </div>
      <div className="search-sect">
        <input type="text" className="search-textbox" placeholder="All categories" />
        <i className="fa fa-caret-down icons" aria-hidden="true" />
      </div>
      <div className="search-sect">
        <button className="search-button">
          <i className="fa fa-search " aria-hidden="true" /> Search Here </button>
      </div>
    </div>
  </div>
  {/*----CATEGORY SECTION CATEGORY SECTION CATEGORY SECTION ----*/}
  <div className="width-100 skill-section">
    <div className="container">
      <div className="skill-list">
        <div className="width-33">
          <img className="skill-img" src="images/skill-1.png" />
        </div>
        <div className="width-66">
          <h4>It Sector</h4>
          <button className="view-button">7,600 jobs</button>
        </div>
      </div>
      <div className="skill-list">
        <div className="width-33">
          <img className="skill-img" src="images/skill-2.png" />
        </div>
        <div className="width-66">
          <h4>Call Center</h4>
          <button className="view-button">5,000 jobs</button>
        </div>
      </div>
      <div className="skill-list">
        <div className="width-33">
          <img className="skill-img" src="images/skill-3.png" />
        </div>
        <div className="width-66">
          <h4>BPO</h4>
          <button className="view-button">1,100 jobs</button>
        </div>
      </div>
      <div className="skill-list">
        <div className="width-33">
          <img className="skill-img" src="images/skill-4.png" />
        </div>
        <div className="width-66">
          <h4>Sales</h4>
          <button className="view-button">2,345 jobs</button>
        </div>
      </div>
    </div>
  </div>
  {/*---RECENT JOB SECTION RECENT JOB SECTION RECENT JOB SECTION ---*/}
  <div className="width-100 recent-job">
    <div className="container">
      <h2 className="recent-job-heading">RECENT JOB</h2>
      <p className="recent-job-sub-heading">Get the list of all recent jobs</p>
      {/*---JOB LIST---*/}
      <div className="width-50">
        <div className="recent-job-list">
          <div className="width-100">
            <h4 className="job-title">HTML Designer</h4>
            <p className="job-company">Dezven Software Solution <i className="fa fa-star" aria-hidden="true" /> | 234 Reviews </p>
          </div>
          <div className="width-33">
            <i className="fa fa-briefcase" aria-hidden="true" /> 1 to 4 Years
          </div>
          <div className="width-33">
            <i className="fa fa-inr" aria-hidden="true" /> No disclosed
          </div>
          <div className="width-33">
            <i className="fa fa-map-marker" aria-hidden="true" /> Pune
          </div>
          <div className="width-100">
            <p className="job-skill">
              <b>Skills : </b>HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP
            </p>
          </div>
          <div className="width-100">
            <a href="#" className="job-apply-button">Apply Now</a>
          </div>
        </div>
      </div>
      {/*---JOB LIST----*/}
      <div className="width-50">
        <div className="recent-job-list">
          <div className="width-100">
            <h4 className="job-title">CSS Designer</h4>
            <p className="job-company">Dezven Group <i className="fa fa-star" aria-hidden="true" /> | 234 Reviews </p>
          </div>
          <div className="width-33">
            <i className="fa fa-briefcase" aria-hidden="true" /> 1 to 4 Years
          </div>
          <div className="width-33">
            <i className="fa fa-inr" aria-hidden="true" /> No disclosed
          </div>
          <div className="width-33">
            <i className="fa fa-map-marker" aria-hidden="true" /> Pune
          </div>
          <div className="width-100">
            <p className="job-skill">
              <b>Skills : </b>HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP
            </p>
          </div>
          <div className="width-100">
            <a href="#" className="job-apply-button">Apply Now</a>
          </div>
        </div>
      </div>
      {/*---JOB LIST---*/}
      <div className="width-50">
        <div className="recent-job-list">
          <div className="width-100">
            <h4 className="job-title">Bootstrap Developer</h4>
            <p className="job-company">Apple Incorporation <i className="fa fa-star" aria-hidden="true" /> | 234 Reviews </p>
          </div>
          <div className="width-33">
            <i className="fa fa-briefcase" aria-hidden="true" /> 1 to 4 Years
          </div>
          <div className="width-33">
            <i className="fa fa-inr" aria-hidden="true" /> No disclosed
          </div>
          <div className="width-33">
            <i className="fa fa-map-marker" aria-hidden="true" /> Pune
          </div>
          <div className="width-100">
            <p className="job-skill">
              <b>Skills : </b>HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP
            </p>
          </div>
          <div className="width-100">
            <a href="#" className="job-apply-button">Apply Now</a>
          </div>
        </div>
      </div>
      {/*---JOB LIST---*/}
      <div className="width-50">
        <div className="recent-job-list">
          <div className="width-100">
            <h4 className="job-title">Javascript Developer</h4>
            <p className="job-company">Wipro Software Sol <i className="fa fa-star" aria-hidden="true" /> | 234 Reviews </p>
          </div>
          <div className="width-33">
            <i className="fa fa-briefcase" aria-hidden="true" /> 1 to 4 Years
          </div>
          <div className="width-33">
            <i className="fa fa-inr" aria-hidden="true" /> No disclosed
          </div>
          <div className="width-33">
            <i className="fa fa-map-marker" aria-hidden="true" /> Pune
          </div>
          <div className="width-100">
            <p className="job-skill">
              <b>Skills : </b>HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP
            </p>
          </div>
          <div className="width-100">
            <a href="#" className="job-apply-button">Apply Now</a>
          </div>
        </div>
      </div>
      {/*---JOB LIST---*/}
      <div className="width-50">
        <div className="recent-job-list">
          <div className="width-100">
            <h4 className="job-title">Graphic Designer</h4>
            <p className="job-company">Microsoft Solution INC <i className="fa fa-star" aria-hidden="true" /> | 234 Reviews </p>
          </div>
          <div className="width-33">
            <i className="fa fa-briefcase" aria-hidden="true" /> 1 to 4 Years
          </div>
          <div className="width-33">
            <i className="fa fa-inr" aria-hidden="true" /> No disclosed
          </div>
          <div className="width-33">
            <i className="fa fa-map-marker" aria-hidden="true" /> Pune
          </div>
          <div className="width-100">
            <p className="job-skill">
              <b>Skills : </b>HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP
            </p>
          </div>
          <div className="width-100">
            <a href="#" className="job-apply-button">Apply Now</a>
          </div>
        </div>
      </div>
      {/*---JOB LIST----*/}
      <div className="width-50">
        <div className="recent-job-list">
          <div className="width-100">
            <h4 className="job-title">jQuery Developer</h4>
            <p className="job-company">Google Corporation <i className="fa fa-star" aria-hidden="true" /> | 234 Reviews </p>
          </div>
          <div className="width-33">
            <i className="fa fa-briefcase" aria-hidden="true" /> 1 to 4 Years
          </div>
          <div className="width-33">
            <i className="fa fa-inr" aria-hidden="true" /> No disclosed
          </div>
          <div className="width-33">
            <i className="fa fa-map-marker" aria-hidden="true" /> Pune
          </div>
          <div className="width-100">
            <p className="job-skill">
              <b>Skills : </b>HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHOTOSHOP
            </p>
          </div>
          <div className="width-100">
            <a href="#" className="job-apply-button">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*----TOP COMPANY SECTION TOP COMPANY SECTION TOP COMPANY SECTION---*/}
  <div className="width-100 top-company">
    <div className="container">
      <h2 className="top-company-heading">Top Company Hiring</h2>
      <p className="top-company-sub-heading">List of Top Company Hiring With Us</p>
      {/*---START COMPANY LIST---*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-1.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">Google Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
      {/*---START COMPANY LIST---*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-2.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">Microsoft Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
      {/*---START COMPANY LIST---*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-3.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">IBM Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
      {/*---START COMPANY LIST---*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-4.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">Apple Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
      {/*---START COMPANY LIST---*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-5.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">InfoSys Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
      {/*---START COMPANY LIST----*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-6.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">Wipro Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
      {/*---START COMPANY LIST----*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-7.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">HCL Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
      {/*---START COMPANY LIST---*/}
      <div className="width-25">
        <div className=" company-list">
          <div className="width-100">
            <div className="width-25 company-image">
              <img src="images/company-8.png" />
            </div>
            <div className="width-75">
              <h4 className="company-name">Linkedin Company</h4>
              <p className="company-rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star " aria-hidden="true" />
              </p>
              <p className="company-review">( 874 Reviews)</p>
            </div>
          </div>
          <div className="width-50 company-address">New York, USA</div>
          <div className="width-50 company-opening">25 Job Opening <p />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-----FEATURE SECTION FEATURE SECTION FEATURE SECTION-----*/}
  <div className="width-100 feature-sect">
    <div className="container">
      <div className="width-50">
        <div className="feature-panel">
          <img src="images/feature-1.png" className="feature-img" />
          <h4 className="feature-title">DO YOU WANT TO FIND A JOB ?</h4>
          <p className="feature-desc">It look like readable English. Many desktop publishing packagesand web page editors now use Lorem Ipsum as their default model text</p>
          <button className="feature-btn">Find Job</button>
        </div>
      </div>
      <div className="width-50">
        <div className="feature-panel">
          <img src="images/feature-2.png" className="feature-img" />
          <h4 className="feature-title"> ARE YOU LOOKING FOR A CANDIDATE ?</h4>
          <p className="feature-desc">It look like readable English. Many desktop publishing packagesand web page editors now use Lorem Ipsum as their default model text</p>
          <button className="feature-btn">Find Candidates</button>
        </div>
      </div>
    </div>
  </div>
  </div>

  );
  }

  export default App;

  
