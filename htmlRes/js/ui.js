$(function() {

	//init() START

	//빅배너 탭 갯수별제어
	if ($(".main .bn_big .tab a").size() == 4) {
		$(".main .bn_big .tab.has02 a:eq(0), .bn_big .tab.has02 a:eq(1)").addClass("top");
	} else if ($(".main .bn_big .tab a").size() == 5) {
		$(".main .bn_big .tab.has05 a:eq(0), .bn_big .tab.has05 a:eq(1), .bn_big .tab.has05 a:eq(2)").addClass("top");
	} else if ($(".main .bn_big .tab a").size() == 6) {
		for (var i=0; i<4; i++) {
			$(".main .bn_big .tab.has03 a").eq(i).addClass("top");
		}
	}

	//mask 높이를 윈도우와 맞춤
	$(".mask").height($(window).height());

	//intro
	if ($(".intro").size() > 0) {
		$(".intro").height($(window).height());
		$(".intro").next().show();
		$(".login_box").css("left", $(window).width()/2 - $(".login_box").width()/2 );

		//배경바꾸기
		/*var ranNum = Math.floor(Math.random()*10) + 1;
		if (ranNum%2 > 0)
			$(".intro").addClass("mid");*/
	}

	//소배너서브에서 상단고정
	if ($(".bn_sub").size() > 0) {
		$(".header").addClass("fixed");
		$(".ctn").addClass("fixed");
	}

	//init() END



	//강좌찾기
	$(".header .mid .inner .right .btn2 a.lec").click(function(e) {	//open layer
		e.preventDefault();
		$(".mask").show();
		$(".layer_lecture").css("left", $(window).width()/2 - 452);
		$(".layer_lecture").show();
		$(".layer_lecture").find("a").eq(0).focus();
	});
	$(".layer_lecture .btn_cl").click(function(e) {		//close layer
		e.preventDefault();
		$(".mask").hide();
		$(".layer_lecture").hide();
		$(".header .mid .inner .right .btn > a.lec").focus();
	});
	$(".layer_book .btn_cl").click(function(e) {		//close layer
		e.preventDefault();
		$(".mask").hide();
		$(".layer_book").hide();
		$(".header .mid .inner .right .btn > a.lec").focus();
	});
	/*$(".layer_lecture > .tab li a").click(function(e) {	//tab click
		e.preventDefault();
		var idx = $(".layer_lecture > .tab li a").index(this);
		var objTab = $(".layer_lecture .tab li a img");
		$(".layer_lecture .item").hide();
		$(".layer_lecture .item").eq(idx).show();
		$(".layer_lecture > .tab li a").removeClass("on");
		$(".layer_lecture > .tab li a").eq(idx).addClass("on");
	});*/



	//주메뉴
	//mouseover event
	$(".header .mn_main > ul").mouseenter(function() {		//open
		fnOpenMenu();
	});
	$(".mn_main").mouseleave(function() {		//close
		fnCloseMenu();
		$(".header .mn_main > ul > li").removeClass("hover");
	});

	//focus event
	$(".header .mn_main > ul > li > a:eq(0)").focusin(function() {		//open
		fnOpenMenu();
	});
	$(".header .mn_main > ul > li:last-child > a").focusin(function() {		//open
		fnOpenMenu();
	});
	$(".mn_main").prev().find("a").last().focusin(function() {		//close
		fnCloseMenu();
	});
	$(".mn_main").prev().find("input").last().focusin(function() {		//close
		fnCloseMenu();
	});
	$(".ctn").find("a").eq(0).focusin(function() {		//close
		fnCloseMenu();
	});
	$(".ctn").find("input").eq(0).focusin(function() {		//close
		fnCloseMenu();
	});
	$(".header .mn_main > ul > li > a").focusin(function() {
		$(".header .mn_main > ul li").removeClass("hover");
		$(this).parent().addClass("hover");
	});
	$(".header .mn_main > ul li ul li a").focusin(function() {
		$(".header .mn_main > ul li").removeClass("hover");
		$(this).parent().parent().parent().addClass("hover");
	});
	$(".header .mn_main > ul > li ul li a").focusin(function() {
		$(".header .mn_main > ul > li ul li a").removeClass("act");
		$(this).addClass("act");
	});

	//hover event
	$(".header .mn_main > ul > li").hover(function() {
		$(".header .mn_main > ul > li").removeClass("hover");
		$(".header .mn_main > ul > li ul li a").removeClass("act");
		$(this).addClass("hover");
	});
	$(".header .mn_main > ul > li ul li a").hover(function() {
		$(".header .mn_main > ul > li ul li a").removeClass("act");
		$(this).addClass("act");
	});

	//open함수
	function fnOpenMenu() {
		$(".header .mn_main > ul > li ul").fadeIn(100);
		$(".header .mn_main .btm").slideDown(100);
	}
	//close함수
	function fnCloseMenu() {
		$(".header .mn_main > ul > li ul").hide();
		$(".header .mn_main .btm").hide();
	}



	//로그인 place holder
	$(".login input[type=text]").on("click focusin", function() {
		if ($(this).val() == "") $(this).removeClass("noid");
	});
	$(".login input[type=text]").on("blur focusout", function() {
		if ($(this).val() == "") $(this).addClass("noid");
	});
	$(".login input[type=password]").on("click focusin", function() {
		if ($(this).val() == "") $(this).removeClass("nopwd");
	});
	$(".login input[type=password]").on("blur focusout", function() {
		if ($(this).val() == "") $(this).addClass("nopwd");
	});



	//빅배너
	var auto;
	var bl;
	var cnt = 0;
	var speed = 306;
	var obj = $(".main .bn_big .item ul li");
	var objBtn = $(".main .cmd a");
	var objTab =$(".main .bn_big .tab a");
	var li_width = obj.width();

	obj.eq(0).show();			//첫 아이템 보여주고 좌표설정
	obj.eq(0).css("left", 0);
	
	if (obj.size() > 1) {
		fnAutoSlide();		//최소 2개이상 존재할때 자동롤링
	}

	//자동롤링함수
	function fnAutoSlide() {
		if (!bl) {
			auto = setInterval(function() {
				if (cnt == 0) {
					if (obj.last().css("display") == "block") {
						obj.last().hide();
					}

					fnMoveL(obj, cnt, li_width, speed);				//현재

					obj.eq(cnt+1).show().css("left", li_width);		//다음
					fnMoveC(obj, cnt+1, speed);
					cnt++;
					fnTabActive(objTab, cnt);							//탭활성화

				} else {
					if (cnt < obj.index(obj.last())) {
						obj.eq(cnt-1).hide();							//이전

						obj.eq(cnt).css("left", 0);
						fnMoveL(obj, cnt, li_width, speed);			//현재

						obj.eq(cnt+1).show().css("left", li_width);
						fnMoveC(obj, cnt+1, speed);					//다음
						cnt++;
						fnTabActive(objTab, cnt);						//탭활성화

					//마지막일때
					} else {
						obj.eq(0).show().css("left", li_width);			//처음
						fnMoveC(obj, 0, speed);

						obj.eq(cnt).css("left", 0);						//현재
						fnMoveL(obj, cnt, li_width, speed);
						cnt = 0;
						fnTabActive(objTab, cnt);						//탭활성화
					}
				}
			}, 4000);		//롤링타임
			bl = true;
		}
	}

	//tab이동
	objTab.click(function(e) {
		e.preventDefault();
		clearInterval(auto);					//자동롤링 해제
		bl = false;								//자동롤링 해제시 여부 [true: 자동롤링, false: 자동롤링해제
		fnChangeAutoBtn(objBtn, 1, 0);		//재생, 정지버튼 제어
		var idx = objTab.index(this);			//클릭한 탭의 인덱스
		fnTabActive(objTab, idx);			//탭활성화

		if (idx != cnt) {
			//클릭한 인덱스 < 현재활성화인덱스
			if (idx < cnt) {
				//오른쪽으로
				fnMoveR(obj, cnt, li_width, speed);			//현재아이템 오른쪽이동
				obj.eq(idx).show().css("left", -li_width);		//이전아이템 보여준 후 좌표설정
				fnMoveC(obj, idx, speed);						//클릭한아이템 오른쪽이동

			//클릭한 인덱스 > 현재활성화인덱스
			} else {
				//왼쪽으로
				fnMoveL(obj, cnt, li_width, speed);			//현재아이템 왼쪽이동
				obj.eq(idx).show().css("left", li_width);			//클릭한아이템 보여준 후 좌표설정
				fnMoveC(obj, idx, speed);						//클릭한아이템 왼쪽이동
			}
			cnt = idx;								//클릭한 탭인덱스를 공통카운트와 동기화
		}
	});

	objBtn.click(function(e) {
		e.preventDefault();

		var idx = objBtn.index(this);
		//재생
		if (idx == 0) {
			fnAutoSlide();
			fnChangeAutoBtn(objBtn, 0, 1);			//재생, 정지버튼 제어

		//정지
		} else if (idx == 1) {
			clearInterval(auto);
			bl = false;
			fnChangeAutoBtn(objBtn, 1, 0);			//재생, 정지버튼 제어
		}
	});



	//선생님 인기강좌
	var auto2;
	var bl2;
	var cnt2 = 0;
	var speed2 = 400;
	var obj2 = $(".main .popular .info ul li");
	var objBtn2 = $(".main .popular .btn a");
	var objTab2 =$(".main .popular .tab li a");
	var li_width2 = obj2.width();

	obj2.eq(0).show();			//첫 아이템 보여주고 좌표설정
	obj2.eq(0).css("left", 0);

	if (obj2.size() > 1) {
		fnAutoSlide2();		//최소 2개이상 존재할때 자동롤링
	}

	//자동롤링함수
	function fnAutoSlide2() {
		if (!bl2) {
			auto2 = setInterval(function() {
				if (cnt2 == 0) {
					if (obj2.last().css("display") == "block") {
						obj2.last().hide();
					}

					fnMoveL(obj2, cnt2, li_width2, speed2);			//현재

					obj2.eq(cnt2+1).show().css("left", li_width2);		//다음
					fnMoveC(obj2, cnt2+1, speed2);
					cnt2++;
					fnTabActive(objTab2, cnt2);							//탭활성화

				} else {
					if (cnt2 < obj2.index(obj2.last())) {
						obj2.eq(cnt2-1).hide();								//이전

						obj2.eq(cnt2).css("left", 0);
						fnMoveL(obj2, cnt2, li_width2, speed2);		//현재

						obj2.eq(cnt2+1).show().css("left", li_width2);
						fnMoveC(obj2, cnt2+1, speed2);					//다음
						cnt2++;
						fnTabActive(objTab2, cnt2);						//탭활성화

					//마지막일때
					} else {
						obj2.eq(0).show().css("left", li_width2);			//처음
						fnMoveC(obj2, 0, speed2);

						obj2.eq(cnt2).css("left", 0);						//현재
						fnMoveL(obj2, cnt2, li_width2, speed2);
						cnt2 = 0;
						fnTabActive(objTab2, cnt2);						//탭활성화
					}
				}
			}, 4000);		//롤링타임
			bl2 = true;
		}
	}

	//tab이동
	objTab2.click(function(e) {
		e.preventDefault();
		//clearInterval(auto2);					//자동롤링 해제
		bl2 = false;								//자동롤링 해제시 여부 [true: 자동롤링, false: 자동롤링해제
		fnChangeAutoBtn(objBtn2, 1, 0);		//재생, 정지버튼 제어
		var idx = objTab2.index(this);			//클릭한 탭의 인덱스
		fnTabActive(objTab2, idx);			//탭활성화

		if (idx != cnt2) {
			//클릭한 인덱스 < 현재활성화인덱스
			if (idx < cnt2) {
				//오른쪽으로
				fnMoveR(obj2, cnt2, li_width2, speed2);			//현재아이템 오른쪽이동
				obj2.eq(idx).show().css("left", -li_width2);		//이전아이템 보여준 후 좌표설정
				fnMoveC(obj2, idx, speed2);						//클릭한아이템 오른쪽이동

			//클릭한 인덱스 > 현재활성화인덱스
			} else {
				//왼쪽으로
				fnMoveL(obj2, cnt2, li_width2, speed2);			//현재아이템 왼쪽이동
				obj2.eq(idx).show().css("left", li_width2);			//클릭한아이템 보여준 후 좌표설정
				fnMoveC(obj2, idx, speed2);						//클릭한아이템 왼쪽이동
			}
			cnt2 = idx;								//클릭한 탭인덱스를 공통카운트와 동기화
		}
	});

	//화살표이동
	objBtn2.click(function(e) {
		e.preventDefault();

		var idx = objBtn2.index(this);
		//재생
		if (idx == 0) {
			fnAutoSlide2();
			fnChangeAutoBtn(objBtn2, 0, 1);			//재생, 정지버튼 제어

		//정지
		} else if (idx == 1) {
			clearInterval(auto2);
			bl2 = false;
			fnChangeAutoBtn(objBtn2, 1, 0);			//재생, 정지버튼 제어

		//왼쪽
		} else if (idx == 2) {
			clearInterval(auto2);
			bl2 = false;

			if (cnt2 > 0) 	{
				obj2.eq(cnt2).show().css("left", 0);
				obj2.eq(cnt2).stop().animate({
					left: li_width2
					}, speed2, function() {}
				);
				obj2.eq(cnt2-1).show().css("left", -li_width2);
				obj2.eq(cnt2-1).stop().animate({
					left: 0
					}, speed2, function() {}
				);
				cnt2--;
				fnTabActive(objTab2, cnt2);

			} else {
				obj2.last().show().css("left", -li_width2);	//마지막을 세팅 후 오른쪽이동
				obj2.last().eq(cnt2).stop().animate({
					left: 0
					}, speed2, function() {}
				);
				obj2.eq(cnt2).stop().animate({			//0번째는 오른쪽으로
					left: li_width2
					}, speed2, function() {}
				);
				cnt2 = obj2.index(obj2.last());
				fnTabActive(objTab2, cnt2);
			}
			fnChangeAutoBtn(objBtn2, 1, 0);				//재생, 정지버튼 제어

		} else {	// 오른쪽
			clearInterval(auto2);
			bl2 = false;

			if (cnt2 < obj2.index(obj2.last())) 	{
				obj2.eq(cnt2).show().css("left", 0);				//현재
				fnMoveL(obj2, cnt2, li_width2, speed2);
				obj2.eq(cnt2+1).show().css("left", li_width2);	//클릭한것
				fnMoveC(obj2, cnt2+1, speed2);
				cnt2++;
				fnTabActive(objTab2, cnt2);						//탭활성화

			} else {
				obj2.eq(0).show().css("left", li_width2);		//처음 세팅 후 왼쪽이동
				fnMoveC(obj2, 0, speed2);
				fnMoveL(obj2, cnt2, li_width2, speed2);		//마지막 왼쪽이동
				cnt2 = 0;
				fnTabActive(objTab2, cnt2);					//탭활성화
			}
			fnChangeAutoBtn(objBtn2, 1, 0);					//재생, 정지버튼 제어
		}
	});


	
	
	

	//상위 10% 유명 출판사별 강의
	var auto3;
	var bl3;
	var cnt3 = 0;
	var speed3 = 400;
	var obj3 = $(".main .top_lecture .list ul li");
	var objBtn3 = $(".main .top_lecture .btn a");
	var li_width3 = obj3.width();

	obj3.eq(0).show();			//첫 아이템 보여주고 좌표설정
	obj3.eq(0).css("left", 0);

	if (obj3.size() > 1) {
		fnAutoSlide3();		//최소 2개이상 존재할때 자동롤링
	}
	

	//자동롤링함수
	function fnAutoSlide3() {
		if (!bl3) {
			auto3 = setInterval(function() {
				if (cnt3 == 0) {
					if (obj3.last().css("display") == "block") {
						obj3.last().hide();
					}

					fnMoveL(obj3, cnt3, li_width3, speed3);			//현재

					obj3.eq(cnt3+1).show().css("left", li_width3);		//다음
					fnMoveC(obj3, cnt3+1, speed3);
					cnt3++;

				} else {
					if (cnt3 < obj3.index(obj3.last())) {
						obj3.eq(cnt3-1).hide();								//이전

						obj3.eq(cnt3).css("left", 0);
						fnMoveL(obj3, cnt3, li_width3, speed3);		//현재

						obj3.eq(cnt3+1).show().css("left", li_width3);
						fnMoveC(obj3, cnt3+1, speed3);					//다음
						cnt3++;

					//마지막일때
					} else {
						obj3.eq(0).show().css("left", li_width3);			//처음
						fnMoveC(obj3, 0, speed3);

						obj3.eq(cnt3).css("left", 0);						//현재
						fnMoveL(obj3, cnt3, li_width3, speed3);
						cnt3 = 0;
					}
				}
			}, 4000);		//롤링타임
			bl3 = true;
		}
	}

	
	
	//화살표이동
	objBtn3.click(function(e) {
		e.preventDefault();

		var idx = objBtn3.index(this);
		//재생
		if (idx == 0) {
			fnAutoSlide3();
			fnChangeAutoBtn(objBtn3, 0, 1);			//재생, 정지버튼 제어

		//정지
		} else if (idx == 1) {
			clearInterval(auto3);
			bl3 = false;
			fnChangeAutoBtn(objBtn3, 1, 0);			//재생, 정지버튼 제어

		//왼쪽
		} else if (idx == 2) {
			clearInterval(auto3);
			bl3 = false;

			if (cnt3 > 0) 	{
				obj3.eq(cnt3).show().css("left", 0);
				obj3.eq(cnt3).stop().animate({
					left: li_width3
					}, speed3, function() {}
				);
				obj3.eq(cnt3-1).show().css("left", -li_width3);
				obj3.eq(cnt3-1).stop().animate({
					left: 0
					}, speed3, function() {}
				);
				cnt3--;

			} else {
				obj3.last().show().css("left", -li_width3);	//마지막을 세팅 후 오른쪽이동
				obj3.last().eq(cnt3).stop().animate({
					left: 0
					}, speed3, function() {}
				);
				obj3.eq(cnt3).stop().animate({			//0번째는 오른쪽으로
					left: li_width3
					}, speed3, function() {}
				);
				cnt3 = obj3.index(obj3.last());
			}

		} else {	// 오른쪽
			clearInterval(auto3);
			bl3 = false;

			if (cnt3 < obj3.index(obj3.last())) 	{
				obj3.eq(cnt3).show().css("left", 0);				//현재
				fnMoveL(obj3, cnt3, li_width3, speed3);
				obj3.eq(cnt3+1).show().css("left", li_width3);	//클릭한것
				fnMoveC(obj3, cnt3+1, speed3);
				cnt3++;

			} else {
				obj3.eq(0).show().css("left", li_width3);		//처음 세팅 후 왼쪽이동
				fnMoveC(obj3, 0, speed3);
				fnMoveL(obj3, cnt3, li_width3, speed3);		//마지막 왼쪽이동
				cnt3 = 0;
			}
			fnChangeAutoBtn(objBtn3, 1, 0);					//재생, 정지버튼 제어
		}
	});



	//끝 가로배너
	var obj4 = $(".main .sec02 .bn_mid ul");
	var cnt4 = 0;
	obj4.css("width", obj4.children("li").size() * obj4.children("li").width());		//배너 박스영역 가로길이 설정
	$(".main .sec02 .bn_mid .btn_prev").click(function(e) {
		e.preventDefault();
		if (cnt4 > 0) 	{
			$(".main").removeClass("mbn"+cnt4);
			$(".main").addClass("mbn"+(cnt4-1));
			obj4.animate({
				left: -(cnt4-1) * obj4.children("li").width()
				}, 400, function() {
			});
			cnt4--;
		}
	});
	$(".main .sec02 .bn_mid .btn_next").click(function(e) {
		e.preventDefault();
		if (cnt4 < $(".main .bn_mid ul li").index($(".main .bn_mid ul li").last())) {
			$(".main").removeClass("mbn"+cnt4);
			$(".main").addClass("mbn"+(cnt4+1));
			obj4.animate({
				left: -(cnt4+1) * obj4.children("li").width()
				}, 400, function() {
			});
			cnt4++;
		}
	});



	//100% 리얼 수강 후기
	var auto5;
	var bl5;
	var cnt5 = 0;
	var speed5 = 306;
	var obj5 = $(".main .after .list ul li");
	var objBtn5 = $(".main .after .btn a");
	var objTab5 =$(".main .after .tab li a");
	var li_width5 = obj5.width();

	obj5.eq(0).show();			//첫 아이템 보여주고 좌표설정
	obj5.eq(0).css("left", 0);

	if (obj5.size() > 1) {
		fnAutoSlide5();		//최소 2개이상 존재할때 자동롤링
	}

	//자동롤링함수
	function fnAutoSlide5() {
		if (!bl5) {
			auto5 = setInterval(function() {
				if (cnt5 == 0) {
					if (obj5.last().css("display") == "block") {
						obj5.last().hide();
					}

					fnMoveL(obj5, cnt5, li_width5, speed5);			//현재

					obj5.eq(cnt5+1).show().css("left", li_width5);		//다음
					fnMoveC(obj5, cnt5+1, speed5);
					cnt5++;
					fnTabActive(objTab5, cnt5);							//탭활성화

				} else {
					if (cnt5 < obj5.index(obj5.last())) {
						obj5.eq(cnt5-1).hide();								//이전

						obj5.eq(cnt5).css("left", 0);
						fnMoveL(obj5, cnt5, li_width5, speed5);		//현재

						obj5.eq(cnt5+1).show().css("left", li_width5);
						fnMoveC(obj5, cnt5+1, speed5);					//다음
						cnt5++;
						fnTabActive(objTab5, cnt5);						//탭활성화

					//마지막일때
					} else {
						obj5.eq(0).show().css("left", li_width5);			//처음
						fnMoveC(obj5, 0, speed5);

						obj5.eq(cnt5).css("left", 0);						//현재
						fnMoveL(obj5, cnt5, li_width5, speed5);
						cnt5 = 0;
						fnTabActive(objTab5, cnt5);						//탭활성화
					}
				}
			}, 4000);		//롤링타임
			bl5 = true;
		}
	}

	//배너 띠배너 자동롤링함수
	var auto7;
	var bl7;
	var cnt7 = 0;
	var obj7 = $(".main .sec02 .bn_mid ul li");

	obj7.eq(0).show();			//첫 아이템 보여주고 좌표설정
	obj7.eq(0).css("left", 0);

	if (obj7.size() > 1) {
		fnAutoSlide7();		//최소 2개이상 존재할때 자동롤링
	}

	//자동롤링함수
	function fnAutoSlide7() {
		var cnt4 = 0;
		if (!bl7) {
			auto7 = setInterval(function() {
				if (cnt7 == 0) {
					$(".main").removeClass("mbn"+cnt4);
					$(".main").addClass("mbn"+(cnt4+1));
					obj4.animate({
						left: -1000
						}, 400, function() {
					});
					cnt4++;
					cnt7++;
				} else {
					if (cnt7 < obj7.index(obj7.last())) {
					//마지막이 아닐때
						$(".main").removeClass("mbn"+cnt4);
						$(".main").addClass("mbn"+(cnt4+1));
						obj4.animate({
							left:   -(cnt4+1) * 1000
							}, 400, function() {
						});
						
						cnt4++;	
						cnt7++;	
					//마지막일때
					} else {
						$(".main").removeClass("mbn"+cnt4);
						$(".main").addClass("mbn"+0);
						obj4.animate({
							left:  0
							}, 400, function() {
						});
						cnt4 = 0;
						cnt7 = 0;
					}
				}
			}, 4000);		//롤링타임
			bl7 = true;
		}
	}
	
	//하단 가로배너
	var obj8 = $(".main .sec04 .bn_mid ul");
	var cnt8 = 0;
	obj8.css("width", obj8.children("li").size() * obj8.children("li").width());		//배너 박스영역 가로길이 설정
	$(".main .sec04 .bn_mid .btn_prev").click(function(e) {
		e.preventDefault();
		if (cnt8 > 0) 	{
			obj8.animate({
				left: -(cnt8-1) * obj8.children("li").width()
				}, 400, function() {
			});
			cnt8--;
		}
	});
	$(".main .sec04 .bn_mid .btn_next").click(function(e) {
		e.preventDefault();
		if (cnt8 < $(".main .sec04 .bn_mid ul li").index($(".main .sec04 .bn_mid ul li").last())) {
			obj8.animate({
				left: -(cnt8+1) * obj8.children("li").width()
				}, 400, function() {
			});
			cnt8++;
		}
	});
	
	//tab이동
	objTab5.click(function(e) {
		e.preventDefault();
		clearInterval(auto5);					//자동롤링 해제
		bl5 = false;								//자동롤링 해제시 여부 [true: 자동롤링, false: 자동롤링해제
		fnChangeAutoBtn(objBtn5, 1, 0);		//재생, 정지버튼 제어
		var idx = objTab5.index(this);			//클릭한 탭의 인덱스
		fnTabActive(objTab5, idx);			//탭활성화

		if (idx != cnt5) {
			//클릭한 인덱스 < 현재활성화인덱스
			if (idx < cnt5) {
				//오른쪽으로
				fnMoveR(obj5, cnt5, li_width5, speed5);			//현재아이템 오른쪽이동
				obj5.eq(idx).show().css("left", -li_width5);		//이전아이템 보여준 후 좌표설정
				fnMoveC(obj5, idx, speed5);						//클릭한아이템 오른쪽이동

			//클릭한 인덱스 > 현재활성화인덱스
			} else {
				//왼쪽으로
				fnMoveL(obj5, cnt5, li_width5, speed5);			//현재아이템 왼쪽이동
				obj5.eq(idx).show().css("left", li_width5);			//클릭한아이템 보여준 후 좌표설정
				fnMoveC(obj5, idx, speed5);						//클릭한아이템 왼쪽이동
			}
			cnt5 = idx;								//클릭한 탭인덱스를 공통카운트와 동기화
		}
	});

	//화살표이동
	objBtn5.click(function(e) {
		e.preventDefault();

		var idx = objBtn5.index(this);
		//재생
		if (idx == 0) {
			fnAutoSlide5();
			fnChangeAutoBtn(objBtn5, 0, 1);			//재생, 정지버튼 제어

		//정지
		} else if (idx == 1) {
			clearInterval(auto5);
			bl5 = false;
			fnChangeAutoBtn(objBtn5, 1, 0);			//재생, 정지버튼 제어

		//왼쪽
		} else if (idx == 2) {
			clearInterval(auto5);
			bl5 = false;

			if (cnt5 > 0) 	{
				obj5.eq(cnt5).show().css("left", 0);
				obj5.eq(cnt5).stop().animate({
					left: li_width5
					}, speed5, function() {}
				);
				obj5.eq(cnt5-1).show().css("left", -li_width5);
				obj5.eq(cnt5-1).stop().animate({
					left: 0
					}, speed5, function() {}
				);
				cnt5--;
				fnTabActive(objTab5, cnt5);

			} else {
				obj5.last().show().css("left", -li_width5);	//마지막을 세팅 후 오른쪽이동
				obj5.last().eq(cnt5).stop().animate({
					left: 0
					}, speed5, function() {}
				);
				obj5.eq(cnt5).stop().animate({			//0번째는 오른쪽으로
					left: li_width5
					}, speed5, function() {}
				);
				cnt5 = obj5.index(obj5.last());
				fnTabActive(objTab5, cnt5);
			}
			fnChangeAutoBtn(objBtn5, 1, 0);				//재생, 정지버튼 제어

		} else {	// 오른쪽
			clearInterval(auto5);
			bl5 = false;

			if (cnt5 < obj5.index(obj5.last())) 	{
				obj5.eq(cnt5).show().css("left", 0);				//현재
				fnMoveL(obj5, cnt5, li_width5, speed5);
				obj5.eq(cnt5+1).show().css("left", li_width5);	//클릭한것
				fnMoveC(obj5, cnt5+1, speed5);
				cnt5++;
				fnTabActive(objTab5, cnt5);						//탭활성화

			} else {
				obj5.eq(0).show().css("left", li_width5);		//처음 세팅 후 왼쪽이동
				fnMoveC(obj5, 0, speed5);
				fnMoveL(obj5, cnt5, li_width5, speed5);		//마지막 왼쪽이동
				cnt5 = 0;
				fnTabActive(objTab5, cnt5);					//탭활성화
			}
			fnChangeAutoBtn(objBtn5, 1, 0);					//재생, 정지버튼 제어
		}
	});



	//이벤트
	//좌측랜덤
	if ($(".main .event .list li").size() >= 2) {
		var eNum = Math.floor(Math.random()*5) + 1;		//1~5까지 난수
		$(".main .event .list li").hide();
		$(".main .event .list li").eq(eNum-1).show();
	}else{
		$(".main .event .list li").show();
	}

	//우측 제어
	var auto6;
	var bl6;
	var cnt6 = 0;
	var speed6 = 400;
	var obj6 = $(".main .event .list02 ul li");	
	var objBtn6 = $(".main .event .btn a");
	var li_width6 = obj6.width();

	obj6.eq(0).show();			//첫 아이템 보여주고 좌표설정
	obj6.eq(0).css("left", 0);

	if (obj6.size() >= 2) {
		fnAutoSlide6();		//최소 2개이상 존재할때 자동롤링
	}

	//자동롤링함수
	function fnAutoSlide6() {		
		if (obj6.size() >= 2) {
			if (!bl6) {
				auto6 = setInterval(function() {
					if (cnt6 == 0) {
						if (obj6.last().css("display") == "block") {
							obj6.last().hide();
						}

						fnMoveL(obj6, cnt6, li_width6, speed6);			//현재

						obj6.eq(cnt6+1).show().css("left", li_width6);		//다음
						fnMoveC(obj6, cnt6+1, speed6);
						cnt6++;

					} else {
						if (cnt6 < obj6.index(obj6.last())) {
							obj6.eq(cnt6-1).hide();								//이전

							obj6.eq(cnt6).css("left", 0);
							fnMoveL(obj6, cnt6, li_width6, speed6);		//현재

							obj6.eq(cnt6+1).show().css("left", li_width6);
							fnMoveC(obj6, cnt6+1, speed6);					//다음
							cnt6++;

						//마지막일때
						} else {
							obj6.eq(0).show().css("left", li_width6);			//처음
							fnMoveC(obj6, 0, speed6);

							obj6.eq(cnt6).css("left", 0);						//현재
							fnMoveL(obj6, cnt6, li_width6, speed6);
							cnt6 = 0;
						}
					}
				}, 4000);		//롤링타임
				bl6 = true;
			}
		}		
	}

	//화살표이동
	objBtn6.click(function(e) {
		e.preventDefault();

		var idx = objBtn6.index(this);
		//재생
		if (idx == 0) {
			fnAutoSlide6();
			fnChangeAutoBtn(objBtn6, 0, 1);			//재생, 정지버튼 제어

		//정지
		} else if (idx == 1) {
			clearInterval(auto6);
			bl6 = false;
			fnChangeAutoBtn(objBtn6, 1, 0);			//재생, 정지버튼 제어

		//왼쪽
		} else if (idx == 2) {		
			if( obj6.size() >= 2){
				clearInterval(auto6);
				bl6 = false;

				if (cnt6 > 0) 	{
					obj6.eq(cnt6).show().css("left", 0);
					obj6.eq(cnt6).stop().animate({
						left: li_width6
						}, speed6, function() {}
					);
					obj6.eq(cnt6-1).show().css("left", -li_width6);
					obj6.eq(cnt6-1).stop().animate({
						left: 0
						}, speed6, function() {}
					);
					cnt6--;

				} else {
					obj6.last().show().css("left", -li_width6);	//마지막을 세팅 후 오른쪽이동
					obj6.last().eq(cnt6).stop().animate({
						left: 0
						}, speed6, function() {}
					);
					obj6.eq(cnt6).stop().animate({			//0번째는 오른쪽으로
						left: li_width6
						}, speed6, function() {}
					);
					cnt6 = obj6.index(obj6.last());
				}
			}			

		} else {	// 오른쪽
			if( obj6.size() >= 2){
				clearInterval(auto6);
				bl6 = false;
	
				if (cnt6 < obj6.index(obj6.last())) 	{
					obj6.eq(cnt6).show().css("left", 0);				//현재
					fnMoveL(obj6, cnt6, li_width6, speed6);
					obj6.eq(cnt6+1).show().css("left", li_width6);	//클릭한것
					fnMoveC(obj6, cnt6+1, speed6);
					cnt6++;
	
				} else {
					obj6.eq(0).show().css("left", li_width6);		//처음 세팅 후 왼쪽이동
					fnMoveC(obj6, 0, speed6);
					fnMoveL(obj6, cnt6, li_width6, speed6);		//마지막 왼쪽이동
					cnt6 = 0;
				}
				fnChangeAutoBtn(objBtn6, 1, 0);					//재생, 정지버튼 제어
			}
		}
	});

	//입시정보 & 공지사항
	var infoUrl = "http://edu.ingang.go.kr/NGLMS/High/Examinfo/Uanalysis.do";		//입시정보 url
	var noticeUrl = "http://edu.ingang.go.kr/NGLMS/High/Community/Notice.do";				//공지사항 url
	$(".main .info_notice .btn a:eq(0)").attr("href", infoUrl);

	$(".main .info_notice .btn a").click(function(e) {
		e.preventDefault();
		var idx = $(".main .info_notice .btn a").index(this);

		//더보기
		if (idx == 0) {
			location.href = $(this).attr("href");

		//왼쪽
		} else if (idx == 1) {
			$(".main .info_notice .list > ul").hide();
			//입시정보
			if (cnt6 < 1) 	{
				fnTabActive($(".main .info_notice .tab li a"), 1);
				$(".main .info_notice .list > ul").eq(cnt6).show();
				$(".main .info_notice .btn a:eq(0)").attr("href", noticeUrl);
				cnt6 = 1;

			//공지사항
			} else {
				fnTabActive($(".main .info_notice .tab li a"), 0);
				$(".main .info_notice .list > ul").eq(cnt6).show();
				$(".main .info_notice .btn a:eq(0)").attr("href", infoUrl);
				cnt6 = 0;
			}

		//오른쪽
		} else {
			$(".main .info_notice .list > ul").hide();
			//입시정보
			if (cnt6 < 1) 	{
				fnTabActive($(".main .info_notice .tab li a"), 1);
				$(".main .info_notice .list > ul").eq(cnt6).show();
				$(".main .info_notice .btn a:eq(0)").attr("href", noticeUrl);
				cnt6 = 1;

			//공지사항
			} else {
				fnTabActive($(".main .info_notice .tab li a"), 0);
				$(".main .info_notice .list > ul").eq(cnt6).show();
				$(".main .info_notice .btn a:eq(0)").attr("href", infoUrl);
				cnt6 = 0;
			}
		}
	});
	$(".main .info_notice .tab li a").click(function(e) {
		e.preventDefault();
		var url;
		var idx = $(".main .info_notice .tab li a").index(this);
		if (idx < 1) url = infoUrl;
		else url = noticeUrl;
		fnTabActive($(".main .info_notice .tab li a"), idx);
		$(".main .info_notice .list > ul").hide();
		$(".main .info_notice .list > ul").eq(idx).show();
		$(".main .info_notice .btn a:eq(0)").attr("href", url);
		cnt6 = idx;
	});



	//퀵메뉴
	$(window).scroll(function() {
		$(".main .quick").animate({top: $(window).scrollTop()}, {queue: false, duration: 450});
		$(".bn_sub .quick").animate({top: $(window).scrollTop()+78}, {queue: false, duration: 450});
		$(".ctn .quick").animate({top: $(window).scrollTop()+78}, {queue: false, duration: 450});
	});
	$(".main .quick .btn_top").click(function(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
	});
	$(".bn_sub .quick .btn_top").click(function(e) {
		e.preventDefault();
		$("html, body").stop().animate({scrollTop: 0}, {queue: false, duration: 450});
	});
	
	$(".ctn .quick .btn_top").click(function(e) {
		e.preventDefault();
		$("html, body").stop().animate({scrollTop: 0}, {queue: false, duration: 450});
	});
	
	//윈도우 가로길이가 1000px 미만일 경우 사라짐(화면배경 잘리는 문제때문에 사용)
	if ($(window).width() < 1000) $(".quick").hide();



	//스몰배너
	$(".bn_sub .mn_top li a").click(function(e) {
		e.preventDefault();
		var idx = $(".bn_sub .mn_top li a").index(this);
		$("html, body").stop().animate({scrollTop: $(".bn_sub .inner .list > li").eq(idx).offset().top-269}, {queue: false, duration: 450});
		fnTabActive($(".bn_sub .mn_top li a"), idx);		//탭활성화
	});



	//패밀리사이트(푸터)
	$(".footer .family > a").click(function(e) {
		e.preventDefault();
		if ($(".footer .family ul").css("display") == "none")
			$(".footer .family ul").slideDown(200);
		else
			$(".footer .family ul").slideUp(200);
	});



	//화면이 리사이즈될때
	$(window).resize(function() {

		//윈도우 width가 1000미만일때 퀵메뉴 사라짐
		if ($(window).width() < 1000) $(".quick").hide();
		else $(".quick").show();
		$(".mask").height($(window).height());

	});



	//공통함수

	/*
		설명	: 탭 활성화
		obj	: 탭 링크객체
		no		: 활성화할 링크의 인덱스
	*/
	function fnTabActive(obj, no) {
		obj.removeClass("on");			//전체 객체중 on 클래스 제거
		obj.eq(no).addClass("on");		//활성화 할 링크에 on 클래스 부여
	}

	/*
		설명		: 자동롤링 상단의 재생, 정지 버튼 제어
		obj		: 버튼객체
		hideIdx	: 숨길 인덱스
		showIdx	: 보여줄 인덱스
	*/
	function fnChangeAutoBtn(obj, hideIdx, showIdx) {
		obj.eq(hideIdx).hide();
		obj.eq(showIdx).show();
	}

	/*
		설명		: 왼쪽으로 롤링
		obj		: 리스트아이템
		cnt			: 현재 보여주는 인덱스
		li_width	: 아이템의 길이
		speed		: animation속도
	*/
	function fnMoveL(obj, cnt, li_width, speed) {
		obj.eq(cnt).stop().animate({
			left: -li_width
			}, speed, function() {}
		);
	}

	/*
		설명		: 오른쪽으로 롤링
		obj		: 리스트아이템
		cnt			: 현재 보여주는 인덱스
		li_width	: 아이템의 길이
		speed		: animation속도
	*/
	function fnMoveR(obj, cnt, li_width, speed) {
		obj.eq(cnt).stop().animate({
			left: li_width
			}, speed, function() {}
		);
	}

	/*
		설명		: 가운데로 롤링
		obj		: 리스트아이템
		cnt			: 현재 보여주는 인덱스
		speed		: animation속도
	*/
	function fnMoveC(obj, cnt, speed) {
		obj.eq(cnt).stop().animate({
			left: 0
			}, speed, function() {}
		);
	}



});