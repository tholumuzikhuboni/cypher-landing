
import { useEffect } from 'react';
import { Shield, Brain, Globe, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Securing AI's Future
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              CipherGenix leads the way in AI security solutions, ensuring a safer future for artificial intelligence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are pioneers in AI security, dedicated to creating robust solutions that protect artificial intelligence systems from emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Protection",
                description: "Cutting-edge security measures for AI systems"
              },
              {
                icon: Brain,
                title: "Smart Solutions",
                description: "Intelligent approaches to security challenges"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Protecting AI systems worldwide"
              }
            ].map((feature, index) => (
              <div key={index} className="fade-in glass-card p-6 rounded-lg text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                We envision a future where artificial intelligence can operate securely and reliably, free from threats and vulnerabilities. Our mission is to make this vision a reality through innovative security solutions.
              </p>
              <ul className="space-y-4">
                {[
                  "Pioneer AI security standards",
                  "Develop next-gen protection systems",
                  "Foster secure AI innovation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in order-first md:order-last">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-200 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect AI systems at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Threat Detection",
                description: "Advanced systems to identify and neutralize security threats"
              },
              {
                title: "Vulnerability Assessment",
                description: "Comprehensive analysis of AI system vulnerabilities"
              },
              {
                title: "Security Monitoring",
                description: "24/7 monitoring of AI system security status"
              },
              {
                title: "Incident Response",
                description: "Rapid response protocols for security incidents"
              },
              {
                title: "Compliance Management",
                description: "Ensure adherence to security standards"
              },
              {
                title: "Security Training",
                description: "Expert training for AI security professionals"
              }
            ].map((solution, index) => (
              <div key={index} className="fade-in p-6 rounded-lg border hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be part of the team shaping the future of AI security. We're always looking for talented individuals to join our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in glass-card p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Open Positions</h3>
              <ul className="space-y-4">
                {[
                  "AI Security Engineer",
                  "Security Analyst",
                  "Research Scientist",
                  "Software Developer"
                ].map((position, index) => (
                  <li key={index} className="flex items-center justify-between p-4 border rounded-lg bg-white/50">
                    <span>{position}</span>
                    <button className="text-primary hover:text-primary/80 transition-colors duration-200">
                      Apply Now <ArrowRight className="inline-block ml-2" size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in">
              <div className="glass-card p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Why Join Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Work on cutting-edge AI security solutions",
                    "Collaborative and innovative environment",
                    "Competitive compensation and benefits",
                    "Professional development opportunities"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our solutions? We're here to help.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
