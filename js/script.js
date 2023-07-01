// block pub

let unselect = select(
  '[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."'
);
unselect ? unselect.remove() : console.log();

let cycle = 0;
function Insertcounter() {
  date1 = new Date();
  date2 = new Date("2023-08-30");
  let diff = dateDiff(date1, date2);
  if (diff.sec == 0 && diff.min == 0 && diff.hour == 0 && diff.day == 0) {
    select("#counter-days").textContent = 0;
    select("#counter-hours").textContent = 0;
    select("#counter-min").textContent = 0;
    if (cycle < 5) {
      Fiesta();
      cycle++;
    }
  } else if (diff.day == 0) {
    select("#text-counter-days").textContent = "Hours";
    select("#text-counter-hours").textContent = "Minutes";
    select("#text-counter-minutes").textContent = "Seconds";
    select("#counter-days").textContent = diff.hour;
    select("#counter-hours").textContent = diff.min;
    select("#counter-min").textContent = diff.sec;
  } else {
    select("#counter-days").textContent = diff.day;
    select("#counter-hours").textContent = diff.hour;
    select("#counter-min").textContent = diff.min;
  }
}
interval_counter = setInterval(Insertcounter, 1000);

// menu mobile
let bars = select(".bars");
let cross = select(".cross");
let menu = select("menu.menu");
let main = select("main");

bars.addEventListener("click", function (e) {
  menu.classList.add("active");
});

main.addEventListener("click", function (e) {
  menu.classList.remove("active");
});

for (var i = 0; i < menu.children.length; i++) {
  menu.children[i].addEventListener("click", function (e) {
    menu.classList.remove("active");
  });
}

// Buttons nft-cards

let btn_all_cards = select("button#btn-all-nft");
let btn_founder_cards = select("button#btn-founder-nft");
let btn_helpers_cards = select("button#btn-helpers-nft");
let all_cards = select(".nft-cards", true);
let all_founder_cards = select(".card-founder", true);
let all_helpers_cards = select(".card-helper", true);

btn_all_cards.addEventListener("click", function () {
  for (let i = 0; i < all_cards.length; i++) {
    const element = all_cards[i];
    element.classList.remove("hidden");
  }
  for (let a = 0; a < all_founder_cards.length; a++) {
    const element = all_founder_cards[a];
    element.classList.remove("hidden");
  }
  for (let r = 0; r < all_helpers_cards.length; r++) {
    const element = all_helpers_cards[r];
    element.classList.remove("hidden");
  }
});
btn_founder_cards.addEventListener("click", function () {
  for (let a = 0; a < all_founder_cards.length; a++) {
    const element = all_founder_cards[a];
    element.classList.remove("hidden");
  }
  for (let r = 0; r < all_helpers_cards.length; r++) {
    const element = all_helpers_cards[r];
    element.classList.add("hidden");
  }
});
btn_helpers_cards.addEventListener("click", function () {
  for (let a = 0; a < all_founder_cards.length; a++) {
    const element = all_founder_cards[a];
    element.classList.add("hidden");
  }
  for (let r = 0; r < all_helpers_cards.length; r++) {
    const element = all_helpers_cards[r];
    element.classList.remove("hidden");
  }
});

function Fiesta() {
  console.log("Ouai Super !!");
}
