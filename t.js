document.addEventListener("DOMContentLoaded", function () {
  const detailButtons = document.querySelectorAll(".details-btn");
  const detailsPopup = document.getElementById("detailsPopup");
  const closeBtn = document.getElementById("closeBtn");

  // Exemple de données en local pour chaque résultat
  const localData = {
    1: {
      name: "MacBook Air M1",
      image: "path_to_macbook_air_m1.jpg",
      description:
        "Ordinateur portable avec puce Apple M1, 8 Go de RAM et 256 Go de SSD.",
      price: "1,200,000 Fcfa",
      category: "Ordinateurs",
      warranty: "1 an",
    },
    2: {
      name: "Souris Logitech MX Master 3",
      image: "path_to_logitech_mx_master_3.jpg",
      description:
        "Souris sans fil avec défilement ultra-rapide, utilisation multi-device et personnalisation avancée.",
      price: "65,000 Fcfa",
      category: "Accessoires",
      DPI: "4000",
      connectivity: "Sans fil",
    },
    3: {
      name: "Moniteur Dell UltraSharp U2720Q",
      image: "path_to_dell_ultrasharp_u2720q.jpg",
      description:
        "Écran 4K UHD de 27 pouces avec connectivité USB-C, couleurs précises et un design fin.",
      price: "400,000 Fcfa",
      category: "Écrans",
      resolution: "3840 x 2160",
      connectivity: "USB-C",
    },
    4: {
      name: "Casque Sony WH-1000XM4",
      image: "path_to_sony_wh_1000xm4.jpg",
      description:
        "Casque sans fil à réduction de bruit de première classe, avec 30h d'autonomie.",
      price: "250,000 Fcfa",
      category: "Audio",
      batteryLife: "30 heures",
      connectivity: "Bluetooth 5.0",
    },
    5: {
      name: "SSD Samsung 970 EVO 1TB",
      image: "path_to_samsung_970_evo.jpg",
      description:
        "SSD NVMe M.2 offrant des vitesses de lecture allant jusqu'à 3,500 MB/s.",
      price: "120,000 Fcfa",
      category: "Stockage",
      readSpeed: "Up to 3,500 MB/s",
      type: "NVMe M.2",
    },
    6: {
      name: "Imprimante HP LaserJet Pro M15w",
      image: "path_to_hp_laserjet_pro_m15w.jpg",
      description:
        "Imprimante laser monochrome compacte, avec connectivité sans fil et capacité d'impression mobile.",
      price: "90,000 Fcfa",
      category: "Périphériques",
      type: "Laser monochrome",
      connectivity: "Wi-Fi",
    },
    7: {
      name: "MacBook Pro 16 pouces",
      image: "path_to_macbook_pro_16.jpg",
      description:
        "Ordinateur portable doté d'une puce M1 Pro, 16 Go de RAM, 512 Go de SSD, et un écran Retina True Tone.",
      price: "1,440,000 Fcfa",
      category: "Ordinateurs",
      warranty: "1 an",
    },
    8: {
      name: "Souris Razer DeathAdder V2",
      image: "path_to_razer_deathadder_v2.jpg",
      description:
        "Souris gaming ergonomique avec capteur Focus+ 20K DPI, Speedflex cable et 8 boutons programmables.",
      price: "30,000 Fcfa",
      category: "Accessoires",
      DPI: "20,000",
      connectivity: "Filaire",
    },
    9: {
      name: "Clavier SteelSeries Apex 7",
      image: "path_to_steelseries_apex_7.jpg",
      description:
        "Clavier mécanique RGB avec switches QX2, repose-poignet magnétique, et écran OLED intégré.",
      price: "108,000 Fcfa",
      category: "Accessoires",
      switchType: "QX2 Red",
      layout: "AZERTY",
    },
    10: {
      name: "Moniteur LG Ultragear 27GL850",
      image: "path_to_lg_ultragear_27gl850.jpg",
      description:
        "Moniteur gaming de 27 pouces Nano IPS, avec un taux de rafraîchissement de 144Hz et une résolution QHD.",
      price: "270,000 Fcfa",
      category: "Écrans",
      resolution: "2560 x 1440",
      refreshRate: "144Hz",
    },
    11: {
      name: "Casque Bose QuietComfort 35 II",
      image: "path_to_bose_qc35_ii.jpg",
      description:
        "Casque sans fil à réduction de bruit, avec assistant vocal intégré et 20 heures d'autonomie.",
      price: "180,000 Fcfa",
      category: "Audio",
      connectivity: "Bluetooth & Jack 3,5 mm",
      microphone: "Omnidirectionnel",
    },
    12: {
      name: "SSD Externe Samsung T5 1 To",
      image: "path_to_samsung_t5_1tb.jpg",
      description:
        "SSD externe compact et solide, avec des vitesses de transfert allant jusqu'à 540 MB/s.",
      price: "90,000 Fcfa",
      category: "Stockage",
      capacity: "1 To",
      transferSpeed: "Up to 540 MB/s",
    },
  };

  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const articleId = this.parentElement.getAttribute("data-id");
      const data = localData[articleId];
      displayDetails(data);
      detailsPopup.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", function () {
    detailsPopup.classList.remove("show");
  });

  function displayDetails(data) {
    detailsPopup.innerHTML = `
        <span class="close-btn" id="closeBtn">X</span>
        <h3>${data.name}</h3>
        <img src="${data.image}" alt="${data.name}" />
        <p>${data.description}</p>
        <p>Catégorie: ${data.category}</p>
        <p>Prix: ${data.price}</p>
    `;

    if (data.warranty) {
      detailsPopup.innerHTML += `<p>Garantie: ${data.warranty}</p>`;
    }

    if (data.DPI) {
      detailsPopup.innerHTML += `<p>DPI: ${data.DPI}</p>`;
    }

    if (data.connectivity) {
      detailsPopup.innerHTML += `<p>Connectivité: ${data.connectivity}</p>`;
    }

    if (data.switchType) {
      detailsPopup.innerHTML += `<p>Type de switch: ${data.switchType}</p>`;
    }

    if (data.layout) {
      detailsPopup.innerHTML += `<p>Disposition: ${data.layout}</p>`;
    }

    if (data.resolution) {
      detailsPopup.innerHTML += `<p>Résolution: ${data.resolution}</p>`;
    }

    if (data.refreshRate) {
      detailsPopup.innerHTML += `<p>Taux de rafraîchissement: ${data.refreshRate}</p>`;
    }

    if (data.microphone) {
      detailsPopup.innerHTML += `<p>Microphone: ${data.microphone}</p>`;
    }

    if (data.capacity) {
      detailsPopup.innerHTML += `<p>Capacité: ${data.capacity}</p>`;
    }

    if (data.transferSpeed) {
      detailsPopup.innerHTML += `<p>Vitesse de transfert: ${data.transferSpeed}</p>`;
    }

    // Ré-attachement de l'événement de clic au bouton de fermeture car le contenu du popup est dynamique.
    document.getElementById("closeBtn").addEventListener("click", function () {
      detailsPopup.classList.remove("show");
    });
  }
});
