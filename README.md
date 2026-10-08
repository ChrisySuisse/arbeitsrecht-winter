# Anleitung zur Pflege der Webseite

Die Inhalte der Webseite werden in diesem GitHub-Repository verwaltet. Für einfache Änderungen sind **keine Git-Kenntnisse und keine lokale Entwicklungsumgebung erforderlich**. Texte und andere Inhalte können direkt über die Weboberfläche von GitHub bearbeitet werden.

Für viele typische Änderungen steht außerdem das **Decap CMS** zur Verfügung. Es ist über die Adresse

`https://<Adresse der Webseite>/admin/`

erreichbar und bietet eine komfortablere Oberfläche zur Bearbeitung von Inhalten.

Diese Anleitung erklärt insbesondere, **wo welche Inhalte zu finden sind** und wie kleinere Änderungen sicher vorgenommen werden können.

---

## 1. Wo finde ich was?

Für die Pflege der Inhalte sind vor allem diese Verzeichnisse wichtig:

```text
.
├── content/                ← einzelne Seiten und Beiträge
├── data/
│   ├── de/                 ← deutsche Inhalte der Startseite
│   ├── en/                 ← englische Inhalte der Startseite
│   └── google-rating.yaml  ← Google-Bewertung
└── assets/
    └── images/
        └── cms/            ← bevorzugter Ablageort für neue Bilder
```

Die wichtigste Unterscheidung lautet:

> **Startseite → `data/`**  
> **Einzelne Seiten und Beiträge → `content/`**  
> **Bilder → `assets/images/`, bevorzugt `assets/images/cms/`**

### `content/` – einzelne Seiten und Beiträge

Im Ordner `content/` befinden sich die eigentlichen Inhaltsseiten der Webseite sowie insbesondere die Beiträge und Publikationen.

Deutsch und Englisch werden hier **nicht durch getrennte Sprachordner**, sondern durch die **Dateinamen** unterschieden.

Typischerweise gehören deshalb zwei Dateien zusammen, beispielsweise:

```text
beispiel.de.md
beispiel.en.md
```

Dabei gilt:

- `.de.md` = deutsche Fassung
- `.en.md` = englische Fassung

Wenn ein Inhalt in beiden Sprachversionen der Webseite vorhanden ist, sollte bei einer Änderung daher immer geprüft werden, ob auch die jeweils andere Sprachfassung angepasst werden muss.

### `data/` – Inhalte der Startseite

Die **Startseite (Landing Page)** ist anders aufgebaut.

Ihre Inhalte befinden sich überwiegend im Ordner `data/`. Hier gibt es getrennte Ordner für Deutsch und Englisch:

```text
data/
├── de/
└── en/
```

Die Dateien in `data/de/` enthalten die deutschen Inhalte der Startseite, die entsprechenden Dateien in `data/en/` die englischen Inhalte.

Dort finden sich beispielsweise Texte für einzelne Abschnitte der Startseite wie die Darstellung der Leistungen, FAQ oder andere Startseiten-Elemente.

Bei Änderungen an der Startseite sollte daher grundsätzlich geprüft werden, ob die entsprechende Änderung auch in der anderen Sprache vorgenommen werden muss.

### `assets/images/` – Bilder

Bilder werden unter

```text
assets/images/
```

abgelegt.

Für **neu eingestellte Bilder** sollte bevorzugt

```text
assets/images/cms/
```

verwendet werden.

Dieser Ordner ist insbesondere für Bilder vorgesehen, die über das Decap CMS verwaltet bzw. hochgeladen werden.

Bestehende Bilder können aus historischen oder technischen Gründen auch an anderen Stellen innerhalb von `assets/images/` liegen. Sie müssen nicht allein zur Vereinheitlichung verschoben werden.

---

## 2. Inhalte über Decap CMS bearbeiten

Für normale redaktionelle Änderungen ist **Decap CMS** in vielen Fällen der einfachste Weg.

Die Verwaltungsoberfläche befindet sich unter:

```text
https://<Adresse der Webseite>/admin/
```

Nach der Anmeldung können die dort freigegebenen Inhalte über eine grafische Oberfläche bearbeitet werden. Dadurch muss man sich nicht mit der Ordnerstruktur und dem Format der zugrunde liegenden Dateien beschäftigen.

Insbesondere für wiederkehrende redaktionelle Arbeiten sollte daher zunächst geprüft werden, ob der gewünschte Inhalt bereits über Decap bearbeitet werden kann.

Nicht jeder Bestandteil der Webseite muss allerdings im CMS hinterlegt sein. Inhalte können deshalb weiterhin direkt über GitHub bearbeitet werden. Die folgenden Abschnitte erklären diesen Weg.

---

## 3. Eine bestehende Seite über GitHub ändern

### Schritt 1: Die richtige Datei finden

Zunächst muss geklärt werden, **welcher Teil der Webseite geändert werden soll**.

Handelt es sich um eine normale Unterseite oder einen Beitrag, sucht man unter:

```text
content/
```

Anhand des Dateinamens lässt sich die Sprache erkennen:

```text
*.de.md    → Deutsch
*.en.md    → Englisch
```

Handelt es sich dagegen um einen Abschnitt auf der **Startseite**, sucht man unter:

```text
data/de/   → deutsche Startseite
data/en/   → englische Startseite
```

### Schritt 2: Datei öffnen

Die gewünschte Datei auf GitHub anklicken.

Rechts oberhalb des Dateiinhalts befindet sich die Funktion zum Bearbeiten der Datei (Stift-Symbol bzw. **Edit this file**).

Darauf klicken.

### Schritt 3: Inhalt bearbeiten

Nun kann der Text direkt im Browser geändert werden.

Bei `.md`-Dateien handelt es sich um **Markdown**. Normaler Fließtext kann grundsätzlich einfach wie in einem gewöhnlichen Texteditor bearbeitet werden.

Bei `.yaml`- bzw. `.yml`-Dateien ist etwas mehr Vorsicht erforderlich. Einrückungen, Doppelpunkte und die vorhandene Struktur sollten beibehalten werden.

Im Zweifel sollte daher **nur der eigentliche Text oder Wert hinter einem vorhandenen Feld geändert** werden.

Beispiel:

```yaml
title: Arbeitsrecht
```

Hier kann `Arbeitsrecht` geändert werden. `title:` sollte bestehen bleiben.

### Schritt 4: Änderung speichern („Commit“)

Git nennt das Speichern einer Änderung **Commit**.

Nach der Bearbeitung:

1. auf **Commit changes** klicken,
2. eine kurze Beschreibung der Änderung eingeben, z. B. `Rechtschreibung korrigiert`,
3. die Änderung bestätigen.

Damit ist die Änderung im Repository gespeichert.

Die Webseite wird anschließend automatisch neu gebaut und veröffentlicht. Bis die Änderung auf der Webseite sichtbar ist, kann es daher einen kurzen Moment dauern.

---

## 4. Wichtig: Deutsche und englische Fassung aktuell halten

Die Webseite existiert auf Deutsch und Englisch. Änderungen an Inhalten sollten deshalb grundsätzlich darauf geprüft werden, ob sie **in beiden Sprachfassungen** vorgenommen werden müssen.

Dabei gibt es zwei unterschiedliche Systeme:

| Inhalt | Deutsch | Englisch |
|---|---|---|
| normale Seiten / Beiträge | Datei mit `.de.md` | Datei mit `.en.md` |
| Startseite | `data/de/` | `data/en/` |

Eine Änderung der deutschen Datei ändert **nicht automatisch** die englische Fassung und umgekehrt.

Reine technische oder sprachunabhängige Daten können davon abweichen. Ein wichtiges Beispiel ist die Google-Bewertung.

---

# Google-Bewertung aktualisieren

Die auf der Webseite angezeigte Google-Bewertung wird **nicht getrennt für Deutsch und Englisch gepflegt**.

Sie befindet sich zentral in:

```text
data/google-rating.yaml
```

Die Datei sieht beispielsweise so aus:

```yaml
rating: 5.0
reviews: 15
```

Dabei bedeutet:

- `rating` = aktuelle durchschnittliche Google-Bewertung
- `reviews` = aktuelle Anzahl der Google-Bewertungen

## So wird die Bewertung aktualisiert

Zunächst die aktuelle Bewertung und Anzahl der Rezensionen im Google-Unternehmensprofil bzw. in der öffentlich sichtbaren Google-Anzeige prüfen.

Anschließend auf GitHub die Datei

```text
data/google-rating.yaml
```

öffnen und über das Stift-Symbol bearbeiten.

Beispiel: Steigt die Zahl der Bewertungen von 15 auf 16 und wird weiterhin eine Bewertung von 5,0 angezeigt, wird

```yaml
rating: 5.0
reviews: 15
```

geändert in:

```yaml
rating: 5.0
reviews: 16
```

Danach über **Commit changes** speichern.

> **Wichtig:** Bei der Aktualisierung immer **beide Werte prüfen** – sowohl den Bewertungsdurchschnitt (`rating`) als auch die Anzahl der Bewertungen (`reviews`).

Da diese Daten sprachunabhängig sind, muss die Änderung **nur einmal** in `data/google-rating.yaml` vorgenommen werden.

---

## 5. Bilder hinzufügen

Neue Bilder sollten grundsätzlich unter

```text
assets/images/
```

abgelegt werden.

Für redaktionell verwendete und insbesondere über Decap verwaltete Bilder ist der bevorzugte Ordner:

```text
assets/images/cms/
```

### Bild über GitHub hochladen

In GitHub zum Ordner

```text
assets/images/cms/
```

navigieren und dort die Funktion zum Hochladen einer Datei verwenden.

Nach dem Upload muss auch dieser Vorgang mit einem Commit bestätigt werden.

### Dateinamen

Für neue Bilder sollten möglichst einfache, aussagekräftige Dateinamen verwendet werden.

Gut:

```text
kuendigung-arbeitsrecht.jpg
```

Weniger gut:

```text
IMG_4837 final NEU (2).jpg
```

Am besten:

- nur Kleinbuchstaben,
- keine Leerzeichen,
- Wörter mit Bindestrichen trennen,
- Umlaute und Sonderzeichen vermeiden.

Werden Bilder über Decap hochgeladen, werden sie automatisch unter 

```text
assets/images/cms/
```

gespeichert.

---

## 6. Eine neue Seite oder einen neuen Beitrag anlegen

Neue Inhalte sollten sich möglichst an einem **bereits vorhandenen vergleichbaren Inhalt** orientieren.

Das ist insbesondere deshalb wichtig, weil die Dateien neben dem eigentlichen Text zusätzliche Angaben enthalten können, die Hugo für die Darstellung der Webseite benötigt.

Am einfachsten ist es daher, eine vorhandene passende Datei als Vorlage zu verwenden und deren Struktur beizubehalten.

Bei zweisprachigen Inhalten werden in der Regel eine deutsche und eine englische Datei benötigt:

```text
neuer-inhalt.de.md
neuer-inhalt.en.md
```

Dabei sollte der Teil des Dateinamens vor `.de.md` bzw. `.en.md` identisch sein.

Für regelmäßig wiederkehrende redaktionelle Inhalte sollte bevorzugt geprüft werden, ob sie direkt über **Decap CMS unter `/admin/`** angelegt werden können.

---

## 7. Was sollte ich nicht über GitHub ändern?

Wer lediglich Inhalte der Webseite pflegen möchte, sollte sich im Wesentlichen auf

```text
content/
data/
assets/images/
```

beschränken.

Andere Verzeichnisse enthalten unter anderem Templates, Design, Stylesheets, Konfiguration und technische Komponenten der Webseite.

Insbesondere Änderungen an Verzeichnissen wie

```text
layouts/
assets/scss/
.github/
```

sollten nur vorgenommen werden, wenn klar ist, welche technischen Auswirkungen die Änderung hat.

Die Dateien unter `.github/` betreffen unter anderem automatisierte Abläufe. Sie sind **nicht Teil der normalen Inhaltspflege**.

---

## 8. Was tun, wenn etwas schiefgeht?

Ein Vorteil der Verwaltung über GitHub besteht darin, dass Änderungen nachvollziehbar bleiben. Ein Commit überschreibt nicht einfach unwiederbringlich den vorherigen Zustand.

Wenn nach einer Änderung etwas nicht richtig aussieht:

1. keine weiteren Änderungen „auf Verdacht“ vornehmen,
2. den zuletzt vorgenommenen Commit bzw. die geänderte Datei notieren,
3. gegebenenfalls die vorherige Version über die GitHub-Historie nachvollziehen oder die Änderung rückgängig machen.

Wenn nach einem Commit nicht sofort eine Änderung auf der Webseite sichtbar ist, bedeutet das außerdem nicht zwangsläufig, dass etwas falsch gelaufen ist. Die Webseite muss zunächst neu gebaut und veröffentlicht werden. Sollte die Änderung nicht angezeigt werden, liegt es auch oft daran, dass der alte Stand vom Browser gecached wurde. Dann einfach Browserdaten löschen und die Seite neu laden.