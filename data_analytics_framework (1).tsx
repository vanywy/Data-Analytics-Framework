import React, { useState } from 'react';

const IconBase = ({ size = 24, strokeWidth = 2, className = "", children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const Building2 = (props) => <IconBase {...props}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></IconBase>;
const Coffee = (props) => <IconBase {...props}><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></IconBase>;
const Gem = (props) => <IconBase {...props}><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></IconBase>;
const Users = (props) => <IconBase {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></IconBase>;
const Package = (props) => <IconBase {...props}><line x1="16.5" x2="7.5" y1="9.4" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><polyline points="12 22 12 12"/></IconBase>;
const Award = (props) => <IconBase {...props}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></IconBase>;
const Megaphone = (props) => <IconBase {...props}><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></IconBase>;
const UploadCloud = (props) => <IconBase {...props}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></IconBase>;
const FileSpreadsheet = (props) => <IconBase {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></IconBase>;
const Play = (props) => <IconBase {...props}><polygon points="5 3 19 12 5 21 5 3"/></IconBase>;
const X = (props) => <IconBase {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconBase>;
const CheckCircle2 = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></IconBase>;
const BarChart3 = (props) => <IconBase {...props}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></IconBase>;
const Loader2 = (props) => <IconBase {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></IconBase>;
const BookOpen = (props) => <IconBase {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></IconBase>;
const Database = (props) => <IconBase {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></IconBase>;

const analyticsData = {
  "Retail (Mass & Big Box)": {
    icon: Building2,
    brandFocus: "Uniqlo",
    categories: {
      "Users / Customers (CRM)": [
        { 
          name: "RFM Segmentation & Reactivation", 
          desc: "Segmenting buyers by Recency, Frequency, and Monetary value to identify VIPs and lapsed risks.",
          scenario: "Uniqlo uses RFM to identify 'Lapsed Seasonal Buyers'—customers who bought HEATTECH last winter but haven't returned. The CRM triggers an automated, localized app push notification with a 10% activation discount just as the first cold front hits their specific zip code."
        },
        { 
          name: "Omnichannel Customer Journey", 
          desc: "Mapping touchpoints from anonymous digital browsing to loyal in-store app user.",
          scenario: "A user browses 'Airism tees' on Uniqlo.com. Later, geo-fencing detects them walking near a flagship store. The app sends a welcome message mapping the exact aisle where Airism is stocked, converting an online browser into an omnichannel buyer."
        },
        { 
          name: "Predictive Lifetime Value (pLTV)", 
          desc: "Forecasting the long-term revenue of acquired cohorts to guide acquisition spend.",
          scenario: "Uniqlo's CRM calculates that a customer who buys both basics (socks) and outerwear (down jackets) in their first transaction has a 3x higher pLTV than single-category buyers. Marketing shifts ad spend to promote 'bundle outfits' rather than single items."
        },
        { 
          name: "Basket Abandonment & Retargeting", 
          desc: "Analyzing drop-off points in both physical store flows and digital checkouts.",
          scenario: "If a user adds items to the Uniqlo app cart but abandons it, the CRM waits 24 hours before sending an email featuring UGC (User Generated Content) of influencers wearing those exact items, along with a free-shipping activation code."
        },
        { 
          name: "Loyalty Tier Margin Impact", 
          desc: "Calculating the true profitability of loyalty program members after discounting and rewards.",
          scenario: "Uniqlo evaluates its app member discounts. Data shows that while members get more discounts, their purchase frequency is 40% higher, ultimately driving a net positive margin contribution compared to non-registered guest checkout users."
        }
      ],
      "Product & Inventory": [
        { name: "AI Demand Forecasting", desc: "Modeling external factors (seasonality, weather) to adjust local stock levels dynamically.", scenario: "Uniqlo adjusts inventory of umbrella and light jackets in real-time based on local weather API integrations." },
        { name: "Market Basket Analysis", desc: "Using association rules to determine which products are frequently bought together.", scenario: "Data reveals that selvedge denim is heavily bought alongside supima cotton tees, prompting a layout change to place these displays adjacently." },
        { name: "Dynamic Price Elasticity", desc: "Testing price points against competitor indices to maximize margin without killing velocity.", scenario: "Testing a $1.00 increase on basic fleece jackets across select test markets to measure the impact on sell-through speed." },
        { name: "Assortment Optimization", desc: "Tailoring shelf space allocation based on highly localized demographic demand.", scenario: "A store in a business district shifts floor space heavily toward the 'Smart Casual' line rather than athleisure." },
        { name: "Shrinkage & Discrepancy", desc: "Identifying operational gaps between theoretical inventory and actual stock counts.", scenario: "Using RFID checkout bins to cross-reference daily sales with inventory reduction in real-time, minimizing manual stock-takes." }
      ],
      "Branding & Positioning": [
        { name: "Catchment Penetration", desc: "Measuring how effectively a physical location draws from its surrounding geographic area.", scenario: "Analyzing app location data to see how far customers travel to reach a newly opened suburban Uniqlo." },
        { name: "Share of Voice (SOV)", desc: "Tracking brand mentions against direct competitors across all social and digital channels.", scenario: "Monitoring TikTok to see if Uniqlo's 'Round Mini Shoulder Bag' is outpacing competitor accessories in viral mentions." },
        { name: "Store-Level Sentiment", desc: "Aggregating local reviews to identify underperforming or highly-rated physical locations.", scenario: "Identifying a specific store with recurring negative feedback about fitting room wait times." },
        { name: "Brand Trust Scoring", desc: "Quantifying consumer perception regarding sustainability, ESG, and corporate ethics.", scenario: "Tracking consumer sentiment around Uniqlo's recycling initiatives (Re.Uniqlo) via social listening." },
        { name: "Competitor Proximity Impact", desc: "Analyzing how the opening or closing of rival stores affects localized baseline sales.", scenario: "Measuring foot traffic retention when a fast-fashion competitor opens a branch in the same mall." }
      ],
      "Advertising & Marketing": [
        { name: "Marketing Mix Modeling (MMM)", desc: "Top-down analysis allocating budget optimally across TV, print, and digital channels.", scenario: "Determining the optimal split between subway billboard ads and Instagram localized ads during a seasonal launch." },
        { name: "Digital-to-Physical Attribution", desc: "Proving when a digital ad directly caused an in-store physical purchase.", scenario: "Tracking users who clicked a mobile ad and subsequently checked out in-store using their linked app barcode." },
        { name: "Promotion Cannibalization", desc: "Analyzing if a discount drove incremental revenue or just subsidized inevitable purchases.", scenario: "Analyzing if a 'buy 2 get 1 free' sock promo actually increased the average basket size or just gave a discount to users who already buy in bulk." },
        { name: "Retail Media Yield", desc: "Maximizing the profitability of selling ad space on your own e-commerce platforms to partner brands.", scenario: "Not applicable for vertical retailers like Uniqlo, but tracked for multi-brand box stores." },
        { name: "Geo-Targeted ROAS", desc: "Measuring Return on Ad Spend down to the zip code or postal code level.", scenario: "Concentrating digital ad spend in a 5-mile radius around a newly renovated flagship store." }
      ]
    }
  },
  "Food & Beverage & Lifestyle": {
    icon: Coffee,
    brandFocus: "Agnès b. (Café & Boutique)",
    categories: {
      "Users / Customers (CRM)": [
        { 
          name: "Cross-Category Customer Journey", 
          desc: "Mapping how customers migrate from accessible entry points (coffee/pastry) to premium retail (fashion/accessories).",
          scenario: "An Agnès b. Café customer frequents the shop 3 times a week. The CRM tags them as 'High Brand Affinity'. They receive a targeted email offering a private styling session at the adjacent Agnès b. boutique, bridging the F&B to Retail gap."
        },
        { 
          name: "Dietary & Lifestyle Persona Clustering", 
          desc: "Grouping customers by inferred preferences based on order history to tailor communications.",
          scenario: "A segment of users consistently orders oat milk lattes and vegan pastries. Agnès b. sends this cluster an exclusive early-access invite for their new sustainable, vegan leather handbag collection."
        },
        { 
          name: "Lapsed User Churn Risk", 
          desc: "Identifying customers whose ordering frequency has dropped below their historical baseline.",
          scenario: "A loyal weekend brunch customer hasn't visited in 30 days. The automated journey triggers a 'We Miss You' message offering a complimentary artisanal chocolate box with their next café purchase."
        },
        { 
          name: "Loyalty vs. Aggregator Retention", 
          desc: "Comparing first-party app retention rates against third-party platforms (Deliveroo/Foodpanda).",
          scenario: "Agnès b. notices high third-party delivery volume but low retention. They include a beautifully branded QR code in delivery bags, offering a free coffee upgrade if the customer registers directly on the brand's proprietary app."
        },
        { 
          name: "Add-On Propensity (Basket Building)", 
          desc: "Identifying behavioral patterns that lift baseline transaction value without impacting frequency.",
          scenario: "Data shows that customers buying whole cakes for birthdays have a 60% propensity to buy branded floral arrangements if prompted. The POS system actively prompts staff to cross-sell flowers during cake orders."
        }
      ],
      "Product & Inventory": [
        { name: "Menu Engineering Matrix", desc: "Mapping items on profitability vs. popularity to dictate menu placement and recipe changes.", scenario: "Identifying that a specific signature Rose Latte has high popularity but low margin, prompting a slight recipe adjustment to improve yield." },
        { name: "Ingredient Yield Analysis", desc: "Tracking theoretical vs. actual food costs to identify shrinkage or portion-control issues.", scenario: "Tracking the exact yield of premium imported French butter used in croissants versus the theoretical recipe requirement." },
        { name: "Kitchen Throughput", desc: "Correlating kitchen ticket times with order volume to identify peak-hour operational bottlenecks.", scenario: "Optimizing the barista station layout after data shows espresso drink wait times spike unacceptably during the 12:30 PM lunch rush." },
        { name: "Table Turn Rate Optimization", desc: "Balancing dining duration with check size to maximize revenue per available seat hour.", scenario: "Adjusting seating arrangements in the café to favor 2-tops over 4-tops based on the dominant party size data." },
        { name: "Ghost Kitchen Margin Tracking", desc: "Isolating the profitability of delivery-only concepts sharing existing kitchen infrastructure.", scenario: "Tracking the distinct profitability of catering boxes prepared in the back-of-house versus front-of-house café sales." }
      ],
      "Branding & Positioning": [
        { name: "Aggregated Reputation Scoring", desc: "Consolidating OpenRice, Google, and TripAdvisor ratings into a single local index.", scenario: "Monitoring the shift in review sentiment after launching a new seasonal menu at the flagship café location." },
        { name: "Local SEO Discovery Rate", desc: "Tracking 'near me' search impression share and conversion to physical visits.", scenario: "Optimizing Google My Business profiles to ensure Agnès b. Café ranks #1 for 'premium coffee near me' in Central district." },
        { name: "Health & Sanitation Perception", desc: "Monitoring UGC and reviews for mentions of cleanliness and food safety.", scenario: "Using natural language processing to ensure aesthetic and cleanliness standards reflect the premium fashion brand's image." },
        { name: "Culinary Trend Earned Media", desc: "Measuring brand visibility when introducing viral or limited-edition flavor profiles.", scenario: "Tracking social media reach when launching a limited-edition matcha and white chocolate pastry collaboration." },
        { name: "Community Anchor Index", desc: "Assessing a location’s integration into local events, sponsorships, and neighborhood affinity.", scenario: "Measuring the brand lift of hosting local art exhibitions within the café space." }
      ],
      "Advertising & Marketing": [
        { name: "Hyper-Local Geo-Targeting", desc: "Tracking conversion rates of radius-based mobile ads during specific meal dayparts.", scenario: "Pushing ads for afternoon tea sets to mobile users within a 500-meter radius around 2:30 PM." },
        { name: "App Promo Profitability", desc: "Calculating the true margin impact of running BOGO offers on third-party delivery apps.", scenario: "Analyzing if offering free delivery on orders over $50 actually increases total net margin." },
        { name: "LTO (Limited Time Offer) Lift", desc: "Measuring the incremental traffic driven by seasonal menu additions.", scenario: "Evaluating the revenue bump driven by a 2-week Valentine's Day themed pastry set." },
        { name: "Meta-Search Delivery ROI", desc: "Optimizing ad spend on search queries explicitly looking for food delivery in specific zones.", scenario: "Bidding on search terms like 'luxury cake delivery' ahead of major holidays." },
        { name: "Daypart-Triggered Ad Conversion", desc: "Syncing ad spend to exact hours.", scenario: "Running digital display ads for fresh breakfast croissants exclusively between 7:00 AM and 9:30 AM." }
      ]
    }
  },
  "Luxury (Fashion & High-End)": {
    icon: Gem,
    brandFocus: "Chanel",
    categories: {
      "Users / Customers (CRM)": [
        { 
          name: "Clienteling Wealth Intelligence & Segmentation", 
          desc: "Integrating external HNW data (assets, milestones) into CRM for 1:1 hyper-personalized, bespoke outreach.",
          scenario: "Chanel's CRM flags a 'VIC' (Very Important Client) who recently sold a company. Instead of a generic email, the system alerts the boutique director to send a handwritten note congratulating them, along with a private viewing of High Jewelry."
        },
        { 
          name: "UHNW Lifetime Value (LTV) & Retention", 
          desc: "Tracking the investment required to retain top-tier clients versus acquiring new ones.",
          scenario: "A top 1% client has an LTV of $500k. The CRM calculates that flying them to Paris for a runway show costs $20k, but historically yields a $100k post-event purchase, confirming a highly profitable retention strategy."
        },
        { 
          name: "Bespoke Customer Communication Journey", 
          desc: "Mapping highly gated, tier-based touchpoints rather than mass marketing.",
          scenario: "A client buys their first Classic Flap bag. They do not receive a standard newsletter. Instead, the journey sets a 6-month trigger for their dedicated Fashion Advisor (FA) to WhatsApp them a personalized suggestion for a matching tweed jacket."
        },
        { 
          name: "Cross-Category Migration (Beauty to Fashion)", 
          desc: "Analyzing how buyers of entry-level goods graduate to core high-margin categories.",
          scenario: "Data shows 15% of clients who repeatedly buy Chanel N°5 perfume will purchase small leather goods within 12 months. The CRM creates a segmented list of frequent beauty buyers to invite to exclusive leather goods previews."
        },
        { 
          name: "VVIC Appointment Footfall & Conversion", 
          desc: "Measuring conversion rates and basket sizes of invite-only private shopping sessions.",
          scenario: "Chanel tracks the ROI of closing a boutique for 2 hours for a single UHNW family, proving the private salon model generates higher Average Transaction Value (ATV) than standard retail floor traffic."
        }
      ],
      "Product & Inventory": [
        { name: "Scarcity & Allocation Indexing", desc: "Tracking waitlist velocity versus production caps to meticulously maintain brand exclusivity.", scenario: "The waitlist for a seasonal seasonal novelty bag exceeds supply by 10x. The algorithm allocates the limited stock exclusively to clients with high prior LTVs to reward loyalty." },
        { name: "Sell-Through Velocity", desc: "Monitoring early-signal demand to adjust production runs and prevent brand-diluting markdowns.", scenario: "Monitoring the exact speed a runway look sells out globally to inform fabric purchasing for the next season, completely avoiding any need for end-of-season discounting." },
        { name: "Counterfeit & Grey Market Tracking", desc: "Using serial-level data to trace how legitimate products enter unauthorized secondary markets.", scenario: "Using micro-chip technology in handbags to trace pieces sold on the grey market back to the original buyer, allowing the brand to silently ban resellers." },
        { name: "Margin Per Square Foot", desc: "Maximizing the profitability of ultra-premium physical retail real estate.", scenario: "Analyzing whether dedicating 300 sq ft to a VIP Champagne lounge yields higher indirect sales than filling that space with ready-to-wear racks." },
        { name: "Bespoke Commission Yield", desc: "Analyzing the profitability and lead time of custom, made-to-order client requests.", scenario: "Tracking the artisan hours and material costs for a custom-ordered exotic leather piece to ensure the premium pricing maintains standard high-jewelry margins." }
      ],
      "Branding & Positioning": [
        { name: "Digital Brand Equity Index", desc: "Synthesizing Share of Search, Brand Awareness, and Sentiment to quantify intangible value.", scenario: "Monitoring global search trends to ensure the brand remains culturally dominant without becoming overly ubiquitous or losing its 'rare' aura." },
        { name: "Exclusivity Perception", desc: "Analyzing unsolicited online consumer data to ensure the brand maintains high scores in uniqueness.", scenario: "Using sentiment analysis on luxury forums to ensure discussions revolve around 'craftsmanship' and 'heritage' rather than 'availability'." },
        { name: "Earned Media Value (PR)", desc: "Quantifying the financial impact of runway shows, celebrity placements, and cultural moments.", scenario: "Calculating the equivalent ad-spend value of a major celebrity wearing a vintage Chanel gown on the Met Gala red carpet." },
        { name: "Heritage & Craftsmanship Sentiment", desc: "Monitoring how effectively the brand communicates its historical quality and artisanal roots.", scenario: "Tracking engagement on social media posts that highlight the Métiers d'Art (specialist ateliers) versus standard product shots." },
        { name: "Cultural Zeitgeist Mentions", desc: "Tracking organic brand inclusion in music, film, and high-end lifestyle media.", scenario: "Monitoring unpaid, organic mentions of the brand in pop culture to gauge relevance with younger, affluent demographics." }
      ],
      "Advertising & Marketing": [
        { name: "VIP Experiential ROI", desc: "Measuring the long-term sales lift generated by hosting HNW individuals at exclusive closed-door events.", scenario: "Tracking the 12-month purchasing behavior of clients who were invited to an exclusive resort-wear launch party in St. Tropez." },
        { name: "KOL / Influencer Quality of Engagement", desc: "Moving beyond follower counts to measure the actual purchasing power of an influencer's audience.", scenario: "Selecting brand ambassadors whose audiences index highly in affluent zip codes, rather than just raw follower counts." },
        { name: "Print-to-Digital Synergy", desc: "Using custom URLs to measure the effectiveness of high-end print campaigns in Vogue or GQ.", scenario: "Tracking the digital lift directly correlated to a double-page spread in a prestige fashion magazine." },
        { name: "Unbranded Editorial Lift", desc: "Tracking direct traffic spikes resulting from organic placements in high-fashion editorial spreads.", scenario: "Monitoring search traffic for specific fabric patterns immediately after an editorial shoot is published where the logo wasn't prominent." },
        { name: "Targeted OOH Attribution", desc: "Measuring digital search lift following strategic billboard placements in high-net-worth zip codes.", scenario: "Measuring the impact of a high-visibility billboard placement outside a private jet terminal in Aspen during ski season." }
      ]
    }
  }
};

const categoryIcons = {
  "Users / Customers (CRM)": Users,
  "Product & Inventory": Package,
  "Branding & Positioning": Award,
  "Advertising & Marketing": Megaphone
};

const DataInputModal = ({ model, brandFocus, industry, onClose }) => {
  const [activeTab, setActiveTab] = useState('scenario'); // 'scenario' or 'engine'
  const [inputMethod, setInputMethod] = useState('upload'); // 'upload' or 'manual'
  const [analysisState, setAnalysisState] = useState('idle'); // 'idle', 'processing', 'complete'
  const [dragActive, setDragActive] = useState(false);

  const handleAnalyze = () => {
    setAnalysisState('processing');
    setTimeout(() => {
      setAnalysisState('complete');
    }, 2500); 
  };

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  if (!model) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex justify-between items-start p-6 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
              <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-md uppercase tracking-wider">
                {industry}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{model.name}</h2>
            <p className="text-slate-600 mt-1 text-sm leading-relaxed">{model.desc}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50">
          <button
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${activeTab === 'scenario' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('scenario')}
          >
            <BookOpen size={16} />
            Business Scenario & CRM
          </button>
          <button
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${activeTab === 'engine' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('engine')}
          >
            <Database size={16} />
            Analysis Engine
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto bg-white">
          
          {/* TAB: Scenario */}
          {activeTab === 'scenario' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Brand Case Study</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center font-bold text-indigo-900">
                    {brandFocus.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">{brandFocus}</h4>
                </div>
                <p className="text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-100 shadow-sm text-sm">
                  {model.scenario}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                    <p className="text-xs text-indigo-500 font-bold uppercase tracking-wider mb-1">Key Data Requirement</p>
                    <p className="text-sm text-indigo-900 font-medium">Historical transaction logs, Customer ID, Timestamp.</p>
                 </div>
                 <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider mb-1">Expected Output</p>
                    <p className="text-sm text-emerald-900 font-medium">Actionable CRM Segment / Propensity Score.</p>
                 </div>
              </div>
            </div>
          )}

          {/* TAB: Engine */}
          {activeTab === 'engine' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {analysisState === 'idle' && (
                <>
                  <div className="flex p-1 bg-slate-100 rounded-lg mb-6 max-w-sm mx-auto">
                    <button
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-md transition-all ${inputMethod === 'upload' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      onClick={() => setInputMethod('upload')}
                    >
                      <UploadCloud size={16} /> Upload
                    </button>
                    <button
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-md transition-all ${inputMethod === 'manual' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      onClick={() => setInputMethod('manual')}
                    >
                      <FileSpreadsheet size={16} /> Manual Entry
                    </button>
                  </div>

                  {inputMethod === 'upload' && (
                    <div 
                      className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${dragActive ? 'border-indigo-500 bg-indigo-50 scale-[1.02]' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
                    >
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mx-auto mb-4 text-indigo-600">
                        <UploadCloud size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Drag & drop your dataset</h3>
                      <p className="text-slate-500 text-sm mb-6">CSV, XLSX, or JSON (Max 50MB).</p>
                      <button className="bg-white border border-slate-300 text-slate-700 font-semibold py-2 px-6 rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-sm">
                        Browse Files
                      </button>
                    </div>
                  )}

                  {inputMethod === 'manual' && (
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-slate-700">Raw Data Input (CSV format)</label>
                      <textarea 
                        className="w-full h-48 p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none font-mono text-sm text-slate-700 resize-none bg-slate-50 shadow-inner"
                        placeholder="customer_id, transaction_value, date&#10;1001, 250.00, 2023-10-01&#10;1002, 45.50, 2023-10-02&#10;..."
                      ></textarea>
                      <p className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        Ensure columns map to standard schemas.
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={handleAnalyze}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      <Play size={16} fill="currentColor" />
                      Run Analytics Engine
                    </button>
                  </div>
                </>
              )}

              {analysisState === 'processing' && (
                <div className="flex flex-col items-center justify-center py-16">
                  <Loader2 size={56} className="text-indigo-600 animate-spin mb-6" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Processing Data...</h3>
                  <p className="text-slate-500 text-sm max-w-sm text-center">
                    Running the {model.name} algorithm against your provided dataset.
                  </p>
                  
                  <div className="w-full max-w-md mt-10 space-y-5">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <span>Data Cleansing</span>
                        <span className="text-emerald-600">Complete</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <span>Model Application</span>
                        <span className="text-indigo-600 animate-pulse">Computing...</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full animate-pulse transition-all duration-1000" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {analysisState === 'complete' && (
                <div className="py-8 animate-in zoom-in-95 duration-300">
                  <div className="flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mx-auto mb-6 shadow-sm border border-emerald-200">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Analysis Complete</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Algorithm Confidence</p>
                      <p className="text-emerald-600 font-black text-2xl">94.2%</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Rows Processed</p>
                      <p className="text-slate-800 font-black text-2xl">84,209</p>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6 shadow-lg flex items-center justify-between cursor-pointer hover:bg-slate-800 transition-colors group">
                     <div className="flex items-center gap-4">
                       <div className="bg-slate-800 p-3 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition-colors">
                          <BarChart3 size={28} />
                       </div>
                       <div>
                         <p className="font-bold text-white text-lg group-hover:text-indigo-100 transition-colors">View Dashboard Report</p>
                         <p className="text-sm text-slate-400">Interactive visualization & export options</p>
                       </div>
                     </div>
                     <div className="text-slate-500 group-hover:text-white transition-colors">
                        <Play size={20} />
                     </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                     <button onClick={() => setAnalysisState('idle')} className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
                        Run New Analysis
                     </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const industries = Object.keys(analyticsData);
  const categories = Object.keys(analyticsData[industries[0]].categories);

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [activeModalModel, setActiveModalModel] = useState(null);

  const currentIndustryData = analyticsData[selectedIndustry];
  const currentData = currentIndustryData.categories[selectedCategory];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans text-slate-800 selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-80 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0 z-10 shadow-2xl relative">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="p-8 border-b border-white/10 flex items-center gap-4 relative z-10">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
            <BarChart3 size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-black text-white tracking-tight leading-none">OmniAnalytics</h1>
            <p className="text-[10px] uppercase tracking-widest text-indigo-400 mt-1.5 font-bold">Enterprise AI Models</p>
          </div>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5 px-2">Select Industry Focus</p>
          <nav className="space-y-2">
            {industries.map(industry => {
              const Icon = analyticsData[industry].icon;
              const isSelected = selectedIndustry === industry;
              return (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left font-semibold ${
                    isSelected 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20' 
                      : 'hover:bg-white/5 hover:text-white border border-transparent text-slate-400'
                  }`}
                >
                  <Icon size={18} className={isSelected ? "text-indigo-200" : "text-slate-500"} />
                  {industry}
                </button>
              );
            })}
          </nav>

          <div className="mt-12 bg-slate-800/50 rounded-xl p-5 border border-white/5 backdrop-blur-sm">
             <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Current Case Study</p>
             <div className="flex items-center gap-2 text-white font-bold text-lg">
                <BookOpen size={16} className="text-indigo-400" />
                {currentIndustryData.brandFocus}
             </div>
             <p className="text-xs text-slate-400 mt-2 leading-relaxed">
               Select models on the right to view how {currentIndustryData.brandFocus} applies CRM and Data strategies.
             </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50/50">
        
        {/* Header Area */}
        <header className="bg-white px-10 py-8 flex-shrink-0 shadow-sm z-0 relative">
          <div className="flex items-center gap-3 text-indigo-600 mb-2">
            {React.createElement(currentIndustryData.icon, { size: 32, strokeWidth: 2.5 })}
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">{selectedIndustry}</h2>
          </div>
          <p className="text-slate-500 text-base max-w-3xl mt-2 leading-relaxed">
            Deploy specialized machine learning and analytics models tailored for the {selectedIndustry.toLowerCase()} sector. Featuring strategic CRM blueprints and real-world brand applications.
          </p>
        </header>

        {/* Category Tabs */}
        <div className="bg-white px-10 flex gap-8 overflow-x-auto flex-shrink-0 shadow-sm relative z-0">
          {categories.map(category => {
            const Icon = categoryIcons[category];
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-5 flex items-center gap-2 font-bold text-sm transition-all border-b-[3px] whitespace-nowrap ${
                  isSelected 
                    ? 'border-indigo-600 text-indigo-700' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                <Icon size={18} strokeWidth={isSelected ? 2.5 : 2} />
                {category}
              </button>
            );
          })}
        </div>

        {/* Models Grid */}
        <div className="flex-1 overflow-y-auto p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentData.map((model, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveModalModel(model)}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors pr-4 leading-tight">
                      {model.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-300 group-hover:text-indigo-500 transition-colors flex-shrink-0">
                      <Play size={14} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed min-h-[3rem]">
                    {model.desc}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <BookOpen size={14} /> Case Study Focus
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 line-clamp-2 border border-slate-100 group-hover:border-indigo-100 group-hover:bg-indigo-50/50 transition-colors">
                    <span className="font-bold text-indigo-900 mr-1">{currentIndustryData.brandFocus}:</span> 
                    {model.scenario}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-12"></div>
        </div>
      </main>

      {/* Render Modal */}
      {activeModalModel && (
        <DataInputModal 
          model={activeModalModel} 
          brandFocus={currentIndustryData.brandFocus}
          industry={selectedIndustry}
          onClose={() => setActiveModalModel(null)} 
        />
      )}
    </div>
  );
}