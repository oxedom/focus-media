let body = document.querySelector("body");

const elementsNotToPaint = [
  "IMG",
  "STYLE",
  "VIDEO",
  "SCRIPT",
  "META",
  "LINK",
  "CANVAS",
  "INPUT",
  "BUTTON",
  "SELECT",
  "TEXTAREA",
  "SVG",
];

const paintNonImages = (element) => {
  let start = performance.now();
  for (const child of element.children) {
    const currentTag = child.tagName;
    if (elementsNotToPaint.includes(currentTag)) {
      continue;
    }

    if (child.children.length > 0) {
      paintNonImages(child);
    }

    if (child.children.length === 0 && child.style) {
      child.style.filter = "grayscale(100%)";
    }
  }
  let end = performance.now();
  if (element.tagName === "BODY") {
    console.log("Time taken: ", end - start);
  }
};

document.addEventListener("DOMContentLoaded", () => paintNonImages(body));
paintNonImages(body);
