import { useEffect } from 'react';
import { Shield, Brain, Globe, Users, ArrowRight, Lock, Zap, Target, Play, Handshake } from 'lucide-react';
import Navbar from './components/Navbar';
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/50 via-white to-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5 bg-[size:20px_20px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Securing AI's Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              CipherGenix leads the way in AI security solutions, ensuring a safer future for artificial intelligence.
            </p>
            <a href="#contact" className="button-primary inline-flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">About Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are pioneers in AI security, dedicated to creating robust solutions that protect artificial intelligence systems from emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Protection",
                description: "Cutting-edge security measures for AI systems",
                color: "from-blue-500/20 to-blue-600/20"
              },
              {
                icon: Brain,
                title: "Smart Solutions",
                description: "Intelligent approaches to security challenges",
                color: "from-purple-500/20 to-purple-600/20"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Protecting AI systems worldwide",
                color: "from-indigo-500/20 to-indigo-600/20"
              }
            ].map((feature, index) => (
              <div key={index} className="fade-in hover-scale">
                <div className={`glass-card p-8 rounded-xl text-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-30`} />
                  <div className="relative z-10">
                    <feature.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-primary via-purple-600 to-primary bg-[200%_auto] bg-clip-text text-transparent">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join forces with CipherGenix to shape the future of AI security. Together, we can build a safer digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="glass-card p-8 rounded-xl space-y-6">
                <Handshake className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Strategic Partnership</h3>
                <ul className="space-y-4">
                  {[
                    "Access to cutting-edge AI security solutions",
                    "Joint research and development opportunities",
                    "Exclusive technology previews",
                    "Customized security implementations"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="button-primary mt-6">
                  Become a Partner
                </button>
              </div>
            </div>
            <div className="fade-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-purple-300/20 to-primary/20 animate-float relative overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Demo Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6 animate-text bg-gradient-to-r from-primary via-purple-600 to-primary bg-[200%_auto] bg-clip-text text-transparent">
              Explore Our Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of our AI security solutions firsthand with our interactive demo.
            </p>
          </div>

          <div className="fade-in">
            <div className="relative aspect-video rounded-xl overflow-hidden glass-card group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-white text-2xl font-semibold mb-2">Interactive Demo</h3>
                <p className="text-white/90">See our AI security platform in action</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Protection",
                description: "Watch real-time threat detection and response"
              },
              {
                title: "Security Dashboard",
                description: "Explore our intuitive security monitoring interface"
              },
              {
                title: "Threat Analysis",
                description: "See how we identify and neutralize AI threats"
              }
            ].map((feature, index) => (
              <div key={index} className="fade-in">
                <div className="solution-card">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - Enhanced with better visuals */}
      <section id="vision" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We envision a future where artificial intelligence can operate securely and reliably, free from threats and vulnerabilities. Our mission is to make this vision a reality through innovative security solutions.
              </p>
              <ul className="space-y-6">
                {[
                  {
                    text: "Pioneer AI security standards",
                    icon: Lock,
                  },
                  {
                    text: "Develop next-gen protection systems",
                    icon: Zap,
                  },
                  {
                    text: "Foster secure AI innovation",
                    icon: Target,
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-4 p-4 glass-card rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in order-first md:order-last">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-purple-300/20 to-primary/20 animate-float" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl" />
                <div className="absolute inset-0 border border-white/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Enhanced with better cards */}
      <section id="solutions" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect AI systems at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Threat Detection",
                description: "Advanced systems to identify and neutralize security threats",
                icon: Shield
              },
              {
                title: "Vulnerability Assessment",
                description: "Comprehensive analysis of AI system vulnerabilities",
                icon: Target
              },
              {
                title: "Security Monitoring",
                description: "24/7 monitoring of AI system security status",
                icon: Globe
              },
              {
                title: "Incident Response",
                description: "Rapid response protocols for security incidents",
                icon: Zap
              },
              {
                title: "Compliance Management",
                description: "Ensure adherence to security standards",
                icon: Lock
              },
              {
                title: "Security Training",
                description: "Expert training for AI security professionals",
                icon: Users
              }
            ].map((solution, index) => (
              <div key={index} className="fade-in">
                <div className="solution-card">
                  <solution.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section - Enhanced with better cards and effects */}
      <section id="join" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of the team shaping the future of AI security. We're always looking for talented individuals to join our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Open Positions</h3>
                <ul className="space-y-4">
                  {[
                    "AI Security Engineer",
                    "Security Analyst",
                    "Research Scientist",
                    "Software Developer"
                  ].map((position, index) => (
                    <li key={index} className="p-4 bg-white/50 rounded-lg border border-gray-100 flex items-center justify-between hover:border-primary/20 transition-colors duration-300">
                      <span className="text-lg">{position}</span>
                      <button className="apply-button">
                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="fade-in">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Why Join Us?</h3>
                <ul className="space-y-6">
                  {[
                    "Work on cutting-edge AI security solutions",
                    "Collaborative and innovative environment",
                    "Competitive compensation and benefits",
                    "Professional development opportunities"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg border border-gray-100">
                      <Users className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with better form styling */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our solutions? We're here to help.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-8 fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-primary"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="input-primary min-h-[160px]"
                  rows={6}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="button-primary w-full text-lg"
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
