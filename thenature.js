var current = 0 ; // 이미지 위치를 나타내는 변수 
showSlides(); // 기본 첫 번째 이미지를 보여 줌 
function showSlides() { var slides = document.querySelectorAll( "#slides > img" ); 
	for ( let i = 0 ; i < slides.length; i++) { slides[i].style.display = "none" ; // 모든 이미지 감춤 
		} 
		current++; // 다음 이미지로 이동 
		if (current > slides.length) // 마지막 이미지라면 
		current = 1 ; // 1 번째로 이동 
		slides[current - 1 ].style.display = "block" ; // 현재 위치 이미지 표시 
		setTimeout(showSlides, 5000 ); // 2 초마다 showSlides() 함수를 반복 실행 
		}

		let menutogglebtn = document.querySelector('.menu-toggle-btn');
		let gnb = document.querySelector('.gnb');
		menutogglebtn.onmouseover = displayBlock;

		function displayBlock() {
			document.querySelector('.gnb').style.display = 'block';
		}

		// 피플영역 제어 스크립트 
		const circle = document.querySelector("#circle");
        const article = document.querySelectorAll("article");
        for(let el of article){
            el.addEventListener("mouseenter", e=>{
                circle.style.animationPlayState = "paused";
            });

            el.addEventListener("mouseleave", e=>{
                circle.style.animationPlayState = "running";
            });
        }

	
