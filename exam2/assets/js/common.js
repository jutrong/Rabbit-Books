var swiper_page;
var swiper_tab; // 210706 수정
$(function () {
    // 210714 추가
    $(window).resize(function(){
        changeWidth()
    }).resize();

    // close modal on click dimLayer
    $(document).on("click", "#mainDimLayer", function (e) {
        closeModal();
    });

    // 모달 닫기(공통)
    $(document).on("click", ".close_modal",function () {
        closeModal();
    });

    /* 공통 alert, confirm 관련 */
    // 공통 alert, confirm 모달 닫기(X버튼, 취소버튼)
    $(".modal_wrap").on("click", ".delete_modal", function () {
        action_popup.close(this);

		$(".modal_wrap.account").removeClass("active");
		$(".subDimLayer").remove();
		$("body").removeClass("fix");
    });

    // 인풋 공통 스타일 - 210623 수정
    $('.inp_box').on("mousedown", ".inp_remove_btn", function(){ //click 사용안됨 //blur가 더 빨리 동작함
        $(this).siblings("input").val("");
        $(this).siblings(".add_btn").removeClass("active");

    }).on("change keyup input", "input", function(e){ //입력이 시작되면 삭제버튼 활성화
        $(this).siblings(".inp_remove_btn").addClass("active");
        $(this).siblings(".add_btn").addClass("active");

    }).on("blur", "input", function(e){ //input focus를 잃으면 삭제버튼 비활성화
        $(this).siblings(".inp_remove_btn").removeClass("active");
        if($(this).val().length <= 0) {
            $(this).siblings(".add_btn").removeClass("active");
        }

    }).on("focus", "input", function(e){ //input focus를 얻으면 길이 체크하여 삭제버튼 활성화 유무체크
        if($(this).val().length > 0){
            $(this).siblings(".inp_remove_btn").addClass("active");
            $(this).siblings(".add_btn").addClass("active");
        }
    });
    $('.add_btn').on("click", function(){
        $(this).siblings("input").val("");
        $(this).removeClass("active");
    });

	// swiper 배너
	if($('#swiper_banner').length>0){        
		var len = $('#swiper_banner .swiper-slide').length;
		swiper_tab = new Swiper('#swiper_banner .swiper-container', { // 210706 수정
			loop:false,
			slidesPerView: 'auto',
            autoHeight: true, // 210708 추가
			spaceBetween: 16,
			pagination: {
				el: ".swiper-pagination",
			},
			paginationClickable:true				
		});	
	}

	// swiper 탭 메뉴
    var swiper_menu;
	if($('#swiper_menu').length>0){
		swiper_menu = new Swiper('#swiper_menu .swiper-container', {
			loop:false,
			initialSlide:0,
			slidesPerView: 'auto',
			spaceBetween: 0,
		});
		$('#swiper_menu .swiper-slide a').on('click',function(e){
			e.preventDefault();
			var idx = $(this).parents('.swiper-slide').index();
			swiper_page.slideToLoop(idx);
		});
	}

	// swiper 탭 컨텐츠 연결
	if($('#swiper_page').length>0){
		swiper_page = new Swiper('#swiper_page .swiper-container.page', {
            // 210708 변경
            calculateHeight: true, 
			autoHeight: true,
			// loop:true,
			preventClicks:false,
			preventClicksPropagation:false,			
			slidesPerView: 'auto',
			spaceBetween: 1, // 210818 변경
            touchRatio: 0.1,  //210610 추가
            
		});
		var $prevPage = $('#swiper_page .swiper-slide-active');
		swiper_page.on('slideChange', function () { // 210708 변경
			$prevPage = $('#swiper_page .swiper-slide-active');	
			
			// 메뉴활성화
			if(swiper_menu){
				var active = swiper_page.realIndex;
				$('#swiper_menu .swiper-slide').removeClass('on');
				$('#swiper_menu .swiper-slide').eq(active).addClass('on');
				swiper_menu.slideTo(active-2);
			}
			if($('.swiper_menu').length>=1){
				var active = swiper_page.realIndex;
				$('.swiper_menu li').removeClass('on');
				$('.swiper_menu li').eq(active).addClass('on');
			}
		});
	}

    // datepicker - 210624추가
    var dateToggleList = ["#datepickerToggle", "#datepickerToggle2", "#datepickerToggle3"];
    dateToggleList.forEach(function(dateToggle){
        if($(dateToggle).length>0){
            $(dateToggle).datepicker({
                language: 'ko',
                autoClose: true,
                onSelect: function onSelect(fd, date) {
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    month = month < 10 ? "0" + month : month;
                    var day = date.getDate();
                    day = day < 10 ? "0" + day : day;
                    $(dateToggle).val(year + "년 " + month + "월 " + day + "일");
                }
            });
        }
    });

});

// 210714 추가
function changeWidth(){
    _w = $(window).width();
    if(_w<800){
        $("meta[name='viewport']").attr("content","width=400") // 디자인과 비슷해 보이게 조정
    }else{
        $("meta[name='viewport']").attr("content","width=device-width")
    }
}

// addnDimLayer
function addnDimLayer() {
    var createDiv = "<div id='mainDimLayer'></div>";
    $("body").append(createDiv).addClass("fix");
}

// addnDimLayer
function addnSubDimLayer() {
    var createDiv = "<div class='subDimLayer'></div>";
    $("body").append(createDiv).addClass("fix");
}

// closeModal
function closeModal() {
    // 210730 pre_idcard_modal 클래스 추가
	$(".main_modal, .idcard_modal, .modal_popup, .pre_idcard_modal").removeClass("active");
	$(".modal_wrap").removeClass("active");
    $(".fixed_modal_wrap").removeClass("active");
    $("#mainDimLayer").remove();
    $("body").removeClass("fix");
}

/**
 *  공통 alert, confirm 관련
 *  alert, confirm 대용 팝업 메소드 정의 <br/>
 *  timer : 애니메이션 동작 속도 <br/>
 *  alert : 경고창 <br/>
 *  confirm : 확인창 <br/>
 *  open : 팝업 열기 <br/>
 *  close : 팝업 닫기 <br/>
 **/
// alert and confirm common
var action_popup = {
    timer: 300,
    // confirm 모달
    confirm: function (txt, callback) {
        // 텍스트 없을경우(유효성 검증)
        if (txt == null || txt.trim() == "") {
            console.warn("confirm message is empty.");
            return;
            // 콜백 정의 검증
        } else if (callback == null || typeof callback != "function") {
            console.warn("callback is null or not function.");
            return;
            // 정상인 경우
        } else {
            $(".confirm .btn_ok").on("click", function () {
                $(this).unbind("click"); // 기존 모달 위에 띄울 경우 중복 확인 동작 방지
                callback(true);
                action_popup.close(this);
            });
            this.open("confirm", txt);
        }
    },

    // alert 모달
    alert: function (txt) {
        if (txt == null || txt.trim() == "") {
            console.warn("confirm message is empty.");
            return;
        } else {
            this.open("alert", txt);
        }
    },

    // alert or confirm 구분해서 열기
    open: function (type, txt) {
        var popup = $("." + type);
        popup.find(".modal_text").empty().append(txt);
        $("body").append("<div class='subDimLayer'></div>");
        $(".subDimLayer").css("height", $(document).height()).attr("target", type);
        popup.fadeIn(this.timer);
    },

    // alert or confirm 구분해서 닫기
    close: function (target) {
        var modal = $(target).closest(".modal_wrap");
        var dimLayer;
        if (modal.hasClass("confirm")) {
            dimLayer = $(".subDimLayer[target=confirm]");
        } else if (modal.hasClass("alert")) {
            dimLayer = $(".subDimLayer[target=alert]");
        } else {
            console.warn("close unknown target.");
            return;
        }
        modal.fadeOut(this.timer);
        $(".confirm .btn_ok").unbind("click");
        setTimeout(function () {
            dimLayer != null ? dimLayer.remove() : "";
        }, this.timer);
    }
};

// 210714 추가
$(window).on("orientationchange", function(event){
    var orientation = "";
    var _w = $(window).width();
    if(window.orientation == 0){
        orientation = "portrait";
        setTimeout(function(){
            changeWidth();
        },100)
    }else{
        orientation = "landscape";
        $("meta[name='viewport']").attr("content","width=device-width")
    }
});
changeWidth();