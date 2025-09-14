// Auto-generated simple Marzipano tour
(function() {
  const config = {
  "startScene": "eg_gang",
  "scenes": {
    "dg_loft": {
      "title": "DG Loft",
      "image": "images/dg_loft.jpg",
	  "startYaw": -1.7,
	  "startPitch": 0.15,	  
      "links": [
        {
          "to": "eg_gang",
          "label": "Treppe runter: EG Gang",
		  "yaw": -0.1,
		  "pitch": 0.6
        }
      ]
    },
    "eg_bad": {
      "title": "EG Bad",
      "image": "images/eg_bad.jpg",
	  "startYaw": 2.7,
	  "startPitch": 0.0,	  
      "links": [
        {
          "to": "eg_gang",
          "label": "Zum Gang",
		  "yaw": 0.3,
		  "pitch": 0
        }
      ]
    },
    "eg_buero": {
      "title": "EG Büro",
      "image": "images/eg_buero.jpg",
	  "startYaw": -2.7,
	  "startPitch": 0.0,	  
      "links": [
        {
          "to": "eg_gang",
          "label": "Zum Gang",
		  "yaw": 1.1,
		  "pitch": 0.0
        }
      ]
    },
    "eg_gang": {
      "title": "EG Gang",
      "image": "images/eg_gang.jpg",
	  "startYaw": 0,
	  "startPitch": 0,	  
      "links": [
        {
          "to": "eg_buero",
          "label": "Zum Büro",
		  "yaw": -0.25,
		  "pitch": 0.0
        },
        {
          "to": "eg_bad",
          "label": "Zum Bad",
		  "yaw": 0.6,
		  "pitch": 0.0
		  
        },
        {
          "to": "eg_wohnen_sued",
          "label": "Zum Wohnen Süd",
		  "yaw": 0.0,
		  "pitch": 0.0
		  
        },
        {
          "to": "dg_loft",
          "label": "Treppe hoch: DG Loft",
		  "yaw": -0.7,
		  "pitch": -0.2
        },
        {
          "to": "ug_vorraum",
          "label": "Treppe runter: UG Vorraum",
		  "yaw": -0.5,
		  "pitch": 0.4
        }
      ]
    },
    "eg_kueche": {
      "title": "EG Küche",
      "image": "images/eg_kueche.jpg",
	  "startYaw": 0,
	  "startPitch": 0,	  
      "links": [
        {
          "to": "eg_wohnen_sued",
          "label": "Zu Wohnen Süd",
		  "yaw": 1.4,
		  "pitch": 0
        }
      ]
    },
    "eg_wohnen_nord": {
      "title": "EG Wohnen Nord",
      "image": "images/eg_wohnen_nord.jpg",
	  "startYaw": -0.5,
	  "startPitch": 0.0,	  
      "links": [
        {
          "to": "eg_wohnen_sued",
          "label": "Zu Wohnen Süd",
		  "yaw": -1.3,
		  "pitch": 0
        }
      ]
    },
    "eg_wohnen_sued": {
      "title": "EG Wohnen Süd",
      "image": "images/eg_wohnen_sued.jpg",
	  "startYaw": 2.4,
	  "startPitch": 0.0,	  
      "links": [
        {
          "to": "eg_wohnen_nord",
          "label": "Zu Wohnen Nord",
		  "yaw": 1.6,
		  "pitch": 0
		  
        },
        {
          "to": "eg_kueche",
          "label": "Zur Küche",
		  "yaw": 3.0,
		  "pitch": 0
        },
        {
          "to": "eg_gang",
          "label": "Zum Gang",
		  "yaw": 1.1,
		  "pitch": 0
        }
      ]
    },
    "ug_abstellraum_1": {
      "title": "UG Abstellraum 1",
      "image": "images/ug_abstellraum_1.jpg",
	  "startYaw": 0,
	  "startPitch": 0,	  
      "links": [
        {
          "to": "ug_vorraum",
          "label": "Zum Vorraum",
		  "yaw": -2.7,
		  "pitch": 0
        },
        {
          "to": "ug_abstellraum_2",
          "label": "Zu Abstellraum 2",
		  "yaw": -1.75,
		  "pitch": 0
        }
      ]
    },
    "ug_abstellraum_2": {
      "title": "UG Abstellraum 2",
      "image": "images/ug_abstellraum_2.jpg",
	  "startYaw": -0.7,
	  "startPitch": 0,	  
      "links": [
        {
          "to": "ug_abstellraum_1",
          "label": "Zu Abstellraum 1",
		  "yaw": -2.7,
		  "pitch": 0
        },
        {
          "to": "ug_keller",
          "label": "Zum Keller",
		  "yaw": -1.8,
		  "pitch": 0
        }
      ]
    },
    "ug_keller": {
      "title": "UG Keller",
      "image": "images/ug_keller.jpg",
	  "startYaw": 0,
	  "startPitch": 0,	  
      "links": [
        {
          "to": "ug_abstellraum_2",
          "label": "Zu Abstellraum 2",
		  "yaw": -2.7,
		  "pitch": 0
        }
      ]
    },
    "ug_technikraum": {
      "title": "UG Technikraum",
      "image": "images/ug_technikraum.jpg",
	  "startYaw": -2.6,
	  "startPitch": 0,	  
      "links": [
        {
          "to": "ug_vorraum",
          "label": "Zum Vorraum",
		  "yaw": -2.0,
		  "pitch": 0
        }
      ]
    },
    "ug_vorraum": {
      "title": "UG Vorraum",
      "image": "images/ug_vorraum.jpg",
	  "startYaw": 0,
	  "startPitch": 0,	  
      "links": [
        {
          "to": "eg_gang",
          "label": "Treppe hoch: EG Gang",
		  "yaw": 3.1,
		  "pitch": 0
        },
        {
          "to": "ug_technikraum",
          "label": "Zum Technikraum",
		  "yaw": -1.3,
		  "pitch": 0
        },
        {
          "to": "ug_abstellraum_1",
          "label": "Zum Abstellraum 1",
		  "yaw": 1.5,
		  "pitch": 0
        }
      ]
    }
  }
};

  const viewerElem = document.getElementById('viewer');
  const viewer = new Marzipano.Viewer(viewerElem);

  // Build scenes
  const scenes = {}

  function createScene(key, sceneCfg) {
    const source = Marzipano.ImageUrlSource.fromString(sceneCfg.image);
    const geometry = new Marzipano.EquirectGeometry([{
      width: 4096
    },{ width: 8192 }].map(l => ({ width: l.width }))); // simple multi-level

    const limiter = Marzipano.RectilinearView.limit.traditional(
      1024, // max vfov
      145*Math.PI/180 // max yaw speed
    );
	
	const startYaw = sceneCfg.startYaw ?? 0;
	const startPitch = sceneCfg.startPitch ?? 0;	
	
    const view = new Marzipano.RectilinearView({ yaw: startYaw, pitch: startPitch, fov: 125*Math.PI/180 }, limiter);
    const scene = viewer.createScene({ source, geometry, view });

    // Create hotspots in a circle if no explicit yaw/pitch is given.
    const outLinks = sceneCfg.links || [];
    const N = Math.max(1, outLinks.length);
    const radius = 0.05; // pitch offset

	outLinks.forEach((link, i) => {
	  // Falls keine Yaw/Pitch angegeben sind → automatisch verteilen
	  if (link.yaw === undefined) link.yaw = -Math.PI + (2*Math.PI) * (i / N);
	  if (link.pitch === undefined) link.pitch = -radius;

	  const el = document.createElement('div');
	  el.className = 'hotspot';
	  el.textContent = link.label || key;
	  el.addEventListener('click', () => switchScene(link.to));

	  scene.hotspotContainer().createHotspot(el, { yaw: link.yaw, pitch: link.pitch });
	});

    // Add to scene list UI
    const btn = document.createElement('button');
    btn.textContent = sceneCfg.title;
    btn.addEventListener('click', () => switchScene(key));
    document.getElementById('sceneList').appendChild(btn);

    scenes[key] = { scene, view, btn };
  }

  Object.entries(config.scenes).forEach(([k, s]) => createScene(k, s));

  function switchScene(key) {
    Object.values(scenes).forEach(s => s.btn.classList.remove('active'));
    scenes[key].btn.classList.add('active');
    scenes[key].scene.switchTo();
  }

  // Start scene
  switchScene(config.startScene);

// 🖱️ Rechtsklick überall im Panorama → Yaw/Pitch anzeigen
viewerElem.addEventListener('contextmenu', (ev) => {
  ev.preventDefault(); // blockiert das Browser-Kontextmenü

  // aktive Szene ermitteln
  const activeSceneKey = Object.keys(scenes).find(k => scenes[k].btn.classList.contains('active'));
  if (!activeSceneKey) return;

  const view = scenes[activeSceneKey].view;
  const yaw = view.yaw().toFixed(3);
  const pitch = view.pitch().toFixed(3);

  console.log(`📍 Aktuelle Blickrichtung in "${activeSceneKey}": Yaw=${yaw}, Pitch=${pitch}`);
  alert(`📍 Blickrichtung:\nYaw: ${yaw}\nPitch: ${pitch}`);
});


  // Expose tiny helper in console to tweak hotspot placement:
  // scenes.<key>.view.setYaw(<radians>); scenes.<key>.view.setPitch(<radians>);
})();