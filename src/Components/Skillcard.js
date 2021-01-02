import React from "react";

export default function Skillcard({ skill: { icon, title, about } }) {
  return (
    <div className="col-lg-6">
      <div className="skill-card">
        <img src={icon} alt="icon" className="skill-card_icon" />
        <div className="skill-card-body">
          <h6 className="skill-card-title">{title}</h6>
          <p className="skill_card_content">{about}</p>
        </div>
      </div>
    </div>
  );
}
