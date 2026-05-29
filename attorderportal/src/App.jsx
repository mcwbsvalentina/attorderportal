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
    expandableSections: [
      {
        id: "byod",
        icon: "📱",
        title: "BYOD — Brought Your Own Device?",
        subtitle: "Setting up service on a phone you already own",
        color: "#00a8e0",
        content: {
          link: { label: "AT&T BYOD Info & Compatibility Check", url: "https://www.att.com/wireless/byod/" },
          steps: [
            {
              heading: "Insert Your SIM or Set Up eSIM",
              items: [
                "Physical SIM: Insert the AT&T SIM card provided into your device",
                "eSIM: Go to Settings → Cellular → Add eSIM, then scan the QR code provided by your rep",
              ],
            },
            {
              heading: "After SIM Setup",
              items: [
                "Restart your phone",
                "Wait a few minutes for activation to complete",
                "You should see AT&T signal appear",
              ],
            },
            {
              heading: "Still Showing SOS or No Service?",
              isAlert: true,
              items: [
                "Make sure your phone is unlocked (not locked to your previous carrier)",
                "Go to Settings → Cellular and make sure cellular is toggled ON",
                "Try Settings → General → Transfer or Reset iPhone → Reset → Reset Network Settings",
                "Still not working? Call support at (833) 470-0693",
              ],
            },
          ],
        },
      },
      {
        id: "allstate",
        icon: "🛡️",
        title: "Allstate Protection Plan",
        subtitle: "Activate your phone protection coverage",
        color: "#00d4a0",
        content: {
          link: { label: "Activate at allstate.com/claims/phone-protection", url: "https://www.allstate.com/claims/phone-protection" },
          steps: [
            {
              heading: "How to Activate Your Plan",
              items: [
                "Visit allstate.com/claims/phone-protection",
                "Click 'Activate' or 'Get Started' and enter your phone number",
                "Have your device IMEI ready (Settings → General → About → IMEI)",
                "Complete enrollment — you'll receive a confirmation email",
              ],
            },
            {
              heading: "What's Covered",
              items: [
                "Accidental damage (cracked screens, liquid damage)",
                "Loss and theft coverage",
                "Mechanical/electrical breakdown",
                "File claims online or by phone 24/7",
              ],
            },
            {
              heading: "Important",
              isAlert: true,
              items: [
                "Activate your plan as soon as possible after getting your device",
                "Keep your confirmation email — you'll need it if you file a claim",
              ],
            },
          ],
        },
      },
    ],
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
      "Place each old device in the appropriate box and ensure it's labeled with the correct phone number.",
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
        body: `Get up to $800 reimbursed for any remaining smartphone installment balance or ETF charged by your previous carrier.\n\nRequirements:\n• Port-in from a qualifying competing postpaid carrier (AT&T Owned & VOIP numbers excluded)\n• Must have remaining installment balance or ETF (3rd party financing via Apple, Samsung, or Retailer not eligible)\n• Previous account must be active at least 120 days with at least 4 installment payments made\n• Keep AT&T service on ported number for 36 months (pro-rated charge-back if cancelled early)\n• Port-in must be completed at time of order — upgrades, new numbers & temp numbers not eligible\n\nRedemption Steps:\n1. Visit att.com/switcherpayoff within 60 days of activation\n2. Enter ported number, AT&T account number and account info\n3. Upload previous carrier bill showing all pages with installment payoff/ETF amounts (bill must be dated within 1 calendar month of activation)\n4. AT&T verifies and sends reward card within 8–10 weeks — check status at rewardcenter.att.com`,
        link: { label: "Go to att.com/switcherpayoff", url: "https://www.att.com/switcherpayoff/" },
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

function ExpandableSection({ section }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: 12, borderRadius: 11, border: `1px solid ${section.color}30`, overflow: "hidden" }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 16px", cursor: "pointer", background: open ? `${section.color}12` : "rgba(255,255,255,0.025)", transition: "background 0.2s" }}
      >
        <span style={{ fontSize: 18 }}>{section.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: section.color }}>{section.title}</div>
          <div style={{ fontSize: 11, color: "#4a7a9a", marginTop: 1 }}>{section.subtitle}</div>
        </div>
        <span style={{ color: section.color, fontSize: 13, fontWeight: 700, transition: "transform 0.2s", display: "inline-block", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
      </div>
      {open && (
        <div style={{ padding: "14px 16px", borderTop: `1px solid ${section.color}20`, background: "rgba(0,0,0,0.15)" }}>
          {section.content.link && (
            <a href={section.content.link.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${section.color}22`, border: `1px solid ${section.color}50`, color: section.color, padding: "7px 13px", borderRadius: 7, textDecoration: "none", fontSize: 12, fontWeight: 700, marginBottom: 14 }}>
              🔗 {section.content.link.label}
            </a>
          )}
          {section.content.steps.map((s, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: s.isAlert ? "#ff8c00" : section.color, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 8 }}>
                {s.isAlert ? "⚠️ " : ""}{s.heading}
              </div>
              {s.items.map((item, j) => (
                <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, color: s.isAlert ? "#ffd080" : "#9dcce8", alignItems: "flex-start", lineHeight: 1.55 }}>
                  <span style={{ color: s.isAlert ? "#ff8c00" : section.color, flexShrink: 0, marginTop: 2 }}>◦</span>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(() => steps.map(s => new Array(s.checklist.length).fill(false)));

  const completedCount = (i) => checked[i].filter(Boolean).length;
  const totalProgress = () => {
    const total = steps.reduce((a, s) => a + s.checklist.length, 0);
    const done = checked.reduce((a, arr) => a + arr.filter(Boolean).length, 0);
    return Math.round((done / total) * 100);
  };
  const toggleCheck = (si, ii) => {
    setChecked(prev => { const n = prev.map(a => [...a]); n[si][ii] = !n[si][ii]; return n; });
  };

  const prog = totalProgress();
  const step = steps[activeStep];
  const sidebarIcons = ["✦","⇄","◈","⟳","◉","◆","★"];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #050e1d 0%, #0a1628 50%, #060f1e 100%)", fontFamily: "'DM Sans','Segoe UI',sans-serif", color: "#e0edf8" }}>
      <style>{`
        @media (max-width: 700px) {
          .portal-layout { flex-direction: column !important; padding: 16px 12px !important; }
          .portal-sidebar { width: 100% !important; display: flex !important; flex-wrap: wrap !important; gap: 6px !important; margin-bottom: 16px !important; }
          .sidebar-step { flex: 1 1 calc(50% - 4px) !important; min-width: 130px !important; margin-bottom: 0 !important; }
          .sidebar-contact { width: 100% !important; margin-top: 8px !important; }
          .portal-main { width: 100% !important; }
          .portal-main h1 { font-size: 22px !important; line-height: 1.2 !important; }
          .header-title { font-size: 12px !important; }
          .bill-grid { grid-template-columns: 1fr !important; }
          .track-boxes { flex-direction: column !important; }
        }
      `}</style>
      <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse, rgba(0,168,224,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ borderBottom: "1px solid rgba(0,168,224,0.12)", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(5,14,29,0.92)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, #00a8e0, #005eb8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9.5, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", boxShadow: "0 4px 14px rgba(0,168,224,0.45)", flexShrink: 0 }}>AT&T</div>
          <div>
            <div className="header-title" style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "-0.4px" }}>Target Exclusive Order Portal</div>
            <div style={{ fontSize: 10, color: "#5a8aaa", marginTop: 1 }}>Your complete setup guide</div>
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 9, color: "#4a7a9a", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 700, textAlign: "right" }}>Progress</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 90, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <div style={{ width: `${prog}%`, height: "100%", borderRadius: 3, background: "linear-gradient(90deg, #00a8e0, #00d4ff)", transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#00a8e0" }}>{prog}%</span>
          </div>
        </div>
      </div>

      <div className="portal-layout" style={{ display: "flex", maxWidth: 1120, margin: "0 auto", padding: "24px 18px", gap: 22, position: "relative", zIndex: 1 }}>
        <div className="portal-sidebar" style={{ width: 210, flexShrink: 0 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#3d6a8a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10, paddingLeft: 4, width: "100%" }}>Your Journey</div>
          {steps.map((s, i) => {
            const done = completedCount(i), total = s.checklist.length, isActive = i === activeStep, isComplete = done === total;
            return (
              <div key={s.id} className="sidebar-step" onClick={() => setActiveStep(i)} style={{ padding: "10px 12px", borderRadius: 9, marginBottom: 4, cursor: "pointer", background: isActive ? "linear-gradient(135deg,rgba(0,168,224,0.16),rgba(0,86,184,0.1))" : "rgba(255,255,255,0.02)", border: isActive ? "1px solid rgba(0,168,224,0.3)" : "1px solid rgba(255,255,255,0.04)", transition: "all 0.15s ease" }}>
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
          <div className="sidebar-contact" style={{ marginTop: 14, padding: "13px", borderRadius: 10, background: "rgba(0,168,224,0.06)", border: "1px solid rgba(0,168,224,0.18)" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#4a7fa0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>VIP Support Line</div>
            <div style={{ fontSize: 12, color: "#8ecde8", lineHeight: 1.5, marginBottom: 7 }}>Contact your Account Manager first!</div>
            <a href="tel:8334700693" style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg,#00a8e0,#0057a8)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "7px 0", borderRadius: 7, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,168,224,0.3)" }}>📞 (833) 470-0693</a>
          </div>
        </div>

        <div className="portal-main" style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: step.highlight ? "rgba(0,212,160,0.12)" : "rgba(0,168,224,0.1)", border: `1px solid ${step.highlight ? "rgba(0,212,160,0.3)" : "rgba(0,168,224,0.22)"}`, borderRadius: 20, padding: "3px 11px", fontSize: 10, fontWeight: 700, color: step.highlight ? "#00d4a0" : "#00a8e0", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
            <span style={{ fontSize: 12 }}>{sidebarIcons[activeStep]}</span> {step.category}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: "-0.6px", margin: "0 0 4px 0", lineHeight: 1.15 }}>{step.title}</h1>
          <p style={{ fontSize: 14.5, color: "#4a8aaa", margin: "0 0 18px 0", fontWeight: 600 }}>{step.subtitle}</p>

          {step.intro && <div style={{ background: "linear-gradient(135deg,rgba(0,168,224,0.1),rgba(0,86,184,0.08))", border: "1px solid rgba(0,168,224,0.25)", borderRadius: 12, padding: "15px 17px", marginBottom: 14, fontSize: 13.5, color: "#c0dff0", lineHeight: 1.65 }}><span style={{ fontSize: 15, marginRight: 5 }}>👋</span><em>{step.intro}</em></div>}
          {step.description && <div style={{ fontSize: 13.5, color: "#7aafc8", lineHeight: 1.7, marginBottom: 16, whiteSpace: "pre-wrap" }}>{step.description}</div>}
          {step.alert && <div style={{ background: "rgba(255,140,0,0.07)", border: "1px solid rgba(255,140,0,0.3)", borderLeft: "3px solid #ff8c00", borderRadius: "0 10px 10px 0", padding: "12px 16px", marginBottom: 18, fontSize: 13, color: "#ffd080", lineHeight: 1.65 }}>{step.alert}</div>}

          {step.billingBox && (
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,168,224,0.12)", borderRadius: 11, padding: "14px 16px", marginBottom: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#4a7fa0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>📋 Track Your Order</div>
              <div style={{ fontSize: 13, color: "#8ecde8", lineHeight: 1.65 }}>Go to <a href="https://att.com/checkmyorder" target="_blank" rel="noopener noreferrer" style={{ color: "#00a8e0", fontWeight: 700 }}>att.com/checkmyorder</a> and log in with your order number (starts with 99-) from your confirmation email + your ZIP code.</div>
              <div className="track-boxes" style={{ display: "flex", gap: 10, marginTop: 12 }}>
                {["🔄 Processing — Getting ready to ship", "🚚 Shipped — Tracking # will appear", "📦 Delivered — Follow steps to activate"].map((s, i) => (
                  <div key={i} style={{ flex: 1, background: "rgba(0,168,224,0.07)", borderRadius: 8, padding: "8px 10px", fontSize: 11.5, color: "#7abedc", lineHeight: 1.4 }}>{s}</div>
                ))}
              </div>
            </div>
          )}

          {step.links && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 20 }}>
              {step.links.map(l => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,168,224,0.18)", textDecoration: "none", color: "#a8d8f0", fontSize: 13, fontWeight: 600 }}>
                  <span style={{ fontSize: 17 }}>{l.emoji}</span>
                  <span>{l.label}</span>
                  <span style={{ marginLeft: "auto", color: "#00a8e0", fontSize: 11 }}>▶ Watch</span>
                </a>
              ))}
            </div>
          )}

          {step.tradeInChecklist && (
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(0,168,224,0.1)", borderRadius: 11, padding: "14px 16px", marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#4a7fa0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>✅ Check Your Device Condition</div>
              {step.tradeInChecklist.map((item, i) => (<div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: "#9dcce8", alignItems: "flex-start" }}><span style={{ color: "#00a8e0", marginTop: 1 }}>◦</span>{item}</div>))}
            </div>
          )}
          {step.tradeInPrepSteps && (
            <div style={{ background: "rgba(255,140,0,0.05)", border: "1px solid rgba(255,140,0,0.2)", borderRadius: 11, padding: "14px 16px", marginBottom: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#c87000", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>⚠️ Before You Ship — Do These First</div>
              {step.tradeInPrepSteps.map((item, i) => (<div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, color: "#ffc87a", alignItems: "flex-start" }}><span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,140,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#ffb400", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>{item}</div>))}
            </div>
          )}

          {step.substeps && (
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,168,224,0.1)", borderRadius: 11, padding: "14px 16px", marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#3d6a8a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>How To Do It</div>
              {step.substeps.map((s, i) => (<div key={i} style={{ display: "flex", gap: 10, marginBottom: i < step.substeps.length - 1 ? 11 : 0, alignItems: "flex-start" }}><div style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, background: "rgba(0,168,224,0.15)", border: "1px solid rgba(0,168,224,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#00a8e0", marginTop: 1 }}>{i + 1}</div><div style={{ fontSize: 13, color: "#b0d5ec", lineHeight: 1.55 }}>{s}</div></div>))}
            </div>
          )}

          {step.autopayNote && <div style={{ background: "rgba(0,212,160,0.07)", border: "1px solid rgba(0,212,160,0.25)", borderLeft: "3px solid #00d4a0", borderRadius: "0 10px 10px 0", padding: "12px 15px", marginBottom: 18, fontSize: 13, color: "#80efd0", lineHeight: 1.65 }}>{step.autopayNote}</div>}
          {step.activationNote && <div style={{ background: "rgba(0,168,224,0.07)", border: "1px solid rgba(0,168,224,0.2)", borderRadius: 10, padding: "12px 15px", marginBottom: 18, fontSize: 13, color: "#8ecde8", lineHeight: 1.65 }}>ℹ️ {step.activationNote}</div>}

          {step.expandableSections && (
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#3d6a8a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Optional — Applies to Some Customers</div>
              {step.expandableSections.map(section => (
                <ExpandableSection key={section.id} section={section} />
              ))}
            </div>
          )}

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

          {step.billTimeline && (
            <div className="bill-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
              {step.billTimeline.map((b, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${b.color}35`, borderRadius: 11, padding: "13px 14px" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: b.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>{b.label}</div>
                  {b.items.map((item, j) => (<div key={j} style={{ fontSize: 12, color: "#8cb8d4", lineHeight: 1.55, marginBottom: 5, display: "flex", gap: 6, alignItems: "flex-start" }}><span style={{ color: b.color, flexShrink: 0, marginTop: 2 }}>•</span>{item}</div>))}
                </div>
              ))}
            </div>
          )}

          {step.nextUpNote && <div style={{ background: "rgba(0,168,224,0.06)", border: "1px solid rgba(0,168,224,0.2)", borderRadius: 10, padding: "12px 15px", marginBottom: 18, fontSize: 13, color: "#8ecde8", lineHeight: 1.65 }}>{step.nextUpNote}</div>}

          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(0,168,224,0.1)", borderRadius: 12, padding: "16px 18px", marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#3d6a8a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Checklist — {completedCount(activeStep)}/{step.checklist.length} completed</div>
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

          <div style={{ background: "rgba(0,168,224,0.05)", border: "1px solid rgba(0,168,224,0.18)", borderLeft: "3px solid #00a8e0", borderRadius: "0 10px 10px 0", padding: "11px 15px", marginBottom: 24, fontSize: 13, color: "#7ecde8", lineHeight: 1.65 }}>
            <span style={{ fontWeight: 800, color: "#00a8e0" }}>💡 Pro Tip: </span>{step.tip}
          </div>

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
    </div>
  );
}
