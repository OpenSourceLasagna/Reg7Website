import {Injectable} from '@angular/core';
import {Project} from "src/app/projects/interfacesAndTypes/project";

//TODO: import img und richtige imgUrl

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  public projects = new Map<string, Project>([['AbacusDaVinci', {
    title: 'Ablösung des Davinci-Konverter: Stellen Sie mit uns auf eine Direktanlieferung um',
    text: 'Der bidirektionale DaVinci-Adapter transformiert die Datenanlieferung an das Meldesystem Abacus gemäß der Embedded-Strukturen in das Abacus360-Zielformat. Der Softwareanbieter Regnology wird die Wartung des Adapters Ende 2025 einstellen, so dass der Abacus-Datenstrom künftig eine Direktanlieferung der Entitäten des A360 Datenmodells erfordert.\n' +
'\n' +
'Eine besondere Herausforderung lag darin, dass einige Liefersysteme nur temporär anzubinden waren, bevor sie im Rahmen der Datenmigration abgeschaltet wurden. Dies galt insbesondere für die Belieferung der Abacus360 Schnittstellen zur Umsetzung von AnaCredit.\n' +
'\n' +
'Die Umstellung der ABACUS-Datenanlieferung von Embedded auf das A360-Format nach der Abschaltung des BDAs ist aufwendig. Ein strukturiertes Vorgehen ist daher entscheidend, um Personal- und Kostenaufwand zu minimieren.' +
'Wir von reg7 GmbH begleiten Sie in allen Phasen dieses Projekts mit unserer langjährigen Erfahrung.'
'\n' +
'Vorgehensmodell in drei Phasen' +
'Ist-Analyse' +
'Umstellungsarbeiten' +
'Regressionstests' +
'\n' +
'Abhängig von den Ergebnissen der Testphase kann bei Bedarf erneut in Phase 1 oder 2 eingestiegen werden.' +
'\n' +
'1. Ist-Analyse' +
'Im Fokus stehen vor allem die zentralen Entitäten POSITION und INSTRUMENT mit drei Themenfeldern:' +
'die Datenanlieferung im Embedded-Format' +
'additive Dateien' +
'der Nebenbestand' +
'Der Nebenbestand ist vergleichsweise einfach zu migrieren: Ein leeres Cluster anlegen, den Embedded-Nebenbestand einlesen, die Konverter-Verarbeitung (BDA) starten und die Ergebnisse im neuen Native-Nebenbestand ablegen.' +
'Auch bei der Ablösung und Erstellung additiver Dateien unterstützen wir Sie mit unserer Expertise' +
'Für die eigentliche Datenanlieferung wird ein Quartalsultimo wie gewohnt verarbeitet; die Jobkette wird jedoch nach der Konvertierung durch den BD abgebrochen. Dieser Datenstand bildet die Basis aller weiteren Analysen.' +
'Anschließend werden sämtliche Sätze nach Kriterien wie Produktart (PRD013) oder Aktiv/Passiv-Kennzeichen (PTTY02) gruppiert. So lässt sich das bestehende Portfolio nach Geschäftstyp gliedern und in kleinere Analysepakete aufteilen.' +
'Per SQL-Abfragen werden alle befüllten Felder in den Tabellen POSITION_A (Beträge, Zinssätze etc.), POSITION_D (Datumsfelder), POSITION_I (Schalter, Relevanzflags u. Ä.) sowie POSITION_S (Zeichenketten) und den jeweiligen INSTRUMENT-Tabellen ermittelt. Diese Felder bilden einen deutlich kleineren Teil aller potenziell möglichen Felder.' +
'Im nächsten Schritt werden Analyseausschlüsse identifiziert:' +
'Felder mit identischem Namen in Embedded und Native bleiben auch inhaltlich unverändert und erfordern keine Anpassung der Ableitungslogik.' +
'DEFAULT-Felder (SOURCE_TYPE = DEFAULT) müssen nicht zwingend angeliefert werden.' +
'Alle übrigen Felder werden in der Umsetzungsphase einzeln betrachtet. Die Ergebnisse der Ist-Analyse (z. B. Fixwerte) helfen, Arbeitspakete gezielt abzuarbeiten und den Aufwand zu reduzieren.' +
'2. Umstellungsphase' +
'Gemeinsam mit Ihrer Fachabteilung erstellen wir Mapping-Tabellen, die die Konverterregeln für Ihr Geschäftsportfolio exakt abbilden. Dabei berücksichtigen wir die Functional Units des BDAs.' +
'Wir koordinieren und unterstützen sowohl die Abstimmung zwischen Fachbereich und IT als auch die technische Umstellung Ihrer Quellsysteme auf eine A360-konforme Anlieferung.' +
'3. Regressionstest' +
'Für die Qualitätssicherung setzen wir auf bewährte Teststrategien, darunter lizenzkostenfreie Regressionstests wie Formularpositionsabgleiche – sowohl auf Ebene der Meldedaten als auch der Eingangsdaten.' +
'Selbstverständlich übernehmen wir auf Wunsch auch alle notwendigen Dokumentationsarbeiten.',
    imgUrl: 'https://images.unsplash.com/photo-1634467599263-af9793758399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
  }],
    ['reg7monitor',
      {
        title: 'Offenlegung: Implementieren Sie mit uns den Pillar 3 Datahub (P3DH)',
        text: 'Der Pillar 3 Datahub (P3DH) ist Teil der Gesamtstrategie der EU zur Förderung von Transparenz und Marktdisziplin. In der ersten Phase der Umsetzung wurden große Institute, die nach den CRR-Bestimmungen zur Offenlegung von Informationen aus der Säule 3 verpflichtet sind, aufgefordert den P3DH zu implementieren. \n' +
            '\n' +
            'Wir entwickeln eine Funktion, die den implementierten Workflow mit allen steuerungsrelevanten Kriterien exportiert. Das damit verbunden Format ist kompatibel mit dem Modellierungswerkzeug ARIS, so dass ein aus dem reg7monitor exportierter Workflow mit dem ARIS Toolset in Form eines Flussdiagramms dargestellt werden kann.',
        imgUrl: 'https://reg7.de/wp-content/uploads/2022/04/reg7-905-700x300.jpg'
      }]]);

 // constructor() {

 //   for (let i = 1; i <= 3; i++) {

      // @ts-ignore
 //     this.projects.set('Abacus' + i.toString(), this.projects.get('BaselIVProjekt'));
 //   }
 // }
}
