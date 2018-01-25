/* Run after pageload */
document.onload = toggleHover();

/* ************************************************** */
/*                Helper Functions                    */
/* ************************************************** */

/* helper functions to scroll to correct point in page due to sticky header offset */

function toTheBeer() {
  document.querySelector("#the-beer").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function toCelebratingMastery() {
  document.querySelector("#celebrating-mastery").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function toSince1871() {
  document.querySelector("#since-1871").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* removes the hover effect on the instagram photos on tablet(or smaller) because they look silly */
function toggleHover(e) {
  var elems = document.querySelectorAll(".instagram-section__img-container");
  if (window.innerWidth < 900) {
    [].forEach.call(elems, function(el) {
      el.classList.remove("hvr-grow-rotate");
    });
  } else {
    [].forEach.call(elems, function(el) {
      el.classList.add("hvr-grow-rotate");
    });
  }
}

/* ************************************************** */
/*                Event Listeners                     */
/* ************************************************** */

window.addEventListener("resize", toggleHover);
