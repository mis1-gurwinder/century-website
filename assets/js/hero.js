/* Orbit hero: five Century packs turn on a dial and the active one comes forward.
   The dial loops on its own and never stops. Keyboard, tap and swipe all work. */
(function () {
    const root = document.getElementById("orbitHero");
    if (!root) return;

    const packs = [...root.querySelectorAll(".oh-pack")];
    const tabs = [...root.querySelectorAll(".oh-tab")];
    const dial = root.querySelector(".oh-dial");
    const numEl = root.querySelector(".oh-num");
    const catEl = root.querySelector(".oh-cat");
    const lineEl = root.querySelector(".oh-line");
    const N = packs.length;
    const STEP = 360 / N;
    const DUR = 4800;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let active = 0;
    let timer = null;

    function radius() {
        return dial.offsetWidth * 0.34;
    }

    function place() {
        const r = radius();
        packs.forEach((el, k) => {
            // Signed offset from the active pack, wrapped to -2..2.
            let d = (((k - active) % N) + N) % N;
            if (d > N / 2) d -= N;
            const th = (d * STEP * Math.PI) / 180;
            const x = Math.sin(th) * r;
            const y = Math.cos(th) * r;
            const front = (1 + Math.cos(th)) / 2; // 1 = front, 0 = back
            el.style.transform =
                "translate(-50%, -50%) translate(" + x.toFixed(1) + "px, " + y.toFixed(1) + "px) scale(" + (0.6 + 0.4 * front).toFixed(3) + ")";
            el.style.opacity = (0.4 + 0.6 * front).toFixed(3);
            el.style.zIndex = String(Math.round(10 + 90 * front));
            el.classList.toggle("is-active", k === active);
        });
    }

    function paint() {
        const p = packs[active];
        root.style.setProperty("--ob", p.dataset.bg);
        numEl.textContent = String(active + 1).padStart(2, "0");
        catEl.textContent = p.dataset.title;
        lineEl.textContent = p.dataset.line;
        tabs.forEach((t, k) => {
            t.setAttribute("aria-selected", String(k === active));
            t.tabIndex = k === active ? 0 : -1;
        });
    }

    function schedule() {
        clearTimeout(timer);
        const fill = tabs[active].querySelector(".oh-fill");
        fill.style.animation = "none";
        void fill.offsetWidth;
        fill.style.animation = "ohFill " + DUR + "ms linear forwards";
        if (reduce) return;
        timer = setTimeout(() => go(active + 1), DUR);
    }

    function go(n) {
        active = ((n % N) + N) % N;
        place();
        paint();
        schedule();
    }

    tabs.forEach((t, k) => t.addEventListener("click", () => go(k)));

    packs.forEach((el, k) =>
        el.addEventListener("click", (e) => {
            if (k !== active) {
                e.preventDefault();
                go(k);
            }
            // The active pack is a real link to its product page.
        })
    );

    root.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") go(active + 1);
        if (e.key === "ArrowLeft") go(active - 1);
    });

    let sx = null;
    root.addEventListener(
        "touchstart",
        (e) => {
            sx = e.touches[0].clientX;
        },
        { passive: true }
    );
    root.addEventListener("touchend", (e) => {
        if (sx === null) return;
        const dx = e.changedTouches[0].clientX - sx;
        sx = null;
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
    });

    window.addEventListener("resize", place);
    place();
    paint();
    schedule();
})();