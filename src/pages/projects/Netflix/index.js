import { NetflixLogo } from "./img";
import styles from "./Netflix.module.css";

export default function Netflix() {
  return (
    <div id="netflix" className={styles.netflix}>
    {/* <div id="netflix" className="netflix"> */}
      <header className={styles.showcase}>
        <div className={`${styles['showcase-top']}`}>
          <img src={NetflixLogo} alt="Netflix" />
          <a href="#" className={`${styles.btn} ${styles['btn-rounded']}`}>
            Sign In
          </a>
        </div>
        <div className={`${styles['showcase-content']}`}>
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <a href="#" className={`${styles.btn} ${styles['btn-xl']}`}>
            Watch Free For 30 Days{" "}
            <i className="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
      </header>
      <section className={styles.tabs}>
        <div className={styles.container}>
          <div id="tab-1" className="tab-item tab-border">
            <i className="fas fa-door-open fa-3x"></i>
            <p className="hide-sm">Cancel anytime</p>
          </div>
          <div id="tab-2" className="tab-item">
            <i className="fas fa-tablet-alt fa-3x"></i>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" className="tab-item">
            <i className="fas fa-tags fa-3x"></i>
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
      </section>
      <section className="tab-content">
        <div className="container">
          {/* Tab 1 Content */}
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  If you decide Netflix isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <a href="#" className="btn btn-lg">
                  Watch Free For 30 Days
                </a>
              </div>
              <img src="./img/tab-content-1.png" alt="Cancel button location" />
            </div>
          </div>

          {/* Tab 2 Content */}
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere - personalized for
                you.
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img
                  src="./img/tab-content-2-1.png"
                  alt="Netflix Daredevil page"
                />
                <p className="text-md">Watch on your TV</p>
                <p className="text-dark">
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>

              <div>
                <img
                  src="./img/tab-content-2-2.png"
                  alt="Netflix Daredevil page"
                />
                <p className="text-md">Watch instantly or download for later</p>
                <p className="text-dark">
                  Available on phone and tablet, wherever you go.
                </p>
              </div>

              <div>
                <img
                  src="img/tab-content-2-3.png"
                  alt="Netflix Daredevil page"
                />
                <p className="text-md">Use any computer</p>
                <p className="text-dark">Watch right on Netflix.com.</p>
              </div>
            </div>
          </div>

          {/* Tab 3 Content */}
          <div id="tab-3-content" className="tab-content-item">
            <div className="text-center">
              <p className="text-lg">
                Choose one plan and watch everything on Netflix.
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Monthly price after free month ends on
                    {/* month from today's date */}
                  </td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>Questions? Call 1-866-579-7172</p>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Ways To Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Netflix Originals</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Buy Gift Cards</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
