---
sidebar_position: 3
---

# Tracking-Integration mit Google Analytics
Über den _tId_-Parameter kann die Google Analytics User-ID mitgegeben werden. Diese wird genutzt um folgende Events bei
der Nutzung des 3D-Viewers und der AR-Funktionen zu tracken:

| Event                          | Beschreibung                                                            |
|--------------------------------|-------------------------------------------------------------------------|
| glimpsey_3d_viewer_interaction | Der Nutzer hat mit dem 3D-Viewer interagiert und die Kamera bewegt      |
| glimpsey_ar_session_started    | Eine AR-Session wurde gestartet                                         |
| glimpsey_ar_fallback_shown     | Der AR-Fallback-Dialog wurde gezeigt, da das Gerät kein AR unterstützt. |
| glimpsey_variant_switch        | Es wurde zwischen verschiedenen Varianten des Produkts gewechselt       |

Damit dieses Tracking funktioniert, muss im Backoffice unter _Viewer-Anpassungen_ die GA4-Measurement-ID angegeben werden.

## 3D-Viewer-Interaktion
Das Event _glimpsey_3d_viewer_interaction_ zeigt an, dass der Nutzer die Kamera im 3D-Viewer bewegt hat. Dieses Event wird
maximal einmal in der Sekunde gesendet und kann so auch über die Länge der Interaktion Auskunft geben. Insbesondere wenn
der Viewer als iframe eingebunden wird, kann hierüber getrackt werden, dass der Nutzer die 3D-Funktion aktiv nutzt.

## AR-Session gestartet
Das Event _glimpsey_ar_session_started_ zeigt an, dass der Nutzer eine AR-Session gestartet hat.

## AR-Fallback-Dialog
Das Event _glimpsey_ar_fallback_shown_ zeigt an, dass der AR-Fallback-Dialog angezeigt wurde. Dieses wird angezeigt,
wenn AR auf einem Gerät gestartet werden soll, dass dieses nicht unterstützt. Der Dialog enthält einen QR-Code, um
AR auf einem Smartphone oder Tablet zu starten. Dieser QR-Code enthält auch die Google Analytics User-Id, so dass die
Session auf dem Smartphone getrackt werden kann.

## Varianten-Switch
Das Event _glimpsey_variant_switch_ zeigt an, dass die Varianten gewechselt wurden. Dieses Event kann natürlich nur erfolgen,
wenn ein Produkt mit mehreren Varianten angelegt wurde.
