interface Faq {
  question: string;
  answer: string;
}

interface ContentSection {
  heading: string;
  paragraphs: string[];
}

interface TemplateContent {
  features: string[];
  heading: string;
  paragraphs: string[];
  sections?: ContentSection[];
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
      "Standardvillkor om befintligt skick",
      "Utrymme för övriga villkor och förbehåll",
      "Referens till köplagen (1990:931)",
      "Signaturrader för båda parter",
      "Möjlighet att signera digitalt",
    ],
    heading: "När behöver du ett köpekontrakt?",
    paragraphs: [
      "Ett köpekontrakt behövs vid köp och försäljning av lös egendom mellan privatpersoner. Det skyddar både säljare och köpare genom att dokumentera villkoren för affären svart på vitt. Oavsett om det gäller en bil, båt, möbel, elektronik eller annan värdefull egendom är ett skriftligt avtal alltid att rekommendera.",
      "Köpekontraktet fungerar som ett juridiskt bevis på att en överenskommelse har träffats mellan parterna. Det specificerar exakt vad som sålts, till vilket pris, under vilka villkor och när överlåtelsen sker. Vid eventuella tvister är köpekontraktet det viktigaste bevismedlet.",
      "Vår mall är utformad för svenska förhållanden och följer gängse praxis för köpekontrakt avseende lös egendom. Den innehåller standardvillkor om befintligt skick, betalningsalternativ och utrymme att lägga till egna villkor vid behov.",
    ],
    sections: [
      {
        heading: "Köplagen - dina rättigheter vid privat köp",
        paragraphs: [
          "Köp av lös egendom mellan privatpersoner regleras av köplagen (1990:931). Lagen är dispositiv, vilket innebär att parterna kan avtala om andra villkor. Det som skrivs i köpekontraktet gäller alltså i första hand, och köplagen fyller i luckorna.",
          "Enligt köplagen har köparen undersökningsplikt: du bör kontrollera varan innan köpet. Säljaren ansvarar å sin sida för att varan stämmer överens med vad som avtalats. Även om varan säljs i befintligt skick ansvarar säljaren för dolda fel och felaktiga uppgifter.",
          "Reklamationsfristen vid köp mellan privatpersoner är skälig tid från det att felet upptäckts. Det finns ingen fast tidsgräns som vid konsumentköp, men det är viktigt att reklamera så snart som möjligt för att inte förlora sin rätt.",
        ],
      },
      {
        heading: "Steg för steg: fyll i köpekontraktet",
        paragraphs: [
          "Börja med att fylla i fullständiga uppgifter om säljare och köpare: namn, personnummer, adress och telefonnummer. Dessa uppgifter behövs för att identifiera parterna och kunna nå varandra vid eventuella frågor efter köpet.",
          "Beskriv sedan föremålet som säljs så detaljerat som möjligt. Ange märke, modell, färg, serienummer och skick. Ju mer specifik beskrivning, desto mindre risk för tvister. Bifoga gärna bilder som bilaga till kontraktet.",
          "Ange köpeskilling, betalningssätt (kontant, Swish, banköverföring) och när betalningen ska ske. Bestäm datum och plats för överlåtelsen. Lägg till eventuella särskilda villkor, till exempel garanti eller förbehåll. Signera kontraktet - båda parter bör ha var sitt exemplar.",
        ],
      },
      {
        heading: "Vanliga misstag vid köpekontrakt",
        paragraphs: [
          "Det vanligaste misstaget är att inte skriva något kontrakt alls. Många litar på muntliga överenskommelser, men vid en tvist finns då inga bevis på vad som avtalats. Skriv alltid ett köpekontrakt vid köp över ett par tusen kronor.",
          "Ett annat misstag är att beskriva föremålet för vagt. 'Soffa, begagnad' räcker inte. Ange färg, material, mått, eventuella skador och märke. En tydlig beskrivning skyddar både säljare och köpare.",
          "Många missar också att ange betalningssätt tydligt. Om säljaren vill ha kontant betalning men köparen vill Swisha, kan det bli problem vid överlåtelsen. Bestäm betalningssätt i förväg och skriv det i kontraktet.",
        ],
      },
    ],
    faqs: [
      { question: "Är ett köpekontrakt juridiskt bindande?", answer: "Ja, ett köpekontrakt är juridiskt bindande så snart båda parter har undertecknat det. Det regleras av köplagen (1990:931) och fungerar som bevisning vid eventuella tvister." },
      { question: "Vad innebär befintligt skick i ett köpekontrakt?", answer: "Befintligt skick innebär att köparen accepterar föremålet i det skick det är vid köptillfället. Säljaren ansvarar dock fortfarande för dolda fel och för att uppgifterna i kontraktet stämmer." },
      { question: "Behöver ett köpekontrakt bevittnas?", answer: "Nej, ett köpekontrakt för lös egendom behöver inte bevittnas för att vara giltigt. Det räcker med bådas underskrifter. Vittnen kan dock stärka bevisvärdet vid en eventuell tvist." },
      { question: "Kan jag ångra ett köpekontrakt?", answer: "Ett undertecknat köpekontrakt är bindande. Ångerrätt enligt distansavtalslagen gäller bara vid köp från företag på distans, inte vid privata köp. Parterna kan dock komma överens om att häva köpet." },
      { question: "Kan jag skapa ett digitalt köpekontrakt?", answer: "Ja, ett köpekontrakt som skapas och signeras digitalt är fullt juridiskt giltigt. Du kan fylla i vår mall online, ladda ner som PDF och signera. Digital signering fungerar lika bra som en fysisk underskrift." },
      { question: "Vad gäller vid köp av begagnade varor på nätet?", answer: "Vid privata köp på t.ex. Blocket gäller köplagen, inte konsumentköplagen. Ångerrätt finns inte vid privatköp. Ett skriftligt köpekontrakt ger dock bevis på villkoren om det uppstår en tvist." },
      { question: "Behöver jag köpekontrakt vid Swish-betalning?", answer: "Ja, absolut. Swish-betalning visar bara att pengar överförts, inte vad köpet gällde eller vilka villkor som avtalats. Köpekontraktet kompletterar betalningsbeviset med detaljerad information om affären." },
      { question: "Vad gör jag om det finns dolda fel efter köpet?", answer: "Reklamera felet till säljaren så snart som möjligt. Om varan sålts i befintligt skick ansvarar säljaren ändå för fel som inte stämmer med vad som uppgavs och dolda fel som säljaren kände till. Köpekontraktet är ditt viktigaste bevis." },
    ],
  },

  "kopekontrakt-bil": {
    features: [
      "Uppgifter om säljare och köpare med personnummer",
      "Registreringsnummer och chassinummer (VIN)",
      "Mätarställning och årsmodell",
      "Besiktningsstatus och datum",
      "Köpeskilling och betalningssätt",
      "Villkor om befintligt skick",
      "Garantivillkor om tillämpligt",
      "Checklista för ägarbytet hos Transportstyrelsen",
      "Utrymme för övriga villkor",
      "Signaturrader för båda parter",
    ],
    heading: "Varför behöver du ett köpekontrakt för bil?",
    paragraphs: [
      "Vid köp eller försäljning av bil mellan privatpersoner är ett skriftligt köpekontrakt avgörande. Det dokumenterar fordonets skick, mätarställning och alla överenskomna villkor och skyddar både köpare och säljare vid eventuella tvister.",
      "Varje år säljs hundratusentals begagnade bilar privat i Sverige. Tyvärr uppstår tvister i en betydande andel av dessa affärer, ofta om dolda fel, manipulerade mätare eller oklara betalningsvillkor. Ett väl ifyllt köpekontrakt förebygger de flesta av dessa problem.",
      "Vår mall är specifikt utformad för privat bilförsäljning i Sverige. Den innehåller alla fordonsrelevanta fält och följer köplagen. Fyll i online och ladda ner som PDF, eller ladda ner en tom mall att fylla i för hand.",
    ],
    sections: [
      {
        heading: "Köplagen vid privat bilförsäljning",
        paragraphs: [
          "Vid privat bilförsäljning gäller köplagen (1990:931), inte konsumentköplagen. Det innebär att köparen har en undersökningsplikt: du förväntas kontrollera bilen noggrant innan köpet. Fel som du borde ha upptäckt vid en rimlig undersökning kan du normalt inte reklamera.",
          "Säljaren ansvarar däremot för att bilen stämmer överens med vad som avtalats i köpekontraktet. Om säljaren uppger att bilen är besiktigad och felfri, men det visar sig att den har allvarliga brister, kan köparen ha rätt till prisavdrag eller hävning.",
          "Klausulen 'befintligt skick' betyder inte att säljaren slipper allt ansvar. Säljaren ansvarar fortfarande för dolda fel som inte kunnat upptäckas vid rimlig undersökning och för uppgifter som visar sig vara felaktiga.",
        ],
      },
      {
        heading: "Så fyller du i köpekontrakt för bil",
        paragraphs: [
          "Fyll i fullständiga uppgifter om säljare och köpare: namn, personnummer, adress och telefonnummer. Ange sedan bilens uppgifter: registreringsnummer, chassinummer (VIN), märke, modell, årsmodell, färg och aktuell mätarställning.",
          "Notera besiktningsstatus: är bilen godkänd, och när är nästa besiktning? Ange eventuella kända fel eller brister ärligt. Det skyddar säljaren mot reklamationer på saker köparen kände till.",
          "Bestäm köpeskilling, betalningssätt och tidpunkt för ägarbytet. Kom ihåg att anmäla ägarbytet till Transportstyrelsen inom tio dagar. Både säljare och köpare bör anmäla för att vara på säkra sidan.",
        ],
      },
      {
        heading: "Vanliga misstag vid bilköp och bilförsäljning",
        paragraphs: [
          "Det vanligaste misstaget är att inte kontrollera bilens historik innan köpet. Använd Transportstyrelsens tjänst för att se registrerade ägare, besiktningsprotokoll och eventuella skulder kopplade till fordonet.",
          "Många glömmer att fotografera bilen vid överlåtelsen. Bilder på bilens utvändiga och invändiga skick, mätarställning och eventuella skador fungerar som komplement till köpekontraktet och stärker bevisvärdet.",
          "Se upp med betalning: undvik att lämna bilen innan full betalning är bekräftad. Vid banköverföring, vänta tills pengarna syns på kontot. Vid Swish-betalning, bekräfta att transaktionen gått igenom innan ni skiljs åt.",
        ],
      },
    ],
    faqs: [
      { question: "Vad ska ett köpekontrakt för bil innehålla?", answer: "Det ska innehålla uppgifter om säljare och köpare, registreringsnummer, chassinummer (VIN), mätarställning, årsmodell, besiktningsstatus, köpeskilling, betalningssätt och villkor om befintligt skick." },
      { question: "Måste jag skriva köpekontrakt vid bilförsäljning?", answer: "Det är inte ett lagkrav, men starkt rekommenderat. Utan köpekontrakt saknar du bevis på köpevillkoren, vilket kan bli problematiskt vid tvister om fordonets skick eller betalning." },
      { question: "Vem ansvarar för dolda fel vid privat bilförsäljning?", answer: "Vid privat försäljning i befintligt skick ansvarar säljaren för dolda fel som fanns vid köptillfället och som inte kunnat upptäckas vid en rimlig undersökning. Köparen har undersökningsplikt." },
      { question: "Ska mätarställningen vara med i köpekontraktet?", answer: "Ja, alltid. Mätarställningen dokumenterar bilens skick vid försäljningen och fungerar som skydd om mätaren skulle manipuleras. Det är dessutom olagligt att manipulera en mätare." },
      { question: "Kan jag skapa ett digitalt köpekontrakt för bil?", answer: "Ja, ett digitalt köpekontrakt är juridiskt giltigt. Du kan fylla i vår mall online och ladda ner som PDF. Båda parter bör ha varsin kopia av det signerade kontraktet." },
      { question: "Hur anmäler jag ägarbytet till Transportstyrelsen?", answer: "Både säljare och köpare bör anmäla ägarbytet på Transportstyrelsens webbplats inom tio dagar. Säljaren gör en avregistrering och köparen en registrering. Det kostar inget att anmäla." },
      { question: "Vad gör jag om det finns skulder på bilen?", answer: "Kontrollera alltid om det finns skulder kopplade till fordonet via Kronofogden. En bil med utmätning eller betalningsanmärkning kan beslagtas. Skriv in i kontraktet att bilen överlåts fri från skulder." },
      { question: "Behöver köpekontraktet bevittnas?", answer: "Nej, ett köpekontrakt för bil behöver inte bevittnas. Det räcker med att båda parter undertecknar. Vittnen kan dock stärka bevisvärdet om det skulle uppstå en tvist." },
    ],
  },

  "kopekontrakt-bat": {
    features: [
      "Uppgifter om säljare och köpare",
      "Båttyp, tillverkare och modell",
      "HIN-nummer och registreringsnummer",
      "Motor, motortyp och motortimmar",
      "Detaljerad tillbehörslista",
      "Köpeskilling och betalningsvillkor",
      "Villkor om befintligt skick",
      "Sjövärdighetsbesiktning",
      "Försäkringsstatus",
      "Signaturrader för båda parter",
    ],
    heading: "Varför behöver du ett köpekontrakt för båt?",
    paragraphs: [
      "Båtar är ofta betydande investeringar, och ett skriftligt köpekontrakt är avgörande för att skydda båda parter vid en privat försäljning. Kontraktet dokumenterar båtens skick, utrustning och alla överenskomna villkor.",
      "Till skillnad från bilar finns det inget centralt fordonsregister för båtar i Sverige, vilket gör ett köpekontrakt extra viktigt som ägandebevis. HIN-numret (Hull Identification Number) är det närmaste en båt kommer ett chassinummer.",
      "Vår mall är specifikt utformad för båtförsäljning och innehåller fält för alla relevanta uppgifter: båttyp, motor, tillbehör, sjövärdighet och skick. Den kan användas för segelbåtar, motorbåtar, jollar och andra fritidsbåtar.",
    ],
    sections: [
      {
        heading: "Så fyller du i köpekontrakt för båt",
        paragraphs: [
          "Fyll i uppgifter om säljare och köpare. Ange sedan båtens identifikation: tillverkare, modell, byggnadsår, HIN-nummer (finns på akterspegeln), eventuellt registreringsnummer och båtens mått (längd, bredd, djupgående).",
          "Beskriv motorn noggrant: tillverkare, modell, effekt (hk), bränsletyp, årsmodell och antal motortimmar. Motorns skick har stor påverkan på båtens värde. Om det finns en utombordsmotor som inte ingår, ange det tydligt.",
          "Lista alla tillbehör som ingår i köpet: trailer, segelduk, elektronik (GPS, plotter, ekolod), säkerhetsutrustning, ankarspel, kapell och övrigt. Det som inte nämns antas inte ingå. Bifoga gärna bilder som bilaga.",
        ],
      },
      {
        heading: "Vanliga fallgropar vid båtköp",
        paragraphs: [
          "Det största misstaget vid båtköp är att inte besiktiga båten ordentligt. Kontrollera skrovet för osmosblåsor och sprickor, testa motorn under gång och undersök elinstallationer. En professionell besiktning kostar några tusen men kan spara hundratusentals.",
          "Kontrollera ägarskapet: be om kvitto eller köpekontrakt från säljarens eget köp. Utan centralt register kan det vara svårt att verifiera vem som äger en båt. HIN-numret kan användas för att spåra båtens historik.",
          "Tänk på att en eventuell båtplats eller hamnplats sällan ingår i köpet utan kräver separat avtal med hamnen. Kontrollera också försäkringsstatus och om det finns skulder kopplade till båten.",
        ],
      },
    ],
    faqs: [
      { question: "Behöver jag ett köpekontrakt vid båtköp?", answer: "Ja, det är starkt rekommenderat. Eftersom det inte finns något centralt båtregister i Sverige fungerar köpekontraktet som ditt viktigaste ägandebevis. Det dokumenterar också skick och villkor." },
      { question: "Vad är HIN-nummer på en båt?", answer: "HIN (Hull Identification Number) är båtens unika identifieringsnummer, liknande chassinumret på en bil. Det finns instansat på båtens akterspegel och bör alltid anges i köpekontraktet." },
      { question: "Ska tillbehör specificeras i köpekontraktet?", answer: "Ja, alla tillbehör som ingår i köpet bör listas detaljerat. Det gäller motor, trailer, elektronik, säkerhetsutrustning och övrigt. Det som inte nämns i kontraktet antas inte ingå i köpet." },
      { question: "Behöver jag registrera båten?", answer: "Båtar med motor på minst 15 hk (11 kW) och/eller minst 4 meters skrovlängd ska vara inregistrerade hos Transportstyrelsen. Registreringen ska uppdateras vid ägarbyte." },
      { question: "Vad gäller vid köp av båt i befintligt skick?", answer: "Köplagen gäller vid privat båtköp. Befintligt skick innebär att köparen accepterar skicket, men säljaren ansvarar fortfarande för dolda fel och felaktiga uppgifter. Köparen har undersökningsplikt." },
      { question: "Ska båttrailern vara med i kontraktet?", answer: "Om trailern ingår i köpet ska den anges i kontraktet med registreringsnummer. Trailern är ett separat fordon som kräver egen ägarregistrering hos Transportstyrelsen." },
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
      "Fastighetstillbehör och byggnadstillbehör",
      "Formkrav enligt jordabalken 4 kap.",
      "Signaturrader för båda parter",
    ],
    heading: "Varför behöver du ett köpekontrakt för fastighet?",
    paragraphs: [
      "Köp av fastighet är ofta den största affären i en persons liv. Ett korrekt utformat köpekontrakt är ett absolut juridiskt krav enligt jordabalken 4 kap. 1 § - utan skriftligt avtal är fastighetsköpet ogiltigt.",
      "Köpekontraktet reglerar alla villkor: köpeskilling, handpenning, tillträdesdag, förbehåll och vad som ingår i köpet. Det är grunden för hela affären och det dokument som styr parternas rättigheter och skyldigheter.",
      "Vår mall innehåller alla nödvändiga uppgifter för ett giltigt fastighetsköpekontrakt. Observera att fastighetsköp ofta kräver juridisk rådgivning - mallen ger en solid grund men bör anpassas efter den specifika affären.",
    ],
    sections: [
      {
        heading: "Formkrav enligt jordabalken",
        paragraphs: [
          "Jordabalken 4 kap. ställer strikta formkrav på fastighetsköp. Köpekontraktet måste vara skriftligt och undertecknat av både köpare och säljare. Det ska innehålla uppgifter om fastigheten (fastighetsbeteckning), köpeskillingen och en överlåtelseförklaring.",
          "Muntliga avtal om fastighetsköp är helt ogiltiga, liksom villkor som inte tagits med i det skriftliga kontraktet (den så kallade integrationsklausulen). Det innebär att alla villkor måste finnas med i kontraktet - det som inte skrivits ned gäller inte.",
          "Vid fastighetsköpet upprättas normalt två dokument: köpekontraktet (med alla villkor) och köpebrevet (som bekräftar att betalning skett). Köpebrevet är det dokument som används för att söka lagfart hos Lantmäteriet.",
        ],
      },
      {
        heading: "Viktiga förbehåll i fastighetsköpekontrakt",
        paragraphs: [
          "Besiktningsförbehåll ger köparen rätt att anlita en besiktningsman och frånträda köpet om allvarliga brister upptäcks. Förbehållet ska ha en tydlig tidsfrist, vanligen 10-14 dagar. Utan besiktningsförbehåll köper du fastigheten i befintligt skick.",
          "Låneförbehåll ger köparen rätt att frånträda köpet om bankfinansiering inte beviljas. Ange en tidsfrist och det belopp som behöver lånas. De flesta säljare accepterar låneförbehåll om köparen har ett lånelöfte.",
          "Andra vanliga förbehåll är försäljningsförbehåll (köparen måste sälja sin nuvarande bostad först), myndighetstillstånd (om köpet kräver kommunalt godkännande) och förbehåll om jordföroreningar.",
        ],
      },
      {
        heading: "Steg för steg: fastighetsköp",
        paragraphs: [
          "Innan kontraktet skrivs: kontrollera fastighetsbeteckningen hos Lantmäteriet, undersök servitut, inteckningar och eventuella planbestämmelser. Beställ gärna en fastighetsdatautskrift som visar alla rättsliga förhållanden.",
          "Kontraktet ska innehålla: fastighetsbeteckning, fullständiga uppgifter om parterna, köpeskilling, handpenning (vanligen 10 % av köpeskillingen), tillträdesdag, förbehåll och vad som ingår som fastighetstillbehör.",
          "Efter undertecknande: handpenningen betalas, besiktning genomförs (om förbehåll finns), lånelöfte bekräftas, och på tillträdesdagen betalas slutlikviden. Köpebrevet undertecknas och köparen ansöker om lagfart.",
        ],
      },
    ],
    faqs: [
      { question: "Måste köpekontrakt för fastighet vara skriftligt?", answer: "Ja, det är ett absolut krav enligt jordabalken 4 kap. 1 §. Muntliga avtal om fastighetsköp är ogiltiga. Kontraktet måste vara skriftligt, undertecknat av båda parter och innehålla fastighetsbeteckning, köpeskilling och överlåtelseförklaring." },
      { question: "Vad är skillnaden mellan köpekontrakt och köpebrev?", answer: "Köpekontraktet upprättas först och innehåller alla villkor inklusive förbehåll. Köpebrevet upprättas vid tillträdet och bekräftar att full betalning skett. Köpebrevet används för att söka lagfart hos Lantmäteriet." },
      { question: "Vad innebär ett besiktningsförbehåll?", answer: "Ett besiktningsförbehåll ger köparen rätt att besiktiga fastigheten och frånträda köpet om allvarliga brister upptäcks. Förbehållet ska ha en tydlig tidsfrist (vanligen 10-14 dagar) och anges i köpekontraktet." },
      { question: "Vad kostar lagfart på en fastighet?", answer: "Stämpelskatten för lagfart är 1,5 % av köpeskillingen för privatpersoner och 4,25 % för juridiska personer. Därtill tillkommer en expeditionsavgift på 825 kr till Lantmäteriet." },
      { question: "Vad är handpenning vid fastighetsköp?", answer: "Handpenning är en delbetalning som erläggs vid kontraktsskrivningen, vanligen 10 % av köpeskillingen. Handpenningen visar att köparen är seriös och kan förverkas om köparen drar sig ur utan giltigt förbehåll." },
      { question: "Vem betalar mäklararvode vid fastighetsköp?", answer: "Normalt betalar säljaren mäklararvodet. Vid privat försäljning utan mäklare finns inga mäklarkostnader, men det är extra viktigt att köpekontraktet är korrekt utformat." },
      { question: "Vad ingår som fastighetstillbehör?", answer: "Fastighetstillbehör som ingår per automatik enligt jordabalken inkluderar byggnader, ledningar, stängsel och växtlighet. Byggnadstillbehör som spis, kyl, garderober och markiser ingår också om de inte undantagits i kontraktet." },
    ],
  },

  hyreskontrakt: {
    features: [
      "Uppgifter om hyresvärd och hyresgäst",
      "Beskrivning av hyresobjektet (adress, storlek, typ)",
      "Hyresbelopp och betalningsvillkor",
      "Deposition och säkerhet",
      "Hyresperiod och uppsägningstid",
      "Regler för underhåll och skötsel",
      "Villkor för andrahandsuthyrning",
      "Bestämmelser om husdjur och rökning",
      "Inventarieförteckning vid möblerad uthyrning",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett hyreskontrakt?",
    paragraphs: [
      "Ett hyreskontrakt behövs varje gång en bostad hyrs ut, oavsett om det gäller en lägenhet, ett hus, ett rum eller en stuga. Kontraktet reglerar rättigheter och skyldigheter för både hyresvärd och hyresgäst och är det viktigaste dokumentet i ett hyresförhållande.",
      "Utan ett skriftligt hyreskontrakt saknar båda parter bevis på vad som överenskommits. Det kan leda till kostsamma tvister om hyresbelopp, uppsägningstid, ansvar för skador och andra villkor. Ett tydligt kontrakt förebygger konflikter och ger trygghet.",
      "Vår hyreskontrakt-mall är anpassad för svenska förhållanden och följer jordabalken 12 kap. (hyreslagen). Den kan användas vid uthyrning av lägenheter, hus, villor, radhus och andra bostäder i hela Sverige.",
    ],
    sections: [
      {
        heading: "Vad säger hyreslagen?",
        paragraphs: [
          "Hyresförhållanden i Sverige regleras av jordabalken 12 kap., ofta kallad hyreslagen. Lagen är tvingande till hyresgästens fördel, vilket innebär att villkor i hyreskontrakt som ger hyresgästen sämre villkor än lagen föreskriver är ogiltiga.",
          "Hyreslagen ger hyresgästen rätt till tre månaders uppsägningstid vid tillsvidareavtal, besittningsskydd efter viss tid, och skydd mot oskäliga hyreshöjningar. Hyresvärden har å sin sida rätt att kräva att bostaden vårdas väl och att hyran betalas i tid.",
          "Vid uthyrning av egen bostad (privatpersoner som hyr ut sin bostadsrätt eller villa) gäller istället lagen om uthyrning av egen bostad (2012:978), som ger hyresvärden rätt att säga upp avtalet med tre månaders varsel utan att ange skäl.",
        ],
      },
      {
        heading: "Så fyller du i hyreskontraktet steg för steg",
        paragraphs: [
          "Börja med att fylla i fullständiga uppgifter om hyresvärd och hyresgäst, inklusive namn, personnummer och kontaktuppgifter. Om hyresvärden är ett företag anger du organisationsnummer istället.",
          "Beskriv sedan hyresobjektet noggrant: adress, lägenhetsnummer, antal rum, storlek i kvadratmeter och eventuella tillhörande utrymmen som förråd, parkering eller balkong. Ju mer detaljerat, desto bättre.",
          "Ange hyresbeloppet, vad som ingår i hyran (el, vatten, internet, värme) och hur betalning ska ske. Bestäm hyresperiod (tillsvidare eller tidsbestämt), uppsägningstid och eventuell deposition. Avsluta med att båda parter signerar kontraktet.",
        ],
      },
      {
        heading: "Vanliga misstag i hyreskontrakt",
        paragraphs: [
          "Ett av de vanligaste misstagen är att inte specificera vad som ingår i hyran. Om el, vatten eller internet inte nämns kan det leda till tvister om vem som ska betala. Var alltid tydlig med vad hyran täcker.",
          "Ett annat vanligt misstag är att sätta en uppsägningstid som strider mot lagen. Hyresgästen har alltid rätt till tre månaders uppsägningstid vid tillsvidareavtal, även om kortare tid skrivits in i kontraktet.",
          "Många missar också att göra en inventarieförteckning vid möblerad uthyrning. Utan dokumentation av möbler och deras skick vid inflyttning blir det svårt att avgöra vad som utgör normalt slitage och vad som är en skada.",
        ],
      },
    ],
    faqs: [
      { question: "Vad ska ett hyreskontrakt innehålla?", answer: "Det ska innehålla uppgifter om hyresvärd och hyresgäst, hyresobjektets adress och beskrivning, hyresbelopp, betalningsdatum, deposition, hyresperiod, uppsägningstid, villkor för underhåll och vad som ingår i hyran." },
      { question: "Hur lång är uppsägningstiden för en hyresgäst?", answer: "En hyresgäst har alltid rätt till tre månaders uppsägningstid vid tillsvidareavtal, oavsett vad kontraktet säger. Vid tidsbestämda avtal upphör hyresförhållandet vid avtalstidens slut utan uppsägning." },
      { question: "Får hyresvärden ta ut deposition?", answer: "Ja, det är vanligt att hyresvärden tar en deposition som säkerhet, vanligen en till tre månadshyror. Depositionen ska återbetalas efter hyrestidens slut, med avdrag för eventuella skador utöver normalt slitage." },
      { question: "Kan hyresvärden höja hyran under avtalsperioden?", answer: "Vid tillsvidareavtal kan hyresvärden förhandla om hyreshöjning med skälig uppsägningstid. Hyran ska vara skälig enligt hyreslagen. Vid tidsbestämt avtal gäller den avtalade hyran under hela perioden." },
      { question: "Kan jag använda ett digitalt hyreskontrakt?", answer: "Ja, digitala hyreskontrakt är juridiskt giltiga i Sverige. Du kan fylla i kontraktet online och ladda ner som PDF. Om du behöver signera digitalt kan du använda en e-signeringstjänst." },
      { question: "Vad gäller vid uthyrning av bostadsrätt?", answer: "Vid uthyrning av din bostadsrätt gäller lagen om uthyrning av egen bostad. Du har rätt att säga upp hyresgästen med tre månaders varsel utan särskilt skäl. Hyran ska vara skälig och du behöver styrelsens godkännande." },
      { question: "Har hyresgästen besittningsskydd?", answer: "Vid hyresrätt får hyresgästen besittningsskydd efter viss tid, vilket innebär rätt att bo kvar även om hyresvärden säger upp avtalet. Vid uthyrning av egen bostad enligt privatuthyrningslagen gäller inget besittningsskydd." },
      { question: "Vad händer om hyresgästen inte betalar hyran?", answer: "Om hyresgästen inte betalar hyran i tid kan hyresvärden skicka en betalningspåminnelse. Om hyran inte betalas inom en vecka från förfallodagen kan hyresvärden säga upp avtalet. Hyresgästen har dock rätt att betala inom tre veckor för att behålla hyresrätten." },
    ],
  },

  andrahandsuthyrning: {
    features: [
      "Uppgifter om förstahandshyresgäst och andrahandshyresgäst",
      "Referens till förstahandskontrakt",
      "Hyresbelopp och betalningsvillkor",
      "Hyresperiod med start- och slutdatum",
      "Möblerad eller omöblerad uthyrning",
      "Inventarieförteckning vid möblerat",
      "Villkor för uppsägning",
      "Regler för bostadens skötsel",
      "Depositionsvillkor",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett andrahandskontrakt?",
    paragraphs: [
      "Ett andrahandskontrakt behövs när du hyr ut din lägenhet i andra hand. Oavsett om det gäller en hyresrätt eller bostadsrätt reglerar kontraktet förhållandet mellan dig som förstahandshyresgäst och den som hyr i andra hand.",
      "Andrahandsuthyrning kräver alltid tillstånd - från din hyresvärd om du har hyresrätt, eller från bostadsrättsföreningen om du äger en bostadsrätt. Utan tillstånd riskerar du att förlora din bostad.",
      "Vår andrahandskontraktsmall är anpassad för svenska förhållanden och täcker alla viktiga punkter: hyresperiod, belopp, vad som ingår, skötsel och uppsägningsvillkor.",
    ],
    sections: [
      {
        heading: "Regler för andrahandsuthyrning",
        paragraphs: [
          "Andrahandsuthyrning regleras av jordabalken 12 kap. (hyreslagen) för hyresrätter och bostadsrättslagen för bostadsrätter. Gemensamt är att du alltid behöver tillstånd från hyresvärd eller bostadsrättsförening.",
          "Giltiga skäl för andrahandsuthyrning inkluderar studier på annan ort, arbete på annan ort, provboende med partner, vård av anhörig eller annan beaktansvärd anledning. Hyresnämnden kan ge tillstånd om hyresvärden nekar utan saklig grund.",
          "Hyran vid andrahandsuthyrning ska vara skälig. För hyresrätter innebär det din egen hyra plus högst 15 % påslag om lägenheten hyrs ut möblerad. Tar du ut oskälig hyra riskerar du att bli återbetalningsskyldig.",
        ],
      },
      {
        heading: "Så skriver du ett andrahandskontrakt",
        paragraphs: [
          "Ange fullständiga uppgifter om dig som förstahandshyresgäst och andrahandshyresgästen. Hänvisa till ditt förstahandskontrakt och det tillstånd du fått för andrahandsuthyrningen.",
          "Var tydlig med hyresperioden (start och slutdatum), hyresbelopp, vad som ingår i hyran och hur betalning ska ske. Ange om lägenheten hyrs ut möblerad eller omöblerad.",
          "Vid möblerad uthyrning: gör alltid en inventarieförteckning och fotografera lägenheten före inflyttning. Dokumentera skicket på möbler, golv, väggar och vitvaror. Detta förebygger tvister vid utflytt.",
        ],
      },
    ],
    faqs: [
      { question: "Behöver jag tillstånd för att hyra ut i andra hand?", answer: "Ja, alltid. Du behöver tillstånd från din hyresvärd (hyresrätt) eller bostadsrättsförening (bostadsrätt). Uthyrning utan tillstånd kan leda till att du förlorar ditt förstahandskontrakt eller din bostadsrätt." },
      { question: "Hur mycket får jag ta i hyra vid andrahandsuthyrning?", answer: "Hyran ska vara skälig. För hyresrätter: din egen hyra plus max 15 % påslag för möbler. För bostadsrätter: bruksvärdet. Tar du ut oskälig hyra kan andrahandshyresgästen kräva återbetalning via hyresnämnden." },
      { question: "Hur lång tid får jag hyra ut i andra hand?", answer: "Det finns ingen generell tidsgräns i lagen, men tillståndet ges ofta för en begränsad period (6-12 månader). Vanliga godkända skäl är studier, arbete på annan ort eller provboende med partner." },
      { question: "Vad händer om jag hyr ut utan tillstånd?", answer: "Du riskerar att förlora ditt förstahandskontrakt (hyresrätt) eller att föreningen säger upp din nyttjanderätt (bostadsrätt). Du kan också bli skyldig att betala tillbaka överhyra till andrahandshyresgästen." },
      { question: "Har andrahandshyresgästen besittningsskydd?", answer: "Normalt inte vid tidsbestämda kontrakt under två år. Vid längre uthyrning kan besittningsskydd uppstå. Det är viktigt att tydligt ange hyresperioden i kontraktet." },
      { question: "Kan jag hyra ut möblerat?", answer: "Ja, och det är vanligt vid andrahandsuthyrning. Du får ta ett påslag på max 15 % av hyran för möbler. Gör alltid en inventarieförteckning och dokumentera skicket innan inflyttning." },
    ],
  },

  "uppsagning-hyresavtal": {
    features: [
      "Uppgifter om hyresgäst",
      "Adress till hyresobjektet",
      "Datum för uppsägning",
      "Beräknad uppsägningstid och sista dag",
      "Referens till befintligt hyresavtal",
      "Utrymme för meddelande till hyresvärd",
      "Bekräftelse av avflyttningsdag",
      "Påminnelse om besiktning och nyckelåterlämnande",
      "Signaturrad för hyresgäst",
    ],
    heading: "Hur säger du upp ditt hyresavtal?",
    paragraphs: [
      "En uppsägning av hyresavtal bör alltid göras skriftligt, även om lagen inte alltid kräver det. Ett skriftligt bevis på uppsägningen skyddar dig och säkerställer att uppsägningstiden börjar löpa från rätt datum.",
      "Uppsägningstiden för en bostadshyresgäst är normalt tre månader vid tillsvidareavtal, oavsett vad som står i kontraktet. Denna rätt kan inte avtalas bort.",
      "Vår mall är enkel att fylla i och innehåller alla nödvändiga uppgifter. Skicka uppsägningen till din hyresvärd via rekommenderat brev eller e-post och be om en skriftlig bekräftelse.",
    ],
    sections: [
      {
        heading: "Regler för uppsägning av hyresavtal",
        paragraphs: [
          "Enligt hyreslagen (jordabalken 12 kap.) har en bostadshyresgäst alltid rätt att säga upp sitt hyresavtal med tre månaders uppsägningstid vid tillsvidareavtal. Denna regel är tvingande och kan inte avtalas bort, även om hyresavtalet anger en längre uppsägningstid.",
          "Uppsägningstiden räknas från nästa månadsskifte. Säger du upp den 15 mars börjar uppsägningstiden den 1 april och du kan flytta ut den 30 juni. Tänk på detta vid planering av flytt.",
          "Vid tidsbestämda avtal (bestämd tid) upphör avtalet vid periodens slut utan uppsägning. Dock krävs ofta en uppsägning i förväg även vid tidsbestämda avtal, annars kan avtalet förlängas automatiskt.",
        ],
      },
      {
        heading: "Checklista vid uppsägning",
        paragraphs: [
          "Skriv uppsägningen med tydligt datum, din fullständiga adress och referens till hyresavtalet. Ange vilket datum du planerar att flytta ut. Skicka via rekommenderat brev eller lämna över personligen mot kvittens.",
          "Boka en utflyttningsbesiktning med hyresvärden. Åtgärda eventuella skador utöver normalt slitage innan besiktningen. Ta bilder på lägenheten som bevis på skicket vid utflytt.",
          "Planera nyckelåterlämnande, eftersändning av post och uppsägning av eventuella tilläggstjänster (parkering, förråd). Kontrollera att depositionen kommer att återbetalas.",
        ],
      },
    ],
    faqs: [
      { question: "Måste uppsägning av hyresavtal vara skriftlig?", answer: "Hyresvärden kan kräva skriftlig uppsägning, och vi rekommenderar det alltid. En skriftlig uppsägning ger bevis på att uppsägningen skett och vilket datum den gjordes." },
      { question: "När börjar uppsägningstiden löpa?", answer: "Uppsägningstiden börjar löpa vid nästa månadsskifte efter att uppsägningen kommit hyresvärden till handa. Säger du upp den 15 mars börjar uppsägningstiden den 1 april." },
      { question: "Kan hyresvärden neka min uppsägning?", answer: "Nej, hyresvärden kan inte neka en uppsägning från hyresgästen. Du har alltid rätt att säga upp ditt hyresavtal med tre månaders uppsägningstid vid tillsvidareavtal." },
      { question: "Vad händer om jag vill flytta tidigare?", answer: "Du måste betala hyra under hela uppsägningstiden, men du får hyra ut i andra hand under perioden (med tillstånd). Alternativt kan du försöka förhandla med hyresvärden om kortare uppsägningstid." },
      { question: "Kan jag säga upp hyresavtalet via e-post?", answer: "Ja, men vi rekommenderar att du också skickar ett rekommenderat brev. E-post kan fungera som bevis, men rekommenderat brev ger starkare bevisning. Be alltid om skriftlig bekräftelse." },
      { question: "Måste jag städa lägenheten vid utflytt?", answer: "Ja, du ska lämna lägenheten i gott skick. De flesta hyresvärdar kräver en flyttstädning. Kontrollera ditt hyresavtal eller fråga hyresvärden om specifika krav." },
    ],
  },

  inneboendekontrakt: {
    features: [
      "Uppgifter om uthyrare och inneboende",
      "Beskrivning av rummet (storlek, möblering)",
      "Gemensamma utrymmen som ingår",
      "Hyresbelopp och vad som ingår (el, internet etc.)",
      "Regler för gemensamma utrymmen",
      "Husdjurspolicy och rökpolicy",
      "Uppsägningstid för båda parter",
      "Ordningsregler och trivselregler",
      "Depositionsvillkor",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett inneboendekontrakt?",
    paragraphs: [
      "Ett inneboendekontrakt behövs när du hyr ut ett rum i din bostad till en inneboende. Till skillnad från andrahandsuthyrning behåller du som uthyrare kvar tillgång till bostaden och bor kvar.",
      "Det är viktigt att ha ett skriftligt avtal även om ni känner varandra. Kontraktet reglerar hyra, gemensamma utrymmen, ordningsregler och uppsägningstid, och förebygger missförstånd.",
      "Vår mall täcker alla viktiga punkter: vad som ingår i hyran, vilka utrymmen som delas, trivselregler och villkor. Den fungerar för inneboende i hyresrätter, bostadsrätter och villor.",
    ],
    sections: [
      {
        heading: "Skillnaden mellan inneboende och andrahand",
        paragraphs: [
          "Vid inneboende bor du kvar i bostaden och hyr ut ett rum, medan du vid andrahandsuthyrning flyttar ut och hyr ut hela bostaden. Denna skillnad har stor juridisk betydelse.",
          "Inneboende kräver normalt inte tillstånd från hyresvärd eller bostadsrättsförening, men du bör informera dem. Andrahandsuthyrning kräver alltid tillstånd.",
          "Inneboende har svagare rättigheter än andrahandshyresgäster: inget besittningsskydd och ingen lagstadgad uppsägningstid. Det som avtalas i kontraktet gäller, vilket gör det extra viktigt att kontraktet är tydligt.",
        ],
      },
      {
        heading: "Tips för ett bra inneboendeförhållande",
        paragraphs: [
          "Var tydlig med vilka utrymmen som delas (kök, badrum, vardagsrum) och vilka som är privata. Ange öppettider för delade utrymmen om ni har olika dygnsrytm. Diskutera gästpolicy och parkeringsregler.",
          "Bestäm vad som ingår i hyran: el, vatten, internet, städning av gemensamma utrymmen. Allt som inte nämns kan bli en källa till konflikter. Var så specifik som möjligt.",
          "Gör en inventarieförteckning av rummet och gemensamma möbler om du hyr ut möblerat. Fotografera skicket innan inflyttning. Det skyddar båda parter vid utflytt.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är skillnaden mellan inneboende och andrahand?", answer: "Vid inneboende bor du kvar i bostaden och hyr ut ett rum. Vid andrahandsuthyrning flyttar du ut och hyr ut hela bostaden. Inneboende kräver normalt inte tillstånd från hyresvärden." },
      { question: "Behöver jag tillstånd för att ha inneboende?", answer: "I en hyresrätt behöver du normalt inte tillstånd, men informera hyresvärden. I en bostadsrätt bör du kontrollera föreningens stadgar. Uthyrningen får inte vara till men för hyresvärden eller grannar." },
      { question: "Vilken uppsägningstid gäller för inneboende?", answer: "Det finns ingen lagstadgad uppsägningstid för inneboende, så det som avtalas gäller. Vi rekommenderar minst en månads uppsägningstid för båda parter." },
      { question: "Måste jag betala skatt på hyresinkomsten?", answer: "Ja, inkomst från inneboende är skattepliktig. Du beskattas på överskottet (hyresintäkt minus eventuella avdragsgilla kostnader). Deklarera inkomsten på blankett T2 om du hyr ut privatbostad." },
      { question: "Hur mycket får jag ta i hyra för ett rum?", answer: "Hyran ska vara skälig i förhållande till rummets storlek och vad som ingår. Det finns inga exakta regler, men hyran bör motsvara en rimlig andel av bostadens totala kostnad." },
      { question: "Har inneboende besittningsskydd?", answer: "Nej, en inneboende har normalt inte besittningsskydd. Uppsägningstiden bestäms i kontraktet. Utan avtal kan uthyraren begära avflyttning med skälig varsel." },
    ],
  },

  anstallningsavtal: {
    features: [
      "Uppgifter om arbetsgivare och arbetstagare",
      "Befattning och arbetsuppgifter",
      "Lön, förmåner och lönerevision",
      "Arbetstid, övertid och semester",
      "Val av anställningsform (tillsvidare, provanställning, visstid)",
      "Uppsägningstid enligt LAS",
      "Sekretessklausul och konkurrensklausul",
      "Tjänstepension och försäkringar",
      "Kollektivavtalsreferens",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett anställningsavtal?",
    paragraphs: [
      "Ett anställningsavtal ska upprättas vid varje nyanställning, oavsett om det gäller en tillsvidareanställning, provanställning eller visstidsanställning. Det är det viktigaste dokumentet i arbetsförhållandet och reglerar villkoren som gäller mellan arbetsgivare och arbetstagare.",
      "Enligt lagen om anställningsskydd (LAS) är arbetsgivaren skyldig att senast en månad efter anställningens start lämna skriftlig information om anställningsvillkoren. Ett formellt anställningsavtal är det enklaste och bästa sättet att uppfylla detta krav.",
      "Vår mall är anpassad för svenska arbetsrättsliga förhållanden och täcker alla nödvändiga villkor: lön, arbetstid, semester, uppsägningstid, anställningsform och eventuella särskilda bestämmelser som sekretess och konkurrensklausuler.",
    ],
    sections: [
      {
        heading: "Vad säger lagen om anställningsavtal?",
        paragraphs: [
          "Anställningsförhållanden i Sverige regleras främst av lagen om anställningsskydd (LAS, 1982:80), semesterlagen, arbetstidslagen och diskrimineringslagen. Dessa lagar är i stor utsträckning tvingande till arbetstagarens fördel.",
          "LAS anger att huvudregeln är tillsvidareanställning. Visstidsanställning och provanställning är undantag som måste stödjas av lagliga grunder. En provanställning får vara högst sex månader och övergår automatiskt till tillsvidareanställning om den inte avbryts.",
          "Arbetsgivaren har informationsplikt: senast en månad efter att anställningen börjat ska arbetstagaren ha fått skriftlig information om alla väsentliga villkor. Anställningsavtalet fyller denna funktion och bör undertecknas redan vid anställningens start.",
        ],
      },
      {
        heading: "Så fyller du i anställningsavtalet steg för steg",
        paragraphs: [
          "Börja med att fylla i fullständiga uppgifter om arbetsgivaren (företagsnamn, organisationsnummer, adress) och arbetstagaren (namn, personnummer, adress). Ange sedan befattning, arbetsuppgifter och arbetsplats.",
          "Välj anställningsform: tillsvidareanställning är standard, provanställning (max 6 månader) används ofta vid nyanställningar, och visstidsanställning kan användas vid tillfälliga behov. Ange tillträdesdag och eventuellt slutdatum.",
          "Specificera lön (månadslön eller timlön), eventuella förmåner, arbetstid per vecka, semesterdagar och uppsägningstid. Om kollektivavtal gäller på arbetsplatsen bör det anges i avtalet. Avsluta med att båda parter signerar.",
        ],
      },
      {
        heading: "Vanliga misstag i anställningsavtal",
        paragraphs: [
          "Ett vanligt misstag är att inte ange korrekt anställningsform. Om inget annat avtalas anses anställningen vara tillsvidare. Arbetsgivare som vill använda provanställning eller visstid måste uttryckligen ange detta i avtalet.",
          "Många arbetsgivare missar att inkludera information om kollektivavtal, tjänstepension och försäkringar. Dessa delar är viktiga för arbetstagarens trygghet och kan bli en tvistefråga om de saknas.",
          "Ett annat vanligt fel är att ha orealistiskt långa konkurrensklausuler. Enligt svensk praxis bör en konkurrensklausul inte vara längre än 18 månader och ska kompenseras ekonomiskt. Oskäliga klausuler kan jämkas av domstol.",
        ],
      },
    ],
    faqs: [
      { question: "Är ett anställningsavtal obligatoriskt?", answer: "Arbetsgivaren måste senast en månad efter anställningens start lämna skriftlig information om villkoren. Ett formellt anställningsavtal är det enklaste sättet att uppfylla detta lagkrav och rekommenderas alltid." },
      { question: "Vad ska ett anställningsavtal innehålla?", answer: "Det ska innehålla arbetsgivarens och arbetstagarens uppgifter, befattning, arbetsplats, anställningsform, tillträdesdag, lön, arbetstid, semester, uppsägningstid och eventuella kollektivavtal." },
      { question: "Vad gäller vid provanställning?", answer: "En provanställning får vara högst sex månader enligt LAS. Under provanställningen kan båda parter avbryta anställningen utan uppsägningstid, men arbetsgivaren ska meddela minst två veckor i förväg." },
      { question: "Kan man ha muntligt anställningsavtal?", answer: "Ja, muntliga avtal är juridiskt giltiga men svåra att bevisa vid tvist. Arbetsgivaren har oavsett skyldighet att lämna skriftlig information om anställningsvillkoren inom en månad." },
      { question: "Kan jag signera anställningsavtalet digitalt?", answer: "Ja, digitala signaturer är juridiskt giltiga för anställningsavtal i Sverige. Många företag använder e-signering för att snabba upp onboarding-processen och minska pappershantering." },
      { question: "Vad är skillnaden mellan tillsvidare- och visstidsanställning?", answer: "En tillsvidareanställning (fast anställning) löper tills den sägs upp. En visstidsanställning har ett bestämt slutdatum. Enligt LAS är tillsvidareanställning normen och visstid undantaget." },
      { question: "Hur lång uppsägningstid gäller?", answer: "Enligt LAS har arbetstagaren minst en månads uppsägningstid. Uppsägningstiden från arbetsgivarens sida ökar med anställningstiden: en månad upp till två år, sedan gradvis upp till sex månader efter tio år." },
      { question: "Måste anställningsavtalet följa kollektivavtal?", answer: "Om arbetsgivaren är bunden av kollektivavtal gäller kollektivavtalets villkor som miniminivå. Anställningsavtalet kan ge bättre villkor än kollektivavtalet, men inte sämre." },
    ],
  },

  konsultavtal: {
    features: [
      "Uppgifter om uppdragsgivare och konsult",
      "Detaljerad uppdragsbeskrivning",
      "Arvode och betalningsvillkor (tim/fast/milestone)",
      "Uppdragsperiod och tidsplan",
      "Sekretessklausul",
      "Immateriella rättigheter (IP-överlåtelse)",
      "Ansvar, försäkring och ansvarsbegränsning",
      "Villkor för uppsägning och avbeställning",
      "Konkurrensklausul vid behov",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett konsultavtal?",
    paragraphs: [
      "Ett konsultavtal behövs när du anlitar en extern konsult eller frilansare, eller själv tar uppdrag som konsult åt ett företag. Avtalet reglerar uppdraget, arvodet, leveranstider, sekretess och vem som äger det som produceras.",
      "Till skillnad från ett anställningsavtal innebär ett konsultavtal att konsulten är en självständig uppdragstagare som ansvarar för egen skatt, moms och försäkring. Avtalet bör tydligt avgränsa uppdraget för att undvika omklassificering.",
      "Vår mall täcker alla viktiga delar: uppdragsbeskrivning, arvode, IP-rättigheter, sekretess och ansvar. Den kan användas för IT-konsulter, managementkonsulter, designers, skribenter och andra frilansare.",
    ],
    sections: [
      {
        heading: "Konsult eller anställd - viktig skillnad",
        paragraphs: [
          "En konsult är en självständig uppdragstagare som driver eget företag, ansvarar för sin egen skatt och moms, har egna försäkringar och kan ha flera uppdragsgivare samtidigt. En anställd har arbetsrättsligt skydd genom LAS.",
          "Skatteverket kan omklassificera ett konsultförhållande till anställning om konsulten i praktiken arbetar som en anställd. Faktorer som granskas: arbetsledning, arbetstider, arbetsplats, utrustning och om konsulten har andra kunder.",
          "För att undvika omklassificering bör konsultavtalet tydligt visa att konsulten är självständig: eget företag, flera kunder, egen utrustning, egna arbetstider och resultatbaserat arbete snarare än löpande närvaro.",
        ],
      },
      {
        heading: "Immateriella rättigheter i konsultavtal",
        paragraphs: [
          "En av de viktigaste frågorna i ett konsultavtal är vem som äger resultatet. Utan avtal äger konsulten normalt de immateriella rättigheterna till det som skapas, även om uppdragsgivaren betalat för arbetet.",
          "De flesta uppdragsgivare vill ha full äganderätt till resultatet. Reglera detta tydligt: ska IP överlåtas helt, licensieras, eller behålla konsulten rättigheterna? Ange också om konsulten får använda resultatet i sin portfolio.",
          "Vid mjukvaruutveckling är det särskilt viktigt att reglera rättigheterna till källkod, databaser och dokumentation. Klargör också vem som äger eventuella verktyg och ramverk som konsulten utvecklat före uppdraget.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är skillnaden mellan konsultavtal och anställningsavtal?", answer: "En konsult är självständig uppdragstagare med eget företag och ansvarar för egen skatt, moms och försäkring. En anställd har arbetsrättsligt skydd genom LAS, sjuklön och semester." },
      { question: "Vem äger resultatet av konsultuppdraget?", answer: "Det beror på vad som avtalats. Utan avtal äger konsulten normalt de immateriella rättigheterna. Vi rekommenderar att alltid reglera IP-överlåtelse tydligt i konsultavtalet." },
      { question: "Kan ett konsultavtal omklassificeras som anställning?", answer: "Ja, Skatteverket kan omklassificera om konsulten i praktiken arbetar som anställd. Faktorer: arbetsledning, arbetstider, arbetsplats och om konsulten har andra uppdragsgivare." },
      { question: "Vad är ett rimligt konsultarvode?", answer: "Konsultarvodet varierar beroende på bransch, erfarenhet och uppdragstyp. IT-konsulter tar ofta 800-1 500 kr/timme, managementkonsulter 1 000-2 500 kr/timme. Fast pris per projekt är också vanligt." },
      { question: "Behöver jag sekretessklausul i konsultavtalet?", answer: "Ja, det rekommenderas starkt. Konsulten får ofta tillgång till känslig affärsinformation. En sekretessklausul i konsultavtalet fungerar som ett inbyggt NDA och skyddar din information." },
      { question: "Vad händer om konsulten inte levererar i tid?", answer: "Det beror på vad som avtalats om förseningar. Avtalet kan innehålla vite vid försenad leverans, rätt att avbeställa, eller reducerat arvode. Utan reglering gäller allmänna avtalsrättsliga regler." },
    ],
  },

  sekretessavtal: {
    features: [
      "Uppgifter om båda parter",
      "Definition av konfidentiell information",
      "Val av ensidigt eller ömsesidigt NDA",
      "Undantag från sekretess",
      "Sekretessperiod med anpassningsbar längd",
      "Hantering av information vid avtalets slut",
      "Vite och skadestånd vid brott",
      "Referens till lagen om företagshemligheter",
      "Jurisdiktion och tvistlösning",
      "Signaturrader för båda parter",
    ],
    heading: "Vad är ett sekretessavtal (NDA)?",
    paragraphs: [
      "Ett sekretessavtal, ofta kallat NDA (Non-Disclosure Agreement), är ett juridiskt bindande avtal där en eller båda parter förbinder sig att inte avslöja konfidentiell information. Det är ett av de vanligaste affärsavtalen och används dagligen av företag i alla storlekar.",
      "Sekretessavtal behövs i många situationer: innan du delar en affärsidé med en potentiell investerare, när du förhandlar om samarbeten, vid anställning av nyckelpersoner, eller när du anlitar konsulter och underleverantörer som får tillgång till känslig information.",
      "Vår NDA-mall är skriven på svenska och anpassad för svenska förhållanden. Den kan användas som ensidigt sekretessavtal (en part delar information) eller ömsesidigt (båda parter delar information) och är klar att fylla i online eller ladda ner som PDF.",
    ],
    sections: [
      {
        heading: "Vad betyder NDA och varför behöver du ett?",
        paragraphs: [
          "NDA är en förkortning av Non-Disclosure Agreement, det internationella begreppet för sekretessavtal. På svenska kallas det också tystnadsplikt, konfidentialitetsavtal eller sekretessförbindelse. Oavsett namn har avtalet samma syfte: att skydda konfidentiell information från att spridas.",
          "Ett NDA skyddar affärshemligheter som kundlistor, prissättning, tekniska lösningar, marknadsplaner och annan strategisk information. Utan ett NDA riskerar du att information du delar i förtroende sprids fritt, utan att du kan kräva ersättning.",
          "NDA-avtal är standard i näringslivet. De används av allt från startups som vill skydda sin affärsidé till storföretag som skyddar sina innovationer. Att be om ett NDA innan du delar känslig information är inte bara klokt - det är professionellt.",
        ],
      },
      {
        heading: "Ensidigt eller ömsesidigt sekretessavtal?",
        paragraphs: [
          "Ett ensidigt sekretessavtal (unilateral NDA) innebär att bara en part delar konfidentiell information, och den andra förbinder sig att hålla den hemlig. Det är vanligt vid anställningar, konsultuppdrag och när du presenterar en affärsidé för investerare.",
          "Ett ömsesidigt sekretessavtal (mutual NDA) innebär att båda parter delar och tar emot konfidentiell information. Det är vanligt vid förhandlingar om samarbeten, fusioner, joint ventures eller när två företag utvärderar att arbeta ihop.",
          "Vår mall stöder båda varianterna. Vi rekommenderar ömsesidigt NDA när båda parter delar information, och ensidigt NDA i alla andra fall. Ensidigt NDA är enklare och tydligare för den mottagande parten.",
        ],
      },
      {
        heading: "Lagen om företagshemligheter",
        paragraphs: [
          "I Sverige skyddas företagshemligheter av lagen om företagshemligheter (2018:558). Lagen gäller oavsett om det finns ett NDA eller inte, men ett sekretessavtal stärker skyddet avsevärt och gör det lättare att kräva skadestånd.",
          "Enligt lagen är en företagshemlighet information som inte är allmänt känd, som innehavaren har vidtagit åtgärder för att skydda, och som har ett kommersiellt värde just för att den är hemlig. Ett NDA är ett viktigt bevis på att du har vidtagit skyddsåtgärder.",
          "Om någon bryter mot ett NDA kan du kräva skadestånd både enligt avtalet (avtalat vite) och enligt lagen om företagshemligheter. Lagen ger även möjlighet till vitesförbud och i grova fall kan brott mot lagen ge fängelse.",
        ],
      },
      {
        heading: "Så skriver du ett sekretessavtal",
        paragraphs: [
          "Det viktigaste i ett NDA är att tydligt definiera vad som utgör konfidentiell information. Var specifik: 'all information om kunddatabaser, prissättning och produktutveckling' är bättre än 'all affärsinformation'. En alltför bred definition kan göra avtalet svårt att tillämpa.",
          "Ange tydliga undantag: information som redan är allmänt känd, information som mottagaren redan hade, eller information som mottagaren fått från tredje part utan sekretess. Dessa undantag är standard och gör avtalet rimligt och genomförbart.",
          "Bestäm sekretessperioden (vanligen 2-5 år) och ange vad som ska hända med information och dokument när avtalet upphör. Specificera konsekvenser vid brott: avtalat vite ger en förutbestämd ersättning som är enklare att driva in än ett ospecificerat skadeståndskrav.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är ett NDA?", answer: "NDA står för Non-Disclosure Agreement - det engelska begreppet för sekretessavtal. Det är ett juridiskt bindande avtal där parterna förbinder sig att inte avslöja konfidentiell information som delas inom ramen för avtalet." },
      { question: "Vad betyder NDA på svenska?", answer: "NDA översätts till sekretessavtal eller konfidentialitetsavtal på svenska. Ibland används även begreppen tystnadsavtal eller sekretessförbindelse. Alla dessa termer syftar på samma typ av avtal." },
      { question: "Hur länge gäller ett sekretessavtal?", answer: "Sekretessperioden bestäms i avtalet och är vanligen 2-5 år. Vissa typer av information, som tekniska företagshemligheter, kan skyddas under längre tid. Sekretessen gäller den angivna perioden från avtalets undertecknande." },
      { question: "Vad händer om någon bryter mot NDA:t?", answer: "Den som bryter mot avtalet kan bli skadeståndsskyldig. Med ett avtalat vite får du en förutbestämd ersättning. Brott kan även strida mot lagen om företagshemligheter (2018:558) och i grova fall leda till straffrättsliga påföljder." },
      { question: "Behöver jag NDA med en konsult?", answer: "Ja, det rekommenderas starkt. Konsulter och frilansare får ofta tillgång till känslig affärsinformation. Ett NDA säkerställer att informationen inte sprids till konkurrenter eller används i andra uppdrag." },
      { question: "Är ett NDA juridiskt giltigt i Sverige?", answer: "Ja, sekretessavtal är fullt juridiskt giltiga och bindande i Sverige. De stöds av allmänna avtalsrättsliga principer och kompletteras av lagen om företagshemligheter som ger ytterligare skydd." },
      { question: "Kan jag använda ett engelskt NDA i Sverige?", answer: "Ja, men vi rekommenderar ett svenskt NDA om båda parter är svenska. Vid tvist i svensk domstol kan ett engelskt avtal behöva översättas, och det finns risk att begrepp tolkas annorlunda. Välj svenskt avtal för svenska affärsrelationer." },
      { question: "Vad kostar det att upprätta ett NDA?", answer: "Vår NDA-mall är helt gratis att använda. Du kan fylla i den online och ladda ner som PDF utan kostnad. Hos en jurist kostar ett skräddarsytt NDA vanligtvis 3 000-10 000 kr." },
    ],
  },

  aktieagaravtal: {
    features: [
      "Uppgifter om bolaget och samtliga aktieägare",
      "Ägarfördelning och aktieinnehav",
      "Beslutsordning och styrelserepresentation",
      "Överlåtelsebegränsningar (drag-along, tag-along)",
      "Förköpsrätt vid aktieförsäljning",
      "Utdelningspolicy",
      "Konkurrensklausul och sekretess",
      "Exitklausuler och värderingsmetod",
      "Deadlock-mekanismer vid olösliga tvister",
      "Signaturrader för alla aktieägare",
    ],
    heading: "När behöver du ett aktieägaravtal?",
    paragraphs: [
      "Ett aktieägaravtal behövs när två eller fler personer äger ett aktiebolag tillsammans. Det reglerar förhållandet mellan delägarna och kompletterar bolagsordningen med detaljerade bestämmelser som inte passar i ett offentligt dokument.",
      "Utan aktieägaravtal regleras bara det mest grundläggande av aktiebolagslagen och bolagsordningen. Frågor som vad som händer om en delägare vill sälja, hur konflikter löses och vilka arbetsinsatser som krävs lämnas oreglerade.",
      "Vår mall täcker de viktigaste punkterna för ett aktieägaravtal: ägarstruktur, beslutsfattande, överlåtelse, konkurrens, utdelning och exit. Den passar för nystartade bolag, familjeföretag och etablerade företag med flera ägare.",
    ],
    sections: [
      {
        heading: "Varför räcker inte bolagsordningen?",
        paragraphs: [
          "Bolagsordningen är ett offentligt dokument som registreras hos Bolagsverket. Den reglerar grundläggande frågor som bolagets namn, verksamhet, aktiekapital och beslutsgångar. Men den kan inte innehålla detaljerade regler om delägarnas inbördes förhållanden.",
          "Aktieägaravtalet är ett privat avtal som kompletterar bolagsordningen. Här kan ni reglera känsliga frågor som konkurrensförbud, arbetsplikt, lönepolicy och vad som händer om en delägare vill lämna.",
          "En viktig skillnad: bolagsordningen gäller alla nuvarande och framtida aktieägare, medan aktieägaravtalet bara binder de som undertecknat det. Därför bör nya delägare alltid ansluta sig till aktieägaravtalet.",
        ],
      },
      {
        heading: "Viktiga klausuler i ett aktieägaravtal",
        paragraphs: [
          "Förköpsrätt innebär att övriga ägare har rätt att köpa aktierna innan de säljs externt. Drag-along ger majoritetsägaren rätt att tvinga alla att sälja vid ett bud på hela bolaget. Tag-along ger minoritetsägare rätt att sälja på samma villkor som majoriteten.",
          "Deadlock-mekanismer hanterar situationer där delägarna inte kan enas. Vanliga lösningar är medling, köprätt till fastställt pris (Russian roulette-klausul) eller upplösning av bolaget.",
          "Konkurrensklausul hindrar delägare från att starta eller investera i konkurrerande verksamhet. Arbetsplikt anger vilka insatser varje delägare förväntas göra. Utdelningspolicy bestämmer hur vinsten ska fördelas.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är skillnaden mellan aktieägaravtal och bolagsordning?", answer: "Bolagsordningen är offentlig och registreras hos Bolagsverket. Aktieägaravtalet är privat och reglerar detaljer som konkurrensförbud, överlåtelsebegränsningar och deadlock-mekanismer som inte passar i ett offentligt dokument." },
      { question: "Vad betyder drag-along och tag-along?", answer: "Drag-along ger majoritetsägaren rätt att tvinga övriga att sälja vid en försäljning av hela bolaget. Tag-along ger minoritetsägare rätt att sälja på samma villkor om majoritetsägaren säljer." },
      { question: "Behöver alla aktieägare skriva under?", answer: "Avtalet binder bara de som undertecknat det. Det är starkt rekommenderat att alla aktieägare skriver under, annars gäller inte avtalets begränsningar för dem som inte är med." },
      { question: "När ska aktieägaravtalet upprättas?", answer: "Helst redan vid bolagets grundande. Det är mycket lättare att enas om regler när allt är bra mellan delägarna. Att upprätta ett avtal mitt i en konflikt är betydligt svårare." },
      { question: "Vad är en Russian roulette-klausul?", answer: "En deadlock-mekanism där den ena parten erbjuder att köpa den andras aktier till ett visst pris. Den andra parten kan välja att antingen sälja till det priset eller köpa ut den förste till samma pris." },
      { question: "Hur värderas bolaget vid exit?", answer: "Värderingsmetoden bör anges i avtalet: substansvärde, kassaflödesvärdering (DCF), multipelvärdering eller oberoende värdering. Utan avtalad metod kan det bli kostsamma tvister om rätt pris." },
    ],
  },

  samarbetsavtal: {
    features: [
      "Uppgifter om samarbetsparterna",
      "Samarbetets syfte och omfattning",
      "Ansvarsfördelning mellan parterna",
      "Kostnads- och intäktsfördelning",
      "Immateriella rättigheter",
      "Sekretessklausul",
      "Avtalstid och uppsägning",
      "Tvistlösning och medling",
      "Exklusivitet vid behov",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett samarbetsavtal?",
    paragraphs: [
      "Ett samarbetsavtal behövs när två eller fler företag eller parter ska genomföra ett gemensamt projekt eller etablera ett partnerskap. Avtalet klargör vem som ansvarar för vad, hur kostnader och intäkter fördelas och vad som händer om samarbetet upphör.",
      "Utan ett skriftligt samarbetsavtal finns stor risk för missförstånd om förväntningar, arbetsinsatser och ekonomi. Muntliga överenskommelser är svåra att bevisa och leder ofta till konflikter när samarbetet växer.",
      "Vår mall är flexibel och kan anpassas för olika typer av samarbeten: gemensamma projekt, strategiska partnerskap, marknadsföringssamarbeten, produktutveckling och joint ventures.",
    ],
    sections: [
      {
        heading: "Olika typer av samarbetsavtal",
        paragraphs: [
          "Ett projektsamarbetsavtal reglerar ett avgränsat gemensamt projekt med tydlig start och slut. Parterna bidrar med olika resurser och delar på resultatet. Det är den vanligaste formen.",
          "Ett strategiskt partnerskap är mer långsiktigt och handlar ofta om att utnyttja varandras styrkor: ett företag har tekniken, det andra har kundbasen. Här är det extra viktigt att reglera exklusivitet och konkurrens.",
          "Vid joint ventures skapar parterna ofta ett gemensamt bolag. I sådana fall behövs både ett samarbetsavtal och ett aktieägaravtal. Samarbetsavtalet reglerar parternas bidrag och det gemensamma bolagets syfte.",
        ],
      },
      {
        heading: "Viktiga punkter i ett samarbetsavtal",
        paragraphs: [
          "Definiera samarbetets syfte tydligt och avgränsat. Vad ska uppnås? Vilka milstolpar finns? Vad ingår och vad ingår inte? En tydlig definition förebygger scope creep och obalanserade arbetsinsatser.",
          "Reglera ekonomin noggrant: vem betalar för vad, hur fördelas intäkter, och vad händer med kostnader om samarbetet avbryts? Ange också hur gemensam egendom (utrustning, IP, kundregister) fördelas vid avslut.",
          "Inkludera en sekretessklausul och bestäm vem som äger immateriella rättigheter som skapas under samarbetet. Ange hur tvister ska lösas - medling är ofta snabbare och billigare än domstolsprocess.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är skillnaden mellan samarbetsavtal och konsultavtal?", answer: "Ett samarbetsavtal reglerar ett partnerskap där parterna bidrar gemensamt och delar på risker och resultat. Ett konsultavtal handlar om att en part utför arbete åt den andra mot ersättning." },
      { question: "Behöver vi ett samarbetsavtal om vi redan har en muntlig överenskommelse?", answer: "Ja, absolut. Ett skriftligt avtal förtydligar förväntningar, ansvar och ekonomi. Muntliga avtal är svåra att bevisa och tolkningar kan skilja sig åt, särskilt när det handlar om pengar." },
      { question: "Hur fördelas intäkter i ett samarbetsavtal?", answer: "Intäktsfördelningen bestäms av parterna och ska framgå tydligt av avtalet. Den kan baseras på arbetsinsats, investering, ägarandelar eller annan överenskommen modell." },
      { question: "Kan samarbetsavtalet sägas upp?", answer: "Ja, avtalet bör innehålla tydliga uppsägningsvillkor: uppsägningstid, vad som händer med pågående projekt och hur gemensamma tillgångar fördelas vid avslut." },
      { question: "Behöver vi reglera immateriella rättigheter?", answer: "Ja, det är en av de viktigaste frågorna. Bestäm vem som äger IP som skapas under samarbetet, om den delas, och vad som händer med gemensam IP om samarbetet upphör." },
      { question: "Vad händer om en part inte uppfyller sina åtaganden?", answer: "Avtalet bör ange konsekvenser: möjlighet att häva avtalet, rätt till skadestånd, eller medling. Utan reglering gäller allmänna avtalsrättsliga regler, vilket ofta innebär långdragna processer." },
    ],
  },

  fullmakt: {
    features: [
      "Uppgifter om fullmaktsgivare och ombud",
      "Val av fullmaktstyp (generell, begränsad, bank, process)",
      "Specificering av befogenheter",
      "Giltighetstid med start- och slutdatum",
      "Villkor för återkallelse",
      "Utrymme för särskilda begränsningar",
      "Referens till avtalslagen 2 kap.",
      "Vittnesrader vid behov",
      "Signaturrad för fullmaktsgivare",
      "Möjlighet att ladda ner som PDF",
    ],
    heading: "När behöver du en fullmakt?",
    paragraphs: [
      "En fullmakt ger en annan person rätt att agera och fatta beslut i ditt namn. Det kan handla om allt från att hämta ut ett paket till att genomföra en fastighetsaffär, sköta bankärenden eller företräda dig hos myndigheter.",
      "Fullmakter är vanliga i vardagen men många vet inte att det finns stora skillnader mellan olika typer. En generell fullmakt ger ombudet breda befogenheter, medan en begränsad fullmakt är noggrant avgränsad till en specifik handling eller ett visst ärende.",
      "Vår fullmaktsmall låter dig välja typ av fullmakt och specificera exakt vilka befogenheter ombudet ska ha. Mallen är anpassad efter svensk lagstiftning och kan laddas ner som PDF eller fyllas i direkt online.",
    ],
    sections: [
      {
        heading: "Olika typer av fullmakter i Sverige",
        paragraphs: [
          "En generell fullmakt (generalfullmakt) ger ombudet rätt att agera i ditt namn i de flesta ärenden. Den används ofta när fullmaktsgivaren ska vara bortrest under längre tid eller har svårt att sköta sina ärenden. På grund av de breda befogenheterna bör du bara ge generalfullmakt till någon du har fullt förtroende för.",
          "En begränsad fullmakt gäller enbart för en specifik handling eller ett avgränsat ärende. Exempel: att sälja en bil, underteckna ett visst avtal, eller hämta ut handlingar. Denna typ av fullmakt ger minst risk för missbruk och rekommenderas i de flesta fall.",
          "En bankfullmakt ger ombudet rätt att sköta dina bankärenden, som att göra uttag, överföringar eller teckna avtal med banken. Många banker har egna fullmaktsformulär som de föredrar, men en generell bankfullmakt fungerar i de flesta fall.",
          "En processfullmakt ger ett juridiskt ombud rätt att föra din talan i domstol. Den används främst av advokater och jurister och behöver vara specifik om vilka ärenden den omfattar.",
        ],
      },
      {
        heading: "Juridisk bakgrund - avtalslagen",
        paragraphs: [
          "Fullmakter regleras i avtalslagen (1915:218), närmare bestämt 2 kap. om fullmakt. Lagen skiljer mellan olika typer av fullmakter beroende på hur de har tillkommit: skriftlig fullmakt, ställningsfullmakt och toleransfullmakt.",
          "En skriftlig fullmakt är den vanligaste och mest formella typen. Den ger tydlig dokumentation om vilka befogenheter ombudet har. Fullmakten gäller gentemot tredje man (exempelvis en bank eller myndighet) så länge den inte har återkallats.",
          "Viktigt att veta: om ombudet överskrider sina befogenheter enligt fullmakten kan fullmaktsgivaren i vissa fall bli bunden ändå, om tredje man var i god tro. Därför är det viktigt att vara tydlig och specifik med vilka befogenheter fullmakten ger.",
        ],
      },
      {
        heading: "Så skriver du en fullmakt steg för steg",
        paragraphs: [
          "Börja med att fylla i dina uppgifter som fullmaktsgivare: namn, personnummer och adress. Fyll sedan i uppgifter om det ombud som ska agera i ditt namn.",
          "Välj vilken typ av fullmakt det gäller och beskriv befogenheterna så specifikt som möjligt. Istället för 'sköta bankärenden' kan du skriva 'göra uttag från konto XXXX-XXXX hos Nordea, upp till max 50 000 kr'. Ju mer specifik du är, desto mindre risk för missbruk.",
          "Ange fullmaktens giltighetstid. En fullmakt utan slutdatum gäller tills den återkallas. Vi rekommenderar att alltid sätta ett slutdatum, särskilt vid generella fullmakter. Signera fullmakten och ge en kopia till ombudet.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är skillnaden mellan generell och begränsad fullmakt?", answer: "En generell fullmakt (generalfullmakt) ger ombudet breda befogenheter att agera i ditt namn i de flesta ärenden. En begränsad fullmakt gäller bara för specifika handlingar. Vi rekommenderar att alltid använda begränsad fullmakt om möjligt." },
      { question: "Hur återkallar jag en fullmakt?", answer: "Du kan när som helst återkalla en fullmakt genom att meddela ombudet skriftligt. Om fullmakten har visats för tredje part (bank, myndighet) bör du även meddela dem. Förstör alla kopior av fullmakten." },
      { question: "Behöver en fullmakt bevittnas?", answer: "En vanlig fullmakt behöver inte bevittnas för att vara juridiskt giltig. Däremot kan vittnen stärka bevisvärdet. Banker och myndigheter kan ha egna krav. En framtidsfullmakt måste bevittnas av två vittnen." },
      { question: "Kan jag ge fullmakt till vem som helst?", answer: "Ja, du kan ge fullmakt till vilken myndig person som helst. Ombudet behöver inte vara släkt med dig eller ha juridisk utbildning. Välj dock alltid någon du har fullt förtroende för." },
      { question: "Kan jag skapa en digital fullmakt?", answer: "Ja, en fullmakt som skapas och signeras digitalt är juridiskt giltig i Sverige. Du kan fylla i vår mall online och ladda ner som PDF. Digital signering fungerar och accepteras av de flesta motparter." },
      { question: "Vad är skillnaden mellan fullmakt och framtidsfullmakt?", answer: "En vanlig fullmakt gäller omedelbart och upphör att gälla om du förlorar din beslutsförmåga. En framtidsfullmakt träder däremot i kraft först när du inte längre kan fatta egna beslut, exempelvis vid demens." },
      { question: "Godkänner banker alla typer av fullmakter?", answer: "De flesta banker accepterar skriftliga fullmakter, men många föredrar sina egna formulär. Kontakta din bank i förväg för att kontrollera vilka krav de har. Generella fullmakter accepteras oftast utan problem." },
      { question: "Hur länge gäller en fullmakt?", answer: "En fullmakt gäller till det datum som anges i fullmakten, eller tills den återkallas. En fullmakt utan slutdatum gäller tills vidare. Vi rekommenderar att alltid sätta ett slutdatum för att begränsa risken." },
    ],
  },

  framtidsfullmakt: {
    features: [
      "Uppgifter om fullmaktsgivare och fullmaktshavare",
      "Vilka angelägenheter fullmakten omfattar",
      "Ekonomiska angelägenheter (bank, fastighet, skatt)",
      "Personliga angelägenheter (vård, boende, myndigheter)",
      "Ersättningsfullmaktshavare",
      "Villkor för ikraftträdande",
      "Granskning och tillsyn",
      "Formkrav enligt lag (2017:310)",
      "Vittnessignaturer (krav för giltighet)",
    ],
    heading: "Vad är en framtidsfullmakt?",
    paragraphs: [
      "En framtidsfullmakt är ett juridiskt dokument som träder i kraft om du på grund av sjukdom, psykisk störning eller liknande inte längre kan ta hand om dina angelägenheter. Det är ett alternativ till god man eller förvaltare och ger dig kontroll över vem som ska företräda dig.",
      "Framtidsfullmakten regleras av lagen (2017:310) om framtidsfullmakter. Till skillnad från en vanlig fullmakt träder den inte i kraft omedelbart, utan först den dag du inte längre kan hantera dina ärenden.",
      "Det är ett av de viktigaste juridiska dokumenten du kan upprätta. Med en framtidsfullmakt bestämmer du själv - medan du fortfarande kan - vem som ska sköta din ekonomi och dina personliga angelägenheter i framtiden.",
    ],
    sections: [
      {
        heading: "Varför behöver du en framtidsfullmakt?",
        paragraphs: [
          "Utan framtidsfullmakt kan dina anhöriga behöva ansöka om god man eller förvaltare hos tingsrätten om du blir oförmögen att sköta dina angelägenheter. Det är en långsam process där du inte själv väljer vem som företräder dig.",
          "Med en framtidsfullmakt väljer du själv vem du litar på och exakt vilka befogenheter den personen ska ha. Du kan till exempel ge fullmaktshavaren rätt att sköta din ekonomi men inte fatta beslut om ditt boende, eller tvärtom.",
          "Framtidsfullmakten är särskilt viktig om du driver företag, äger fastigheter eller har komplicerade ekonomiska förhållanden. Utan fullmakt kan det bli svårt för dina anhöriga att hantera löpande ärenden.",
        ],
      },
      {
        heading: "Formkrav för giltighet",
        paragraphs: [
          "En framtidsfullmakt har strikta formkrav: den ska vara skriftlig, undertecknad av fullmaktsgivaren i närvaro av två vittnen, och vittnena ska skriva under med sina namn. Fullmaktsgivaren ska vara 18 år och vid sina sinnens fulla bruk.",
          "Vittnena måste vara minst 15 år och förstå att de bevittnar en framtidsfullmakt. Fullmaktshavaren, dennes make/maka, sambo, barn eller syskon får inte vara vittne. Inte heller den som står under fullmaktshavarens förmyndarskap.",
          "Fullmakten ska tydligt ange att det är en framtidsfullmakt, vem som är fullmaktshavare och vilka angelägenheter som omfattas. Vi rekommenderar att du utser en ersättningsfullmaktshavare för det fall den första inte kan eller vill fullgöra uppdraget.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är skillnaden mellan fullmakt och framtidsfullmakt?", answer: "En vanlig fullmakt gäller omedelbart och upphör om du förlorar din beslutsförmåga. En framtidsfullmakt träder i kraft först när du inte längre kan ta hand om dina angelägenheter." },
      { question: "Vem kan vara vittne till en framtidsfullmakt?", answer: "Vittnena måste vara minst 15 år och förstå vad de bevittnar. Fullmaktshavaren och dennes närstående (make, sambo, barn, syskon) får inte vara vittnen." },
      { question: "Kan en framtidsfullmakt återkallas?", answer: "Ja, så länge du har din beslutsförmåga kan du återkalla framtidsfullmakten. Återkallelsen bör ske skriftligt. När fullmakten väl trätt i kraft kan den bara upphävas av domstol." },
      { question: "Vem bestämmer när framtidsfullmakten träder i kraft?", answer: "Fullmaktshavaren bedömer när du inte längre kan sköta dina angelägenheter. Fullmaktshavaren kan också begära att tingsrätten prövar frågan formellt." },
      { question: "Behöver framtidsfullmakten registreras?", answer: "Nej, en framtidsfullmakt behöver inte registreras hos någon myndighet. Förvara originalet säkert och informera fullmaktshavaren om var det finns." },
      { question: "Kan jag ha flera fullmaktshavare?", answer: "Ja, du kan utse flera fullmaktshavare som agerar tillsammans eller var för sig. Vi rekommenderar att också utse en ersättningsfullmaktshavare som backup." },
    ],
  },

  testamente: {
    features: [
      "Uppgifter om testatorn (den som upprättar testamentet)",
      "Fördelning av kvarlåtenskap (universella förordnanden)",
      "Legat (specifika tillgångar till specifika personer)",
      "Enskild egendom-klausul",
      "Villkor och önskemål om begravning",
      "Sekundosuccession vid inbördes testamente",
      "Formkrav enligt ärvdabalken",
      "Vittnessignaturer (krav för giltighet)",
      "Utrymme för särskilda önskemål",
    ],
    heading: "Varför behöver du ett testamente?",
    paragraphs: [
      "Ett testamente behövs om du vill att din kvarlåtenskap ska fördelas annorlunda än vad den legala arvsordningen i ärvdabalken anger. Utan testamente ärver dina närmaste anhöriga enligt en förutbestämd ordning som kanske inte stämmer med dina önskemål.",
      "Testamente är särskilt viktigt om du är sambo (sambor ärver inte varandra utan testamente), om du vill ge arv till vänner, organisationer eller välgörenhet, eller om du vill att arvet ska vara enskild egendom.",
      "Ett testamente måste uppfylla strikta formkrav i ärvdabalken: det ska vara skriftligt, undertecknat av testatorn och bevittnat av två vittnen som är närvarande samtidigt. Vår mall uppfyller alla dessa formkrav.",
    ],
    sections: [
      {
        heading: "Arvsordningen i Sverige",
        paragraphs: [
          "Utan testamente fördelas arvet enligt ärvdabalkens arvsklasser. Första arvsklassen är bröstarvingar (barn och barnbarn). Andra arvsklassen är föräldrar, syskon och syskonbarn. Tredje arvsklassen är far- och morföräldrar.",
          "Äkta makar ärver varandra med fri förfoganderätt (gemensamma barn har rätt att vänta med sitt arv tills den andra föräldern går bort). Sambor ärver däremot inte varandra alls utan testamente - ett vanligt missförstånd.",
          "Med ett testamente kan du fördela kvarlåtenskapen fritt, med en viktig begränsning: bröstarvingar har alltid rätt till sin laglott, som är hälften av arvslotten. Den andra hälften kan du testamentera fritt.",
        ],
      },
      {
        heading: "Formkrav och giltighet",
        paragraphs: [
          "Testamentet ska undertecknas av testatorn i närvaro av två vittnen. Vittnena ska vara minst 15 år, förstå att det handlar om ett testamente, och båda ska vara närvarande samtidigt. De behöver inte veta testamentets innehåll.",
          "Vittnena får inte vara testamentstagare, testatarorns make/maka, sambo, syskon eller personer i rakt upp- eller nedstigande led. De ska skriva under med sina namn och gärna ange yrke, hemvist och personnummer.",
          "Ett testamente kan klandras inom sex månader efter att arvingarna delgivits det. Klandergrunder kan vara att formkraven inte uppfyllts, att testatorn inte var vid sina sinnens fulla bruk, eller att testamentet tillkommit under tvång.",
        ],
      },
    ],
    faqs: [
      { question: "Kan jag göra mina barn arvlösa med ett testamente?", answer: "Nej, bröstarvingar (barn) har alltid rätt till sin laglott, som är hälften av vad de skulle fått utan testamente. Laglotten kan inte testamenteras bort." },
      { question: "Måste ett testamente bevittnas?", answer: "Ja, ett testamente måste undertecknas i närvaro av två vittnen som också ska skriva under. Vittnena behöver inte veta innehållet, bara att det är ett testamente." },
      { question: "Kan jag ändra mitt testamente?", answer: "Ja, du kan ändra eller återkalla ditt testamente när som helst genom att upprätta ett nytt eller förstöra det gamla. Det senaste giltiga testamentet gäller." },
      { question: "Var ska jag förvara mitt testamente?", answer: "Förvara originalet säkert, exempelvis i ett bankfack. Informera någon du litar på om var det finns. Det finns inget officiellt testamentsregister i Sverige." },
      { question: "Ärver sambor varandra?", answer: "Nej, sambor ärver inte varandra utan testamente. Det enda sambon har rätt till utan testamente är bodelning av samboegendom (gemensam bostad och bohag). Ett testamente är därför extra viktigt för sambor." },
      { question: "Vad är ett inbördes testamente?", answer: "Ett inbördes testamente upprättas av två personer (ofta makar) som testamenterar till varandra. Det reglerar vem som ärver den först avlidne och kan även styra vad som händer när den andre också går bort." },
    ],
  },

  skuldebrev: {
    features: [
      "Uppgifter om långivare och låntagare",
      "Lånebelopp och utbetalningsdatum",
      "Ränta (fast, rörlig eller räntefritt)",
      "Amorteringsplan och betalningsdatum",
      "Förfallodatum",
      "Villkor vid sen betalning (dröjsmålsränta)",
      "Uppsägningsvillkor",
      "Borgen om tillämpligt",
      "Signaturrader för båda parter",
    ],
    heading: "När behöver du ett skuldebrev?",
    paragraphs: [
      "Ett skuldebrev behövs när du lånar ut eller lånar pengar av en privatperson. Det dokumenterar lånet och villkoren svart på vitt, och skyddar både långivare och låntagare vid eventuella tvister.",
      "Utan skuldebrev finns inga bevis på att pengarna var ett lån och inte en gåva. Det är särskilt viktigt vid lån mellan familjemedlemmar, där Skatteverket kan ifrågasätta om överföringen var ett lån eller en gåva.",
      "Vår mall stöder både räntefria och räntebelagda lån med valfri amorteringsplan. Den kan användas för privatlån mellan familjemedlemmar, vänner, kollegor och andra privatpersoner.",
    ],
    sections: [
      {
        heading: "Olika typer av skuldebrev",
        paragraphs: [
          "Ett enkelt skuldebrev är ställt till en specifik person (långivaren) och kan inte överlåtas fritt. Det är den vanligaste typen vid privatlån. Låntagaren vet alltid vem som är borgenär.",
          "Ett löpande skuldebrev kan överlåtas till en ny borgenär genom att brevet lämnas över. Den nya innehavaren kan kräva betalning. Löpande skuldebrev används främst i kommersiella sammanhang.",
          "Vår mall är ett enkelt skuldebrev, vilket passar bäst för privatlån. Det ger låntagaren trygghet att veta att skulden inte plötsligt kan hamna hos en okänd tredje part.",
        ],
      },
      {
        heading: "Ränta och skattekonsekvenser",
        paragraphs: [
          "Privatlån kan vara räntefria eller ha en avtalad ränta. Om ränta tas ut ska den deklareras som kapitalinkomst av långivaren, och låntagaren kan göra avdrag för räntekostnaderna.",
          "Vid räntefria lån till närstående: Skatteverket kan i teorin beskatta en fiktiv ränteförmån, men i praktiken gäller detta främst mycket stora belopp. Ange alltid tydligt i skuldebrevet om lånet är räntefritt.",
          "Tänk på att dröjsmålsränta (ränta vid sen betalning) enligt räntelagen är referensräntan plus 8 procentenheter. Ni kan avtala om en annan nivå i skuldebrevet.",
        ],
      },
    ],
    faqs: [
      { question: "Vad är skillnaden mellan enkelt och löpande skuldebrev?", answer: "Ett enkelt skuldebrev är ställt till en specifik person och kan inte överlåtas fritt. Ett löpande skuldebrev kan överlåtas till en ny borgenär. Vår mall är ett enkelt skuldebrev, vanligast vid privatlån." },
      { question: "Måste ett privatlån ha ränta?", answer: "Nej, räntefria lån är tillåtna. Ange tydligt i skuldebrevet om lånet är räntefritt. Vid stora belopp till närstående kan Skatteverket i teorin beräkna en fiktiv ränteförmån." },
      { question: "Vad händer om låntagaren inte betalar?", answer: "Med ett skuldebrev kan du ansöka om betalningsföreläggande hos Kronofogden utan att först gå till domstol. Skuldebrevet är ditt viktigaste bevis på skuldens existens och villkor." },
      { question: "Behöver skuldebrevet bevittnas?", answer: "Nej, ett skuldebrev behöver inte bevittnas för att vara giltigt. Det räcker med låntagarens underskrift. Vittnen kan dock stärka bevisvärdet." },
      { question: "Kan jag kräva säkerhet för lånet?", answer: "Ja, du kan kräva borgen (en tredje person som garanterar lånet) eller pant (exempelvis en bil eller annan egendom). Ange säkerheten tydligt i skuldebrevet." },
      { question: "Hur länge gäller ett skuldebrev?", answer: "Ett skuldebrev preskriberas efter tio år om inte preskriptionen avbryts genom betalning, krav eller erkännande av skulden. Skicka en påminnelse innan preskriptionstiden löper ut." },
    ],
  },

  gavobrev: {
    features: [
      "Uppgifter om givare och mottagare",
      "Detaljerad beskrivning av gåvan",
      "Gåvans värde vid överlåtelsen",
      "Villkor om enskild egendom",
      "Villkor om nyttjanderätt",
      "Överlåtelsedatum",
      "Eventuella villkor och förbehåll",
      "Vittnesrader (krävs för fastigheter)",
      "Signaturrader för givare och mottagare",
    ],
    heading: "När behöver du ett gåvobrev?",
    paragraphs: [
      "Ett gåvobrev behövs vid gåvor av större värde och är ett juridiskt krav vid gåva av fastighet. Det dokumenterar vad som getts, till vem, när och under vilka villkor - och kan vara avgörande för att bevisa att det var en gåva och inte ett lån.",
      "Den vanligaste anledningen att upprätta ett gåvobrev är att ange att gåvan ska vara mottagarens enskilda egendom. Det innebär att gåvan inte delas vid en eventuell separation eller skilsmässa. Detta skydd finns bara om det skrivs i gåvobrevet.",
      "Vår mall kan användas för gåvor av pengar, fastigheter, bostadsrätter, fordon, aktier och annan egendom. Den följer svenska formkrav och kan fyllas i online eller laddas ner som PDF.",
    ],
    sections: [
      {
        heading: "Gåvobrev för olika typer av egendom",
        paragraphs: [
          "Vid gåva av fastighet är ett gåvobrev obligatoriskt och måste bevittnas av två vittnen. Gåvobrevet registreras hos Lantmäteriet och mottagaren söker lagfart. Stämpelskatt utgår inte vid gåva om ingen ersättning betalas.",
          "Vid gåva av pengar eller värdepapper behövs inget gåvobrev juridiskt, men det rekommenderas starkt vid större belopp. Utan gåvobrev kan Skatteverket ifrågasätta om överföringen var ett lån, särskilt vid transaktioner mellan närstående.",
          "Vid gåva av bostadsrätt behövs gåvobrev och godkännande från bostadsrättsföreningen. Mottagaren måste bli godkänd som medlem. Vid gåva av bil behövs gåvobrev och ägarbytet registreras hos Transportstyrelsen.",
        ],
      },
      {
        heading: "Enskild egendom - skydda gåvan",
        paragraphs: [
          "Genom att ange att gåvan ska vara enskild egendom skyddas den från bodelning om mottagaren separerar eller skiljer sig. Detta är det vanligaste villkoret i gåvobrev och särskilt viktigt vid gåvor till barn och barnbarn.",
          "Villkoret om enskild egendom måste anges i gåvobrevet vid gåvotillfället. Det kan inte läggas till i efterhand. Tänk på att även avkastningen av enskild egendom kan göras till enskild egendom.",
          "Om du vill att gåvan ska förbli enskild egendom i flera generationer behöver varje efterföljande överlåtelse ha samma villkor. Ange gärna i gåvobrevet att villkoret gäller även för avkastning och surrogat (ersättningsegendom).",
        ],
      },
    ],
    faqs: [
      { question: "Behöver jag ett gåvobrev för pengar?", answer: "Det är inte ett lagkrav, men rekommenderas starkt vid större belopp. Gåvobrevet bevisar att det var en gåva (inte ett lån) och kan innehålla villkor om enskild egendom." },
      { question: "Är gåvor skattefria i Sverige?", answer: "Ja, gåvoskatten avskaffades 2005. Gåvor mellan privatpersoner är skattefria oavsett belopp. Gåvor från arbetsgivare kan dock beskattas som löneförmån." },
      { question: "Vad innebär enskild egendom i ett gåvobrev?", answer: "Enskild egendom ingår inte i en bodelning vid separation eller skilsmässa. Villkoret måste anges i gåvobrevet vid gåvotillfället och kan inte läggas till i efterhand." },
      { question: "Måste gåvobrev bevittnas?", answer: "Vid gåva av fastighet: ja, två vittnen krävs. För annan egendom: nej, men vittnen stärker bevisvärdet. Vid gåva av bostadsrätt krävs föreningens godkännande." },
      { question: "Kan jag ta tillbaka en gåva?", answer: "Som huvudregel kan en fullbordad gåva inte tas tillbaka. Undantag finns om gåvan gavs under förutsättning av villkor som inte uppfyllts, eller om mottagaren gjort sig skyldig till grov otacksamhet." },
      { question: "Påverkar gåvan arvsfördelningen?", answer: "Gåvor till bröstarvingar (barn) presumeras vara förskott på arv och avräknas vid arvsfördelningen. Skriv i gåvobrevet om gåvan ska eller inte ska räknas som förskott på arv." },
    ],
  },

  samboavtal: {
    features: [
      "Uppgifter om båda samborna",
      "Definition av samboegendom",
      "Helt eller delvis undantag från sambolagen",
      "Specificering av egendom som inte ska delas",
      "Reglering av gemensam bostad",
      "Reglering av gemensamt bohag",
      "Datum för avtalets ikraftträdande",
      "Utrymme för övriga bestämmelser",
      "Signaturrader för båda samborna",
    ],
    heading: "När behöver du ett samboavtal?",
    paragraphs: [
      "Ett samboavtal behövs om du och din sambo vill bestämma själva vad som händer med er egendom om ni separerar. Utan samboavtal gäller sambolagen automatiskt, vilket innebär att gemensam bostad och bohag delas lika, oavsett vem som betalat.",
      "Det är särskilt viktigt med samboavtal om en av er äger bostaden sedan innan, om ni gjort ojämna ekonomiska insatser i bostaden, eller om en av er har betydligt mer bohag. Utan avtal kan en separation innebära att du förlorar halva värdet av egendom du betalat själv.",
      "Samboavtalet ska vara skriftligt och undertecknat av båda. Det behöver inte registreras hos någon myndighet och kan upprättas både innan och under samboförhållandet.",
    ],
    sections: [
      {
        heading: "Vad säger sambolagen?",
        paragraphs: [
          "Sambolagen (2003:376) reglerar vad som händer med sambors gemensamma bostad och bohag vid separation. Samboegendom definieras som bostad och bohag som förvärvats för gemensamt bruk - det vill säga köpt för att ni ska använda tillsammans.",
          "Vid separation delas samboegendom lika genom bodelning. Det spelar ingen roll vem som betalat eller vem som står som ägare. Egendom som förvärvats innan samboförhållandet eller genom arv/gåva med villkor om enskild egendom räknas normalt inte som samboegendom.",
          "Med ett samboavtal kan ni helt eller delvis avtala bort sambolagens regler. Ni kan till exempel bestämma att bostaden inte ska delas, att visst bohag undantas, eller att ingen bodelning alls ska ske.",
        ],
      },
      {
        heading: "Vanliga situationer som kräver samboavtal",
        paragraphs: [
          "Om en av er äger bostaden sedan innan och den andre flyttar in: utan samboavtal kan bostaden ändå räknas som samboegendom om den används som gemensam bostad. Med samboavtal kan ni undanta den.",
          "Om ni köper bostad tillsammans men med olika insatser: utan avtal delas bostadens värde lika oavsett vem som betalat mest. Med samboavtal kan ni bestämma en annan fördelning som speglar era insatser.",
          "Om en av er ärver eller får möbler i gåva med villkor om enskild egendom: utan tydligt samboavtal kan det bli tvister om vad som utgör enskild egendom respektive samboegendom.",
        ],
      },
    ],
    faqs: [
      { question: "Vad händer utan samboavtal vid separation?", answer: "Sambolagen gäller: gemensam bostad och bohag som förvärvats för gemensamt bruk delas lika, oavsett vem som betalat. Sparande, bilar, aktier och annan egendom delas inte." },
      { question: "Kan vi skriva samboavtal efter att vi flyttat ihop?", answer: "Ja, ett samboavtal kan skrivas när som helst under samboförhållandet. Det gäller från och med undertecknandet." },
      { question: "Behöver samboavtalet registreras?", answer: "Nej, till skillnad från äktenskapsförord behöver ett samboavtal inte registreras. Det räcker med att det är skriftligt och undertecknat av båda. Spara varsitt original." },
      { question: "Kan vi ändra samboavtalet?", answer: "Ja, ni kan upprätta ett nytt samboavtal som ersätter det tidigare. Båda måste underteckna det nya avtalet. Det gamla bör förstöras för att undvika förvirring." },
      { question: "Ärver sambor varandra?", answer: "Nej, sambor ärver inte varandra. Sambolagen ger bara rätt till bodelning av samboegendom. Om ni vill ärva varandra behöver ni upprätta ett testamente utöver samboavtalet." },
      { question: "Vad räknas som samboegendom?", answer: "Bostad och bohag som förvärvats för gemensamt bruk. En bostad som ägdes innan samboförhållandet räknas normalt inte, men kan göra det om den faktiskt används som gemensam bostad." },
    ],
  },

  aktenskapsforord: {
    features: [
      "Uppgifter om båda makarna",
      "Definition av enskild egendom",
      "Definition av giftorättsgods",
      "Specifik egendom som undantas",
      "Framtida egendom och arv",
      "Avkastning av enskild egendom",
      "Krav på registrering hos Skatteverket",
      "Utrymme för övriga bestämmelser",
      "Signaturrader för båda makarna",
    ],
    heading: "När behöver du ett äktenskapsförord?",
    paragraphs: [
      "Ett äktenskapsförord behövs om ni vill bestämma vilken egendom som ska vara enskild respektive giftorättsgods. Utan äktenskapsförord är all egendom giftorättsgods och delas lika vid en skilsmässa - oavsett vem som äger eller betalat för den.",
      "Äktenskapsförord är särskilt viktigt om en av er driver företag, äger fastigheter, har sparande eller har fått arv. Utan förord kan en skilsmässa innebära att du måste sälja ditt företag eller din bostad för att kunna dela egendomen.",
      "Förordet kan skrivas före eller under äktenskapet och måste registreras hos Skatteverket för att vara giltigt. Vår mall uppfyller alla lagstadgade formkrav.",
    ],
    sections: [
      {
        heading: "Äktenskapsbalken och giftorättsgods",
        paragraphs: [
          "Enligt äktenskapsbalken är all egendom som makarna äger giftorättsgods om den inte gjorts till enskild egendom. Vid skilsmässa delas giftorättsgodset lika genom bodelning, efter avdrag för skulder.",
          "Egendom kan bli enskild på tre sätt: genom äktenskapsförord, genom villkor i gåvobrev, eller genom villkor i testamente. Äktenskapsförordet är det enda sättet som makarna själva kontrollerar.",
          "Det är möjligt att göra all egendom till enskild, eller bara specifik egendom som ett företag, en fastighet eller ett arv. Ni bestämmer själva vad som ska vara vad.",
        ],
      },
      {
        heading: "Vanliga situationer som kräver äktenskapsförord",
        paragraphs: [
          "Om en av er driver eget företag: utan förord ingår företagets värde i bodelningen. En skilsmässa kan tvinga fram en försäljning av företaget. Med äktenskapsförord skyddas företaget.",
          "Om en av er har ärvt eller kommer att ärva egendom: arv med villkor om enskild egendom behöver inte äktenskapsförord, men arv utan villkor blir giftorättsgods. Många föräldrar glömmer att sätta villkor.",
          "Vid omgifte: om en av er har barn från tidigare förhållande och vill skydda deras arvsrätt, kan ett äktenskapsförord förhindra att egendom förs över till den nya makens barn.",
        ],
      },
    ],
    faqs: [
      { question: "Måste äktenskapsförord registreras?", answer: "Ja, ett äktenskapsförord måste registreras hos Skatteverket för att vara giltigt. Skicka in originalhandlingen undertecknad av båda makarna. Registreringen är avgiftsfri." },
      { question: "Kan vi skriva äktenskapsförord efter vigseln?", answer: "Ja, det kan upprättas både före och under äktenskapet. Det kan också ändras eller upphävas genom ett nytt registrerat äktenskapsförord." },
      { question: "Kan ett äktenskapsförord ogiltigförklaras?", answer: "Ja, om förordet är oskäligt kan det jämkas av domstol enligt äktenskapsbalken 12 kap. 3 §. Det kan också ogiltigförklaras vid tvång eller om formkraven inte uppfyllts." },
      { question: "Skyddar äktenskapsförord mot makes skulder?", answer: "Inte direkt, men enskild egendom ingår inte i bodelningen. Det innebär att du slipper dela din egendom med en make som har skulder, vilket ger ett indirekt skydd." },
      { question: "Vad kostar det att registrera ett äktenskapsförord?", answer: "Registreringen hos Skatteverket är avgiftsfri. Du skickar in originalhandlingen undertecknad av båda makarna per post till Skatteverket." },
      { question: "Gäller äktenskapsförordet vid dödsfall?", answer: "Ja, äktenskapsförordet gäller även vid bodelning efter dödsfall. Enskild egendom ingår inte i bodelningen mellan den efterlevande maken och dödsboet." },
    ],
  },

  bodelningsavtal: {
    features: [
      "Uppgifter om båda parterna",
      "Fullständig förteckning av tillgångar",
      "Fullständig förteckning av skulder",
      "Värdering av egendom (marknadsvärde)",
      "Fördelning av tillgångar och skulder",
      "Bodelningslikvid om tillämpligt",
      "Övertagande av lån och ansvar",
      "Enskild egendom som undantas",
      "Signaturrader för båda parterna",
    ],
    heading: "När behöver du ett bodelningsavtal?",
    paragraphs: [
      "Ett bodelningsavtal behövs vid skilsmässa eller separation för att fördela tillgångar och skulder mellan parterna. Det är det dokument som ger ett juridiskt avslut på de ekonomiska förhållandena och visar vad var och en får.",
      "Utan bodelningsavtal finns inget bevis på hur egendomen fördelats, vilket kan leda till framtida tvister. Avtalet är också nödvändigt för att genomföra lagfartsbyten och andra formella ägarskiften.",
      "Vår mall fungerar vid både skilsmässa (äktenskapsbalken) och separation mellan sambor (sambolagen). Den innehåller alla nödvändiga delar för en komplett bodelning.",
    ],
    sections: [
      {
        heading: "Bodelning vid skilsmässa",
        paragraphs: [
          "Vid äktenskapsskillnad ska en bodelning göras enligt äktenskapsbalken. Allt giftorättsgods delas lika efter avdrag för skulder. Enskild egendom (genom äktenskapsförord, gåva eller arv med villkor) ingår inte.",
          "Bodelningen utgår från den kritiska tidpunkten - den dag ansökan om skilsmässa lämnades in. Egendom som förvärvats efter denna dag ingår normalt inte. Marknadsvärde vid bodelningstillfället används för värdering.",
          "Om fördelningen inte blir exakt lika kan den part som får mer betala en bodelningslikvid till den andre. Alternativt kan parterna avtala om en annan fördelning om båda är överens.",
        ],
      },
      {
        heading: "Bodelning vid samboseparation",
        paragraphs: [
          "Vid separation mellan sambor bodelats bara samboegendom: gemensam bostad och bohag som förvärvats för gemensamt bruk. Sparande, bilar, aktier och annan egendom ingår inte i sambobodelningen.",
          "En sambo måste begära bodelning senast ett år efter att samboförhållandet upphörde, annars förlorar man rätten. Skicka en skriftlig begäran om bodelning för att vara säker.",
          "Om ni har samboavtal som undantar egendom från bodelning gäller avtalet. Bodelningsavtalet dokumenterar sedan hur den resterande samboegendomen fördelas.",
        ],
      },
    ],
    faqs: [
      { question: "Måste man göra bodelning vid skilsmässa?", answer: "Ja, vid äktenskapsskillnad ska bodelning göras. Makarna kan dock komma överens om att avstå helt eller delvis om båda är nöjda med fördelningen, men det bör dokumenteras skriftligt." },
      { question: "Hur värderas egendom vid bodelning?", answer: "Egendom värderas till marknadsvärde vid bodelningstillfället. Skulder dras av. Om parterna inte enas om värderingen kan oberoende värdering behövas, t.ex. för fastigheter." },
      { question: "Kan man göra bodelning utan advokat?", answer: "Ja, om ni är överens kan ni upprätta bodelningsavtalet själva. Om ni inte kan enas kan tingsrätten utse en bodelningsförrättare, men det kostar mer." },
      { question: "Vad är bodelningslikvid?", answer: "Om den ena parten får mer egendom vid fördelningen betalar denne en bodelningslikvid (ekonomisk kompensation) till den andre för att utjämna fördelningen." },
      { question: "Behöver bodelningsavtalet registreras?", answer: "Nej, ett bodelningsavtal behöver inte registreras. Men om en fastighet byter ägare genom bodelningen behöver den nya ägaren söka lagfart hos Lantmäteriet med bodelningsavtalet som grund." },
      { question: "Hur lång tid har jag på mig att begära bodelning?", answer: "Vid skilsmässa finns ingen tidsgräns, men det rekommenderas att göra det i samband med skilsmässan. Vid samboseparation måste bodelning begäras inom ett år efter separationen." },
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
