import React from "react";
const ContactUsComponent = () => {
  return (
    <>
      <div
        className="container text-center align-items-center justify-content-center d-flex contact_us"
        id="contact"
      >
        <div className="row">
          <h2 className="fw-bold text-white lh-sm">CONTACT</h2>
          <p className="fw-bolder text-white">
            It's food lovers like you who inspire us to do what we do. Your
            comments, ideas and questions push us to go that extra mile, every
            time. So drop us a line!
          </p>
          <button className="btn get_in_touch_btn w-25 fw-bold m-auto lh-sm  fs-6">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUsComponent;