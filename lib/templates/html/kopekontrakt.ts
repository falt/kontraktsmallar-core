export const kopekontraktHtml = `<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 11pt;
    line-height: 1.6;
    color: #1a1a1a;
    padding: 25mm;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20pt;
    text-align: center;
    margin-bottom: 8mm;
    letter-spacing: 0.5px;
  }
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12pt;
    margin-top: 8mm;
    margin-bottom: 3mm;
    border-bottom: 1px solid #ccc;
    padding-bottom: 2mm;
  }
  .field {
    margin-bottom: 2mm;
  }
  .field strong {
    display: inline-block;
    width: 45mm;
  }
  .section {
    margin-bottom: 6mm;
  }
  .terms {
    margin-top: 6mm;
    padding: 4mm;
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    font-size: 10pt;
  }
  .signature-section {
    margin-top: 20mm;
    display: flex;
    justify-content: space-between;
    gap: 20mm;
  }
  .signature-block {
    flex: 1;
  }
  .signature-line {
    border-bottom: 1px solid #000;
    margin-bottom: 2mm;
    height: 15mm;
  }
  .signature-label {
    font-size: 9pt;
    color: #666;
  }
  .footer {
    margin-top: 15mm;
    text-align: center;
    font-size: 8pt;
    color: #999;
  }
</style>
</head>
<body>

<h1>Kopekontrakt</h1>

<div class="section">
  <h2>Saljare</h2>
  <div class="field"><strong>Namn:</strong> {{saljare_namn}}</div>
  <div class="field"><strong>Personnummer:</strong> {{saljare_personnummer}}</div>
  <div class="field"><strong>Adress:</strong> {{saljare_adress}}</div>
  <div class="field"><strong>Telefon:</strong> {{saljare_telefon}}</div>
</div>

<div class="section">
  <h2>Kopare</h2>
  <div class="field"><strong>Namn:</strong> {{kopare_namn}}</div>
  <div class="field"><strong>Personnummer:</strong> {{kopare_personnummer}}</div>
  <div class="field"><strong>Adress:</strong> {{kopare_adress}}</div>
  <div class="field"><strong>Telefon:</strong> {{kopare_telefon}}</div>
</div>

<div class="section">
  <h2>Objekt</h2>
  <div class="field"><strong>Beskrivning:</strong> {{objekt_beskrivning}}</div>
  <div class="field"><strong>Skick:</strong> {{objekt_skick}}</div>
</div>

<div class="section">
  <h2>Pris och betalning</h2>
  <div class="field"><strong>Kopeskilling:</strong> {{kopeskilling}} SEK</div>
  <div class="field"><strong>Betalningssatt:</strong> {{betalningssatt}}</div>
  <div class="field"><strong>Betalningsdag:</strong> {{betalningsdag}}</div>
  <div class="field"><strong>Overlatelsedag:</strong> {{overlatelsedag}}</div>
</div>

<div class="terms">
  <p><strong>Villkor:</strong> Forsaljningen sker i befintligt skick om inget annat anges nedan. Koparen har besiktigat objektet och godkanner dess skick. Aganderatt och risk overgår till koparen vid overlatelsetillfallet. Saljarens garanterar att objektet inte ar behaftat med skulder, pantratter eller andra belastningar.</p>
  <p style="margin-top: 3mm;">{{ovriga_villkor}}</p>
</div>

<div class="signature-section">
  <div class="signature-block">
    <div class="signature-line"></div>
    <div class="signature-label">Saljarens underskrift</div>
    <div class="field" style="margin-top: 3mm;"><strong>Namn:</strong> {{saljare_namn}}</div>
  </div>
  <div class="signature-block">
    <div class="signature-line"></div>
    <div class="signature-label">Koparens underskrift</div>
    <div class="field" style="margin-top: 3mm;"><strong>Namn:</strong> {{kopare_namn}}</div>
  </div>
</div>

<div style="margin-top: 10mm; text-align: center;">
  <div class="field"><strong>Ort:</strong> {{ort}} &nbsp;&nbsp; <strong>Datum:</strong> {{datum}}</div>
</div>

<div class="footer">
  <p>Detta kopekontrakt ar upprättat i två exemplar, varav parterna tagit var sitt.</p>
</div>

</body>
</html>`;
