import React, { useState } from "react";
import { css } from "@emotion/core";
import addToMailchimp from "gatsby-plugin-mailchimp";

const MailSubscription = ( {height = 50, inputBg = 'rgb(244, 244, 245)'} ) => {
  const [email, setEmail] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [emailExist, setEmailExist] = useState(false);

  const _handleSubmit = (e, email) => {
    e.preventDefault();
    setEmailSuccess(false);
    setEmailNotValid(false);
    setEmailExist(false);

    addToMailchimp(email)
      .then(data => {
        if (data.msg.includes("not valid")) setEmailNotValid(true);
        if (data.msg.includes("already subscribed")) setEmailExist(true);
        if (data.result === "success") setEmailSuccess(true);
      })
      .catch(() => {});
  };

  return (
    <div
      css={css`
        display: flex;
        position: relative;
        form {
          display: flex;
          height: ${height}px;

          input,
          button {
            display: flex;
            font-family: Heebo;
            font-size: 14px;
            letter-spacing: 0.2px;
            font-weight: bold;
            border: 0;
            :focus {
              outline: none;
            }
          }

          input {
            background: ${inputBg};
            padding-left: 20px;
            padding-right: 40px;
            border-radius: 5px 0px 0px 5px;
            :hover {
              background: #e8e8e8;
            }
          }
          button {
            padding: 0px 30px;
            color: white;
            background: #3479f6;
            border-radius: 0px 5px 5px 0px;
            :hover {
              background: #2f70e4;
            }
          }
        }
      `}
    >
      <form onSubmit={e => _handleSubmit(e, email)}>
        <input
          type="text"
          name="email"
          onChange={event => setEmail(event.target.value)}
          placeholder="Ihre Emailadresse"
          value={email}
        />
        <button type="submit">Los geht's!</button>
      </form>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          position: absolute;
          bottom: -40px;
          font-size: 15px;

          .fail {
            color: #d44950;
          }
          .success {
            color: #28a745;
          }
        `}
      >
        <span className="fail">
          {emailNotValid ? (
            <span>The email you entered is not valid.</span>
          ) : null}
        </span>
        <span className="fail">
          {emailExist ? <span>You're already subscribed</span> : null}
        </span>
        <span className="success">
          {emailSuccess ? <span>Thank you for subscribing!</span> : null}
        </span>
      </div>
    </div>
  );
};

export default MailSubscription;
