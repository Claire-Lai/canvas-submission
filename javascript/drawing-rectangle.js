/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // Manipulating the context draft
    this.contextDraft.strokeStyle = strokeColorIndicator.style.backgroundColor;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineWidth = $("#lineWidth").val();
    // Allows you to actually draw out your squares
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
    this.contextDraft.beginPath();
    this.contextDraft.rect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextDraft.stroke();
  }

  
  onMouseMove() {}

  // Committing the element to the canvas
  onMouseUp(coord) {
    // Clearing the rectangle first
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    this.contextReal.strokeStyle = strokeColorIndicator.style.backgroundColor;
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = $("#lineWidth").val();
    this.contextReal.beginPath();
    this.contextReal.rect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextReal.stroke();
    push();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
