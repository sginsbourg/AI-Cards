const cardData = {
    freelance: {
        title: "Freelance Freedom",
        mission: "Trade your high-value skills for freedom. Detach time from location.",
        workflow: [
            "Build a portfolio on GitHub or a personal site.",
            "Create profiles on platforms like Upwork or Toptal.",
            "Apply to jobs with personalized proposals.",
            "Deliver work and collect reviews."
        ],
        requirements: [
            "Marketable skill (Coding, Writing, Design)",
            "Strong communication",
            "Reliable internet"
        ],
        payoutInfo: "Paid per project or hourly. Rates from $20 to $200+/hr.",
        quests: [
            "Update Portfolio/Profile",
            "Send 5 Cold Emails/Proposals",
            "Network with 1 Peer",
            "Deliver stellar work"
        ],
        tools: [
            { name: "Upwork", url: "https://www.upwork.com", icon: "🟢" },
            { name: "Fiverr", url: "https://www.fiverr.com", icon: "🟢" },
            { name: "LinkedIn", url: "https://www.linkedin.com", icon: "🔵" },
            { name: "Toptal", url: "https://www.toptal.com", icon: "💎" }
        ]
    },
    ecommerce: {
        title: "E-Com Empire",
        mission: "Build a digital storefront that sells while you sleep.",
        workflow: [
            "Find a niche/product using research tools.",
            "Set up a Shopify or Etsy store.",
            "Source product (Dropshipping or Inventory).",
            "Run ads (Facebook/TikTok/Google)."
        ],
        requirements: [
            "Startup capital ($500+ recommended)",
            "Marketing/Advertising knowledge",
            "Product research skills"
        ],
        payoutInfo: "Profit margins (revenue minus costs). Scalable to $10k+/mo.",
        quests: [
            "Research 1 New Product",
            "Optimize Product Photos",
            "Create 3 Ad Creatives",
            "Check Inventory/Suppliers"
        ],
        tools: [
            { name: "Shopify", url: "https://www.shopify.com", icon: "🛍️" },
            { name: "Etsy", url: "https://www.etsy.com", icon: "🧡" },
            { name: "AliExpress", url: "https://www.aliexpress.com", icon: "📦" },
            { name: "Canva", url: "https://www.canva.com", icon: "🎨" }
        ]
    },
    content: {
        title: "Creator Cosmos",
        mission: "Amplify your voice to attract opportunities and revenue.",
        workflow: [
            "Pick a niche and platform (YouTube, TikTok, Substack).",
            "Publish consistent, high-quality content.",
            "Build an audience and email list.",
            "Monetize via ads, sponsors, or products."
        ],
        requirements: [
            "Creative skills",
            "Consistency (1+ year)",
            "Editing software"
        ],
        payoutInfo: "Ad revenue, brand deals, and affiliate sales.",
        quests: [
            "Script 1 Video/Post",
            "Record/Film Content",
            "Edit and Polish",
            "Engage with Comments (15m)"
        ],
        tools: [
            { name: "YouTube Studio", url: "https://studio.youtube.com", icon: "🟥" },
            { name: "TikTok", url: "https://www.tiktok.com", icon: "🎵" },
            { name: "Substack", url: "https://substack.com", icon: "📝" },
            { name: "CapCut", url: "https://www.capcut.com", icon: "🎬" }
        ]
    },
    affiliate: {
        title: "Affiliate Alchemy",
        mission: "Connect people with solutions they need and earn the difference.",
        workflow: [
            "Join affiliate programs (Amazon, SaaS, etc).",
            "Create content recommending products.",
            "Drive traffic to your affiliate links.",
            "Earn commission on every sale."
        ],
        requirements: [
            "SEO or Paid Ads knowledge",
            "Trust with audience",
            "Copywriting skills"
        ],
        payoutInfo: "Commission percentage (typically 10-50%).",
        quests: [
            "Find 1 High-Ticket Program",
            "Write a Review Article/Post",
            "Share Link in Relevant Group",
            "Analyze Click Data"
        ],
        tools: [
            { name: "Amazon Associates", url: "https://affiliate-program.amazon.com", icon: "🛒" },
            { name: "ClickBank", url: "https://www.clickbank.com", icon: "💸" },
            { name: "Impact", url: "https://impact.com", icon: "💥" }
        ]
    },
    coaching: {
        title: "Soul Coaching",
        mission: "Transform lives using your unique wisdom and experience.",
        workflow: [
            "Define your coaching niche and offer.",
            "Produce content showing expertise.",
            "Offer free discovery calls.",
            "Enroll clients and deliver sessions."
        ],
        requirements: [
            "Proven expertise in a specific field",
            "High empathy/communication",
            "Zoom/Calendly setup"
        ],
        payoutInfo: "Direct payments from clients. $100-$1000+/session.",
        quests: [
            "DM 3 Potential Leads",
            "Create 1 piece of educational content",
            "Refine Offer/Curriculum",
            "Conduct Discovery Call"
        ],
        tools: [
            { name: "Zoom", url: "https://zoom.us", icon: "📹" },
            { name: "Calendly", url: "https://calendly.com", icon: "📅" },
            { name: "Stripe", url: "https://dashboard.stripe.com", icon: "💳" }
        ]
    },
    saas: {
        title: "SaaS Sorcery",
        mission: "Code tools that solve recurring problems for recurring revenue.",
        workflow: [
            "Identify a boring problem.",
            "Build a Minimum Viable Product (MVP).",
            "Launch on ProductHunt or IndieHackers.",
            "Iterate based on user feedback."
        ],
        requirements: [
            "Full-stack coding skills",
            "Persistent marketing efforts",
            "User support"
        ],
        payoutInfo: "Monthly recurring revenue (MRR).",
        quests: [
            "Commit Code (Git Push)",
            "Talk to 1 User",
            "Fix 1 Bug or Polish UI",
            "Update Roadmap"
        ],
        tools: [
            { name: "GitHub", url: "https://github.com", icon: "🐙" },
            { name: "Vercel", url: "https://vercel.com", icon: "▲" },
            { name: "Supabase", url: "https://supabase.com", icon: "⚡" }
        ]
    },
    crypto: {
        title: "Crypto Nomad",
        mission: "Navigate the decentralized economy with precision.",
        workflow: [
            "Understand blockchain fundamentals.",
            "Learn Technical/Fundamental Analysis.",
            "Explore DeFi/Yield Farming/Staking.",
            "Manage risk and security (Hardware wallets)."
        ],
        requirements: [
            "Capital to invest/trade",
            "Strong risk management",
            "Technical security awareness"
        ],
        payoutInfo: "Capital gains and yield rewards.",
        quests: [
            "Check Market Charts (TA)",
            "Research 1 New Protocol",
            "Rebalance Portfolio",
            "Security Check (Wallets)"
        ],
        tools: [
            { name: "TradingView", url: "https://www.tradingview.com", icon: "📉" },
            { name: "Metamask", url: "https://metamask.io", icon: "🦊" },
            { name: "DefiLlama", url: "https://defillama.com", icon: "🦙" }
        ]
    },
    community: {
        title: "Tribe Builder",
        mission: "Gather your people and facilitate their growth.",
        workflow: [
            "Choose a core interest (Coding, Fitness, etc).",
            "Start a free community to find early members.",
            "Add premium tiers or masterminds.",
            "Facilitate networking and education."
        ],
        requirements: [
            "Leadership/Moderation skills",
            "Ability to curate content",
            "Community platform (Discord/Skool)"
        ],
        payoutInfo: "Monthly membership fees.",
        quests: [
            "Welcome New Members",
            "Post Daily Discussion",
            "Host Live Event/Space",
            "Reply to DMs"
        ],
        tools: [
            { name: "Discord", url: "https://discord.com", icon: "💬" },
            { name: "Skool", url: "https://skool.com", icon: "🏫" },
            { name: "Circle", url: "https://circle.so", icon: "⭕" }
        ]
    },
    fia: {
        title: "AI Automator",
        mission: "Orchestrate digital workers to replace manual toil.",
        workflow: [
            "Identify repetitive business processes.",
            "Build automation workflows using No-Code tools.",
            "Integrate LLMs (GPT-4) for logic.",
            "Sell as a service or a product."
        ],
        requirements: [
            "Logical thinking/Flowcharting",
            "API understanding",
            "Prompt engineering"
        ],
        payoutInfo: "Retainer fees or project-based billing.",
        quests: [
            "Map out 1 Workspace",
            "Build/Test Zapier/Make Scenario",
            "Pitch Automation to Client",
            "Refine Prompts"
        ],
        tools: [
            { name: "Zapier", url: "https://zapier.com", icon: "🟠" },
            { name: "Make", url: "https://www.make.com", icon: "🟣" },
            { name: "OpenAI", url: "https://platform.openai.com", icon: "🧠" }
        ]
    },
    smartcontract: {
        title: "Code Auditor",
        mission: "Secure the decentralized world one line at a time.",
        workflow: [
            "Learn Solidity & Web3 security (Cyfrin Updraft).",
            "Join competitive platforms (Code4rena, Sherlock).",
            "Review project code for logic errors & hacks.",
            "Submit high-quality vulnerability reports.",
            "Collect rewards from the prize pool."
        ],
        requirements: [
            "Solidity Proficiency",
            "Security Mindset",
            "Foundry/Hardhat Tools",
            "GitHub & Discord account"
        ],
        payoutInfo: "Bounties & Contests. $2k - $50k+ per audit based on severity.",
        quests: [
            "Run Static Analysis (Slither)",
            "Manual Logic Review",
            "Write Vulnerability Report",
            "Verify Fixes"
        ],
        tools: [
            { name: "Code4rena", url: "https://code4rena.com", icon: "🏟️" },
            { name: "Immunefi", url: "https://immunefi.com", icon: "🛡️" },
            { name: "Sherlock", url: "https://sherlock.xyz", icon: "🔍" },
            { name: "Foundry", url: "https://book.getfoundry.sh", icon: "🛠️" }
        ]
    },
    cyber: {
        title: "Cyber Sentinel",
        mission: "Hack the planet (legally) and get paid for it.",
        workflow: [
            "Learn web security (OWASP Top 10).",
            "Register on HackerOne or Bugcrowd.",
            "Choose a program and find vulnerabilities.",
            "Diligently report bugs to companies."
        ],
        requirements: [
            "Networking knowledge",
            "Creative hacking skills",
            "Ethical standards"
        ],
        payoutInfo: "Bounties per bug ($500 - $100k+).",
        quests: [
            "Recon Subdomains",
            "Fuzz Input Fields",
            "Report Critical Bug",
            "Retest Patch"
        ],
        tools: [
            { name: "HackerOne", url: "https://hackerone.com", icon: "🐞" },
            { name: "Bugcrowd", url: "https://bugcrowd.com", icon: "🐛" },
            { name: "Burp Suite", url: "https://portswigger.net/burp", icon: "🟧" }
        ]
    },
    devops: {
        title: "Cloud Architect",
        mission: "Build and scale the invisible backbone of the internet.",
        workflow: [
            "Master AWS, GCP, or Azure basics.",
            "Learn Infrastructure as Code (Terraform).",
            "Get certified (AWS Solutions Architect).",
            "Apply for remote high-paying DevOps roles."
        ],
        requirements: [
            "Cloud platform knowledge",
            "Linux/Shell scripting",
            "CI/CD experience"
        ],
        payoutInfo: "High salaries or consulting rates ($100-$300/hr).",
        quests: [
            "Provision Infrastructure",
            "Fix Build Pipeline",
            "Optimize Spending",
            "Run Security Scan"
        ],
        tools: [
            { name: "AWS", url: "https://aws.amazon.com", icon: "☁️" },
            { name: "Terraform", url: "https://www.terraform.io", icon: "🏗️" },
            { name: "Docker", url: "https://www.docker.com", icon: "🐳" }
        ]
    },
    api: {
        title: "API Tycoon",
        mission: "Monetize data and logic via programmatic endpoints.",
        workflow: [
            "Find a useful data source or logic.",
            "Build a REST API using Node.js or Python.",
            "List on a marketplace (RapidAPI).",
            "Collect subscription fees from users."
        ],
        requirements: [
            "Backend development skills",
            "Server management knowledge",
            "Data sourcing/scraping"
        ],
        payoutInfo: "Monthly subscriptions. Recurring revenue.",
        quests: [
            "Add New Endpoint",
            "Optimize Query Time",
            "Market to Developers",
            "Check Usage Logs"
        ],
        tools: [
            { name: "RapidAPI", url: "https://rapidapi.com", icon: "🐙" },
            { name: "Postman", url: "https://www.postman.com", icon: "🚀" },
            { name: "Vercel", url: "https://vercel.com", icon: "▲" }
        ]
    },
    techwriter: {
        title: "Docs Doctor",
        mission: "Translate complex tech into clear, readable documentation.",
        workflow: [
            "Build a technical writing portfolio.",
            "Apply for developer relations or tech docs roles.",
            "Offer freelance API documentation services.",
            "Publish tutorials on Dev.to or Medium."
        ],
        requirements: [
            "Excellent writing skills",
            "Basic coding/API knowledge",
            "Attention to detail"
        ],
        payoutInfo: "Monthly salary or $500-$2000 per article.",
        quests: [
            "Draft New Tutorial",
            "Interview Developer",
            "Fix 404 Links in Docs",
            "Publish API Reference"
        ],
        tools: [
            { name: "GitBook", url: "https://www.gitbook.com", icon: "📚" },
            { name: "Write the Docs", url: "https://www.writethedocs.org", icon: "🌍" },
            { name: "Notion", url: "https://notion.so", icon: "📓" }
        ]
    },
    prompt: {
        title: "Prompt Pilot",
        mission: "Engineer precise AI inputs to generate high-value outputs.",
        workflow: [
            "Master LLM prompting techniques.",
            "List high-performing prompts on marketplaces.",
            "Offer AI automation consulting.",
            "Build custom GPTs for specific niches."
        ],
        requirements: [
            "Deep understanding of LLMs",
            "Iterative testing mindset",
            "Creative problem solving"
        ],
        payoutInfo: "Prompt sales or consulting fees ($1k-$10k/mo).",
        quests: [
            "Refine Core Prompt",
            "Test Against Edge Cases",
            "List on PromptBase",
            "Create Demo Output"
        ],
        tools: [
            { name: "PromptBase", url: "https://promptbase.com", icon: "💎" },
            { name: "ChatGPT", url: "https://chatgpt.com", icon: "🤖" },
            { name: "Midjourney", url: "https://www.midjourney.com", icon: "🎨" }
        ]
    },
    newsletter: {
        title: "Newsletter Baron",
        mission: "Build a direct relationship with an audience via email.",
        workflow: [
            "Identify a niche interest.",
            "Start a free newsletter (Substack/Beehiiv).",
            "Growth hack via social media (X/LinkedIn).",
            "Monetize via sponsorships or premium tiers."
        ],
        requirements: [
            "Curation/Writing consistency",
            "Marketing/Growth mindset",
            "Deep niche expertise"
        ],
        payoutInfo: "Sponsorships and monthly subscriptions.",
        quests: [
            "Draft Weekly Issue",
            "Grow List by 10 New Subs",
            "Pitch Sponsor",
            "Analyze Open Rates"
        ],
        tools: [
            { name: "Substack", url: "https://substack.com", icon: "📝" },
            { name: "Beehiiv", url: "https://www.beehiiv.com", icon: "🐝" },
            { name: "ConvertKit", url: "https://convertkit.com", icon: "📧" }
        ]
    },
    domains: {
        title: "Domain Ranger",
        mission: "Invest in high-potential digital real estate.",
        workflow: [
            "Research trending keywords.",
            "Buy expired or undervalued domains.",
            "List on marketplaces (Sedo/Afternic).",
            "Actively outbound to potential buyers."
        ],
        requirements: [
            "Capital for registration fees",
            "Market research skills",
            "Patience for the right buyer"
        ],
        payoutInfo: "Capital gains on sales (flipping).",
        quests: [
            "Research 5 New Domains",
            "List domains for Auction",
            "Renew priority assets",
            "Outbound 1 Potential Buyer"
        ],
        tools: [
            { name: "GoDaddy Auctions", url: "https://auctions.godaddy.com", icon: "🌐" },
            { name: "Sedo", url: "https://sedo.com", icon: "💰" },
            { name: "Namecheap", url: "https://www.namecheap.com", icon: "🏷️" }
        ]
    },
    voice: {
        title: "Voice Artist",
        mission: "Lend your unique voice to brands, books, and ads.",
        workflow: [
            "Set up a home studio/quiet space.",
            "Create a demo reel (Commercial, Narration).",
            "Audition for projects on ACX or Voices.com.",
            "Deliver high-quality audio files."
        ],
        requirements: [
            "Decent microphone & audio gear",
            "Vocal range/Control",
            "Basic audio editing skills"
        ],
        payoutInfo: "Payment per project or royalties (ACX).",
        quests: [
            "Record 3 Auditions",
            "Polish Demo Reel",
            "Update Profile",
            "Deliver Mastered Audio"
        ],
        tools: [
            { name: "ACX", url: "https://www.acx.com", icon: "🎙️" },
            { name: "Voices.com", url: "https://www.voices.com", icon: "📣" },
            { name: "Fiverr", url: "https://www.fiverr.com", icon: "🟢" }
        ]
    },
    tutor: {
        title: "Knowledge Guide",
        mission: "Teach your skills to students worldwide.",
        workflow: [
            "Identify what you can teach (Language, Code, Music).",
            "Sign up on marketplace platforms (Preply).",
            "Set your hourly rate and schedule.",
            "Deliver value and get 5-star reviews."
        ],
        requirements: [
            "Expertise in your subject",
            "Patience & Teaching ability",
            "Good webcam & headset"
        ],
        payoutInfo: "Hourly rate ($20-$100+/hr).",
        quests: [
            "Prepare Lesson Plan",
            "Update Profile Bio",
            "Message 5 Students",
            "Host Trial Lesson"
        ],
        tools: [
            { name: "Preply", url: "https://preply.com", icon: "🎓" },
            { name: "iTalki", url: "https://www.italki.com", icon: "🗣️" },
            { name: "Outschool", url: "https://outschool.com", icon: "🎒" }
        ]
    },
    assets: {
        title: "Asset Artisan",
        mission: "Create digital products that sell while you sleep.",
        workflow: [
            "Choose a format (Notion templates, 3D, UI kit).",
            "Build a high-quality, polished asset.",
            "Publish on Gumroad or a marketplace.",
            "Promote via Pinterest, X, or LinkedIn."
        ],
        requirements: [
            "Design/Development skills",
            "Understanding of market needs",
            "Storefront management"
        ],
        payoutInfo: "Scalable passive income from repeat sales.",
        quests: [
            "Design New Version",
            "Upload 1 New Listing",
            "Write Sales Copy",
            "Reply to Support Email"
        ],
        tools: [
            { name: "Gumroad", url: "https://gumroad.com", icon: "🧊" },
            { name: "Creative Market", url: "https://creativemarket.com", icon: "🎨" },
            { name: "Envato", url: "https://envato.com", icon: "🛒" }
        ]
    },
    va: {
        title: "Virtuoso VA",
        mission: "Provide elite remote assistance to founders and teams.",
        workflow: [
            "Identify your administrative strengths.",
            "Join VA specialized cold-calling or listing sites.",
            "Network on LinkedIn with busy founders.",
            "Manage calendars, email, and operations."
        ],
        requirements: [
            "Exceptional organization",
            "English proficiency",
            "Proficiency in Slack/Notion/Gmail"
        ],
        payoutInfo: "Hourly retainer or fixed fee ($1k-$5k/mo).",
        quests: [
            "Clear Inbox Zero",
            "Schedule 3 Meetings",
            "Update CRM Data",
            "Send Weekly Report"
        ],
        tools: [
            { name: "Belay", url: "https://belaysolutions.com", icon: "🏔️" },
            { name: "Fancy Hands", url: "https://www.fancyhands.com", icon: "✋" },
            { name: "Upwork", url: "https://upwork.com", icon: "🟢" }
        ]
    },
    testing: {
        title: "UX Tester",
        mission: "Evaluate website usability and get paid for your thoughts.",
        workflow: [
            "Register on testing platforms.",
            "Pass the initial practice test.",
            "Accept available testing opportunities.",
            "Record your screen and speak your thoughts aloud."
        ],
        requirements: [
            "Quiet environment for recording",
            "Ability to verbalize internal thoughts",
            "High-speed internet"
        ],
        payoutInfo: "$10-$60 per test (usually 20 mins).",
        quests: [
            "Complete Practice Test",
            "Check for New Tests",
            "Submit 1 Full Report",
            "Verify Payout Status"
        ],
        tools: [
            { name: "UserTesting", url: "https://www.usertesting.com", icon: "🧪" },
            { name: "TryMyUI", url: "https://www.trymyui.com", icon: "🔍" },
            { name: "Userlytics", url: "https://www.userlytics.com", icon: "👁️" }
        ]
    },
    data: {
        title: "Data Oracle",
        mission: "Transform raw data into profitable business insights.",
        workflow: [
            "Learn SQL and Google Analytics.",
            "Build a portfolio of data visualizations.",
            "Offer freelance data auditing services.",
            "Consult with agencies on their reporting."
        ],
        requirements: [
            "Analytical mindset",
            "Excel/Google Sheets mastery",
            "Visualization skills (Tableau/Looker)"
        ],
        payoutInfo: "Project-based or monthly retainer ($3k-$12k/mo).",
        quests: [
            "Clean Dataset",
            "Create Dashboard",
            "Identify 1 Growth Trend",
            "Present Findings"
        ],
        tools: [
            { name: "Google Analytics", url: "https://analytics.google.com", icon: "📊" },
            { name: "Looker Studio", url: "https://lookerstudio.google.com", icon: "📈" },
            { name: "Excel", url: "https://www.microsoft.com/en-us/microsoft-365/excel", icon: "📗" }
        ]
    },
    rankrent: {
        title: "Local SEO Lord",
        mission: "Rank local business sites and rent them for profit.",
        workflow: [
            "Pick a local niche (Plumbing, Roofing).",
            "Build and rank a lead-gen site in a city.",
            "Verify a Google Business Profile (GMB).",
            "Rent the leads/site to a local business."
        ],
        requirements: [
            "Deep SEO knowledge",
            "Local networking skills",
            "Patience (3-6 months to rank)"
        ],
        payoutInfo: "Monthly rent ($500-$2000 per site).",
        quests: [
            "Optimize GMB Profile",
            "Build 5 Local Backlinks",
            "Track Keyword Position",
            "Call Potential Partner"
        ],
        tools: [
            { name: "BrightLocal", url: "https://www.brightlocal.com", icon: "📍" },
            { name: "Ahrefs", url: "https://ahrefs.com", icon: "🔍" },
            { name: "GMB", url: "https://www.google.com/business", icon: "📦" }
        ]
    },
    appresell: {
        title: "White Labeler",
        mission: "Resell software solutions under your own brand.",
        workflow: [
            "Find a white-label software (GoHighLevel).",
            "Set up your agency branding and sub-accounts.",
            "Package it with your own services.",
            "Sell to local businesses as an all-in-one solution."
        ],
        requirements: [
            "Sales & CRM knowledge",
            "Basic tech setup skills",
            "Marketing ability"
        ],
        payoutInfo: "Monthly subscription fees from clients.",
        quests: [
            "Set Up White Label Brand",
            "Onboard 1 Trial User",
            "Create Snapshots",
            "Run Outreach Campaign"
        ],
        tools: [
            { name: "GoHighLevel", url: "https://www.gohighlevel.com", icon: "🚀" },
            { name: "AppSumo", url: "https://appsumo.com", icon: "🌮" },
            { name: "AgencyAnalytics", url: "https://agencyanalytics.com", icon: "📊" }
        ]
    }
};

const initPage = () => {
    const params = new URLSearchParams(window.location.search);
    const cardKey = params.get('card');

    if (!cardKey || !cardData[cardKey]) {
        const titleEl = document.getElementById('card-title');
        if (titleEl) titleEl.innerText = "Unknown Realm";
        return;
    }

    const data = cardData[cardKey];

    // Populate UI
    const titleEl = document.getElementById('card-title');
    if (titleEl) titleEl.innerText = data.title;
    document.title = `${data.title} - Play Mode`;

    const missionEl = document.getElementById('mission-desc');
    if (missionEl) missionEl.innerText = data.mission;

    // Workflow
    const workflowList = document.getElementById('workflow-list');
    if (workflowList && data.workflow) {
        workflowList.innerHTML = data.workflow.map(step => `<li>${step}</li>`).join('');
    }

    // Requirements
    const reqList = document.getElementById('requirements-list');
    if (reqList && data.requirements) {
        reqList.innerHTML = data.requirements.map(req => `<li>${req}</li>`).join('');
    }

    // Payout
    const payoutText = document.getElementById('payout-text');
    if (payoutText && data.payoutInfo) {
        payoutText.innerText = data.payoutInfo;
    }

    // Quests
    const questList = document.getElementById('quest-list');
    if (questList && data.quests) {
        questList.innerHTML = '';
        data.quests.forEach(q => {
            const li = document.createElement('li');
            li.innerHTML = `<label><input type="checkbox"> <span>${q}</span></label>`;
            questList.appendChild(li);
        });
    }

    // Tools
    const toolsGrid = document.getElementById('tools-grid');
    if (toolsGrid && data.tools) {
        toolsGrid.innerHTML = '';
        data.tools.forEach(tool => {
            const a = document.createElement('a');
            a.href = tool.url;
            a.target = "_blank";
            a.className = "tool-card";
            a.innerHTML = `
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-name">${tool.name}</div>
            `;
            toolsGrid.appendChild(a);
        });
    }

    // Timer Logic
    let time = 25 * 60;
    let timerId = null;
    const display = document.getElementById('timer');
    const startBtn = document.getElementById('start-timer');
    const resetBtn = document.getElementById('reset-timer');

    if (display && startBtn && resetBtn) {
        function updateDisplay() {
            const m = Math.floor(time / 60).toString().padStart(2, '0');
            const s = (time % 60).toString().padStart(2, '0');
            display.innerText = `${m}:${s}`;
        }

        startBtn.addEventListener('click', () => {
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
                startBtn.innerText = "Focus";
            } else {
                startBtn.innerText = "Pause";
                timerId = setInterval(() => {
                    time--;
                    if (time < 0) time = 0;
                    updateDisplay();
                    if (time === 0) {
                        clearInterval(timerId);
                        alert("Session complete! Log your progress.");
                    }
                }, 1000);
            }
        });

        resetBtn.addEventListener('click', () => {
            clearInterval(timerId);
            timerId = null;
            time = 25 * 60;
            updateDisplay();
            startBtn.innerText = "Focus";
        });
    }

    // Stats & Persistence
    let playerStats = JSON.parse(localStorage.getItem('fsm_stats')) || { xp: 0, level: 1, earnings: 0, questsDone: 0 };

    function updateStatsUI() {
        const levelStat = document.getElementById('level-stat');
        const earningsStat = document.getElementById('earnings-stat');
        const questsStat = document.getElementById('quests-stat');
        const xpBar = document.getElementById('xp-bar');

        if (levelStat) levelStat.innerText = playerStats.level;
        if (earningsStat) earningsStat.innerText = '$' + playerStats.earnings.toLocaleString();
        if (questsStat) questsStat.innerText = playerStats.questsDone;

        if (xpBar) {
            const xpForNext = playerStats.level * 100;
            const percent = Math.min(100, (playerStats.xp / xpForNext) * 100);
            xpBar.style.width = percent + '%';
        }
    }
    updateStatsUI();

    function saveStats() {
        localStorage.setItem('fsm_stats', JSON.stringify(playerStats));
        updateStatsUI();
    }

    const addRevBtn = document.getElementById('add-revenue-btn');
    const revInput = document.getElementById('revenue-input');
    if (addRevBtn && revInput) {
        addRevBtn.addEventListener('click', () => {
            const amt = parseFloat(revInput.value);
            if (!isNaN(amt) && amt > 0) {
                playerStats.earnings += amt;
                playerStats.xp += amt * 0.1;
                saveStats();
                revInput.value = '';
            }
        });
    }

    if (questList) {
        questList.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                if (e.target.checked) {
                    playerStats.questsDone++;
                    playerStats.xp += 25;
                    if (playerStats.xp >= playerStats.level * 100) {
                        playerStats.level++;
                        playerStats.xp = 0;
                        alert("🎉 Rank Up! You are now Level " + playerStats.level);
                    }
                } else {
                    playerStats.questsDone--;
                    playerStats.xp -= 25;
                }
                saveStats();
            }
        });
    }

    const pad = document.getElementById('scratchpad');
    if (pad) {
        pad.value = localStorage.getItem(`fsm_scratchpad_${cardKey}`) || '';
        pad.addEventListener('input', () => {
            localStorage.setItem(`fsm_scratchpad_${cardKey}`, pad.value);
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
