/* Napster App — companion screens */

const Pink = "#BE369D", Pulse = "#EA2DD2", PulseLite = "#FF7DF3", Cream = "#FDE5D5";
const personas = [
  { name: "Kai",     role: "Learning",     img: "../../assets/persona-kai-mercer.png" },
  { name: "Kevin",   role: "Finance",      img: "../../assets/persona-kevin-jones.png" },
  { name: "Jordan",  role: "Fitness",      img: "../../assets/persona-jordan-carter.png" },
  { name: "May",     role: "Lifestyle",    img: "../../assets/persona-may-li.png" },
  { name: "JC",      role: "Productivity", img: "../../assets/persona-jc-mitchell.png" },
  { name: "Ellena",  role: "Sport",        img: "../../assets/persona-ellena-garcia.png" },
  { name: "Amit",    role: "Coding",       img: "../../assets/persona-amit-pillai.png" },
  { name: "Alyssa",  role: "Wellness",     img: "../../assets/persona-alyssa-reynolds.png" },
];

const Eyebrow = ({children, color=PulseLite}) => (
  <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color, fontWeight:600, fontFamily:"var(--font-sans)"}}>{children}</div>
);

const PrimaryBtn = ({children, w}) => (
  <button style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,
    padding:"14px 22px", borderRadius:9999, border:"none",
    background:"linear-gradient(135deg,#EA2DD2,#FF7DF3)",
    color:"#fff", fontFamily:"var(--font-display)", fontWeight:600, fontSize:15,
    boxShadow:"0 0 40px rgba(234,45,210,.35)", cursor:"pointer", width:w}}>
    {children}
  </button>
);

/* ----- Screen 1: Welcome ------------------------------------------------ */
window.Welcome = function Welcome() {
  return (
    <div style={{flex:1, position:"relative", display:"flex", flexDirection:"column", padding:"24px 24px 28px"}}>
      <img src="../../assets/napster-icon.svg" style={{width:32,height:32,filter:"brightness(0) invert(1)",opacity:.85}}/>
      <div style={{flex:1}}/>
      <div style={{position:"relative", marginBottom:16}}>
        <div style={{position:"absolute", left:"50%", top:-160, transform:"translateX(-50%)", width:240,height:240, borderRadius:"50%",
          background:"radial-gradient(circle at 50% 40%, #FFA1F3 0%, #BE369D 50%, transparent 70%)", filter:"blur(8px)", opacity:.85}}/>
      </div>
      <Eyebrow>Hello, I'm Napster</Eyebrow>
      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:38, lineHeight:1.02, letterSpacing:"-.025em", marginTop:10}}>
        A companion<br/>that creates<br/>with you.
      </div>
      <div style={{fontSize:13, color:"rgba(255,255,255,.65)", lineHeight:1.45, marginTop:14}}>
        Voice‑first AI agents for learning, fitness, finance and the rest of life.
      </div>
      <div style={{marginTop:22, display:"flex", flexDirection:"column", gap:10}}>
        <PrimaryBtn>Try Napster for free  →</PrimaryBtn>
        <button style={{padding:"14px 22px",borderRadius:9999,background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,.18)",fontFamily:"var(--font-display)",fontWeight:600,fontSize:15,cursor:"pointer"}}>Sign in</button>
      </div>
    </div>
  );
};

/* ----- Screen 2: Companions home --------------------------------------- */
window.CompanionsHome = function CompanionsHome() {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",padding:"4px 0 100px"}}>
      <div style={{padding:"14px 24px 0",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div>
          <Eyebrow>Good morning</Eyebrow>
          <div style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:24,letterSpacing:"-.02em",marginTop:4}}>Mateo.</div>
        </div>
        <div style={{width:36,height:36,borderRadius:"50%",background:"#1A0918",border:"1px solid rgba(255,255,255,.12)"}}/>
      </div>
      <div style={{padding:"18px 24px 0"}}>
        <div style={{fontSize:13,color:"rgba(255,255,255,.55)",fontWeight:500}}>Your companions</div>
      </div>
      <div style={{padding:"12px 16px 0",display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        {personas.slice(0,4).map(p => (
          <div key={p.name} style={{position:"relative",aspectRatio:"3/4",borderRadius:20,overflow:"hidden",background:"#1A0918",border:"1px solid rgba(255,255,255,.08)"}}>
            <img src={p.img} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(0,0,0,0) 50%, rgba(0,0,0,.85) 100%)"}}/>
            <div style={{position:"absolute",left:12,bottom:10,zIndex:2}}>
              <div style={{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:PulseLite,fontWeight:600}}>{p.role}</div>
              <div style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:18,letterSpacing:"-.01em"}}>{p.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{padding:"16px 24px 0"}}>
        <div style={{fontSize:13,color:"rgba(255,255,255,.55)",fontWeight:500,marginBottom:10}}>Recent</div>
        <div style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:18,padding:14,display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:36,height:36,borderRadius:12,background:"linear-gradient(135deg,#EA2DD2,#FF7DF3)"}}/>
          <div style={{flex:1}}>
            <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:14}}>Today's lesson</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.55)"}}>Kai · 12 min · Spanish</div>
          </div>
          <div style={{color:PulseLite}}>›</div>
        </div>
      </div>
      <TabBar active="home"/>
    </div>
  );
};

/* ----- Screen 3: Voice session ----------------------------------------- */
window.VoiceSession = function VoiceSession() {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",padding:"4px 0",position:"relative"}}>
      <div style={{padding:"14px 24px 0",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{color:"rgba(255,255,255,.7)",fontSize:14}}>‹</div>
        <Eyebrow>Listening</Eyebrow>
        <div style={{color:"rgba(255,255,255,.7)",fontSize:14}}>×</div>
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24,position:"relative"}}>
        <div style={{position:"relative",width:220,height:220}}>
          <div style={{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle at 50% 40%, #FFA1F3 0%, #BE369D 50%, #2E0833 80%)",boxShadow:"0 0 80px rgba(234,45,210,.55)"}}/>
          <div style={{position:"absolute",inset:24,borderRadius:"50%",background:"radial-gradient(circle at 50% 40%, rgba(255,255,255,.5) 0%, transparent 50%)",mixBlendMode:"overlay"}}/>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:22,letterSpacing:"-.02em"}}>"Tell me about<br/>the Bauhaus."</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,.55)",marginTop:8}}>Kai · Learning companion</div>
        </div>
      </div>
      <div style={{padding:"24px",display:"flex",alignItems:"center",justifyContent:"center",gap:18}}>
        <button style={iconBtn()}><img src="../../assets/icon-microphone.svg" style={ico()}/></button>
        <button style={{...iconBtn(),width:64,height:64,background:"linear-gradient(135deg,#EA2DD2,#FF7DF3)",boxShadow:"0 0 40px rgba(234,45,210,.5)"}}>
          <div style={{width:18,height:18,borderRadius:4,background:"#fff"}}/>
        </button>
        <button style={iconBtn()}><img src="../../assets/icon-message.svg" style={ico()}/></button>
      </div>
    </div>
  );
};

const iconBtn = () => ({width:48,height:48,borderRadius:"50%",background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.12)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"});
const ico = () => ({width:20,height:20,filter:"brightness(0) invert(1)",opacity:.85});

/* ----- Screen 4: Chat -------------------------------------------------- */
window.Chat = function Chat() {
  const msgs = [
    { who:"k", t:"Buenos días. Quince minutos hoy?" },
    { who:"u", t:"Yes — pick up from yesterday?" },
    { who:"k", t:"Sure. We were on past tenses. Say one sentence about lunch." },
    { who:"u", t:"Comí una ensalada con mi hermana." },
  ];
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column"}}>
      <div style={{padding:"12px 18px",display:"flex",alignItems:"center",gap:10,borderBottom:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{color:"rgba(255,255,255,.7)"}}>‹</div>
        <div style={{width:32,height:32,borderRadius:"50%",overflow:"hidden",background:"#1A0918"}}><img src="../../assets/persona-kai-mercer.png" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
        <div style={{flex:1}}>
          <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:14}}>Kai</div>
          <div style={{fontSize:10,color:PulseLite,letterSpacing:".1em",textTransform:"uppercase"}}>Learning · online</div>
        </div>
      </div>
      <div style={{flex:1,padding:"16px 18px",display:"flex",flexDirection:"column",gap:10,overflow:"hidden"}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{alignSelf:m.who==="u"?"flex-end":"flex-start",maxWidth:"78%",padding:"10px 14px",borderRadius:18,fontSize:13,lineHeight:1.4,
            background:m.who==="u"?"linear-gradient(135deg,#EA2DD2,#FF7DF3)":"rgba(255,255,255,.06)",
            color:"#fff", border:m.who==="u"?"none":"1px solid rgba(255,255,255,.08)"}}>{m.t}</div>
        ))}
      </div>
      <div style={{padding:"10px 14px 16px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,background:"rgba(255,255,255,.06)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.12)",borderRadius:9999,padding:"10px 14px"}}>
          <div style={{flex:1,fontSize:13,color:"rgba(255,255,255,.5)"}}>Ask Mateo anything…</div>
          <div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#EA2DD2,#FF7DF3)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 24px rgba(234,45,210,.45)"}}>
            <img src="../../assets/icon-microphone.svg" style={{width:14,height:14,filter:"brightness(0) invert(1)"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----- Screen 5: Profile ----------------------------------------------- */
window.Profile = function Profile() {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",padding:"4px 0 100px"}}>
      <div style={{padding:"14px 24px 0",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Eyebrow>Profile</Eyebrow>
        <div style={{color:"rgba(255,255,255,.55)"}}>⚙</div>
      </div>
      <div style={{padding:"24px",display:"flex",alignItems:"center",gap:14}}>
        <div style={{width:64,height:64,borderRadius:"50%",background:"linear-gradient(135deg,#3F236B,#BE369D)",border:"1px solid rgba(255,255,255,.18)",boxShadow:"0 0 36px rgba(190,54,157,.4)"}}/>
        <div>
          <div style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:22,letterSpacing:"-.01em"}}>Mateo Reyes</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,.6)"}}>Member since 2026 · Pro</div>
        </div>
      </div>
      <div style={{padding:"0 16px",display:"flex",flexDirection:"column",gap:8}}>
        {[["Subscription","Pro · monthly"],["Voice & speech","On"],["Privacy","High"],["Connected apps","3"],["Sign out",""]].map(([k,v])=>(
          <div key={k} style={{padding:"14px 18px",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.06)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{fontSize:14,fontFamily:"var(--font-display)",fontWeight:500}}>{k}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.5)"}}>{v} ›</div>
          </div>
        ))}
      </div>
      <TabBar active="profile"/>
    </div>
  );
};

window.TabBar = function TabBar({active}) {
  const items = [["home","◯"],["voice","●"],["chat","▮"],["profile","◐"]];
  return (
    <div style={{position:"absolute",left:14,right:14,bottom:14,display:"flex",justifyContent:"space-around",alignItems:"center",
      background:"rgba(20,8,30,.7)",backdropFilter:"blur(18px)",border:"1px solid rgba(255,255,255,.12)",borderRadius:9999,padding:"10px 14px",boxShadow:"inset 0 1px 0 rgba(255,255,255,.1)"}}>
      {items.map(([k,g])=>(
        <div key={k} style={{width:36,height:36,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",
          background:active===k?"linear-gradient(135deg,#EA2DD2,#FF7DF3)":"transparent",
          color:active===k?"#fff":"rgba(255,255,255,.55)",fontSize:14}}>{g}</div>
      ))}
    </div>
  );
};
