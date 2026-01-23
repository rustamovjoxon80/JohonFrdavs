
import React from "react";
import "./Section10.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-grid">
        <article className="testimonial-card testimonial-card--orange">
          <div className="testimonial-stars testimonial-stars--purple">★★★★★</div>
          <p className="testimonial-text">
            Honestly BEST EXPERIENCE moving ever.
          </p>
          <span className="testimonial-author">– Julie, San Francisco, CA</span>
        </article>

        <article className="testimonial-card testimonial-card--blue">
          <div className="testimonial-stars testimonial-stars--yellow">★★★★★</div>
          <p className="testimonial-text">
            Extremely easy! Browsed for furniture and it was in my new
            apartment within a week.
          </p>
          <span className="testimonial-author">– Anthony, Los Angeles, CA</span>
        </article>

        <article className="testimonial-card testimonial-card--green">
          <div className="testimonial-stars testimonial-stars--green">★★★★★</div>
          <p className="testimonial-text">THIS JUST MAKES SENSE.<br />Truly obsessed with Feather.</p>
          <span className="testimonial-author">– Wesley, New York City, NY</span>
        </article>
      </div>
    </section>
  );
}
