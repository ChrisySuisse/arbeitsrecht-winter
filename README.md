# Anleitung Änderungen an der Webseite

Der Inhalt der Webseite wird hier auf Github verwaltet. Jede Änderung wird sofort automatisch zum Hoster gepusht, sodass nach kurzer Zeit die Änderung veröffentlicht sein sollte. Das geschieht mit einem sog. Workflow (Github Actions). Dieser ist im Ordner `.github/workflows` gespeichert.

## Aufbau der Daten

Die Inhalte der Seiten verteilen sich auf folgende drei Ordner: `content`, `data` und `static`.

`static`: Hier liegen statische Dateien, die auf den Seiten eingebunden werden sollen, insbesondere Bilder (unter `static/images`) und Dokumente (unter `static/documents`).

`data`: Hier finden sich Daten, mit denen die Landing Page befüllt wird: FAQ, Kurzbeschreibung der Services, Einleitung zur Blog-Section etc.

`content`: Hier sind die einzelnen Seiten. Jede Seite hat einen eigenen Ordner mit einer `_index.md` Datei darin. Einen eigenen Aufbau hat der Ordner `blog`. Hier liegt die Übersichtsseite, die Datei heißt ebenfalls `_index.md`. Alle einzelnen Blog-Beiträge haben dann einen sprechenden Namen und liegen ebenfalls darin. Wenn ein neuer Beitrag erstellt werden soll, kann man sich am bestehenden orientieren.

Die Ordner `data` und `content` sind beide unterteilt in die beiden Sprachen `de` und `en`. Die Sprachordner sind dann identisch aufgebaut. Änderungen sollten natürlich an beiden Stellen gepflegt werden, um die Seite synchron zu halten.

## Eine Änderung vornehmen

Änderungen kann man einfach in Github vornehmen. Einfach die entsprechende Datei auswählen, auf das Stift-Icon rechts über dem Textfeld klicken, alle Änderungen eintragen und dann auf "Commit changes" klicken. Im Pop-Up Fenster, das erscheint, kann man noch kurz seine Änderungen zusammenfassen (z.B. "Rechtschreibung korrigiert" o.ä.). Bestätigen und dann beginnt auch schon der Deployment-Process (s.o.).

## Eine neue Seite anlegen
