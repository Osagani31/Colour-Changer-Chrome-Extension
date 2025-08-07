function changeColor(color) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (bgColor) => {
        document.body.style.backgroundColor = bgColor;
      },
      args: [color]
    });
  });
}

document.getElementById("dark").addEventListener("click", () => changeColor("#1e1e1e"));
document.getElementById("pink").addEventListener("click", () => changeColor("#ffc0cb"));
document.getElementById("green").addEventListener("click", () => changeColor("#d4fcdc"));
document.getElementById("purple").addEventListener("click", () => changeColor("#e6ccff"));
