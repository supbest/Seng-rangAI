"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Location');
  const [businessType, setBusinessType] = useState('Type');
  const [budget, setBudget] = useState('Budget');

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md z-10">
            <h1 className="font-display-lg text-5xl lg:text-6xl text-slate-900 leading-tight">
              Find the Right Storefront with <span className="text-primary">AI-Powered Evaluation</span>
            </h1>
            <p className="font-body-lg text-lg text-slate-500 max-w-lg leading-relaxed">
              Search for rentals, check readiness scores, and preview your storefront with AI mockups.
            </p>
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 space-y-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
                <input 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-slate-50 text-slate-800" 
                  placeholder="Search location / business type / budget" 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <select 
                  className="rounded-xl border-slate-200 py-3 bg-slate-50 text-slate-600 focus:border-primary focus:ring-primary/20"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Location</option>
                  <option>Sukhumvit</option>
                  <option>Asok</option>
                  <option>Ari</option>
                </select>
                <select 
                  className="rounded-xl border-slate-200 py-3 bg-slate-50 text-slate-600 focus:border-primary focus:ring-primary/20"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <option>Type</option>
                  <option>Cafe</option>
                  <option>Clinic</option>
                  <option>Restaurant</option>
                </select>
                <select 
                  className="rounded-xl border-slate-200 py-3 bg-slate-50 text-slate-600 focus:border-primary focus:ring-primary/20"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option>Budget</option>
                  <option>10,000 - 30,000</option>
                  <option>30,000 - 50,000</option>
                  <option>50,000+</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 bg-primary text-white py-4 rounded-xl font-label-md flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-blue-100 transition-all">
                  <span className="material-symbols-outlined">search</span>
                  Search Storefronts
                </button>
                <button className="flex-1 border-2 border-primary text-primary py-4 rounded-xl font-label-md flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined">add_circle</span>
                  Post a Listing
                </button>
              </div>
            </div>
          </div>
          {/* Hero Visual Mockup */}
          <div className="relative lg:block">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative max-w-md mx-auto lg:ml-auto">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-slate-100 transform rotate-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-slate-900">Ekkamai Storefront</h3>
                    <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      Sukhumvit 63, Bangkok
                    </div>
                  </div>
                  <button className="p-2 bg-slate-50 rounded-full text-slate-300 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4 bg-slate-100">
                  <img className="w-full h-full object-cover" alt="Ekkamai Storefront photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZsgujTSAY_Pkqy5myn5axPum9UO8KMrsJEfb3--gvmxsh0YL-7cP2UbAoGWqZtgEoLurITcOCGg_jpfeag23DQRB6RKpI48CLXZ_2a8yQO_Vo2YuBSjMe731Mn2NXUcTvaA9VovKB2qezPPLMkXTtZWFqCsjxJ7T1SuV7gqsU1AVh7SMSB8_fmY6Bm3rTzjmcptyYBlYf16iKtAyx0F8ED0pAgy7l_76nkdh0fSUdsEkpXJ4ScvP0OCk2G_Ncm-iM4Oaawlk5JCU" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">฿45,000 <span className="text-slate-400 text-sm font-normal">/ month</span></span>
                  <div className="flex gap-1">
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500">Cafe</span>
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500">Clinic</span>
                  </div>
                </div>
              </div>
              {/* AI Score Badge */}
              <div className="absolute -top-10 -left-10 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="relative w-14 h-14 rounded-full border-4 border-slate-50 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="28" cy="28" fill="none" r="24" stroke="#4a90e2" strokeDasharray="150" strokeDashoffset="30" strokeLinecap="round" strokeWidth="4" />
                  </svg>
                  <span className="font-bold text-lg text-slate-900">82</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">AI Score</div>
                  <div className="text-[10px] text-slate-500">Space Readiness</div>
                </div>
              </div>
              {/* AI Mockup Preview */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 w-52 transform -rotate-3">
                <div className="font-bold text-xs mb-2 flex items-center gap-1 text-slate-900">
                  <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  AI Mockup Preview
                </div>
                <div className="rounded-lg overflow-hidden h-28 mb-2 bg-slate-50">
                  <img className="w-full h-full object-cover" alt="AI visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIB4b1U3iKvi5NUdd1CjSfPU1oFvsaETD6Us4JI8TpWZUAqWCc8YG70M3oa-pOhN3n5V-3vdCyYTqCYZVTd7y1k75W9JobKV9Nnez_9asW7T86I4WqHzXAB7r5_6k_VUeOUKdt49Ray9P33VkwjC5Ud45OoXWuGeFcUE1--Ov1vtnz8byEOn_XFCgI12YDo_XC8qHq5YGCIHKO1EzjhsEhVXIixHkSblS8MJQa4q-c-p9lFxZKFnnALHPT0NkvnA_PqwKa1lCsqjY" />
                </div>
                <div className="flex gap-1 justify-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-margin-desktop bg-slate-50">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl text-slate-900">Platform Highlights</h2>
            <div className="w-16 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Score */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold mb-3 text-slate-900">Score</h3>
              <p className="text-slate-500 leading-relaxed">Storefront Score: Evaluate the readiness and reliability of rental spaces.</p>
            </div>
            {/* AI Match */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>target</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold mb-3 text-slate-900">AI Match</h3>
              <p className="text-slate-500 leading-relaxed">AI Match: Analyze which business types best suit the location.</p>
            </div>
            {/* AI Mockup */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold mb-3 text-slate-900">AI Mockup</h3>
              <p className="text-slate-500 leading-relaxed">AI Mockup: Generate storefront previews to visualize your brand before renting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-20 px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-3xl text-slate-900">Recommended Storefronts</h2>
              <p className="text-slate-500 mt-2">Quality rental spaces evaluated by our AI system</p>
            </div>
            <Link className="flex items-center gap-1 text-primary font-label-md hover:translate-x-1 transition-transform" href="/">
              View All
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Listing 1 (Specialty Coffee Bar - Ari District) */}
            <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img alt="Specialty Coffee Bar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAdzMU0vCfp4jQefFdi7z2UQ84Y9QjlW_4WI2y6PD0LKE0IO28Xa12vowQtul7Lqb1LI1TSfloXFGDLmh8CmBSKMvFjO9pSjNzf0QVphMJ0q34cycADmOGglGV1RXgQ8ZpBVDf4T3FswU75YGX9DEwUY3L4IhbUDllXd17IS0xeCyo-Gs5f9eCDjgG9JNfGG7vDt93-ZhWmuIeipqzar9TwdV3vdU0_K-uGYZsrpjNPo0UG0X64WIzjY_PSSanZ1KkfNnUGwv4gvw"/>
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm">Premium Listing</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-500">AI Score</span>
                    <span className="text-xs font-bold text-primary">92%</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-xl font-bold text-slate-900">Specialty Coffee Bar - Ari District</h3>
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-sm mb-4">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Ari, Phaya Thai, Bangkok
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-600">Fully Equipped</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-600">High Traffic</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-600">3 Years Operation</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-600">Corner Unit</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-primary text-2xl">฿1,800,000</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex gap-4">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">share</span>
                    </button>
                  </div>
                  <Link 
                    href="/listings/specialty-coffee-bar" 
                    className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-label-md hover:brightness-110 transition-all text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-slate-900 rounded-[2.5rem] p-12 text-center text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-4xl mb-6">Ready to start your business?</h2>
            <p className="font-body-lg text-lg mb-10 text-slate-300 max-w-2xl mx-auto">
              Whether you're a landlord or searching for space, our AI system helps you make decisions accurately and quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">
                Start Searching
              </button>
              <button className="bg-white/10 text-white px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                Post for Free Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
