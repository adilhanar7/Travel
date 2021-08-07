$('.Comment-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:  true,
    nextArrow:' <div  class="next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 25L18 20.5L22 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20" r="19" transform="rotate(180 20 20)" stroke="black" stroke-width="2"/></svg></div>',
    prevArrow:'<div class="prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 25L18 20.5L22 16" stroke="#D7D7D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20" r="19" transform="rotate(-180 20 20)" stroke="#D7D7D7" stroke-width="2"/></svg></div>'
});
$('.item__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:  true,
    nextArrow:'<a class="View__link"><span>View all</span><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5.5L1 10" stroke="#FB8F1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
    prevArrow:'',
    responsive:[
        {
            breakpoint:1100,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        }
    ]
});
