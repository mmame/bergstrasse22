# Marzipano 360°-Tour (Grundgerüst)

1) Lege deine 360°-Bilder als JPG in den Ordner `images/` mit **genau diesen Dateinamen** (snake_case, ohne Leerzeichen):
   - dg_loft.jpg
   - eg_bad.jpg
   - eg_buero.jpg
   - eg_gang.jpg
   - eg_kueche.jpg
   - eg_wohnen_nord.jpg
   - eg_wohnen_sued.jpg
   - ug_abstellraum_1.jpg
   - ug_abstellraum_2.jpg
   - ug_keller.jpg
   - ug_technikraum.jpg
   - ug_vorraum.jpg

2) Öffne `index.html` im Browser. (Für komplett **offline**: lade `marzipano.js` von marzipano.net herunter und ersetze das CDN im <script>-Tag.)

3) Hotspots sind automatisch im Kreis verteilt. Feintuning:
   - Öffne die DevTools (F12) und benutze z. B. `scenes.eg_gang.view.setYaw(1.2)` / `setPitch(...)`,
     oder trage feste Yaw/Pitch-Werte im Code in `tour.js` ein, wenn du sie exakt platzieren willst.

Konfig & Links sind in `tour.js` hinterlegt und leicht anpassbar.