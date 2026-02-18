interface Faq {
  question: string;
  answer: string;
}

interface TemplateContent {
  features: string[];
  heading: string;
  paragraphs: string[];
  faqs: Faq[];
}

const content: Record<string, TemplateContent> = {
  kopekontrakt: {
    features: [
      "Fullständiga uppgifter om säljare och köpare",
      "Detaljerad beskrivning av föremålet",
      "Köpeskilling och betalningsvillkor",
      "Val av betalningssätt (kontant, bank, Swish)",
      "Överlåtelsedatum och plats",
      "Utrymme för övriga villkor",
      "Signaturrader för båda parter",
      "Standardvillkor om befintligt skick",
    ],
    heading: "När behöver du ett köpekontrakt?",
    paragraphs: [
      "Ett köpekontrakt är viktigt att upprätta vid köp och försäljning av lös egendom mellan privatpersoner. Det skyddar både säljare och köpare genom att dokumentera villkoren för affären. Oavsett om det gäller en bil, båt, möbel eller annan värdefull egendom är ett skriftligt avtal alltid att rekommendera.",
      "Köpekontraktet fungerar som ett bevis på att en överenskommelse har träffats mellan parterna. Det specificerar vad som sålts, till vilket pris och under vilka villkor. Vid eventuella tvister kan köpekontraktet användas som bevisning.",
      "Vår mall är utformad för svenska förhållanden och följer gängse praxis för köpekontrakt avseende lös egendom. Den innehåller standardvillkor om att försäljningen sker i befintligt skick, men ger också utrymme att lägga till egna villkor vid behov.",
    ],
    faqs: [
      { question: "Är ett köpekontrakt juridiskt bindande?", answer: "Ja, ett köpekontrakt är juridiskt bindande så snart båda parter har undertecknat det. Det regleras av köplagen och fungerar som bevisning vid eventuella tvister." },
      { question: "Vad innebär befintligt skick i ett köpekontrakt?", answer: "Befintligt skick innebär att köparen accepterar föremålet i det skick det är vid köptillfället. Säljaren ansvarar dock fortfarande för dolda fel och för att uppgifterna i kontraktet stämmer." },
      { question: "Behöver ett köpekontrakt bevittnas?", answer: "Nej, ett köpekontrakt för lös egendom behöver inte bevittnas för att vara giltigt. Det räcker med bådas underskrifter. Vittnen kan dock stärka bevisvärdet." },
      { question: "Kan jag ångra ett köpekontrakt?", answer: "Ett undertecknat köpekontrakt är bindande. Ångerrätt enligt distansavtalslagen gäller bara vid köp från företag på distans, inte vid privata köp." },
    ],
  },

  "kopekontrakt-bil": {
    features: [
      "Uppgifter om säljare och köpare med personnummer",
      "Registreringsnummer och fordonsidentitet",
      "Mätarställning och årsmodell",
      "Besiktningsstatus och datum",
      "Köpeskilling och betalningssätt",
      "Villkor om befintligt skick",
      "Garantivillkor om tillämpligt",
      "Signaturrader för båda parter",
    ],
    heading: "Varför behöver du ett köpekontrakt för bil?",
    paragraphs: [
      "Vid köp eller försäljning av bil mellan privatpersoner är ett skriftligt köpekontrakt avgörande. Det dokumenterar fordonets skick, mätarställning och överenskomna villkor och skyddar både köpare och säljare vid eventuella tvister.",
      "Vårt köpekontrakt för bil innehåller specifika fält för fordonsuppgifter som registreringsnummer, chassinummer, mätarställning och besiktningsstatus. Det ger en tydlig bild av fordonets tillstånd vid försäljningstillfället.",
      "Kontraktet reglerar även betalningsvillkor, överlåtelsetidpunkt och eventuella garantier. Det är utformat enligt svensk praxis och kan användas vid all privat bilförsäljning.",
    ],
    faqs: [
      { question: "Vad ska ett köpekontrakt för bil innehålla?", answer: "Det ska innehålla uppgifter om säljare och köpare, registreringsnummer, chassinummer, mätarställning, årsmodell, besiktningsstatus, köpeskilling, betalningssätt och villkor om befintligt skick." },
      { question: "Måste jag skriva köpekontrakt vid bilförsäljning?", answer: "Det är inte ett lagkrav, men starkt rekommenderat. Utan köpekontrakt saknar du bevis på köpevillkoren, vilket kan bli problematiskt vid tvister om fordonets skick eller betalning." },
      { question: "Vem ansvarar för dolda fel vid privat bilförsäljning?", answer: "Vid privat försäljning i befintligt skick ansvarar säljaren för dolda fel som fanns vid köptillfället och som inte kunnat upptäckas vid en rimlig undersökning." },
      { question: "Ska mätarställningen vara med i köpekontraktet?", answer: "Ja, alltid. Mätarställningen dokumenterar bilens skick vid försäljningen och fungerar som skydd om mätaren skulle manipuleras i efterhand." },
    ],
  },

  "kopekontrakt-bat": {
    features: [
      "Uppgifter om säljare och köpare",
      "Båttyp, tillverkare och modell",
      "HIN-nummer och registreringsnummer",
      "Motor och motoruppgifter",
      "Tillbehör som ingår i köpet",
      "Köpeskilling och betalningsvillkor",
      "Villkor om befintligt skick",
      "Signaturrader för båda parter",
    ],
    heading: "Varför behöver du ett köpekontrakt för båt?",
    paragraphs: [
      "Båtar kan vara betydande investeringar och ett skriftligt köpekontrakt är viktigt för att skydda båda parter. Kontraktet dokumenterar båtens skick, utrustning och överenskomna villkor.",
      "Vår mall innehåller specifika fält för båtuppgifter som HIN-nummer, motortyp, motortimmar och en detaljerad lista över tillbehör som ingår. Detta minimerar risken för missförstånd efter köpet.",
      "Kontraktet är anpassat för svenska förhållanden och kan användas för segelbåtar, motorbåtar, jollar och andra fritidsbåtar.",
    ],
    faqs: [
      { question: "Behöver jag ett köpekontrakt vid båtköp?", answer: "Ja, det är starkt rekommenderat. Ett köpekontrakt dokumenterar båtens skick, utrustning och villkoren för affären. Det är särskilt viktigt eftersom båtar sällan har samma typ av registrering som bilar." },
      { question: "Vad är HIN-nummer på en båt?", answer: "HIN (Hull Identification Number) är båtens unika identifieringsnummer, liknande chassinumret på en bil. Det finns instansat på båtens akterspegel och bör alltid anges i köpekontraktet." },
      { question: "Ska tillbehör specificeras i köpekontraktet?", answer: "Ja, alla tillbehör som ingår i köpet bör listas detaljerat. Det gäller exempelvis motor, segelduk, elektronik, säkerhetsutrustning och trailer. Det som inte nämns antas inte ingå." },
    ],
  },

  "kopekontrakt-fastighet": {
    features: [
      "Fastighetsbeteckning och adress",
      "Uppgifter om säljare och köpare",
      "Köpeskilling och handpenning",
      "Tillträdesdag och slutlikvid",
      "Låneförbehåll och besiktningsförbehåll",
      "Servitut och nyttjanderätter",
      "Tillbehör som ingår",
      "Signaturrader för båda parter",
    ],
    heading: "Varför behöver du ett köpekontrakt för fastighet?",
    paragraphs: [
      "Köp av fastighet är ofta den största affären i en persons liv. Ett korrekt utformat köpekontrakt är ett juridiskt krav enligt jordabalken och måste vara skriftligt för att vara giltigt.",
      "Vårt köpekontrakt för fastighet innehåller alla nödvändiga uppgifter: fastighetsbeteckning, köpeskilling, handpenning, tillträdesdag samt viktiga förbehåll som låneförbehåll och besiktningsförbehåll.",
      "Mallen täcker även servitut, nyttjanderätter och tillbehör. Observera att fastighetsköp ofta kräver juridisk rådgivning och att köpekontraktet ska registreras hos Lantmäteriet.",
    ],
    faqs: [
      { question: "Måste köpekontrakt för fastighet vara skriftligt?", answer: "Ja, det är ett absolut krav enligt jordabalken. Muntliga avtal om fastighetsköp är ogiltiga. Kontraktet måste vara skriftligt och undertecknat av både köpare och säljare." },
      { question: "Vad är skillnaden mellan köpekontrakt och köpebrev?", answer: "Köpekontraktet upprättas först och innehåller alla villkor. Köpebrevet upprättas vid tillträdet och bekräftar att betalning skett. Köpebrevet används för lagfart hos Lantmäteriet." },
      { question: "Vad innebär ett besiktningsförbehåll?", answer: "Ett besiktningsförbehåll ger köparen rätt att besiktiga fastigheten och frånträda köpet om allvarliga brister upptäcks. Förbehållet ska ha en tydlig tidsfrist och anges i köpekontraktet." },
      { question: "Vad kostar lagfart på en fastighet?", answer: "Stämpelskatten för lagfart är 1,5 % av köpeskillingen för privatpersoner och 4,25 % för juridiska personer. Därtill tillkommer en expeditionsavgift på 825 kr." },
    ],
  },

  hyreskontrakt: {
    features: [
      "Uppgifter om hyresvärd och hyresgäst",
      "Beskrivning av hyresobjektet",
      "Hyresbelopp och betalningsvillkor",
      "Deposition och säkerhet",
      "Hyresperiod och uppsägningstid",
      "Regler för underhåll och skötsel",
      "Villkor för andrahandsuthyrning",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett hyreskontrakt?",
    paragraphs: [
      "Ett hyreskontrakt behövs när du hyr ut eller hyr en bostad. Det reglerar rättigheter och skyldigheter för både hyresvärd och hyresgäst och ger ett juridiskt skydd åt båda parter.",
      "Kontraktet specificerar hyresbeloppet, betalningsdatum, deposition, uppsägningstid och andra viktiga villkor. Det bör även innehålla regler kring underhåll, husdjur och eventuella tillägg som ingår i hyran.",
      "Vår mall följer hyreslagen och är anpassad för svenska bostadsuthyrningar. Den kan användas för uthyrning av lägenheter, hus, rum och andra bostäder.",
    ],
    faqs: [
      { question: "Vad ska ett hyreskontrakt innehålla?", answer: "Det ska innehålla uppgifter om hyresvärd och hyresgäst, hyresobjektets adress, hyresbelopp, betalningsdatum, deposition, hyresperiod, uppsägningstid och villkor för underhåll." },
      { question: "Hur lång är uppsägningstiden för en hyresgäst?", answer: "En hyresgäst har alltid rätt till tre månaders uppsägningstid vid tillsvidareavtal, oavsett vad kontraktet säger. Vid tidsbestämda avtal upphör hyresförhållandet vid avtalstidens slut." },
      { question: "Får hyresvärden ta ut deposition?", answer: "Ja, det är vanligt att hyresvärden tar en deposition som säkerhet. Depositionen ska återbetalas efter hyrestidens slut, med avdrag för eventuella skador utöver normalt slitage." },
      { question: "Kan hyresvärden höja hyran under avtalsperioden?", answer: "Vid tillsvidareavtal kan hyresvärden förhandla om hyreshöjning med skälig uppsägningstid. Hyran ska vara skälig enligt hyreslagen. Vid tidsbestämt avtal gäller den avtalade hyran." },
    ],
  },

  andrahandsuthyrning: {
    features: [
      "Uppgifter om förstahandshyresgäst och andrahandshyresgäst",
      "Referens till förstahandskontrakt",
      "Hyresbelopp och betalningsvillkor",
      "Hyresperiod med start- och slutdatum",
      "Möblerad eller omöblerad uthyrning",
      "Villkor för uppsägning",
      "Regler för bostadens skötsel",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett andrahandskontrakt?",
    paragraphs: [
      "Ett andrahandskontrakt behövs när du hyr ut din lägenhet i andra hand. Det reglerar förhållandet mellan dig som förstahandshyresgäst och den som hyr i andra hand.",
      "Tänk på att du behöver tillstånd från din hyresvärd eller bostadsrättsförening innan du hyr ut i andra hand. Kontraktet bör tydligt ange hyresperiod, hyresbelopp och vad som ingår.",
      "Vår mall är anpassad för svenska andrahandsuthyrningar och innehåller alla nödvändiga uppgifter för att båda parter ska känna sig trygga.",
    ],
    faqs: [
      { question: "Behöver jag tillstånd för att hyra ut i andra hand?", answer: "Ja, du behöver tillstånd från din hyresvärd (hyresrätt) eller bostadsrättsförening (bostadsrätt). Uthyrning utan tillstånd kan leda till att du förlorar ditt förstahandskontrakt." },
      { question: "Hur mycket får jag ta i hyra vid andrahandsuthyrning?", answer: "Du får ta ut en skälig hyra. För hyresrätter är det normalt din egen hyra plus ett rimligt påslag för möbler (max 15 %). För bostadsrätter utgår man från bostadens bruksvärde." },
      { question: "Hur lång tid får jag hyra ut i andra hand?", answer: "Det finns ingen generell tidsgräns i lagen, men tillståndet ges ofta för en begränsad period. Vanliga skäl för andrahandsuthyrning är studier, arbete på annan ort eller provboende med partner." },
    ],
  },

  "uppsagning-hyresavtal": {
    features: [
      "Uppgifter om hyresgäst",
      "Adress till hyresobjektet",
      "Datum för uppsägning",
      "Uppsägningstid och sista dag",
      "Referens till hyresavtal",
      "Utrymme för meddelande till hyresvärd",
      "Bekräftelse av avflyttningsdag",
      "Signaturrad för hyresgäst",
    ],
    heading: "Hur säger du upp ditt hyresavtal?",
    paragraphs: [
      "En uppsägning av hyresavtal bör alltid göras skriftligt för att ha bevis på att uppsägningen har skett. Det skyddar dig som hyresgäst och säkerställer att uppsägningstiden börjar löpa från rätt datum.",
      "Uppsägningstiden för en bostadshyresgäst är normalt tre månader. Uppsägningen måste vara skriftlig om hyresvärden begär det, men vi rekommenderar alltid skriftlig uppsägning.",
      "Vår mall innehåller alla nödvändiga uppgifter och är enkel att fylla i. Skicka uppsägningen till din hyresvärd via rekommenderat brev eller be om en skriftlig bekräftelse.",
    ],
    faqs: [
      { question: "Måste uppsägning av hyresavtal vara skriftlig?", answer: "Hyresvärden kan kräva skriftlig uppsägning, och vi rekommenderar alltid det. En skriftlig uppsägning ger dig bevis på att uppsägningen skett och vilket datum den gjordes." },
      { question: "När börjar uppsägningstiden löpa?", answer: "Uppsägningstiden börjar löpa vid nästa månadsskifte efter att uppsägningen kommit hyresvärden till handa. Säger du upp den 15 mars börjar uppsägningstiden den 1 april." },
      { question: "Kan hyresvärden neka min uppsägning?", answer: "Nej, hyresvärden kan inte neka en uppsägning från hyresgästen. Du har alltid rätt att säga upp ditt hyresavtal med tre månaders uppsägningstid." },
    ],
  },

  inneboendekontrakt: {
    features: [
      "Uppgifter om uthyrare och inneboende",
      "Beskrivning av rummet och gemensamma utrymmen",
      "Hyresbelopp och vad som ingår",
      "Regler för gemensamma utrymmen",
      "Husdjurspolicy",
      "Uppsägningstid",
      "Ordningsregler och trivselregler",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett inneboendekontrakt?",
    paragraphs: [
      "Ett inneboendekontrakt behövs när du hyr ut ett rum i din bostad till en inneboende. Till skillnad från andrahandsuthyrning behåller du som uthyrare kvar tillgång till bostaden.",
      "Kontraktet reglerar hyran, vilka gemensamma utrymmen som får användas, ordningsregler och uppsägningstid. Det är viktigt att vara tydlig med vad som ingår i hyran, exempelvis el, vatten och internet.",
      "Om du hyr ut som inneboende i en hyresrätt behöver du normalt inte tillstånd från hyresvärden, men det kan vara klokt att informera dem. Vår mall täcker alla viktiga punkter för ett tryggt inneboendeförhållande.",
    ],
    faqs: [
      { question: "Vad är skillnaden mellan inneboende och andrahand?", answer: "Vid inneboende bor du kvar i bostaden och hyr ut ett rum. Vid andrahandsuthyrning flyttar du ut och hyr ut hela bostaden. Inneboende kräver normalt inte tillstånd från hyresvärden." },
      { question: "Behöver jag tillstånd för att ha inneboende?", answer: "I en hyresrätt behöver du normalt inte tillstånd, men du bör informera hyresvärden. I en bostadsrätt bör du kontrollera föreningens stadgar. Uthyrningen får inte vara till men för hyresvärden." },
      { question: "Vilken uppsägningstid gäller för inneboende?", answer: "Det finns ingen lagstadgad uppsägningstid för inneboende, så det som avtalats gäller. Vi rekommenderar minst en månads uppsägningstid för båda parter." },
    ],
  },

  anstallningsavtal: {
    features: [
      "Uppgifter om arbetsgivare och arbetstagare",
      "Befattning och arbetsuppgifter",
      "Lön och förmåner",
      "Arbetstid och semester",
      "Provanställning och tillsvidareanställning",
      "Uppsägningstid",
      "Sekretessklausul",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett anställningsavtal?",
    paragraphs: [
      "Ett anställningsavtal ska upprättas vid varje nyanställning. Enligt lagen om anställningsskydd (LAS) ska arbetsgivaren senast en månad efter arbetstagaren börjat informera skriftligt om anställningsvillkoren.",
      "Anställningsavtalet reglerar lön, arbetstid, semester, uppsägningstid och andra villkor. Det skyddar både arbetsgivare och arbetstagare och förebygger tvister.",
      "Vår mall är anpassad för svenska arbetsrättsliga förhållanden och innehåller alla nödvändiga fält för ett komplett anställningsavtal.",
    ],
    faqs: [
      { question: "Är ett anställningsavtal obligatoriskt?", answer: "Arbetsgivaren måste senast en månad efter anställningens start skriftligt informera om anställningsvillkoren. Ett formellt anställningsavtal är det bästa sättet att uppfylla detta krav." },
      { question: "Vad ska ett anställningsavtal innehålla?", answer: "Det ska innehålla arbetsgivarens och arbetstagarens namn, arbetsplats, befattning, anställningsform, tillträdesdag, lön, arbetstid, semester och uppsägningstid." },
      { question: "Vad gäller vid provanställning?", answer: "En provanställning får vara högst sex månader. Under provanställningen kan båda parter avbryta anställningen utan uppsägningstid, men arbetsgivaren ska meddela minst två veckor i förväg." },
      { question: "Kan man ha muntligt anställningsavtal?", answer: "Ja, muntliga avtal är giltiga men svåra att bevisa. Arbetsgivaren har dock alltid skyldighet att lämna skriftlig information om anställningsvillkoren." },
    ],
  },

  konsultavtal: {
    features: [
      "Uppgifter om uppdragsgivare och konsult",
      "Detaljerad uppdragsbeskrivning",
      "Arvode och betalningsvillkor",
      "Uppdragsperiod och tidsplan",
      "Sekretessklausul",
      "Immateriella rättigheter (IP)",
      "Ansvar och försäkring",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett konsultavtal?",
    paragraphs: [
      "Ett konsultavtal behövs när du anlitar en extern konsult eller själv tar uppdrag som konsult. Det reglerar uppdraget, arvodet, leveranstider och vem som äger resultatet.",
      "Till skillnad från ett anställningsavtal innebär ett konsultavtal att konsulten är självständig och ansvarar för sin egen skatt och försäkring. Avtalet bör tydligt avgränsa uppdraget.",
      "Vår mall innehåller även sekretessklausul och reglering av immateriella rättigheter, vilket är särskilt viktigt vid utvecklingsuppdrag, design och andra kreativa projekt.",
    ],
    faqs: [
      { question: "Vad är skillnaden mellan konsultavtal och anställningsavtal?", answer: "En konsult är självständig uppdragstagare och ansvarar för egen skatt, moms och försäkring. En anställd har arbetsrättsligt skydd genom LAS, sjuklön och semester. Konsultavtal ger mer flexibilitet men mindre trygghet." },
      { question: "Vem äger resultatet av konsultuppdraget?", answer: "Det beror på vad som avtalats. Utan avtal äger konsulten normalt de immateriella rättigheterna. Vi rekommenderar att alltid reglera detta i konsultavtalet." },
      { question: "Kan ett konsultavtal omklassificeras som anställning?", answer: "Ja, Skatteverket kan omklassificera ett konsultförhållande till anställning om konsulten i praktiken arbetar som en anställd. Faktorer som beaktas är arbetsledning, arbetstid och om konsulten har andra uppdragsgivare." },
    ],
  },

  sekretessavtal: {
    features: [
      "Uppgifter om båda parter",
      "Definition av konfidentiell information",
      "Undantag från sekretess",
      "Sekretessperiod",
      "Hantering av information vid avtalets slut",
      "Konsekvenser vid brott mot avtalet",
      "Jurisdiktion och tvistlösning",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett sekretessavtal (NDA)?",
    paragraphs: [
      "Ett sekretessavtal (NDA - Non-Disclosure Agreement) behövs när du delar känslig affärsinformation med en annan part. Det kan vara inför ett potentiellt samarbete, vid förhandlingar eller när du anlitar underleverantörer.",
      "Sekretessavtalet definierar vilken information som är konfidentiell, hur den får användas och vad som händer om avtalet bryts. Det är ett viktigt verktyg för att skydda affärshemligheter och kunduppgifter.",
      "Vår mall kan användas som ensidigt (en part delar information) eller ömsesidigt (båda parter delar information) sekretessavtal.",
    ],
    faqs: [
      { question: "Vad är ett NDA?", answer: "NDA står för Non-Disclosure Agreement, det engelska namnet för sekretessavtal. Det är ett juridiskt bindande avtal där parterna förbinder sig att inte avslöja konfidentiell information." },
      { question: "Hur länge gäller ett sekretessavtal?", answer: "Sekretessperioden bestäms i avtalet och är vanligen 2-5 år. Vissa typer av information, som företagshemligheter, kan skyddas under längre tid eller tills informationen blir allmänt känd." },
      { question: "Vad händer om någon bryter mot sekretessavtalet?", answer: "Den som bryter mot avtalet kan bli skadeståndsskyldig. Avtalet bör specificera konsekvenserna vid brott, exempelvis vite eller skadestånd. Brott kan även utgöra brott mot lagen om företagshemligheter." },
    ],
  },

  aktieagaravtal: {
    features: [
      "Uppgifter om bolaget och aktieägare",
      "Ägarfördelning och aktieinnehav",
      "Beslutsordning och styrelserepresentation",
      "Överlåtelsebegränsningar (drag-along, tag-along)",
      "Utdelningspolicy",
      "Konkurrensklausul",
      "Exitklausuler och värdering",
      "Signaturrader för alla aktieägare",
    ],
    heading: "När behöver du ett aktieägaravtal?",
    paragraphs: [
      "Ett aktieägaravtal behövs när två eller fler personer äger ett aktiebolag tillsammans. Det reglerar förhållandet mellan delägarna och kompletterar bolagsordningen med mer detaljerade bestämmelser.",
      "Avtalet hanterar viktiga frågor som beslutsfattande, vad som händer om en delägare vill sälja sina aktier, hur bolaget värderas och vilka skyldigheter delägarna har gentemot varandra.",
      "Utan ett aktieägaravtal kan det uppstå allvarliga konflikter mellan delägare. Vår mall täcker de viktigaste punkterna och ger en stabil grund för ert samarbete.",
    ],
    faqs: [
      { question: "Vad är skillnaden mellan aktieägaravtal och bolagsordning?", answer: "Bolagsordningen är ett offentligt dokument som registreras hos Bolagsverket. Aktieägaravtalet är ett privat avtal mellan delägarna med mer detaljerade regler som kompletterar bolagsordningen." },
      { question: "Vad betyder drag-along och tag-along?", answer: "Drag-along ger majoritetsägaren rätt att tvinga övriga att sälja sina aktier vid en försäljning. Tag-along ger minoritetsägare rätt att sälja sina aktier på samma villkor om majoritetsägaren säljer." },
      { question: "Behöver alla aktieägare skriva under aktieägaravtalet?", answer: "Avtalet binder bara de som undertecknat det. Det är starkt rekommenderat att alla aktieägare skriver under, annars gäller inte avtalets begränsningar för dem som inte är med." },
    ],
  },

  samarbetsavtal: {
    features: [
      "Uppgifter om samarbetsparterna",
      "Samarbetets syfte och omfattning",
      "Ansvarsfördelning mellan parterna",
      "Intäktsfördelning",
      "Immateriella rättigheter",
      "Sekretessklausul",
      "Avtalstid och uppsägning",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett samarbetsavtal?",
    paragraphs: [
      "Ett samarbetsavtal behövs när två eller fler företag eller parter ska genomföra ett gemensamt projekt eller samarbete. Det klargör vem som ansvarar för vad, hur kostnader och intäkter fördelas och vad som händer om samarbetet upphör.",
      "Avtalet bör tydligt definiera samarbetets syfte, varje parts ansvar och bidrag, samt hur eventuella tvister ska lösas. Utan ett skriftligt avtal finns risk för missförstånd och konflikter.",
      "Vår mall är flexibel och kan anpassas för olika typer av samarbeten, från gemensamma projekt till långsiktiga partnerskap.",
    ],
    faqs: [
      { question: "Vad är skillnaden mellan samarbetsavtal och konsultavtal?", answer: "Ett samarbetsavtal reglerar ett partnerskap där parterna bidrar gemensamt, medan ett konsultavtal handlar om att en part utför arbete åt den andra mot ersättning." },
      { question: "Behöver vi ett samarbetsavtal om vi redan har en muntlig överenskommelse?", answer: "Ja, ett skriftligt avtal rekommenderas starkt. Det förtydligar förväntningar, ansvar och ekonomi, och minskar risken för konflikter. Muntliga avtal är svåra att bevisa." },
      { question: "Hur fördelas intäkter i ett samarbetsavtal?", answer: "Intäktsfördelningen bestäms av parterna och ska framgå tydligt av avtalet. Den kan baseras på ägarandelar, arbetsinsats, investering eller annan överenskommen modell." },
    ],
  },

  fullmakt: {
    features: [
      "Uppgifter om fullmaktsgivare och ombud",
      "Val av fullmaktstyp (generell, begränsad, bank, process)",
      "Specificering av befogenheter",
      "Giltighetstid",
      "Villkor för återkallelse",
      "Utrymme för särskilda begränsningar",
      "Vittnesrader vid behov",
      "Signaturrad för fullmaktsgivare",
    ],
    heading: "När behöver du en fullmakt?",
    paragraphs: [
      "En fullmakt ger en person rätt att agera i ditt namn. Det kan handla om att sköta bankärenden, företräda dig vid en fastighetsaffär eller hantera myndighetsärenden.",
      "Det finns olika typer av fullmakter: generell fullmakt ger breda befogenheter, medan en begränsad fullmakt är avgränsad till specifika handlingar. Bankfullmakt används för bankärenden och processfullmakt ger rätt att föra din talan i domstol.",
      "Vår mall låter dig välja typ av fullmakt och specificera exakt vilka befogenheter ombudet ska ha. Tänk på att vara så specifik som möjligt för att undvika missbruk.",
    ],
    faqs: [
      { question: "Vad är skillnaden mellan generell och begränsad fullmakt?", answer: "En generell fullmakt ger ombudet breda befogenheter att agera i ditt namn i de flesta ärenden. En begränsad fullmakt gäller bara för specifika handlingar, exempelvis att sälja en bil eller sköta ett bankärende." },
      { question: "Hur återkallar jag en fullmakt?", answer: "Du kan när som helst återkalla en fullmakt genom att meddela ombudet skriftligt. Om fullmakten har visats för tredje part bör du även meddela dem. Förstör alla kopior av fullmakten." },
      { question: "Behöver en fullmakt bevittnas?", answer: "En vanlig fullmakt behöver inte bevittnas, men det kan stärka dess trovärdighet. Banker och myndigheter kan ha egna krav. En framtidsfullmakt måste dock bevittnas av två vittnen." },
      { question: "Kan jag ge fullmakt till vem som helst?", answer: "Ja, du kan ge fullmakt till vilken myndig person som helst som du litar på. Välj någon du har fullt förtroende för, särskilt vid generella fullmakter med breda befogenheter." },
    ],
  },

  framtidsfullmakt: {
    features: [
      "Uppgifter om fullmaktsgivare och fullmaktshavare",
      "Vilka angelägenheter fullmakten omfattar",
      "Ekonomiska och personliga angelägenheter",
      "Ersättningsfullmaktshavare",
      "Villkor för ikraftträdande",
      "Granskning och tillsyn",
      "Formkrav enligt lag (2017:310)",
      "Vittnessignaturer (krav för giltighet)",
    ],
    heading: "Vad är en framtidsfullmakt?",
    paragraphs: [
      "En framtidsfullmakt är ett juridiskt dokument som träder i kraft om du på grund av sjukdom, psykisk störning eller liknande inte längre kan ta hand om dina angelägenheter. Den regleras av lagen (2017:310) om framtidsfullmakter.",
      "Till skillnad från en vanlig fullmakt träder framtidsfullmakten inte i kraft omedelbart utan först när du inte längre kan hantera dina ärenden. Den ger dig möjlighet att själv bestämma vem som ska företräda dig i framtiden.",
      "En framtidsfullmakt måste vara skriftlig och bevittnad av två vittnen för att vara giltig. Fullmaktsgivaren måste vara 18 år och vid sina sinnens fulla bruk när fullmakten skrivs.",
    ],
    faqs: [
      { question: "Vad är skillnaden mellan fullmakt och framtidsfullmakt?", answer: "En vanlig fullmakt gäller omedelbart och upphör om fullmaktsgivaren förlorar sin beslutsförmåga. En framtidsfullmakt träder i kraft först när fullmaktsgivaren inte längre kan ta hand om sina angelägenheter." },
      { question: "Vem kan vara vittne till en framtidsfullmakt?", answer: "Vittnena måste vara minst 15 år och förstå vad de bevittnar. Fullmaktshavaren, dennes make/maka, sambo, syskon eller barn får inte vara vittnen." },
      { question: "Kan en framtidsfullmakt återkallas?", answer: "Ja, fullmaktsgivaren kan återkalla framtidsfullmakten så länge hen har sin beslutsförmåga. Återkallelsen bör ske skriftligt. När fullmakten väl har trätt i kraft kan den bara upphävas av domstol." },
      { question: "Vem bestämmer när framtidsfullmakten träder i kraft?", answer: "Fullmaktshavaren bedömer när fullmaktsgivaren inte längre kan sköta sina angelägenheter. Fullmaktshavaren kan också begära att tingsrätten prövar om fullmakten har trätt i kraft." },
    ],
  },

  testamente: {
    features: [
      "Uppgifter om testatorn (den som upprättar testamentet)",
      "Fördelning av kvarlåtenskap",
      "Universella förordnanden och legat",
      "Enskild egendom-klausul",
      "Villkor och önskemål",
      "Formkrav enligt ärvdabalken",
      "Vittnessignaturer (krav för giltighet)",
      "Utrymme för särskilda önskemål",
    ],
    heading: "Varför behöver du ett testamente?",
    paragraphs: [
      "Ett testamente behövs om du vill att din kvarlåtenskap ska fördelas annorlunda än vad arvsordningen i ärvdabalken anger. Utan testamente fördelas arvet enligt lag, vilket inte alltid stämmer med dina önskemål.",
      "Med ett testamente kan du till exempel ge arv till en sambo, vän, organisation eller välgörenhet. Du kan också bestämma att arv ska vara enskild egendom, vilket skyddar arvtagaren vid en eventuell skilsmässa.",
      "Ett testamente måste uppfylla formkraven i ärvdabalken: det ska vara skriftligt, undertecknat och bevittnat av två vittnen som är närvarande samtidigt. Vår mall uppfyller dessa formkrav.",
    ],
    faqs: [
      { question: "Kan jag göra mina barn arvlösa med ett testamente?", answer: "Nej, bröstarvingar (barn) har alltid rätt till sin laglott, som är hälften av vad de skulle fått utan testamente. Resten av kvarlåtenskapen kan du fördela fritt genom testamente." },
      { question: "Måste ett testamente bevittnas?", answer: "Ja, ett testamente måste undertecknas i närvaro av två vittnen som också ska skriva under. Vittnena behöver inte veta vad testamentet innehåller, bara att det är ett testamente." },
      { question: "Kan jag ändra mitt testamente?", answer: "Ja, du kan ändra eller återkalla ditt testamente när som helst genom att upprätta ett nytt testamente eller förstöra det gamla. Det senaste giltiga testamentet gäller." },
      { question: "Var ska jag förvara mitt testamente?", answer: "Förvara originalet på en säker plats, exempelvis i ett bankfack. Informera någon du litar på om var det finns. Det finns inget officiellt testamentsregister i Sverige." },
    ],
  },

  skuldebrev: {
    features: [
      "Uppgifter om långivare och låntagare",
      "Lånebelopp och utbetalningsdatum",
      "Ränta (fast eller rörlig)",
      "Amorteringsplan och betalningsdatum",
      "Förfallodatum",
      "Villkor vid sen betalning",
      "Uppsägningsvillkor",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett skuldebrev?",
    paragraphs: [
      "Ett skuldebrev behövs när du lånar ut eller lånar pengar av en privatperson. Det dokumenterar lånet och villkoren, vilket skyddar både långivare och låntagare vid eventuella tvister.",
      "Skuldebrevet bör tydligt ange lånebelopp, ränta, återbetalningsplan och vad som händer om låntagaren inte betalar i tid. Det fungerar också som bevisning om ärendet skulle hamna i domstol.",
      "Vår mall kan användas för privatlån mellan familjemedlemmar, vänner eller andra privatpersoner. Den stöder både räntefria och räntebelagda lån med valfri amorteringsplan.",
    ],
    faqs: [
      { question: "Vad är skillnaden mellan enkelt och löpande skuldebrev?", answer: "Ett enkelt skuldebrev är ställt till en specifik person och kan inte överlåtas fritt. Ett löpande skuldebrev kan överlåtas till en ny borgenär. Vår mall är ett enkelt skuldebrev, vilket är vanligast vid privatlån." },
      { question: "Måste ett privatlån ha ränta?", answer: "Nej, räntefria lån är tillåtna. Tänk dock på att Skatteverket kan beräkna en fiktiv ränteförmån om lånet är räntefritt och betydande. Det bör framgå tydligt i skuldebrevet om lånet är räntefritt." },
      { question: "Vad händer om låntagaren inte betalar?", answer: "Med ett skuldebrev kan du ansöka om betalningsföreläggande hos Kronofogden utan att gå till domstol. Skuldebrevet fungerar som bevis på skulden och villkoren." },
    ],
  },

  gavobrev: {
    features: [
      "Uppgifter om givare och mottagare",
      "Beskrivning av gåvan",
      "Gåvans värde",
      "Villkor om enskild egendom",
      "Villkor om nyttjanderätt",
      "Överlåtelsedatum",
      "Vittnesrader (krävs för fastigheter)",
      "Signaturrader för givare och mottagare",
    ],
    heading: "När behöver du ett gåvobrev?",
    paragraphs: [
      "Ett gåvobrev behövs vid gåvor av större värde, och är ett juridiskt krav vid gåva av fastighet. Det dokumenterar vad som getts, till vem och under vilka villkor.",
      "Med ett gåvobrev kan du ange att gåvan ska vara mottagarens enskilda egendom, vilket innebär att den inte ingår i en eventuell bodelning. Detta är särskilt viktigt vid gåvor till barn och barnbarn.",
      "Vår mall kan användas för gåvor av pengar, fastigheter, bostadsrätter, fordon och annan egendom. Vid gåva av fastighet krävs att gåvobrevet registreras hos Lantmäteriet.",
    ],
    faqs: [
      { question: "Behöver jag ett gåvobrev för pengar?", answer: "Det är inte ett krav, men rekommenderas vid större belopp. Gåvobrevet dokumenterar att det rör sig om en gåva (inte ett lån) och kan ange att pengarna ska vara enskild egendom." },
      { question: "Är gåvor skattefria i Sverige?", answer: "Ja, gåvoskatten avskaffades 2005. Gåvor mellan privatpersoner är skattefria oavsett belopp. Gåvor från arbetsgivare kan dock beskattas som inkomst." },
      { question: "Vad innebär enskild egendom i ett gåvobrev?", answer: "Enskild egendom innebär att gåvan inte ingår i en bodelning om mottagaren separerar eller skiljer sig. Villkoret måste anges i gåvobrevet och kan inte läggas till i efterhand." },
      { question: "Måste gåvobrev bevittnas?", answer: "Vid gåva av fastighet måste gåvobrevet bevittnas av två vittnen. För annan egendom behövs inga vittnen, men det kan stärka gåvobrevets bevisvärde." },
    ],
  },

  samboavtal: {
    features: [
      "Uppgifter om båda samborna",
      "Definition av samboegendom",
      "Undantag från sambolagen",
      "Egendom som inte ska delas",
      "Reglering av gemensam bostad",
      "Reglering av bohag",
      "Datum för avtalets ikraftträdande",
      "Signaturrader för båda samborna",
    ],
    heading: "När behöver du ett samboavtal?",
    paragraphs: [
      "Ett samboavtal behövs om du och din sambo vill reglera vad som händer med er gemensamma egendom om ni separerar. Utan samboavtal gäller sambolagen, som innebär att gemensam bostad och bohag delas lika.",
      "Med ett samboavtal kan ni helt eller delvis avtala bort sambolagens regler om bodelning. Det är särskilt viktigt om en av er har köpt bostaden före förhållandet eller om ni har gjort ojämna ekonomiska insatser.",
      "Samboavtalet ska vara skriftligt och undertecknat av båda samborna. Det behöver inte registreras men vi rekommenderar att ni sparar varsitt original.",
    ],
    faqs: [
      { question: "Vad händer utan samboavtal vid separation?", answer: "Utan samboavtal gäller sambolagen: gemensam bostad och gemensamt bohag delas lika vid bodelning, oavsett vem som betalat. Annan egendom som sparande, bilar och aktier delas inte." },
      { question: "Kan vi skriva samboavtal efter att vi flyttat ihop?", answer: "Ja, ett samboavtal kan skrivas när som helst under samboförhållandet. Det behöver inte skrivas innan ni flyttar ihop." },
      { question: "Behöver samboavtalet registreras?", answer: "Nej, ett samboavtal behöver inte registreras för att vara giltigt. Det räcker med att det är skriftligt och undertecknat av båda samborna. Spara varsitt original." },
    ],
  },

  aktenskapsforord: {
    features: [
      "Uppgifter om båda makarna",
      "Definition av enskild egendom",
      "Definition av giftorättsgods",
      "Specifik egendom som undantas",
      "Framtida egendom",
      "Avkastning av enskild egendom",
      "Registrering hos Skatteverket",
      "Signaturrader för båda makarna",
    ],
    heading: "När behöver du ett äktenskapsförord?",
    paragraphs: [
      "Ett äktenskapsförord behövs om ni vill reglera vilken egendom som ska vara enskild respektive giftorättsgods. Utan äktenskapsförord är all egendom giftorättsgods och delas lika vid en skilsmässa.",
      "Äktenskapsförord är särskilt viktigt om en av er driver företag, äger fastigheter eller har fått arv med villkor om enskild egendom. Det kan skrivas före eller under äktenskapet.",
      "Ett äktenskapsförord måste vara skriftligt, undertecknat av båda makarna och registrerat hos Skatteverket för att vara giltigt. Vår mall uppfyller alla formkrav.",
    ],
    faqs: [
      { question: "Måste äktenskapsförord registreras?", answer: "Ja, ett äktenskapsförord måste registreras hos Skatteverket för att vara giltigt. Båda makarna ska underteckna och skicka in originalhandlingen." },
      { question: "Kan vi skriva äktenskapsförord efter vigseln?", answer: "Ja, ett äktenskapsförord kan upprättas både före och under äktenskapet. Det kan också ändras eller upphävas genom ett nytt äktenskapsförord." },
      { question: "Kan ett äktenskapsförord ogiltigförklaras?", answer: "Ja, om förordet är oskäligt kan det jämkas av domstol. Det kan också ogiltigförklaras om det undertecknats under tvång eller om formkraven inte uppfyllts." },
      { question: "Skyddar äktenskapsförord mot makes skulder?", answer: "Nej, ett äktenskapsförord skyddar inte direkt mot en makes skulder. Däremot innebär det att din enskilda egendom inte ingår i bodelningen, vilket ger ett indirekt skydd." },
    ],
  },

  bodelningsavtal: {
    features: [
      "Uppgifter om båda parterna",
      "Förteckning av tillgångar",
      "Förteckning av skulder",
      "Värdering av egendom",
      "Fördelning av tillgångar",
      "Bodelningslikvid om tillämpligt",
      "Övertagande av lån",
      "Signaturrader för båda parterna",
    ],
    heading: "När behöver du ett bodelningsavtal?",
    paragraphs: [
      "Ett bodelningsavtal behövs vid skilsmässa eller separation för att fördela tillgångar och skulder mellan parterna. Det dokumenterar vad var och en får och ger ett juridiskt avslut på de ekonomiska förhållandena.",
      "Bodelningsavtalet bör innehålla en fullständig förteckning av alla tillgångar och skulder, hur de har värderats och hur de fördelas. Om fördelningen inte blir exakt lika kan en bodelningslikvid betalas.",
      "Vid skilsmässa ska bodelning göras enligt äktenskapsbalken. Vid separation mellan sambor görs bodelning av gemensam bostad och bohag enligt sambolagen. Vår mall fungerar för båda situationerna.",
    ],
    faqs: [
      { question: "Måste man göra bodelning vid skilsmässa?", answer: "Ja, vid äktenskapsskillnad ska en bodelning göras enligt äktenskapsbalken. Makarna kan dock komma överens om att helt eller delvis avstå från bodelning om båda är nöjda med fördelningen." },
      { question: "Hur värderas egendom vid bodelning?", answer: "Egendom värderas till marknadsvärde vid den tidpunkt bodelningen görs. Skulder dras av från tillgångarna. Om parterna inte kan enas om värderingen kan en oberoende värdering behövas." },
      { question: "Kan man göra bodelning utan advokat?", answer: "Ja, om ni är överens kan ni göra bodelning själva med hjälp av ett bodelningsavtal. Om ni inte kan enas kan tingsrätten utse en bodelningsförrättare." },
    ],
  },
};

const defaultContent: TemplateContent = {
  features: [
    "Tydlig struktur och layout",
    "Alla nödvändiga uppgifter",
    "Utrymme för villkor och bestämmelser",
    "Signaturrader för alla parter",
    "Anpassad för svenska förhållanden",
    "Enkel att fylla i online",
    "Ladda ner som PDF",
    "Gratis att använda",
  ],
  heading: "Varför använda vår mall?",
  paragraphs: [
    "Vår mall är utformad av juridiskt kunniga och anpassad för svenska förhållanden. Den innehåller alla nödvändiga delar och är enkel att fylla i.",
    "Genom att använda en professionell mall säkerställer du att alla viktiga punkter täcks och att dokumentet håller en hög juridisk standard.",
  ],
  faqs: [
    { question: "Är mallarna gratis?", answer: "Ja, alla våra avtalsmallar är helt gratis att ladda ner och använda. Du kan fylla i dem online eller ladda ner som PDF utan kostnad." },
    { question: "Är mallarna juridiskt giltiga?", answer: "Våra mallar är utformade för svenska förhållanden och följer gällande lagstiftning. De ger en solid grund, men vid komplexa situationer rekommenderar vi juridisk rådgivning." },
    { question: "Kan jag redigera mallen efter nedladdning?", answer: "Du kan fylla i mallen online och ladda ner en ifylld PDF. Om du laddar ner en tom mall kan du skriva ut den och fylla i för hand." },
  ],
};

export function getTemplateContent(slug: string): TemplateContent {
  return content[slug] || defaultContent;
}
