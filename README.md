Hello Hair - hopefully everything goes smoothly
 for you and this website but I've added some documentation
 for you in case you need to add something.
 

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
        
You could send a direct preorder link like:
    
        https://hairtheband.com/#preorder-div
        
### index.html

This is the main page of your website, its a Single-Page-Application
(SPA) and it contains all the views for your website.


### CSS/style.scss

This is a sass file, you can effectively ignore this.  Or
if you want to you can install sass and use

    sass style.scss style.css
    
on the command line to convert it to your .css file.

### CSS/style.css

Contains all the custom styling for the website.

