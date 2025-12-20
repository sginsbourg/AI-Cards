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
    }
};

document.addEventListener(\'DOMContentLoaded\', () => {
    const params = new URLSearchParams(window.location.search);
const cardKey = params.get(\'card\');

    if (!cardKey || !cardData[cardKey]) {
    document.getElementById(\'card-title\').innerText = "Unknown Realm";
        return;
}

const data = cardData[cardKey];

document.getElementById(\'card-title\').innerText = data.title;
    document.title = `${data.title} - Play Mode`;
document.getElementById(\'mission-desc\').innerText = data.mission;

    // Workflow
    const workflowList = document.getElementById(\'workflow-list\');
    if (workflowList && data.workflow) {
    workflowList.innerHTML = data.workflow.map(step => `<li>${step}</li>`).join(\'\');
    }

// Requirements
const reqList = document.getElementById(\'requirements-list\');
    if (reqList && data.requirements) {
    reqList.innerHTML = data.requirements.map(req => `<li>${req}</li>`).join(\'\');
    }

// Payout
const payoutText = document.getElementById(\'payout-text\');
    if (payoutText && data.payoutInfo) {
    payoutText.innerText = data.payoutInfo;
}

// Quests
const questList = document.getElementById(\'quest-list\');
    data.quests.forEach(q => {
    const li = document.createElement(\'li\');
        li.innerHTML = `<label><input type="checkbox"> <span>${q}</span></label>`;
    questList.appendChild(li);
});

// Tools
const toolsGrid = document.getElementById(\'tools-grid\');
    data.tools.forEach(tool => {
    const a = document.createElement(\'a\');
        a.href = tool.url;
    a.target = "_blank";
    a.className = "tool-card";
    a.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-name">${tool.name}</div>
        `;
    toolsGrid.appendChild(a);
});

// Timer Logic
let time = 25 * 60;
let timerId = null;
const display = document.getElementById(\'timer\');
    const startBtn = document.getElementById(\'start-timer\');
    const resetBtn = document.getElementById(\'reset-timer\');

    function updateDisplay() {
        const m = Math.floor(time / 60).toString().padStart(2, \'0\');
        const s = (time % 60).toString().padStart(2, \'0\');
        display.innerText = `${m}:${s}`;
    }

    startBtn.addEventListener(\'click\', () => {
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
        if (time === 0) clearInterval(timerId);
    }, 1000);
}
    });

resetBtn.addEventListener(\'click\', () => {
        clearInterval(timerId);
timerId = null;
time = 25 * 60;
updateDisplay();
startBtn.innerText = "Focus";
    });

// Persistence
let playerStats = JSON.parse(localStorage.getItem(\'fsm_stats\')) || { xp: 0, level: 1, earnings: 0, questsDone: 0 };

    function updateStatsUI() {
        document.getElementById(\'level-stat\').innerText = playerStats.level;
        document.getElementById(\'earnings-stat\').innerText = \'$\' + playerStats.earnings.toLocaleString();
        document.getElementById(\'quests-stat\').innerText = playerStats.questsDone;

        const xpForNext = playerStats.level * 100;
        const percent = Math.min(100, (playerStats.xp / xpForNext) * 100);
        const xpBar = document.getElementById(\'xp-bar\');
        if (xpBar) xpBar.style.width = percent + \'%\';
    }
    updateStatsUI();

function saveStats() {
    localStorage.setItem(\'fsm_stats\', JSON.stringify(playerStats));
        updateStatsUI();
}

document.getElementById(\'add-revenue-btn\').addEventListener(\'click\', () => {
        const amt = parseFloat(document.getElementById(\'revenue-input\').value);
        if (!isNaN(amt) && amt > 0) {
    playerStats.earnings += amt;
    playerStats.xp += amt * 0.1;
    saveStats();
    document.getElementById(\'revenue-input\').value = \'\';
        }
    });

questList.addEventListener(\'change\', (e) => {
        if (e.target.type === \'checkbox\') {
if (e.target.checked) {
    playerStats.questsDone++;
    playerStats.xp += 25;
    if (playerStats.xp >= playerStats.level * 100) {
        playerStats.level++;
        playerStats.xp = 0;
    }
} else {
    playerStats.questsDone--;
    playerStats.xp -= 25;
}
saveStats();
        }
    });

const pad = document.getElementById(\'scratchpad\');
    pad.value = localStorage.getItem(`fsm_scratchpad_${cardKey}`) || \'\';
    pad.addEventListener(\'input\', () => {
        localStorage.setItem(`fsm_scratchpad_${cardKey}`, pad.value);
    });
});
