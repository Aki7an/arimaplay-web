(function () {
  "use strict";

  var STORAGE_KEY = "arimaplay-lang";
  var STRINGS = {
    es: {
      "meta.og_locale": "es_ES",
      "meta.home.title": "Arima Play — Estudio independiente de videojuegos",
      "meta.home.description": "Arima Play es un estudio independiente. Juega CifraLetra en el navegador: lógica, letras y deducción.",
      "meta.home.og_title": "Arima Play — Juegos para pensar y descubrir",
      "meta.home.og_description": "Estudio independiente. Juega CifraLetra en el navegador: lógica, letras y deducción.",
      "meta.play.title": "Jugar CifraLetra — Arima Play",
      "meta.play.description": "Juega CifraLetra en el navegador: un pasatiempo de lógica, letras y deducción.",
      "meta.play.og_title": "Jugar CifraLetra",
      "meta.play.og_description": "Descifra la frase. Cada número esconde una letra.",
      "meta.legal.title": "Aviso legal — Arima Play",
      "meta.legal.description": "Aviso legal del sitio web de Arima Play.",
      "meta.privacy.title": "Política de privacidad — Arima Play",
      "meta.privacy.description": "Política de privacidad del sitio web de Arima Play.",
      "meta.notfound.title": "Página no encontrada — Arima Play",
      "lang.label": "Idioma",
      "nav.skip": "Saltar al contenido",
      "nav.open": "Abrir menú",
      "nav.main": "Principal",
      "nav.home": "Inicio",
      "nav.game": "CifraLetra",
      "nav.play": "Jugar",
      "nav.studio": "El estudio",
      "nav.contact": "Contacto",
      "nav.play_now": "Jugar ahora",
      "logo.home": "Arima Play, ir al inicio",
      "hero.eyebrow": "Estudio independiente",
      "hero.title": "Juega. Piensa. Descubre la palabra.",
      "hero.lead": "Arima Play crea juegos para pensar, descubrir y disfrutar. Nuestro primer juego, CifraLetra, es un pasatiempo de lógica, letras y deducción que ya puedes jugar en el navegador.",
      "hero.play": "Jugar CifraLetra",
      "hero.board": "Presentación visual de CifraLetra",
      "hero.caption": "CifraLetra: un pasatiempo de lógica, letras y deducción.",
      "hero.alt_menu": "Pantalla inicial de CifraLetra, con el lema Descifra la frase y el botón Jugar.",
      "game.eyebrow": "Primer juego",
      "game.title": "CifraLetra, para jugar ya",
      "game.lead": "CifraLetra es un juego de lógica, letras y deducción en el que cada número esconde una letra. El reto es descifrar la frase.",
      "game.body": "Ya puedes probarlo en el navegador. Seguimos afinando el juego: si algo se atasca o no se entiende, cuéntanoslo.",
      "game.play": "Jugar en el navegador",
      "game.expect_title": "Qué puedes esperar",
      "game.expect_body": "Una experiencia de pasatiempo centrada en frases, patrones y deducción. Juega ya en el navegador; iremos publicando mejoras.",
      "game.alt_match": "Partida de CifraLetra: una cuadrícula de números y letras, con teclado y pistas.",
      "game.alt_themes": "Pantalla de CifraLetra para elegir el tipo de partida y la temática.",
      "studio.eyebrow": "Quiénes somos",
      "studio.title": "Un estudio que empieza con CifraLetra",
      "studio.lead": "Arima Play es un estudio independiente de videojuegos. Esta es su primera etapa: un equipo pequeño, dos juegos en marcha y ganas de construir con cuidado.",
      "studio.body": "No hay una gran oficina ni una lista larga de títulos. Hay un pasatiempo de letras que queremos dejar redondo, un segundo juego que todavía está más lejos, y esta web para contarlo con claridad.",
      "studio.first": "Primer juego",
      "studio.cipher_blurb": "Lógica, letras y deducción. Ya se puede jugar en el navegador.",
      "studio.next": "Siguiente juego",
      "studio.sound_blurb": "Un juego centrado en el sonido. Sigue en prototipo y todavía le queda camino. Cuando esté listo, lo contaremos aquí.",
      "studio.alt_icon": "Icono de CifraLetra.",
      "studio.alt_match": "Pantalla de partida de CifraLetra.",
      "studio.alt_logo": "Logotipo de SoundScope.",
      "studio.alt_sound": "Pantalla de inicio de SoundScope: Reconstruye el recuerdo con el oído.",
      "contact.eyebrow": "Contacto",
      "contact.title": "Hablemos",
      "contact.lead": "Para soporte o prensa, escríbenos.",
      "footer.legal": "Aviso legal",
      "footer.privacy": "Política de privacidad",
      "legal.eyebrow": "Legal",
      "legal.notice.title": "Aviso legal",
      "legal.notice.intro": "Este sitio web, arimaplay.com, pertenece a Arima Play, un estudio independiente de videojuegos.",
      "legal.notice.owner": "Titular y contacto",
      "legal.notice.owner_body": "Para cualquier consulta relacionada con el sitio o con CifraLetra, puedes escribir a",
      "legal.notice.object": "Objeto",
      "legal.notice.object_body": "La web presenta el estudio y CifraLetra, y permite jugar al juego en el navegador. Los contenidos se publican de buena fe y pueden actualizarse sin previo aviso.",
      "legal.notice.ip": "Propiedad intelectual",
      "legal.notice.ip_body": "El nombre Arima Play, el nombre CifraLetra, los textos de esta web y los materiales gráficos del juego son propiedad de Arima Play, salvo que se indique otra autoría. No está permitido copiarlos o reutilizarlos con fines comerciales sin permiso.",
      "legal.notice.links": "Enlaces",
      "legal.notice.links_body": "Si esta web enlaza a redes o servicios de terceros, cada uno tendrá sus propias condiciones. Arima Play no se hace responsable del contenido de sitios externos.",
      "legal.back": "Volver al inicio",
      "privacy.title": "Política de privacidad",
      "privacy.intro": "Esta política describe cómo trata Arima Play los datos a través de arimaplay.com. El sitio es estático: no tiene cuenta de usuario ni base de datos propia.",
      "privacy.data": "Qué datos tratamos",
      "privacy.data_body": "Esta web no usa cookies de analítica ni formularios propios. Si nos escribes por correo, usaremos tu dirección y el contenido del mensaje solo para responderte.",
      "privacy.game": "CifraLetra",
      "privacy.game_body": "Puedes jugar CifraLetra en arimaplay.com/jugar. El juego se ejecuta en tu navegador y guarda en este dispositivo (almacenamiento local) las preferencias, partidas y el progreso. Las funciones en línea, si están activas, pueden usar un identificador técnico, el nombre elegido en el juego y datos básicos de la partida para prestar el servicio. CifraLetra no utiliza esos datos para rastrearte entre apps o sitios web.",
      "privacy.rights": "Conservación y derechos",
      "privacy.rights_body": "Los correos se conservan el tiempo necesario para atender la consulta. Puedes pedir acceso, rectificación o supresión escribiendo a",
      "privacy.updated": "Última actualización: 22 de septiembre de 2026.",
      "play.skip": "Saltar al juego",
      "play.nav": "Partida",
      "play.title": "Juega en el navegador",
      "play.lead": "La primera carga puede tardar: el juego pesa y se descarga completa. Luego se queda en este dispositivo.",
      "play.iframe": "CifraLetra",
      "notfound.eyebrow": "Error 404",
      "notfound.title": "Esta página no está en el tablero",
      "notfound.lead": "La dirección no existe o se ha movido. Vuelve al inicio de Arima Play.",
      "notfound.home": "Ir al inicio",
      "fullscreen.enter": "Pantalla completa",
      "fullscreen.exit": "Salir de pantalla completa"
    },
    en: {
      "meta.og_locale": "en_GB",
      "meta.home.title": "Arima Play — Independent video-game studio",
      "meta.home.description": "Arima Play is an independent studio. Play CifraLetra in the browser: logic, letters and deduction.",
      "meta.home.og_title": "Arima Play — Games to think and discover",
      "meta.home.og_description": "Independent studio. Play CifraLetra in the browser: logic, letters and deduction.",
      "meta.play.title": "Play CifraLetra — Arima Play",
      "meta.play.description": "Play CifraLetra in the browser: a logic, letters and deduction puzzle.",
      "meta.play.og_title": "Play CifraLetra",
      "meta.play.og_description": "Decipher the phrase. Each number hides a letter.",
      "meta.legal.title": "Legal notice — Arima Play",
      "meta.legal.description": "Legal notice for the Arima Play website.",
      "meta.privacy.title": "Privacy policy — Arima Play",
      "meta.privacy.description": "Privacy policy for the Arima Play website.",
      "meta.notfound.title": "Page not found — Arima Play",
      "lang.label": "Language",
      "nav.skip": "Skip to content",
      "nav.open": "Open menu",
      "nav.main": "Main",
      "nav.home": "Home",
      "nav.game": "CifraLetra",
      "nav.play": "Play",
      "nav.studio": "The studio",
      "nav.contact": "Contact",
      "nav.play_now": "Play now",
      "logo.home": "Arima Play, go to the homepage",
      "hero.eyebrow": "Independent studio",
      "hero.title": "Play. Think. Discover the word.",
      "hero.lead": "Arima Play makes games for thinking, discovering and enjoying. Our first game, CifraLetra, is a logic, letters and deduction puzzle you can already play in the browser.",
      "hero.play": "Play CifraLetra",
      "hero.board": "Visual introduction to CifraLetra",
      "hero.caption": "CifraLetra: a logic, letters and deduction puzzle.",
      "hero.alt_menu": "CifraLetra home screen, with the line Decipher the phrase and the Play button.",
      "game.eyebrow": "First game",
      "game.title": "CifraLetra, ready to play",
      "game.lead": "CifraLetra is a logic, letters and deduction game in which each number hides a letter. The challenge is to decipher the phrase.",
      "game.body": "You can already try it in the browser. We keep polishing the game: if something gets stuck or is unclear, tell us.",
      "game.play": "Play in the browser",
      "game.expect_title": "What to expect",
      "game.expect_body": "A puzzle built around phrases, patterns and deduction. Play it in the browser now; we will keep publishing improvements.",
      "game.alt_match": "A CifraLetra match: a grid of numbers and letters, with a keyboard and hints.",
      "game.alt_themes": "CifraLetra screen for choosing the match type and theme.",
      "studio.eyebrow": "Who we are",
      "studio.title": "A studio that starts with CifraLetra",
      "studio.lead": "Arima Play is an independent video-game studio. This is its first stage: a small team, two games under way and a wish to build carefully.",
      "studio.body": "There is no large office or a long list of titles. There is a letter puzzle we want to get right, a second game still further off, and this site to tell it clearly.",
      "studio.first": "First game",
      "studio.cipher_blurb": "Logic, letters and deduction. You can play it in the browser now.",
      "studio.next": "Next game",
      "studio.sound_blurb": "A game centred on sound. It is still a prototype and has a way to go. When it is ready, we will post it here.",
      "studio.alt_icon": "CifraLetra icon.",
      "studio.alt_match": "CifraLetra match screen.",
      "studio.alt_logo": "SoundScope logo.",
      "studio.alt_sound": "SoundScope start screen: Rebuild the memory by ear.",
      "contact.eyebrow": "Contact",
      "contact.title": "Get in touch",
      "contact.lead": "For support or press, write to us.",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy policy",
      "legal.eyebrow": "Legal",
      "legal.notice.title": "Legal notice",
      "legal.notice.intro": "This website, arimaplay.com, belongs to Arima Play, an independent video-game studio.",
      "legal.notice.owner": "Owner and contact",
      "legal.notice.owner_body": "For any query about the site or CifraLetra, write to",
      "legal.notice.object": "Purpose",
      "legal.notice.object_body": "The site presents the studio and CifraLetra, and lets you play the game in the browser. The content is published in good faith and may be updated without notice.",
      "legal.notice.ip": "Intellectual property",
      "legal.notice.ip_body": "The names Arima Play and CifraLetra, the texts on this site and the game artwork belong to Arima Play unless another author is stated. They may not be copied or reused for commercial purposes without permission.",
      "legal.notice.links": "Links",
      "legal.notice.links_body": "If this site links to third-party networks or services, each one has its own terms. Arima Play is not responsible for the content of external sites.",
      "legal.back": "Back to the homepage",
      "privacy.title": "Privacy policy",
      "privacy.intro": "This policy describes how Arima Play handles data through arimaplay.com. The site is static: it has no user accounts and no database of its own.",
      "privacy.data": "What data we handle",
      "privacy.data_body": "This site does not use analytics cookies or its own forms. If you write to us by email, we will use your address and the message only to reply.",
      "privacy.game": "CifraLetra",
      "privacy.game_body": "You can play CifraLetra at arimaplay.com/jugar. The game runs in your browser and stores preferences, matches and progress on this device (local storage). Online features, if they are on, may use a technical identifier, the name chosen in the game and basic match data to provide the service. CifraLetra does not use that data to track you across apps or websites.",
      "privacy.rights": "Retention and rights",
      "privacy.rights_body": "Emails are kept for as long as needed to handle the query. You can ask for access, correction or deletion by writing to",
      "privacy.updated": "Last updated: 22 September 2026.",
      "play.skip": "Skip to the game",
      "play.nav": "Match",
      "play.title": "Play in the browser",
      "play.lead": "The first load may take a while: the game is large and downloads in full. It then stays on this device.",
      "play.iframe": "CifraLetra",
      "notfound.eyebrow": "Error 404",
      "notfound.title": "This page is not on the board",
      "notfound.lead": "The address does not exist or has moved. Go back to the Arima Play homepage.",
      "notfound.home": "Go to the homepage",
      "fullscreen.enter": "Full screen",
      "fullscreen.exit": "Exit full screen"
    }
  };

  function normalizeLang(value) {
    var lang = String(value || "").toLowerCase().slice(0, 2);
    return lang === "en" ? "en" : "es";
  }

  function queryLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var value = params.get("lang");
      if (value) {
        return normalizeLang(value);
      }
    } catch (err) {}
    return "";
  }

  function storedLang() {
    try {
      return normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      return "";
    }
  }

  function browserLang() {
    var raw = (navigator.language || navigator.userLanguage || "es").toLowerCase();
    return raw.indexOf("es") === 0 ? "es" : "en";
  }

  var lang = queryLang() || storedLang() || browserLang();

  function t(key) {
    var pack = STRINGS[lang] || STRINGS.es;
    if (pack[key] != null) {
      return pack[key];
    }
    if (STRINGS.es[key] != null) {
      return STRINGS.es[key];
    }
    return key;
  }

  function setAttr(node, name, value) {
    if (node && name) {
      node.setAttribute(name, value);
    }
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      node.innerHTML = t(node.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (node) {
      setAttr(node, "content", t(node.getAttribute("data-i18n-content")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      setAttr(node, "alt", t(node.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (node) {
      setAttr(node, "aria-label", t(node.getAttribute("data-i18n-aria-label")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (node) {
      setAttr(node, "title", t(node.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    document.dispatchEvent(new CustomEvent("arimaplay:lang", { detail: { lang: lang } }));
  }

  function persist(next) {
    lang = normalizeLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {}
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
    } catch (err) {}
    apply();
  }

  function bind() {
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        persist(button.getAttribute("data-set-lang"));
      });
    });
  }

  window.ARIMA_I18N = {
    t: t,
    apply: apply,
    setLang: persist,
    getLang: function () {
      return lang;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      apply();
      bind();
    });
  } else {
    apply();
    bind();
  }
})();
