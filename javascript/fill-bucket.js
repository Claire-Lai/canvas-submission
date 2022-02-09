class FillBucket extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    let pixelStack = [coord];
    let canvasWidth = canvasReal.width;
    let canvasHeight = canvasReal.height;
    let colorLayer = contextReal.getImageData(0, 0, canvasWidth, canvasHeight);
    let colourinput = fillColorIndicator.style.backgroundColor;
    let sep = colourinput.indexOf(",") > -1 ? "," : " ";
    let rgbvalue = colourinput.substr(4).split(")")[0].split(sep).map(Number);

    let targetR = rgbvalue[0]
    let targetG = rgbvalue[1]
    let targetB = rgbvalue[2]
    let targetRGBArray = [targetR, targetG, targetB];
    let startRGB = contextReal.getImageData(coord[0], coord[1], 1, 1);
    let startR = startRGB.data[0];
    let startG = startRGB.data[1];
    let startB = startRGB.data[2];
    let startRGBArray = [startR, targetG, targetB];

    if (JSON.stringify(targetRGBArray) != JSON.stringify(startRGBArray)) {
      while (pixelStack.length) {
        let newPos = pixelStack.pop();
        let x = newPos[0];
        let y = newPos[1];

        let pixelPos = (y * canvasWidth + x) * 4;
        while (y-- >= 0 && matchStartColor(pixelPos)) {
          pixelPos -= canvasWidth * 4;
        }
        pixelPos += canvasWidth * 4;
        ++y;
        let reachLeft = false;
        let reachRight = false;

        while (y++ < canvasHeight - 1 && matchStartColor(pixelPos)) {
          colorPixel(pixelPos);
          if (x > 0) {
            if (matchStartColor(pixelPos - 4)) {
              if (!reachLeft) {
                pixelStack.push([x - 1, y]);
                reachLeft = true;
              }
            } else if (reachLeft) {
              reachLeft = false;
            }
          }

          if (x < canvasWidth - 1) {
            if (matchStartColor(pixelPos + 4)) {
              if (!reachRight) {
                pixelStack.push([x + 1, y]);
                reachRight = true;
              }
            } else if (reachRight) {
              reachRight = false;
            }
          }
          pixelPos += canvasWidth * 4;
        }
      }
    }
    contextReal.putImageData(colorLayer, 0, 0);

    function matchStartColor(pixelPos) {
      let r = colorLayer.data[pixelPos];
      let g = colorLayer.data[pixelPos + 1];
      let b = colorLayer.data[pixelPos + 2];
      return r == startR && g == startG && b == startB;
    }

    function colorPixel(pixelPos) {
      colorLayer.data[pixelPos] = targetR;
      colorLayer.data[pixelPos + 1] = targetG;
      colorLayer.data[pixelPos + 2] = targetB;
      colorLayer.data[pixelPos + 3] = 255;
    }
  }
  onDragging(coord, event) {}
  onMouseMove() {}
  onMouseUp() {
    push();
  }
  onMouseLeave() {}
  onMouseEnter() {}
  draw(x, y) {}
}