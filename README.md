git # Canvas Application :rocket:

#### Tip:

Try removing lines of code to see how it works together. Go slow, and read the documentation. Also, looking at different examples online might be helpful!

#### Examples:

- the-canvas-boys.surge.sh
- http://canvasg2march.surge.sh/

### How to run this package

- Make sure you clone the repository

- Double click on index.html

### How it works :open_book:

In the javascript folder, there are various functionalities for the canvas application (please implement more, here)

- javascript
  - canvas-common.js
  - drawing-line.js
  - drawing-rectangle.js
- css
  - style.css

## Sprint :athletic_shoe:

| Done? | Component                         | Priority | Estimated Time | Actual Time |
| ----- | --------------------------------- | :------: | :------------: | :---------: |
|       | Read Documentation                |    M     |                |             |
|       | Write down a list of requirements |    M     |                |             |
|       | Look over the code                |    M     |                |             |
|       | Functionality 1: Circle           |    M     |                |             |
|       | Functionality 2: Eraser           |    M     |                |             |
|       | Functionality 3: (You choose!)    |    M     |                |             |
|       | Functionality 4:                  |    M     |                |             |
|       | Functionality 5:                  |    M     |                |             |
|       | Functionality 6:                  |    M     |                |             |

- [Further Documentation and Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
1. the text will move slightly a bit between the typing product and final product
2. the background of the saved picture is transparent
3. when the stroke color is black, the fill bucket function can't detect the shape and fills the whole canvas instead.

**RESOLUTION**: :key:


| Issue             | Where it occurs |  Possible solution   |   Actual solution    |
| ----------------- | :-------------: | :------------------: | :------------------: |
| Unsure what to do |        H        | Creating a checklist | Creating a checklist |

#### What is one thing that I learned from doing this project? :books:
<!-- Jonathan's Reflection -->

- This project was the most difficult to date as it involved using all the functions and methods taught to us and then merging it all to create the final product

- On top of that there were definitely new and challenging functions that had to be read up on and messed around with to implement into the canvas project

- Still trying to wrap my head around RGBA and the pixels, so will have to read further into that, but without the documents that Bibek had sent, this would never had been implemented from the top of my head

- Once again typos proved to be another hitch in working on this project so double checking your code and spelling every time you finish a line is pivotal

- As well as linking files to the index.html or just linking between one another in general became very important this time around since there were so many class extensions happening with the nature of this project

- Communication with our teammates was a huge factor as that would not only give us different insights to each others work but also getting a feel of each others work pace and whether help was required from either parties

- Having to deal with a sudden work from home/online only situation, it showed that seeing each other in person is actually of much more benefit. Even though the concept of meeting up physically/online are the same, that communication when you're next to each other makes a huge difference when working

<!-- Claire's Reflection -->

Other than going through the documentation, we can go through stackoverflow/ youtube/ tutorial blog to get   some ideas on how others make a project because there's no instructions on how to put different functions together (like mouse movements and canvas). However, it's also important pay attention to the tools others are using, for  example, some used react for creating the canvas, after understanding the logic, we needed to make a twist to suit the tools we was using, this transition is where the difficulties came in. For example, whether it should be using onkeydown or keydown.



##Instructions

<!-- Draw line Function -->
    - actions required: 1 color selection (optional), 1 mousedown, 1 mousedrag
    - Go to the first color selector, user can choose a color they like for the line by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above (optional, if no color is chosen, the color of the line will set to its default color/ the last color that is selected)
    - a line will be created following the movements user moves his/her mouse around the canvas when it is  also moused down

 <!-- Draw straight line Function -->
    - actions required: 1 color selection (optional), 1 mousedown, 1 mousedrag
    - Go to the first color selector, user can choose a color they like for the line by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above
    (optional, if no color is chosen, the color of the line will set to its default color/ the last color that is selected)
    - a straight line will be created when user mouses down and move to a point he/she wishes the straight line to  end

  <!-- Draw Quadratic Curve Function-->
    - actions required: 1 color selection (optional), 2 mousedowns, 2 mousedrags
    - Go to the first color selector, user can choose a color they like for the curve by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above
    (optional, if no color is chosen, the color of the line will set to its default color/ the last color that is selected)
    - on 1st mousedown and mousedrag, a straight line will be created when user mouses down and move to a point he/she wishes the straight line to end
    - on 2nd mousedown and mousedrag, drag in any direction the user would like to create a curve line, the point user mouses up will decide the vertex of the curve

<!-- Draw Bezier Curve Function-->
    - actions required: 1 color selection (optional), 3 mousedowns, 3 mousedrags
    - Go to the first color selector, user can choose a color they like for the curve by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above
    (optional, if no color is chosen, the color of the line will set to its default color/ the last color that is selected)
    - on 1st mousedown and mousedrag, a straight line will be created when user mouses down and move to a point he/she wishes the straight line to  end
    - on 2nd mousedown and mousedrag, drag in any direction the user would like to create a curve line, the point user mouses up will decide 1 out of 2 vertexs of the curve
    - on 3rd mousedown and mousedrag, drag in any direction the user would like to create a curve line, the point user mouses up will decide 1 out of 2 vertexs of the curve

<!-- Draw Triangle Function-->
    - actions required: 1 color selection (optional), 2 mousedowns, 2 mousedrags
    - Go to the first color selector, user can choose a color they like for the stroke of the triangle by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above
    (optional, if no color is chosen, the color of the line will set to its default color/ the last color that is selected)
    - on 1st mousedown and mousedrag, a straight line will be created when user mouses down and move to a point he/she wishes the straight line to end, and it forms one side of the triangle
    - on 2nd mousedown and mousedrag, drag and draw the second side of the triangle, the 3rd side of the triangle will appear itself and now you can see a triangle appears

<!-- Draw Circle FUnction -->
    - actions required: 1 color selection (optional), 1 mousedown, 1 mousedrag
    - Go to the first color selector, user can choose a color they like for the stroke of the cirlce by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above
    (optional, if no color is chosen, the color of the line will set to its default color/ the last color that is selected)
    - Decide the center of the circle, mouse down and drag in any direction, mouse up when the size of the circle looks nice

<!-- Draw Rectangle Function-->
    - actions required: 1 color selection (optional),1 mousedown, 1 mousedrag
    - Go to the first color selector, user can choose a color they like for the stroke of the rectangle by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above
    (optional, if no color is chosen, the color of the line will set to its default color/ the last color that is selected)
    - Decide the point of one corner of the rectangle, mouse down and drag in any direction, mouse up when the size and the location of the rectangle looks nice

 <!-- Insert Text Function-->
    - actions required: 1 font style selection (optional), 1 font size selection (optional), 1 color selection (optional), 1 mousedown, 1 keydown input
    - Go to font style selector, user can select the font style to be applied for texts by clicking on its related select box and on the font style options
    (optional, if no font style is chosen, the font style of the text will set to its default style/ the last style that is selected)
     - Go to font size selector, user can select the font size to be applied for texts by clicking on its related select box and on the font size options
    (optional, if no font size is chosen, the font size of the text will set to its default size/ the last size that is selected)
    - Go to the first color selector, user can choose a color they like by mouse down and drag around the color selector, the color chosen will be reflected in the background color of the palette icon above
    (optional, if no color is chosen, the color of the line will set to it's default color/ the last color that is selected)
    - Mouse down at any point in canvas and that will be where the text will start
    - Input the text, and press enter uponing finishing

<!-- Fill Bucket Function -->

- When using the fill bucket, you can fill certain shapes or the whole canvas itself with the color choices you want
- At the bottom of the toolbar, you have 2 circles that denote stroke and fill colors
- The upper circle is for strokes, and the bottom circle is for fill
- click on the paint bucket icon, then choose your fill color with the lower circle color selector, and proceed to fill in the color you want on your shapes/enclosed spaces etc.

<!-- Eraser Function -->

- By clicking on the eraser icon, you will have the function of rubbing out any mistakes you've made on your canvas
- Like any other function on this canvas, if you've mistakenly rubbed out too much of a line/shape/drawing, you can always undo this by clicking the undo button as your last mouse down action would be saved

<!-- Undo/Redo Function -->

- when you mistakenly draw something you don't want, you may use these 2 buttons to either undo an action or redo depending on the situation
- denoted by the 2 curve arrow icons, you may use them at any given moment whenever you've made a change to the canvas page

<!-- Clear Canvas Function -->

- If you wish to instant clear your canvas of all drawings, you may click on the rubbish bin icon
- However if you've done this by mistake, do not worry, as the undo button (curve arrow going left) will let you undo this action

<!-- Save Picture Function -->

- When you're done drawing, save your image by clicking on the disk icon
- Depending on browser, you may either get a prompt of whether you want to open file instantly or save it to your desginated downloads folder
- Saved picture will be downloaded as a PNG file, and you can rename it manually after it's saved


