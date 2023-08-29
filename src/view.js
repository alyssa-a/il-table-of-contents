const TOCList = () => {
    const headingElements = document.querySelectorAll('#primary .wp-block-heading');
    
    // Check if headings have ids. If not, set the id
    headingElements.forEach((heading) => {
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
                <li>
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
const toc = document.getElementById('toc');
ReactDOM.render(<TOCList />, toc);


// Bootstrap modal manipulation requires jQuery, so we handle anchor links clicks with jQuery

jQuery(document).ready(function( $ ) {
    
    // Handle anchor link clicks
    $('#toc a').click(function(){
        let id = $(this).attr('href');
        $('#toc-modal').modal('hide');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 20
        }, 500);
    });

    //Remove focus on modal trigger button
    $('#toc-modal').on('shown.bs.modal', function(e){
        $('#toc-btn').one('focus', function(e){$(this).blur();});
    });
});