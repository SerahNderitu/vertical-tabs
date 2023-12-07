
 <script>
            const tabsLink = document.querySelectorAll(".tabs a");
            const tabsContent = document.querySelectorAll(".tab-content");
            const tabContentWrapper = document.querySelector(".tab-content-wrapper");
            
            //an arrow function that enable the vertical alignment of the tab content
            const alignTabs = (linkId) => {
                tabsContent.forEach((tab, i) => {
                    if (tab.id.includes(linkId)) {
                        tabsContent.forEach((tabItem) => {
                            tabItem.style = `transform: translateY(-${i*540}px);`; // style property to move the tabs vertically.
                        });
                    }
                });
            }
            
            tabsLink.forEach((elem) => {
                elem.addEventListener('click', function() {
                    const linkId = elem.id;  // identify clicked link with its id
                    const hrefLinkClick = elem.href;
                    
                    tabsLink.forEach((link, i) => {
                        if (link.href == hrefLinkClick) {
                            link.classList.add("active");  // add active class to the clicked link
                            } else {
                                link.classList.remove("active");
                            }
                    });
                    
                    alignTabs(linkId);
                });
            });
            
            const urlHash = window.location.hash;
            let activeLink = document.querySelector('.tabs a');
            
            if (urlHash) {
                const visibleHash = document.getElementById( `${urlHash.replace('#', '')}` );
               
            if (visibleHash) {
                activeLink = visibleHash;
             }
                                                                                    
            }
            activeLink.classList.toggle('active');

            alignTabs(activeLink.id);
            activeLink.click();
    </script>
