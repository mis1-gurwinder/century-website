/* Stage hero: one chapter per product. Each slide has its own copy and pack,
   the slider loops on its own and never stops. Keyboard, arrows, tabs and swipe work. */
(function () {
    const root = document.getElementById("stageHero");
    if (!root) return;

    const slides = [...root.querySelectorAll(".sh-slide")];
    const tabs = [...root.querySelectorAll(".sh-tab")];
    const N = slides.length;
    const DUR = 5500;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let active = 0;
    let timer = null;

    function paint() {
        slides.forEach((s, k) => {
            s.classList.toggle("is-active", k === active);
            s.setAttribute("aria-hidden", k === active ? "false" : "true");
        });
        root.style.setProperty("--sb", slides[active].dataset.bg);
        tabs.forEach((t, k) => {
            t.setAttribute("aria-selected", String(k === active));
            t.tabIndex = k === active ? 0 : -1;
            if (k !== active) {
                const f = t.querySelector(".sh-fill");
                f.style.animation = "none";
                f.style.width = "0";
            }
        });
    }

    function schedule() {
        clearTimeout(timer);
        const fill = tabs[active].querySelector(".sh-fill");
        fill.style.animation = "none";
        void fill.offsetWidth;
        fill.style.animation = "shFill " + DUR + "ms linear forwards";
        if (!reduce) timer = setTimeout(() => go(active + 1), DUR);
    }

    function go(n) {
        active = ((n % N) + N) % N;
        paint();
        schedule();
    }

    tabs.forEach((t, k) => t.addEventListener("click", () => go(k)));
    root.querySelector(".sh-prev").addEventListener("click", () => go(active - 1));
    root.querySelector(".sh-next").addEventListener("click", () => go(active + 1));

    root.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") go(active + 1);
        if (e.key === "ArrowLeft") go(active - 1);
    });

    let sx = null;
    root.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", (e) => {
        if (sx === null) return;
        const dx = e.changedTouches[0].clientX - sx;
        sx = null;
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
    });

    paint();
    schedule();
})();