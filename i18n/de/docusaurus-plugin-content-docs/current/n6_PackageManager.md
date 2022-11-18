---
sidebar_position: 6
slug: /packagemanager
---

# Paketverwaltung

<h1>📖 Inhaltsverzeichnis</h1>

- [**Was ist JLDN?**](#about)
- - [**Was ist der Zweck?**](#used-for)
- - [**Wie funktioniert unser dezentralisiertes Netzwerk?**](#how-our-decentralized-network-works)
- [**Was ist eine `manifest.yaml` Datei?**](#manifest-file)
- - [**Manifest-Dateiformat**](#manifest-format)
- [**Warum werden installierte Bibliotheken verschlüsselt?**](#encryption)
- [**Was sind die Befehle?**](#usage)
- - [**Paket**installieren](#install-usage)
- - [**Bump Version**](#bump-usage)
# Über

## Verwendet für
**JLDN** ist ein Paketmanager, der von der Juka Language Organisation erstellt und gepflegt wurde. Es erlaubt Benutzern Bibliotheken zu erstellen, zu publizieren und zu verwenden. *Zum Beispiel* wenn Sie einen Webserver erstellt haben anstatt den ganzen https-Prototypen neu zu erstellen, können Sie eine Juka-Bibliothek installieren, die Ihnen ein solides Framework gibt.

## Wie unser dezentralisiertes Netzwerk funktioniert
Unser dezentralisiertes Netzwerk ist die Art und Weise, wie JLDN Paketdaten erhält. Dies schließt den Inhalt der Bibliotheken ein. Wir ziehen die Daten direkt aus github heraus, was es einfacher macht und schneller Pakete zu erhalten.

# Manifest-Datei
Die `manifest.yaml` Datei wird verwendet, um Spezifikationen für ein Paket zu geben. Dies schließt die aktuelle Version, Beschreibung und den Inhalt ein.

## Manifest-Format
Das Manifest ist folgendermaßen formatiert:
```yaml
version: 0.0.1
package_name: name
package_description: descr
library_directory: lib
main_repo_branch: main
repo_name: JLDN
repo_author_name: jukaLang
```

# Verschlüsselung
Wir verwenden eine verschlüsselte Lösung, wenn Sie Pakete von **JLDN** installieren. Da Jukas primäres Ziel die Verschlüsselung von Laufzeitgeschwindigkeiten ist, ist die schnellste Möglichkeit der Juka-Laufzeit auszuführen.

# Auslastung
## Nutzung installieren
*Installiert ein Paket mit dem dezentralen Netzwerk*
```bash
jldn installiert {git_repo_author} {git_repo} {branch} { FLAGS }
```

Flaggen:

'-nm' - Bestimmt, dass das Repo keine Manifest-Datei enthält und Sie trotzdem installieren möchten

'--force' - Zwingt zu überschreiben, wenn der Paketname bereits existiert

## Bumpauslastung
*Zurücksetzen auf die angegebene **JLDN** Version*
```bash
jldn Bump {service} {version}
```

Dienste:

**JLDN**

**Juka**

Flaggen:

**KEINE FEHLGESCHLAGE FÜR DIESES KOMMAND**

# Wie installiere ich
## Fenster
Um unter Windows zu installieren, müssen Sie lediglich die 'win_installer.exe' installieren und starten und alles andere wird automatisiert! Sie finden diese Datei im Release-Assests.

## Linux
*Demnächst*