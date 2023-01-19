
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function updateClock() {
    var currentTime = new Date();
    // Operating System Clock Hours for 12h clock
    var currentDay = currentTime.getDate();
    // Operating System Day 
    var currentYear = currentTime.getFullYear();
    // Operating System Year
    var currentMonth = currentTime.toLocaleString('default', { month: 'long' });;
    var currentHoursAP = currentTime.getHours();
    // Operating System Clock Hours for 24h clock
    var currentHours = currentTime.getHours();
    // Operating System Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Operating System Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // transform clock to 12h version if needed
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // transform clock to 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    // display first 24h clock and after line break 12h version
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds 
    var currentDayString = currentDay + "," + currentMonth + " " + currentYear
    // print clock js in div #clock.
    $("#timer-countdown span").html(currentTimeString);
    $('#day').html(currentDayString);}
    $(document).ready(function () {
    setInterval(updateClock, 1000);
});
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
toggler.addEventListener("click", function(e) {
e.preventDefault();

let tabName = this.getAttribute("href");

let tabContents = document.querySelector("#tab-contents");

for (let i = 0; i < tabContents.children.length; i++) {

tabTogglers[i].parentElement.classList.remove("border-blue-400", "border-b",  "-mb-px", "opacity-100");  tabContents.children[i].classList.remove("hidden");
if ("#" + tabContents.children[i].id === tabName) {
continue;
}
tabContents.children[i].classList.add("hidden");

}
e.target.parentElement.classList.add("border-blue-400", "border-b-4", "-mb-px", "opacity-100");
});
});

document.getElementById("default-tab").click();