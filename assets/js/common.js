// 페이지가 로드되면 동작한다.
window.addEventListener("DOMContentLoaded", () => {
    // GNB
    const gnb = document.querySelector(".hover_thumb_menu");
    const subMenus = document.querySelectorAll(".sub_menu");
    const gnbCategory = document.querySelector(".gnb.category");

    gnb.addEventListener("mouseover", function (e) {
        const sub_menu = e.target.nextElementSibling;
        if (sub_menu) {
            // sub_menu reset
            for (let i = 0; i < subMenus.length; i++) {
                subMenus[i].classList.remove("active");
            }

            // mouseover sub_menu active
            if (subMenus.classList.value.includes("sub_menu")) {
                subMenus.classList.add("active");
            }
        }
        // gnbcategory add active
        gnbCategory.classList.add("active");
    });
    gnb.addEventListener("mouseleave", function () {
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
});

/**
 * 증가 감소 callback method
 * @param {string} type "increase" | "decrease"
 * @param {string} target "input의 id값을 입력"
 */
const increaseAndDecrease = (type, target) => {
    const thisTarget = document.querySelector(target);
    let countValue = Number(thisTarget.value);
    if (type === "increase") {
        countValue++;
    } else {
        if (countValue === 0) return;
        countValue--;
    }
    thisTarget.value = countValue;
};
