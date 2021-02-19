import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div className="container-main no-padding" style={{ width: "100%" }}>
        <div className="auth-grid">
          <div className="auth-title">
            <h1 className="big-txt" style={{ fontSize: "4rem" }}>
              SnapFlash
            </h1>
            <p className="auth-description" style={{ fontSize: "1.6rem" }}>
              Simple flashcards
            </p>
          </div>
          <div className="ctr-line dk-bg-1"></div>
          <div className="auth-registration lt-bg-1 bdr-radius auth-reg-grid shdo-dk">
            <div id="mobile-padding" className="flx-spc-ard">
              {showLogin ? (
                <div className="flex-down">
                  <>
                    <LoginForm setUser={setUser} />
                    <button
                      className="auth-form-switch"
                      onClick={() => setShowLogin(!showLogin)}
                    >
                      {showLogin ? "SIGN UP" : "LOG IN"}
                    </button>
                  </>
                </div>
              ) : (
                <div className="flex-down">
                  <>
                    <SignUpForm setUser={setUser} />
                    <button
                      className="auth-form-switch"
                      onClick={() => setShowLogin(!showLogin)}
                    >
                      {showLogin ? "SIGN UP" : "LOG IN"}
                    </button>
                  </>
                </div>
              )}
            </div>
          </div>
          <div className="align-center"></div>
        </div>
      </div>
    </main>
  );
}
