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


let getUserName = function () {
    let submitBtn = document.getElementById("submitBtn");
    
    submitBtn.addEventListener("click", function () {

        let userName = document.getElementById("user_input").value;
        user_name.innerHTML = 'Nice to meet you, ' + userName + '!';
        if (!userName) {
            user_name.innerHTML = 'What\'s your name again?';
        }
    });
};

getUserName();


let getImg = function () {
    let userImg = document.getElementById("userImg");
    let imageContainer = document.querySelector(".image-container");
    let imagePreview = imageContainer.querySelector(".user-image-preview");
    let imageDefault = imageContainer.querySelector(".image-default");

    userImg.addEventListener("change", function () {
        let file = this.files[0];

        if (file) {
            let reader = new FileReader();
            imageDefault.style.display = "none";
            imagePreview.style.display = "block";

            reader.addEventListener("load", function () {
                imagePreview.setAttribute("src", this.result);
            })

            reader.readAsDataURL(file);
            console.log(file);
        } else {
            imageDefault.style.display = null;
            imagePreview.style.display = null;
            imagePreview.setAttribute("src", "");
        }
    });
};

getImg();
