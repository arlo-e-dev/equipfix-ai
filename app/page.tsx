'use client'

import { useState } from 'react'
import { Zap, Clock, DollarSign, Bot, CheckCircle, ArrowRight, Sparkles, Shield, TrendingUp, Award, Users, Star } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks! We'll contact ${email} soon.`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white block">EquipFix AI</span>
                <span className="text-xs text-gray-400">Professional AI Support</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#pricing" className="text-gray-300 hover:text-white transition hidden md:block">Pricing</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition hidden md:block">How It Works</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50 font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Trusted by 2,000+ Businesses Worldwide</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade AI
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Software Support
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              24/7 AI-powered remote assistance for any software issue. Our intelligent system connects securely, 
              diagnoses problems instantly, and implements solutions automatically. No human intervention required.
            </p>

            {/* CTA Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12">
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-xl"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-purple-500/50 font-bold flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-sm text-gray-400">
              ✓ No credit card required  •  ✓ 14-day free trial  •  ✓ Cancel anytime
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">< 3min</div>
              <div className="text-gray-400 font-medium">Average Response</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.8%</div>
              <div className="text-gray-400 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">2,000+</div>
              <div className="text-gray-400 font-medium">Active Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 border-y border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 mb-6 text-sm uppercase tracking-wider">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-white text-2xl font-bold">TechCorp</div>
            <div className="text-white text-2xl font-bold">DataSystems Inc</div>
            <div className="text-white text-2xl font-bold">CloudWorks</div>
            <div className="text-white text-2xl font-bold">InnovateLabs</div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Leading Companies Choose Us</h2>
            <p className="text-xl text-gray-400">Enterprise-grade reliability meets cutting-edge AI technology</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Response</h3>
              <p className="text-gray-300 leading-relaxed">
                Our AI connects within seconds and begins diagnostics immediately. No waiting in queues, 
                no scheduling appointments, no delays.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bank-Level Security</h3>
              <p className="text-gray-300 leading-relaxed">
                End-to-end encryption, SOC 2 Type II certified, and GDPR compliant. 
                Your data never leaves your infrastructure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Self-Learning AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Our AI learns from every interaction, continuously improving accuracy and expanding 
                its problem-solving capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Professional support in four simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Contact Support', desc: 'Submit a ticket or call our 24/7 hotline with your software issue', icon: '📞' },
              { step: '2', title: 'Secure Connection', desc: 'We establish an encrypted remote session with your system', icon: '🔒' },
              { step: '3', title: 'AI Diagnosis', desc: 'Our AI analyzes the problem and implements the solution automatically', icon: '🤖' },
              { step: '4', title: 'Clean Exit', desc: 'Issue resolved, session closed, and audit log provided', icon: '✅' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30" />
                )}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="text-5xl mb-4 text-center">{item.icon}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white font-bold ml-2">4.9/5</span>
              <span className="text-gray-400 ml-2">(2,847 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Cut our IT support costs by 65% while improving response times. Game-changer for our organization.",
                author: "Sarah Chen",
                role: "CTO, TechCorp International",
                avatar: "SC"
              },
              {
                quote: "The AI fixed a critical database issue at 3 AM that would have cost us thousands. Worth every penny.",
                author: "Marcus Rodriguez",
                role: "VP Operations, DataSystems",
                avatar: "MR"
              },
              {
                quote: "Finally, support that actually understands our stack. No more explaining the same issue five times.",
                author: "Jennifer Park",
                role: "Lead Developer, CloudWorks",
                avatar: "JP"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">70% cheaper than traditional IT support</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Per-Incident */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pay Per Incident</h3>
              <div className="text-5xl font-bold text-white mb-2">$99</div>
              <p className="text-gray-400 mb-6">per resolved issue</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Instant response time',
                  'No monthly commitment',
                  'Pay only for what you use',
                  'Unlimited issue complexity',
                  'Audit logs included'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-purple-600 px-6 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-2 border-purple-500 rounded-2xl p-8 relative">
              <div className="absolute -top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-5xl font-bold text-white mb-2">$499</div>
              <p className="text-gray-300 mb-6">per month</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited incidents',
                  'Priority support queue',
                  'Dedicated account manager',
                  'SLA guarantees',
                  'Custom integrations',
                  'Advanced analytics'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-bold shadow-xl">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 2,000+ companies who've already made the switch to AI-powered support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-purple-500/50 font-bold text-lg">
                Start Free Trial
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-12 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg">
                Schedule Demo
              </button>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              No credit card required  •  14-day free trial  •  Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">EquipFix AI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enterprise AI-powered software support. Available 24/7/365.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">SLA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2026 EquipFix AI. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">SOC 2 Type II Certified  •  GDPR Compliant  •  ISO 27001</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
