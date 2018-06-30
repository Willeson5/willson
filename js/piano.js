//p键召唤琴键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==80){
        $(".all").css({
            // "display":"block"
            "opacity":"1"
        });
        $(".play").attr('src',"");
    }
});


//m键召唤乐谱
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==77){
        $("#piano-spectrum").css({
            "display":"block"
        });
        }
});
//关闭乐谱
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==78){
        $("#piano-spectrum").css({
            "display":"none"
        });
    }
});
//a键
// $(document).keydown(function (event) {
//     console.log(event.keyCode);
//     if (event.keyCode==65) {
//         $('.play1').attr('src', "audio/40-C%20%20-小字1组.mp3");
//         $(".move1").css({
//             "opacity":"1",
//             "height":"180px",
//             "box-shadow":"5px 5px 15px",
//             "width":"55px"
//         })
//     }else{
//         $(".move1").css({
//             "height":"200px",
//             "box-shadow":"15px 15px 15px",
//             "width":"60px"
//         })
//     }
// });
//a键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==65) {
        $('.play1').attr('src', "audio/40-C%20%20-小字1组.mp3");
        $(".move1").css({
            "opacity": "1",
            "height": "180px",
            "box-shadow": "5px 5px 15px",
            "width": "55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==65) {
        $(".move1").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});

//s键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==83 || event.keyCode==115 ){
        $('.play2').attr('src', "audio/42-D%20-小字1组.mp3");
        $(".move2").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==83 || event.keyCode==115) {
        $(".move2").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//d键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==68){
        $('.play3').attr('src',"audio/44-E%20%20-小字1组.mp3");
        $(".move3").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==68 || event.keyCode==68) {
        $(".move3").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//f键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==70){
        $('.play4').attr('src',"audio/45-F%20%20%20-小字1组.mp3");
        $(".move4").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==70) {
        $(".move4").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//q键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==81){
        $('.play5').attr('src',"audio/47-G%20%20-小字1组.mp3");
        $(".move5").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==81) {
        $(".move5").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//w键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==87){
        $('.play6').attr('src',"audio/49-A%20%20-小字1组.mp3");
        $(".move6").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==87) {
        $(".move6").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//w键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==69){
        $('.play7').attr('src',"audio/51-B%20%20%20%20-小字1组.mp3");
        $(".move7").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })}
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==69) {
        $(".move7").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//j键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==74){
        $('.play8').attr('src',"audio/music/52-C%20%20%20%20-小字2组.mp3");
        $(".move8").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==74) {
        $(".move8").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//k键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==75){
        $('.play9').attr('src',"audio/music/54-D%20%20%20-小字2组.mp3");
        $(".move9").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })}
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==75) {
        $(".move9").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//l键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==76){
        $('.play10').attr('src',"audio/music/56-E%20%20%20-小字2组.mp3");
        $(".move10").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })}
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==76) {
        $(".move10").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//;键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==186){
        $('.play11').attr('src',"audio/music/57-F%20%20%20-小字2组.mp3");
        $(".move11").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })}
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==186) {
        $(".move11").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//u键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==85){
        $('.play12').attr('src',"audio/music/59-G%20%20%20-小字2组.mp3" );
        $(".move12").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })}
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==85) {
        $(".move12").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//i键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==73){
        $('.play13').attr('src',"audio/music/61-A%20%20-小字2组.mp3");
        $(".move13").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==73) {
        $(".move13").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//o键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==79){
        $('.play14').attr('src',"audio/music/63-B%20%20%20-小字2组.mp3" );
        $(".move14").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })}
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==79) {
        $(".move14").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//1键
        $(document).keydown(function (event) {
        console.log(event.keyCode);
        if (event.keyCode==97){
            $('.play15').attr('src',"audio/music-2/16-C%20%20-大字组.mp3");
            $(".move15").css({
                "opacity":"1",
                "height":"180px",
                "box-shadow":"5px 5px 15px",
                "width":"55px"
            })
        }
    });
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==97) {
        $(".move15").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//2键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==98){
        $('.play16').attr('src',"audio/music-2/18-D%20%20-大字组.mp3" );
        $(".move16").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==98) {
        $(".move16").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//3键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==99){
        $('.play17').attr('src',"audio/music-2/20-E%20-大字组.mp3");
        $(".move17").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==99) {
        $(".move17").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//4键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==100){
        $('.play18').attr('src',"audio/music-2/21-F%20-大字组.mp3" );
        $(".move18").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==100) {
        $(".move18").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//5键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==101){
        $('.play19').attr('src',"audio/music-2/23-G%20-大字组.mp3");
        $(".move19").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==101) {
        $(".move19").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//6键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==102){
        $('.play20').attr('src', "audio/music-2/25-A%20-大字组.mp3");
        $(".move20").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })
    }
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==102) {
        $(".move20").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});
//7键
$(document).keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==103){
        $('.play21').attr('src',"audio/music-2/27-B%20-大字组.mp3" );
        $(".move21").css({
            "opacity":"1",
            "height":"180px",
            "box-shadow":"5px 5px 15px",
            "width":"55px"
        })}
});
$(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode==103) {
        $(".move21").css({
            "height":"200px",
            "box-shadow":"15px 15px 15px",
            "width":"60px"
        })
    }});

