  (() => {
    "use strict";

    const storageKey = "stay-phyactive-weekly-progress";
    const activityInputs = Array.from(document.querySelectorAll('input[name="activity"]'));
    const activityIds = new Set(activityInputs.map((input) => input.value));
    const todayCount = document.getElementById("today-count");
    const weekTotal = document.getElementById("week-total");
    const weekRange = document.getElementById("week-range");
    const weekGrid = document.getElementById("week-grid");
    const storageNote = document.getElementById("storage-note");
    const resetButton = document.getElementById("reset-progress");
    const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    function toDateKey(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function mondayOf(date) {
      const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const daysSinceMonday = (monday.getDay() + 6) % 7;
      monday.setDate(monday.getDate() - daysSinceMonday);
      return monday;
    }

    const today = new Date();
    const weekStart = mondayOf(today);
    const weekStartKey = toDateKey(weekStart);
    const todayKey = toDateKey(today);
    let completed = {};

    function readProgress() {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved === null) return;

        const parsed = JSON.parse(saved);
        if (parsed === null || typeof parsed !== "object" || parsed.completed === null || typeof parsed.completed !== "object") {
          storageNote.textContent = "Saved progress was not in a usable format. A fresh tracker is ready.";
          return;
        }
        if (parsed.weekStart !== weekStartKey) return;

        for (const [dateKey, values] of Object.entries(parsed.completed)) {
          if (!Array.isArray(values)) continue;
          completed[dateKey] = [...new Set(values.filter((value) => activityIds.has(value)))];
        }
      } catch {
        storageNote.textContent = "Progress could not be loaded from this device. You can still use the checklist for this visit.";
      }
    }

    function saveProgress() {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ weekStart: weekStartKey, completed }));
        storageNote.textContent = "Your checklist and weekly progress are saved on this device.";
      } catch {
        storageNote.textContent = "Progress could not be saved on this device. Your changes will remain until you leave this page.";
      }
    }

    function renderProgress() {
      const todayActivities = completed[todayKey] || [];
      todayCount.textContent = `${todayActivities.length}/${activityInputs.length}`;
      activityInputs.forEach((input) => {
        input.checked = todayActivities.includes(input.value);
      });

      let weekActivityTotal = 0;
      const dayItems = weekGrid.querySelectorAll(".day-progress");
      dayItems.forEach((item, index) => {
        const date = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + index);
        const dateKey = toDateKey(date);
        const activityCount = (completed[dateKey] || []).length;
        const percentage = (activityCount / activityInputs.length) * 100;
        const progressBar = item.querySelector(".day-track");

        weekActivityTotal += activityCount;
        item.classList.toggle("is-today", dateKey === todayKey);
        item.querySelector(".day-name").textContent = `${dayLabels[index]} ${date.getDate()}`;
        item.querySelector(".day-count").textContent = `${activityCount}/${activityInputs.length}`;
        item.querySelector(".day-fill").style.width = `${percentage}%`;
        progressBar.setAttribute("aria-valuenow", String(activityCount));
        progressBar.setAttribute("aria-valuetext", `${activityCount} of ${activityInputs.length} activities`);
      });

      weekTotal.textContent = String(weekActivityTotal);
      const formattedWeekStart = weekStart.toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" });
      weekRange.textContent = `Week starting ${formattedWeekStart}`;
    }

    activityInputs.forEach((input) => {
      input.addEventListener("change", () => {
        const todayValues = new Set(completed[todayKey] || []);
        if (input.checked) {
          todayValues.add(input.value);
        } else {
          todayValues.delete(input.value);
        }
        completed[todayKey] = [...todayValues];
        saveProgress();
        renderProgress();
      });
    });

    resetButton.addEventListener("click", () => {
      completed = {};
      try {
        localStorage.removeItem(storageKey);
        storageNote.textContent = "This week's checklist and progress have been reset.";
      } catch {
        storageNote.textContent = "This week's progress is reset for this visit, but could not be cleared from this device.";
      }
      renderProgress();
    });

    readProgress();
    renderProgress();
  })();
