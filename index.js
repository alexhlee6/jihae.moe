(function () {
  var startingTime = new Date().getTime();
  // Load the script
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);

  // Poll for jQuery to come into existance
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
      startjQuery();
    }
    else {
      window.setTimeout(function () { checkReady(callback); }, 20);
    }
  };

  // Start polling...
  checkReady(function ($) {
    $(function () {
      var endingTime = new Date().getTime();
      var tookTime = endingTime - startingTime;
      console.log("jQuery is loaded, after " + tookTime + " milliseconds!");
    });
  });
})();



const startjQuery = () => {
  const $ = window.jQuery;

  setTimeout(() => {
    $(".first").animate({
      opacity: "1",
    }, 1200);
  }, 300);

  let currButton = "projects";
  document.getElementById("projects-button").addEventListener("click", () => {
    if (currButton === "projects") {
      goToProjects($);
      currButton = "socials";
      document.getElementById("projects-button").innerHTML = `<i class="fas fa-chevron-left"></i> SOCIALS`
    } else {
      goToSocials($);
      currButton = "projects";
      document.getElementById("projects-button").innerHTML = `PROJECTS <i class="fas fa-chevron-right"></i>`
    }

  });
}

const goToProjects = ($) => {
  $(".links-container").animate({
    right: "50",
    opacity: "0"
  }, 500);
  setTimeout(() => {
    $(".links-container").css("display", "none");
    $(".projects-container").css({
      "opacity": "0",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    });
    $(".projects-container").animate({
      right: "0",
      opacity: "1"
    }, 800);
  }, 300);
}

const goToSocials = ($) => {
  $(".projects-container").animate({
    right: "-50",
    opacity: "0"
  }, 500);
  setTimeout(() => {
    $(".projects-container").css("display", "none");
    $(".links-container").css({
      "opacity": "0",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    });
    $(".links-container").animate({
      right: "0",
      opacity: "1"
    }, 800);
  }, 300);
}