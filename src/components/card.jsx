import React from "react";
import "../App.css";

let cardInfo = [
  {
    position: "card-left",
    title: "Care Assistant - Full Time",
    id: 1,
    pay: " Paid Mileage 35p per Mile.",
    training: " Full Training is provided.",
    holidays: " Paid Holidays",
    shift: " 0700-1400 / 1600-2200 Shift patterns.",
    bankholidays: " Enhanced pay for bank holidays.",
    pph: " Up to £14ph."
  },
  {
    position: "card-mid",
    title: "Care Assistant - Part Time",
    id: 2,
    pay: " Paid Mileage 35p per Mile.",
    training: " Full Training is provided.",
    holidays: " Paid Holidays",
    shift: " 0700-1400 / 1600-2200 Shift patterns.",
    bankholidays: " Enhanced pay for bank holidays.",
    pph: " Up to £14ph."
  },
  {
    position: "card-right",
    title: "Care Assistant - Weekends",
    id: 3,
    pay: " Paid Mileage 35p per Mile.",
    training: " Full Training is provided.",
    holidays: " Paid Holidays",
    shift: " 0700-1400 / 1600-2200 Shift patterns.",
    bankholidays: " Enhanced pay for bank holidays.",
    pph: " Up to £14ph."
  }
];

// maybe class would've been better in retrospect, compared to object anyway.

const Card = () => {
  return cardInfo.map((x, i) => {
    return (
      <div class="col-xs-3">
        <div className="card">
          <div className="card-body">
            <div className={`card-heading ${x.position}`}>
              <h3 key={i} className="card-title">
                {x.title}
              </h3>
            </div>
            <p className="card-text">
              <i className="fas fa-money-bill"></i>
              {x.pay}
            </p>
            <p className="card-text">
              <i className="fas fa-car"></i>
              {x.training}
            </p>
            <p className="card-text">
              <i className="fas fa-suitcase"></i>
              {x.holidays}
            </p>
            <p className="card-text">
              <i className="fas fa-umbrella-beach"></i>
              {x.shift}
            </p>
            <p className="card-text">
              <i className="fas fa-clock"></i>
              {x.bankholidays}
            </p>
            <p className="card-text">
              <i className="fas fa-phone"></i>
              {x.pph}
            </p>
            <div className="text-center">
              <a href="www.google.com" className="btn btn-primary">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
