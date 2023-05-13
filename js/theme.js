if (localStorage.getItem("dark_theme")) {
    dark_theme(0)
}
function dark_theme(n) {
    const btn = document.getElementById("dark_theme_btn");

    const main_style = document.getElementById("main_style");
    const header_style = document.getElementById("header_style");
    const footer_style = document.getElementById("footer_style");

    if (n == 0) {
        try{main_style.href = "css/black_theme/main_style_black.css";}catch{}
        try{header_style.href = "css/black_theme/header_style_black.css";}catch{}
        try{footer_style.href = "css/black_theme/footer_style_black.css";}catch{}

        btn.value = 1;
        localStorage.setItem("dark_theme", "true")
    }
    if (n == 1) {
        try{main_style.href = "css/main_style.css";}catch{}
        try{header_style.href = "css/header_style.css";}catch{}
        try{footer_style.href = "css/footer_style.css";}catch{}

        btn.value = 0;
        localStorage.removeItem("dark_theme")
    }
}
