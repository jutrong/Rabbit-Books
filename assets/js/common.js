// 페이지가 로드되면 동작한다.
window.onload = function () {
    // GNB
    const GNB = document.querySelector(".hover_thumb_menu");
    const sub_menus = document.querySelectorAll(".sub_menu");
    const gnbCategory = document.querySelector(".gnb.category");
    console.log(gnbCategory);
    GNB.addEventListener("mouseover", function (e) {
        const sub_menu = e.target.nextElementSibling;
        if (sub_menu) {
            // sub_menu reset
            for (let i = 0; i < sub_menus.length; i++) {
                sub_menus[i].classList.remove("active");
            }

            // mouseover sub_menu active
            if (sub_menu.classList.value.includes("sub_menu")) {
                sub_menu.classList.add("active");
            }
        }
        // gnbcategory add active
        gnbCategory.classList.add("active");
    });
    GNB.addEventListener("mouseleave", function () {
        gnbCategory.classList.remove("active"); // gnbcategory remove active
    });

    // 증감 버튼 구현 --- start
    const minusBtn = document.querySelector("#minusBtn");
    const plusBtn = document.querySelector("#plusBtn");
    if (minusBtn && plusBtn) {
        minusBtn.addEventListener("click", function () {
            increaseAndDecrease("decrease", "#quantity");
        });
        plusBtn.addEventListener("click", function () {
            increaseAndDecrease("increase", "#quantity");
        });
    }
    // 증감 버튼 구현 --- end

    // tab type1,2,3 --- start
    const tabNumber = ["1", "2", "3"];
    tabNumber.forEach((n) => {
        const tab = document.querySelector(`.tab_menu_type${n}`);
        if (tab) {
            tab.addEventListener("click", function (e) {
                // 상단 탭 초기화
                const tabs = this.children;
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove("active");
                }
                // 탭관련 컨텐츠 초기화
                const contType = document.querySelector(`.tab_con_type${n}`);
                const cons = contType.children;
                for (let i = 0; i < cons.length; i++) {
                    cons[i].classList.add("dis_none");
                }
                // click부분 이벤트 처리
                e.target.parentElement.classList.add("active");
                const dataTarget = e.target.getAttribute("data-target");
                document
                    .querySelector(`.${dataTarget}`)
                    .classList.remove("dis_none");
            });
        }
    });
    // tab type1,2,3 --- end

    // common modal --- start
    const modalOpenBtn = document.querySelector(".modal_btn"); // modal 버튼
    const modalWrap = document.querySelector(".modal_wrap");
    if (modalOpenBtn && modalWrap) {
        // modal 열기
        modalOpenBtn.addEventListener("click", function () {
            // dimLayer깔아주기
            const dimLayer = document.createElement("div");
            dimLayer.setAttribute("id", "mainDimLayer");
            document.body.prepend(dimLayer);
            modalWrap.classList.add("active"); // modal 열어주기
        });
        // modal 닫기
        modalWrap.addEventListener("click", function (e) {
            if (e.target.classList.value.includes("close_modal")) {
                modalWrap.classList.remove("active");
                document.querySelector("#mainDimLayer").remove();
            }
        });
    }
    // common modal --- end
};

/**
 * 증가 감소 callback method
 * @param {string} type "increase" | "decrease"
 * @param {string} target "input의 id값을 입력"
 */
function increaseAndDecrease(type, target) {
    const thisTarget = document.querySelector(target);
    let countValue = +thisTarget.value;
    if (type === "increase") {
        countValue++;
    } else {
        if (countValue === 0) return;
        countValue--;
    }
    thisTarget.value = countValue;
}

// $(function () {
//     // 220516 header 스크롤 다운시 디자인
//     $(window).on("scroll", function(){
//         if(window.scrollY > 30){
//             $("header").addClass("active");
//         } else {
//             $("header").removeClass("active");
//         }
//     });

//     // 220516 검색어 표출 공통 추가
//     $(document).on("keydown", ".inp_search_wrap input", function () {
//         $(this).siblings(".inp_search_box").addClass("active");
//     });
//     $("html").on("click", function (e) {
//         if(!$(e.target).hasClass("inp_search_box")){
//             $(".inp_search_box").removeClass("active");
//         }
//     });

//     // GNB
//     $(document).on("mouseover", ".gnb, .sub_nav", function(){
//         menuClear();
//         $(this).addClass("active");
//         if($(this).hasClass("gnb")) $(this).siblings(".sub_nav").addClass("active");
//         else $(this).siblings(".gnb").addClass("active");
//     }).on("mouseleave", ".gnb, .sub_nav", function() {
//         menuClear();
//         // GNB 상품 상세 페이지 - 메뉴 활성화 용
//         if (typeof(detail_active) === "undefined") {
//         } else if (detail_active || detail_active === 0) { //정의된 경우 강제 설정
//             $(".gnb").eq(detail_active).addClass("active");
//         }
//     });

//     function menuClear(){
//         $(".gnb").removeClass("active")
//         $(".sub_nav").removeClass("active");
//     }

//     // 220705 추가
//     $(document).on("mouseover", ".hover_thumb_menu li", function(){
//         $(this).closest(".sub_nav").find(".gnb_thumbnail").removeClass("active");
//         $(this).children(".gnb_thumbnail").addClass("active");
//     });

//     // close modal on click dimLayer
//     $(document).on("click", "#mainDimLayer", function () {
//         closeModal();
//     });

//     // 모달 닫기(공통)
//     $(document).on("click", ".close_modal", function () {
//         closeModal();
//     });

//     /* 공통 alert, confirm 관련 */
//     // 공통 alert, confirm 모달 닫기(X버튼, 취소버튼)
//     $(".modal_wrap").on("click", ".delete_modal", function () {
//         action_popup.close(this);

// 		$(".subDimLayer").remove();
// 		$("body").removeClass("fixed");
//     });

//     // datepicker
//     if ($("#datepickerToggle, #datepickerToggle2").length > 0) {
//         $("#datepickerToggle, #datepickerToggle2").datepicker({
//             language: 'ko',
//             autoClose: true
//         });
//     }

//     // if ($("#datepickerMultiple").length > 0) {
//     //     $("#datepickerMultiple").datepicker({
//     //         language: 'ko',
//     //         autoClose: true,
//     //         onSelect : function(formatDate, date, inst){
//     //             if(formatDate.indexOf(" ~ ") > -1){
//     //                 inst.hide();
//     //             }
//     //         }
//     //     });
//     // }
// });

// // addnDimLayer
// function addnDimLayer() {
//     var createDiv = "<div id='mainDimLayer'></div>";
//     $("body").append(createDiv).addClass("fixed");
// }

// // addnSubDimLayer
// function addnSubDimLayer() {
//     var createDiv = "<div class='subDimLayer'></div>";
//     $("body").append(createDiv).addClass("fixed");
// }

// // closeModal
// function closeModal() {
//     $(".modal_wrap").removeClass("active");
//     $("#mainDimLayer").remove();
//     $("body").removeClass("fixed");
// }

// /**
//  *  공통 alert, confirm 관련
//  *  alert, confirm 대용 팝업 메소드 정의 <br/>
//  *  timer : 애니메이션 동작 속도 <br/>
//  *  alert : 경고창 <br/>
//  *  confirm : 확인창 <br/>
//  *  open : 팝업 열기 <br/>
//  *  close : 팝업 닫기 <br/>
//  **/
// // alert and confirm common
// var action_popup = {
//     timer: 300,
//     // confirm 모달
//     confirm: function (txt, callback, title) {
//         // 텍스트 없을경우(유효성 검증)
//         if (txt == null || txt.trim() == "") {
//             console.warn("confirm message is empty.");
//             return;
//             // 콜백 정의 검증
//         } else if (callback == null || typeof callback != "function") {
//             console.warn("callback is null or not function.");
//             return;
//             // 정상인 경우
//         } else {
//             $(".confirm .btn_ok").on("click", function () {
//                 $(this).unbind("click"); // 기존 모달 위에 띄울 경우 중복 확인 동작 방지
//                 callback(true);
//                 action_popup.close(this);
//             });
//             this.open("confirm", txt, title);
//         }
//     },

//     // alert 모달
//     alert: function (txt, title) {
//         if (txt == null || txt.trim() == "") {
//             console.warn("confirm message is empty.");
//             return;
//         } else {
//             this.open("alert", txt, title);
//         }
//     },

//     // alert or confirm 구분해서 열기
//     open: function (type, txt, title) {
//         var popup = $("." + type);
//         popup.find(".modal_text").empty().append(txt);
//         if(title != null && title.trim() != ""){
//             popup.find(".modal_header strong").empty().append(title);
//         }

//         addnSubDimLayer();
//         $(".subDimLayer").css("height", $(document).height()).attr("target", type);
//         popup.fadeIn(this.timer);
//     },

//     // alert or confirm 구분해서 닫기
//     close: function (target) {
//         var modal = $(target).closest(".modal_wrap");
//         var dimLayer;
//         if (modal.hasClass("confirm")) {
//             dimLayer = $(".subDimLayer[target=confirm]");
//         } else if (modal.hasClass("alert")) {
//             dimLayer = $(".subDimLayer[target=alert]");
//         } else {
//             console.warn("close unknown target.");
//             return;
//         }
//         modal.fadeOut(this.timer);
//         $(".confirm .btn_ok").unbind("click");
//         setTimeout(function () {
//             dimLayer != null ? dimLayer.remove() : "";
//             closeModal();
//         }, this.timer);
//     },
// };
