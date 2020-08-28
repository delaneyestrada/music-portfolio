## Music Portfolio
###### [music.dillonestrada.com](https://music.dillonestrada.com)
------


###### Built from the Kube template by Rometheme.

My first project in a few years that I haven't used a backend for. I wanted to simulate the process of doing a template customization for a client with minimal to no backend functionality.

#### Email Form

Email form functionality will be implemented through the use of the API already built on my web development portfolio. I'm making a fetch request to the endpoint on the API and it handles where to send the email based on which form it is submitted from.

Form validation was already handled for the most part and I just had to make a few tweaks on the template.

#### Mobile Considerations

In order to tell if a user was on a mobile device I used javascript to detect whether a user was using a touch screen and the width of the html element was under normal desktop widths.

This allowed me to display overlays on image by default for mobile as opposed to on hover for the desktop version and handle some weirdness with the jQuery magnific popup that was causing my YouTube playlist to not open for mobile devices.

#### Next Steps

This site is pretty much finished, but I will still need to do some optimization things including:
* Image size reduction
* Removal of unused code
* Minification of code
