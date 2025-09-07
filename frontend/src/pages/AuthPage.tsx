import { SignInButton } from "@clerk/clerk-react";
import "../styles/auth.css";

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-hero">
          <div className="brand-container">
            <img src="/logo.png" alt="Chatter" className="brand-logo" />
            <span className="brand-name">Chatter</span>
          </div>

          <h1 className="hero-title">Where Work Happens ✨</h1>

          <p className="hero-subtitle">
            Connect with your team instantly through secure, real-time messaging. Experience seamless collaboration with powerful features designed for modern teams.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <span className="feature-text">Real-time messaging</span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">📹</span>
              <span className="feature-text">Video calls & meetings</span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span className="feature-text">Secure & private</span>
            </div>
          </div>

          <SignInButton mode="modal">
            <button className="cta-button">
              Get Started with Chatter <span className="button-arrow">→</span>
            </button>
          </SignInButton>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-image-container">
            <img src="/auth-i.png" alt="Team collaboration" className="auth-image" />
            <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
