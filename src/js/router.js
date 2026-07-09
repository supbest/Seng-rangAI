import { updateActiveLink } from './components/navbar.js';

// Route templates
const routes = {
  '/': () => `
    <!-- Main Content -->
    <main class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-md flex flex-col gap-lg">
      <!-- Breadcrumbs -->
      <div class="text-label-sm font-label-sm text-secondary flex items-center gap-2">
        <a href="#/" class="hover:text-primary transition-colors duration-200">Home</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <a href="#/" class="hover:text-primary transition-colors duration-200">Bangkok</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <a href="#/" class="hover:text-primary transition-colors duration-200">Phasi Charoen</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <span class="text-on-background font-medium">Bang Wa</span>
      </div>

      <!-- Hero Gallery -->
      <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-lg overflow-hidden relative">
        <div class="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden">
          <img alt="Cozy coffee shop interior" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo4qK3BQKmZzyWsFeAC4adc0CIi5xDs2Zgs5es80821_GTr0gktpgIWXv-c09OY6i8lBPesSjab_8pvloT8jkHyKbKKNuAIFbBlQOBh7LBz6Qyq4cxmjXZvV_m7GUOTtNxcAZQsaxPBYu6TVg8WloWxfL_tIZxvNadG2KgpTIuyQvLaMSQmgsyxxZ5yFzkQZ7wjbmoQbBRGZbyuoPF9NvxxfHGQ_Rg7XaoBTEeKTges2fmR8P41SKVUAJ03ZOcbJnIGCtdzdugjsWn"/>
        </div>
        <div class="relative group cursor-pointer hidden md:block overflow-hidden">
          <img alt="Professional espresso machine" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr9Wa--1iamaZLRlnNSBRcSB9WYx6AocAymWKPl8WJ9hoReSMXRSVp5PZ9BIWloMAyqKGXH7C7Nhpo8YOjx7cdNLtIF9qxoLn6j3Ys3ArA5WnSKJKdErabJDAmPevtJbbVSo445d18vIA6hwQLAkmcm045FIfT8Y8owsHz1YiW6dF_pI9cCaLza1mn6-JNe3w3Xl8tb6kM21Cwd8cELcArW7BkL0weYMghHrRupeNC9vjzpaqLLXrzW3HzrpomG8KGYFim17Bfu5WT"/>
        </div>
        <div class="relative group cursor-pointer hidden md:block overflow-hidden">
          <img alt="Modern cafe seating area" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA18uNTaNDk5tJ2O-QI5DbxeXfpa_4wM2R0K4FunQD-QmXe4YAfItmPS-MFOU3qoiDU7pRt7XmQhl1SnDEU4pIpRQB4__kOVeMW3C2viX1wpqrCSaoXGbEv9bRRHPEfCNMXuDB6w1Q6HsbKgOgLvYmECot_XsDvlGrthB3QL-yO-D5c5UpGjGIdJHV9M8VkHZuw_0QUpAIjgEvaHfGwrFi5IK_mlhl6Hu0QYS-JMDv8x2-_7yoRU_535krpii1tovnxrpvcGtMCrI-"/>
        </div>
        <div class="relative group cursor-pointer hidden md:block overflow-hidden">
          <img alt="Cafe interior view" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo4qK3BQKmZzyWsFeAC4adc0CIi5xDs2Zgs5es80821_GTr0gktpgIWXv-c09OY6i8lBPesSjab_8pvloT8jkHyKbKKNuAIFbBlQOBh7LBz6Qyq4cxmjXZvV_m7GUOTtNxcAZQsaxPBYu6TVg8WloWxfL_tIZxvNadG2KgpTIuyQvLaMSQmgsyxxZ5yFzkQZ7wjbmoQbBRGZbyuoPF9NvxxfHGQ_Rg7XaoBTEeKTges2fmR8P41SKVUAJ03ZOcbJnIGCtdzdugjsWn"/>
        </div>
        <div class="relative group cursor-pointer hidden md:block overflow-hidden">
          <img alt="Cafe seating" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA18uNTaNDk5tJ2O-QI5DbxeXfpa_4wM2R0K4FunQD-QmXe4YAfItmPS-MFOU3qoiDU7pRt7XmQhl1SnDEU4pIpRQB4__kOVeMW3C2viX1wpqrCSaoXGbEv9bRRHPEfCNMXuDB6w1Q6HsbKgOgLvYmECot_XsDvlGrthB3QL-yO-D5c5UpGjGIdJHV9M8VkHZuw_0QUpAIjgEvaHfGwrFi5IK_mlhl6Hu0QYS-JMDv8x2-_7yoRU_535krpii1tovnxrpvcGtMCrI-"/>
          <button class="absolute bottom-4 right-4 bg-surface-container-lowest text-on-surface px-4 py-2 rounded-full shadow-sm text-label-md font-label-md flex items-center gap-2 hover:bg-surface-bright transition-colors duration-200">
            <span class="material-symbols-outlined">grid_view</span> View all photos
          </button>
        </div>
      </div>

      <!-- Content Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <!-- Left Column (Details) -->
        <div class="lg:col-span-2 flex flex-col gap-md">
          <!-- Header Info -->
          <div class="flex flex-col gap-2 border-b border-outline-variant pb-sm">
            <div class="flex justify-between items-start">
              <div>
                <h1 class="text-headline-lg font-headline-lg text-on-background">Business Takeover - Specialty Coffee Bar (Ari District)</h1>
                <p class="text-body-md font-body-md text-secondary mt-1 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[18px]">location_on</span> Ari District, Phaya Thai, Bangkok
                </p>
              </div>
            </div>
            <div class="mt-4">
              <span class="text-headline-lg font-headline-lg text-on-background font-bold">฿1,800,000</span>
            </div>
            
            <!-- Key Specs -->
            <div class="flex gap-6 mt-4 pt-4 border-t border-outline-variant/50">
              <div class="flex flex-col items-center gap-1 text-center">
                <span class="material-symbols-outlined text-tertiary">straighten</span>
                <span class="text-label-sm font-label-sm text-on-background">45</span>
                <span class="text-label-sm font-label-sm text-secondary">sq.m.</span>
              </div>
              <div class="flex flex-col items-center gap-1 text-center">
                <span class="material-symbols-outlined text-tertiary">chair</span>
                <span class="text-label-sm font-label-sm text-on-background">20-25</span>
                <span class="text-label-sm font-label-sm text-secondary">Seats</span>
              </div>
              <div class="flex flex-col items-center gap-1 text-center">
                <span class="material-symbols-outlined text-tertiary">coffee_maker</span>
                <span class="text-label-sm font-label-sm text-on-background">Fully equipped</span>
                <span class="text-label-sm font-label-sm text-secondary">Equipment</span>
              </div>
              <div class="flex flex-col items-center gap-1 text-center">
                <span class="material-symbols-outlined text-tertiary">payments</span>
                <span class="text-label-sm font-label-sm text-on-background">฿35,000</span>
                <span class="text-label-sm font-label-sm text-secondary">/ Month</span>
              </div>
            </div>
          </div>

          <!-- Transport Distance -->
          <div class="flex items-center gap-2 p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
            <span class="material-symbols-outlined text-primary">train</span>
            <span class="text-body-md font-body-md text-on-background">350 m. (5 mins) from BTS Ari</span>
          </div>

          <!-- Property Details -->
          <div class="border-b border-outline-variant pb-sm">
            <h2 class="text-title-md font-title-md mb-4">Property Details</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">store</span>
                <span class="text-body-md font-body-md">Coffee Shop Takeover</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">check_circle</span>
                <span class="text-body-md font-body-md">Fully equipped and ready to open</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">history</span>
                <span class="text-body-md font-body-md">Operating for 2 years</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">description</span>
                <span class="text-body-md font-body-md">2 years lease remaining</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">schedule</span>
                <span class="text-body-md font-body-md">Listed on 20 Oct 2024</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">tag</span>
                <span class="text-body-md font-body-md">Listing ID - CS-88291</span>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="border-b border-outline-variant pb-sm">
            <h2 class="text-title-md font-title-md mb-4">Takeover Details</h2>
            <h3 class="text-body-lg font-body-lg font-semibold mb-2">Minimalist style coffee shop takeover with complete equipment, prime location in Ari</h3>
            <p class="text-body-md font-body-md text-secondary leading-relaxed">
              Opportunity to own a Specialty Coffee shop in one of Bangkok's most bustling areas. The shop is decorated in a minimalist and warm style, ready to continue operations immediately. High-end equipment included, such as La Marzocco Linea PB 2 Groups espresso machine, Mahlkönig coffee grinder, cake display fridge, and complete furniture. The shop has a regular customer base and stable sales. Located in a soi surrounded by offices and condos, easy travel near BTS Ari.
            </p>
          </div>

          <!-- Amenities -->
          <div class="border-b border-outline-variant pb-sm">
            <h2 class="text-title-md font-title-md mb-4">Amenities</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">coffee_maker</span>
                <span class="text-body-md font-body-md">Professional Espresso Machine</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">wifi</span>
                <span class="text-body-md font-body-md">High-speed WiFi</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">deck</span>
                <span class="text-body-md font-body-md">Outdoor Seating</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary">videocam</span>
                <span class="text-body-md font-body-md">CCTV & Security System</span>
              </div>
            </div>
          </div>

          <!-- Map / What's nearby -->
          <div class="border-b border-outline-variant pb-sm">
            <h2 class="text-title-md font-title-md mb-4">What's nearby</h2>
            <div class="flex gap-2 mb-4 overflow-x-auto pb-2" id="nearby-filters">
              <button class="px-4 py-1.5 rounded-full bg-on-surface text-surface border border-on-surface text-label-md font-label-md whitespace-nowrap active-nearby" data-filter="bts">BTS Ari</button>
              <button class="px-4 py-1.5 rounded-full border border-outline-variant text-label-md font-label-md hover:bg-surface-container-low whitespace-nowrap" data-filter="villa">La Villa Ari</button>
              <button class="px-4 py-1.5 rounded-full border border-outline-variant text-label-md font-label-md hover:bg-surface-container-low whitespace-nowrap" data-filter="gump">Gump's Ari</button>
              <button class="px-4 py-1.5 rounded-full border border-outline-variant text-label-md font-label-md hover:bg-surface-container-low whitespace-nowrap" data-filter="offices">Office Buildings</button>
            </div>
            <div class="w-full h-[400px] bg-surface-container-low rounded-lg overflow-hidden relative">
              <div class="w-full h-full bg-cover bg-center" data-alt="A detailed map interface showing the Ari area in Bangkok, Thailand." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN_GNlLxXq4h3ahlG6wqI5CZJc2CJANU4R0icSgYlkV4DBa3Ps8GleSy8iY0mOh1RRlyLnhkmd_IIj6EwVzXUaLTlWymMUVn05FIQg6gu72YhfFdMrLczNd7TJk-I-p80B9EwkuWjcchANoq4Zm3SEXgx8XCqpB0mjn4yoh16Ta3IAWFwEjidtrDymKTdaV8cotbkA55LfjfBz-L60xX0VT-4ZlAcmGYwmSzAe6S-NRUrVatTcPKY9fogyMlK4Un5EkGp9pQpCSzSU');"></div>
            </div>
          </div>

          <!-- Lease Terms -->
          <div>
            <h2 class="text-title-md font-title-md mb-4">Lease Terms</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                <p class="text-label-md font-label-md font-semibold mb-4 text-on-background">Cost Details</p>
                <div class="flex justify-between mb-2">
                  <span class="text-secondary">Monthly Rent</span>
                  <span class="font-bold text-on-background">฿35,000</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="text-secondary">Security Deposit (3 Months)</span>
                  <span class="font-bold text-on-background">฿105,000</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="text-secondary">Electricity/Water</span>
                  <span class="font-bold text-on-background">Government Meter Rates</span>
                </div>
                <div class="border-t border-outline-variant mt-4 pt-4 flex justify-between">
                  <span class="font-bold text-on-background">Total Initial Payment</span>
                  <span class="font-bold text-primary text-lg">฿1,305,000</span>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="p-5 border border-outline-variant rounded-lg bg-surface-bright">
                  <h4 class="font-bold mb-3 text-on-background">What you will get</h4>
                  <ul class="text-body-md text-secondary list-disc pl-5 space-y-2">
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

        <!-- Right Column (Sidebar) -->
        <div class="lg:col-span-1">
          <div class="sticky top-24 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6 flex flex-col gap-4">
            <div class="border-b border-outline-variant pb-4 mb-2">
              <h2 class="text-label-md font-bold mb-4 flex items-center gap-2 text-on-background">
                <span class="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
                AI Summary
                <span class="ml-auto flex items-center gap-1 bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                  <span class="material-symbols-outlined text-[14px]">auto_awesome</span> AI POWERED
                </span>
              </h2>
              
              <div class="bg-surface-container-low p-4 rounded-xl flex flex-col items-center gap-4 border border-primary/20">
                <div class="flex flex-col items-center gap-1">
                  <!-- Circular Gauge -->
                  <div class="relative w-24 h-24 flex items-center justify-center">
                    <svg class="w-full h-full transform -rotate-90">
                      <circle class="text-outline-variant/30" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-width="8"></circle>
                      <circle class="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="37.68" stroke-width="8"></circle>
                    </svg>
                    <span class="absolute text-title-md font-bold text-on-background">85%</span>
                  </div>
                  <span class="text-[10px] font-label-sm text-secondary uppercase tracking-wider mt-1">Business Score</span>
                </div>
                <div class="text-center">
                  <p class="text-label-sm font-body-md text-on-background leading-relaxed mb-4 font-medium">
                    This location is highly suitable for F&B businesses due to being in the Ari area with high purchasing power.
                  </p>
                  <button id="open-analysis-btn" class="w-full bg-primary text-on-primary px-4 py-3 rounded-lg text-label-md font-bold hover:bg-primary-container transition-colors duration-200 flex items-center justify-center gap-2 shadow-md">
                    View Recommended Business Types
                  </button>
                </div>
              </div>
            </div>

            <!-- Share / Save Action Row -->
            <div class="flex gap-2 mb-2">
              <button class="flex-1 flex items-center justify-center gap-2 py-2 border border-outline-variant rounded text-label-md font-label-md hover:bg-surface-container-low transition-colors duration-200">
                <span class="material-symbols-outlined text-[18px]">favorite</span>
                Save Listing
              </button>
              <button class="flex-1 flex items-center justify-center gap-2 py-2 border border-outline-variant rounded text-label-md font-label-md hover:bg-surface-container-low transition-colors duration-200">
                <span class="material-symbols-outlined text-[18px]">share</span>
                Share
              </button>
              <button class="p-2 border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container-low transition-colors duration-200">
                <span class="material-symbols-outlined text-[18px]">more_vert</span>
              </button>
            </div>

            <!-- Agent Contact Info -->
            <div class="flex items-center justify-between border border-outline-variant rounded-lg p-4 bg-surface-bright hover:shadow-sm transition-shadow duration-200 cursor-pointer">
              <div class="flex items-center gap-3">
                <img class="w-12 h-12 rounded-full object-cover" alt="Professional portrait of Kanrutai Dawruang" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHZFjOMPPcJ1mucCQEG8KYn-zJHjwnjjpLlEW2BfsGDyWhRMcQT9sQ7wE4reCXcCcHTXJJnuKzxSkFgqMSYZ-T3VaKUDHzUxVImK8bp2sWmsPsTAK25aZ-fPGPb58EUafDlGwFJPBtE2OzXnDgeO__Uw6R-h7jcXJpChAAWfTuKpg8OWeXFfS3IzEF8EgXPbaqakAnXUzA1MHjzI4K1D-ED5XgPBV4enKITgB6WPdIbaQEL_BkyTcaHtnqPOSoqomVS2PjvnjAt-JX"/>
                <div>
                  <span class="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 inline-block">Verified Identity</span>
                  <h4 class="text-label-md font-label-md font-bold text-on-background">Kanrutai Dawruang</h4>
                  <p class="text-label-sm font-label-sm text-secondary">Plus Property</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-secondary">chevron_right</span>
            </div>

            <!-- CTAs -->
            <div class="flex flex-col gap-3 mt-2">
              <button class="w-full bg-primary text-on-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-200">
                Line
              </button>
              <button class="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors duration-200">
                WhatsApp
              </button>
              <button class="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors duration-200">
                <span class="material-symbols-outlined text-[18px]">call</span>
                View Phone Number
              </button>
              <button class="w-full border border-primary text-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors duration-200">
                <span class="material-symbols-outlined text-[18px]">send</span>
                Contact
              </button>
            </div>
            <p class="text-[10px] text-secondary mt-2 text-center leading-relaxed">
              By continuing, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Business Analysis Modal Overlay -->
    <div class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm" id="business-analysis-modal">
      <div class="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-xl overflow-hidden flex flex-col scale-95 opacity-0 transition-all duration-300 ease-out" id="modal-container">
        <!-- Modal Header -->
        <div class="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
          <h3 class="text-title-md font-title-md text-on-background font-bold flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">analytics</span>
            Business Suitability Analysis
          </h3>
          <button id="close-modal-x" class="material-symbols-outlined text-secondary hover:text-on-background transition-colors duration-200">close</button>
        </div>

        <!-- Modal Body -->
        <div class="p-6 flex flex-col gap-6 overflow-y-auto max-h-[60vh]">
          <!-- Card 1: Restaurant Cafe -->
          <div class="p-4 rounded-xl border border-outline-variant bg-surface-bright flex flex-col gap-4">
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary">restaurant</span>
                </div>
                <div>
                  <p class="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Business Type</p>
                  <h4 class="text-body-lg font-bold text-on-background">Restaurant Cafe</h4>
                </div>
              </div>
              <div class="bg-primary/10 px-3 py-1 rounded-full">
                <span class="text-primary font-bold">Score: 8/10</span>
              </div>
            </div>
            <div class="bg-surface-container-low p-3 rounded-lg">
              <p class="text-label-sm font-semibold text-secondary mb-1">Description Suggestion:</p>
              <p class="text-body-md text-on-surface">Office location suitable for lunch sales, people have purchasing power, can use items from the old business.</p>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-label-sm font-semibold text-secondary uppercase tracking-wider">Suggested Transformation</p>
              <div class="rounded-lg overflow-hidden border border-outline-variant">
                <img alt="Restaurant Cafe Transformation" class="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDVKx43cQ2HxapNuLqn9uA4bTM7In_ZPAi33ohVTZH7IFk6Tu3ugz5RBjFlfXuQ6nH5l7ZOve0T6K-vgv2sVsTEMGx3YSe3jKd1qylmH-rScyixyOvcFr60Otx0FrE5AhlVkBkcIafrvcxMs5g6sZTcKGOZ08fPuYfKtTUNNz6UVoOdy4PBavBdH5GvSk7qoUTldiS7BSi7HMYC9sVMvj2wodt-8qJ7JT7TuVxqp5YDnyR0dc--FtRHO1EhLG5Uaih93DUfxiH9a8"/>
              </div>
            </div>
          </div>

          <!-- Card 2: Co-Working Space -->
          <div class="p-4 rounded-xl border border-outline-variant bg-surface-bright flex flex-col gap-4">
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary">laptop_mac</span>
                </div>
                <div>
                  <p class="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Business Type</p>
                  <h4 class="text-body-lg font-bold text-on-background">Co-Working Space</h4>
                </div>
              </div>
              <div class="bg-primary/10 px-3 py-1 rounded-full">
                <span class="text-primary font-bold">Score: 7.5/10</span>
              </div>
            </div>
            <div class="bg-surface-container-low p-3 rounded-lg">
              <p class="text-label-sm font-semibold text-secondary mb-1">Description Suggestion:</p>
              <p class="text-body-md text-on-surface">Office location, few competitors, near a university, can use items from the old business.</p>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-label-sm font-semibold text-secondary uppercase tracking-wider">Suggested Transformation</p>
              <div class="rounded-lg overflow-hidden border border-outline-variant">
                <img alt="Co-Working Space Transformation" class="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8vCi7bnyY9fv9prZtV36ctmWVtH9L4WFQmenhTKWsCrOAy7A7Llv4Vb6W_01AJ5PLV6BMIkwkN1oBfXD5vCTG0-pu942pDEgLroxWCIkIkHn0C-L4KcqwyFvNGcTSW-5pGJ95ArqWFEfuKYLeDozkwnR3_m4W095LeRkUvLazxfEIea70M4GqWvfPNJg_9SM6CZxpXK_RVFtwdnCKNGuFbOKXqubGAR_hpSB4Q2U8fyeNODMxgFkWSapQbWv0aT02idCI_dZLhkyY"/>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-6 bg-surface-container-low border-t border-outline-variant">
          <button id="close-modal-btn" class="w-full py-3 border border-outline-variant bg-surface-container-lowest text-on-surface rounded-lg font-bold hover:bg-surface-bright transition-colors duration-200">
            Close Window
          </button>
        </div>
      </div>
    </div>
  `
};

/**
 * Handle routes in our client-side single page app.
 */
export function handleRoute() {
  const hash = window.location.hash || '#/';
  const path = hash.substring(1) || '/';
  
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;
  
  // Reflow logic for transition animations
  mainContent.classList.remove('fade-in');
  void mainContent.offsetWidth; 
  
  // Render content
  const renderFn = routes[path] || (() => `
    <div class="text-center py-20">
      <h1 class="text-headline-lg font-headline-lg text-primary">Page Not Found</h1>
      <p class="text-secondary mt-2">The section you are looking for is unavailable.</p>
      <a href="#/" class="inline-block mt-4 bg-primary text-on-primary px-6 py-2 rounded font-medium hover:bg-primary-container transition-colors duration-200">Return to Home</a>
    </div>
  `);
  mainContent.innerHTML = renderFn();
  mainContent.classList.add('fade-in');
  
  // Update stateful highlights
  updateActiveLink(hash);

  // Bind interactions for dynamic pages
  if (path === '/') {
    bindModalInteractions();
    bindNearbyFilters();
  }
}

/**
 * Handles the opening and closing of the AI analysis modal using class lists and transitions.
 */
function bindModalInteractions() {
  const modal = document.getElementById('business-analysis-modal');
  const modalContainer = document.getElementById('modal-container');
  const openBtn = document.getElementById('open-analysis-btn');
  const closeX = document.getElementById('close-modal-x');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!modal || !modalContainer || !openBtn) return;

  const showModal = () => {
    modal.classList.remove('hidden');
    // Allow thread flow before adding animation classes
    setTimeout(() => {
      modalContainer.classList.remove('scale-95', 'opacity-0');
      modalContainer.classList.add('scale-100', 'opacity-100');
    }, 20);
  };

  const hideModal = () => {
    modalContainer.classList.remove('scale-100', 'opacity-100');
    modalContainer.classList.add('scale-95', 'opacity-0');
    
    // Wait for the transition to finish before hiding the container
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  };

  openBtn.addEventListener('click', showModal);
  if (closeX) closeX.addEventListener('click', hideModal);
  if (closeBtn) closeBtn.addEventListener('click', hideModal);

  // Close when clicking overlay backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
}

/**
 * Binds category filters to highlight active options.
 */
function bindNearbyFilters() {
  const container = document.getElementById('nearby-filters');
  if (!container) return;

  const buttons = container.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.className = 'px-4 py-1.5 rounded-full border border-outline-variant text-label-md font-label-md hover:bg-surface-container-low whitespace-nowrap transition-colors duration-200';
      });
      button.className = 'px-4 py-1.5 rounded-full bg-on-surface text-surface border border-on-surface text-label-md font-label-md whitespace-nowrap';
    });
  });
}
