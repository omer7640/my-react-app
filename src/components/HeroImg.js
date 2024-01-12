import React from "react";
import { Link } from "react-router-dom";

export default function HeroImg() {
  return (
    <div>
      <div className="hero">
        <div className="mask">
          <img
            // src="https://plus.unsplash.com/premium_photo-1684785617500-fb22234eeedd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlJTIwc3RvcmVzfGVufDB8fDB8fHww"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/safaliteymxa9/jojojojo.png"
            className="hero-img"
          />
        </div>
        <div className="hero-content">
          <p>Elevated electronics</p>
          <h2 className="exp">Experience Media Like Never Before</h2>
          <Link to="/shop" className="btn btn-success">
            See more
          </Link>
        </div>
      </div>

      {/*  SECOND SECTION */}
      <section className="new-release">
        <div className="release-section">
          <div className="release-content">
            <h2>New release</h2>
            <p>Safa Q10 Mini Speaker</p>
            <p>
              Mini speakers have always had to choose whether to prioritize
              sound or size. We decided to bring the best of both into our new
              Safa Q10 speaker range. Listen to your favorite music, podcasts,
              or radio on a high-fidelity mini speaker built for performance.
            </p>
            <p>
              Our new speaker comes with 2 year’s full warranty, a choice of
              colors, and other customization options.
            </p>
          </div>
          <div className="release-second">
            <img
              className="rel-img"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=688,fit=crop/safaliteymxa9/hunter-newton-unsplash-YrDk1W4J3BS41a6M.jpg"
            ></img>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}

      <section className="third-section hero2">
        <div className="mask2">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/safaliteymxa9/fotik.png"
            className="hero-img2"
          />
        </div>
        <div className="hero-content2">
          <h2 className="exp2">True to life photography</h2>
          <p>
            With this camera in their hands, anyone becomes a professional
            photographer.
          </p>
          <button>See more</button>
        </div>
      </section>
    </div>
  );
}
