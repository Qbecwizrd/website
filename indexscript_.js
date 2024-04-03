function funcdisplay() {
  var toggle1 = document.getElementById("one");
  var toggle2 = document.getElementById("two");

  setTimeout(function () {
    toggle1.style.opacity = toggle1.style.opacity === "1" ? "0" : "1";
  }, 500);

  setTimeout(function () {
    toggle2.style.opacity = toggle2.style.opacity === "1" ? "0" : "1";
  }, 500);
}
document.getElementById('downloadButton').addEventListener('click', function() {
  // File name of your PDF file
  var pdfFileName = 'RESUME_NEW.pdf';

  // Fetch the PDF file
  fetch(pdfFileName)
      .then(response => response.blob())
      .then(pdfBlob => {
          // Create a temporary anchor element
          var a = document.createElement('a');
          a.href = window.URL.createObjectURL(pdfBlob);
          a.download = 'RESUME_NEW.pdf'; // File name for download
          a.style.display = 'none';

          // Append the anchor element to the body
          document.body.appendChild(a);

          // Trigger the click event of the anchor element
          a.click();

          // Remove the anchor element from the body
          document.body.removeChild(a);
      })
      .catch(error => console.error('Error fetching PDF file:', error));
});




