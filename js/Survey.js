import React from "react";

export default class Survey extends React.Component {
  render() {
    return (
      <form action="https://formspree.io/mddryokm" method="POST">
        <label>
          <div className="left">Yes! My name is:</div>
          <div className="right">
            <input
              className="underlined survey"
              placeholder="Name  (required)"
              type="text"
              name="_name"
              required
            />{" "}
          </div>
        </label>
        <label>
          <div className="left">Hit me up at: </div>
          <div className="right">
            <input
              className="underlined survey"
              placeholder="Email  (requred)"
              type="email"
              name="_replyto"
              required
            />
          </div>
        </label>
        <label>
          <div className="left">I prefer to meet in: </div>
          <div className="right">
            <select name="Neighborhood" className="underlined survey">
              <option value="Manhattan">Manhattan</option>
              <option value="BedStuy">Bed Stuy</option>
              <option value="Wherever">Wherever</option>
            </select>
          </div>
        </label>
        <label>
          <div className="left">I'm available: </div>
          <div>
            <input
              className="underlined survey block"
              placeholder="Which times? (eg: thurs nights)  (required)"
              type="text"
              name="Availability"
              required
            />{" "}
          </div>
        </label>
        <label>
          <div className="left">I'm working on: </div>
          <div>
            <input
              className="underlined survey block"
              type="text"
              name="WorkingOn"
            />
          </div>
        </label>
        <div>Thanks!</div>
        <input type="submit" />
      </form>
    );
  }
}
