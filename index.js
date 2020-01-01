let lastContainer = null;
const bracketRegEx = /-?\[[^\]]*|[^[]*\]/g;

function removeClosedCaptions() {
    const els = document.getElementsByClassName('player-timedtext-text-container');

    if (els.length === 1) {
        const el = els[0];

        if (el != lastContainer && el.children != null) {
            lastContainer = el;

            for (const e of el.children) {
                if (e.textContent) {
                    
                    if(bracketRegEx.test(e.textContent)) {
                        console.log(e.textContent);
                        e.textContent = e.textContent.replace(bracketRegEx, '');
                    }
                    
                }
            }
        }
    }

    requestAnimationFrame(removeClosedCaptions);
}

removeClosedCaptions();
