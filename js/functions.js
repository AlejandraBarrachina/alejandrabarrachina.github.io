$(document).ready(function () {
    var flag = 0;
    $("#foto1").click(function () {
        if (flag == 0) {
            $("#foto1").attr("src", "img/proyectos/portadasB.jpg");
            flag = 1;
        } else if (flag == 1) {
            $("#foto1").attr("src", "img/proyectos/portadasA.jpg");
            flag = 0;
        }
    });
});

$(document).ready(function () {
    var flag = 0;
    $("#foto2").click(function () {
        if (flag == 0) {
            $("#foto2").attr("src", "img/proyectos/encuadernacionA.jpg");
            flag = 1;
        } else if (flag == 1) {
            $("#foto2").attr("src", "img/proyectos/encuadernacionB.jpg");
            flag = 0;
        }
    });
});

$(document).ready(function () {
    var flag = 0;
    $("#foto3").click(function () {
        if (flag == 0) {
            $("#foto3").attr("src", "img/proyectos/librosA.jpg");
            flag = 1;
        } else if (flag == 1) {
            $("#foto3").attr("src", "img/proyectos/librosB.jpg");
            flag = 0;
        }
    });
});

$(document).ready(function () {
    var flag = 0;
    $("#foto4").click(function () {
        if (flag == 0) {
            $("#foto4").attr("src", "img/proyectos/movilA.png");
            flag = 1;
        } else if (flag == 1) {
            $("#foto4").attr("src", "img/proyectos/movilB.jpg");
            flag = 0;
        }
    });
});

$(document).ready(function () {
    var flag = 0;
    $("#foto5").click(function () {
        if (flag == 0) {
            $("#foto5").attr("src", "img/proyectos/triangulosA.jpg");
            flag = 1;
        } else if (flag == 1) {
            $("#foto5").attr("src", "img/proyectos/triangulosB.jpg");
            flag = 0;
        }
    });
});

$(document).ready(function () {
    var flag = 0;
    $("#foto6").click(function () {
        if (flag == 0) {
            $("#foto6").attr("src", "img/proyectos/cdA.jpg");
            flag = 1;
        } else if (flag == 1) {
            $("#foto6").attr("src", "img/proyectos/cdB.jpg");
            flag = 0;
        }
    });
});
