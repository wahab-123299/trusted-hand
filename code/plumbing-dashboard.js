// Simulate XP earned from completed quests
let currentXP = 65; // You can dynamically set this based on actual data

function updateXPBar() {
  const xpFill = document.getElementById("xpFill");
  const xpText = document.getElementById("xpText");
  const badge = document.getElementById("artisanBadge");

  // Animate XP bar fill
  xpFill.style.transition = "width 1s ease-out";
  xpFill.style.width = `${currentXP}%`;

  // Update XP text
  xpText.textContent = `🔰 ${currentXP} XP / 100 XP to reach Artisan rank`;

  // Unlock badge if XP >= 100
  if (currentXP >= 100) {
    badge.classList.remove("locked");
    badge.classList.add("unlocked");
    badge.innerHTML = "⚔️ Artisan Badge – Unlocked! 🎉";

    // Optional: Add celebratory animation
    badge.style.animation = "pulse 1s infinite";
  }
}

// Optional: Pulse animation for unlocked badge
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
`;
document.head.appendChild(style);

// Call function on page load
updateXPBar();
