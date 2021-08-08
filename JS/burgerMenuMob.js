$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.nav').toggleClass('active')
        $('.prev,.next').toggleClass('activePrevNext')
    })
})