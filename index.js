
gsap.from(
            ".main .name-1",
            {
                x: "-10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .name-3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".main .name-2",
            {
                x: "10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .name-3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".main .name-3",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main .name-3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);
    



gsap.from(
            ".main .tag-1",
            {
                y: "4vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.5, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);
        


gsap.from(
            ".main .tag-2",
            {
                y: "4vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.5, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.7,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);
        

gsap.from(
            ".main .tag-3",
            {
                y: "4vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.5, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);
        


gsap.from(
            ".section-1 img",
            {
                x: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.9, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.25, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-1 h1",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.5, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);
        

gsap.from(
            ".section-1 h3",
            {
                // y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-1 p",
            {
                // y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.8,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1 img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-2 h1",
            {
                x: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 h1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-2 li:nth-child(1) img",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.2,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 li:nth-child(1) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-2 li:nth-child(1) p",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 li:nth-child(1) p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-2 li:nth-child(2) img",
            {
                x: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2 li:nth-child(2) img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-3 .duck",
            {
                x: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3 .duck",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-3 li",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-3 li",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play none none none", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


// gsap.from(
//             ".section-3 li:nth-child(1)",
//             {
//                 y: "25vw",
//                 opacity: 0, //투명인 상태에서 시작
//                 duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
//                 delay: 0.2,
//                 ease: "power1.out",
//                 stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
//                 scrollTrigger: {
//                     trigger: ".section-3 li:nth-child(1)",   // → trigger 를 h2 로
//                     start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
//                     toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
//                     markers: false //페이지에 스크롤 위치 마커
//                 }
//             }
// );


// gsap.from(
//             ".section-3 li:nth-child(2)",
//             {
//                 y: "25vw",
//                 opacity: 0, //투명인 상태에서 시작
//                 duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
//                 delay: 0.3,
//                 ease: "power1.out",
//                 stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
//                 scrollTrigger: {
//                     trigger: ".section-3 li:nth-child(2)",   // → trigger 를 h2 로
//                     start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
//                     toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
//                     markers: false //페이지에 스크롤 위치 마커
//                 }
//             }
// );


// gsap.from(
//             ".section-3 li:nth-child(3)",
//             {
//                 y: "25vw",
//                 opacity: 0, //투명인 상태에서 시작
//                 duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
//                 delay: 0.4,
//                 ease: "power1.out",
//                 stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
//                 scrollTrigger: {
//                     trigger: ".section-3 li:nth-child(3)",   // → trigger 를 h2 로
//                     start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
//                     toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
//                     markers: false //페이지에 스크롤 위치 마커
//                 }
//             }
// );


/* --- Section 3: 챈들러 아코디언 (너비 고정형) --- */
// const listItems = document.querySelectorAll('.section-3 ul li');

// listItems.forEach((li) => {
//     // 클릭할 대상 (제목)
//     const title = li.querySelector('h3');
//     // 숨겨질 대상들 (내용, 이미지)
//     const hiddenContents = li.querySelectorAll('p, img');

//     // 1. [초기 상태] 안 보이고, 공간도 차지 안 함
//     gsap.set(hiddenContents, { 
//         display: "none", // 아예 공간 삭제 (h3 바로 밑에 붙게)
//         opacity: 0, 
//         y: 50            // 아래로 50px 내려가 있음
//     });

//     let isOpen = false; // 열림/닫힘 상태 기억

//     // 2. [클릭 이벤트]
//     title.addEventListener('click', () => {
//         if (!isOpen) {
//             // ▶ 열기 (Open)
//             gsap.to(hiddenContents, {
//                 display: "block", // 공간 차지 시작
//                 opacity: 1,       // 보임
//                 y: 0,             // 제자리로 쑥 올라옴
//                 duration: 0.5,
//                 ease: "power2.out",
//                 stagger: 0.1      // p -> img 순서로 따닥 나옴
//             });
//             isOpen = true;
//         } else {
//             // ▶ 닫기 (Close)
//             gsap.to(hiddenContents, {
//                 opacity: 0,
//                 y: 50,            // 다시 아래로 내려감
//                 duration: 0.3,
//                 onComplete: () => {
//                     // 애니메이션 끝나면 공간 삭제
//                     gsap.set(hiddenContents, { display: "none" });
//                 }
//             });
//             isOpen = false;
//         }
//     });
// });

gsap.from(
            ".section-4 .section-4-title",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 .section-4-title",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-4 p",
            {
                x: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4 .section-4-title",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-5 h3",
            {
                x: "-25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.6, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5 h3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-5 h1",
            {
                y: "25vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5 h1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


// 1. 타임라인 생성 (순서대로 동작하게 해주는 관리자)
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-5 h2",
        start: "top bottom",
        toggleActions: "play reverse play reverse",
        markers: false
    }
});

// 2. 첫 번째 동작: h2가 왼쪽에서 스윽 나타남
tl.from(".section-5 h2", {
    x: "-25vw",
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
    ease: "power1.out"
});

// 3. 두 번째 동작: 그 직후에 span이 0도에서 CSS에 설정된 55도로 회전
tl.from(".section-5 h2 span", {
    rotation: 0,  // 시작은 0도 (똑바로 선 상태)
    delay: 0.6,
    duration: 0.6,
    ease: "back.out(1.7)" // 띠용~ 하고 약간 텐션 있게 떨어지면 더 예쁨
}, "-=0.4"); // ★중요: 앞 동작이 끝나기 0.4초 전에 미리 시작 (자연스럽게 연결)


gsap.from(
            ".section-5 h4",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.5, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5 h4",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-6 li",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 li",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-6 .section-6-img img:nth-child(1)",
    {
                // scale: 0.5,
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 .section-6-img img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top center",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 .section-6-img img:nth-child(2)",
    {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 .section-6-img img:nth-child(2)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-6 .section-6-img img:nth-child(3)",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6 .section-6-img img:nth-child(3)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);


gsap.from(
            ".section-7 h3",
            {
                x: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 h3",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-7 h2",
            {
                y: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 h2",   // → trigger 를 h2 로
                    start: "top center",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(".section-7 h1", {
    scaleY: 0,          // 핵심: 세로 크기가 0인 상태에서 시작
    opacity: 0,
    delay: 0.8,// 슥 나타나는 느낌을 위해 투명도 0에서 시작 (선택사항)
    // transformOrigin: "center center", // (중요) 어디를 기준으로 커질지 설정. "bottom center"로 하면 아래에서 위로 자라남.
    duration: 1.2,      // 애니메이션 시간
    ease: "power3.out", // 부드럽게 감속하며 도착 (텐션을 원하면 "back.out(1.5)" 추천)
    scrollTrigger: {
        trigger: ".section-7-txt", // 트리거 기준 요소
        start: "top 50%",          // 트리거 요소의 상단이 뷰포트 70% 지점에 닿을 때 시작
        toggleActions: "play reverse play reverse", // 스크롤 왔다 갔다 할 때 반복 설정
        markers: false             // 테스트용 마커
    }
});


gsap.from(
            ".section-7 p",
            {
                x: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 p",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);

gsap.from(
            ".section-7 img",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 0.8, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.3, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7 img",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
);
