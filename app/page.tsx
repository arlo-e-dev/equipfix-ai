'use client'

import { useState } from 'react'
import { Zap, Clock, DollarSign, Bot, CheckCircle, ArrowRight, Sparkles, Shield, TrendingUp } from 'lucide-react'

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
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">EquipFix AI</span>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">AI-Powered Computer Assistance</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Computer Problems Fixed
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              In Minutes, Not Days
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Revolutionary AI-powered remote computer assistance. No waiting for technicians. 
            No expensive service calls. Just instant, affordable fixes for any computer issue.
          </p>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50 font-semibold flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5 min</div>
              <div className="text-gray-400">Average Fix Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">70%</div>
              <div className="text-gray-400">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                AI connects remotely in seconds. Most issues resolved in under 5 minutes. 
                No scheduling, no waiting for technicians.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Incredibly Affordable</h3>
              <p className="text-gray-300">
                70% cheaper than traditional service calls. Pay only for what you use. 
                No hidden fees, no hourly minimums.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">
                Advanced AI diagnostics and repair. Learns from every fix. 
                Constantly improving accuracy and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Request Help', desc: 'Contact us with your computer issue - any problem, any time' },
              { step: '2', title: 'Remote Connect', desc: 'We securely install our AI assistant on your computer' },
              { step: '3', title: 'AI Fixes It', desc: 'Our AI diagnoses and resolves the issue automatically' },
              { step: '4', title: 'Clean Exit', desc: 'AI removed after fix - your computer is back to normal' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                )}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-center">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Why Pay More?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            See how much you save with EquipFix AI
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Service */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-300 mb-2">Traditional Service</h3>
                <div className="text-5xl font-bold text-red-400 mb-2">$350+</div>
                <p className="text-gray-400">per service call</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Schedule appointment (2-7 days wait)',
                  'Hourly minimums ($150-200)',
                  'Travel fees ($50-100)',
                  'Parts markup (20-50%)',
                  'Limited availability (9-5)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xl">✕</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EquipFix AI */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-2 border-purple-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">EquipFix AI</h3>
                <div className="text-5xl font-bold text-green-400 mb-2">$99</div>
                <p className="text-gray-300">per fix</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Instant connection (under 1 min)',
                  'Pay per fix (no minimums)',
                  'Zero travel fees',
                  'Transparent pricing',
                  'Available 24/7/365',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: '24/7 Availability', desc: 'Get help anytime, anywhere. No business hours.' },
              { icon: Shield, title: 'Secure Connection', desc: 'Bank-level encryption. Your data stays safe.' },
              { icon: TrendingUp, title: 'Predictive Maintenance', desc: 'AI alerts you before issues become problems.' },
              { icon: CheckCircle, title: 'Instant Diagnostics', desc: 'Know exactly what\'s wrong in seconds.' },
              { icon: Zap, title: 'Auto-Updates', desc: 'Software updates applied automatically.' },
              { icon: Bot, title: 'Learning AI', desc: 'Gets smarter with every repair.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses saving time and money with AI-powered computer assistance.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50 font-bold text-lg flex items-center gap-2 mx-auto">
              Start Your Free Trial
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-gray-400 mt-4 text-sm">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2026 EquipFix AI. All rights reserved.</p>
          <p className="mt-2 text-sm">Revolutionizing computer assistance with AI</p>
        </div>
      </footer>
    </div>
  )
}
