"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ListingDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('bts');
  const [card1Mockup, setCard1Mockup] = useState('idle');
  const [card2Mockup, setCard2Mockup] = useState('idle');

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const handleGenerateMockup = (cardNumber) => {
    if (cardNumber === 1) {
      setCard1Mockup('generating');
      setTimeout(() => setCard1Mockup('generated'), 1500);
    } else {
      setCard2Mockup('generating');
      setTimeout(() => setCard2Mockup('generated'), 1500);
    }
  };

  return (
    <>
      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-md flex flex-col gap-lg fade-in">
        {/* Breadcrumbs */}
        <div className="text-label-sm font-label-sm text-secondary flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link href="/" className="hover:text-primary transition-colors duration-200">Bangkok</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link href="/" className="hover:text-primary transition-colors duration-200">Phasi Charoen</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-background font-medium">Bang Wa</span>
        </div>

        {/* Hero Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-lg overflow-hidden relative">
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden">
            <img alt="Cozy coffee shop interior" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo4qK3BQKmZzyWsFeAC4adc0CIi5xDs2Zgs5es80821_GTr0gktpgIWXv-c09OY6i8lBPesSjab_8pvloT8jkHyKbKKNuAIFbBlQOBh7LBz6Qyq4cxmjXZvV_m7GUOTtNxcAZQsaxPBYu6TVg8WloWxfL_tIZxvNadG2KgpTIuyQvLaMSQmgsyxxZ5yFzkQZ7wjbmoQbBRGZbyuoPF9NvxxfHGQ_Rg7XaoBTEeKTges2fmR8P41SKVUAJ03ZOcbJnIGCtdzdugjsWn"/>
          </div>
          <div className="relative group cursor-pointer hidden md:block overflow-hidden">
            <img alt="Professional espresso machine" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr9Wa--1iamaZLRlnNSBRcSB9WYx6AocAymWKPl8WJ9hoReSMXRSVp5PZ9BIWloMAyqKGXH7C7Nhpo8YOjx7cdNLtIF9qxoLn6j3Ys3ArA5WnSKJKdErabJDAmPevtJbbVSo445d18vIA6hwQLAkmcm045FIfT8Y8owsHz1YiW6dF_pI9cCaLza1mn6-JNe3w3Xl8tb6kM21Cwd8cELcArW7BkL0weYMghHrRupeNC9vjzpaqLLXrzW3HzrpomG8KGYFim17Bfu5WT"/>
          </div>
          <div className="relative group cursor-pointer hidden md:block overflow-hidden">
            <img alt="Modern cafe seating area" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA18uNTaNDk5tJ2O-QI5DbxeXfpa_4wM2R0K4FunQD-QmXe4YAfItmPS-MFOU3qoiDU7pRt7XmQhl1SnDEU4pIpRQB4__kOVeMW3C2viX1wpqrCSaoXGbEv9bRRHPEfCNMXuDB6w1Q6HsbKgOgLvYmECot_XsDvlGrthB3QL-yO-D5c5UpGjGIdJHV9M8VkHZuw_0QUpAIjgEvaHfGwrFi5IK_mlhl6Hu0QYS-JMDv8x2-_7yoRU_535krpii1tovnxrpvcGtMCrI-"/>
          </div>
          <div className="relative group cursor-pointer hidden md:block overflow-hidden">
            <img alt="Cafe interior view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo4qK3BQKmZzyWsFeAC4adc0CIi5xDs2Zgs5es80821_GTr0gktpgIWXv-c09OY6i8lBPesSjab_8pvloT8jkHyKbKKNuAIFbBlQOBh7LBz6Qyq4cxmjXZvV_m7GUOTtNxcAZQsaxPBYu6TVg8WloWxfL_tIZxvNadG2KgpTIuyQvLaMSQmgsyxxZ5yFzkQZ7wjbmoQbBRGZbyuoPF9NvxxfHGQ_Rg7XaoBTEeKTges2fmR8P41SKVUAJ03ZOcbJnIGCtdzdugjsWn"/>
          </div>
          <div className="relative group cursor-pointer hidden md:block overflow-hidden">
            <img alt="Cafe seating" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA18uNTaNDk5tJ2O-QI5DbxeXfpa_4wM2R0K4FunQD-QmXe4YAfItmPS-MFOU3qoiDU7pRt7XmQhl1SnDEU4pIpRQB4__kOVeMW3C2viX1wpqrCSaoXGbEv9bRRHPEfCNMXuDB6w1Q6HsbKgOgLvYmECot_XsDvlGrthB3QL-yO-D5c5UpGjGIdJHV9M8VkHZuw_0QUpAIjgEvaHfGwrFi5IK_mlhl6Hu0QYS-JMDv8x2-_7yoRU_535krpii1tovnxrpvcGtMCrI-"/>
            <button className="absolute bottom-4 right-4 bg-surface-container-lowest text-on-surface px-4 py-2 rounded-full shadow-sm text-label-md font-label-md flex items-center gap-2 hover:bg-surface-bright transition-colors duration-200">
              <span className="material-symbols-outlined">grid_view</span> View all photos
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 flex flex-col gap-md">
            {/* Header Info */}
            <div className="flex flex-col gap-2 border-b border-outline-variant pb-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-headline-lg font-headline-lg text-on-background">Business Takeover - Specialty Coffee Bar (Ari District)</h1>
                  <p className="text-body-md font-body-md text-secondary mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span> Ari District, Phaya Thai, Bangkok
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-headline-lg font-headline-lg text-on-background font-bold">฿1,200,000</span>
              </div>
              
              {/* Key Specs */}
              <div className="flex gap-6 mt-4 pt-4 border-t border-outline-variant/50">
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="material-symbols-outlined text-tertiary">straighten</span>
                  <span className="text-label-sm font-label-sm text-on-background">45</span>
                  <span className="text-label-sm font-label-sm text-secondary">sq.m.</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="material-symbols-outlined text-tertiary">chair</span>
                  <span className="text-label-sm font-label-sm text-on-background">20-25</span>
                  <span className="text-label-sm font-label-sm text-secondary">Seats</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="material-symbols-outlined text-tertiary">coffee_maker</span>
                  <span className="text-label-sm font-label-sm text-on-background">Fully equipped</span>
                  <span className="text-label-sm font-label-sm text-secondary">Equipment</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="material-symbols-outlined text-tertiary">payments</span>
                  <span className="text-label-sm font-label-sm text-on-background">฿35,000</span>
                  <span className="text-label-sm font-label-sm text-secondary">/ Month</span>
                </div>
              </div>
            </div>

            {/* Transport Distance */}
            <div className="flex items-center gap-2 p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary">train</span>
              <span className="text-body-md font-body-md text-on-background">350 m. (5 mins) from BTS Ari</span>
            </div>

            {/* Property Details */}
            <div className="border-b border-outline-variant pb-sm">
              <h2 className="text-title-md font-title-md mb-4">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">store</span>
                  <span className="text-body-md font-body-md">Coffee Shop Takeover</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-body-md font-body-md">Fully equipped and ready to open</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">history</span>
                  <span className="text-body-md font-body-md">Operating for 2 years</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">description</span>
                  <span className="text-body-md font-body-md">2 years lease remaining</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  <span className="text-body-md font-body-md">Listed on 20 Oct 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">tag</span>
                  <span className="text-body-md font-body-md">Listing ID - CS-88291</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-outline-variant pb-sm">
              <h2 className="text-title-md font-title-md mb-4">Takeover Details</h2>
              <h3 className="text-body-lg font-body-lg font-semibold mb-2">Minimalist style coffee shop takeover with complete equipment, prime location in Ari</h3>
              <p className="text-body-md font-body-md text-secondary leading-relaxed">
                Opportunity to own a Specialty Coffee shop in one of Bangkok's most bustling areas. The shop is decorated in a minimalist and warm style, ready to continue operations immediately. High-end equipment included, such as La Marzocco Linea PB 2 Groups espresso machine, Mahlkönig coffee grinder, cake display fridge, and complete furniture. The shop has a regular customer base and stable sales. Located in a soi surrounded by offices and condos, easy travel near BTS Ari.
              </p>
            </div>

            {/* Amenities */}
            <div className="border-b border-outline-variant pb-sm">
              <h2 className="text-title-md font-title-md mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">coffee_maker</span>
                  <span className="text-body-md font-body-md">Professional Espresso Machine</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">wifi</span>
                  <span className="text-body-md font-body-md">High-speed WiFi</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">deck</span>
                  <span className="text-body-md font-body-md">Outdoor Seating</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">videocam</span>
                  <span className="text-body-md font-body-md">CCTV & Security System</span>
                </div>
              </div>
            </div>

            {/* Map / What's nearby */}
            <div className="border-b border-outline-variant pb-sm">
              <h2 className="text-title-md font-title-md mb-4">What's nearby</h2>
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2" id="nearby-filters">
                <button 
                  onClick={() => handleFilterClick('bts')}
                  className={`px-4 py-1.5 rounded-full border text-label-md font-label-md whitespace-nowrap transition-colors duration-200 ${
                    activeFilter === 'bts' 
                      ? 'bg-on-surface text-surface border-on-surface' 
                      : 'border-outline-variant text-secondary hover:bg-surface-container-low'
                  }`}
                  data-filter="bts"
                >
                  BTS Ari
                </button>
                <button 
                  onClick={() => handleFilterClick('villa')}
                  className={`px-4 py-1.5 rounded-full border text-label-md font-label-md whitespace-nowrap transition-colors duration-200 ${
                    activeFilter === 'villa' 
                      ? 'bg-on-surface text-surface border-on-surface' 
                      : 'border-outline-variant text-secondary hover:bg-surface-container-low'
                  }`}
                  data-filter="villa"
                >
                  La Villa Ari
                </button>
                <button 
                  onClick={() => handleFilterClick('gump')}
                  className={`px-4 py-1.5 rounded-full border text-label-md font-label-md whitespace-nowrap transition-colors duration-200 ${
                    activeFilter === 'gump' 
                      ? 'bg-on-surface text-surface border-on-surface' 
                      : 'border-outline-variant text-secondary hover:bg-surface-container-low'
                  }`}
                  data-filter="gump"
                >
                  Gump's Ari
                </button>
                <button 
                  onClick={() => handleFilterClick('offices')}
                  className={`px-4 py-1.5 rounded-full border text-label-md font-label-md whitespace-nowrap transition-colors duration-200 ${
                    activeFilter === 'offices' 
                      ? 'bg-on-surface text-surface border-on-surface' 
                      : 'border-outline-variant text-secondary hover:bg-surface-container-low'
                  }`}
                  data-filter="offices"
                >
                  Office Buildings
                </button>
              </div>
              <div className="w-full h-[400px] bg-surface-container-low rounded-lg overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  data-alt="A detailed map interface showing the Ari area in Bangkok, Thailand." 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN_GNlLxXq4h3ahlG6wqI5CZJc2CJANU4R0icSgYlkV4DBa3Ps8GleSy8iY0mOh1RRlyLnhkmd_IIj6EwVzXUaLTlWymMUVn05FIQg6gu72YhfFdMrLczNd7TJk-I-p80B9EwkuWjcchANoq4Zm3SEXgx8XCqpB0mjn4yoh16Ta3IAWFwEjidtrDymKTdaV8cotbkA55LfjfBz-L60xX0VT-4ZlAcmGYwmSzAe6S-NRUrVatTcPKY9fogyMlK4Un5EkGp9pQpCSzSU')" }}
                />
              </div>
            </div>

            {/* Lease Terms */}
            <div>
              <h2 className="text-title-md font-title-md mb-4">Lease Terms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                  <p className="text-label-md font-label-md font-semibold mb-4 text-on-background">Cost Details</p>
                  <div className="flex justify-between mb-2">
                    <span className="text-secondary">Monthly Rent</span>
                    <span className="font-bold text-on-background">฿35,000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-secondary">Security Deposit (3 Months)</span>
                    <span className="font-bold text-on-background">฿105,000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-secondary">Electricity/Water</span>
                    <span className="font-bold text-on-background">Government Meter Rates</span>
                  </div>
                  <div className="border-t border-outline-variant mt-4 pt-4 flex justify-between">
                    <span className="font-bold text-on-background">Total Initial Payment</span>
                    <span className="font-bold text-primary text-lg">฿1,305,000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-5 border border-outline-variant rounded-lg bg-surface-bright">
                    <h4 className="font-bold mb-3 text-on-background">What you will get</h4>
                    <ul className="text-body-md text-secondary list-disc pl-5 space-y-2">
                      <li>Lease rights and customer base</li>
                      <li>All coffee brewing and bakery equipment</li>
                      <li>Drink recipes and supplier contacts</li>
                      <li>Trained staff (if desired)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6 flex flex-col gap-4">
              <div className="border-b border-outline-variant pb-4 mb-2">
                <h2 className="text-label-md font-bold mb-4 flex items-center gap-2 text-on-background">
                  <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
                  AI Summary
                  <span className="ml-auto flex items-center gap-1 bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span> AI POWERED
                  </span>
                </h2>
                
                <div className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center gap-4 border border-primary/20">
                  <div className="flex flex-col items-center gap-1">
                    {/* Circular Gauge */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle className="text-outline-variant/30" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8" />
                        <circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="37.68" strokeWidth="8" />
                      </svg>
                      <span className="absolute text-title-md font-bold text-on-background">85%</span>
                    </div>
                    <span className="text-[10px] font-label-sm text-secondary uppercase tracking-wider mt-1">Business Score</span>
                  </div>
                  <div className="text-center">
                    <p className="text-label-sm font-body-md text-on-background leading-relaxed mb-4 font-medium">
                      This location is highly suitable for F&B businesses due to being in the Ari area with high purchasing power.
                    </p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      id="open-analysis-btn" 
                      className="w-full bg-primary text-on-primary px-4 py-3 rounded-lg text-label-md font-bold hover:bg-primary-container transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                    >
                      View Recommended Business Types
                    </button>
                  </div>
                </div>
              </div>

              {/* Share / Save Action Row */}
              <div className="flex gap-2 mb-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-outline-variant rounded text-label-md font-label-md hover:bg-surface-container-low transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                  Save Listing
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-outline-variant rounded text-label-md font-label-md hover:bg-surface-container-low transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                  Share
                </button>
                <button className="p-2 border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container-low transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
              </div>

              {/* Agent Contact Info */}
              <div className="flex items-center justify-between border border-outline-variant rounded-lg p-4 bg-surface-bright hover:shadow-sm transition-shadow duration-200 cursor-pointer">
                <div className="flex items-center gap-3">
                  <img className="w-12 h-12 rounded-full object-cover" alt="Professional portrait of Kanrutai Dawruang" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHZFjOMPPcJ1mucCQEG8KYn-zJHjwnjjpLlEW2BfsGDyWhRMcQT9sQ7wE4reCXcCcHTXJJnuKzxSkFgqMSYZ-T3VaKUDHzUxVImK8bp2sWmsPsTAK25aZ-fPGPb58EUafDlGwFJPBtE2OzXnDgeO__Uw6R-h7jcXJpChAAWfTuKpg8OWeXFfS3IzEF8EgXPbaqakAnXUzA1MHjzI4K1D-ED5XgPBV4enKITgB6WPdIbaQEL_BkyTcaHtnqPOSoqomVS2PjvnjAt-JX"/>
                  <div>
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 inline-block">Verified Identity</span>
                    <h4 className="text-label-md font-label-md font-bold text-on-background">Kanrutai Dawruang</h4>
                    <p className="text-label-sm font-label-sm text-secondary">Plus Property</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mt-2">
                <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-200">
                  Line
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors duration-200">
                  WhatsApp
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  View Phone Number
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Contact
                </button>
              </div>
              <p className="text-[10px] text-secondary mt-2 text-center leading-relaxed">
                By continuing, you agree to our Terms and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Business Analysis Modal Overlay */}
      <div 
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
        className={`fixed inset-0 z-[100] ${isModalOpen ? 'flex' : 'hidden'} items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm`} 
        id="business-analysis-modal"
      >
        <div 
          className={`bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 ease-out ${
            isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`} 
          id="modal-container"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
            <h3 className="text-title-md font-title-md text-on-background font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Business Suitability Analysis
            </h3>
            <button 
              onClick={() => setIsModalOpen(false)}
              id="close-modal-x" 
              className="material-symbols-outlined text-secondary hover:text-on-background transition-colors duration-200"
            >
              close
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 flex flex-col gap-6 overflow-y-auto max-h-[60vh]">
            {/* Card 1: Restaurant Cafe */}
            <div className="p-4 rounded-xl border border-outline-variant bg-surface-bright flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">restaurant</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Business Type</p>
                    <h4 className="text-body-lg font-bold text-on-background">Restaurant Cafe</h4>
                  </div>
                </div>
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-primary font-bold">Score: 8/10</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-label-sm font-semibold text-secondary mb-1">Description Suggestion:</p>
                <p className="text-body-md text-on-surface">Office location suitable for lunch sales, people have purchasing power, can use items from the old business.</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-label-sm font-semibold text-secondary uppercase tracking-wider">Suggested Transformation</p>
                {card1Mockup === 'idle' && (
                  <button 
                    onClick={() => handleGenerateMockup(1)}
                    className="w-full py-6 border-2 border-dashed border-primary/30 text-primary bg-primary/5 rounded-xl font-bold flex flex-col items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <span className="material-symbols-outlined text-3xl animate-pulse group-hover:scale-110 transition-transform">auto_awesome</span>
                    <span className="text-label-md">Generate Photo Mockup</span>
                  </button>
                )}
                {card1Mockup === 'generating' && (
                  <div className="w-full h-48 border border-outline-variant bg-surface-container rounded-xl flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-label-sm font-semibold text-secondary animate-pulse">AI is generating mockup...</span>
                  </div>
                )}
                {card1Mockup === 'generated' && (
                  <div className="relative rounded-lg overflow-hidden border border-outline-variant fade-in">
                    <img alt="Restaurant Cafe Transformation" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDVKx43cQ2HxapNuLqn9uA4bTM7In_ZPAi33ohVTZH7IFk6Tu3ugz5RBjFlfXuQ6nH5l7ZOve0T6K-vgv2sVsTEMGx3YSe3jKd1qylmH-rScyixyOvcFr60Otx0FrE5AhlVkBkcIafrvcxMs5g6sZTcKGOZ08fPuYfKtTUNNz6UVoOdy4PBavBdH5GvSk7qoUTldiS7BSi7HMYC9sVMvj2wodt-8qJ7JT7TuVxqp5YDnyR0dc--FtRHO1EhLG5Uaih93DUfxiH9a8"/>
                    <button 
                      onClick={() => handleGenerateMockup(1)}
                      className="absolute top-2 right-2 bg-on-surface/80 hover:bg-on-surface text-surface p-2 rounded-full shadow transition-colors flex items-center justify-center"
                      title="Regenerate"
                    >
                      <span className="material-symbols-outlined text-[16px]">refresh</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Card 2: Co-Working Space */}
            <div className="p-4 rounded-xl border border-outline-variant bg-surface-bright flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">laptop_mac</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Business Type</p>
                    <h4 className="text-body-lg font-bold text-on-background">Co-Working Space</h4>
                  </div>
                </div>
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-primary font-bold">Score: 7.5/10</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-label-sm font-semibold text-secondary mb-1">Description Suggestion:</p>
                <p className="text-body-md text-on-surface">Office location, few competitors, near a university, can use items from the old business.</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-label-sm font-semibold text-secondary uppercase tracking-wider">Suggested Transformation</p>
                {card2Mockup === 'idle' && (
                  <button 
                    onClick={() => handleGenerateMockup(2)}
                    className="w-full py-6 border-2 border-dashed border-primary/30 text-primary bg-primary/5 rounded-xl font-bold flex flex-col items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <span className="material-symbols-outlined text-3xl animate-pulse group-hover:scale-110 transition-transform">auto_awesome</span>
                    <span className="text-label-md">Generate Photo Mockup</span>
                  </button>
                )}
                {card2Mockup === 'generating' && (
                  <div className="w-full h-48 border border-outline-variant bg-surface-container rounded-xl flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-label-sm font-semibold text-secondary animate-pulse">AI is generating mockup...</span>
                  </div>
                )}
                {card2Mockup === 'generated' && (
                  <div className="relative rounded-lg overflow-hidden border border-outline-variant fade-in">
                    <img alt="Co-Working Space Transformation" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXu8vCi7bnyY9fv9prZtV36ctmWVtH9L4WFQmenhTKWsCrOAy7A7Llv4Vb6W_01AJ5PLV6BMIkwkN1oBfXD5vCTG0-pu942pDEgLroxWCIkIkHn0C-L4KcqwyFvNGcTSW-5pGJ95ArqWFEfuKYLeDozkwnR3_m4W095LeRkUvLazxfEIea70M4GqWvfPNJg_9SM6CZxpXK_RVFtwdnCKNGuFbOKXqubGAR_hpSB4Q2U8fyeNODMxgFkWSapQbWv0aT02idCI_dZLhkyY"/>
                    <button 
                      onClick={() => handleGenerateMockup(2)}
                      className="absolute top-2 right-2 bg-on-surface/80 hover:bg-on-surface text-surface p-2 rounded-full shadow transition-colors flex items-center justify-center"
                      title="Regenerate"
                    >
                      <span className="material-symbols-outlined text-[16px]">refresh</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-surface-container-low border-t border-outline-variant">
            <button 
              onClick={() => setIsModalOpen(false)}
              id="close-modal-btn" 
              className="w-full py-3 border border-outline-variant bg-surface-container-lowest text-on-surface rounded-lg font-bold hover:bg-surface-bright transition-colors duration-200"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
