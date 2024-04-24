$(document).ready(function () {
  $("#fileInput").change(function () {
    var file = this.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(".image-preview").html('<img src="' + e.target.result + '">');
      };
      reader.readAsDataURL(file);
    } else {
      $("#result").text("File not uploaded");
    }
  });
});

function downloadStaticPDF() {
  const staticPdfUrl = "weekly Assignment list updated.pdf";
  const a = document.createElement("a");
  a.href = staticPdfUrl;
  a.download = "static_report.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
