/* SPITI 2026 — EXPEDITION MANUAL data. Exposes window.MANUAL
   Per-day extended detail + deliverable tables. Concise, scannable, expedition-ready. */
window.MANUAL = {

  /* ---- extended per-day detail, keyed by day no ---- */
  ext: {
    "02": {
      stats:{ dist:"~170 km", saddle:"5–6 h", total:"6–7 h", diff:3, alt:"+2,360 m (350→2,708)", weather:"15–22°C day, 6–10°C night. Clear, low rain risk.", ams:"Low" },
      route:{ detail:"NH5 to Shimla, take the Shimla bypass (avoid the town centre), climb via Kufri–Fagu–Theog to Narkanda.", towns:["Solan","Shimla (bypass)","Kufri","Fagu","Theog","Narkanda"], passes:["—"], road:"Good tarmac, busy near Shimla; some traffic at Kufri.", danger:["Heavy tourist traffic Shimla–Kufri","Slow trucks on climbs — overtake only with sightline"] },
      fuel:{ pumps:["Solan / Shimla outskirts","Theog"], gap:"Pumps frequent on NH5 — no concern today", refuel:"Top up at Theog before Narkanda", emergency:"Not needed — dense pump coverage" },
      food:{ breakfast:"Chandigarh / Solan dhaba en route", lunch:"Theog dhabas — rajma-chawal, parathas", tea:"Narkanda market chai stall", dinner:"Hotel Hatu / homestay — local Himachali thali", dishes:["Siddu (steamed bun)","Madra","Apple anything (orchard country)"] },
      coffee:{ spot:"Hatu Peak road / apple orchard pull-off above Narkanda", why:"Quiet orchard terraces, valley views, first proper Moka brew of the trip" },
      photo:{ sunrise:"—", sunset:"Hatu Peak viewpoint", drone:"Orchard valleys above Narkanda (rural, low risk)", landscape:"Apple orchards, Hatu temple", astro:"Possible from Narkanda if skies clear" },
      stay:{ town:"Narkanda", budget:"Orchard homestay ₹800–1,200", mid:"Hotel Hatu / HPTDC ₹2,000–3,500", rider:"Homestays with covered courtyard parking", parking:"Easy, off-road", cost:"₹800–3,500 / room" },
      health:{ ams:"Low — but the first altitude. No exertion tonight.", hydration:"3 L", accl:"Sleep at 2,700 m eases tomorrow's climb", oxygen:"Not required" }
    },
    "03": {
      stats:{ dist:"~200 km", saddle:"7–8 h", total:"8–9 h", diff:6, alt:"−1,700 then +2,400 (net 3,450)", weather:"12–20°C day, 3–7°C night. Baspa valley can be windy.", ams:"Low–Moderate" },
      route:{ detail:"Drop to the Sutlej at Rampur, follow NH5 to Karcham, then turn up the Baspa valley to Sangla and on to Chitkul, the last village before the Tibet border.", towns:["Kingal","Rampur","Jeori","Karcham","Sangla","Rakcham","Chitkul"], passes:["—"], road:"NH5 good to Karcham; Baspa road narrow with rough patches & blind curves.", danger:["Landslide-prone Jeori–Karcham","Narrow Sangla–Chitkul with drop-offs","Late-day winds in Baspa valley"] },
      fuel:{ pumps:["Rampur (fill to brim)","Karcham (top up)"], gap:"Chitkul has NO fuel — round trip from Karcham ~70 km", refuel:"Brim at Rampur; top at Karcham before turning up Baspa", emergency:"Carry full; first spare-can candidate day" },
      food:{ breakfast:"Narkanda / Rampur dhaba", lunch:"Rampur bazaar — thali", tea:"Sangla market", dinner:"‘Hindustan ka Aakhri Dhaba’, Chitkul", dishes:["Trout (Baspa river)","Rajma-chawal","Buckwheat pancakes"] },
      coffee:{ spot:"Baspa riverbank at Chitkul", why:"Glacial meltwater, prayer flags, wooden village backdrop — iconic brew spot" },
      photo:{ sunrise:"Chitkul village & Baspa river", sunset:"Kamru Fort, Sangla", drone:"Baspa valley & Chitkul (border zone — keep low, away from any army post)", landscape:"Chitkul houses, Rakcham terraces", astro:"Excellent at Chitkul — minimal light pollution" },
      stay:{ town:"Sangla or Chitkul", budget:"Chitkul homestay ₹1,000–1,500", mid:"Banjara/Baspa camps Sangla ₹3,000–5,000", rider:"Sangla riverside camps — open parking", parking:"Open, secure at camps", cost:"₹1,000–5,000" },
      health:{ ams:"Watch at Chitkul (3,450 m) — easy evening, no alcohol.", hydration:"3–4 L", accl:"Sleeping high tonight; descend to Kalpa tomorrow helps", oxygen:"Carry; unlikely needed" }
    },
    "04": {
      stats:{ dist:"~65 km + local", saddle:"3–4 h", total:"Half-day ride + explore", diff:3, alt:"−500 (3,450→2,960)", weather:"14–20°C day, 4–8°C night. Bright, crisp.", ams:"Low (deliberate acclimatization day)" },
      route:{ detail:"Descend to Karcham, climb to Reckong Peo (Powari) for the last reliable fuel, then up to Kalpa. Explore Roghi village & the Kinner Kailash viewpoint.", towns:["Rakcham","Sangla","Karcham","Reckong Peo","Kalpa","Roghi"], passes:["—"], road:"Mostly good; short rough patch Peo–Kalpa.", danger:["Roghi road ‘Suicide Point’ — narrow cliff edge","Afternoon rockfall on shaded sections"] },
      fuel:{ pumps:["Reckong Peo / Powari — CRITICAL FILL"], gap:"Last reliable pump before Kaza (~200 km away)", refuel:"Brim every tank + fill ALL 4 jerry cans at Peo", emergency:"This is the staging fill for the dry Kinnaur–Spiti stretch" },
      food:{ breakfast:"Chitkul / Sangla homestay", lunch:"Reckong Peo market thali", tea:"Kalpa café", dinner:"Kalpa homestay — Himachali/Tibetan", dishes:["Thukpa","Momos","Chilgoza (pine nuts)"] },
      coffee:{ spot:"Kalpa orchard terrace facing Kinner Kailash", why:"Direct view of the 6,050 m massif; golden light on the peaks" },
      photo:{ sunrise:"Kinner Kailash from Kalpa (alpenglow ~6 AM)", sunset:"Roghi viewpoint", drone:"Kalpa orchards & Kinner Kailash ridge", landscape:"Narayan-Nagini temple, Roghi village", astro:"Good from Kalpa terrace" },
      stay:{ town:"Kalpa", budget:"Homestay ₹1,000–1,500", mid:"Hotel/guesthouse w/ view ₹2,500–4,000", rider:"Homestays w/ courtyard parking", parking:"Easy", cost:"₹1,000–4,000" },
      health:{ ams:"Deliberate rest/short day to acclimatize before crossing 3,600 m+.", hydration:"3–4 L", accl:"Climb-high (Chitkul) sleep-low (Kalpa) pattern working in your favour", oxygen:"Not required" }
    },
    "05": {
      stats:{ dist:"~100 km", saddle:"5 h", total:"6–7 h", diff:7, alt:"+665 net (2,960→3,625), big swings", weather:"10–18°C day, 0–5°C night. Cold desert begins, windy.", ams:"Moderate" },
      route:{ detail:"Enter the cold desert: Kalpa → Spillow → Pooh → Khab (Sutlej–Spiti confluence) → the famous Ka hairpin loops → Nako. Scenery turns barren and lunar.", towns:["Spillow","Pooh","Khab","Yangthang","Nako"], passes:["—"], road:"Mixed — rough/broken at Malling Nala (notorious), gravel patches.", danger:["MALLING NALA — loose, shooting-stone zone, cross quickly","Khab–Ka hairpins — steep, gravelly","No fuel, no help for long stretches"] },
      fuel:{ pumps:["None"], gap:"Running on Reckong Peo fill + cans (~100 km today)", refuel:"Monitor small-tank bikes (Duke, ADVs) — share from cans if needed", emergency:"First real ‘dry’ day — jerry cans in play" },
      food:{ breakfast:"Kalpa homestay", lunch:"Pooh / Spillow dhaba — simple dal-rice", tea:"Nako approach dhaba", dinner:"Nako guesthouse kitchen", dishes:["Thukpa","Tingmo","Butter tea"] },
      coffee:{ spot:"Nako Lake under the willows", why:"Still water, mud-brick village, monastery — sheltered from wind" },
      photo:{ sunrise:"Nako Lake reflections", sunset:"Nako village from the monastery", drone:"Khab confluence & Ka hairpins (dramatic)", landscape:"Malling moonscape, Reo Purgyil backdrop", astro:"Superb at Nako — very dark skies" },
      stay:{ town:"Nako", budget:"Homestay ₹800–1,200", mid:"Guesthouse ₹1,800–2,800", rider:"Lakeside homestays — courtyard parking", parking:"Tight village lanes; park at homestay", cost:"₹800–2,800" },
      health:{ ams:"Crossing into 3,600 m+ — headache common. Diamox by now if prescribed.", hydration:"4 L", accl:"First night above 3,600 m; take it slow on arrival", oxygen:"Have cans accessible" }
    },
    "06": {
      stats:{ dist:"~65 km (+Gue detour)", saddle:"3–4 h", total:"5–6 h w/ detours", diff:5, alt:"−345 (3,625→3,280)", weather:"8–17°C day, −1–4°C night. Dry, windy afternoons.", ams:"Moderate" },
      route:{ detail:"Nako → Chango → Sumdo (checkpost) → optional detour to Gue (mummy monk) → Tabo. Enter Spiti proper at Sumdo.", towns:["Chango","Sumdo","Gue (detour)","Tabo"], passes:["—"], road:"Mostly improved tarmac; Gue spur is a steep narrow climb.", danger:["Sumdo checkpost — keep IDs handy","Occasional rockfall Chango–Sumdo"] },
      fuel:{ pumps:["None"], gap:"Still on Peo fill + cans (~65 km)", refuel:"Conserve; Kaza fill is tomorrow", emergency:"Manage reserves — ADVs/Duke first" },
      food:{ breakfast:"Nako homestay", lunch:"Café Kunzum Top / Sonam's, Tabo", tea:"Tabo monastery café", dinner:"Tabo homestay", dishes:["Spiti thali","Momos","Apple pie (Tabo cafés)","Seabuckthorn juice"] },
      coffee:{ spot:"Tabo monastery courtyard wall at golden hour", why:"1,000-year-old mud monastery, soft evening light, calm" },
      photo:{ sunrise:"Tabo cliffs & caves", sunset:"Tabo monastery complex", drone:"Tabo village & Spiti river bend (avoid over monastery)", landscape:"Tabo caves, Gue mummy shrine", astro:"Excellent — Tabo is very dark" },
      stay:{ town:"Tabo", budget:"Monastery guesthouse ₹600–1,000", mid:"Homestay/hotel ₹1,500–2,500", rider:"Monastery guesthouse — large open parking", parking:"Ample, open", cost:"₹600–2,500" },
      health:{ ams:"Settling around 3,300 m — sleeping slightly lower than Nako helps.", hydration:"4 L", accl:"Good consolidation night before Kaza", oxygen:"Cans on standby" }
    },
    "07": {
      stats:{ dist:"~50 km (+Dhankar)", saddle:"3–4 h", total:"5–6 h w/ detour", diff:5, alt:"+370 (3,280→3,650)", weather:"8–16°C day, −2–3°C night. Bright, windy.", ams:"Moderate" },
      route:{ detail:"Tabo → Sichling → detour up to Dhankar monastery (clifftop) + optional Dhankar Lake hike → Kaza, hub of Spiti.", towns:["Sichling","Dhankar (detour)","Schichling","Kaza"], passes:["—"], road:"Good to Kaza; Dhankar spur steep & narrow.", danger:["Dhankar access road — steep switchbacks","Dhankar Lake hike at altitude — pace yourself"] },
      fuel:{ pumps:["KAZA — the ONLY pump in Spiti"], gap:"Fill EVERY tank + ALL cans — next fuel is Manali (~190+ km)", refuel:"This is the most important fill of the trip", emergency:"Top cans before any local loops too" },
      food:{ breakfast:"Tabo homestay", lunch:"Café Sol / Taste of Spiti, Kaza", tea:"Himalayan Café, Kaza", dinner:"Deyzor — best food on the circuit", dishes:["Spiti thali","Chha gosht","Momos","Seabuckthorn / apricot dishes"] },
      coffee:{ spot:"Dhankar Lake viewpoint over the Spiti–Pin confluence", why:"Confluence panorama, monastery on the cliff, dramatic geology" },
      photo:{ sunrise:"Dhankar monastery on the spur", sunset:"Kaza & Spiti river from the highway above town", drone:"Dhankar cliff & confluence (epic — keep clear of monastery)", landscape:"Dhankar fort-monastery, Spiti braided river", astro:"Good from Kaza outskirts" },
      stay:{ town:"Kaza", budget:"Homestay ₹800–1,500", mid:"Hotel Deyzor / Sakya Abode ₹2,500–4,500", rider:"Kaza hotels — secure parking, mechanic in town", parking:"Good; town has a mechanic & spares", cost:"₹800–4,500" },
      health:{ ams:"Kaza 3,650 m is your base for 3 nights — ideal acclimatization hub.", hydration:"4 L", accl:"Stay 3 nights here; loops climb-high/sleep-low", oxygen:"Available in Kaza pharmacies; cans ready" }
    },
    "08": {
      stats:{ dist:"~80 km loop", saddle:"4–5 h", total:"Full day", diff:6, alt:"climbs to 4,587 m, sleep 3,650", weather:"6–15°C day, −3–2°C night. Strong sun, thin air.", ams:"High on the loop (4,500 m+)" },
      route:{ detail:"Acclimatization loop from Kaza: Key Monastery → Kibber → Chicham Bridge (Asia's highest) → Langza (Buddha + fossils) → Hikkim (world's highest post office) → Komic (highest motorable village) → back to Kaza.", towns:["Key","Kibber","Chicham","Langza","Hikkim","Komic"], passes:["—"], road:"Mostly paved but steep climbs; thin air saps power on small bikes.", danger:["Chicham bridge winds","Steep grades to Komic — manage clutch/heat","Rapid altitude gain — AMS watch"] },
      fuel:{ pumps:["Top from Kaza before starting"], gap:"~80 km loop burns more than it looks at altitude", refuel:"Re-top at Kaza on return", emergency:"Loop returns to Kaza — low risk" },
      food:{ breakfast:"Kaza café", lunch:"Homestay lunch Langza / Komic", tea:"Hikkim / Komic", dinner:"Kaza — Café Sol / Deyzor", dishes:["Spiti thali","Local barley","Butter tea","Chhang (optional, not at altitude)"] },
      coffee:{ spot:"Langza Buddha meadow under the Chau Chau Kang Nilda peak", why:"Giant Buddha, open meadow, fossil country, 360° peaks" },
      photo:{ sunrise:"Key Monastery (classic Spiti shot)", sunset:"Langza Buddha with alpenglow", drone:"Key Monastery & Kibber plateau, Chicham gorge (spectacular)", landscape:"Key, Komic monastery, Langza Buddha", astro:"World-class at Komic/Langza — highest dark skies" },
      stay:{ town:"Kaza (return)", budget:"—", mid:"—", rider:"Same Kaza base", parking:"Kaza", cost:"(base night)" },
      health:{ ams:"Highest exposure yet — 4,587 m at Komic. Don't sleep up; descend to Kaza.", hydration:"4–5 L", accl:"Climb-high/sleep-low — this loop is your big acclimatization day", oxygen:"Carry cans on the loop; descend if SpO₂ <80% + symptoms" }
    },
    "09": {
      stats:{ dist:"~110 km round (Pin) or rest", saddle:"0–4 h", total:"Flexible / buffer", diff:4, alt:"Pin ~3,600 m", weather:"6–15°C day, −3–2°C night.", ams:"Moderate" },
      route:{ detail:"Buffer + Pin Valley. Ride to Mudh (Pin Valley NP) via Attargo bridge & Gulling, or keep it a rest/service day in Kaza.", towns:["Attargo","Gulling","Sagnam","Mudh"], passes:["—"], road:"Good to Gulling; rougher to Mudh.", danger:["Pin river crossings after rain","Weather buffer day — re-plan if Kunzum looks bad"] },
      fuel:{ pumps:["Kaza — re-fill cans for the Kunzum dry leg"], gap:"Pin round trip ~110 km — manage from Kaza fill", refuel:"Ensure all cans full before Day 10", emergency:"Stage for the no-fuel Kaza→Manali leg" },
      food:{ breakfast:"Kaza café", lunch:"Mudh homestay", tea:"Gulling", dinner:"Kaza cafés", dishes:["Pin valley local thali","Momos","Thukpa"] },
      coffee:{ spot:"Pin riverbank at Mudh", why:"Green valley contrast, river, end-of-road serenity" },
      photo:{ sunrise:"Mudh village", sunset:"Pin valley meadows", drone:"Pin river & Mudh (national park — check rules)", landscape:"Pin Valley NP, snow leopard country", astro:"Excellent at Mudh" },
      stay:{ town:"Kaza (or Mudh)", budget:"Mudh homestay ₹800–1,200", mid:"Kaza hotel", rider:"Kaza base; service bikes today", parking:"Kaza", cost:"₹800–4,500" },
      health:{ ams:"Rest/buffer aids acclimatization before the high pass.", hydration:"4 L", accl:"Use today to consolidate; service bikes & restock", oxygen:"Top up cans in Kaza" }
    },
    "10": {
      stats:{ dist:"~100 km", saddle:"5–6 h", total:"6–7 h", diff:8, alt:"4,551 m pass, camp 4,300 m", weather:"4–12°C day, −5–0°C night. Cold, possible early snow.", ams:"High" },
      route:{ detail:"The big one. Kaza → Losar → over KUNZUM LA (4,551 m, do the parikrama) → gravel & water crossings down to the Chandratal campsite (~3 km from the lake).", towns:["Rangrik","Losar","Kunzum top","Batal","Chandratal camp"], passes:["KUNZUM LA 4,551 m"], road:"Paved to Losar; rough gravel, sand & water crossings after Kunzum.", danger:["Kunzum can close with early snow — check daily","Water crossings best before noon (lower melt)","No fuel, no network past Losar"] },
      fuel:{ pumps:["NONE — left Kaza full + cans"], gap:"No fuel until Manali (~190 km from Kaza)", refuel:"Confirm every tank brimmed + cans before leaving Kaza", emergency:"Cans are the lifeline now; ration ADVs/Duke" },
      food:{ breakfast:"Kaza", lunch:"Losar dhaba (last hot food)", tea:"Batal — Chacha-Chachi Dhaba", dinner:"Chandratal campsite mess", dishes:["Maggi (Batal institution)","Dal-rice","Hot soup"] },
      coffee:{ spot:"Chandratal (the ‘Moon Lake’) at dusk", why:"Crescent glacial lake, total silence, the brew of the trip" },
      photo:{ sunrise:"Chandratal (next morning)", sunset:"Chandratal & surrounding peaks", drone:"Kunzum prayer flags & Chandratal (wind & cold — short flights)", landscape:"Kunzum stupas, Chandratal", astro:"Legendary — Milky Way over Chandratal (dress for sub-zero)" },
      stay:{ town:"Chandratal", budget:"Camp dorm tent ₹1,200–1,800", mid:"Camp w/ attached ₹2,500–4,000 (incl. meals)", rider:"Parasol/Bharatpur camps — open parking on gravel", parking:"Open gravel lot ~3 km from lake", cost:"₹1,200–4,000 (often incl. dinner+breakfast)" },
      health:{ ams:"Sleeping at 4,300 m after a 4,551 m pass — highest sleep of the trip. Hydrate, no exertion, watch each other.", hydration:"4–5 L", accl:"Hard night; if anyone deteriorates, descend toward Batal", oxygen:"Cans essential tonight; oximeter checks before sleep" }
    },
    "11": {
      stats:{ dist:"~120 km", saddle:"6–7 h", total:"7–8 h", diff:9, alt:"−2,250 (4,300→2,050)", weather:"4–14°C high, warmer at Manali. Crossings cold AM.", ams:"Decreasing (descending)" },
      route:{ detail:"The toughest miles: Chandratal → Batal → Chhatru → Gramphu (boulders & river crossings) → Atal Tunnel → Manali. Hot showers tonight.", towns:["Batal","Chhatru","Gramphu","Atal Tunnel (south)","Solang","Manali"], passes:["(old Rohtang bypassed via Atal Tunnel)"], road:"Batal–Gramphu is the worst surface of the trip: boulders, slush, water crossings. Smooth after Atal Tunnel.", danger:["Multiple water crossings Batal–Gramphu — cross before noon","Boulder sections — line choice critical","Tunnel: no stopping, maintain speed/lights"] },
      fuel:{ pumps:["Gramphu has none — first reliable fuel at Manali"], gap:"Reserves + cans until Manali", refuel:"Fill the moment you reach Manali; drain remaining cans into tanks", emergency:"If short, Himalayan (best range) lends to small tanks" },
      food:{ breakfast:"Chandratal camp", lunch:"Chacha-Chachi, Batal / Chhatru dhabas", tea:"Gramphu / Solang", dinner:"Manali — Old Manali cafés", dishes:["Maggi & chai (Chhatru)","Trout","Israeli/continental (Old Manali)"] },
      coffee:{ spot:"Chandratal sunrise before breaking camp", why:"First light on the lake — make it before the convoy rolls" },
      photo:{ sunrise:"Chandratal at dawn", sunset:"Solang valley / Manali", drone:"Chandratal AM, Chhatru river plain (windy)", landscape:"Water crossings (action shots), Atal Tunnel portal", astro:"Last dark-sky chance at Chandratal pre-dawn" },
      stay:{ town:"Manali", budget:"Old Manali guesthouse ₹1,000–1,800", mid:"Hotel ₹2,500–5,000", rider:"Hotels w/ secure parking, service centres nearby", parking:"Hotel parking; bike service available", cost:"₹1,000–5,000" },
      health:{ ams:"Symptoms ease fast on descent. Rehydrate, rest knees/wrists after the rough section.", hydration:"4 L", accl:"Back to thicker air — sleep well", oxygen:"No longer needed below Atal Tunnel" }
    },
    "13": {
      stats:{ dist:"~310 km", saddle:"7–8 h", total:"8–9 h", diff:5, alt:"−1,700 (2,050→350)", weather:"Warm in plains 25–32°C. Highway.", ams:"None" },
      route:{ detail:"Long highway haul: Manali → Mandi → Sundernagar → Bilaspur → Swarghat → Chandigarh. Start at first light, keep the convoy tight.", towns:["Kullu","Mandi","Sundernagar","Bilaspur","Swarghat","Kiratpur","Chandigarh"], passes:["—"], road:"Good 4-lane mostly; some single-lane near Mandi tunnels.", danger:["Heavy truck traffic Mandi–Bilaspur","Fatigue on the long haul — rotate the lead, regular breaks"] },
      fuel:{ pumps:["Kullu","Mandi","Bilaspur","Swarghat — frequent"], gap:"None — dense NH coverage", refuel:"Relax; top up at Mandi & Bilaspur", emergency:"Not required" },
      food:{ breakfast:"Manali / Kullu", lunch:"Mandi / Sundernagar dhaba", tea:"Bilaspur / Swarghat", dinner:"Chandigarh", dishes:["Dham (Himachali feast) if available at Mandi","Highway North-Indian"] },
      coffee:{ spot:"Beas riverside pull-off near Kullu (early)", why:"Last river brew before the plains; relaxed start" },
      photo:{ sunrise:"Beas valley near Kullu", sunset:"—", drone:"Beas river (rural stretches only)", landscape:"Pandoh dam, Beas gorge", astro:"—" },
      stay:{ town:"Chandigarh", budget:"Budget hotel ₹1,200–2,000", mid:"Hotel ₹2,500–4,500", rider:"Depot-side hotel near Safexpress", parking:"Hotel parking", cost:"₹1,200–4,500" },
      health:{ ams:"None — oxygen-rich plains. Watch highway fatigue instead.", hydration:"3 L + electrolytes", accl:"—", oxygen:"—" }
    }
  },

  /* ---- DELIVERABLE TABLES ---- */

  // luggage distribution (detailed per rider)
  luggage: [
    { who:"Rajas", bike:"Dominar 400 (good highway range, big frame)", role:"LEAD",
      items:["Toolbox #1 (primary)","Chain lube + cleaning kit","Cookset + mugs + gas canister","Oxygen can ×1","5 L fuel can","Group dry rations","Dominar spares & tool roll"],
      why:"Stable big bike carries kitchen + a toolbox up front" },
    { who:"Yogesh", bike:"KTM ADV 390 (luggage-friendly ADV)", role:"Medic-1",
      items:["First-aid / trauma kit (primary)","Puncture / tubeless repair kit","Camp stove + gas","Multi-charger + extension board","5 L fuel can","KTM spares (shared w/ Pranav)"],
      why:"ADV racks suit the first-aid + repair station" },
    { who:"Pranav", bike:"KTM ADV 390 (luggage-friendly ADV)", role:"Brew-1",
      items:["Spare tubes (both sizes, primary)","Tow rope + tie-down straps","Moka pot + coffee + grinder","Oxygen can ×1","5 L fuel can","KTM spares (shared w/ Yogesh)"],
      why:"Coffee kit + recovery gear; KTM spares paired with Yogesh" },
    { who:"Praful", bike:"Himalayan 450 (best range, plush ride)", role:"Camera/Med-2",
      items:["Tyre inflator #2","DSLR #2 + lenses (padded)","GROUP MEDICINE box","Power bank ×2 + water filter","5 L fuel can","Himalayan spares & tools"],
      why:"Best-range bike carries med box + a camera (smooth ride protects glass)" },
    { who:"Shoaib", bike:"Duke 390 (agile, light)", role:"SWEEP / Nav",
      items:["Toolbox #2 + Tyre inflator #1","DSLR #1 + DRONE (padded)","Duct tape · zip ties · M-seal · wire","Duke spares + fuses/bulbs","Lead navigation (offline maps)","No fuel can — keep light for sweep duty"],
      why:"Sweep rider keeps a toolbox + inflator + drone; stays light to assist stragglers" }
  ],

  // daily route segmentation (for offline maps / GPX)
  segments: [
    ["01","Chandigarh (local)","—","Collect bikes, prep","City"],
    ["02","Chandigarh → Narkanda","~170 km","Shimla bypass–Kufri–Theog","Good NH"],
    ["03","Narkanda → Chitkul","~200 km","Rampur–Karcham–Sangla","Narrow/landslide"],
    ["04","Chitkul → Kalpa","~65 km","Karcham–Reckong Peo","Good + short rough"],
    ["05","Kalpa → Nako","~100 km","Pooh–Khab–Ka loops","Rough (Malling)"],
    ["06","Nako → Tabo","~65 km","Chango–Sumdo–(Gue)","Mixed"],
    ["07","Tabo → Kaza","~50 km","Sichling–(Dhankar)","Good + spur"],
    ["08","Kaza high-village loop","~80 km","Key–Kibber–Chicham–Langza–Hikkim–Komic","Paved + steep"],
    ["09","Kaza → Pin (Mudh) → Kaza","~110 km","Attargo–Gulling–Mudh","Good + rough"],
    ["10","Kaza → Chandratal","~100 km","Losar–Kunzum La–Batal","Rough/crossings"],
    ["11","Chandratal → Manali","~120 km","Batal–Gramphu–Atal Tunnel","Toughest surface"],
    ["12","Manali (local)","—","Rest / service / buffer","City"],
    ["13","Manali → Chandigarh","~310 km","Mandi–Bilaspur–Swarghat","Highway"],
    ["14","Chandigarh (local)","—","Ship bikes (Safexpress)","City"],
    ["15","Chandigarh → fly home","—","Trip ends","—"]
  ]
};
