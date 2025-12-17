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
});
