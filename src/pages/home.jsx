/*import React from "react";
import "./home.css";

const Home = () => {
  return (
    <main className="home-page">
      {}
      <section className="hero">
        <h1>FreshTrack 🌿</h1>
        <p className="hero-tagline">
          Track shelf life. Prevent food waste. Protect the planet.
        </p>
        <a href="/login" className="cta-button">Start Tracking</a>
      </section>

      {}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Over one-third of all food is wasted globally. ShelfLife is a not-for-profit initiative
          helping farmers, NGOs, and consumers track the freshness and expiry of food products in real time.
          Our mission is to create a zero-waste world where every bite counts.
        </p>
      </section>

      {}
      <section className="features">
        <h2>What You Can Do with ShelfLife</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📅 Real-Time Shelf Life</h3>
            <p>Know when your food expires and avoid unnecessary spoilage.</p>
          </div>
          <div className="feature-card">
            <h3>🔔 Expiry Alerts</h3>
            <p>Get notified before products go bad — act early, save more.</p>
          </div>
          <div className="feature-card">
            <h3>🍏 Smart Food Insights</h3>
            <p>Monitor freshness, manage inventory, and reduce waste smartly.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Join the Movement</h3>
            <p>Be part of the solution — create sustainable impact at scale.</p>
          </div>
        </div>
      </section>

      {}
      <section className="call-to-action">
        <h2>Be Part of the Change</h2>
        <p>
          We’re building a future where no food is wasted. Whether you're a farmer, NGO, or individual —
          your actions matter. Start now.
        </p>
        <a href="/login" className="cta-button">Get Started</a>
      </section>
    </main>
  );
};

export default Home;
*/

/*import React, { useState, useEffect } from "react";
import { Calendar, Bell, Brain, Globe, BarChart3, ShoppingCart } from 'lucide-react';
import "./home.css";


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState({
    foodWasted: 0,
    farmersSaved: 0,
    tonsSaved: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    const targetStats = {
      foodWasted: 1300,
      farmersSaved: 500,
      tonsSaved: 250
    };
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStatsCounter({
        foodWasted: Math.floor(targetStats.foodWasted * progress),
        farmersSaved: Math.floor(targetStats.farmersSaved * progress),
        tonsSaved: Math.floor(targetStats.tonsSaved * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, []);

const features = [
    {
      icon: "calendar",
      title: "Real-Time Shelf Life",
      description: "Know when your food expires and avoid unnecessary spoilage.",
      color: "#4CAF50"
    },
    {
      icon: "bell",
      title: "Expiry Alerts",
      description: "Get notified before products go bad — act early, save more.",
      color: "#FF9800"
    },
    {
      icon: "brain",
      title: "Smart Food Insights",
      description: "Monitor freshness, manage inventory, and reduce waste smartly.",
      color: "#2196F3"
    },
    {
      icon: "globe",
      title: "Join the Movement",
      description: "Be part of the solution — create sustainable impact at scale.",
      color: "#9C27B0"
    },
    {
      icon: "chart-bar",
      title: "Waste Analytics",
      description: "Track your food waste patterns and savings with detailed reports.",
      color: "#FF5722"
    },
    {
      icon: "shopping-cart",
      title: "Smart Shopping Lists",
      description: "Generate optimized shopping lists based on your consumption patterns.",
      color: "#795548"
    }
  ];

  const iconMap = {
    calendar: Calendar,
    bell: Bell,
    brain: Brain,
    globe: Globe,
    'chart-bar': BarChart3,
    'shopping-cart': ShoppingCart
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "NGO Director",
      text: "FreshTrack helped us reduce food waste by 65% in our community programs.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      role: "Organic Farmer",
      text: "I can now track my harvest better and connect with NGOs efficiently.",
      avatar: "👨‍🌾"
    },
    {
      name: "Green Earth Foundation",
      role: "Environmental NGO",
      text: "An essential tool for our zero-waste initiatives. Highly recommended!",
      avatar: "🌱"
    }
  ];

  return (
    <div>
    <main className={`home-page ${isVisible ? 'fade-in' : ''}`}>
      {}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🌿 Sustainable Food Management</span>
          </div>
          <h1 className="hero-title">
            Fresh<span className="accent-color">Track</span>
          </h1>
          <p className="hero-tagline">
            Track shelf life. Prevent food waste. Protect the planet.
          </p>
          <div className="hero-buttons">
            <a href="/login" className="cta-button primary">
              Start Tracking
            </a>
            <a href="#features" className="cta-button secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-header">
              <span className="status-dot fresh"></span>
              <span>Fresh Produce</span>
            </div>
            <div className="card-content">
              <h4>🍎 Organic Apples</h4>
              <p>Expires in: <strong>3 days</strong></p>
              <div className="freshness-bar">
                <div className="freshness-fill" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
          <div className="floating-card delayed">
            <div className="card-header">
              <span className="status-dot warning"></span>
              <span>Expiring Soon</span>
            </div>
            <div className="card-content">
              <h4>🥕 Carrots</h4>
              <p>Expires in: <strong>1 day</strong></p>
              <div className="freshness-bar">
                <div className="freshness-fill warning" style={{width: '20%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{statsCounter.foodWasted}M+</div>
            <div className="stat-label">Tons of Food Wasted Annually</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{statsCounter.farmersSaved}+</div>
            <div className="stat-label">Farmers Using FreshTrack</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{statsCounter.tonsSaved}+</div>
            <div className="stat-label">Tons of Food Saved</div>
          </div>
        </div>
      </section>

      {}
      <section className="mission">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Over one-third of all food is wasted globally. FreshTrack is a not-for-profit initiative
              helping farmers, NGOs, and consumers track the freshness and expiry of food products in real time.
              Our mission is to create a zero-waste world where every bite counts.
            </p>
            <div className="mission-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎯</span>
                <span>Zero Waste Goal</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🤝</span>
                <span>Community Driven</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">📊</span>
                <span>Data-Powered</span>
              </div>
            </div>
          </div>
          <div className="mission-visual">
            <div className="impact-circle">
              <div className="impact-text">
                <span className="impact-number">1/3</span>
                <span className="impact-label">of food is wasted globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="features" id="features">
        <h2>What You Can Do with FreshTrack</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{'--accent-color': feature.color}}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="testimonials">
        <h2>What Our Community Says</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="call-to-action">
        <div className="cta-content">
          <h2>Be Part of the Change</h2>
          <p>
            We're building a future where no food is wasted. Whether you're a farmer, NGO, or individual —
            your actions matter. Start now.
          </p>
          <div className="cta-buttons">
            <a href="/login" className="cta-button primary">Get Started</a>
            <a href="/register" className="cta-button outline">Join as Partner</a>
          </div>
        </div>
        <div className="cta-background">
          <div className="floating-element">🌱</div>
          <div className="floating-element">🍎</div>
          <div className="floating-element">🥕</div>
          <div className="floating-element">🌿</div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Home;

*/
import React, { useState, useEffect } from "react";
import "./home.css";
import {
  Calendar,
  Bell,
  Brain,
  Globe,
  BarChart3,
  ShoppingCart
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState({
    foodWasted: 0,
    farmersSaved: 0,
    tonsSaved: 0
  });

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const targetStats = {
      foodWasted: 1300,
      farmersSaved: 500,
      tonsSaved: 250
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStatsCounter({
        foodWasted: Math.floor(targetStats.foodWasted * progress),
        farmersSaved: Math.floor(targetStats.farmersSaved * progress),
        tonsSaved: Math.floor(targetStats.tonsSaved * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: "calendar",
      title: "Real-Time Shelf Life",
      description: "Know when your food expires and avoid unnecessary spoilage.",
      color: "#4CAF50"
    },
    {
      icon: "bell",
      title: "Expiry Alerts",
      description: "Get notified before products go bad — act early, save more.",
      color: "#FF9800"
    },
    {
      icon: "brain",
      title: "Smart Food Insights",
      description: "Monitor freshness, manage inventory, and reduce waste smartly.",
      color: "#2196F3"
    },
    {
      icon: "globe",
      title: "Join the Movement",
      description: "Be part of the solution — create sustainable impact at scale.",
      color: "#9C27B0"
    },
    {
      icon: "chart-bar",
      title: "Waste Analytics",
      description: "Track your food waste patterns and savings with detailed reports.",
      color: "#FF5722"
    },
    {
      icon: "shopping-cart",
      title: "Smart Shopping Lists",
      description: "Generate optimized shopping lists based on your consumption patterns.",
      color: "#795548"
    }
  ];

  const iconMap = {
    calendar: Calendar,
    bell: Bell,
    brain: Brain,
    globe: Globe,
    "chart-bar": BarChart3,
    "shopping-cart": ShoppingCart
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "NGO Director",
      text: "FreshTrack helped us reduce food waste by 65% in our community programs.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      role: "Organic Farmer",
      text: "I can now track my harvest better and connect with NGOs efficiently.",
      avatar: "👨‍🌾"
    },
    {
      name: "Green Earth Foundation",
      role: "Environmental NGO",
      text: "An essential tool for our zero-waste initiatives. Highly recommended!",
      avatar: "🌱"
    }
  ];

  return (
    <div>
      <main className={`home-page ${isVisible ? "fade-in" : ""}`}>
        {}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🌿 Sustainable Food Management</span>
            </div>
            <h1 className="hero-title">
              Fresh<span className="accent-color">Track</span>
            </h1>
            <p className="hero-tagline">
              Track shelf life. Prevent food waste. Protect the planet.
            </p>
            <div className="hero-buttons">
              <a href="/login" className="cta-button primary">
                Start Tracking
              </a>
              <a href="#features" className="cta-button secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-header">
                <span className="status-dot fresh"></span>
                <span>Fresh Produce</span>
              </div>
              <div className="card-content">
                <h4>🍎 Organic Apples</h4>
                <p>
                  Expires in: <strong>3 days</strong>
                </p>
                <div className="freshness-bar">
                  <div className="freshness-fill" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
            <div className="floating-card delayed">
              <div className="card-header">
                <span className="status-dot warning"></span>
                <span>Expiring Soon</span>
              </div>
              <div className="card-content">
                <h4>🥕 Carrots</h4>
                <p>
                  Expires in: <strong>1 day</strong>
                </p>
                <div className="freshness-bar">
                  <div className="freshness-fill warning" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">{statsCounter.foodWasted}M+</div>
              <div className="stat-label">Tons of Food Wasted Annually</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{statsCounter.farmersSaved}+</div>
              <div className="stat-label">Farmers Using FreshTrack</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{statsCounter.tonsSaved}+</div>
              <div className="stat-label">Tons of Food Saved</div>
            </div>
          </div>
        </section>

        {}
        <section className="mission">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Over one-third of all food is wasted globally. FreshTrack is a
                not-for-profit initiative helping farmers, NGOs, and consumers
                track the freshness and expiry of food products in real time.
                Our mission is to create a zero-waste world where every bite counts.
              </p>
              <div className="mission-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🎯</span>
                  <span>Zero Waste Goal</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🤝</span>
                  <span>Community Driven</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📊</span>
                  <span>Data-Powered</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="impact-circle">
                <div className="impact-text">
                  <span className="impact-number">1/3</span>
                  <span className="impact-label">of food is wasted globally</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="features" id="features">
          <h2>What You Can Do with FreshTrack</h2>
          <div className="features-grid">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="feature-card"
                  style={{ "--accent-color": feature.color }}
                >
                  <div className="feature-icon">
                    {IconComponent && (
                      <IconComponent size={32} color={feature.color} />
                    )}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="feature-hover-effect"></div>
                </div>
              );
            })}
          </div>
        </section>

        {}
        <section className="testimonials">
          <h2>What Our Community Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="call-to-action">
          <div className="cta-content">
            <h2>Be Part of the Change</h2>
            <p>
              We're building a future where no food is wasted. Whether you're a
              farmer, NGO, or individual — your actions matter. Start now.
            </p>
            <div className="cta-buttons">
              <a href="/login" className="cta-button primary">
                Get Started
              </a>
              <a href="/register" className="cta-button outline">
                Join as Partner
              </a>
            </div>
          </div>
          <div className="cta-background">
            <div className="floating-element">🌱</div>
            <div className="floating-element">🍎</div>
            <div className="floating-element">🥕</div>
            <div className="floating-element">🌿</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
