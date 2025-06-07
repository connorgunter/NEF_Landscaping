import React from "react";
import "./BeforeAfter.css";

const BeforeAfter = ({ before, after, description }) => (
  <div className="before-after">
    <div className="before-after-container">
      <div className="before-after-image">
        <img src={before} alt="Before service" loading="lazy" />
        <span className="before-after-label">Before</span>
      </div>
      <div className="before-after-image">
        <img src={after} alt="After service" loading="lazy" />
        <span className="before-after-label">After</span>
      </div>
    </div>
    {description && <p className="before-after-desc">{description}</p>}
  </div>
);

export default BeforeAfter;
