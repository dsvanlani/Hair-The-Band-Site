Hey - here is some documentation to go with the new
website.  If you need anything else done (adding tour/show
dates etc.) just hit me up, would love to keep workin on this
with ya.

For now:

## How to Deploy

1. Remove all files from the public_html directory EXCEPT the hair
directory (this is all of the files the new index.html will use).
2. Add the new index.html to the public_html directory.
3. That should be it, but ya never know so give me a 
ring if something doesn't work.

## How to Add a Picture


First upload the image (.png or .jpg) to the directory

    public_html/hair/images/
    
You can do this from the file manager on siteground or a
file transfer protocol (FTP) program such as FileZilla.  If you use 
the latter the credentials are admin@thehairband.com, same
password as the siteground site, and port 21.

Next alter the HTML in the #pictures-row div with and add the following:

    <div class="col-12">
        <img src="https://www.hairtheband.com/hair/images/[yourfilename]">
    </div>
    
Its important that you wrap it in the <div class="col-12> or it will look funky.
        
## How to change the style

So you could just change the .css file but I suggest altering the
sass file and then compiling it to a new .css file.  

0. Just ask if your buddy dave can do it real quick :)
1. If you prefer to, make your changes to the style.scss file
2. Compile the .scss file into a .css file with sass.  Make sure 
sass is installed.  Check with
    
        sass --version
    
and if its not installed go to https://sass-lang.com/install and there are some
options to do it there.  Basically you can either run something on 
the command line like

    sass style.scss style.css

inside the CSS directory or you can use https://scout-app.io/ 
for a graphical interface.
3. Upload the new style.css file to the directory using the file manager
or FileZilla.

        public_html/hair/CSS/
    
    and delete the old style.css file.
    
## Link directly to preorder section:

    https://www.hairtheband.com/#preorder
        
# Just documentation stuff down here
### Directory:

On your siteground website your file configuration should look
like this:

    public_html/
        index.html
        hair/
            CSS/
                style.scss
                style.css
                style.css.map
            images/
                ** All your image files here **
            javascript/
                index.js
    
So if you need to link to a picture you can find it at:
    
        https://hairtheband.com/hair/images/<imagename>
        
### index.html

This is the main (and only) page of the website.  It contains all the views
including the pictures and videos views


### CSS/style.scss

This is a sass file, you can effectively ignore this.  Or
if you want to you can install sass and use

    sass style.scss style.css
    
on the command line to convert it to your .css file.

### CSS/style.css

Contains all the custom styling for the website.


### javascript/index.js

Basically just contains the changeView() function, which
changes the display based on the data-targetview attribute
on the links.