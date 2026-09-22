(function () {
  "use strict";

  var config = window.ARIMA_PLAY || {};
  var yearNodes = document.querySelectorAll("[data-year]");
  var year = String(new Date().getFullYear());
  yearNodes.forEach(function (node) {
    node.textContent = year;
  });

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    }
  });

  var mail = (config.contactEmail || "").trim();
  document.querySelectorAll("[data-contact-email]").forEach(function (node) {
    if (!mail) {
      node.hidden = true;
      return;
    }
    if (node.tagName === "A") {
      node.href = "mailto:" + mail;
      if (!node.hasAttribute("data-keep-label")) {
        node.textContent = mail;
      }
    }
  });

  var socialMap = {
    instagram: config.social && config.social.instagram,
    x: config.social && config.social.x,
    bluesky: config.social && config.social.bluesky,
    youtube: config.social && config.social.youtube
  };

  var stage = document.getElementById("play-stage");
  var fullscreenButtons = document.querySelectorAll("[data-fullscreen]");

  function fullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }

  function isGameFullscreen() {
    if (!stage) {
      return false;
    }
    return fullscreenElement() === stage || stage.classList.contains("is-fullscreen");
  }

  function updateFullscreenButtons() {
    var i18n = window.ARIMA_I18N;
    var active = isGameFullscreen();
    var label = i18n
      ? i18n.t(active ? "fullscreen.exit" : "fullscreen.enter")
      : (active ? "Salir de pantalla completa" : "Pantalla completa");
    fullscreenButtons.forEach(function (button) {
      button.textContent = label;
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function requestNativeFullscreen(element) {
    var request = element.requestFullscreen || element.webkitRequestFullscreen;
    if (!request) {
      return null;
    }
    var result = request.call(element);
    if (result && typeof result.then === "function") {
      return result;
    }
    return Promise.resolve();
  }

  function requestStageFullscreen() {
    if (!stage) {
      return Promise.reject();
    }
    var native = requestNativeFullscreen(stage);
    if (native) {
      return native;
    }
    stage.classList.add("is-fullscreen");
    document.body.style.overflow = "hidden";
    updateFullscreenButtons();
    return Promise.resolve();
  }

  function exitStageFullscreen() {
    if (fullscreenElement()) {
      if (document.exitFullscreen) {
        return document.exitFullscreen();
      }
      if (document.webkitExitFullscreen) {
        return document.webkitExitFullscreen();
      }
    }
    if (stage) {
      stage.classList.remove("is-fullscreen");
    }
    document.body.style.overflow = "";
    updateFullscreenButtons();
    return Promise.resolve();
  }

  fullscreenButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (isGameFullscreen()) {
        exitStageFullscreen();
      } else {
        requestStageFullscreen().catch(function () {
          if (stage) {
            stage.classList.add("is-fullscreen");
            document.body.style.overflow = "hidden";
            updateFullscreenButtons();
          }
        });
      }
    });
  });

  document.addEventListener("arimaplay:lang", updateFullscreenButtons);
  document.addEventListener("fullscreenchange", updateFullscreenButtons);
  document.addEventListener("webkitfullscreenchange", updateFullscreenButtons);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && stage && stage.classList.contains("is-fullscreen")) {
      exitStageFullscreen();
    }
  });

  Object.keys(socialMap).forEach(function (name) {
    var url = (socialMap[name] || "").trim();
    document.querySelectorAll("[data-social='" + name + "']").forEach(function (node) {
      if (url) {
        node.href = url;
        node.hidden = false;
      } else {
        node.hidden = true;
      }
    });
  });
})();
