"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import listingsData from '../../../data/listings.json';

export default function ListingDetailsClient({ params }) {
  const id = params?.id || "specialtyCoffeeBar";
  const listing = listingsData.listingDetail[id] || listingsData.listingDetail.specialtyCoffeeBar;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('bts');
  const [cardMockups, setCardMockups] = useState([]);

  // Reset state when active listing changes
  useEffect(() => {
    setCardMockups(listing.analysisCards.map(() => 'idle'));
    setIsModalOpen(false);
    setActiveFilter(listing.nearbyFilters[0]?.key || 'bts');
  }, [listing]);

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const handleGenerateMockup = (cardIndex) => {
    setCardMockups(prev => {
      const next = [...prev];
      next[cardIndex] = 'generating';
      return next;
    });
    setTimeout(() => {
      setCardMockups(prev => {
        const next = [...prev];
        next[cardIndex] = 'generated';
        return next;
      });
    }, 1500);
  };

  return (
    <>
      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-md flex flex-col gap-lg fade-in text-on-surface dark:text-slate-100 transition-colors duration-200">
        {/* Breadcrumbs */}
        <div className="text-label-sm font-label-sm text-secondary dark:text-slate-400 flex items-center gap-2">
          {listing.breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="material-symbols-outlined text-[16px]">chevron_right</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-primary transition-colors duration-200">{crumb.label}</Link>
              ) : (
                <span className="text-on-background dark:text-slate-200 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>

        {/* Hero Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-lg overflow-hidden relative">
          {listing.gallery.map((img, i) => (
            <div 
              key={i} 
              className={`relative group cursor-pointer ${i > 0 ? 'hidden md:block' : ''} ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''} overflow-hidden`}
            >
              <img alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={img.src}/>
              {img.showViewAll && (
                <button className="absolute bottom-4 right-4 bg-surface-container-lowest dark:bg-slate-900 text-on-surface dark:text-slate-100 px-4 py-2 rounded-full shadow-sm text-label-md font-label-md flex items-center gap-2 hover:bg-surface-bright dark:hover:bg-slate-800 transition-colors duration-200">
                  <span className="material-symbols-outlined">grid_view</span> View all photos
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 flex flex-col gap-md">
            {/* Header Info */}
            <div className="flex flex-col gap-2 border-b border-outline-variant dark:border-slate-800 pb-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-headline-lg font-headline-lg text-on-background dark:text-white">{listing.title}</h1>
                  <p className="text-body-md font-body-md text-secondary dark:text-slate-400 mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span> {listing.location}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-headline-lg font-headline-lg text-on-background dark:text-white font-bold">{listing.price}</span>
              </div>
              
              {/* Key Specs */}
              <div className="flex gap-6 mt-4 pt-4 border-t border-outline-variant/50 dark:border-slate-800">
                {listing.keySpecs.map((spec, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 text-center">
                    <span className="material-symbols-outlined text-tertiary dark:text-slate-400">{spec.icon}</span>
                    <span className="text-label-sm font-label-sm text-on-background dark:text-slate-200">{spec.value}</span>
                    <span className="text-label-sm font-label-sm text-secondary dark:text-slate-400">{spec.unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transport Distance */}
            <div className="flex items-center gap-2 p-4 bg-surface-container-low dark:bg-slate-900 rounded-lg border border-outline-variant/30 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary">{listing.transport.icon}</span>
              <span className="text-body-md font-body-md text-on-background dark:text-slate-200">{listing.transport.text}</span>
            </div>

            {/* Property Details */}
            <div className="border-b border-outline-variant dark:border-slate-800 pb-sm">
              <h2 className="text-title-md font-title-md dark:text-white mb-4">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {listing.propertyDetails.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary dark:text-slate-400">{detail.icon}</span>
                    <span className="text-body-md font-body-md text-on-surface dark:text-slate-300">{detail.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-outline-variant dark:border-slate-800 pb-sm">
              <h2 className="text-title-md font-title-md dark:text-white mb-4">Takeover Details</h2>
              <h3 className="text-body-lg font-body-lg font-semibold mb-2 dark:text-slate-200">{listing.description.heading}</h3>
              <p className="text-body-md font-body-md text-secondary dark:text-slate-400 leading-relaxed">
                {listing.description.body}
              </p>
            </div>

            {/* Amenities */}
            <div className="border-b border-outline-variant dark:border-slate-800 pb-sm">
              <h2 className="text-title-md font-title-md dark:text-white mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {listing.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary dark:text-slate-400">{amenity.icon}</span>
                    <span className="text-body-md font-body-md text-on-surface dark:text-slate-300">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map / What's nearby */}
            <div className="border-b border-outline-variant dark:border-slate-800 pb-sm">
              <h2 className="text-title-md font-title-md dark:text-white mb-4">What&apos;s nearby</h2>
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2" id="nearby-filters">
                {listing.nearbyFilters.map((filter) => (
                  <button 
                    key={filter.key}
                    onClick={() => handleFilterClick(filter.key)}
                    className={`px-4 py-1.5 rounded-full border text-label-md font-label-md whitespace-nowrap transition-colors duration-200 ${
                      activeFilter === filter.key 
                        ? 'bg-on-surface text-surface dark:bg-white dark:text-slate-900 border-on-surface dark:border-white' 
                        : 'border-outline-variant dark:border-slate-800 text-secondary dark:text-slate-400 hover:bg-surface-container-low dark:hover:bg-slate-800'
                    }`}
                    data-filter={filter.key}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <div className="w-full h-[400px] bg-surface-container-low dark:bg-slate-900 rounded-lg overflow-hidden relative border dark:border-slate-800">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  data-alt="A detailed map interface showing the area." 
                  style={{ backgroundImage: `url('${listing.mapImage}')` }}
                />
              </div>
            </div>

            {/* Lease Terms */}
            <div>
              <h2 className="text-title-md font-title-md dark:text-white mb-4">Lease Terms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-low dark:bg-slate-900 p-6 rounded-xl border border-outline-variant/30 dark:border-slate-800">
                  <p className="text-label-md font-label-md font-semibold mb-4 text-on-background dark:text-white">Cost Details</p>
                  {listing.leaseTerms.costs.map((cost, i) => (
                    <div key={i} className="flex justify-between mb-2">
                      <span className="text-secondary dark:text-slate-400">{cost.label}</span>
                      <span className="font-bold text-on-background dark:text-white">{cost.value}</span>
                    </div>
                  ))}
                  <div className="border-t border-outline-variant dark:border-slate-800 mt-4 pt-4 flex justify-between">
                    <span className="font-bold text-on-background dark:text-white">Total Initial Payment</span>
                    <span className="font-bold text-primary text-lg">{listing.leaseTerms.totalInitial}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-5 border border-outline-variant dark:border-slate-800 rounded-lg bg-surface-bright dark:bg-slate-950">
                    <h4 className="font-bold mb-3 text-on-background dark:text-white">What you will get</h4>
                    <ul className="text-body-md text-secondary dark:text-slate-400 list-disc pl-5 space-y-2">
                      {listing.leaseTerms.inclusions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-surface-container-lowest dark:bg-slate-900 rounded-xl border border-outline-variant dark:border-slate-800/80 shadow-sm p-6 flex flex-col gap-4">
              <div className="border-b border-outline-variant dark:border-slate-800 pb-4 mb-2">
                <h2 className="text-label-md font-bold mb-4 flex items-center gap-2 text-on-background dark:text-white">
                  <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
                  AI Summary
                  <span className="ml-auto flex items-center gap-1 bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span> AI POWERED
                  </span>
                </h2>
                
                <div className="bg-surface-container-low dark:bg-slate-950 p-4 rounded-xl flex flex-col items-center gap-4 border border-primary/20 dark:border-slate-800">
                  <div className="flex flex-col items-center gap-1">
                    {/* Circular Gauge */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle className="text-outline-variant/30 dark:text-slate-800" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8" />
                        <circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset={`${251.2 - (251.2 * listing.aiSummary.score) / 100}`} strokeWidth="8" />
                      </svg>
                      <span className="absolute text-title-md font-bold text-on-background dark:text-white">{listing.aiSummary.score}%</span>
                    </div>
                    <span className="text-[10px] font-label-sm text-secondary dark:text-slate-400 uppercase tracking-wider mt-1">Business Score</span>
                  </div>
                  <div className="text-center">
                    <p className="text-label-sm font-body-md text-on-background dark:text-slate-300 leading-relaxed mb-4 font-medium">
                      {listing.aiSummary.description}
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

              {/* Broker Matching */}
              <div className="border-b border-outline-variant dark:border-slate-800 pb-4 mb-2">
                <h2 className="text-label-md font-bold mb-4 flex items-center gap-2 text-on-background dark:text-white">
                  <span className="material-symbols-outlined text-primary text-[20px]">handshake</span>
                  Broker Matching
                  <span className="ml-auto flex items-center gap-1 bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span> AI MATCHED
                  </span>
                </h2>

                <div className="bg-surface-container-low dark:bg-slate-950 p-5 rounded-xl flex flex-col items-center gap-4 border border-primary/20 dark:border-slate-800">
                  {/* Broker Avatar */}
                  <img
                    className="w-20 h-20 rounded-full object-cover border-[3px] border-primary/30 shadow-md"
                    alt={`Professional portrait of ${listing.broker.name}`}
                    src={listing.broker.avatar}
                  />

                  {/* Broker Name & Badge */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-body-lg font-bold text-on-background dark:text-white">{listing.broker.name}</h4>
                      <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <span className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {listing.broker.badge}
                    </span>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-6 w-full justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-title-md font-bold text-on-background dark:text-white">{listing.broker.dealsClosed}</span>
                      <span className="text-[10px] text-secondary dark:text-slate-400 uppercase tracking-wider">Deals Closed</span>
                    </div>
                    <div className="w-px h-8 bg-outline-variant/50 dark:bg-slate-800"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-title-md font-bold text-on-background dark:text-white">{listing.broker.successRate}</span>
                      <span className="text-[10px] text-secondary dark:text-slate-400 uppercase tracking-wider">Success Rate</span>
                    </div>
                  </div>

                  {/* Expertise Summary */}
                  <p className="text-label-sm text-secondary dark:text-slate-400 text-center leading-relaxed">
                    {listing.broker.expertise}
                  </p>

                  {/* CTA */}
                  <button className="w-full bg-primary text-on-primary px-4 py-3 rounded-lg text-label-md font-bold hover:bg-primary-container transition-colors duration-200 flex items-center justify-center gap-2 shadow-md">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    Contact Broker
                  </button>
                </div>
              </div>

              {/* Share / Save Action Row */}
              <div className="flex gap-2 mb-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-outline-variant dark:border-slate-800 rounded text-label-md font-label-md hover:bg-surface-container-low dark:hover:bg-slate-800 text-on-surface dark:text-slate-300 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                  Save Listing
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-outline-variant dark:border-slate-800 rounded text-label-md font-label-md hover:bg-surface-container-low dark:hover:bg-slate-800 text-on-surface dark:text-slate-300 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                  Share
                </button>
                <button className="p-2 border border-outline-variant dark:border-slate-800 rounded flex items-center justify-center hover:bg-surface-container-low dark:hover:bg-slate-800 text-on-surface dark:text-slate-300 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
              </div>

              {/* Agent Contact Info */}
              <div className="flex items-center justify-between border border-outline-variant dark:border-slate-800 rounded-lg p-4 bg-surface-bright dark:bg-slate-950 hover:shadow-sm dark:hover:shadow-none transition-shadow duration-200 cursor-pointer">
                <div className="flex items-center gap-3">
                  <img className="w-12 h-12 rounded-full object-cover" alt={`Professional portrait of ${listing.agent.name}`} src={listing.agent.avatar}/>
                  <div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 inline-block">Verified Identity</span>
                    <h4 className="text-label-md font-label-md font-bold text-on-background dark:text-white">{listing.agent.name}</h4>
                    <p className="text-label-sm font-label-sm text-secondary dark:text-slate-400">{listing.agent.company}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary dark:text-slate-400">chevron_right</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mt-2">
                <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-200">
                  Line
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors duration-200">
                  WhatsApp
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  View Phone Number
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Contact
                </button>
              </div>
              <p className="text-[10px] text-secondary dark:text-slate-500 mt-2 text-center leading-relaxed">
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
        className={`fixed inset-0 z-[100] ${isModalOpen ? 'flex' : 'hidden'} items-center justify-center p-4 bg-on-surface/40 dark:bg-slate-950/70 backdrop-blur-sm`} 
        id="business-analysis-modal"
      >
        <div 
          className={`bg-surface-container-lowest dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-xl dark:shadow-none overflow-hidden flex flex-col transition-all duration-300 ease-out border dark:border-slate-800 ${
            isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`} 
          id="modal-container"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-outline-variant dark:border-slate-800 flex justify-between items-center bg-surface-container-lowest dark:bg-slate-900">
            <h3 className="text-title-md font-title-md text-on-background dark:text-white font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Business Suitability Analysis
            </h3>
            <button 
              onClick={() => setIsModalOpen(false)}
              id="close-modal-x" 
              className="material-symbols-outlined text-secondary dark:text-slate-400 hover:text-on-background dark:hover:text-white transition-colors duration-200"
            >
              close
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 flex flex-col gap-6 overflow-y-auto max-h-[60vh] bg-surface-container-lowest dark:bg-slate-900">
            {listing.analysisCards.map((card, cardIndex) => (
              <div key={cardIndex} className="p-4 rounded-xl border border-outline-variant dark:border-slate-800 bg-surface-bright dark:bg-slate-950 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">{card.icon}</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm text-secondary dark:text-slate-400 uppercase tracking-wider">Business Type</p>
                      <h4 className="text-body-lg font-bold text-on-background dark:text-white">{card.type}</h4>
                    </div>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full">
                    <span className="text-primary font-bold">Score: {card.score}</span>
                  </div>
                </div>
                <div className="bg-surface-container-low dark:bg-slate-900/60 p-3 rounded-lg">
                  <p className="text-label-sm font-semibold text-secondary dark:text-slate-400 mb-1">Description Suggestion:</p>
                  <p className="text-body-md text-on-surface dark:text-slate-300">{card.suggestion}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-label-sm font-semibold text-secondary dark:text-slate-400 uppercase tracking-wider">Suggested Transformation</p>
                  {cardMockups[cardIndex] === 'idle' && (
                    <button 
                      onClick={() => handleGenerateMockup(cardIndex)}
                      className="w-full py-6 border-2 border-dashed border-primary/30 text-primary bg-primary/5 rounded-xl font-bold flex flex-col items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <span className="material-symbols-outlined text-3xl animate-pulse group-hover:scale-110 transition-transform">auto_awesome</span>
                      <span className="text-label-md">Generate Photo Mockup</span>
                    </button>
                  )}
                  {cardMockups[cardIndex] === 'generating' && (
                    <div className="w-full h-48 border border-outline-variant dark:border-slate-800 bg-surface-container dark:bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-3">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-label-sm font-semibold text-secondary dark:text-slate-400 animate-pulse">AI is generating mockup...</span>
                    </div>
                  )}
                  {cardMockups[cardIndex] === 'generated' && (
                    <div className="relative rounded-lg overflow-hidden border border-outline-variant dark:border-slate-800 fade-in">
                      <img alt={`${card.type} Transformation`} className="w-full h-48 object-cover" src={card.mockupImage}/>
                      <button 
                        onClick={() => handleGenerateMockup(cardIndex)}
                        className="absolute top-2 right-2 bg-on-surface/80 hover:bg-on-surface text-surface p-2 rounded-full shadow transition-colors flex items-center justify-center"
                        title="Regenerate"
                      >
                        <span className="material-symbols-outlined text-[16px]">refresh</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-surface-container-low dark:bg-slate-950 border-t border-outline-variant dark:border-slate-800">
            <button 
              onClick={() => setIsModalOpen(false)}
              id="close-modal-btn" 
              className="w-full py-3 border border-outline-variant dark:border-slate-800 bg-surface-container-lowest dark:bg-slate-900 text-on-surface dark:text-slate-200 rounded-lg font-bold hover:bg-surface-bright dark:hover:bg-slate-800 transition-colors duration-200"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
