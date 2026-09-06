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

  var testerUrl = (config.testerFormUrl || "").trim();
  var testerLinks = document.querySelectorAll("[data-tester-link]");
  var testerNote = document.querySelector("[data-tester-status]");

  testerLinks.forEach(function (link) {
    if (testerUrl) {
      link.href = testerUrl;
      link.removeAttribute("aria-disabled");
      link.classList.remove("is-disabled");
    } else {
      link.href = "#testers";
      link.setAttribute("aria-disabled", "true");
      link.classList.add("is-disabled");
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var section = document.getElementById("testers");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  });

  if (testerNote) {
    testerNote.hidden = Boolean(testerUrl);
  }

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
    github: config.githubProfile,
    instagram: config.social && config.social.instagram,
    x: config.social && config.social.x,
    bluesky: config.social && config.social.bluesky,
    youtube: config.social && config.social.youtube
  };

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
