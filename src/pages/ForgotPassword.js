import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="container" style={{ marginBottom: "200px" }}>
        <div className="d-flex justify-content-center">
          <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
            <form>
            <div className="col-12 mb-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="form-control"
                />
                </div>
              
              <div className="col-6">
                <button className="btn btn-primary form-control" >send password reset link</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
