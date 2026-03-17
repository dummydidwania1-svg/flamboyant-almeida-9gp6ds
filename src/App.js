import React, { useState, useEffect, useRef } from "react";

var COLORS = {
  bg: "#F2ECE4",
  brown: "#503A24",
  brownLight: "#6B5744",
  green: "#5E7A4E",
  white: "#FFFFFF",
  grayPlaceholder: "#C4B8AC",
};
var FONTS = {
  serif: "'Cormorant', Georgia, serif",
  sans: "'Lato', 'Helvetica Neue', Arial, sans-serif",
};

/* ── Styles ── */
var pageStyle = {
  margin: 0,
  fontFamily: FONTS.sans,
  backgroundColor: COLORS.bg,
  color: COLORS.brown,
  minHeight: "100vh",
  overflowX: "hidden",
};
var navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 48px",
  backgroundColor: "rgba(242,236,228,0.88)",
  zIndex: 1000,
  borderBottom: "1px solid rgba(80,58,36,0.06)",
  transform: "translateZ(0)",
};
var logoBoxStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  flex: "0 0 auto",
};
var logoTxtStyle = {
  fontSize: "17px",
  fontWeight: "400",
  color: COLORS.brown,
  fontFamily: FONTS.serif,
  letterSpacing: "-0.3px",
};
var logoXStyle = { color: COLORS.green, fontWeight: "400" };
var navMidStyle = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  gap: "40px",
};
var signInStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: COLORS.brown,
  cursor: "pointer",
  background: "none",
  border: "none",
  fontFamily: FONTS.sans,
  letterSpacing: "0.3px",
  flex: "0 0 auto",
};
var heroSecStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "150px 100px 60px 100px",
  maxWidth: "1280px",
  margin: "0 auto",
  gap: "40px",
};
var heroLStyle = { flex: 1, maxWidth: "520px" };
var heroH1Style = {
  fontSize: "64px",
  fontWeight: "300",
  lineHeight: "1.05",
  letterSpacing: "-1.5px",
  margin: "0 0 26px 0",
  color: COLORS.brown,
  fontFamily: FONTS.serif,
};
var heroPStyle = {
  fontSize: "19px",
  lineHeight: "1.7",
  color: COLORS.brownLight,
  margin: "0 0 40px 0",
  maxWidth: "440px",
  fontFamily: FONTS.sans,
  fontWeight: "300",
};
var heroBtnRow = { display: "flex", gap: "18px" };
var heroRStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  maxWidth: "500px",
};
var vidBoxStyle = {
  width: "100%",
  maxWidth: "480px",
  aspectRatio: "16/10",
  backgroundColor: "#1a1a1a",
  borderRadius: "14px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxShadow: "0 18px 50px rgba(80,58,36,0.12)",
};
var vidTxtStyle = {
  color: "rgba(255,255,255,0.45)",
  fontSize: "14px",
  textAlign: "center",
  fontFamily: FONTS.sans,
  fontWeight: "300",
  padding: "20px",
};
var vidCtrlStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "10px 14px",
  background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
var vBtn = {
  color: "#fff",
  fontSize: "12px",
  cursor: "pointer",
  background: "none",
  border: "none",
};
var vTm = {
  color: "rgba(255,255,255,0.6)",
  fontSize: "11px",
  fontFamily: FONTS.sans,
  whiteSpace: "nowrap",
};
var vBar = {
  flex: 1,
  height: "3px",
  backgroundColor: "rgba(255,255,255,0.25)",
  borderRadius: "2px",
  overflow: "hidden",
};
var vFill = {
  width: "30%",
  height: "100%",
  backgroundColor: "#fff",
  borderRadius: "2px",
};
var contribSecStyle = {
  padding: "20px 64px 70px 64px",
  textAlign: "center",
  maxWidth: "100%",
  margin: "0 auto",
  overflow: "hidden",
};
var contribHStyle = {
  fontSize: "38px",
  fontWeight: "300",
  color: COLORS.brown,
  marginBottom: "40px",
  fontFamily: FONTS.serif,
  letterSpacing: "-0.5px",
};
var carWrapStyle = {
  overflow: "hidden",
  width: "100%",
  maskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  transform: "translateZ(0)",
};
var carTrackStyle = {
  display: "flex",
  gap: "32px",
  animation: "scrollCarousel 20s linear infinite",
  width: "max-content",
  willChange: "transform",
};
var carItemStyle = {
  width: "90px",
  height: "90px",
  backgroundColor: COLORS.grayPlaceholder,
  borderRadius: "12px",
  flexShrink: 0,
};
var featHeaderStyle = {
  padding: "80px 100px 40px 100px",
  textAlign: "center",
  maxWidth: "1280px",
  margin: "0 auto",
};
var featHStyle = {
  fontSize: "42px",
  fontWeight: "300",
  color: COLORS.brown,
  marginBottom: "24px",
  fontFamily: FONTS.serif,
  letterSpacing: "-0.5px",
};
var featPStyle = {
  fontSize: "19px",
  lineHeight: "1.7",
  color: COLORS.brownLight,
  maxWidth: "760px",
  margin: "0 auto 56px auto",
  fontFamily: FONTS.sans,
  fontWeight: "300",
};
var tabsRowStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  marginBottom: "0",
};
var diffSecStyle = {
  padding: "60px 64px 120px 64px",
  textAlign: "center",
  maxWidth: "100%",
  margin: "0 auto",
};
var diffHStyle = {
  fontSize: "42px",
  fontWeight: "300",
  color: COLORS.brown,
  marginBottom: "20px",
  fontFamily: FONTS.serif,
  letterSpacing: "-0.5px",
};
var diffGrn = { color: COLORS.green, fontStyle: "italic", fontWeight: "400" };
var diffPlc = {
  fontSize: "16px",
  color: COLORS.grayPlaceholder,
  fontFamily: FONTS.sans,
  fontWeight: "300",
  marginTop: "10px",
};
var wBox = {
  position: "relative",
  display: "inline-block",
  overflow: "hidden",
  verticalAlign: "bottom",
  height: "1.15em",
  lineHeight: "1.15",
};
var wCur = {
  display: "inline-block",
  color: COLORS.green,
  fontStyle: "italic",
  fontWeight: "300",
  fontFamily: FONTS.serif,
};
var wNxt = {
  position: "absolute",
  left: 0,
  top: 0,
  display: "inline-block",
  color: COLORS.green,
  fontStyle: "italic",
  fontWeight: "300",
  fontFamily: FONTS.serif,
};
var phBox = {
  textAlign: "center",
  padding: "60px 0",
  color: COLORS.brownLight,
};
var phTxt = { fontFamily: FONTS.sans, fontSize: "16px", fontWeight: "300" };

/* ── Global CSS (no scroll-behavior: smooth — it interferes with wheel capture) ── */
var cssText = [
  "*, *::before, *::after { box-sizing: border-box; }",
  "body { margin: 0; padding: 0; background-color: " + COLORS.bg + "; }",
  ".word-enter { animation: wordSlideIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }",
  ".word-exit { animation: wordSlideOut 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }",
  "@keyframes wordSlideIn { 0% { transform: translateY(100%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }",
  "@keyframes wordSlideOut { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-100%); opacity: 0; } }",
  "@keyframes scrollCarousel { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }",
  ".nav-link-btn { position: relative; font-size: 14px; font-weight: 400; color: " +
    COLORS.brown +
    "; cursor: pointer; background: none; border: none; font-family: " +
    FONTS.sans +
    "; letter-spacing: 0.3px; padding: 4px 0 8px 0; transition: color 0.2s ease; }",
  ".nav-link-btn::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background-color: " +
    COLORS.green +
    "; border-radius: 2px; transition: width 0.3s ease; }",
  ".nav-link-btn:hover { opacity: 0.7; }",
  ".nav-link-btn.active::after { width: 100%; }",
  ".nav-link-btn:hover::after { width: 100%; }",
].join("\n");

function GlobalStyles() {
  return React.createElement("style", {
    dangerouslySetInnerHTML: { __html: cssText },
  });
}

/* ── ScrollReveal: one-shot (never re-hides), GPU-promoted ── */
function ScrollReveal(props) {
  var ref = useRef(null);
  var arr = useState(false);
  var vis = arr[0];
  var setV = arr[1];
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) setV(true);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return function () {
      observer.disconnect();
    };
  }, []);
  var merged = Object.assign({}, props.style, {
    opacity: vis ? 1 : 0,
    transform: vis
      ? "translateY(0) translateZ(0)"
      : "translateY(40px) translateZ(0)",
    transition:
      "opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
    willChange: vis ? "auto" : "opacity, transform",
  });
  return React.createElement(
    "div",
    { ref: ref, style: merged },
    props.children
  );
}

/* ── Rotating hero word ── */
var WORDS = ["precise.", "easier.", "smarter."];
var CYCLE_MS = 2200;
function RotatingWord() {
  var s1 = useState(0);
  var idx = s1[0];
  var setIdx = s1[1];
  var s2 = useState(WORDS[0]);
  var cur = s2[0];
  var setCur = s2[1];
  var s3 = useState(null);
  var nxt = s3[0];
  var setNxt = s3[1];
  var s4 = useState(false);
  var trans = s4[0];
  var setTrans = s4[1];
  useEffect(
    function () {
      if (idx >= WORDS.length - 1) return;
      var timer = setTimeout(function () {
        var n = idx + 1;
        setNxt(WORDS[n]);
        setTrans(true);
        setTimeout(function () {
          setCur(WORDS[n]);
          setNxt(null);
          setTrans(false);
          setIdx(n);
        }, 500);
      }, CYCLE_MS);
      return function () {
        clearTimeout(timer);
      };
    },
    [idx]
  );
  return (
    <span style={wBox}>
      <span className={trans ? "word-exit" : ""} style={wCur}>
        {cur}
      </span>
      {nxt && (
        <span className="word-enter" style={wNxt}>
          {nxt}
        </span>
      )}
    </span>
  );
}

/* ── Buttons ── */
function CTAButton(props) {
  var h = useState(false);
  var hov = h[0];
  var setH = h[1];
  var s = {
    padding: "14px 0",
    width: "200px",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: FONTS.sans,
    color: hov ? COLORS.white : COLORS.brown,
    backgroundColor: hov ? COLORS.brown : "transparent",
    border: "1.5px solid " + COLORS.brown,
    borderRadius: "12px",
    cursor: "pointer",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textAlign: "center",
    transform: hov ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
    boxShadow: hov ? "0 10px 30px rgba(80,58,36,0.2)" : "none",
    transition: "all 0.3s ease",
  };
  return (
    <button
      style={s}
      onMouseEnter={function () {
        setH(true);
      }}
      onMouseLeave={function () {
        setH(false);
      }}
    >
      {props.children}
    </button>
  );
}

function TabButton(props) {
  var h = useState(false);
  var hov = h[0];
  var setH = h[1];
  var bg = props.isActive
    ? "rgba(80,58,36,0.18)"
    : hov
    ? "rgba(80,58,36,0.14)"
    : "rgba(80,58,36,0.08)";
  var s = {
    padding: "14px 48px",
    fontSize: "13px",
    fontWeight: props.isActive ? "600" : "500",
    fontFamily: FONTS.sans,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: COLORS.brown,
    backgroundColor: bg,
    transition: "all 0.3s ease",
  };
  return (
    <button
      style={s}
      onClick={props.onClick}
      onMouseEnter={function () {
        setH(true);
      }}
      onMouseLeave={function () {
        setH(false);
      }}
    >
      {props.label}
    </button>
  );
}

/* ── Logo ── */
function TieLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="12"
        ry="12"
        stroke={COLORS.brown}
        strokeWidth="5"
        fill="none"
      />
      <polygon points="38,20 62,20 56,34 44,34" fill={COLORS.brown} />
      <polygon points="44,34 56,34 54,78 50,86 46,78" fill={COLORS.brown} />
      <polygon points="50,34 56,34 54,78 50,86" fill="#6B5744" />
      <ellipse cx="50" cy="90" rx="14" ry="3" fill="rgba(80,58,36,0.15)" />
    </svg>
  );
}

/* ── Contributor Carousel ── */
function ContributorCarousel() {
  var items = Array.from({ length: 16 });
  return (
    <div style={carWrapStyle}>
      <div style={carTrackStyle}>
        {items.map(function (_, i) {
          return <div key={i} style={carItemStyle} />;
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MODELS SHOWCASE

   How it works:
   1. IntersectionObserver watches the card
   2. Card enters viewport → attach wheel listener (passive:false)
   3. Card leaves viewport → detach wheel listener completely
   4. While attached, wheel handler:
      a. Checks card is properly centered (zone check)
      b. At boundaries (step 0 up, step 3 down) → lets scroll through
      c. Otherwise → preventDefault, accumulate delta
      d. When accumulated delta >= 100px → advance step, start 700ms cooldown
   5. During cooldown → wheel events are eaten (preventDefault) but no step change
   6. Result: page freezes, one model appears per deliberate scroll
   ══════════════════════════════════════════════════════════════════ */
var GRN = { color: COLORS.green, fontWeight: "400" };
var BOLD = { fontWeight: "700", color: COLORS.brown };

function ModelsShowcase() {
  var containerRef = useRef(null);
  var stepRef = useRef(0);
  var cooldownRef = useRef(false);
  var accRef = useRef(0);
  var attachedRef = useRef(false);
  var handlerRef = useRef(null);
  var velocityRef = useRef([]);
  var arr = useState(0);
  var step = arr[0];
  var setStep = arr[1];

  useEffect(function () {
    var THRESHOLD = 100;
    var COOLDOWN = 700;
    var FAST_VELOCITY = 400;
    var VELOCITY_WINDOW = 200;

    function onWheel(e) {
      var el = containerRef.current;
      if (!el) return;

      var rect = el.getBoundingClientRect();
      var winH = window.innerHeight;
      var inZone = rect.top < winH * 0.7 && rect.bottom > winH * 0.25;
      if (!inZone) {
        accRef.current = 0;
        return;
      }

      var delta = e.deltaY;
      var current = stepRef.current;

      /* Boundaries: let scroll pass through */
      if (current === 0 && delta < 0) {
        accRef.current = 0;
        return;
      }
      if (current === 3 && delta > 0) {
        accRef.current = 0;
        return;
      }

      /* ── Velocity tracking (before preventDefault) ── */
      var now = Date.now();
      velocityRef.current.push({ time: now, delta: delta });
      velocityRef.current = velocityRef.current.filter(function (entry) {
        return now - entry.time < VELOCITY_WINDOW;
      });
      var totalVelocity = 0;
      velocityRef.current.forEach(function (entry) {
        totalVelocity += Math.abs(entry.delta);
      });

      /* ── Fast scroll: skip animation, let page fly through ── */
      if (totalVelocity > FAST_VELOCITY) {
        if (delta > 0) {
          stepRef.current = 3;
          setStep(3);
        } else {
          stepRef.current = 0;
          setStep(0);
        }
        accRef.current = 0;
        cooldownRef.current = false;
        velocityRef.current = [];
        return; /* NO preventDefault — page scrolls naturally */
      }

      /* ── Slow scroll: capture and step one by one ── */
      e.preventDefault();

      if (cooldownRef.current) return;

      if (
        (accRef.current > 0 && delta < 0) ||
        (accRef.current < 0 && delta > 0)
      ) {
        accRef.current = 0;
      }

      accRef.current += delta;

      if (Math.abs(accRef.current) >= THRESHOLD) {
        cooldownRef.current = true;
        setTimeout(function () {
          cooldownRef.current = false;
        }, COOLDOWN);

        if (accRef.current > 0 && current < 3) {
          stepRef.current = current + 1;
          setStep(current + 1);
        } else if (accRef.current < 0 && current > 0) {
          stepRef.current = current - 1;
          setStep(current - 1);
        }
        accRef.current = 0;
      }
    }

    handlerRef.current = onWheel;

    var el = containerRef.current;
    if (!el) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !attachedRef.current) {
            attachedRef.current = true;
            window.addEventListener("wheel", handlerRef.current, {
              passive: false,
            });
          }
          if (!entry.isIntersecting && attachedRef.current) {
            attachedRef.current = false;
            window.removeEventListener("wheel", handlerRef.current);
            accRef.current = 0;
            cooldownRef.current = false;
            velocityRef.current = [];
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return function () {
      observer.disconnect();
      if (attachedRef.current) {
        window.removeEventListener("wheel", handlerRef.current);
        attachedRef.current = false;
      }
    };
  }, []);

  var models = [
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle
            cx="28"
            cy="28"
            r="18"
            stroke={COLORS.brown}
            strokeWidth="1.8"
            fill="none"
          />
          <line
            x1="41"
            y1="41"
            x2="62"
            y2="62"
            stroke={COLORS.brown}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="28"
            cy="28"
            r="7"
            stroke={COLORS.green}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="28" cy="28" r="2" fill={COLORS.green} />
        </svg>
      ),
      shortName: "Analyser",
      descJSX: (
        <span>
          <span style={BOLD}>The Analyser</span> breaks down your case
          performance across <span style={GRN}>structure</span>,{" "}
          <span style={GRN}>reasoning</span>, and{" "}
          <span style={GRN}>communication</span> — delivering granular,
          data-backed feedback every session.
        </span>
      ),
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path
            d="M36 6 C36 6 20 24 20 38 C20 50 27 58 36 64 C45 58 52 50 52 38 C52 24 36 6 36 6Z"
            stroke={COLORS.brown}
            strokeWidth="1.8"
            fill="none"
          />
          <circle
            cx="36"
            cy="36"
            r="8"
            stroke={COLORS.green}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="36" cy="36" r="2.5" fill={COLORS.green} />
          <line
            x1="36"
            y1="28"
            x2="36"
            y2="20"
            stroke={COLORS.brown}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="28"
            y1="36"
            x2="22"
            y2="36"
            stroke={COLORS.brown}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="44"
            y1="36"
            x2="50"
            y2="36"
            stroke={COLORS.brown}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      ),
      shortName: "Coach",
      descJSX: (
        <span>
          <span style={BOLD}>The Coach</span> identifies{" "}
          <span style={GRN}>patterns in your weaknesses</span>, suggests{" "}
          <span style={GRN}>targeted drills</span>, and guides improvement with
          actionable, personalised next steps.
        </span>
      ),
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle
            cx="36"
            cy="36"
            r="30"
            stroke={COLORS.brown}
            strokeWidth="1.8"
            fill="none"
          />
          <circle
            cx="36"
            cy="36"
            r="20"
            stroke={COLORS.brown}
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 3"
          />
          <circle
            cx="36"
            cy="36"
            r="10"
            stroke={COLORS.brown}
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="36" cy="36" r="3" fill={COLORS.green} />
          <line
            x1="36"
            y1="2"
            x2="36"
            y2="12"
            stroke={COLORS.green}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="66"
            y1="36"
            x2="56"
            y2="36"
            stroke={COLORS.green}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="60"
            x2="36"
            y2="70"
            stroke={COLORS.green}
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      ),
      shortName: "Tracker",
      descJSX: (
        <span>
          <span style={BOLD}>The Tracker</span> monitors your{" "}
          <span style={GRN}>progress over time</span> across case types and
          difficulty levels — surfacing <span style={GRN}>trends</span> and{" "}
          <span style={GRN}>milestones</span> toward readiness.
        </span>
      ),
    },
  ];

  var sectionBg = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "44px 48px 48px 48px",
    background:
      "linear-gradient(135deg, rgba(80,58,36,0.03) 0%, rgba(94,122,78,0.04) 100%)",
    borderRadius: "24px",
    border: "1px solid rgba(80,58,36,0.06)",
    boxShadow:
      "0 4px 40px rgba(80,58,36,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
    minHeight: "280px",
    transform: "translateZ(0)",
  };
  var layoutStyle = { display: "flex", gap: "48px", alignItems: "flex-start" };
  var iconsGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flexShrink: 0,
    justifyContent: "center",
    padding: "16px 8px",
  };
  var textGroupStyle = { flex: 1 };

  return (
    <div ref={containerRef} style={sectionBg}>
      <div style={layoutStyle}>
        <div style={iconsGroupStyle}>
          {models.map(function (model, i) {
            var visible = step >= i + 1;
            var iconBoxStyle = {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(0.7)",
              transition:
                "opacity 0.5s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
              filter: visible
                ? "drop-shadow(0 6px 12px rgba(80,58,36,0.12))"
                : "none",
            };
            var labelStyle = {
              fontSize: "10px",
              fontWeight: "600",
              fontFamily: FONTS.sans,
              color: COLORS.brown,
              letterSpacing: "1px",
              marginTop: "10px",
              textAlign: "center",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
            };
            return (
              <div key={i} style={iconBoxStyle}>
                {model.icon}
                <div style={labelStyle}>{model.shortName}</div>
              </div>
            );
          })}
        </div>
        <div style={textGroupStyle}>
          {models.map(function (model, i) {
            var visible = step >= i + 1;
            var rowStyle = {
              padding: "14px 0 14px 20px",
              borderLeft:
                "2px solid " +
                (visible ? "rgba(94,122,78,0.8)" : "rgba(80,58,36,0.06)"),
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 0.5s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.5s ease",
            };
            var textStyle = {
              fontSize: "14.5px",
              lineHeight: "1.6",
              color: COLORS.brownLight,
              fontFamily: FONTS.sans,
              fontWeight: "300",
              margin: 0,
            };
            return (
              <div key={i} style={rowStyle}>
                <p style={textStyle}>{model.descJSX}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RepositoryContent(props) {
  var v = useState(false);
  var vis = v[0];
  var setV = v[1];
  useEffect(
    function () {
      setV(false);
      var t = setTimeout(function () {
        setV(true);
      }, 150);
      return function () {
        clearTimeout(t);
      };
    },
    [props.animKey]
  );
  var s = Object.assign({}, phBox, {
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  });
  return (
    <div style={s}>
      <p style={phTxt}>Repository features coming soon...</p>
    </div>
  );
}

/* ── Features Section ── */
function FeaturesSection() {
  var a = useState("ai-models");
  var tab = a[0];
  var setTab = a[1];
  var k = useState(0);
  var aKey = k[0];
  var setKey = k[1];
  function go(t) {
    if (t === tab) return;
    setTab(t);
    setKey(function (n) {
      return n + 1;
    });
  }
  var tabs = [
    { id: "ai-models", label: "AI MODELS" },
    { id: "dashboard", label: "DASHBOARD" },
    { id: "repository", label: "REPOSITORY" },
  ];
  var cardsArea = { padding: "0 60px", maxWidth: "1280px", margin: "0 auto" };

  return (
    <>
      <ScrollReveal style={featHeaderStyle}>
        <h2 style={featHStyle}>Our Features</h2>
        <p style={featPStyle}>
          Our platform is powered by three specialised AI models, a personalised
          analytics dashboard, and a comprehensive case repository — each
          designed to enhance every phase of your case prep journey. It blends
          human insight with AI precision to accelerate your growth.
        </p>
        <div style={tabsRowStyle}>
          {tabs.map(function (t) {
            return (
              <TabButton
                key={t.id}
                label={t.label}
                isActive={tab === t.id}
                onClick={function () {
                  go(t.id);
                }}
              />
            );
          })}
        </div>
      </ScrollReveal>
      <div style={cardsArea}>
        {tab === "ai-models" && <ModelsShowcase />}
        {tab === "dashboard" && <DashboardContent animKey={aKey} />}
        {tab === "repository" && <RepositoryContent animKey={aKey} />}
      </div>
      <ScrollReveal style={diffSecStyle}>
        <h2 style={diffHStyle}>
          What Makes us <span style={diffGrn}>Different?</span>
        </h2>
        <p style={diffPlc}>Next block left to design</p>
      </ScrollReveal>
    </>
  );
}

/* ── Landing Page ── */
export default function LandingPage() {
  var pg = "Home";
  return (
    <div style={pageStyle}>
      <GlobalStyles />
      <nav style={navStyle}>
        <div style={logoBoxStyle}>
          <TieLogo />
          <span style={logoTxtStyle}>
            Case Compendium<span style={logoXStyle}>X</span>
          </span>
        </div>
        <div style={navMidStyle}>
          {["Home", "Dashboard", "About Us"].map(function (l) {
            return (
              <button
                key={l}
                className={"nav-link-btn" + (l === pg ? " active" : "")}
              >
                {l}
              </button>
            );
          })}
        </div>
        <button style={signInStyle}>Sign In</button>
      </nav>
      <section style={heroSecStyle}>
        <ScrollReveal style={heroLStyle}>
          <h1 style={heroH1Style}>
            Where case prep
            <br />
            gets <RotatingWord />
          </h1>
          <p style={heroPStyle}>
            A multimodal AI powered case prep platform which turns every
            practice session into a measurable step forward.
          </p>
          <div style={heroBtnRow}>
            <CTAButton>Browse Library</CTAButton>
            <CTAButton>Do a Case</CTAButton>
          </div>
        </ScrollReveal>
        <ScrollReveal style={heroRStyle}>
          <div style={vidBoxStyle}>
            <div style={vidTxtStyle}>
              Platform Demo Video
              <br />
              (to be added later)
            </div>
            <div style={vidCtrlStyle}>
              <button style={vBtn}>▶</button>
              <span style={vTm}>1:02</span>
              <div style={vBar}>
                <div style={vFill} />
              </div>
              <span style={vTm}>3:50</span>
              <button style={vBtn}>🔊</button>
              <button style={vBtn}>⛶</button>
            </div>
          </div>
        </ScrollReveal>
      </section>
      <ScrollReveal style={contribSecStyle}>
        <h2 style={contribHStyle}>Contributors</h2>
        <ContributorCarousel />
      </ScrollReveal>
      <FeaturesSection />
    </div>
  );
}
