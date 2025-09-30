import {Injectable} from '@angular/core';
import {Project} from "src/app/projects/interfacesAndTypes/project";

//TODO: import img und richtige imgUrl

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  public projects = new Map<string, Project>([['BDA', {
    title: 'Davinci-Konverter: Stellen Sie mit uns auf eine Direktanlieferung um',
    text: 'Der bidirektionale DaVinci-Adapter transformiert die Datenanlieferung an das Meldesystem Abacus gemäß der Embedded-Strukturen in das Abacus360-Zielformat. Der Softwareanbieter Regnology wird die Wartung des Adapters Ende 2025 einstellen, so dass der Abacus-Datenstrom künftig eine Direktanlieferung der Entitäten des A360 Datenmodells erfordert.' +
'Eine besondere Herausforderung lag darin, dass einige Liefersysteme nur temporär anzubinden waren, bevor sie im Rahmen der Datenmigration abgeschaltet wurden. Dies galt insbesondere für die Belieferung der Abacus360 Schnittstellen zur Umsetzung von AnaCredit.\n' +
'Die Umstellung der ABACUS-Datenanlieferung von Embedded auf das A360-Format nach der Abschaltung des BDAs ist aufwendig. Ein strukturiertes Vorgehen ist daher entscheidend, um Personal- und Kostenaufwand zu minimieren.' +
' Wir von <b>reg7 GmbH</b> begleiten Sie in allen Phasen dieses Projekts mit unserer langjährigen Erfahrung.' +
'<p><p><b>Vorgehensmodell in drei Phasen</b>' +
'<p><ul><li><b>Ist-Analyse</b></li>' +
'<li><b>Umstellungsarbeiten</b></li>' +
'<li><b>Regressionstests</b></li></ul>' +
'<img src="assets/img/Converter-1.png" alt="Prozessdiagramm" width="100%" style="height:auto;box-shadow:0 0 12px rgba(0,0,0,0.3);border-radius:6px;"><br\>' +
'<b>1. Ist-Analyse</b>' +
'<p>Im Fokus stehen vor allem die zentralen Entitäten <b>POSITION</b> und <b>INSTRUMENT</b> mit drei Themenfeldern:' +
'<p><ul><li>die Datenanlieferung im Embedded-Format</li>' +
'<li>additive Dateien</li>' +
'<li>der Nebenbestand</li></ul>' +
'<p>Der Nebenbestand ist vergleichsweise einfach zu migrieren: Ein leeres Cluster anlegen, den Embedded-Nebenbestand einlesen, die Konverter-Verarbeitung (BDA) starten und die Ergebnisse im neuen Native-Nebenbestand ablegen.' +
'<p>Auch bei der Ablösung und Erstellung additiver Dateien unterstützen wir Sie mit unserer Expertise' +
'<p>Für die eigentliche Datenanlieferung wird ein Quartalsultimo wie gewohnt verarbeitet; die Jobkette wird jedoch nach der Konvertierung durch den BDA abgebrochen. Dieser Datenstand bildet die Basis aller weiteren Analysen.' +
'<p>Anschließend werden sämtliche Sätze nach Kriterien wie <b>Produktart (PRD013)</b> oder <b>Aktiv/Passiv-Kennzeichen (PTTY02)</b> gruppiert. So lässt sich das bestehende Portfolio nach Geschäftstyp gliedern und in kleinere Analysepakete aufteilen.' +
'<p>Per SQL-Abfragen werden alle befüllten Felder in den Tabellen <b>POSITION_A</b> (Beträge, Zinssätze etc.), <b>POSITION_D</b> (Datumsfelder), <b>POSITION_I</b> (Schalter, Relevanzflags u. Ä.) sowie <b>POSITION_S</b> (Zeichenketten) und den jeweiligen <b>INSTRUMENT</b>-Tabellen ermittelt. Diese Felder bilden einen deutlich kleineren Teil aller potenziell möglichen Felder.' +
'<p>Im nächsten Schritt werden Analyseausschlüsse identifiziert:' +
'<p><ul><li>Felder mit identischem Namen in Embedded und Native bleiben auch inhaltlich unverändert und erfordern keine Anpassung der Ableitungslogik.</li>' +
'<li><b>DEFAULT</b>-Felder (SOURCE_TYPE = DEFAULT) müssen nicht zwingend angeliefert werden.</li>' +
'<li>Alle übrigen Felder werden in der Umsetzungsphase einzeln betrachtet. Die Ergebnisse der Ist-Analyse (z. B. Fixwerte) helfen, Arbeitspakete gezielt abzuarbeiten und den Aufwand zu reduzieren.</li></ul>' +
'<p><p><b>2. Umstellungsphase</b>' +
'<p>Gemeinsam mit Ihrer Fachabteilung erstellen wir Mapping-Tabellen, die die Konverterregeln für Ihr Geschäftsportfolio exakt abbilden. Dabei berücksichtigen wir die Functional Units des BDAs.' +
'Wir koordinieren und unterstützen sowohl die Abstimmung zwischen Fachbereich und IT als auch die technische Umstellung Ihrer Quellsysteme auf eine A360-konforme Anlieferung.' +
'<p><p><b>3. Regressionstest</b>' +
'<p>Für die Qualitätssicherung setzen wir auf bewährte Teststrategien, darunter lizenzkostenfreie Regressionstests wie Formularpositionsabgleiche – sowohl auf Ebene der Meldedaten als auch der Eingangsdaten.' +
'<p>Selbstverständlich übernehmen wir auf Wunsch auch alle notwendigen Dokumentationsarbeiten.',
    imgUrl: 'assets/img/frankfurt_sun_skyline-min.jpg'
  }],
    ['P3DH',
      {
        title: 'Implementieren Sie mit uns den Pillar 3 Datahub (P3DH)',
        text: 'Der <b>Pillar 3 Datahub (P3DH)</b> ist ein zentrales Element der EU-Strategie zur Förderung von Transparenz und Marktdisziplin. Ziel des Vorhabens ist es, eine zentrale Plattform für die Veröffentlichung aufsichtsrechtlicher Säule-3-Informationen zu schaffen.<p>\n' +
'In der <b>ersten Umsetzungsphase</b> sind große Institute, die nach der CRR-Verordnung zur Offenlegung verpflichtet sind, aufgefordert, den P3DH zu implementieren.' +
'<p>Die meldepflichtigen Institute werden dafür in vier Gruppen eingeteilt:' +
'<ul><li><b>Gruppe A</b>: Vor allem große Institute auf höchster Konsolidierungsebene sowie ausgewählte große Tochtergesellschaften (einschließlich der Pilotteilnehmer)</li>' +
'<li><b>Gruppe B</b>: Weitere große Institute auf höchster Konsolidierungsebene</li>' +
'<li><b>Gruppe C</b>: Weitere Institute auf höchster Konsolidierungsebene</li>' +
'<li><b>Gruppe D</b>: Große Tochtergesellschaften, die nicht unter Gruppe A fallen</li></ul>' +
'Bis <b>Ende Juni 2026</b> müssen Institute der Gruppen A und B ihre Offenlegungen rückwirkend voraussichtlich zum Stichtag 31. März 2026 über den P3DH bereitstellen.' +
'<p><p>Der endgültige ITS-Entwurf sieht jedoch eine <b>Übergangsregelung</b> vor: Während dieser Phase können Institute ihre Säule-3-Pflichten weiterhin im gewohnten Zeitplan auf der eigenen Website erfüllen. In diesem Fall ist zunächst keine Übermittlung an den P3DH erforderlich – faktisch bedeutet das eine zeitliche Verschiebung.' +
'<p>Alle betroffenen Institute müssen jedoch spätestens <b>Mitte 2026 bzw. Ende 2026</b> in der Lage sein, ihre Säule-3-Berichte einzureichen. Ab <b>Anfang 2027</b> wird die Anbindung an den P3DH für alle verpflichtend. Für eine reibungslose Integration empfehlen wir folgende Arbeitspakete:' +
'<p><ul><li>Aufbau eines <b>Veröffentlichungsprozesses</b> mit direkter Anbindung an den P3DH</li>' +
'<li><b>Sicherstellung der Datenqualität</b> durch gründliche Prüfung aller Meldedaten unter Berücksichtigung der veröffentlichten Validierungsregeln</li>' +
'<li>Nutzung der <b>P3DH-Testeinreichung</b> (aktuell im Aufbau)</li>' +
'<li><b>Anpassung der Governance</b>, um die Freigabe der eingereichten Daten auf Managementebene sicherzustellen</li></ul>' +
'<p><p>Da der Zeitplan eng ist und wir derzeit ähnliche Projekte begleiten, können wir weitere Institute aktiv bei der Implementierung des P3DH unterstützen.' +
'Neben der gesetzlichen Pflicht zur Datenlieferung bietet der P3DH auch <b>strategische Vorteile</b>: Institute können die veröffentlichten Daten anderer Häuser mit ihren eigenen Offenlegungen vergleichen. So lässt sich die neu geschaffene Transparenz nutzen, um wertvolle Erkenntnisse über die eigene Marktposition zu gewinnen.' +
'<p>Für diesen Zweck stellen wir bei <b>reg7 GmbH</b> eine <b>KI-gestützte Lösung</b> bereit.',
        imgUrl: 'assets/img/reg7-905-700x300.jpg'
      }]]);

//  constructor() {

//    for (let i = 1; i <= 1; i++) {

//       @ts-ignore
//      this.projects.set('Abacus' + i.toString(), this.projects.get('BaselIVProjekt'));
//    }
//  }
}
