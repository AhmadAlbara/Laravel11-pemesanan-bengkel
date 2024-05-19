function printPage() {
    var printArea = document.getElementById("print-area");
    var printContent = printArea.outerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}

