let activateTab = function () {
    let tabBtn = document.querySelectorAll('[data-tab-target]');
    let tabContent = document.querySelectorAll('[data-tab-content]');

    tabBtn.forEach((item) => {
        item.addEventListener('click', selectTab)
    });

    function selectTab() {
        tabBtn.forEach((item) => {
            item.classList.contains('active') ?
            item.classList.remove('active') :
            this.classList.add('active');
        }); 

        activeTab = this.getAttribute('data-tab-target');
        selectContent(activeTab);
    }
    
    function selectContent(activeTab) {
        tabContent.forEach((item) => {
           item.classList.contains(activeTab) ? 
           item.classList.add('active') : 
           item.classList.remove('active');
        });
    }
};

activateTab();
