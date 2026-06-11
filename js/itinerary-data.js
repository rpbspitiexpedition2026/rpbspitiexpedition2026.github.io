/* SPITI 2026 — itinerary content. Exposes window.ITIN */
window.ITIN = {
  crew: [
    { nm: "Rajas",  bike: "Bajaj Dominar 400",
      carry: [ {t:"Toolbox #1",key:1}, {t:"Spare fuel can (5 L)"}, {t:"Chain lube + cleaning kit"},
               {t:"Cookset, mugs & gas canister"}, {t:"Oxygen can"}, {t:"Dominar spares & tool roll"} ] },
    { nm: "Yogesh", bike: "KTM Adventure 390",
      carry: [ {t:"First-aid kit",key:1}, {t:"Puncture / tubeless repair kit"}, {t:"Camp stove + gas"},
               {t:"Multi-charger + extension board"}, {t:"Spare fuel can (5 L)"}, {t:"KTM spares (shared w/ Pranav)"} ] },
    { nm: "Pranav", bike: "KTM Adventure 390",
      carry: [ {t:"Spare tubes (both sizes)",key:1}, {t:"Tow rope + tie-down straps"}, {t:"Moka pot + coffee + grinder"},
               {t:"Spare fuel can (5 L)"}, {t:"Oxygen can"}, {t:"KTM spares (shared w/ Yogesh)"} ] },
    { nm: "Praful", bike: "RE Himalayan 450",
      carry: [ {t:"Tyre inflator #2",key:1}, {t:"DSLR #2 + lenses"}, {t:"Group MEDICINE box"},
               {t:"Power bank ×2 + water filter"}, {t:"Spare fuel can (5 L)"}, {t:"Himalayan spares & tools"} ] },
    { nm: "Shoaib", bike: "KTM Duke 390",
      carry: [ {t:"Toolbox #2 + Tyre inflator #1",key:1}, {t:"DSLR #1 + Drone",key:1}, {t:"Duct tape · zip ties · M-seal · wire"},
               {t:"Duke spares & fuses/bulbs"}, {t:"Lead navigation (offline maps)",key:1}, {t:"Convoy SWEEP rider"} ] }
  ],

  // who holds the redundant pair of each critical shared item
  kit: [
    { item:"Mechanic Toolbox",   a:"Rajas (lead)",      b:"Shoaib (sweep)",  note:"One forward, one at the back of the convoy" },
    { item:"Tyre Inflator",      a:"Shoaib",            b:"Praful",          note:"Two pumps — punctures are the #1 issue up here" },
    { item:"Puncture / Tube kit",a:"Yogesh (repair)",   b:"Pranav (tubes)",  note:"Repair kit + spare tubes split across two bikes" },
    { item:"First-aid + Meds",   a:"Yogesh (first-aid)",b:"Praful (med box)",note:"Trauma kit & medicine box on separate bikes" },
    { item:"Spare Fuel (5 L ea)",a:"Rajas · Yogesh",    b:"Pranav · Praful", note:"4 cans total = ~20 L reserve for the dry legs" },
    { item:"Oxygen cans",        a:"Yogesh · Pranav",   b:"Rajas",           note:"Quick relief on the high passes" },
    { item:"Moka pot + Stove",   a:"Pranav (pot)",      b:"Yogesh (stove)",  note:"Coffee crew — brew kit balanced across two" },
    { item:"Cameras + Drone",    a:"Shoaib (DSLR+drone)",b:"Praful (DSLR)",  note:"Two shooters; drone only where legal & safe" }
  ],

  days: [
    { no:"01", date:"SAT · 19 SEP", from:"Land Chandigarh", to:"Collect Bikes", rest:true,
      dist:"Local", time:"—", road:"City", alt:"350 m",
      rows:[
        ["note","Fly into Chandigarh. Collect all 5 bikes from <b>Safexpress</b>, inspect on arrival — tyres, brakes, chain, oil, levers, any transit damage (photograph)."],
        ["fuel","Fill all tanks. Buy 4 × 5 L jerry cans, oxygen cans, fuel funnel/filter."],
        ["eat","Sector 26 / Sector 35 — load up; last big-city meal."],
        ["stay","Chandigarh hotel near the freight depot."],
        ["note","Buy a <b>BSNL</b> SIM, withdraw plenty of cash, photocopy all documents ×3, fit & test luggage."]
      ]},
    { no:"02", date:"SUN · 20 SEP", from:"Chandigarh", to:"Narkanda", dist:"~170 km", time:"6–7 h", road:"Good NH + ghats", alt:"2,708 m",
      rows:[
        ["note","Ease in via the Shimla bypass (Kufri / Fagu). First real altitude — keep the pace gentle."],
        ["fuel","Top up at Shimla / Theog."],
        ["eat","Dhabas at Theog; <b>Hotel Hatu</b> area, Narkanda."],
        ["stay","Narkanda — hotel or apple-orchard homestay."],
        ["brew","Hatu Peak viewpoint / orchard pull-off — first Moka brew."]
      ]},
    { no:"03", date:"MON · 21 SEP", from:"Narkanda", to:"Sangla / Chitkul", dist:"~200 km", time:"8 h", road:"Narrow, landslide zones", alt:"3,450 m",
      rows:[
        ["note","Drop to the Sutlej at Rampur, then climb the Baspa valley via Karcham. <b>Chitkul is the last village before the border.</b>"],
        ["fuel","Fill at <b>Rampur</b>; top at Karcham."],
        ["eat","Rampur bazaar lunch; <b>‘Hindustan ka Aakhri Dhaba’</b>, Chitkul."],
        ["stay","Sangla riverside camp or Chitkul homestay."],
        ["brew","Baspa riverbank at Chitkul — glacial water, big skies."]
      ]},
    { no:"04", date:"TUE · 22 SEP", from:"Chitkul", to:"Kalpa", dist:"~65 km", time:"3–4 h + explore", road:"Good", alt:"2,960 m", rest:true,
      rows:[
        ["note","Short, deliberate day to <b>acclimatize</b>. Kinner-Kailash views; visit Roghi village & ‘Suicide Point’."],
        ["fuel","<b>Reckong Peo (Powari)</b> — fill to the brim + all cans. Last good pump before Kaza."],
        ["eat","Peo market; cafés in Kalpa."],
        ["stay","Kalpa — homestay / hotel with the mountain view."],
        ["brew","Kalpa orchard terrace facing Kinner Kailash."]
      ]},
    { no:"05", date:"WED · 23 SEP", from:"Kalpa", to:"Nako", dist:"~100 km", time:"5 h", road:"Rough patches (Malling)", alt:"3,625 m",
      rows:[
        ["note","Enter the cold desert. Khab confluence + the famous Ka hairpins. Scenery turns lunar."],
        ["fuel","No pumps — running on Peo fill + cans."],
        ["eat","Dhabas at Spillow / Pooh; Nako guesthouse kitchen."],
        ["stay","Nako — lakeside homestay."],
        ["brew","Nako Lake — willows & still water."]
      ]},
    { no:"06", date:"THU · 24 SEP", from:"Nako", to:"Tabo", dist:"~65 km", time:"3–4 h", road:"Mixed", alt:"3,280 m",
      rows:[
        ["note","Optional detour to <b>Gue</b> (the 500-year-old naturally-mummified monk). Tabo Monastery is 1,000+ years old — the ‘Ajanta of the Himalayas’."],
        ["fuel","No pumps — manage reserves."],
        ["eat","<b>Café Kunzum Top</b> / Sonam's Café, Tabo."],
        ["stay","Tabo — monastery guesthouse or homestay."],
        ["brew","Tabo monastery courtyard, golden hour."]
      ]},
    { no:"07", date:"FRI · 25 SEP", from:"Tabo", to:"Kaza", dist:"~50 km + detours", time:"3–4 h", road:"Good", alt:"3,650 m",
      rows:[
        ["note","Detour up to <b>Dhankar</b> monastery (clifftop) & the hike to Dhankar Lake. Roll into Kaza, the hub of Spiti."],
        ["fuel","<b>KAZA PUMP — fill EVERY tank + ALL cans.</b> Last fuel before Manali."],
        ["eat","<b>Café Sol · Taste of Spiti · Deyzor · Himalayan Café</b>, Kaza."],
        ["stay","Kaza — homestay / hotel."],
        ["brew","Dhankar Lake viewpoint."]
      ]},
    { no:"08", date:"SAT · 26 SEP", from:"Kaza", to:"High-Village Loop", dist:"~80 km loop", time:"Full day", road:"Good + climbs", alt:"4,587 m", rest:true,
      rows:[
        ["note","Acclimatization loop: <b>Key Monastery → Kibber → Chicham Bridge</b> (Asia's highest) → <b>Langza</b> (Buddha + fossils) → <b>Hikkim</b> (world's highest post office, 4,400 m) → <b>Komic</b> (highest motorable village, 4,587 m)."],
        ["fuel","Top from Kaza before you start; loop burns more than it looks."],
        ["eat","Homestay lunch in Langza / Komic; back to Kaza for dinner."],
        ["brew","Langza Buddha meadow under the peaks."],
        ["note","Post cards home from <b>Hikkim</b>. Buy fossils only responsibly."]
      ]},
    { no:"09", date:"SUN · 27 SEP", from:"Kaza", to:"Pin Valley / Buffer", dist:"~110 km r/t", time:"Flexible", road:"Good", alt:"3,600 m", rest:true,
      rows:[
        ["note","<b>Buffer + Pin Valley.</b> Ride out to <b>Mudh</b> (Pin Valley NP) or keep it a rest day. Service bikes with Kaza's mechanic, sort any niggles, re-stock."],
        ["fuel","Kaza pump — re-fill cans for tomorrow's dry leg."],
        ["eat","Mudh homestay; Kaza cafés."],
        ["brew","Pin riverbank, Mudh."],
        ["note","Weather buffer — if Kunzum/Chandratal looks bad, this is the day we re-plan."]
      ]},
    { no:"10", date:"MON · 28 SEP", from:"Kaza", to:"Chandratal", dist:"~100 km", time:"5–6 h", road:"Rough after Kunzum", alt:"4,551 m pass", 
      rows:[
        ["note","Big one. Over <b>Kunzum La (4,551 m)</b> — do the parikrama, then gravel & water-crossings down to the <b>Chandratal</b> campsite (~3 km from the lake)."],
        ["fuel","<b>Started from Kaza full + cans. NO fuel now until Manali.</b>"],
        ["eat","Losar dhaba; <b>Chacha-Chachi Dhaba, Batal</b> (legendary)."],
        ["stay","Chandratal campsite — tents, sub-zero night, dress for it."],
        ["brew","Chandratal — the ‘Moon Lake’ at dusk."]
      ]},
    { no:"11", date:"TUE · 29 SEP", from:"Chandratal", to:"Manali", dist:"~120 km", time:"6–7 h", road:"Toughest: Batal–Gramphu", alt:"→ 2,050 m",
      rows:[
        ["note","The hard miles: Batal → Gramphu is boulders & river crossings. Then <b>Atal Tunnel</b> and a smooth glide into Manali. Hot showers tonight."],
        ["fuel","Reserves + cans until Gramphu/Manali. Fill the moment you hit Manali."],
        ["eat","Chacha-Chachi, Batal; Chhatru dhabas; Manali."],
        ["stay","Manali — proper hotel, real beds."],
        ["brew","Chandratal sunrise before you break camp."]
      ]},
    { no:"12", date:"WED · 30 SEP", from:"Manali", to:"Rest / Buffer", dist:"Local", time:"—", road:"City", alt:"2,050 m", rest:true,
      rows:[
        ["note","<b>Rest & repair day.</b> Full bike service, laundry, sort photos/drone footage. Also the weather buffer for any delay on the high passes."],
        ["fuel","Service stations available."],
        ["eat","Old Manali cafés — earn the carbs."],
        ["brew","Café day off — let someone else pour."],
        ["note","Confirm the Safexpress return slot in Chandigarh."]
      ]},
    { no:"13", date:"THU · 01 OCT", from:"Manali", to:"Chandigarh", dist:"~310 km", time:"8–9 h", road:"Highway", alt:"→ 350 m",
      rows:[
        ["note","Long highway haul down via Mandi, Bilaspur & Swarghat. Start at first light, keep the convoy tight."],
        ["fuel","Plenty of pumps on the NH — relax."],
        ["eat","Mandi / Sundernagar dhabas."],
        ["stay","Chandigarh — same depot-side hotel."],
        ["note","Decompress; back to oxygen-rich air."]
      ]},
    { no:"14", date:"FRI · 02 OCT", from:"Chandigarh", to:"Ship Bikes Home", dist:"Local", time:"—", road:"City", alt:"350 m", rest:true,
      rows:[
        ["note","Wash the bikes, then hand them to <b>Safexpress</b> for Pune."],
        ["fuel","<b>Drain tanks to courier minimum;</b> empty & wrap the jerry cans."],
        ["note","Remove loose accessories & luggage, note odometer, <b>photograph every side</b> for the condition record, keep the consignment receipt + transit insurance."],
        ["eat","Celebration dinner — you earned it."],
        ["stay","Chandigarh."]
      ]},
    { no:"15", date:"SAT · 03 OCT", from:"Chandigarh", to:"Fly Home", rest:true, dist:"—", time:"—", road:"—", alt:"350 m",
      rows:[
        ["note","Depart Chandigarh. Trip ends. ~1,350 km, one Kunzum, zero regrets."]
      ]}
  ],

  fuelChain: [
    { nm:"Chandigarh", km:"FILL", gap:"" },
    { nm:"Shimla", km:"~115 km", gap:"" },
    { nm:"Rampur", km:"~130 km", gap:"" },
    { nm:"Reckong Peo", km:"~120 km", gap:"FILL + CANS" },
    { nm:"Kaza", km:"~200 km", gap:"ONLY PUMP IN SPITI" },
    { nm:"Manali", km:"~190 km", gap:"NO FUEL EN ROUTE" },
    { nm:"Chandigarh", km:"~310 km", gap:"highway pumps" }
  ],

  eat: [
    ["Theog / Narkanda","Highway dhabas + Hotel Hatu — hot parathas on day 2."],
    ["Chitkul","‘Hindustan ka Aakhri Dhaba’ — the last dhaba in India, must-do."],
    ["Reckong Peo","Market thalis; stock dry rations here."],
    ["Tabo","Café Kunzum Top & Sonam's — soups, momos, apple pie."],
    ["Kaza","Café Sol, Taste of Spiti, Deyzor, Himalayan Café — best food on the circuit."],
    ["Langza / Komic","Homestay kitchens — Spiti thali, butter tea, seabuckthorn juice."],
    ["Batal","Chacha-Chachi Dhaba — Maggi, dal-rice & legendary hospitality."]
  ],
  brew: [
    ["Chitkul","Baspa riverbank, glacier meltwater."],
    ["Nako","Willows around the lake."],
    ["Dhankar","Lake viewpoint over the Spiti–Pin confluence."],
    ["Langza","Buddha statue meadow, peaks all around."],
    ["Kunzum La","4,551 m prayer flags — quick, careful brew."],
    ["Chandratal","The Moon Lake at dusk & dawn — the brew of the trip."]
  ],

  packing: {
    gear: ["<b>Helmet</b> (+ visor / pinlock)","<b>Riding jacket</b> with armour","Riding pants / knee + elbow guards",
      "<b>Riding boots</b> + waterproof gloves","Thermal base layers ×2","Fleece + <b>down jacket</b>","Rain jacket + rain pants",
      "Balaclava / neck gaiter","Woolen cap & warm socks ×3","UV sunglasses","Quick-dry tees ×4 (the trip tees!)","Trekking pants + sandals"],
    misc: ["Headlamp + spare batteries","Hydration bladder / 2 bottles","<b>Sunscreen SPF 50+</b> & SPF lip balm","Wet wipes + toilet paper",
      "Microfiber towel","Multitool / knife","Lighter + matches","Power bank + cables","Sleeping-bag liner","Ear plugs","Dry-fruit & energy snacks","Electrolyte sachets ×10","Reusable trash bag (pack it out)"],
    bike: ["Tyres — tread + correct pressure","Brake pads front & rear","Chain slack + clean + <b>lube</b>","Engine oil & coolant level",
      "Clutch / throttle cables (+ spares)","All lights + indicators","Battery + terminals","<b>Spare levers</b> (clutch/brake)","Fuses & bulbs",
      "Air filter cleaned","Jerry can mounts secured","Tool roll on every bike","Luggage straps / bungees + waterproof bags"],
    docs: ["Driving licence (original + 3 copies)","RC, Insurance, PUC — each bike","Govt photo ID + copies (checkposts)","<b>Safexpress consignment receipts</b>","Passport-size photos ×4","Cash — plenty (ATMs fail up there)","Emergency-contact + blood-group card","Trip insurance details"]
  },

  meds: {
    alt: ["<b>Acetazolamide (Diamox 250 mg)</b> — AMS prevention; start 24 h before Kalpa/Nako (Rx — brief from doctor)",
      "<b>Dexamethasone</b> — emergency severe AMS / HACE (Rx)","<b>Nifedipine</b> — for HAPE (Rx)",
      "<b>Pulse oximeter</b> — monitor SpO₂ daily","Portable <b>oxygen cans ×4</b>","Note: descend if symptoms worsen — no exceptions"],
    gut: ["ORS / Electral sachets ×10","Loperamide (Imodium) — diarrhoea","Ondansetron — nausea / vomiting",
      "Pantoprazole / antacid (Digene)","Norflox-TZ — traveller's tummy (Rx)","Avomine — motion sickness"],
    gen: ["Paracetamol (Crocin) — fever / pain","Combiflam / Ibuprofen (use sparingly at altitude)","Azithromycin — antibiotic (Rx)",
      "Cetirizine — allergy","Strepsils + Vicks + decongestant","Personal prescription meds (labelled)"],
    dress: ["Band-aids assorted + sterile gauze","Crepe bandage + cotton roll + surgical tape","Antiseptic — Betadine / Savlon + wipes",
      "Soframycin / Burnol cream","Volini / Moov spray","Thermometer · scissors · tweezers · gloves","Sunscreen SPF 50+ · moisturizer · eye drops"]
  },

  info: [
    ["⛁","Permits & ID","Indian nationals generally <b>don't need an Inner Line Permit</b> for the Kinnaur–Spiti circuit — but carry original + copies of a govt photo ID for the checkposts (Jangi, Sumdo, etc). Foreign nationals <b>do</b> need an ILP (apply at Reckong Peo / Kaza). Rules change — verify a week before."],
    ["☎","Network & Maps","<b>BSNL</b> (postpaid) works best; Jio/Airtel are patchy-to-none past Reckong Peo. Dead zones: Nako, Kunzum, Chandratal, Batal stretch. <b>Download full offline maps</b> Chandigarh→Manali. Tell family which days you'll be off-grid."],
    ["₹","Cash & ATMs","Carry plenty of <b>cash</b>. ATMs only at Reckong Peo & Kaza — often empty or offline. UPI rarely works up high. Settle homestays in cash."],
    ["❄","Weather & Buffers","Late Sept = cold nights (sub-zero at Chandratal/Komic) and a real risk of <b>early snow closing Kunzum</b>. We hold buffer days (09 & 12) — check road status daily, ask dhaba-walas, and re-route rather than push a bad pass."],
    ["▲","Altitude Discipline","Acclimatize on the Kinnaur-first climb. Hydrate 3–4 L/day, skip alcohol the first days, climb-high/sleep-low. Watch for AMS — headache, nausea, breathlessness. Oximeter < 80% + symptoms = <b>descend</b>."],
    ["⛍","Roads & Convoy","Daylight riding only. Landslide zones Karcham–Nako; water crossings Batal–Gramphu. Keep the convoy together — <b>Rajas leads, Shoaib sweeps</b>. Agree hand signals & regroup points each morning."],
    ["✚","Emergencies","Hospitals: District Hospital Reckong Peo, CHC Kaza, then Manali. Emergency <b>112</b>. Keep a printed contact + blood-group sheet on each rider. Note police/SDM checkposts as bail-out points."],
    ["⛟","Bike Shipping (Safexpress)","Pune→Chandigarh: book early, <b>drain fuel to courier minimum</b>, secure/disconnect battery if asked, remove loose accessories, note odometer + photograph all sides, keep the receipt & transit insurance. Pre-book the return slot before you leave Manali."]
  ]
};
