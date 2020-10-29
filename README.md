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
        
### index.html

This is the main page of your website, its a Single-Page-Application
(SPA) and it contains all the views for your website.
