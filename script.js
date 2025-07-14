// const countdownDate = new Date("December 1, 2025 00:00:00").getTime();

// const updateCountdown = () => {
//     const now = new Date().getTime();
//     const distance = countdownDate - now;

//     if (distance <= 0) {
//         document.getElementById("timer").innerText = "Time's up!";
//         return;
//     }

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((distance / (1000 * 60)) % 60);

//     document.getElementById("timer").innerText =
//         `${days}d ${hours}h ${minutes}m remaining`;
// };

// setInterval(updateCountdown, 1000);
// updateCountdown();
// let focusTime = 25 * 60;
// const presetSelect = document.getElementById("preset-select");
// const customInput = document.getElementById("custom-minutes");

// presetSelect.addEventListener("change", () => {
//   if (presetSelect.value === "custom") {
//     customInput.style.display = "inline-block";
//   } else {
//     customInput.style.display = "none";
//     focusTime = parseInt(presetSelect.value);
//     updateFocusDisplay();
//   }
// });

// customInput.addEventListener("input", () => {
//   const customMinutes = parseInt(customInput.value);
//   if (!isNaN(customMinutes) && customMinutes > 0) {
//     focusTime = customMinutes * 60;
//     updateFocusDisplay();
//   }
// });

// let timerInterval;
// let isRunning = false;

// function updateFocusDisplay() {
//     const minutes = Math.floor(focusTime / 60);
//     const seconds = focusTime % 60;
//     document.getElementById("focus-display").innerText =
//         `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

// function startTimer() {
//     if (isRunning) return;
//     isRunning = true;
//     timerInterval = setInterval(() => {
//         if (focusTime > 0) {
//             focusTime--;
//             updateFocusDisplay();
//         } else {
//             clearInterval(timerInterval);
//             alert("Time's up Miyu! 🎉");
//         }
//     }, 1000);
// }

// function pauseTimer() {
//     clearInterval(timerInterval);
//     isRunning = false;
// }

// function resetTimer() {
//     pauseTimer();
//     focusTime = 25 * 60;
//     updateFocusDisplay();
// }

// updateFocusDisplay(); // initialize display
// let audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
// audio.loop = true;
// function updateFocusDisplay() {
//   const minutes = Math.floor(focusTime / 60);
//   const seconds = focusTime % 60;

//   const minCard = document.getElementById("min-card");
//   const secCard = document.getElementById("sec-card");

//   const minFront = document.getElementById("min-front");
//   const minBack = document.getElementById("min-back");
//   const secFront = document.getElementById("sec-front");
//   const secBack = document.getElementById("sec-back");

//   const minStr = minutes.toString().padStart(2, '0');
//   const secStr = seconds.toString().padStart(2, '0');

//   if (minFront.innerText !== minStr) {
//     minBack.innerText = minStr;
//     minCard.classList.add("flip");
//     setTimeout(() => {
//       minFront.innerText = minStr;
//       minCard.classList.remove("flip");
//     }, 600);
//   }

//   if (secFront.innerText !== secStr) {
//     secBack.innerText = secStr;
//     secCard.classList.add("flip");
//     setTimeout(() => {
//       secFront.innerText = secStr;
//       secCard.classList.remove("flip");
//     }, 600);
//   }
// }

// --- COUNTDOWN TIMER ---
const countdownDate = new Date("December 1, 2025 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        document.getElementById("timer").innerText = "Time's up!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("timer").innerText =
        `${days}d ${hours}h ${minutes}m remaining`;
};

setInterval(updateCountdown, 1000);
updateCountdown();

// --- FOCUS TIMER SETUP ---
let focusTime = 25 * 60;
let timerInterval;
let isRunning = false;

const presetSelect = document.getElementById("preset-select");
const customInput = document.getElementById("custom-minutes");

presetSelect.addEventListener("change", () => {
    if (presetSelect.value === "custom") {
        customInput.style.display = "inline-block";
    } else {
        customInput.style.display = "none";
        focusTime = parseInt(presetSelect.value);
        updateFocusDisplay();
    }
});

customInput.addEventListener("input", () => {
    const customMinutes = parseInt(customInput.value);
    if (!isNaN(customMinutes) && customMinutes > 0) {
        focusTime = customMinutes * 60;
        updateFocusDisplay();
    }
});

function updateFocusDisplay() {
    const hours = Math.floor(focusTime / 3600);
    const minutes = Math.floor((focusTime % 3600) / 60);
    const seconds = focusTime % 60;

    updateFlip("hr", hours);
    updateFlip("min", minutes);
    updateFlip("sec", seconds);
}

function updateFlip(unit, value) {
    const front = document.getElementById(`${unit}-front`);
    const back = document.getElementById(`${unit}-back`);
    const card = document.getElementById(`${unit}-card`);

    const valStr = value.toString().padStart(2, '0');

    if (front.innerText !== valStr) {
        back.innerText = valStr;
        card.classList.add("flip");
        setTimeout(() => {
            front.innerText = valStr;
            card.classList.remove("flip");
        }, 600);
    }
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        if (focusTime > 0) {
            focusTime--;
            updateFocusDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Time's up Miyu! 🎉");
            isRunning = false;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    pauseTimer();
    focusTime = parseInt(presetSelect.value) || 25 * 60;
    updateFocusDisplay();
}

updateFocusDisplay();


function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// Load saved goals
days.forEach(day => {
    const saved = localStorage.getItem(day);
    if (saved) {
        document.getElementById(day).value = saved;
    }

    // Save on typing
    document.getElementById(day).addEventListener("input", (e) => {
        localStorage.setItem(day, e.target.value);
    });
});
const getStoredDate = localStorage.getItem("lastUsedDate");
const todayDate = new Date().toLocaleDateString();

if (getStoredDate !== todayDate) {
    // Save today as last used
    localStorage.setItem("lastUsedDate", todayDate);

    const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

    // Auto-clear only on Monday
    if (dayName === "Monday") {
        days.forEach(day => {
            localStorage.removeItem(day);
        });
        console.log("Weekly planner cleared for new week ✅");
    }
}
function createCalendar(monthId, year, month, startDay, totalDays) {
    const calendarDiv = document.getElementById(monthId);

    for (let i = 1; i <= totalDays; i++) {
        const dateKey = `${year}-${month + 1}-${i}`;
        const savedText = localStorage.getItem(dateKey) || "";

        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");

        const label = document.createElement("div");
        label.innerText = i;

        const textarea = document.createElement("textarea");
        textarea.value = savedText;
        textarea.placeholder = "Topic / Notes...";
        textarea.addEventListener("input", () => {
            localStorage.setItem(dateKey, textarea.value);
        });

        dayBox.appendChild(label);
        dayBox.appendChild(textarea);
        calendarDiv.appendChild(dayBox);
    }
}

// July Calendar (starting 15th)
createCalendar("july-calendar", 2025, 6, 1, 17); // July = month 6 (0-indexed)
// August: 31 days
createCalendar("august-calendar", 2025, 7, 1, 31);

// September: 30 days
createCalendar("september-calendar", 2025, 8, 1, 30);

// October: 31 days
createCalendar("october-calendar", 2025, 9, 1, 31);

// November: 30 days
createCalendar("november-calendar", 2025, 10, 1, 30);

// December: 31 days
createCalendar("december-calendar", 2025, 11, 1, 31);
// Save and load progress tracker checkboxes
document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    const id = checkbox.id;
    const saved = localStorage.getItem(id);
    if (saved === "true") {
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
        localStorage.setItem(id, checkbox.checked);
    });
});
// Sync Calendar Weeks with Progress Tracker Highlights
document.querySelectorAll(".calendar-view li").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll("label").forEach(label => {
            label.classList.remove("highlight");
        });

        const topics = item.dataset.topic.trim().split(" ");

        topics.forEach(id => {
            const label = document.querySelector(`label[for="${id}"]`);
            if (label) label.classList.add("highlight");
        });
    });
});
function applyTagHighlight(textarea, container) {
    // Remove all tag classes first
    container.classList.remove("tag-revise", "tag-important", "tag-doubt", "tag-done");

    const value = textarea.value.toLowerCase();

    if (value.includes("#revise")) {
        container.classList.add("tag-revise");
    }
    if (value.includes("#important")) {
        container.classList.add("tag-important");
    }
    if (value.includes("#doubt")) {
        container.classList.add("tag-doubt");
    }
    if (value.includes("#done")) {
        container.classList.add("tag-done");
    }
}
function generateSmartSuggestions() {
    const allLabels = document.querySelectorAll("label input[type='checkbox']");
    const uncheckedTopics = [];

    allLabels.forEach(cb => {
        if (!cb.checked && cb.id) {
            const label = document.querySelector(`label[for="${cb.id}"]`) || cb.parentElement;
            if (label) uncheckedTopics.push(label.textContent.trim());
        }
    });

    let suggestionHTML = "";

    if (uncheckedTopics.length === 0) {
        suggestionHTML = "✨ You're all caught up, Miyu! Take a break or revise something light today.";
    } else {
        const randomSuggestions = uncheckedTopics.sort(() => 0.5 - Math.random()).slice(0, 5);
        suggestionHTML = `
        Based on your progress, here’s what you can focus on next:
        <ul>
          ${randomSuggestions.map(topic => `<li>${topic}</li>`).join("")}
        </ul>
      `;
    }

    document.getElementById("suggestions").innerHTML = suggestionHTML;
}

// Run when page loads
generateSmartSuggestions();
checkbox.addEventListener("change", () => {
    localStorage.setItem(id, checkbox.checked);
    generateSmartSuggestions(); // Update suggestions live
});
const itachiQuotes = [
    "Those who turn their hands against their comrades are sure to die a terrible death.",
    "Knowledge and awareness are vague, and perhaps better called illusions.",
    "People live their lives bound by what they accept as correct and true.",
    "You and I are flesh and blood. I'm always going to be there for you.",
    "Even the strongest of opponents always have a weakness.",
    "No matter what darkness or contradictions lie within the village, I am still Itachi Uchiha of the Leaf."
];

function showRandomQuote() {
    const quoteBox = document.getElementById("anime-quote");
    const random = itachiQuotes[Math.floor(Math.random() * itachiQuotes.length)];
    quoteBox.innerText = `"${random}"`;
    quoteBox.style.opacity = "0";
    setTimeout(() => {
        quoteBox.style.opacity = "1";
    }, 50);
}

document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    const id = checkbox.id;
    const saved = localStorage.getItem(id);
    if (saved === "true") {
        checkbox.checked = true;
    }

    // checkbox.addEventListener("change", () => {
    //     localStorage.setItem(id, checkbox.checked);
    //     generateSmartSuggestions(); // ✅ Live update here
    // });
});

