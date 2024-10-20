(async function() {
  const url = '../pdf/2lm less5.pdf';
  const pdfjsLib = window['pdfjs-dist/build/pdf'];

  // Ensure the workerSrc is set
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js';

  // Loading a PDF document
  const pdf = await pdfjsLib.getDocument(url).promise;
  const container = document.getElementById('pdf-container');

  // Loop over each page
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const scale = 1.5;
      const viewport = page.getViewport({ scale: scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;
      container.appendChild(canvas);

      // Render PDF page into canvas context
      const renderContext = {
          canvasContext: context,
          viewport: viewport
      };
      await page.render(renderContext).promise;
  }
})();
function toggleMute() {
var audio = document.getElementById("bgAudio"); // Get the audio element
var icon = document.getElementById("musicIcon"); // Get the icon element

if (audio.muted) {
  audio.muted = false; // Unmute the audio
  icon.classList.remove('muted'); // Remove line-through decoration
} else {
  audio.muted = true; // Mute the audio
  icon.classList.add('muted'); // Add line-through decoration
}
}