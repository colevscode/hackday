import React from "react";

export default function (props) {
  const [serverState, setServerState] = React.useState({
    submitting: false,
    submitted: false,
    error: false
  });

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, submitted: false, error: false });

    // TODO: Replace the endpoint below with one created at
    // https://formspree.io, or use whatever you want.

    fetch("https://formspree.io/mddryokm", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        setServerState({ submitting: false, submitted: true, error: false });
        form.reset();
      } else {
        response.json().then(data => {
          setServerState({
            submitting: false,
            submitted: true,
            error: data.error
          });
        });
      }
    });
  }

  return (
    <div 
      className="content" 
      style={
        (serverState.submitted && !serverState.error) 
          ? {marginTop: "-1000px"} : {}
    }>
    <h1>It's a Hack Day!<br/>Wanna come?</h1>
    <form onSubmit={handleSubmit}>
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
      <input type="submit" disabled={serverState.submitting}/>
      {serverState.error && <div>OOPS! {serverState.error}</div>}
    </form>
    </div>

  );
}
