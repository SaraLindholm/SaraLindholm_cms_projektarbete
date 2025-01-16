# Projektarbete CMS-utveckling, FEU23

Inlämning senast 16 januari 2024 (kl. 23.59)
Redovisning 17 januari 2023 (kl. 9-16)

## Övergripande uppgift

Uppgiften går ut på att skapa en egen portfoliowebbplats som hämtar sin data från ett
Headless CMS. Webbplatsen ska renderas SSR/SSG-teknik.
Andra tekniska lösningar är möjliga vid önskemål, stäm av med utbildaren vid intresse.
Innehållet i Headless-CMS-lösningen ska vara möjligt att administrera från ett eller flera administrationsgränssnitt.

### För godkänt betyg (G)

- Dela github-repo: "namn_cms_projektarbete" med ian.hellgren@iths.se

  - Kontinuerligt pushande och tydliga commit-meddelanden är en god möjlighet att visa vad ni kan.
  - Det erbjuder också en fungerande kod att återvända till ifall något börjar krångla.

- Portfoliowebplatsen ska bestå av minst dessa sidor, med innehåll hämtat ifrån headless-CMS:
  ~~- Startsida~~
  ~~- rubrik~~
  ~~- presentationstext~~
  ~~- bild~~
  ~~ - Projekt-index~~
  ~~ - varje projekt har:~~
  ~~ - titel~~
  ~~- kort beskrivning~~
  ~~ - bild~~
  ~~- länk till publicerat projekt( eller href="#")~~ - Sida för enskilt projekt
  ~~- titel~~
  ~~ - beskrivning~~
  ~~ - minst 3 bilder~~
  ~~ - länk till publicerat projekt~~
  ~~- Om-mig-sida~~
  ~~- - Information om utbildningar~~-
  ~~- - minst 3~~-
  ~~- - Information om arbetslivserfarenheter~~-
  ~~- - minst 3~~-
  ~~- - Kontakt-sida~~-
  ~~- - bild~~-
  ~~- - kontaktuppgifter (ex, mail, github, sociala medier)~~-
  ~~ - 404-sida~~
  ~~- Lämpligt felmeddelande och länk till startsidan~~

-~~ En huvudmeny i någon form ska implementeras med länkar till webbplatsens olika sidor.~~

- Det ska vara möjligt för användaren att filtrera projekt efter kategori. Valfritt om dessa ska listas på egen undersida eller i den befintliga projektöversikten. Kategoriseringen ska vara dynamisk och ändras med innehållet.

- Headless-CMS-lösningen ska innehålla minst 5 olika innehållstyper (Content Types) med minst 3 fält i varje Content Type. Minst 1 Content Type ska generera en egen sida på webbplatsen för varje Content som skapas av innehållstypen. Minst 1 Content Type ska användas för att kategorisera Content/inlägg.

- Bilder på webbplatsen ska ha rimligt optimerade bildstorlekar och lämpliga filformat.

- Headless CMS-lösningen ska finnas på webben i någon form och vara åtkomlig via inloggning för uppdatering av innehåll.

- Den färdiga webbplatsen ska publiceras på publik webbserver. Webbservern där webbplatsen publiceras ska vara konfigurerad så att uppdateraringar av innehållet i Headless CMS medför automatisk uppdatering av webbplatsens innehåll.

#### Övriga krav på webbplatsen

- En genomgående grafisk design ska vara implementerad över hela webbplatsen

- Webbplatsen ska vara responsiv (även mobilanpassad) och fungera på olika enheter/skärmstorlekar samt i de vanliga webbläsarna (små avvikelser är okej men de ska fungera).

- Webbplatsen ska vara tillgänglig avseende de viktigaste delarna (Ej alla WCAG-krav). Särskilt viktigt med kontraster, klickytor, typografi, semantisk HTML. Minst 5 aktiva val/åtgärder för bättre tillgänglighet ska genomföras.

- Källkoden ska vara välstrukturerad och kommenterad där så är tillämpligt för ökad läsbarhet. Särskilt fokus på kommentarer för källkod som hanterar logik.

- En strategi för sökmotoroptimering ska implementeras. Minst 5 aktiva åtgärder för sökmotoroptimering ska genomföras.

- Fyll på med genomförda projekt och information om er själva. Minst 5 olika portfolioprojekt ska presenteras. Om ni av någon anledning inte vill ange riktig information på webbplatsen så går det bra att använda fiktiv data. (Dock ej “lorem-ipsum”).

### För väl godkänt betyg (VG)

Uppfyllda krav för godkänt betyg, samt:

1. En sökfunktionimplementeras där användaren av portfoliowebbplatsen kan söka genom delar av webbplatsens innehåll. Sökfunktionen ska vara åtkomlig från valfri lämplig plats på webbplatsen samt på 404-sidan.

2. Huvudmenyn ska renderas dynamiskt.

3. Webbplatsen ska läsa ut bilder från Headless CMS i moderna filformat såsom WebP och AVIF, oavsett vilket formatsom laddats upp på ditt headless CMS. Webbplatsen ska också kunna rendera mer kompatibla filformat såsom JPEG beroende på webbläsarens förmåga.

4. Git-historiken vittnar om säkerhet i utvecklingen.

## Muntlig redovisning - film

Förbered och spela in en redovisning på MAX 4 minuter, där du själv presenterar:

1. En översikt av din lösning, hur webbplatsen ser ut och vilka delar som finns.
2. Presentera vilka tekniker du valt för arbetet och hur du använder ett Headless CMS för innehållet.
   Projektet är uppbyggt i Next och contentful
3. Beskriv hur din SSG/SSR-teknik fungerar. Hur renderas innehållet på serversidan med din valda teknik? Hur fungerar det vid publicering?
4. Beskriv vilka åtgärder du genomfört för bättre tillgänglighet?
Använt <Image> och <Link> två nextlösningar för ökad optimering, <Image> har Automatisk optimering av bilder och varnar om Alt-tag utelämnas.
<Link> gör att navigeringen sker klientside, vilket innebär att sidan inte behöver laddas om helt. Detta ger snabbare sidövergångar och en bättre användarupplevelse. <Link> fungerar som en vanlig <a>-tagg, vilket innebär att den stöder alla tillgänglighetsfunktioner som en <a>-tagg gör
5. Vilka bildformat och anpassningar har du använt för att optimera bilder och grafik?
   <Image> har själv stöd för optimering av bilder då den generera olika versioner av en bild i olika storlekar och format, detta är alltså inget jag själv har behövt hantera manuellt. Jag har varit nogran med att sätta tydliga alt-på bilderna samt descrpition via contentful, en SEO anpassning

6. Vilka åtgärder har du genomfört för att sökmotoroptimera webbplatsen?
   Alt-text för bilder
   Semantisk HTML
   Dynamiska-url med korta och tydlig slug. Tydliga länk-namn och interna länkar för bra sökoptimering.

7. Om du skulle utvecklat vidare eller gjort om uppgiften, vad hade du gjort då?
   Site-map för hjälpa sökmotorer att hitta och indexera alla sidor. och Structured Data för att hjäälpa sökmotorer att förstå innehållet; skapa sk rich snippet.
8. Presentera minst två andra alternativa tekniklösningar du kunnat använda för uppgiften
   aria-label hade varit bra att använd, ytterligare en SEO-optimering. Kom att tänka på det alldeles för sent.
   Structured data hjälper sökmotorer att förstå innehållet på dina sidor.
   Sitemap hjälper sökmotorer att hitta och indexera alla sidor.
9. Vad upplever du som skillnad mot att arbeta med ett traditionellt CMS (WordPress)? Vilka är för-och nackdelarna?

## Muntlig redovisning - film

Förbered och spela in en redovisning på MAX 4 minuter, där du själv presenterar:

1. En översikt av din lösning, hur webbplatsen ser ut och vilka delar som finns.

2. Beskriv hur din SSG/SSR-teknik fungerar. Hur renderas innehållet på serversidan med din valda teknik? Hur fungerar det vid publicering?

   (2) Projektet är uppbyggt i Next och contentful ochcontent types. vissa för att visa en hel sida och andra för att skapa content för tex enbart en anställning. (arbetsgivare, roll, tidsintervall)
   (4) Jag har använt <Image> och <Link> två nextlösningar för ökad tillgänglighet och optimering, <Image> har Automatisk optimering av bilder och varnar om Alt-tag utelämnas.


   <Link> gör att navigeringen sker klientside, vilket innebär att sidan inte behöver laddas om helt. Detta ger snabbare sidövergångar och en bättre användarupplevelse. <Link> fungerar som en vanlig <a>-tagg, vilket innebär att den stöder alla tillgänglighetsfunktioner som en <a>-tagg gör

   (5)Då <Image> har själv stöd för optimering av bilder då den generera olika versioner av en bild i olika storlekar och format, så är det ingen anpassning jag har behövt hantera manuellt. Jag har dock varit nogrann med att sätta tydliga alt-på bilderna samt descrpition via contentful samt anget aktuell width/height för att unvika att ladda onödigt stort filformat.

   (6)Åtgärder jag har gjort för att sökoptimera är Alt-text för bilder, Semantisk HTML, Dynamiska-url med korta och tydlig slug. Tydliga länk-namn och interna länkar för bra sökoptimering.

   (7) om jag skulle jobbat vidare på uppgiften hade jag nog tittat vidare på site-map och structured data. Site-map för hjälpa sökmotorer att hitta och indexera alla sidor. och Structured Data för att hjälpa sökmotorer att förstå innehållet; skapa sk rich snippet.

   (8) Alternativa tekniklösningar hade varit att använda aria-label(ARIA) hade varit bra att använda för bättre skärmläsning, en viktig tillgänlighetsanpassning. Kom att tänka på det alldeles för sent.
   En annan alternativ lösning hade varit att ha knappar eller en länkmeny för filtrering, isstället för dropdown. dropdonen kräver en extra interaktiv av användaren för att se innehållet, til skillnad från knappar eller en meny som syns redan från inläsning av sidan.

Ett traditionellt CMS som wordpress är väldit användarvänligt då det intuativa gränssnittet gör det enkelt för någon utan teknisk kompetens. NAckdelen är dock att prestantan kan påverkas negativt när både frontend och backend är samamnkopplade.

Fördelarna med headless är att det är väldigt flexibelt och att du hanterar ditt frontend skilt från ditt backend; bättre prestanda. NAckdelen skulle dock kunna vara att det kräver en större teknisk kompetens.

Ett traditionellt CMS som WordPress är användarvänligt tack vare sitt intuitiva gränssnitt, men prestandan kan påverkas när frontend och backend är sammankopplade. Headless-lösningar är flexibla och ger bättre prestanda genom att separera frontend och backend, men kräver mer teknisk kompetens.

Filmerna tittar vi på tillsammans under lektionen fredagen den 17 januari.

Tips för att hålla filmen under 4 minuter: - Förbered svar på frågorna före inspelning - Använd gratisprogramvara så som iMovie (mac) eller Video Editor (windows) för att redigera ditt inspelade material. Split och trim är dina bästa vänner. - Var beredd på att svara på frågor ifrån lärare och kurskamrater.

## Inlämning

Följande delar lämnas in i en "namn.zip"-fil inlämningslådan på ITHS-distans:

- Presentationsfilmen
- Länk till publicerad webbplats
- Källkoden för ditt projekt (ej node-modules!)

## Betygssättning

Möjliga betyg på uppgiften är IG/G/VG. Lägst godkänt betyg är en förutsättning för
godkänt slutbetyg i kursen.

### Omfattade kursmål

- Kunskaper
  • G2. Headless CMS
  • G5. Rendering av applikationer på serversidan(tillexempel SSR och SSG)
- Färdigheter
  • G7. Integrera en webblösning mot Headless CMS (till exempel med NextJS, NodeJS, direkt i klienten eller PHP)
- Kompetenser
  • G15. Självständigt administreraen webbplats med headless CMS
  • G16. Självständigt jämföra CMS-lösningar och föreslå CMS eller vidareutveckling
  av befintligtCMS
- Väl godkänt (VG)
  • VG1. Självständigt och med säkerhet skapa eller vidareutveckla en webbplats i
  CMS
  • VG2. Självständigt och med säkerhet paketera och publicera en webblösning med
  hjälp av CMS
