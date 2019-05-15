window.addEventListener('load', function () {
    $(".PageLoading").addClass("Preloader-Hidding");
    var preloaderEl = document.querySelector(".PageLoading");
    preloaderEl.addEventListener('transitionend', function () {
        $(".PageLoading").addClass("Preloader-Hidden");
        $(".PageLoading").removeClass("Preloader-Hidding");
    });
});

window.addEventListener("blur", function () {
    document.title = 'Systemy Windows';
})

window.addEventListener("focus", function () {
    var url = location.href;
    var adres = url.slice(url.lastIndexOf("#")+1, url.lastIndexOf(""));
    document.title = 'Systemy Windows - ' + adres + '';
})

window.addEventListener("load", SetListeners);

window.addEventListener("load", FirstLoad);

function SetListeners() {
    var i = 0;
    var menu_button = document.getElementsByClassName("MenuButton")[0];
    menu_button.addEventListener("click", ShowMenu);
    var source_button = document.getElementsByClassName("UsedSourcesButton")[0];
    source_button.addEventListener("click", ChangeContent);
    for (i = 0; i < 15; i++) {
        var single_menu_button = document.getElementsByClassName("SingleMenuElement")[i];
        single_menu_button.addEventListener("click", ChangeContent);
    }
}

function ShowMenu() {
    if ($(".Menu").is(":hidden")) {
        Show(true);
    } else {
        Show(false)
    }
}

function Show(status, unique) {
    if (status === true) {
        $(".Menu").addClass("MenuUp");
        $(".Menu").removeClass("MenuDown");
        $(".MenuButton").html(`<i class="icon-cancel"></i>`);
    } else {
        if (unique === 0) {

        } else {
            $(".Menu").addClass("MenuDown");
            $(".Menu").removeClass("MenuUp");
            setTimeout(function () {
                $(".Menu").removeClass("MenuDown");
            }, 500);
            $(".MenuButton").html(`<i class="icon-menu"></i>`);
        }
    }
}

function FirstLoad () {
    $(".SingleContentElement").addClass("HiddenElement");
    document.getElementsByClassName("SingleContentElement")[1].classList.remove("HiddenElement");
    document.location.href = "#Geneza-powstania";
    document.getElementsByClassName("SingleMenuElement")[0].classList.add("SingleMenuElement--Clicked");
}

function ChangeContent() {
    var system_unique = $(this).data("system");
    $(".SingleMenuElement").removeClass("SingleMenuElement--Clicked");
    if (system_unique === 0) {

    } else {
        $(this).addClass("SingleMenuElement--Clicked");
    }

    Show(false, system_unique);

    const number_define = [
        "Wykorzystane źródła",
        "Geneza powstania",
        "Windows 3.0",
        "OS/2",
        "Windows 3.1 i NT",
        "Windows 95",
        "Windows NT 4.0",
        "Windows 98",
        "Windows 2000",
        "Windows Me",
        "Windows XP",
        "Windows Vista",
        "Windows 7",
        "Windows 8",
        "Windows 8.1",
        "Windows 10",
    ];

    $(".SingleContentElement").addClass("HiddenElement");

    document.getElementsByClassName("SingleContentElement")[system_unique].classList.remove("HiddenElement");
    document.title = 'Systemy Windows - ' + number_define[system_unique] + '';
    $(window).scrollTop(0);
}