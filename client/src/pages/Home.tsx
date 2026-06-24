import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShoppingCart, Menu, X, ArrowRight, ShieldCheck, Truck, Factory,
  PenTool, Paintbrush, Stamp, Briefcase, Gift, PackageOpen, 
  ChevronRight, Star, Heart, Share2, Facebook, Twitter, Instagram, Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Particle component for Hero
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* 9. Shipping Information Banner */}
      <div className="bg-primary/10 border-b border-primary/20 text-center py-2 text-sm text-primary font-medium tracking-wide">
        ₹80 shipping below ₹499 | Free shipping above ₹499 | Custom orders: 15–21 days | No COD
      </div>

      {/* 1. Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-heading font-bold text-background">
              D
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Durgashop<span className="text-primary">.</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="text-foreground transition-colors hover:text-primary">Home</a>
            <a href="#products" className="transition-colors hover:text-primary">Products</a>
            <a href="#bulk" className="transition-colors hover:text-primary">Bulk Orders</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all rounded-full px-6">
              Shop Now
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
        <Particles />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUpVariant}>
                <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-sm uppercase tracking-widest font-semibold rounded-full">
                  Modern Commerce Platform
                </Badge>
              </motion.div>
              <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                India's Premium <br />
                <span className="text-gradient">Stationery & Art</span> <br />
                Supply Destination
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                884+ products for students, artists, offices, retailers & businesses. Elevate your craft with world-class materials and custom branding.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all rounded-full">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 hover:border-white/40 hover:bg-white/5 rounded-full backdrop-blur-sm">
                  Bulk Orders
                </Button>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Free Shipping Above ₹499</span>
                <span className="flex items-center gap-2"><PackageOpen className="w-4 h-4 text-accent" /> Bulk Orders Available</span>
                <span className="flex items-center gap-2"><Stamp className="w-4 h-4 text-secondary" /> Custom Branding</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center perspective-[1000px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[80px]" />
              <img 
                src="/hero-art.png" 
                alt="Premium Art Supplies" 
                className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_0_40px_rgba(0,229,255,0.2)] animate-[float_6s_ease-in-out_infinite]"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
              <style>{`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                  100% { transform: translateY(0px); }
                }
              `}</style>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Product Categories Section */}
      <section id="products" className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore Our World</h2>
            <p className="text-muted-foreground text-lg">Curated collections for every creative endeavor and professional need.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: PenTool, name: "Stationery", desc: "Premium pens, markers, and notebooks.", color: "text-primary", border: "neon-glow-hover" },
              { icon: Paintbrush, name: "Art Supplies", desc: "Canvas, varnish, fixatives & brushes.", color: "text-accent", border: "purple-glow-hover" },
              { icon: Stamp, name: "Block Printing Stamps", desc: "Our signature hand-carved wooden blocks.", color: "text-secondary", border: "neon-glow-hover" },
              { icon: Briefcase, name: "Office Supplies", desc: "Registers, filing, and desk accessories.", color: "text-primary", border: "neon-glow-hover" },
              { icon: Gift, name: "Promotional Products", desc: "Custom corporate branding & gifting.", color: "text-accent", border: "purple-glow-hover" },
              { icon: Factory, name: "Wholesale Orders", desc: "High-volume supplies for retailers.", color: "text-secondary", border: "neon-glow-hover" }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className={`glass-card p-8 rounded-2xl cursor-pointer group ${cat.border}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${cat.color} shadow-lg border border-white/5`}>
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{cat.name}</h3>
                <p className="text-muted-foreground mb-6">{cat.desc}</p>
                <div className="flex items-center text-sm font-semibold text-white/70 group-hover:text-primary transition-colors">
                  Explore <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Excellence</h2>
              <p className="text-muted-foreground text-lg">Hand-picked selections from our vast catalog.</p>
            </motion.div>
            <Button variant="link" className="text-primary hover:text-primary/80">
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Artline Yoodle Fine Line Multicolour Pen", price: "₹299", desc: "Precision drawing pens", tag: "Bestseller" },
              { name: "Best Choice Premium Rough Notebook", price: "₹199", desc: "Thick paper, perfect for sketches", tag: "Essential" },
              { name: "Amariz Canvas Board", price: "₹449", desc: "Professional grade texture", tag: "Premium" },
              { name: "Arfina Artist's Picture Varnish Spray", price: "₹599", desc: "UV resistant protective finish", tag: "Professional" }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } }
                }}
                className="glass-card rounded-2xl overflow-hidden group neon-glow-hover flex flex-col"
              >
                <div className="h-48 bg-black/40 relative flex items-center justify-center p-6">
                  <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-primary border-primary/30">
                    {prod.tag}
                  </Badge>
                  <Button size="icon" variant="ghost" className="absolute top-4 right-4 text-white/50 hover:text-red-500 hover:bg-transparent">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/5 flex items-center justify-center">
                    <span className="text-white/20 font-heading text-sm uppercase tracking-widest">Image Placeholder</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">{prod.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{prod.desc}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{prod.price}</span>
                    <Button size="sm" className="rounded-full bg-white/10 hover:bg-primary hover:text-background border-none transition-colors">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. USP Section */}
      <section className="py-24 bg-card/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Left USP */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
              className="lg:pr-12 lg:border-r border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-8 border border-secondary/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <Stamp className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hand-Carved Wooden Printing Blocks</h2>
              <p className="text-muted-foreground text-lg mb-8">Our signature offering. Perfect for textile printing, crafts, DIY art & traditional design. Rooted in Indian heritage, crafted for global creators.</p>
              <ul className="space-y-4 mb-8">
                {['Authentic Sheesham wood', 'Intricate hand-carved details', 'Custom designs available', 'Perfect for fabric & paper'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 text-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-full border-secondary/50 text-secondary hover:bg-secondary hover:text-white">
                Explore Collection
              </Button>
            </motion.div>

            {/* Right USP */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
              className="lg:pl-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-8 border border-accent/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <Gift className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Promote Your Brand with Customized Merchandise</h2>
              <p className="text-muted-foreground text-lg mb-8">Elevate your corporate identity with premium branded goods. From custom pens and keychains to calendars and executive gifts.</p>
              <ul className="space-y-4 mb-8">
                {['High-quality UV & Laser printing', 'Low minimum order quantities', 'End-to-end design support', 'Fast turnaround times'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                Request Bulk Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Durgashop */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Durgashop Advantage</h2>
            <p className="text-muted-foreground text-lg">Why thousands of creators and businesses trust us.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { num: "884+", text: "Products", desc: "Large stationery catalog" },
              { num: "4-8", text: "Days", desc: "Fast shipping delivery" },
              { num: "B2B", text: "+ B2C", desc: "Retail and wholesale" },
              { num: "100%", text: "Custom", desc: "Promotional merchandise" },
              { num: "Partner", text: "Program", desc: "Earn affiliate commissions" },
              { num: "Trusted", text: "Supplier", desc: "Local + online presence" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, delay: i * 0.05 } }
                }}
                className="bg-gradient-to-b from-card to-background p-6 md:p-8 rounded-2xl border border-white/5 text-center group hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2 group-hover:from-primary group-hover:to-secondary transition-all">
                  {stat.num}
                </div>
                <div className="text-lg font-bold mb-1">{stat.text}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. B2B Banner */}
      <section id="bulk" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden glass-card p-8 md:p-12 lg:p-16 border-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Are You a Retailer, School, Office or Coaching Institute?
                </h2>
                <div className="flex flex-wrap gap-4 text-primary/90 font-medium mb-8">
                  <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Bulk Pricing</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Wholesale Supply</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Custom Branding</span>
                  <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Dedicated Support</span>
                </div>
              </div>
              <div className="lg:text-right">
                <Button size="lg" className="w-full lg:w-auto h-14 bg-white text-black hover:bg-gray-200 font-bold rounded-full">
                  Become Wholesale Partner
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Words From Our Partners</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Best place for art materials in Kanpur. The quality of their canvas boards and varnishes is unmatched.", name: "Priya S.", role: "Artist" },
              { quote: "We ordered 500 branded pens for our event. The printing was flawless and delivered exactly on time.", name: "Rahul M.", role: "Event Manager" },
              { quote: "Reliable supplier for our stationery store. The wholesale pricing margins have really helped our business grow.", name: "Amit K.", role: "Retailer" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="glass-card p-8 rounded-2xl border-white/5 relative"
              >
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold border border-white/10">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-heading font-bold text-background">
                  D
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">Durgashop<span className="text-primary">.</span></span>
              </div>
              <p className="text-muted-foreground mb-8 max-w-sm">
                India's Premium Stationery, Art Supply, and Business Branding Destination. Rooted in Kanpur, delivering nationwide.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Shop</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Stationery</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Art Supplies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Block Printing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Office Essentials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Business</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Bulk Orders</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Branding</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Wholesale Program</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Affiliate Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
                <li className="flex items-start gap-2 pt-2">
                  <span className="text-primary mt-0.5">📍</span>
                  <span>Kanpur, India</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Durgashop. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
