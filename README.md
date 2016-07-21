![cf](http://i.imgur.com/7v5ASc8.png) lab-27-28-image-gallery
====

[![Issues?](https://img.shields.io/badge/Issues%3F-Ask%20for%20Help!-55cbe0.svg)](https://github.com/codefellows/seattle-javascript-401n1/issues/new)

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Directions
* Create these directories to organize your code: 
 * app
 * app/component
 * app/html
 * app/scss/vendor
 * app/asset/image
* create a **_theme.scss** partial 
 * add three color variables
* create a **base.scss** file 
 * import normalize
 * import \_theme
 * write some styles that use the color variables defined in \_theme
* create a **entry.js**
 * require your **index.html** and force webpack to use the `file-loader`
 * require your **base.scss**

# Requirements
For this assignment, build three different display components for an image url: 
 1. The first should display the title of the image, description of the image, and the link (not the  actual image), and short description.  
 2. The second should display the image as a "thumbnail" (within a 100x100 pixel scale). 
 3. The third should display the title, description of the image, and the full-size image, and the description. 

Create a gallery component that contains hard-coded image data for populating the gallery. The gallery component must have data for at least five images. You must find your own images (and optionaly thumbnails of the same image).  

Your component's must allow attributes to set the `title`, `description`, and `imageUrl` properties of their scopes. Each of your component's must also have its own scss file that styles its appearance.

# BONUS:
* **1pt** Have the high-level component take a "parameter" to toggle between the display modes.

# Rubric
App requirements: 6pts
  - Create a directive to display a text only version of the image.
  - Create a directive to display a thumbnail version of the image.
  - Create a directive to display a full size image with a title and description.
  - Create a gallery that populates and displays the image data components

Code style: 3pts
  - Passes linter
  - Well-named functions and variables, properly scoped
  - Good project organization
  
Git usage: 1pt
  - Well-structured pull request
  - Accurate commit messages
  - Clear, readable git history

