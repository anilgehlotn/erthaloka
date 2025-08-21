import { useState } from 'react';
import { Menu, X, Users, Leaf, Lightbulb, MapPin, Building, Coins, Cpu, Vote, Recycle, Mail, Phone, MapPin as Location } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import heroEarth from '@/assets/hero-earth.jpg';
import aboutCommunity from '@/assets/about-community.jpg';
import logo from '@/assets/logo.jpeg';

// import { Button } from "@/components/ui/button";
// import { FileText, Users, Globe } from "lucide-react"; // icons

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Navbar */}

      {/* <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200"> </nav> 
        <div className="container mx-auto px-6 py-4"> </div>
          <div className="flex items-center justify-between"> </div> 
            <div className="text-2xl font-bold text-gradient-eco"> </div>  */}

              {/* <img src = {logo} alt="ErthaLoka"   className="w-32 h-auto mx-auto object-contain"  /> */}
            {/* </div> */}
            {/* <div className="hidden md:flex space-x-8"> </div> */}
              {/* <a href="#ecosystem" className="text-foreground/80 hover:text-primary transition-colors">Ecosystem</a>
              <a href="https://el-cc.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">ErthaDAO</a>
              <a href="#innovation" className="text-foreground/80 hover:text-primary transition-colors">Innovation</a>
              <a href="https://el-cc.vercel.app/" className="text-foreground/80 hover:text-primary transition-colors">Erthas</a>
              {/* <Button   variant="outline" size="sm">Connect</Button> */}
              {/* <Button asChild variant="outline" size="sm">
  <a href="https://el-dao.onrender.com/." target="_blank" rel="noopener noreferrer">
    Connect
  </a>
</Button>  */}
            {/* </div> */}
            {/* <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}
          {/* </div> */}
          {/* {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#ecosystem" className="block py-2 text-foreground/80 hover:text-primary">Ecosystem</a>
              <a href="https://el-cc.vercel.app/" target="_blank" rel="noopener noreferrer" className="block py-2 text-foreground/80 hover:text-primary">ErthaDA</a>
              <a href="#innovation" className="block py-2 text-foreground/80 hover:text-primary">Innovation</a>
              <a href="https://el-cc.vercel.app/" className="block py-2 text-foreground/80 hover:text-primary">Erthas</a>
              <Button variant="outline" size="sm" className="mt-2">Connect</Button>
            </div>
          )} */}
        {/* </div> */}
      {/* </nav> */}

      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroEarth})` }}
        />
        <div className="absolute inset-0 bg-gradient-eco-hero" />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto animate-fade-in-up">
          <h1 className="text-hero-title mb-6">
            Unleashing the Web3<br />Revolution in REGENERATION<br />and SUSTAINABILITY
          </h1>
          <p className="text-hero-subtitle mb-12 max-w-4xl mx-auto">
            A regenerative ecosystem for People, Planet & Purpose — driven by communities and enabled by technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://el-dao.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              Join the Community
            </a>
            <button className="btn-hero-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section> */}

      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img 
          src={logo} 
          alt="ErthaLoka" 
          className="h-10 w-auto object-contain logo-img" 
        />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <a href="#ecosystem" className="text-foreground/80 hover:text-primary transition-colors">Ecosystem</a>
        <a href="https://el-cc.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">ErthaDAO</a>
        <a href="#innovation" className="text-foreground/80 hover:text-primary transition-colors">Innovation</a>
        <a href="https://el-cc.vercel.app/" className="text-foreground/80 hover:text-primary transition-colors">Erthas</a>
        <Button asChild variant="outline" size="sm">
          <a href="https://el-dao.onrender.com/" target="_blank" rel="noopener noreferrer">
            Connect
          </a>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-foreground"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 pb-4 space-y-2">
        <a href="#ecosystem" className="block py-2 text-foreground/80 hover:text-primary">Ecosystem</a>
        <a href="https://el-cc.vercel.app/" target="_blank" rel="noopener noreferrer" className="block py-2 text-foreground/80 hover:text-primary">ErthaDAO</a>
        <a href="#innovation" className="block py-2 text-foreground/80 hover:text-primary">Innovation</a>
        <a href="https://el-cc.vercel.app/" className="block py-2 text-foreground/80 hover:text-primary">Erthas</a>
        <Button variant="outline" size="sm" className="mt-2">Connect</Button>
      </div>
    )}
  </div>
</nav>


      <section className="relative h-screen flex items-center justify-center overflow-hidden font-sans">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroEarth})` }}
  />
  
  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-6xl mx-auto animate-fade-in-up">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
      Unleashing the <span className="text-emerald-400">Web3</span><br />
      Revolution in <span className="text-emerald-400">Regeneration</span><br />
      and <span className="text-emerald-400">Sustainability</span>
    </h1>

    <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
      A regenerative ecosystem for <span className="font-semibold text-white">People, Planet & Purpose</span> — 
      driven by communities and enabled by blockchain technology.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <a 
        href="https://el-dao.onrender.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-8 py-4 text-lg font-semibold rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-lg"
      >
        Join the Community
      </a>
      <button className="px-8 py-4 text-lg font-semibold rounded-xl border border-gray-300 text-white hover:bg-white/10 transition">
        Learn More
      </button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
      <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
                What is ErthaLoka?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ErthaLoka is a revolutionary decentralized ecosystem that bridges the gap between sustainable living and cutting-edge technology. We're creating regenerative communities that thrive through collaboration, innovation, and respect for our planet.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-eco-primary rounded-full flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Restore Ecosystems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-eco-secondary rounded-full flex items-center justify-center">
                    <Coins className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Empower Local Economies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-eco-accent rounded-full flex items-center justify-center">
                    <Vote className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="font-medium">Decentralized Governance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-eco-earth rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Holistic Living</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src={aboutCommunity} 
                alt="ErthaLoka community living in harmony with nature"
                className="rounded-3xl shadow-eco-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EcoVerse Model
      <section id="ecoverse" className="py-20 px-6 bg-gradient-eco-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
              The Ecoverse Model
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three interconnected pillars that create a regenerative ecosystem for sustainable living and thriving communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-eco animate-fade-in-up group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-eco-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-eco">People</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Community-Centered Living</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Eco-villages and co-housing</li>
                  <li>• Decentralized Autonomous Organizations</li>
                  <li>• Collaborative decision-making</li>
                  <li>• Regenerative education systems</li>
                  <li>• Cultural exchange programs</li>
                </ul>
              </div>
            </div>
            <div className="card-eco animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-eco-secondary to-eco-forest rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-eco">Planet</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Regenerative Systems</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Closed-loop food-water-energy systems</li>
                  <li>• Climate-resilient design</li>
                  <li>• AI and IoT for optimization</li>
                  <li>• Biodiversity conservation</li>
                  <li>• Waste-to-resource transformation</li>
                </ul>
              </div>
            </div>
            <div className="card-eco animate-fade-in-up group" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-eco-accent to-eco-earth rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Lightbulb className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-eco">Purpose</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Values-Driven Innovation</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Local digital currencies</li>
                  <li>• Cultural regeneration projects</li>
                  <li>• Creative expression platforms</li>
                  <li>• Impact measurement systems</li>
                  <li>• Knowledge sharing networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
              Our Economy and Our Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interconnected platforms and tools that enable regenerative communities to thrive in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-feature animate-fade-in-up">
              <Coins  className="w-12 h-12 text-eco-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">
                 <a href="https://el-cc.vercel.app/" target="_blank" rel="noopener noreferrer">
    Economy
  </a>
              </h3>
              <p className="text-muted-foreground">
                Exchange value through local digital currencies and circular economy principles that benefit everyone.
              </p>
            </div>
            <div className="card-feature animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Building className="w-12 h-12 text-eco-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Governance</h3>
              <p className="text-muted-foreground">
                Participate in decentralized decision-making through our DAO framework. Your voice matters in shaping the future.
              </p>
            </div>
            <div className="card-feature animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <MapPin className="w-12 h-12 text-eco-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Hub</h3>
              <p className="text-muted-foreground">
                Discover and connect with regenerative communities worldwide. Find your ideal eco-village or co-housing project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="innovation" className="py-20 px-6 bg-gradient-eco-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
              Innovation Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology meets ancient wisdom to create sustainable solutions for modern challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-feature animate-fade-in-up">
              <Cpu className="w-12 h-12 text-eco-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Smart Resource Management</h3>
              <p className="text-muted-foreground mb-4">
                AI and IoT systems optimize energy, water, and food distribution for maximum efficiency and minimal waste.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-eco-primary/10 text-eco-primary rounded-full text-sm">AI Optimization</span>
                <span className="px-3 py-1 bg-eco-primary/10 text-eco-primary rounded-full text-sm">IoT Sensors</span>
              </div>
            </div>
            <div className="card-feature animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Vote className="w-12 h-12 text-eco-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Decentralized Governance</h3>
              <p className="text-muted-foreground mb-4">
                Community-driven decision making through transparent, blockchain-based voting and consensus mechanisms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-eco-secondary/10 text-eco-secondary rounded-full text-sm">DAO Framework</span>
                <span className="px-3 py-1 bg-eco-secondary/10 text-eco-secondary rounded-full text-sm">Blockchain</span>
              </div>
            </div>
            <div className="card-feature animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Recycle className="w-12 h-12 text-eco-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Circular Economy</h3>
              <p className="text-muted-foreground mb-4">
                Transform waste into resources through upcycling networks and local digital currency exchanges.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-eco-accent/20 text-eco-accent-foreground rounded-full text-sm">Upcycling</span>
                <span className="px-3 py-1 bg-eco-accent/20 text-eco-accent-foreground rounded-full text-sm">Local Currency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* EcoVerse Model */}
      <section id="ecoverse" className="py-20 px-6 bg-gradient-eco-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
              The Ecoverse Model
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three interconnected pillars that create a regenerative ecosystem for sustainable living and thriving communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-eco animate-fade-in-up group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-eco-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-eco">People</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Community-Centered Living</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Eco-villages and co-housing</li>
                  <li>• Decentralized Autonomous Organizations</li>
                  <li>• Collaborative decision-making</li>
                  <li>• Regenerative education systems</li>
                  <li>• Cultural exchange programs</li>
                </ul>
              </div>
            </div>
            <div className="card-eco animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-eco-secondary to-eco-forest rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-eco">Planet</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Regenerative Systems</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Closed-loop food-water-energy systems</li>
                  <li>• Climate-resilient design</li>
                  <li>• AI and IoT for optimization</li>
                  <li>• Biodiversity conservation</li>
                  <li>• Waste-to-resource transformation</li>
                </ul>
              </div>
            </div>
            <div className="card-eco animate-fade-in-up group" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-eco-accent to-eco-earth rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Lightbulb className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-eco">Purpose</h3>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Values-Driven Innovation</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Local digital currencies</li>
                  <li>• Cultural regeneration projects</li>
                  <li>• Creative expression platforms</li>
                  <li>• Impact measurement systems</li>
                  <li>• Knowledge sharing networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-20 px-6 bg-gradient-eco-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Working together with innovative organizations to build a regenerative future.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            <div className="card-feature text-center">
              <h3 className="text-lg font-semibold text-foreground">River Venture Studio</h3>
            </div>
            <div className="card-feature text-center">
              <h3 className="text-lg font-semibold text-foreground">AIC-PECF</h3>
            </div>
            <div className="card-feature text-center">
              <h3 className="text-lg font-semibold text-foreground">Francais Sports Club</h3>
            </div>
            <div className="card-feature text-center">
              <h3 className="text-lg font-semibold text-foreground">River Venture Studio</h3>
            </div>
            <div className="card-feature text-center">
              <h3 className="text-lg font-semibold text-foreground">AIC-PECF</h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-6 bg-gradient-eco-subtle"> </section>
  <div className="container mx-auto max-w-6xl"> </div>
    <div className="text-center mb-16"> </div>
      <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
        Our Partners
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Working together with innovative organizations to build a regenerative future.
      </p> */}
    {/* </div> */}

    {/* Marquee Wrapper */}
    {/* <div className="overflow-hidden relative w-full"> </div>
      <div className="flex animate-marquee space-x-16"> </div> */}
        {/* One loop of partners */}
        {/* <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">River Venture Studio</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">AIC-PECF</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">Francais Sports Club</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">River Venture Studio</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">AIC-PECF</h3>
        </div> */}

        {/* Duplicate for seamless loop */}
        {/* <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">River Venture Studio</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">AIC-PECF</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">Francais Sports Club</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">River Venture Studio</h3>
        </div>
        <div className="card-feature text-center">
          <h3 className="text-lg font-semibold text-foreground">AIC-PECF</h3>
        </div> */}
      {/* </div> */}
    {/* // </div> */}
  {/* // </div> */}
{/* </section> */}



      {/* Get Involved Section
      <section id="initiatives" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Investors, partners, designers, technologists, farmers, builders—this is your call. Join us in creating a regenerative future where communities thrive in harmony with nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-hero-primary">
              Request Deck
            </Button>
            <Button size="lg" variant="outline">
              Become a Partner
            </Button>
            <Button size="lg" variant="secondary">
              Join Our DAO
            </Button>
          </div>
        </div>
      </section> */}

      
<section className="py-20 px-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
  <div className="container mx-auto max-w-6xl">
    {/* Partners Section */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
        Our Partners
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Collaborating with forward-thinking organizations to build a
        decentralized, regenerative future.
      </p>
    </div>
  </div>
</section>



{/* Get Involved Section
<section
  id="initiatives"
  className="py-20 px-6 bg-gradient-to-t from-emerald-50 via-white to-emerald-50"
>
  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
      Get Involved
    </h2>
    <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
      Builders, validators, investors, and dreamers—this is your moment.
      Join our community-driven ecosystem to shape a transparent,
      decentralized, and regenerative future.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Button size="lg" className="btn-hero-primary">
        Read Whitepaper
      </Button>
      <Button size="lg" variant="outline">
        Become a Validator
      </Button>
      <Button size="lg" variant="secondary">
        Join the Community
      </Button>
    </div>
  </div>
</section> */}



<section className="relative py-24 px-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 overflow-hidden">
  <div className="container mx-auto max-w-6xl relative z-10">
    {/* Partners Section */}
    {/* <div className="text-center mb-20">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
        Our Partners
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Working alongside visionary organizations to build a transparent,
        decentralized, and regenerative ecosystem.
      </p>
    </div> */}

    {/* Partner Marquee */}
    <div className="overflow-hidden relative w-full mb-28">
      <div className="flex animate-marquee space-x-16">
        {[
          "River Venture Studio",
          "AIC-PECF",
          "Francais Sports Club",
          "EcoChain Labs",
          "Green Future Network",
        ].map((partner, i) => (
          <div
            key={i}
            className="px-8 py-4 rounded-xl bg-white shadow-md border border-emerald-100 min-w-[220px] text-center hover:shadow-lg hover:shadow-emerald-100/50 transition"
          >
            <h3 className="text-lg font-semibold text-emerald-700">{partner}</h3>
          </div>
        ))}

        {/* Duplicate for seamless loop */}
        {[
          "River Venture Studio",
          "AIC-PECF",
          "Francais Sports Club",
          "EcoChain Labs",
          "Green Future Network",
        ].map((partner, i) => (
          <div
            key={i + 10}
            className="px-8 py-4 rounded-xl bg-white shadow-md border border-emerald-100 min-w-[220px] text-center hover:shadow-lg hover:shadow-emerald-100/50 transition"
          >
            <h3 className="text-lg font-semibold text-emerald-700">{partner}</h3>
          </div>
        ))}
      </div>
    </div>

    {/* Get Involved Section */}
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
        Get Involved
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
        Builders, validators, investors, and dreamers—this is your call.  
        Join our community-driven ecosystem to shape a future of transparency,
        decentralization, and trust.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button
          size="lg"
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition"
        >
          Read Whitepaper
        </Button>
        <Button
          size="lg"
          className="border border-emerald-400 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-2xl"
          variant="outline"
        >
          Become a Validator
        </Button>
        <Button
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition"
          variant="secondary"
        >
          Join the Community
        </Button>
      </div>
    </div>
  </div>
</section>

      

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gradient-eco-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gradient-eco">
                Connect With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to be part of the regenerative revolution? Reach out to learn more about ErthaLoka and how you can contribute to our mission.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-eco-primary" />
                  <span>+91 7829778299</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-eco-primary" />
                  <span>erthaloka@gmail.com </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Location className="w-5 h-5 text-eco-primary" />
                  <span>MDR 1115, Kaatu Meetu Vidhi, Kuilapalyam, Near Auroville, Tamil Nadu - 605101</span>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => {
                  e.preventDefault(); // prevent default refresh
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:erthaloka@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
            }} className="card-feature">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full btn-hero-primary">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground/5 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-gradient-eco mb-4">
                ErthaLoka
              </div>
              <p className="text-muted-foreground mb-4">
                A Universe Beyond Sustainability
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="https://www.linkedin.com/company/erthaloka-dao/posts/?feedView=all" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/erthaloka_dao/?igsh=dWl2aHJmdGZkamg%3D#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="https://t.me/+UrNpC1k1sR9iZjhl" className="text-muted-foreground hover:text-primary transition-colors">
                  Telegram
                </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=erthalokadao@gmail.com&tf=cm" className="text-muted-foreground hover:text-primary transition-colors">
                  Email
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#ecosystem" className="block text-muted-foreground hover:text-primary transition-colors">
                  Ecosystem
                </a>
                <a href="#innovation" className="block text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Join DAO
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Developers
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 ErthaLoka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;