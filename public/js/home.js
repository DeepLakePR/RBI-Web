$(()=>{

    /***********************/
    /* Scroll Buttons */
    const ScrollButtons = $('header nav li a, footer .pages-redirection ul a');

    ScrollButtons.each((_, button)=>{

        $(button).click(()=>{
            console.log($(button).attr('scroll-target'));

            let sectionTarget = $('.' + $(button).attr('scroll-target'));
            
            scrollTo({ 'top': sectionTarget.position().top, 'behavior': 'smooth' })

        });

    });

    /***********************/
    // CTA Chevron Down
    const CTA_ChevronDown = $('svg#cta-chevron-down');

    CTA_ChevronDown.click(()=>{

        scrollTo({ 'top': $('section.localizations').position().top - 50, 'behavior': 'smooth' });

    });

})

/***********************/
/* Page Up Function */
function pageUp(){
    if (window.scrollY != 0) {
        window.scrollTo(0, 0);
    }
}
