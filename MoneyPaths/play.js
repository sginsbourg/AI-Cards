const cardData = {
    freelance: {
        title: "Freelance Freedom",
        mission: "Trade your high-value skills for freedom. Detach time from location.",
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
            { name: "Gmail", url: "https://mail.google.com", icon: "📧" }
        ]
    },
    ecommerce: {
        title: "E-Com Empire",
        mission: "Build a digital storefront that sells while you sleep.",
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
        quests: [
            "Script 1 Video/Post",
            "Record/Film Content",
            "Edit and Polish",
            "Engage with Comments (15m)"
        ],
        tools: [
            { name: "YouTube Studio", url: "https://studio.youtube.com", icon: "🟥" },
            { name: "TikTok", url: "https://www.tiktok.com", icon: "🎵" },
            { name: "CapCut", url: "https://www.capcut.com", icon: "🎬" },
            { name: "Notion", url: "https://www.notion.so", icon: "📓" }
        ]
    },
    affiliate: {
        title: "Affiliate Alchemy",
        mission: "Connect people with solutions they need and earn the difference.",
        quests: [
            "Find 1 High-Ticket Program",
            "Write a Review Article/Post",
            "Share Link in Relevant Group",
            "Analyze Click Data"
        ],
        tools: [
            { name: "Amazon Associates", url: "https://affiliate-program.amazon.com", icon: "🛒" },
            { name: "ClickBank", url: "https://www.clickbank.com", icon: "💸" },
            { name: "Semrush", url: "https://www.semrush.com", icon: "🔍" }
        ]
    },
    coaching: {
        title: "Soul Coaching",
        mission: "Transform lives using your unique wisdom and experience.",
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
        quests: [
            "Check Market Charts (TA)",
            "Research 1 New Protocol",
            "Rebalance Portfolio",
            "Security Check (Wallets)"
        ],
        tools: [
            { name: "TradingView", url: "https://www.tradingview.com", icon: "📉" },
            { name: "Metamask", url: "#", icon: "🦊" },
            { name: "DefiLlama", url: "https://defillama.com", icon: "🦙" }
        ]
    },
    community: {
        title: "Tribe Builder",
        mission: "Gather your people and facilitate their growth.",
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
        quests: [
            "Map out 1 Workspace",
            "Build/Test Zapier/Make Scenario",
            "Pitch Automation to Client",
            "Refine Prompts"
        ],
        tools: [
            { name: "Zapier", url: "https://zapier.com", icon: "🟠" },
            { name: "Make", url: "https://www.make.com", icon: "🟣" },
            { name: "OpenAI Playground", url: "https://platform.openai.com", icon: "🧠" }
        ]
    },
    smartcontract: {
        title: "Code Auditor",
        mission: "Secure the decentralized world one line at a time.",
        quests: [
            "Run Static Analysis (Slither)",
            "Manual Logic Review",
            "Write Vulnerability Report",
            "Verify Fixes"
        ],
        tools: [
            { name: "Remix IDE", url: "https://remix.ethereum.org", icon: "💎" },
            { name: "Etherscan", url: "https://etherscan.io", icon: "🔍" },
            { name: "Code4rena", url: "https://code4rena.com", icon: "🏟️" }
        ]
    },
    cyber: {
        title: "Cyber Sentinel",
        mission: "Hack the planet (legally) and get paid for it.",
        quests: [
            "Recon Subdomains",
            "Fuzz Input Fields",
            "Report Critical Bug",
            "Retest Patch"
        ],
        tools: [
            { name: "HackerOne", url: "https://hackerone.com", icon: "🐞" },
            { name: "Burp Suite", url: "https://portswigger.net/burp", icon: "🟧" },
            { name: "OWASP", url: "https://owasp.org", icon: "🛡️" }
        ]
    },
    devops: {
        title: "Cloud Architect",
        mission: "Build the invisible backbone of the internet.",
        quests: [
            "Provision EC2/Kubernetes",
            "Fix CI/CD Pipeline",
            "Optimize Costs",
            "Automate Backups"
        ],
        tools: [
            { name: "AWS Console", url: "https://aws.amazon.com", icon: "☁️" },
            { name: "Docker", url: "https://www.docker.com", icon: "🐳" },
            { name: "Terraform", url: "https://www.terraform.io", icon: "🏗️" }
        ]
    },
    api: {
        title: "API Tycoon",
        mission: "Turn data into a product accessible by millions.",
        quests: [
            "Scrape Target Data",
            "Build Flask/Node Endpoint",
            "Deploy to RapidAPI",
            "Market to Devs"
        ],
        tools: [
            { name: "RapidAPI", url: "https://rapidapi.com", icon: "🐙" },
            { name: "Postman", url: "https://www.postman.com", icon: "🚀" },
            { name: "Python", url: "https://www.python.org", icon: "🐍" }
        ]
    },
    techwriter: {
        title: "Docs Doctor",
        mission: "Translate complex code into beautiful documentation.",
        quests: [
            "Interview Developers",
            "Draft API Reference",
            "Create 'Getting Started' Guide",
            "Publish to GitBook"
        ],
        tools: [
            { name: "GitBook", url: "https://www.gitbook.com", icon: "📚" },
            { name: "Notion", url: "https://notion.so", icon: "📓" },
            { name: "Grammarly", url: "https://grammarly.com", icon: "✍️" }
        ]
    },
    assets: {
        title: "Asset Artisan",
        mission: "Create digital assets once, sell them forever.",
        quests: [
            "Draft/Sketch New Asset",
            "Polish/Export Final Files",
            "Upload to Marketplace",
            "Update Tags/SEO"
        ],
        tools: [
            { name: "Gumroad", url: "https://gumroad.com", icon: "🧊" },
            { name: "Notion", url: "https://notion.so", icon: "📓" },
            { name: "Unsplash", url: "https://unsplash.com", icon: "📷" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Parse URL param
    const params = new URLSearchParams(window.location.search);
    const cardKey = params.get('card');

    if (!cardKey || !cardData[cardKey]) {
        // Fallback or error
        document.getElementById('card-title').innerText = "Unknown Realm";
        return;
    }

    const data = cardData[cardKey];

    // 2. Populate Header
    document.getElementById('card-title').innerText = data.title;
    document.title = `${data.title} - Play Mode`;

    // 3. Populate Mission
    document.getElementById('mission-desc').innerText = data.mission;

    const questList = document.getElementById('quest-list');
    data.quests.forEach(q => {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="checkbox"> <span>${q}</span></label>`;
        questList.appendChild(li);
    });

    // 4. Populate Tools
    const toolsGrid = document.getElementById('tools-grid');
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

    // 5. Timer Logic
    let time = 25 * 60;
    let timerId = null;
    const display = document.getElementById('timer');
    const startBtn = document.getElementById('start-timer');
    const resetBtn = document.getElementById('reset-timer');

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
                if (time === 0) clearInterval(timerId);
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

    // --- PERSISTENCE & GAMEPLAY LOGIC ---

    // Load Stats
    let playerStats = JSON.parse(localStorage.getItem('fsm_stats')) || { xp: 0, level: 1, earnings: 0, questsDone: 0 };

    function updateStatsUI() {
        document.getElementById('level-stat').innerText = playerStats.level;
        document.getElementById('earnings-stat').innerText = '$' + playerStats.earnings.toLocaleString();
        document.getElementById('quests-stat').innerText = playerStats.questsDone;

        // Simple Level Up Logic: 100 XP per level
        const xpForNext = playerStats.level * 100;
        const percent = Math.min(100, (playerStats.xp / xpForNext) * 100);
        document.getElementById('xp-bar').style.width = percent + '%';
    }
    updateStatsUI();

    function saveStats() {
        localStorage.setItem('fsm_stats', JSON.stringify(playerStats));
        updateStatsUI();
    }

    // Revenue Tracker
    document.getElementById('add-revenue-btn').addEventListener('click', () => {
        const amt = parseFloat(document.getElementById('revenue-input').value);
        if (!isNaN(amt) && amt > 0) {
            playerStats.earnings += amt;
            playerStats.xp += amt * 0.1; // XP for earning money
            saveStats();
            document.getElementById('revenue-input').value = '';
            alert(`🤑 Cha-ching! Added $${amt}`);
        }
    });

    // Checkbox Logic (XP)
    questList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                playerStats.questsDone++;
                playerStats.xp += 25; // 25 XP per quest
                if (playerStats.xp >= playerStats.level * 100) {
                    playerStats.level++;
                    playerStats.xp = 0;
                    alert("🎉 LEVEL UP! You are now Level " + playerStats.level);
                }
            } else {
                playerStats.questsDone--;
                playerStats.xp -= 25;
            }
            saveStats();
        }
    });

    // Scratchpad Auto-Save
    const pad = document.getElementById('scratchpad');
    pad.value = localStorage.getItem(`fsm_scratchpad_${cardKey}`) || '';
    pad.addEventListener('input', () => {
        localStorage.setItem(`fsm_scratchpad_${cardKey}`, pad.value);
    });


    // --- MOCK LIVE DATA ---
    const liveFeed = document.getElementById('live-feed');
    const mockData = {
        freelance: ["🔥 New Job: React Dev ($50/hr)", "🔥 New Job: Copywriter needed", "Trending: SEO Writing"],
        ecommerce: ["📈 Shopify Stock +1.2%", "Hot Product: Heated Vests", "Q4 Trend: Eco-packaging"],
        crypto: ["BTC: $98,000 (+2%)", "ETH: $4,200", "Gas: 15 gwei (Low)"],
        content: ["Trending: #AIArt", "Viral Audio: 'Dreamy Vibe'", "Strategy: Short-form"],
        smartcontract: ["High Severity Bug Found", "Audit Bounty: $50,000", "New Protocol Launching"],
        cyber: ["New Bounty Program: Tesla", "XSS Vuln Reported", "Critical Patch Tuesday"],
        devops: ["AWS East Region Outage", "Kubernetes Update v1.29", "Cloud Cost Optimization Tips"],
        api: ["RapidAPI Trend: Text-to-Speech", "OpenAI API Usage Spike", "Data Scraping Legal Update"],
        techwriter: ["New Stripe API Docs", "Hiring: Senior Tech Writer", "Markdown vs AsciiDoc"],
        // fallback
        default: ["Market steady", "Opportunity detected", "Check emails"]
    };

    const feedItems = mockData[cardKey] || mockData.default;
    liveFeed.innerHTML = feedItems.map(item => `<div class="live-item"><strong>Update</strong> ${item}</div>`).join('');


    // --- SIMPLE AI COPILOT MOCK ---
    const aiBtn = document.getElementById('ai-generate-btn');
    const aiOutput = document.getElementById('ai-output');

    aiBtn.addEventListener('click', () => {
        const topic = document.getElementById('ai-context').value;
        if (!topic) return;

        aiOutput.innerText = "🤖 Thinking...";

        setTimeout(() => {
            const templates = [
                `Here is a plan for ${topic}:\n1. Research top competitors.\n2. Create a Minimum Viable Version.\n3. Launch on social media.`,
                `Draft for ${topic}:\n"Hey [Name], I noticed you need help with ${topic}. I specialize in this..."`,
                `Idea: Combine ${topic} with AI to automate the boring parts.`
            ];
            const random = templates[Math.floor(Math.random() * templates.length)];
            aiOutput.innerText = random;
        }, 1000);
    });
});
