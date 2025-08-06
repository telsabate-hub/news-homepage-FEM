const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener( "click", function(e){
    const openIcon = menuBtn.querySelector('.open-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');
    const mainNav = document.getElementById('mainNav');
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    const menuOverlay = document.getElementById('menuOverlay');
  
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.hidden = isExpanded;
    mainNav.classList.toggle( "open-nav" );

    // Toggle icon visibility
    openIcon.hidden = !isExpanded;
    closeIcon.hidden = isExpanded;

    if( !isExpanded ){  //Menu is about to be shown.
        menuOverlay.style.display = "block";
    } else {
        menuOverlay.style.display = "none";
    }
    
    document.body.classList.toggle( "menu-open" );
});