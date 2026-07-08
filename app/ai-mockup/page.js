"use client";

import { useState } from 'react';

const mockupsData = {
  coffee: {
    title: 'ร้านกาแฟ',
    tagClass: 'bg-primary-fixed text-on-primary-fixed',
    icon: 'coffee',
    concept: 'คาเฟ่โทนมินิมอล ใช้กระจกใส เพิ่มความโปร่งและดูทันสมัย เหมาะกับลูกค้าวัยทำงานและคนเดินผ่าน ตกแต่งภายในด้วยโทนสีขาวและไม้อ่อนเพื่อสร้างความผ่อนคลายและดูสะอาดตา',
    improvements: [
      'เพิ่มเคาน์เตอร์หน้าร้าน',
      'จัดระบบไฟและป้ายร้าน',
      'ปรับพื้นที่นั่งและทางเดิน'
    ],
    images: {
      minimal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7E7TrciNbTTy0JL-kzXhNSv0Viaa9R_fwlsGqeMrbMdsxWDdV3cZr7mJbE0WhngseNgrd36UhviajVzG6BynPo5G8abq3ClPQYNLz_UWxha6P6O2vPpDiRorF9BdMi3Nx8oWi-A9ivUbGMAeUwB_k5eOA-zteqm7vAhl4j7yTYEkr4NLDh2aPS4gwOM4V7Ju5Vbo_Nc8k7jpcCsi4xGgCIWwdyJsQUSiS7uN1Z_OxR6MfULpM7GMvONasN4rxgN8S8YGus3eFMGY',
      modern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo4qK3BQKmZzyWsFeAC4adc0CIi5xDs2Zgs5es80821_GTr0gktpgIWXv-c09OY6i8lBPesSjab_8pvloT8jkHyKbKKNuAIFbBlQOBh7LBz6Qyq4cxmjXZvV_m7GUOTtNxcAZQsaxPBYu6TVg8WloWxfL_tIZxvNadG2KgpTIuyQvLaMSQmgsyxxZ5yFzkQZ7wjbmoQbBRGZbyuoPF9NvxxfHGQ_Rg7XaoBTEeKTges2fmR8P41SKVUAJ03ZOcbJnIGCtdzdugjsWn',
      luxury: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo4qK3BQKmZzyWsFeAC4adc0CIi5xDs2Zgs5es80821_GTr0gktpgIWXv-c09OY6i8lBPesSjab_8pvloT8jkHyKbKKNuAIFbBlQOBh7LBz6Qyq4cxmjXZvV_m7GUOTtNxcAZQsaxPBYu6TVg8WloWxfL_tIZxvNadG2KgpTIuyQvLaMSQmgsyxxZ5yFzkQZ7wjbmoQbBRGZbyuoPF9NvxxfHGQ_Rg7XaoBTEeKTges2fmR8P41SKVUAJ03ZOcbJnIGCtdzdugjsWn'
    }
  },
  shabu: {
    title: 'ชาบู',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    icon: 'ramen_dining',
    concept: 'ร้านชาบูตกแต่งแนวอบอุ่น เน้นที่นั่งรองรับครอบครัวและกลุ่มเพื่อน มีการระบายอากาศที่ดีเลิศ ตกแต่งด้วยไม้และโคมไฟโทนสีส้มอบอุ่นเพื่อเพิ่มความน่ารับประทาน',
    improvements: [
      'ติดตั้งระบบดูดควันและระบายอากาศเฉพาะจุด',
      'ขยายกำลังไฟฟ้าเพื่อรองรับเตาแม่เหล็กไฟฟ้าหลายเตา',
      'จัดวางโต๊ะใหญ่และเก้าอี้โซฟาพนักพิงสูง'
    ],
    images: {
      minimal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHDVKx43cQ2HxapNuLqn9uA4bTM7In_ZPAi33ohVTZH7IFk6Tu3ugz5RBjFlfXuQ6nH5l7ZOve0T6K-vgv2sVsTEMGx3YSe3jKd1qylmH-rScyixyOvcFr60Otx0FrE5AhlVkBkcIafrvcxMs5g6sZTcKGOZ08fPuYfKtTUNNz6UVoOdy4PBavBdH5GvSk7qoUTldiS7BSi7HMYC9sVMvj2wodt-8qJ7JT7TuVxqp5YDnyR0dc--FtRHO1EhLG5Uaih93DUfxiH9a8',
      modern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHDVKx43cQ2HxapNuLqn9uA4bTM7In_ZPAi33ohVTZH7IFk6Tu3ugz5RBjFlfXuQ6nH5l7ZOve0T6K-vgv2sVsTEMGx3YSe3jKd1qylmH-rScyixyOvcFr60Otx0FrE5AhlVkBkcIafrvcxMs5g6sZTcKGOZ08fPuYfKtTUNNz6UVoOdy4PBavBdH5GvSk7qoUTldiS7BSi7HMYC9sVMvj2wodt-8qJ7JT7TuVxqp5YDnyR0dc--FtRHO1EhLG5Uaih93DUfxiH9a8',
      luxury: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHDVKx43cQ2HxapNuLqn9uA4bTM7In_ZPAi33ohVTZH7IFk6Tu3ugz5RBjFlfXuQ6nH5l7ZOve0T6K-vgv2sVsTEMGx3YSe3jKd1qylmH-rScyixyOvcFr60Otx0FrE5AhlVkBkcIafrvcxMs5g6sZTcKGOZ08fPuYfKtTUNNz6UVoOdy4PBavBdH5GvSk7qoUTldiS7BSi7HMYC9sVMvj2wodt-8qJ7JT7TuVxqp5YDnyR0dc--FtRHO1EhLG5Uaih93DUfxiH9a8'
    }
  },
  clinic: {
    title: 'คลินิก',
    tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    icon: 'medical_services',
    concept: 'คลินิกดีไซน์สะอาดตา เรียบง่ายและดูมีความน่าเชื่อถือสูง ใช้โทนสีสว่างและไฟส่องสว่างที่ถนอมสายตา มีการแบ่งสัดส่วนห้องตรวจและห้องพักคอยอย่างเหมาะสม',
    improvements: [
      'กั้นผนังห้องตรวจแบบกันเสียงเพื่อความเป็นส่วนตัว',
      'ติดตั้งจุดล้างมือระบบอัตโนมัติในห้องตรวจ',
      'ทำทางลาดและประตูรองรับการใช้งานวีลแชร์'
    ],
    images: {
      minimal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr9Wa--1iamaZLRlnNSBRcSB9WYx6AocAymWKPl8WJ9hoReSMXRSVp5PZ9BIWloMAyqKGXH7C7Nhpo8YOjx7cdNLtIF9qxoLn6j3Ys3ArA5WnSKJKdErabJDAmPevtJbbVSo445d18vIA6hwQLAkmcm045FIfT8Y8owsHz1YiW6dF_pI9cCaLza1mn6-JNe3w3Xl8tb6kM21Cwd8cELcArW7BkL0weYMghHrRupeNC9vjzpaqLLXrzW3HzrpomG8KGYFim17Bfu5WT',
      modern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr9Wa--1iamaZLRlnNSBRcSB9WYx6AocAymWKPl8WJ9hoReSMXRSVp5PZ9BIWloMAyqKGXH7C7Nhpo8YOjx7cdNLtIF9qxoLn6j3Ys3ArA5WnSKJKdErabJDAmPevtJbbVSo445d18vIA6hwQLAkmcm045FIfT8Y8owsHz1YiW6dF_pI9cCaLza1mn6-JNe3w3Xl8tb6kM21Cwd8cELcArW7BkL0weYMghHrRupeNC9vjzpaqLLXrzW3HzrpomG8KGYFim17Bfu5WT',
      luxury: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr9Wa--1iamaZLRlnNSBRcSB9WYx6AocAymWKPl8WJ9hoReSMXRSVp5PZ9BIWloMAyqKGXH7C7Nhpo8YOjx7cdNLtIF9qxoLn6j3Ys3ArA5WnSKJKdErabJDAmPevtJbbVSo445d18vIA6hwQLAkmcm045FIfT8Y8owsHz1YiW6dF_pI9cCaLza1mn6-JNe3w3Xl8tb6kM21Cwd8cELcArW7BkL0weYMghHrRupeNC9vjzpaqLLXrzW3HzrpomG8KGYFim17Bfu5WT'
    }
  },
  clothing: {
    title: 'เสื้อผ้า',
    tagClass: 'bg-primary-fixed text-on-primary-fixed',
    icon: 'checkroom',
    concept: 'ร้านเสื้อผ้าบูติกดีไซน์ทันสมัย เน้นการจัดวางแสงไฟส่องสินค้าให้โดดเด่น มีกระจกเงาบานใหญ่และราวจับสแตนเลสขัดเงาเพื่อเสริมความพรีเมียมให้เสื้อผ้าจัดแสดง',
    improvements: [
      'กั้นห้องลองเสื้อผ้าพร้อมกระจกเงาบานใหญ่',
      'ติดตั้งระบบไฟสปอตไลท์ส่องสว่างเน้นจุดโชว์สินค้า',
      'ติดตั้งเคาน์เตอร์แคชเชียร์และระบบสต็อกหลังร้าน'
    ],
    images: {
      minimal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA18uNTaNDk5tJ2O-QI5DbxeXfpa_4wM2R0K4FunQD-QmXe4YAfItmPS-MFOU3qoiDU7pRt7XmQhl1SnDEU4pIpRQB4__kOVeMW3C2viX1wpqrCSaoXGbEv9bRRHPEfCNMXuDB6w1Q6HsbKgOgLvYmECot_XsDvlGrthB3QL-yO-D5c5UpGjGIdJHV9M8VkHZuw_0QUpAIjgEvaHfGwrFi5IK_mlhl6Hu0QYS-JMDv8x2-_7yoRU_535krpii1tovnxrpvcGtMCrI-',
      modern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA18uNTaNDk5tJ2O-QI5DbxeXfpa_4wM2R0K4FunQD-QmXe4YAfItmPS-MFOU3qoiDU7pRt7XmQhl1SnDEU4pIpRQB4__kOVeMW3C2viX1wpqrCSaoXGbEv9bRRHPEfCNMXuDB6w1Q6HsbKgOgLvYmECot_XsDvlGrthB3QL-yO-D5c5UpGjGIdJHV9M8VkHZuw_0QUpAIjgEvaHfGwrFi5IK_mlhl6Hu0QYS-JMDv8x2-_7yoRU_535krpii1tovnxrpvcGtMCrI-',
      luxury: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA18uNTaNDk5tJ2O-QI5DbxeXfpa_4wM2R0K4FunQD-QmXe4YAfItmPS-MFOU3qoiDU7pRt7XmQhl1SnDEU4pIpRQB4__kOVeMW3C2viX1wpqrCSaoXGbEv9bRRHPEfCNMXuDB6w1Q6HsbKgOgLvYmECot_XsDvlGrthB3QL-yO-D5c5UpGjGIdJHV9M8VkHZuw_0QUpAIjgEvaHfGwrFi5IK_mlhl6Hu0QYS-JMDv8x2-_7yoRU_535krpii1tovnxrpvcGtMCrI-'
    }
  }
};

export default function AiMockup() {
  const [shopType, setShopType] = useState('coffee');
  const [shopStyle, setShopStyle] = useState('minimal');
  const [budget, setBudget] = useState(400000);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showMockup, setShowMockup] = useState(true);

  // Format budget range text and dynamic tags
  const getBudgetData = () => {
    if (budget < 300000) {
      return {
        label: '฿100,000 - ฿300,000',
        tag: 'งบประมาณประหยัด',
        tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed'
      };
    } else if (budget <= 600000) {
      return {
        label: '฿300,000 - ฿600,000',
        tag: 'งบประมาณกลาง',
        tagClass: 'bg-secondary-fixed text-on-secondary-fixed'
      };
    } else {
      return {
        label: '฿600,000 - ฿1,000,000+',
        tag: 'งบประมาณสูง',
        tagClass: 'bg-primary-fixed text-on-primary-fixed'
      };
    }
  };

  const budgetData = getBudgetData();
  const currentData = mockupsData[shopType];

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowMockup(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowMockup(true);
    }, 1200);
  };

  return (
    <main className="max-w-[1280px] mx-auto px-margin-desktop py-stack-lg fade-in">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-2 font-bold">AI Mockup หน้าร้าน</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">จำลองหน้าร้านด้วย AI เพื่อดูแนวทางการตกแต่งก่อนตัดสินใจเช่า</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Settings Card */}
        <aside className="lg:col-span-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-8 sticky top-24">
            <h2 className="font-headline-md text-headline-md mb-8 text-slate-900 font-bold">ตั้งค่าการจำลอง</h2>
            
            {/* Shop Type */}
            <div className="mb-8">
              <label className="block font-label-md text-label-md mb-4 text-on-surface-variant">ประเภทร้าน</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setShopType('coffee')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all hover:border-primary ${
                    shopType === 'coffee' 
                      ? 'active-chip border-primary text-primary bg-surface-container-lowest font-semibold' 
                      : 'bg-surface-container-low text-on-surface-variant border-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined mb-2 text-2xl">coffee</span>
                  <span className="font-label-sm text-label-sm">ร้านกาแฟ</span>
                </button>
                <button 
                  onClick={() => setShopType('shabu')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all hover:border-primary ${
                    shopType === 'shabu' 
                      ? 'active-chip border-primary text-primary bg-surface-container-lowest font-semibold' 
                      : 'bg-surface-container-low text-on-surface-variant border-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined mb-2 text-2xl">ramen_dining</span>
                  <span className="font-label-sm text-label-sm">ชาบู</span>
                </button>
                <button 
                  onClick={() => setShopType('clinic')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all hover:border-primary ${
                    shopType === 'clinic' 
                      ? 'active-chip border-primary text-primary bg-surface-container-lowest font-semibold' 
                      : 'bg-surface-container-low text-on-surface-variant border-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined mb-2 text-2xl">medical_services</span>
                  <span className="font-label-sm text-label-sm">คลินิก</span>
                </button>
                <button 
                  onClick={() => setShopType('clothing')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all hover:border-primary ${
                    shopType === 'clothing' 
                      ? 'active-chip border-primary text-primary bg-surface-container-lowest font-semibold' 
                      : 'bg-surface-container-low text-on-surface-variant border-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined mb-2 text-2xl">checkroom</span>
                  <span className="font-label-sm text-label-sm">เสื้อผ้า</span>
                </button>
              </div>
            </div>

            {/* Style Selection */}
            <div className="mb-8">
              <label className="block font-label-md text-label-md mb-4 text-on-surface-variant">Style</label>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setShopStyle('minimal')}
                  className={`px-5 py-3 rounded-xl flex items-center gap-2 border-2 text-label-md transition-all ${
                    shopStyle === 'minimal' 
                      ? 'active-chip border-primary text-primary bg-surface-container-lowest font-semibold' 
                      : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-outline-variant'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">remove_circle_outline</span>
                  Minimal
                </button>
                <button 
                  onClick={() => setShopStyle('modern')}
                  className={`px-5 py-3 rounded-xl flex items-center gap-2 border-2 text-label-md transition-all ${
                    shopStyle === 'modern' 
                      ? 'active-chip border-primary text-primary bg-surface-container-lowest font-semibold' 
                      : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-outline-variant'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">apartment</span>
                  Modern
                </button>
                <button 
                  onClick={() => setShopStyle('luxury')}
                  className={`px-5 py-3 rounded-xl flex items-center gap-2 border-2 text-label-md transition-all ${
                    shopStyle === 'luxury' 
                      ? 'active-chip border-primary text-primary bg-surface-container-lowest font-semibold' 
                      : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-outline-variant'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  Luxury
                </button>
              </div>
            </div>

            {/* Budget Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="font-label-md text-label-md text-on-surface-variant">Budget</label>
                <span className="text-primary font-bold">{budgetData.label}</span>
              </div>
              <input 
                className="w-full h-2 bg-secondary-container rounded-lg appearance-none cursor-pointer custom-slider focus:outline-none" 
                max="1000000" 
                min="100000" 
                step="50000" 
                type="range" 
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
              <div className="flex justify-between mt-3 text-slate-400">
                <span className="text-label-sm text-outline">฿100,000</span>
                <span className="text-label-sm text-outline">฿500,000</span>
                <span className="text-label-sm text-outline">฿1,000,000+</span>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md flex items-center justify-center gap-3 hover:opacity-95 transition-transform active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-85"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>temp_preferences_custom</span>
              Generate Mockup
            </button>
          </div>
        </aside>

        {/* Right Column: Result Content */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          {/* Quick Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full font-label-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">{currentData.icon}</span> {currentData.title}
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full font-label-sm flex items-center gap-2 capitalize">
              <span className="material-symbols-outlined text-xs">remove_circle_outline</span> {shopStyle}
            </span>
            <span className={`${budgetData.tagClass} px-4 py-1.5 rounded-full font-label-sm flex items-center gap-2`}>
              <span className="material-symbols-outlined text-xs">payments</span> {budgetData.tag}
            </span>
          </div>

          {/* Before/After Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute top-4 left-4 z-10 bg-surface-container-lowest/90 backdrop-blur-md text-on-surface px-4 py-1 rounded-full font-label-md text-sm border border-outline-variant">Before</div>
              <img 
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Empty commercial space before renovation" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCilXeMIkl7I2blSJtl0D1qPCDPj7SQeiSmMAAezmG8oqKtl5yTAcRj6Rg-xRqymTJ4UGFveuIZMv5tU6SLx3IhZQJ7KSGhfwvoeVx0GvFrj44nQSa3JEwuSWM_hHkdLTjMSm25vpgkK117x8VZNIkF7Aiu_SGppxcA5Zl6_oUnEvbvWNDqZewqHZK9iIlF4Mk1QGz1n5YBGyA0URt8fr2wVe9scSZuvdMv9MuFWJz2E_CygbRRUuMXbAbaExdLoUNVOPtpyLQNjMM" 
              />
            </div>

            {/* After Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm group bg-slate-200">
              <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-md text-white px-4 py-1 rounded-full font-label-md text-sm">After</div>
              
              {isGenerating ? (
                <div className="w-full aspect-[4/5] bg-surface-container flex flex-col items-center justify-center gap-4 transition-all duration-300">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-body-md font-bold text-primary animate-pulse">AI กำลังตกแต่งร้านค้า...</span>
                </div>
              ) : (
                showMockup && (
                  <img 
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105 fade-in" 
                    alt="Simulated AI storefront design" 
                    src={currentData.images[shopStyle] || currentData.images.minimal} 
                  />
                )
              )}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
                <h3 className="font-headline-md text-headline-md font-bold text-slate-900">Concept</h3>
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {currentData.concept}
              </p>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">build</span>
                <h3 className="font-headline-md text-headline-md font-bold text-slate-900">สิ่งที่ต้องปรับปรุงก่อนเปิดร้าน</h3>
              </div>
              <ul className="space-y-3">
                {currentData.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-body-md text-on-surface-variant">{improvement}</span>
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
