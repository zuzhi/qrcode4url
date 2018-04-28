// Get the URL textarea element
let urlTextarea = document.getElementById("urlTextarea");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Get the active tab's URL, and assign the value to the URL textarea
    let tabUrl = tabs[0].url;
    urlTextarea.value = tabUrl;

    // Create the QRCode object
    qrcode = new QRCode(document.getElementById('qrcodeImg'), { // customized size 256x256
      text: tabUrl,
      width: 256,
      height: 256
    });

    // Make QR Code
    qrcode.makeCode(tabUrl);
});
