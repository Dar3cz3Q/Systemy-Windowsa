const number_define = [
    "Wykorzystane źródła",
    "Skorowidz",
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
});

window.addEventListener("focus", function () {
    var url = location.href;
    var adresId = url.slice(url.lastIndexOf("$") + 1, url.lastIndexOf(""));
    document.title = number_define[adresId];
});

window.addEventListener("load", SetListeners);

window.addEventListener("load", FirstLoad);

function SetListeners() {
    var i = 0;
    var menu_button = document.getElementsByClassName("MenuButton")[0];
    menu_button.addEventListener("click", ShowMenu);
    var source_button = document.getElementsByClassName("UsedSourcesButton")[0];
    source_button.addEventListener("click", ChangeContent);
    var index_button = document.getElementsByClassName("IndexButton")[0];
    index_button.addEventListener("click", ChangeContent);
    for (i = 0; i < 15; i++) {
        var single_menu_button = document.getElementsByClassName("SingleMenuElement")[i];
        single_menu_button.addEventListener("click", ChangeContent);
    }
    for (i = 0; i < 23; i++) {
        var postscript_button = document.getElementsByClassName("PostScriptElement")[i];
        postscript_button.addEventListener("click", CheckPostScript);
        var postscript_exitbutton = document.getElementsByClassName("ExitIcon")[i];
        postscript_exitbutton.addEventListener("click", CheckPostScript);
    }
}

function ShowMenu() {
    var position = $(".MenuContainer").data("menu");
    if (position === "Hidden") {
        Show(true);
    } else {
        Show(false);
    }
}

function Show(status) {
    if (status === true) {
        $(".MenuContainer").addClass("MenuUp");
        $(".MenuContainer").removeClass("MenuDown");
        $(".MenuContainer").data("menu", "Vision");
        $(".MenuButtonLetter").addClass("MenuButton--Clicked");
        $(".ChangingElement").addClass("ChangingElement--ToHide");
    } else {
        $(".MenuContainer").addClass("MenuDown");
        $(".MenuContainer").removeClass("MenuUp");
        $(".MenuButtonLetter").removeClass("MenuButton--Clicked");
        $(".ChangingElement").removeClass("ChangingElement--ToHide");
        setTimeout(function () {
            $(".MenuContainer").removeClass("MenuDown");
            $(".MenuContainer").data("menu", "Hidden");
        }, 500);
    }
}

function FirstLoad() {
    $(".SingleContentElement").addClass("HiddenElement");
    document.getElementsByClassName("SingleContentElement")[2].classList.remove("HiddenElement");
    document.location.href = "#Geneza-powstania$2";
    document.getElementsByClassName("SingleMenuElement")[0].classList.add("SingleMenuElement--Clicked");
    setTimeout(function () {
        document.title = "Geneza powstania";
    }, 1000);
}

function ChangeContent() {
    var system_unique = $(this).data("system");
    $(".SingleMenuElement").removeClass("SingleMenuElement--Clicked");
    if (system_unique === 0) {

    } else if (system_unique === 1) {
        Show(true);
    } else {
        $(this).addClass("SingleMenuElement--Clicked");
        Show(false);
    }

    $(".SingleContentElement").addClass("HiddenElement");

    document.getElementsByClassName("SingleContentElement")[system_unique].classList.remove("HiddenElement");
    document.title = number_define[system_unique];
    $(window).scrollTop(0);
}

function CheckPostScript() {
    var script_check = $(".AdditionalDescriptionContainer").data("visibility");
    var script_unique = $(this).data("script");
    if (script_check === "Hidden") {
        ShowPostScript(true, script_unique);
    } else {
        ShowPostScript(false);
    }
}

function ShowPostScript(visibility, unique) {
    if (visibility === true) {
        $(".AdditionalDescription").addClass("HiddenElement");
        document.getElementsByClassName("AdditionalDescription")[unique].classList.remove("HiddenElement");
        $(".AdditionalDescriptionHidder").addClass("FlexStyle");
        $(".AdditionalDescriptionContainer").addClass("FlexStyle");
        $(".AdditionalDescriptionContainer").data("visibility", "Showed");
    } else {
        $(".AdditionalDescriptionHidder").removeClass("FlexStyle");
        $(".AdditionalDescriptionContainer").removeClass("FlexStyle");
        $(".AdditionalDescriptionContainer").data("visibility", "Hidden");
    }
}
