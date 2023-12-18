import { createRoot } from '@wordpress/element';

const TOCList = () => {
    const headingElements = document.querySelectorAll('#primary .wp-block-heading');
    
    headingElements.forEach((heading) => {

        // Check if headings have ids. If not, set the id
        if (!heading.hasAttribute('id')) {
            let id = heading.innerText.trim().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
            heading.setAttribute('id', id);
        }

    });

    // Create array of heading objects
    const headings = Array.from(headingElements)
        .map((elem) => ({
            id: elem.id,
            text: elem.innerText,
            level: Number(elem.nodeName.charAt(1)),
            children: []
        }));

    const buildNestedHeadings = (headings) => {
        headings = headings.reverse();
        let nestedHeadings = [];
        
        headings.forEach((heading, i) => {
            // new sections will always begin with an h2, so check if level == 2
            if (heading.level == 2) {
                nestedHeadings.push(heading);
            } else {
                for (let j = i; j < headings.length; j++) {
                    if (headings[j].level < heading.level) {
                    // parent of heading was found, so push to its children
                    headings[j].children.unshift(heading);
                    break;
                    }
                }
            }
        });
        
        return nestedHeadings.reverse();
        
    };

    const mapHeadings = (nestedHeadings) => {
        return nestedHeadings.map((heading) => (
            <>
            { heading.children.length > 0 ? (
                <li key={heading.id}>
                    <a href={"#" + heading.id}>{heading.text}</a>
                    <ol>
                        {mapHeadings(heading.children)}
                    </ol>
                </li>
            ) : (
                <li key={heading.id}>
                    <a href={"#" + heading.id}>{heading.text}</a>
                </li>
            )}
            </>
        ));
    };

    const nestedHeadings = buildNestedHeadings(headings);

    return (
        <ol>
            {mapHeadings(nestedHeadings)}
        </ol>
    );
}

// Render the list items
const tocElement = document.getElementById('toc');
const tocRoot = createRoot(tocElement);
tocRoot.render(<TOCList />);

// get scrollbar width and create css variable for no-scroll class
document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.offsetWidth) + 'px');

// show/hide TOC panel
const tocBtn = document.getElementById("il-toc-btn");
tocBtn.onclick = () => {
    const tocPanel = document.getElementById("il-toc-panel");
    const panelContent = tocPanel.querySelector(".il-toc-panel-content");
    const closeBtns = tocPanel.querySelectorAll(".il-toc-close-btn");
    const tocLinks = tocPanel.querySelectorAll("#toc a");

    // get motion preferences to determine if animations should be applied
    const prefersReducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    // handle close TOC panel
    const closePanel = () => {
        if (!prefersReducedMotion) {
            panelContent.classList.remove("slide-in");
            tocPanel.style.overflowY = "hidden";
            setTimeout(() => {
                tocPanel.style.overflowY = "hidden";
                tocPanel.style.display = "none";
              }, "300"); // duration for .il-toc-panel-content css transition
        } else {
            tocPanel.style.display = "none";
        }

        document.body.classList.remove("no-scroll");
        tocPanel.setAttribute("aria-hidden", "true");
        tocPanel.removeAttribute("aria-modal");
        tocPanel.removeAttribute("role");
        tocBtn.focus();
    }

    // disable scroll of background content
    document.body.classList.add("no-scroll");
    document.body.addEventListener("touchmove", (e) => {
        e.preventDefault();
    });

    // show TOC panel
    tocPanel.style.display = "block";
    tocPanel.style.overflowY = "auto";
    tocPanel.scrollTop = 0;
    tocPanel.setAttribute("role", "dialog");
    tocPanel.setAttribute("aria-modal", "true");
    tocPanel.removeAttribute("aria-hidden");
    if (!prefersReducedMotion) {
        panelContent.classList.add("slide-in");
    }

    // close TOC panel on button click
    closeBtns.forEach((closeBtn) => {
        closeBtn.onclick = () => {
            closePanel();
        }
    });

    // close TOC panel on background click
    tocPanel.onclick = (e) => {
        if (e.target == tocPanel) {
            closePanel();
        }
    }

    // close TOC panel on link click
    tocLinks.forEach((link) => {
        link.onclick = (e) => {
            if (!prefersReducedMotion) {
                e.preventDefault();
                const href = link.getAttribute("href");
                const linkTarget = document.querySelector(href);
                const state = {
                    hash: href,
                }
                linkTarget.scrollIntoView({ behavior: "smooth" });
                window.history.pushState( state , document.title, link.getAttribute("href") );
                closePanel();
            } else {
                closePanel();
            }
        }
    });

     // keyboard nav
     tocPanel.focus();
     document.addEventListener("keydown", (e) => {
         if (e.key === "Escape") {
            closePanel();
         } 

         // trap focus in modal
         if (e.shiftKey && e.key === "Tab") {
             if (document.activeElement === tocPanel || document.activeElement === closeBtns[0]) {
                 e.preventDefault();
                 closeBtns[1].focus();
             }
         } else if (e.key === "Tab") {
             if (document.activeElement === closeBtns[1]) {
                 e.preventDefault();
                 closeBtns[0].focus();
             }
         } 
         
     });

}

// Handle "sticky" button positioning on scroll
const tocBtnWrapper = document.getElementById("il-toc-btn-wrapper");

if (tocBtnWrapper.classList.contains('toc-btn-sticky')) {

    const startPos = tocBtnWrapper.getBoundingClientRect().top;
    let fixed = false;
    
    document.addEventListener("scroll", () => {
        let winScrollY = window.scrollY;
        if (winScrollY > startPos && !fixed) {
            tocBtnWrapper.classList.add("fixed-top");
            fixed = true;
        } else if (winScrollY < startPos && fixed) {
            tocBtnWrapper.classList.remove("fixed-top");
            fixed = false;
        }
    });

}