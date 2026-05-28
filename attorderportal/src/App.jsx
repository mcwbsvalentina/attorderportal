import { useState, useRef, useEffect } from "react";

const steps = [
  {
    id: "order-submitted",
    category: "Order Submitted",
    icon: "✦",
    title: "Order Submitted! 🎉",
    subtitle: "Welcome to the AT&T Target Exclusive Promotion",
    highlight: true,
    intro: `Hi! This is your Account Manager with AT&T. Congratulations on taking advantage of our exclusive Target Promotion! It's been a pleasure to meet and assist you!`,
    description: `Your order summary will be in your email sent by "SARA PLUS" — AT&T's promotional ordering system through Target.\n\nAny email from AT&T directly with an "Estimated Bill" will show original corporate pricing WITHOUT promotions and trade-ins. That is NOT your final bill — no worries!\n\nYour phones will be arriving in about 1–3 days! 📦`,
    alert: `⚠️ TAXES NOTE: You may see a second tax charge as each phone ships. This happens because the original payment was pending — a sales tax hold is placed on your card when you order, and your card may be charged again as each device ships. You will only pay the total sales tax once. The hold is removed after all devices deliver.`,
    billingBox: true,
    checklist: [
      `Check email from "SARA PLUS" for your real order summary with promotions`,
      "Ignore any AT&T direct email showing 'Estimated Bill' — that's corporate pricing without promos",
      "Track your order at att.com/checkmyorder (use order # from confirmation email + ZIP)",
      "Note expected delivery: 1–3 business days",
      "Save your Account Manager's contact info",
    ],
    tip: "Always contact your rep first with any questions. They know your specific order and promotion inside and out.",
    contact: "(833) 470-0693",
  },
  {
    id: "data-transfer",
    category: "Step 1 — Data Transfer",
    icon: "⇄",
    title: "Transfer Your Data",
    subtitle: "Move photos, contacts & more to your new phone",
    description: "Before activating, transfer everything from your old phone to your new one. Pick your scenario and follow the guide:",
    links: [
      { label: "iPhone → iPhone", url: "https://youtu.be/_CVzm_vNHpY", emoji: "🍎→🍎" },
      { label: "Android → Android", url: "https://youtu.be/-3qkxg2_NtU", emoji: "🤖→🤖" },
      { label: "iPhone → Android", url: "https://youtu.be/oNu5ZMYLhGQ", emoji: "🍎→🤖" },
      { label: "Android → iPhone", url: "https://youtu.be/TVH2R0-qoEI", emoji: "🤖→🍎" },
    ],
    checklist: [
      "Identified which transfer guide applies to me",
      "Watched the transfer tutorial",
      "Photos transferred successfully",
      "Contacts transferred successfully",
      "Apps & settings backed up",
    ],
    tip: "Complete data transfer BEFORE activating AT&T service — it's much easier while the old SIM is still active.",
  },
  {
    id: "activation",
    category: "Step 2 — Activation",
    icon: "◈",
    title: "Activate AT&T Service",
    subtitle: "Get your new line live and connected",
    description: `Now it's time to activate your new phone! You have two easy options:\n\n📞 Call or text your rep for guided activation\n\n🌐 Self-activate at att.com/getstarted — enter the phone number you want to activate + your ZIP code`,
    activationNote: `Once your new phone is active, your phone number will transfer to the new device. This process may take up to 1 hour. Your old phone will continue working until the transfer is finished.`,
    checklist: [
      "New phone is powered on and SIM inserted (or eSIM set up)",
      "Activated via att.com/getstarted OR called/texted your rep",
      "AT&T signal showing on new phone",
      "Can make and receive calls & texts",
      "Phone number transfer completed (up to 1 hour)",
    ],
    tip: "For help with activation or any issues, call the VIP Guest Service Line: (833) 470-0693",
    contact: "(833) 470-0693",
  },
  {
    id: "tradein",
    category: "Step 3 — Trade-In",
    icon: "⟳",
    title: "Trade In Your Old Phones",
    subtitle: "Unlock your promotion — shipping materials coming to you!",
    description: `The trade-in process has been started automatically on your behalf! Keep an eye on your mailbox — shipping materials are on their way. 📬\n\n⚠️ You MUST use the provided shipping materials. DO NOT use the box your new device arrived in.\n\nYou will receive a separate box for each device being traded in. Ship one trade-in device per box.`,
    tradeInChecklist: [
      "Does the device power on and off?",
      "Is the screen functioning correctly — free of chips, dead pixels, or burn-in?",
      "Is the device free of breaks or cracks in the housing, keypad, hinge, or battery door?",
    ],
    tradeInPrepSteps: [
      `Turn off "Activation Lock" (Find My iPhone / Reactivation Lock)`,
      "Factory reset the device",
      "Remove SIM card (for older devices ONLY)",
    ],
    checklist: [
      "Shipping materials received in the mail",
      "Device passes condition check (powers on, screen intact, no cracks)",
      "Activation Lock turned off (Find My iPhone disabled)",
      "Device factory reset",
      "SIM card removed (older devices only)",
      "Took a photo of shipping label AND tracking number",
      "Trade-in shipped within 30 days of activation",
    ],
    alert: `🚨 IMPORTANT: You MUST trade in devices within 30 days of activation to receive promotional credits. Once your trade-in is shipped, the device CANNOT be returned and any remaining data CANNOT be recovered.`,
    tip: "Take a picture of the shipping label AND the tracking number before dropping it off — keep these for your records!",
    contact: "(833) 470-0693",
  },
  {
    id: "myatt",
    category: "Step 4 — MyAT&T App",
    icon: "◉",
    title: "Set Up MyAT&T Account",
    subtitle: "Manage your service, view bills & unlock savings",
    description: "Create your AT&T account through the MyAT&T app to manage everything in one place — and unlock your $10/mo AutoPay discount!",
    substeps: [
      "Download the MyAT&T app from the App Store or Google Play Store",
      "Open the app and accept Terms & Conditions",
      "Tap \"Get Started\"",
      "Create a new account — tap \"Create one now\"",
      "Enter your phone number and ZIP code",
      "Enter your passcode (year of birth OR the 4-digit passcode created at point of sale)",
      "Continue through setup to complete your account",
      "Alternate: Download app → Create new account → \"Sign in with a provider\" → Select AT&T",
    ],
    autopayNote: `💰 AutoPay & Paperless Billing saves up to $10/month per line ($120/year per line!) when enrolled with ACH bank account. ($5/mo discount if using a debit card.) You must opt in and validate enrollment using the link sent via email within 7 days to be eligible. Discount appears on bill within 1–2 billing cycles.`,
    checklist: [
      "MyAT&T app downloaded",
      "Account created and logged in",
      "Can view your plan and bill",
      "Paperless billing enrolled",
      "AutoPay set up with ACH for maximum $10/mo savings",
      "Validation email link clicked to confirm enrollment",
    ],
    tip: "AutoPay + Paperless Billing with ACH = $120/year savings per line. Don't skip this step!",
  },
  {
    id: "benefits",
    category: "Step 5 — Your Guest Benefits",
    icon: "◆",
    title: "Claim Your Guest Benefits",
    subtitle: "Extra savings you may qualify for — act fast!",
    description: `As a Target AT&T guest, you have access to exclusive benefits. Review each one below and claim what applies to you!`,
    benefits: [
      {
        title: "Carrier Switcher Offer — Up to $800 per line",
        color: "#00d4a0",
        body: `Get up to $800 per line on an AT&T Visa Reward Card when porting in to a postpaid wireless account and activating a new smartphone line.\n\n• Go to att.com/switcherpayoff and submit an itemized bill from your previous carrier showing a smartphone installment balance or ETF.\n\n⚠️ You MUST remain with AT&T for 36 months after receiving the reimbursement or it will be charged back.`,
        link: { label: "Go to att.com/switcherpayoff", url: "https://att.com/switcherpayoff" },
      },
      {
        title: "Target Private Offers — Up to $150 per line",
        color: "#ffb400",
        body: `• Switch (port) to AT&T: $150/line via $4.17 bill credit/month for 36 months\n• Add-A-Line: $100/line via $2.78 bill credit/month for 36 months\n• Upgrade: $50/line via $5.00 bill credit/month for 10 months\n\nLimited time offer. Qualifying unlimited plan and installment plan required.`,
      },
      {
        title: "AT&T Appreciation Offers — 25% off qualifying unlimited plan",
        color: "#00a8e0",
        body: `For first responders, military, nurses, teachers, and other qualifying occupations.\n\n• Go to att.com/appreciation within 30 days of activation\n• Click 'Learn More' under your occupation\n• Click 'Check Eligibility' and enter your information\n\nNote: The account holder must qualify for the offer.`,
        link: { label: "Go to att.com/appreciation", url: "https://att.com/appreciation" },
      },
    ],
    checklist: [
      "Checked eligibility for Carrier Switcher Offer ($800/line)",
      "Submitted previous carrier bill at att.com/switcherpayoff (within 60 days)",
      "Target Private Offer credits confirmed on account",
      "Checked AT&T Appreciation Offer eligibility (att.com/appreciation within 30 days)",
      "AutoPay & Paperless discount confirmed active",
    ],
    tip: "The Appreciation Offer and Switcher Payoff both have deadlines — check them as soon as possible after activation!",
    contact: "(833) 470-0693",
  },
  {
    id: "billing",
    category: "Step 6 — Understand Your Bills",
    icon: "★",
    title: "Your First Few Bills",
    subtitle: "Know what to expect — no surprises",
    description: `Your first bill may look higher than expected. This is completely normal! Here's exactly what's happening:`,
    billTimeline: [
      {
        label: "First Bill",
        color: "#ffb400",
        items: ["Partial month service", "First month billed in advance", "Equipment and/or one-time fees"],
      },
      {
        label: "Second Bill",
        color: "#00a8e0",
        items: ["Still may be higher", "Should start coming down", "Discounts may take up to 3 billing cycles to fully apply"],
      },
      {
        label: "By Third Bill",
        color: "#00d4a0",
        items: [
          "Full plan and device charges",
          "AutoPay & Paperless Billing discounts applied",
          "Trade-in discount(s) applied",
          "All other promotions and discounts applied",
          "Note: Discounts applied retroactively from the first bill",
        ],
      },
    ],
    nextUpNote: `📱 Next Up Anytime is $10/mo per line. It allows you to upgrade after one payment and get AT&T's best offers once 33% is paid off. Great for customers who like to upgrade early.`,
    checklist: [
      "Understand first bill will be higher — this is normal",
      "Confirmed AutoPay & Paperless Billing is enrolled",
      "Trade-in shipped so discount starts applying",
      "By 3rd bill, all promos and discounts should be reflected",
      "Contact rep (not corporate) if bill looks wrong after 3rd cycle",
    ],
    tip: "Always reach out to your Account Manager first if something looks off on your bill — they can explain and resolve most issues without needing to escalate to corporate.",
    contact: "(833) 470-0693",
  },
];

const SYSTEM_PROMPT = `You are a friendly, knowledgeable AT&T Order Support Assistant for customers who signed up through the exclusive AT&T Target Promotion. Your goal is to resolve customer questions fully so they don't need to call AT&T corporate or escalate unnecessarily. Be warm, confident, and thorough.

=== KEY CONTACTS ===
- VIP Guest Service Line: (833) 470-0693
- Customer's Account Manager is always the first point of contact
- For activation help: att.com/getstarted
- For order tracking: att.com/checkmyorder
- For switcher payoff: att.com/switcherpayoff
- For appreciation offers: att.com/appreciation (within 30 days of activation)

=== ORDERING SYSTEM ===
- Orders come through "SARA PLUS" — AT&T's promotional ordering system for Target
- Any AT&T direct email showing an "Estimated Bill" uses CORPORATE pricing WITHOUT promotions or trade-in credits — customers should IGNORE that email for pricing purposes
- Their REAL order summary is in the SARA PLUS email with actual promo pricing
- Phones arrive in 1–3 business days
- Track order at att.com/checkmyorder using order # from confirmation email + ZIP code

=== TAX / DOUBLE CHARGE QUESTION (very common — reassure immediately) ===
When customers ask about seeing two charges or extra tax charges:
- This is 100% normal and expected
- When they ordered, a sales tax HOLD was placed on their card
- As each device ships, the card may be charged sales tax for that device
- This causes temporary duplicate-looking charges
- The hold is REMOVED after all devices ship — they only pay the total sales tax once, no more
- Tell them: "This is completely normal — you'll only be charged once for the total taxes owed. The extra charge will be removed automatically once all your phones have shipped."

=== BILLING — WHAT TO EXPECT ===
First bill will be HIGHER than expected — this is normal:
- First Bill includes: partial month service, first month billed in advance, equipment/one-time fees
- Second Bill: may still be higher, discounts take up to 3 billing cycles
- By Third Bill: full plan charges, AutoPay & Paperless discounts applied, trade-in discounts applied, all promotions applied. Discounts are applied retroactively from the first bill.
- IMPORTANT: The "Estimated Bill" email from AT&T is corporate pricing without promos — NOT their real bill

=== TRADE-IN PROCESS ===
- Trade-in process is started automatically — shipping materials are mailed to the customer
- Must use PROVIDED shipping materials — NOT the new phone's box
- One trade-in device per box (separate box for each device)
- MUST trade in within 30 days of activation to get promotional credits
- Before shipping: turn off Activation Lock (Find My iPhone), factory reset, remove SIM (older devices only)
- Once shipped: device CANNOT be returned, data CANNOT be recovered
- Take a photo of the shipping label AND tracking number before dropping off
- Device must pass condition check: powers on, screen intact (no chips/dead pixels/burn-in), no cracks

=== ACTIVATION ===
- Activate at att.com/getstarted OR call/text their Account Manager
- Phone number transfer takes up to 1 hour after activation
- Old phone continues working until transfer finishes
- For help: VIP Guest Service Line (833) 470-0693

=== MYAT&T ACCOUNT SETUP ===
- Download MyAT&T app (App Store or Google Play)
- Create account: Get Started → Create One Now → enter phone number + ZIP + passcode (birth year or 4-digit POS passcode)
- Alternate: Sign in with a provider → AT&T
- AutoPay + Paperless Billing with ACH = $10/mo per line discount ($120/year per line!)
- With debit card: $5/mo discount
- Must validate via email link within 7 days to be eligible
- Discount appears within 1–2 billing cycles

=== GUEST BENEFITS ===
1. CARRIER SWITCHER OFFER — Up to $800/line
   - Go to att.com/switcherpayoff
   - Submit itemized previous carrier bill showing installment balance or ETF
   - Bill must be dated within 1 calendar month of AT&T activation
   - Submit within 60 days of activation
   - AT&T sends Visa Reward Card in 8–10 weeks, allow 7–10 days before checking status
   - MUST remain with AT&T for 36 months or reimbursement is charged back

2. TARGET PRIVATE OFFERS
   - Switch/port to AT&T: $150/line ($4.17/mo bill credit × 36 months)
   - Add-A-Line: $100/line ($2.78/mo bill credit × 36 months)
   - Upgrade: $50/line ($5.00/mo bill credit × 10 months)
   - Requires qualifying unlimited plan + installment plan

3. AT&T APPRECIATION OFFERS — 25% off unlimited plan
   - For first responders, military, nurses, teachers, other qualifying occupations
   - Must go to att.com/appreciation within 30 days of activation
   - Account HOLDER must qualify (not just any line on the account)

4. AUTOPAY & PAPERLESS BILLING — $120/year per line
   - $10/mo with ACH bank account, $5/mo with debit card
   - Must validate via email link within 7 days
   - Appears within 1–2 billing cycles

=== NEXT UP ANYTIME ===
- $10/mo per line
- Allows upgrade after one payment
- Get AT&T's best offers once 33% is paid off

=== HANDLING FRUSTRATED CUSTOMERS ===
- Acknowledge briefly, then pivot to solution
- For bill shock: explain the 3-bill timeline, reassure discounts are retroactive
- For missing credits: confirm trade-in was shipped within 30 days, credits appear by bill 3
- For tax confusion: explain the hold system (see above)
- For activation issues: direct to att.com/getstarted or (833) 470-0693
- Always suggest Account Manager before corporate escalation

Tone: Warm, upbeat, reassuring, conversational — like a knowledgeable friend. Short paragraphs. Bullet points for steps. Under 200 words unless complexity requires more. Never invent specific account details or credit amounts. For account-specific issues, direct to (833) 470-0693 or their Account Manager.`;

function ChatMessage({ msg }) {
  return (
    <div style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", marginBottom: "12px" }}>
      {msg.role === "assistant" && (
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg, #00a8e0, #005eb8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 8.5, color: "#fff", fontWeight: 800,
          marginRight: 8, flexShrink: 0, marginTop: 2,
          boxShadow: "0 2px 8px rgba(0,168,224,0.4)", letterSpacing: "-0.3px",
        }}>AT&T</div>
      )}
      <div style={{
        maxWidth: "80%",
        background: msg.role === "user" ? "linear-gradient(135deg, #00a8e0, #0076c0)" : "rgba(255,255,255,0.07)",
        color: msg.role === "user" ? "#fff" : "#e8f4fd",
        padding: "10px 14px",
        borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
        fontSize: 13.5, lineHeight: 1.6,
        border: msg.role === "assistant" ? "1px solid rgba(0,168,224,0.2)" : "none",
        whiteSpace: "pre-wrap",
      }}>{msg.content}</div>
    </div>
  );
}

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(() => steps.map(s => new Array(s.checklist.length).fill(false)));
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! 👋 I'm your AT&T Order Assistant.\n\nI can help with your Target promotion, the SARA PLUS email, tax questions, activation, trade-ins, billing, and all your guest benefits.\n\nWhat do you need help with?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  const completedCount = (i) => checked[i].filter(Boolean).length;
  const totalProgress = () => {
    const total = steps.reduce((a, s) => a + s.checklist.length, 0);
    const done = checked.reduce((a, arr) => a + arr.filter(Boolean).length, 0);
    return Math.round((done / total) * 100);
  };
  const toggleCheck = (si, ii) => {
    setChecked(prev => { const n = prev.map(a => [...a]); n[si][ii] = !n[si][ii]; return n; });
  };
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.map(b => b.text || "").join("") || "Sorry, couldn't get a response. Please try again.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection issue — please try again in a moment." }]);
    }
    setLoading(false);
  };

  const prog = totalProgress();
  const step = steps[activeStep];

  const sidebarIcons = ["✦","⇄","◈","⟳","◉","◆","★"];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #050e1d 0%, #0a1628 50%, #060f1e 100%)", fontFamily: "'DM Sans','Segoe UI',sans-serif", color: "#e0edf8" }}>
      <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse, rgba(0,168,224,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(0,168,224,0.12)", padding: "15px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(5,14,29,0.92)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #00a8e0, #005eb8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", boxShadow: "0 4px 14px rgba(0,168,224,0.45)" }}>AT&T</div>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: "#fff", letterSpacing: "-0.4px" }}>Target Exclusive Order Portal</div>
            <div style={{ fontSize: 11, color: "#5a8aaa", marginTop: 1 }}>Your complete setup guide</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: "#4a7a9a", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 700, textAlign: "right" }}>Setup Progress</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 120, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <div style={{ width: `${prog}%`, height: "100%", borderRadius: 3, background: "linear-gradient(90deg, #00a8e0, #00d4ff)", transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#00a8e0" }}>{prog}%</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: 1120, margin: "0 auto", padding: "24px 18px", gap: 22, position: "relative", zIndex: 1 }}>

        {/* Sidebar */}
        <div style={{ width: 210, flexShrink: 0 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#3d6a8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10, paddingLeft: 4 }}>Your Journey</div>
          {steps.map((s, i) => {
            const done = completedCount(i), total = s.checklist.length, isActive = i === activeStep, isComplete = done === total;
            return (
              <div key={s.id} onClick={() => setActiveStep(i)} style={{ padding: "10px 12px", borderRadius: 9, marginBottom: 4, cursor: "pointer", background: isActive ? "linear-gradient(135deg,rgba(0,168,224,0.16),rgba(0,86,184,0.1))" : "rgba(255,255,255,0.02)", border: isActive ? "1px solid rgba(0,168,224,0.3)" : "1px solid rgba(255,255,255,0.04)", transition: "all 0.15s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 13, color: isComplete ? "#00d4a0" : isActive ? "#00a8e0" : "#2d5570", width: 15, textAlign: "center" }}>{isComplete ? "✓" : sidebarIcons[i]}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: isActive ? "#dff0fb" : "#4a7a9a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.title}</div>
                    <div style={{ fontSize: 9.5, color: "#2d5570", marginTop: 1 }}>{done}/{total} done</div>
                  </div>
                </div>
                {isActive && <div style={{ marginTop: 7, height: 2, borderRadius: 1, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}><div style={{ width: `${(done / total) * 100}%`, height: "100%", background: "linear-gradient(90deg, #00a8e0, #00d4ff)", transition: "width 0.3s ease" }} /></div>}
              </div>
            );
          })}
          <div style={{ marginTop: 14, padding: "13px", borderRadius: 10, background: "rgba(0,168,224,0.06)", border: "1px solid rgba(0,168,224,0.18)" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#4a7fa0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>VIP Support Line</div>
            <div style={{ fontSize: 12, color: "#8ecde8", lineHeight: 1.5, marginBottom: 7 }}>Contact your Account Manager first!</div>
            <a href="tel:8334700693" style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg,#00a8e0,#0057a8)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "7px 0", borderRadius: 7, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,168,224,0.3)" }}>📞 (833) 470-0693</a>
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: step.highlight ? "rgba(0,212,160,0.12)" : "rgba(0,168,224,0.1)", border: `1px solid ${step.highlight ? "rgba(0,212,160,0.3)" : "rgba(0,168,224,0.22)"}`, borderRadius: 20, padding: "3px 11px", fontSize: 10, fontWeight: 700, color: step.highlight ? "#00d4a0" : "#00a8e0", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
            <span style={{ fontSize: 12 }}>{sidebarIcons[activeStep]}</span> {step.category}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: "-0.6px", margin: "0 0 4px 0", lineHeight: 1.15 }}>{step.title}</h1>
          <p style={{ fontSize: 14.5, color: "#4a8aaa", margin: "0 0 18px 0", fontWeight: 600 }}>{step.subtitle}</p>

          {/* Intro */}
          {step.intro && <div style={{ background: "linear-gradient(135deg,rgba(0,168,224,0.1),rgba(0,86,184,0.08))", border: "1px solid rgba(0,168,224,0.25)", borderRadius: 12, padding: "15px 17px", marginBottom: 14, fontSize: 13.5, color: "#c0dff0", lineHeight: 1.65 }}><span style={{ fontSize: 15, marginRight: 5 }}>👋</span><em>{step.intro}</em></div>}

          {/* Description */}
          {step.description && <div style={{ fontSize: 13.5, color: "#7aafc8", lineHeight: 1.7, marginBottom: 16, whiteSpace: "pre-wrap" }}>{step.description}</div>}

          {/* Alert */}
          {step.alert && <div style={{ background: "rgba(255,140,0,0.07)", border: "1px solid rgba(255,140,0,0.3)", borderLeft: "3px solid #ff8c00", borderRadius: "0 10px 10px 0", padding: "12px 16px", marginBottom: 18, fontSize: 13, color: "#ffd080", lineHeight: 1.65 }}>{step.alert}</div>}

          {/* Billing box (step 0) */}
          {step.billingBox && (
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,168,224,0.12)", borderRadius: 11, padding: "14px 16px", marginBottom: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#4a7fa0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>📋 Track Your Order</div>
              <div style={{ fontSize: 13, color: "#8ecde8", lineHeight: 1.65 }}>
                Go to <a href="https://att.com/checkmyorder" target="_blank" rel="noopener noreferrer" style={{ color: "#00a8e0", fontWeight: 700 }}>att.com/checkmyorder</a> and log in with your order number (starts with 99-) from your confirmation email + your ZIP code.
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                {["🔄 Processing — Getting ready to ship", "🚚 Shipped — Tracking # will appear", "📦 Delivered — Follow steps to activate"].map((s, i) => (
                  <div key={i} style={{ flex: 1, background: "rgba(0,168,224,0.07)", borderRadius: 8, padding: "8px 10px", fontSize: 11.5, color: "#7abedc", lineHeight: 1.4 }}>{s}</div>
                ))}
              </div>
            </div>
          )}

          {/* Transfer links */}
          {step.links && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 20 }}>
              {step.links.map(l => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,168,224,0.18)", textDecoration: "none", color: "#a8d8f0", fontSize: 13, fontWeight: 600, transition: "all 0.15s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,168,224,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}>
                  <span style={{ fontSize: 17 }}>{l.emoji}</span>
                  <span>{l.label}</span>
                  <span style={{ marginLeft: "auto", color: "#00a8e0", fontSize: 11 }}>▶ Watch</span>
                </a>
              ))}
            </div>
          )}

          {/* Trade-in check */}
          {step.tradeInChecklist && (
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(0,168,224,0.1)", borderRadius: 11, padding: "14px 16px", marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#4a7fa0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>✅ Check Your Device Condition</div>
              {step.tradeInChecklist.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: "#9dcce8", alignItems: "flex-start" }}>
                  <span style={{ color: "#00a8e0", marginTop: 1 }}>◦</span>{item}
                </div>
              ))}
            </div>
          )}
          {step.tradeInPrepSteps && (
            <div style={{ background: "rgba(255,140,0,0.05)", border: "1px solid rgba(255,140,0,0.2)", borderRadius: 11, padding: "14px 16px", marginBottom: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#c87000", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>⚠️ Before You Ship — Do These First</div>
              {step.tradeInPrepSteps.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, color: "#ffc87a", alignItems: "flex-start" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,140,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#ffb400", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>{item}
                </div>
              ))}
            </div>
          )}

          {/* Sub-steps */}
          {step.substeps && (
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,168,224,0.1)", borderRadius: 11, padding: "14px 16px", marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#3d6a8a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>How To Do It</div>
              {step.substeps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < step.substeps.length - 1 ? 11 : 0, alignItems: "flex-start" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, background: "rgba(0,168,224,0.15)", border: "1px solid rgba(0,168,224,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#00a8e0", marginTop: 1 }}>{i + 1}</div>
                  <div style={{ fontSize: 13, color: "#b0d5ec", lineHeight: 1.55 }}>{s}</div>
                </div>
              ))}
            </div>
          )}

          {/* AutoPay note */}
          {step.autopayNote && (
            <div style={{ background: "rgba(0,212,160,0.07)", border: "1px solid rgba(0,212,160,0.25)", borderLeft: "3px solid #00d4a0", borderRadius: "0 10px 10px 0", padding: "12px 15px", marginBottom: 18, fontSize: 13, color: "#80efd0", lineHeight: 1.65 }}>
              {step.autopayNote}
            </div>
          )}

          {/* Activation note */}
          {step.activationNote && (
            <div style={{ background: "rgba(0,168,224,0.07)", border: "1px solid rgba(0,168,224,0.2)", borderRadius: 10, padding: "12px 15px", marginBottom: 18, fontSize: 13, color: "#8ecde8", lineHeight: 1.65 }}>
              ℹ️ {step.activationNote}
            </div>
          )}

          {/* Benefits */}
          {step.benefits && (
            <div style={{ marginBottom: 18 }}>
              {step.benefits.map((b, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${b.color}30`, borderLeft: `3px solid ${b.color}`, borderRadius: "0 11px 11px 0", padding: "14px 16px", marginBottom: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: b.color, marginBottom: 8 }}>{b.title}</div>
                  <div style={{ fontSize: 13, color: "#9ecce8", lineHeight: 1.65, whiteSpace: "pre-wrap", marginBottom: b.link ? 10 : 0 }}>{b.body}</div>
                  {b.link && <a href={b.link.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${b.color}22`, border: `1px solid ${b.color}50`, color: b.color, padding: "6px 12px", borderRadius: 7, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>🔗 {b.link.label}</a>}
                </div>
              ))}
            </div>
          )}

          {/* Bill timeline */}
          {step.billTimeline && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
              {step.billTimeline.map((b, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${b.color}35`, borderRadius: 11, padding: "13px 14px" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: b.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>{b.label}</div>
                  {b.items.map((item, j) => (
                    <div key={j} style={{ fontSize: 12, color: "#8cb8d4", lineHeight: 1.55, marginBottom: 5, display: "flex", gap: 6, alignItems: "flex-start" }}>
                      <span style={{ color: b.color, flexShrink: 0, marginTop: 2 }}>•</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {step.nextUpNote && (
            <div style={{ background: "rgba(0,168,224,0.06)", border: "1px solid rgba(0,168,224,0.2)", borderRadius: 10, padding: "12px 15px", marginBottom: 18, fontSize: 13, color: "#8ecde8", lineHeight: 1.65 }}>
              {step.nextUpNote}
            </div>
          )}

          {/* Checklist */}
          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(0,168,224,0.1)", borderRadius: 12, padding: "16px 18px", marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#3d6a8a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Checklist — {completedCount(activeStep)}/{step.checklist.length} completed
            </div>
            {step.checklist.map((item, idx) => {
              const isChecked = checked[activeStep][idx];
              return (
                <div key={idx} onClick={() => toggleCheck(activeStep, idx)} style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "9px 0", borderBottom: idx < step.checklist.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", cursor: "pointer", opacity: isChecked ? 0.5 : 1, transition: "opacity 0.2s" }}>
                  <div style={{ width: 19, height: 19, borderRadius: 5, flexShrink: 0, marginTop: 1, background: isChecked ? "linear-gradient(135deg,#00a8e0,#0057a8)" : "rgba(255,255,255,0.05)", border: isChecked ? "none" : "1.5px solid rgba(0,168,224,0.28)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease", boxShadow: isChecked ? "0 2px 8px rgba(0,168,224,0.4)" : "none" }}>
                    {isChecked && <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 13, color: isChecked ? "#3d6a8a" : "#b0d8ee", lineHeight: 1.55, textDecoration: isChecked ? "line-through" : "none" }}>{item}</span>
                </div>
              );
            })}
          </div>

          {/* Tip */}
          <div style={{ background: "rgba(0,168,224,0.05)", border: "1px solid rgba(0,168,224,0.18)", borderLeft: "3px solid #00a8e0", borderRadius: "0 10px 10px 0", padding: "11px 15px", marginBottom: 24, fontSize: 13, color: "#7ecde8", lineHeight: 1.65 }}>
            <span style={{ fontWeight: 800, color: "#00a8e0" }}>💡 Pro Tip: </span>{step.tip}
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {activeStep > 0 && <button onClick={() => setActiveStep(a => a - 1)} style={{ padding: "10px 16px", borderRadius: 8, border: "1px solid rgba(0,168,224,0.22)", background: "transparent", color: "#4a8aaa", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>← Back</button>}
            {activeStep < steps.length - 1 && (
              <button onClick={() => setActiveStep(a => a + 1)} style={{ padding: "11px 22px", borderRadius: 9, border: "none", background: "linear-gradient(135deg,#00a8e0,#005eb8)", color: "#fff", fontSize: 13.5, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,168,224,0.38)", letterSpacing: "-0.2px" }}>
                {activeStep === 0 ? "Phones arrived — let's go! →" : "Next Step →"}
              </button>
            )}
            {activeStep === steps.length - 1 && <div style={{ padding: "11px 18px", borderRadius: 9, background: "linear-gradient(135deg,rgba(0,212,160,0.15),rgba(0,168,224,0.1))", border: "1px solid rgba(0,212,160,0.3)", color: "#00d4a0", fontSize: 13.5, fontWeight: 800 }}>🎉 All steps complete — welcome to AT&T!</div>}
          </div>
        </div>
      </div>

      {/* Chat bubble */}
      <button onClick={() => setChatOpen(o => !o)} style={{ position: "fixed", bottom: 22, right: 22, width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#00a8e0,#005eb8)", border: "none", cursor: "pointer", boxShadow: "0 6px 24px rgba(0,168,224,0.55)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 21, zIndex: 100, transition: "transform 0.2s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        {chatOpen ? "✕" : "💬"}
      </button>

      {/* Chat panel */}
      {chatOpen && (
        <div style={{ position: "fixed", bottom: 86, right: 22, width: 358, height: 515, background: "linear-gradient(160deg,#0a1628,#07101f)", border: "1px solid rgba(0,168,224,0.22)", borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 24px 60px rgba(0,0,0,0.7)", zIndex: 99, animation: "slideUp 0.22s cubic-bezier(0.4,0,0.2,1)" }}>
          <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}} @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}} *{box-sizing:border-box} ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:rgba(0,168,224,0.25);border-radius:2px}`}</style>
          <div style={{ padding: "12px 14px", borderBottom: "1px solid rgba(0,168,224,0.12)", display: "flex", alignItems: "center", gap: 10, background: "rgba(0,168,224,0.05)" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#00a8e0,#005eb8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8.5, fontWeight: 800, color: "#fff", letterSpacing: "-0.3px", boxShadow: "0 2px 8px rgba(0,168,224,0.4)" }}>AT&T</div>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: "#e8f4fd" }}>Order Assistant</div>
              <div style={{ fontSize: 10.5, color: "#00a8e0", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00d4a0", display: "inline-block" }} /> Always here to help
              </div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 12px" }}>
            {messages.map((m, i) => <ChatMessage key={i} msg={m} />)}
            {loading && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#00a8e0,#005eb8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#fff", fontWeight: 800 }}>AT&T</div>
                <div style={{ display: "flex", gap: 4 }}>{[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#00a8e0", display: "inline-block", animation: `bounce 1s ease ${i*0.15}s infinite` }} />)}</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: "10px 12px", borderTop: "1px solid rgba(0,168,224,0.1)", display: "flex", gap: 7 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()} placeholder="Ask anything about your order..." style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,168,224,0.18)", borderRadius: 10, padding: "9px 12px", color: "#e0edf8", fontSize: 13.5, outline: "none" }} />
            <button onClick={sendMessage} disabled={loading || !input.trim()} style={{ width: 36, height: 36, borderRadius: 9, border: "none", background: loading || !input.trim() ? "rgba(0,168,224,0.15)" : "linear-gradient(135deg,#00a8e0,#005eb8)", color: "#fff", fontSize: 16, cursor: loading || !input.trim() ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>↑</button>
          </div>
        </div>
      )}
    </div>
  );
}
