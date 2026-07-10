"use client";

import { useState } from 'react';

import mockupsData from '../../data/mockups.json';

const SHOP_TYPES = [
  { key: 'coffee', label: 'Cafe', icon: 'coffee' },
  { key: 'shabu', label: 'Shabu', icon: 'ramen_dining' },
  { key: 'clothing', label: 'Clothing', icon: 'checkroom' },
  { key: 'clinic', label: 'Clinic', icon: 'medical_services' },
  { key: 'milk-tea', label: 'Milk Tea', icon: 'local_drink' },
];

const SHOP_STYLES = [
  { key: 'minimal', label: 'Minimal', icon: 'remove_circle_outline' },
  { key: 'modern', label: 'Modern', icon: 'apartment' },
  { key: 'luxury', label: 'Luxury', icon: 'auto_awesome' },
];

const BUDGET_RANGES = [
  {
    isActive: (budget) => budget < 300000,
    label: '฿100,000 - ฿300,000',
    tag: 'Economy Budget',
    tier: 'economy',
    tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed dark:bg-slate-800 dark:text-slate-200',
  },
  {
    isActive: (budget) => budget <= 600000,
    label: '฿300,000 - ฿600,000',
    tag: 'Moderate Budget',
    tier: 'moderate',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed dark:bg-slate-800 dark:text-slate-200',
  },
  {
    isActive: () => true,
    label: '฿600,000 - ฿1,000,000+',
    tag: 'Premium Budget',
    tier: 'premium',
    tagClass: 'bg-primary-fixed text-on-primary-fixed dark:bg-slate-800 dark:text-slate-200',
  },
];

const selectionButtonClass = (isActive) =>
  `min-h-[92px] flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all hover:border-primary ${
    isActive
      ? 'active-chip border-primary text-primary dark:text-white bg-surface-container-lowest dark:bg-primary/20 font-semibold'
      : 'bg-surface-container-low dark:bg-slate-800 text-on-surface-variant dark:text-slate-300 border-transparent hover:border-outline-variant dark:hover:border-slate-700'
  }`;

const styleButtonClass = (isActive) =>
  `px-5 py-3 rounded-xl flex items-center gap-2 border-2 text-label-md transition-all ${
    isActive
      ? 'active-chip border-primary text-primary dark:text-white bg-surface-container-lowest dark:bg-primary/20 font-semibold'
      : 'bg-surface-container-low dark:bg-slate-800 text-on-surface-variant dark:text-slate-300 border-transparent hover:border-outline-variant dark:hover:border-slate-700'
  }`;

function getBudgetData(budget) {
  return BUDGET_RANGES.find((range) => range.isActive(budget));
}

export default function AiMockup() {
  const [shopType, setShopType] = useState('coffee');
  const [shopStyle, setShopStyle] = useState('minimal');
  const [budget, setBudget] = useState(400000);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showMockup, setShowMockup] = useState(true);
  const currentData = mockupsData[shopType];
  const budgetData = getBudgetData(budget);

  const getMockupImage = () => {
    const tierImages = currentData.images[budgetData.tier] || currentData.images.economy;
    return tierImages?.[shopStyle] || tierImages?.minimal || currentData.original;
  };

  const getBeforeImage = () => {
    return currentData.original;
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowMockup(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowMockup(true);
    }, 1200);
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-desktop py-10 sm:py-stack-lg fade-in text-on-surface dark:text-slate-100 transition-colors duration-200">
      {/* Header Section */}
      <div className="mb-8 sm:mb-12">
        <h1 className="font-display-lg text-4xl sm:text-display-lg text-on-surface dark:text-white mb-2 font-bold">AI Storefront Mockup</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-slate-400">Simulate storefront with AI to visualize interior/exterior design options before leasing.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-gutter">
        {/* Left Column: Settings Card */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-xl shadow-sm border border-outline-variant dark:border-slate-800/80 p-5 sm:p-8 lg:sticky lg:top-24">
            <h2 className="font-headline-md text-headline-md mb-6 sm:mb-8 text-slate-900 dark:text-white font-bold">Simulation Setup</h2>
            
            {/* Shop Type */}
            <div className="mb-8">
              <label className="block font-label-md text-label-md mb-4 text-on-surface-variant dark:text-slate-400">Shop Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SHOP_TYPES.map((type) => (
                  <button
                    key={type.key}
                    onClick={() => setShopType(type.key)}
                    className={selectionButtonClass(shopType === type.key)}
                    type="button"
                  >
                    <span className="material-symbols-outlined mb-2 text-2xl">{type.icon}</span>
                    <span className="font-label-sm text-label-sm">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Style Selection */}
            <div className="mb-8">
              <label className="block font-label-md text-label-md mb-4 text-on-surface-variant dark:text-slate-400">Style</label>
              <div className="flex flex-wrap gap-2">
                {SHOP_STYLES.map((style) => (
                  <button
                    key={style.key}
                    onClick={() => setShopStyle(style.key)}
                    className={styleButtonClass(shopStyle === style.key)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">{style.icon}</span>
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Slider */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-slate-400">Budget</label>
                <span className="text-primary font-bold">{budgetData.label}</span>
              </div>
              <input 
                className="w-full h-2 bg-secondary-container dark:bg-slate-800 rounded-lg appearance-none cursor-pointer custom-slider focus:outline-none" 
                max="1000000" 
                min="100000" 
                step="50000" 
                type="range" 
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
              <div className="flex justify-between mt-3 text-slate-400 dark:text-slate-500">
                <span className="text-label-sm text-outline dark:text-slate-500">฿100,000</span>
                <span className="text-label-sm text-outline dark:text-slate-500">฿500,000</span>
                <span className="text-label-sm text-outline dark:text-slate-500">฿1,000,000+</span>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md flex items-center justify-center gap-3 hover:opacity-95 transition-transform active:scale-95 shadow-lg shadow-primary/20 dark:shadow-none disabled:opacity-85"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>temp_preferences_custom</span>
              Generate Mockup
            </button>
          </div>
        </aside>

        {/* Right Column: Result Content */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-gutter">
          {/* Quick Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-fixed dark:bg-primary-container text-on-primary-fixed dark:text-on-primary-container px-4 py-1.5 rounded-full font-label-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">{currentData.icon}</span> {currentData.title}
            </span>
            <span className="bg-secondary-fixed dark:bg-secondary-container text-on-secondary-fixed dark:text-on-secondary-container px-4 py-1.5 rounded-full font-label-sm flex items-center gap-2 capitalize">
              <span className="material-symbols-outlined text-xs">remove_circle_outline</span> {shopStyle}
            </span>
            <span className={`${budgetData.tagClass} px-4 py-1.5 rounded-full font-label-sm flex items-center gap-2`}>
              <span className="material-symbols-outlined text-xs">payments</span> {budgetData.tag}
            </span>
          </div>

          {/* Before/After Images Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {/* Before Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm group border border-outline-variant bg-surface-container-low dark:bg-slate-900 dark:border-slate-800/80">
              <div className="absolute top-4 left-4 z-10 bg-surface-container-lowest/90 dark:bg-slate-900/90 backdrop-blur-md text-on-surface dark:text-slate-100 px-4 py-1 rounded-full font-label-md text-sm border border-outline-variant dark:border-slate-800">Before</div>
              <img 
                className="h-[320px] w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] sm:h-[360px] md:h-[420px]" 
                alt={`${currentData.title} storefront before renovation`} 
                src={getBeforeImage()} 
              />
            </div>

            {/* After Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm group bg-surface-container-low dark:bg-slate-900 border border-outline-variant dark:border-slate-800/80">
              <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-md text-white px-4 py-1 rounded-full font-label-md text-sm">After</div>
              
              {isGenerating ? (
                <div className="h-[320px] w-full bg-surface-container dark:bg-slate-900 flex flex-col items-center justify-center gap-4 transition-all duration-300 sm:h-[360px] md:h-[420px]">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-body-md font-bold text-primary animate-pulse">AI is styling the space...</span>
                </div>
              ) : (
                showMockup && (
                  <img 
                    className="h-[320px] w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] fade-in sm:h-[360px] md:h-[420px]" 
                    alt="Simulated AI storefront design" 
                    src={getMockupImage()} 
                  />
                )
              )}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-gutter">
            <div className="bg-surface-container-lowest dark:bg-slate-900 p-6 rounded-2xl border border-outline-variant dark:border-slate-800/80 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
                <h3 className="font-headline-md text-headline-md font-bold text-slate-900 dark:text-white">Concept</h3>
              </div>
              <p className="font-body-md text-on-surface-variant dark:text-slate-300 leading-relaxed">
                {currentData.concept}
              </p>
            </div>
            
            <div className="bg-surface-container-lowest dark:bg-slate-900 p-6 rounded-2xl border border-outline-variant dark:border-slate-800/80 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">build</span>
                <h3 className="font-headline-md text-headline-md font-bold text-slate-900 dark:text-white">Required Renovations</h3>
              </div>
              <ul className="space-y-3">
                {currentData.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-body-md text-on-surface-variant dark:text-slate-300">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
