document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");

    // xử lý sự kiện chuyển tab
    function handleChangeTab () {
        const changTabs = document.querySelectorAll('.js__changeTab')

        if (changTabs.length === 0) return;

        changTabs.forEach((changTab)=>{
            const tabs = changTab.querySelectorAll(".js__tabItem");
            const panes = changTab.querySelectorAll(".js__tabPane");

            tabs.forEach((tab,index)=>{
                tab.onclick = function() {
                    pane = panes[index]

                    changTab.querySelector('.js__tabItem.active').classList.remove('active')
                    changTab.querySelector('.js__tabPane.active').classList.remove('active')

                    this.classList.add('active')
                    pane.classList.add('active')
                }
            })
        })
    }

    // Xử lý video tỉ lệ 16:9
     function handleVideo_16x9() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s.length === 0) return;
        video169s.forEach((video169) => {
            var videos = video169.querySelectorAll("iframe");
            if (videos.length === 0) return;
            videos.forEach((video) => {
                var w = video.offsetWidth;
                video.style.height = (w * 9) / 16 + "px";
            });
        });
    }

    // Xử lý upload file
     function handleUploadFile() {
        const inputs = document.querySelectorAll( '.js__inputFile' );
        if (inputs.length === 0) return;

        Array.prototype.forEach.call( inputs, function( input )
        {
            var label	 = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener('change', function(e) {
                let fileName = e.target.value.split('\\').pop(); 

                if (fileName) {
                    label.querySelector('div').innerHTML = fileName;
                } else {
                    label.innerHTML = labelVal;
                }
            });
        });

    }

    // xử lý sự kiện collapse
    function handleCollapse () {

        const collapseContainers = document.querySelectorAll('.js__collapseContainer')
        if (collapseContainers.length === 0) return;
        
        let activeItem = null;
        
        collapseContainers.forEach((collapseContainer)=>{
            const collapses = collapseContainer.querySelector('.js__collapse')
            collapses.onclick = function() {
                // khi item đang mở
                if (activeItem === collapseContainer) {
                    collapseContainer.classList.remove('active'); 
                    activeItem = null; 
                } else {
                    // khi không có item nào mở
                    if (activeItem) {
                        activeItem.classList.remove('active');
                    }
                    collapseContainer.classList.add('active');
                    activeItem = collapseContainer; 
                    
                }  
                 
            }
           
        })
    }

    // xử lý sự kiện active
    function handleActiveElement() {
        const activeContainers = document.querySelectorAll('.js__activeContainer')
        if (activeContainers.length === 0) return;
        
        
        activeContainers.forEach((activeContainer)=>{
            
            const activeElements = activeContainer.querySelectorAll('.js__activeItem')
            
            if (activeElements.length === 0) return;

            activeElements.forEach((activeElement)=>{

                activeElement.onclick = function() {
                    activeContainer.querySelector('.js__activeItem.active').classList.remove('active')
                    this.classList.add('active');
                }
            })
           
        })
    }

    // xử lý sự kiện để show popupLogin
    function handleShowPopupLogin() {
        const showPopupLogins = document.querySelectorAll(".js__showPopupLogin");
        const popupLoginContainer = document.querySelector(".js__popupLoginContainer");

        if(popupLoginContainer && showPopupLogins) {

            const popupLogin = popupLoginContainer.querySelector(".js__popupLogin");
            const closePopupLogin = popupLoginContainer.querySelector(".js__closePopupLogin");
            const overlay = popupLoginContainer.querySelector(".js__overlay");
            
            if (showPopupLogins.length === 0) return;

                
            showPopupLogins.forEach((showPopupLogin)=>{

                showPopupLogin.onclick = function() {
                    popupLogin.classList.add('active')
                    overlay.classList.add('active')
                    document.querySelector("body").style.overflow = "hidden";
                }
    
                closePopupLogin.onclick = function () {
                    document.querySelector("body").style.overflow = "auto";
                    popupLogin.classList.remove('active')
                    overlay.classList.remove('active')
                    loginForm.classList.add('active')
                    registerForm.classList.remove('active')
                    forgotForm.classList.remove('active')
                };
    
                overlay.onclick = function () {
                    this.classList.remove("active");
                    document.querySelector("body").style.overflow = "auto";
                    popupLogin.classList.remove('active');
                    loginForm.classList.add('active')
                    registerForm.classList.remove('active')
                    forgotForm.classList.remove('active')
                };

                // change form login register forgot
                const loginContainerForm = document.querySelector(".js__loginContainerForm");

                if(!loginContainerForm) return

                const loginForm = loginContainerForm.querySelector('.js__loginForm')
                const registerForm = loginContainerForm.querySelector('.js__registerForm')
                const forgotForm = loginContainerForm.querySelector('.js__forgotForm')

                const loginBtn = registerForm.querySelector('.js__loginBtn')
                const registerBtn = loginForm.querySelector('.js__registerBtn')
                const forgotBtn = loginForm.querySelector('.js__forgotBtn')
                
                // login
                registerBtn.onclick = function() {
                    loginForm.classList.remove('active')
                    registerForm.classList.add('active')
                    forgotForm.classList.remove('active')
                }
                // register
                loginBtn.onclick = function() {
                    registerForm.classList.remove('active')
                    loginForm.classList.add('active')
                }
                // forgot
                forgotBtn.onclick = function() {
                    loginForm.classList.remove('active')
                    forgotForm.classList.add('active')
                }
            })

            
        }
        
        
    }

    // xử lý sự kiện để show dropdown
     function handleShowDropdown() {
        
        const dropdownContainers = document.querySelectorAll(".js__dropdownContainer");


        if (dropdownContainers.length === 0) return;


        dropdownContainers.forEach((dropdownContainer)=>{

            const dropdown = dropdownContainer.querySelector(".js__showDropdown");
            const dropdownContent = dropdownContainer.querySelector(".js__dropdownContent");
            const overlay = dropdownContainer.querySelector(".js__overlay");


            dropdown.onclick = function () {
                dropdownContent.classList.toggle("active");
                overlay.classList.add('active')

            };

            overlay.onclick = function () {
                dropdownContent.classList.remove("active");
                this.classList.remove("active");
            };
        })

      
    }

    // Khởi tạo slider với một item
    function initSliderOneItems() {
        const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
        if (oneSlides) {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                });
            });
        }
    }

    // khởi tạo slider với 3 item
    function initSliderThreeItems() {
        const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");
        if (threeSlides) {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    },
                });
            });
        }
    }
    // khởi tạo slider với 4 item
    function initSliderFourItems() {
        const fourSlides = document.querySelectorAll(".js__fourSlidesContainer");
        if (fourSlides) {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    },
                });
            });
        }
    }
    // khởi tạo slider với 5 item
    function initSliderFiveItems() {
        const fiveSlides = document.querySelectorAll(".js__fiveSlidesContainer");
        if (fiveSlides) {
            fiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__fiveSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    },
                });
            });
        }
    }

    // khởi tạo slider four row
    function initSliderFourRowItems() {
        const fourRowSlides = document.querySelectorAll(".js__fourRowSlidesContainer");
        if (fourRowSlides) {
            fourRowSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourRowSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    spaceBetween: 10,
                    slidesPerView: 4, 
                    slidesPerGroup: 1,
                    grid: {
                        rows: 4,      
                        fill: 'row',
                    },
                    watchSlidesProgress: true,
                    watchOverflow: true,
                    freeMode: false, 
                    observer: true,
                    observeParents: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 4,
                            grid: {
                                rows: 4,
                                fill: 'row',
                            },
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 12,
                            grid: {
                                rows: 4,
                                fill: 'row',
                            },
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                            grid: {
                                rows: 4,
                                fill: 'row',
                            },
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                            grid: {
                                rows: 4,
                                fill: 'row',
                            },
                        },
                    },
                });
            });
        }
    }
    
    // xử lý sự kiện show menu mobile
    function handleMenuMobile () {
        // show menu
        const bod = document.querySelector('body')
        const clickShowMenuMbs = document.querySelectorAll('.js__clickShowMenuMb');
        const closeSubMenuMb = document.querySelector('.js__closeSubMenuMb');
        const subMenuMb = document.querySelector('.js__subMenuMb');

        if(clickShowMenuMbs.length === 0 && !closeSubMenuMb) return;
        clickShowMenuMbs.forEach((clickShowMenuMb)=>{
            clickShowMenuMb.onclick = function() {
                subMenuMb.classList.add('active');
                bod.classList.add('hidden')
            }
        })
        closeSubMenuMb.onclick = function(){
            subMenuMb.classList.remove('active');
            bod.classList.remove('hidden')
        }

        const subMenuMbContainers = document.querySelectorAll('.js__subMenuMbContainer');

        if (subMenuMbContainers.length === 0 ) return;
        
        subMenuMbContainers.forEach((subMenuMbContainer)=>{

            const subMenuMbItems = subMenuMbContainer.querySelectorAll('.js__subMenuMbItem');
            const subMenuMbDropdowns = subMenuMbContainer.querySelectorAll('.js__subMenuMbDropdown');
            
            if (subMenuMbItems.length === 0 ) return;
            
            subMenuMbItems.forEach((subMenuMbItem)=>{
                const showSubMenuMbItem = subMenuMbItem.querySelector('.js__showSubMenuMbItem');
                
                if(!showSubMenuMbItem) return

                showSubMenuMbItem.onclick = function() {
                    subMenuMbItem.classList.toggle('active')
                }
            });

            if (subMenuMbDropdowns.length === 0 ) return;

            subMenuMbDropdowns.forEach((subMenuMbDropdown)=>{
                const showSubMenuMbDropdown = subMenuMbDropdown.querySelector('.js__showSubMenuMbDropdown');
                
                if(!showSubMenuMbDropdown) return

                showSubMenuMbDropdown.onclick = function() {
                    subMenuMbDropdown.classList.toggle('active')
                }
            });

            

        });

    }

    // xử lý sự kiện show search pc
    function handleShowSearchPc () {
        const searchPc = document.querySelectorAll(".js__searchPc");
        if (searchPc.length === 0) return;
        searchPc.forEach((searchPc) => {
           
            var formSearchPc = document.querySelector(".js__formSearchPc");
            const focusElement =
                formSearchPc.querySelector(".js__focusSearchPc");
            searchPc.onclick = function () {
                this.classList.toggle('active')
                formSearchPc.classList.add("active");
                focusElement.focus();

                if(!this.classList.contains('active')) {
                    formSearchPc.classList.remove("active");
                    focusElement.value = "";
                }
                
            };
        });
        
    }
    // xử lý sự kiện show search mb
    function handleShowSearchMb () {
        const searchMbs = document.querySelectorAll(".js__searchMb");
        if (searchMbs.length === 0) return;
        searchMbs.forEach((searchMb) => {
            var closeSearchMb =
                document.querySelector(".js__closeSearchMb");
            var formSearchMb = document.querySelector(".js__formSearchMb");
            const focusElement =
                formSearchMb.querySelector(".js__focusSearchMb");
            searchMb.onclick = function () {
                formSearchMb.classList.add("active");
                focusElement.focus();
                
            };
            closeSearchMb.onclick = function () {
                formSearchMb.classList.remove("active");
                focusElement.value = "";
            };
        });
        
    }

    // xử lý sự kiện để show popup
    function handleShowPopup() {
        const popupContainers = document.querySelectorAll(".js__popupContainer");
        
        if(popupContainers.length === 0) return 
        
        popupContainers.forEach((popupContainer)=>{
            
            const showPopup = popupContainer.querySelector(".js__showPopup");
            const popupContent = popupContainer.querySelector(".js__popupContent");
            const closePopup = popupContainer.querySelector(".js__closePopup");
            const overlay = popupContainer.querySelector(".js__overlay");
            
            showPopup.onclick = function() {
                popupContent.classList.add('active')
                overlay.classList.add('active')
                document.querySelector("body").style.overflow = "hidden";
            }
    
            closePopup.onclick = function () {
                document.querySelector("body").style.overflow = "auto";
                popupContent.classList.remove('active')
                overlay.classList.remove('active')
            };
    
            overlay.onclick = function () {
                this.classList.remove("active");
                document.querySelector("body").style.overflow = "auto";
                popupContent.classList.remove('active');
            };

            })

    }


    // Khởi tạo fancybox
    function initFancybox() {
        const fancyboxes = document.querySelectorAll(".fancybox-full");
        if (fancyboxes) {
            fancyboxes.forEach(function () {
                $(".fancybox-full a").fancybox();
            });
        }
    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
    
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }

    // Xử lý hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }

    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        handleBackTopVisibility()
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleShowSearchPc();
        handleShowSearchMb();
        handleMenuMobile();
        handleShowPopupLogin();
        handleShowDropdown();
        // slide
        initSliderOneItems();
        initSliderThreeItems();
        initSliderFourItems();
        initSliderFiveItems();
        initSliderFourRowItems();
        
        // end slide
        handleUploadFile();
        handleBackTop();
        initFancybox();
        handleShowPopup();
        handleCollapse();
        handleChangeTab();
        handleActiveElement();
        handleVideo_16x9();
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});