"use client";

import { useState } from 'react';
import Link from 'next/link';
import filtersData from '../data/filters.json';
import listingsData from '../data/listings.json';
import { requestStorefrontSearch } from '../lib/storefrontSearchClient';

const { heroCard, featuredListings, features } = listingsData;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Location');
  const [businessType, setBusinessType] = useState('Type');
  const [budget, setBudget] = useState('Budget');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchNotice, setSearchNotice] = useState('');

  const handleSearchStorefronts = async () => {
    setIsSearchModalOpen(true);
    setIsSearching(true);
    setSearchNotice('');
    setSearchResults([]);

    try {
      const data = await requestStorefrontSearch({
        query: searchQuery,
        location,
        businessType,
        budget,
      });

      if (data.listings.length > 0) {
        setSearchResults(data.listings);
      } else {
        setSearchResults(featuredListings);
        setSearchNotice(
          data.message
            ? `API returned no listing data. Showing featured storefronts instead. API message: ${data.message}`
            : 'API returned no listing data. Showing featured storefronts instead.'
        );
      }
    } catch (error) {
      setSearchResults(featuredListings);
      setSearchNotice(
        error instanceof Error
          ? `Search API unavailable. Showing featured storefronts instead. ${error.message}`
          : 'Search API unavailable. Showing featured storefronts instead.'
      );
    } finally {
      setIsSearching(false);
    }
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-margin-desktop bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md z-10">
            <h1 className="font-display-lg text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
              Find the Right Storefront with <span className="text-primary">AI-Powered Evaluation</span>
            </h1>
            <p className="font-body-lg text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
              Search for rentals, check readiness scores, and preview your storefront with AI mockups.
            </p>
            {/* Search Widget */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-2xl dark:shadow-none border border-slate-100 dark:border-slate-800/80 space-y-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
                <input 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200" 
                  placeholder="Search location / business type / budget" 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <select 
                  className="rounded-xl border-slate-200 dark:border-slate-800 py-3 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 focus:border-primary focus:ring-primary/20"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Location</option>
                  {filtersData.locations.map((loc) => (
                    <option key={loc}>{loc}</option>
                  ))}
                </select>
                <select 
                  className="rounded-xl border-slate-200 dark:border-slate-800 py-3 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 focus:border-primary focus:ring-primary/20"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <option>Type</option>
                  {filtersData.businessTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
                <select 
                  className="rounded-xl border-slate-200 dark:border-slate-800 py-3 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 focus:border-primary focus:ring-primary/20"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option>Budget</option>
                  {filtersData.budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSearchStorefronts}
                  disabled={isSearching}
                  className="flex-1 bg-primary text-white py-4 rounded-xl font-label-md flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-blue-100 dark:shadow-none transition-all disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  <span className={`material-symbols-outlined ${isSearching ? 'animate-spin' : ''}`}>
                    {isSearching ? 'progress_activity' : 'search'}
                  </span>
                  {isSearching ? 'Searching...' : 'Search Storefronts'}
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
              <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-2xl dark:shadow-none p-6 border border-slate-100 dark:border-slate-800/80 transform rotate-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white">{heroCard.title}</h3>
                    <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-sm mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {heroCard.location}
                    </div>
                  </div>
                  <button className="p-2 bg-slate-50 dark:bg-slate-900 rounded-full text-slate-300 dark:text-slate-600 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4 bg-slate-100 dark:bg-slate-800">
                  <img className="w-full h-full object-cover" alt={`${heroCard.title} photo`} src={heroCard.image} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">{heroCard.price} <span className="text-slate-400 dark:text-slate-500 text-sm font-normal">{heroCard.priceUnit}</span></span>
                  <div className="flex gap-1">
                    {heroCard.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 dark:text-slate-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* AI Score Badge */}
              <div className="absolute -top-10 -left-10 bg-white dark:bg-slate-950 rounded-2xl shadow-xl dark:shadow-none p-4 border border-slate-100 dark:border-slate-800 flex items-center gap-4 animate-bounce-slow">
                <div className="relative w-14 h-14 rounded-full border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="28" cy="28" fill="none" r="24" stroke="#4a90e2" strokeDasharray="150" strokeDashoffset="30" strokeLinecap="round" strokeWidth="4" />
                  </svg>
                  <span className="font-bold text-lg text-slate-900 dark:text-white">{heroCard.aiScore}</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">AI Score</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Space Readiness</div>
                </div>
              </div>
              {/* AI Mockup Preview */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-950 rounded-2xl shadow-2xl dark:shadow-none p-4 border border-slate-100 dark:border-slate-800 w-52 transform -rotate-3">
                <div className="font-bold text-xs mb-2 flex items-center gap-1 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  AI Mockup Preview
                </div>
                <div className="rounded-lg overflow-hidden h-28 mb-2 bg-slate-50 dark:bg-slate-850">
                  <img className="w-full h-full object-cover" alt="AI visualization" src={heroCard.mockupImage} />
                </div>
                <div className="flex gap-1 justify-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-margin-desktop bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl text-slate-900 dark:text-white">Platform Highlights</h2>
            <div className="w-16 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{feature.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-20 px-margin-desktop bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-3xl text-slate-900 dark:text-white">Recommended Storefronts</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Quality rental spaces evaluated by our AI system</p>
            </div>
            <Link className="flex items-center gap-1 text-primary font-label-md hover:translate-x-1 transition-transform" href="/">
              View All
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {featuredListings.map((listing) => (
              <div key={listing.id} className="group bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden hover:shadow-2xl dark:hover:shadow-none transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img alt={listing.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={listing.image}/>
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm">{listing.badge}</div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">AI Score</span>
                      <span className="text-xs font-bold text-primary">{listing.aiScore}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white">{listing.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-sm mb-4">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {listing.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {listing.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-[10px] text-slate-600 dark:text-slate-400">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-primary text-2xl">{listing.price}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-900">
                    <div className="flex gap-4">
                      <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                      <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">share</span>
                      </button>
                    </div>
                    <Link 
                      href={listing.href} 
                      className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-label-md hover:brightness-110 transition-all text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isSearchModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-sm px-4 py-6 flex items-center justify-center">
          <div className="w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-none overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-headline-lg text-2xl text-slate-900 dark:text-white">Search Results</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Storefront matches based on your current search filters.
                </p>
              </div>
              <button
                type="button"
                onClick={closeSearchModal}
                className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900 transition-colors"
                aria-label="Close search results"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
              {searchQuery && (
                <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-label-sm">
                  Query: {searchQuery}
                </span>
              )}
              {location !== 'Location' && (
                <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-label-sm">
                  {location}
                </span>
              )}
              {businessType !== 'Type' && (
                <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-label-sm">
                  {businessType}
                </span>
              )}
              {budget !== 'Budget' && (
                <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-label-sm">
                  {budget}
                </span>
              )}
              {!searchQuery && location === 'Location' && businessType === 'Type' && budget === 'Budget' && (
                <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-label-sm">
                  All storefronts
                </span>
              )}
            </div>

            <div className="overflow-y-auto p-6">
              {searchNotice && (
                <div className="mb-5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 px-4 py-3 text-sm">
                  {searchNotice}
                </div>
              )}

              {isSearching ? (
                <div className="min-h-[280px] flex flex-col items-center justify-center gap-4 text-primary">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="font-label-md">Searching storefronts...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                  {searchResults.map((listing) => (
                    <div key={listing.id} className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden hover:shadow-2xl dark:hover:shadow-none transition-all">
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img alt={listing.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={listing.image}/>
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm">{listing.badge}</div>
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">AI Score</span>
                            <span className="text-xs font-bold text-primary">{listing.aiScore}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white mb-2">{listing.title}</h3>
                        <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-sm mb-4">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {listing.location}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {listing.tags.map((tag) => (
                            <span key={tag} className="bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-full text-[10px] text-slate-600 dark:text-slate-400">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-bold text-primary text-2xl">{listing.price}</span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                          <div className="flex gap-4">
                            <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" type="button">
                              <span className="material-symbols-outlined">favorite</span>
                            </button>
                            <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" type="button">
                              <span className="material-symbols-outlined">share</span>
                            </button>
                          </div>
                          <Link 
                            href={listing.href} 
                            className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-label-md hover:brightness-110 transition-all text-center"
                            onClick={closeSearchModal}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-margin-desktop bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-container-max mx-auto bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] p-12 text-center text-white overflow-hidden relative shadow-2xl dark:shadow-none border dark:border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-4xl mb-6">Ready to start your business?</h2>
            <p className="font-body-lg text-lg mb-10 text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
              Whether you're a landlord or searching for space, our AI system helps you make decisions accurately and quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-500/20 dark:shadow-none hover:scale-105 active:scale-95 transition-all">
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
