# Lanzhou Jiang Portfolio Website - T1A3

### A link (URL) to my portfolio website:
https://lanzhoujiang.netlify.com/

### A link to the GitHub repository:
https://github.com/Lanzhou-J/portfolio-project


# Purpose

The purpose of the portfolio website is to show my working experience, skills, personality and hobbies to future collaborators and people with similar interests.  I think it is a better way to present myself compared with resume or coverletter. Resume may become outdated at the moment I hand it to others, however with a personal portfolio website I can update the information, such as new projects, new blog articles etc.

Besides, the website itself is a good example of my front end technology skills such as HTML, CSS, JavaScript and design skills.

# Functionality and Features

### Component 1: Navigation Bar/Footer Bar/multilingual versions of homepage

All the webpages have navigation bar and footer bar with similar style. For navigation bar, I used translucent frosted glass filter. The links on the left side of navigation bar will link to different websites (e.g. Working experience website/ Skills website/ Blog website), and the gray button on the right side of navigation bar will link visitors to a Chinese version of the homepage with the same information and the same style. By offering content in a different language, the portfolio website can reach a broader audience and target more locations. I choose Chinese because currently I am confident in translating the content into Chinese and Chinese is one of the most common languages used on the Internet. (Translating the webpage into other languages is a potential function to be released in the future.)

For footer bar I used gray background and white icon/text, the icon at the left side is my name "zhou" (meaning "boat") in ancient Chinese character. The icon will link users back to the homepage (or back to the top of the homepage).

In the homepage footer section I have included links to my Linkedin, Github and Facebook account. I have also provided my email address. This will provide users with additional information, and allow them to contact me if interested.

#### Sitemap
#### Screenshots
#### Target audience
#### Tech stack
* html
* css
* Netlify









### Component 1: Navigation Bar and Footer Bar

The site will include a navigation bar, which will include links to the other main pages of the website - home, projects, blog, and CV - on each page. The navigation bar both informs visitors of the other pages available on the website, and allows them a way to visit them.

The navigation bar resides at the top of each page so the user will always know where they can go on each page to navigate around the website. A yellow hover effect is used on the text for each page to provide feedback to the user that the feature is interactable. The fact that yellow features are interactable will be used repeatedly on the website.

A footer bar is included with links to professional accounts - LinkedIn and Github - as well as a link which will open an email message to my email address. This will allow visitors to view additional information such as my career prior to tech, personal projects, and allow them to get in contact with me if they wish.

### Component 2: Banners

Each page includes a large banner beneath the navigation bar to inform the user what the content of the page will be.

These banners draw attention partially because of their size. They are sized using view width and view height so they dominate the page no matter the size of the viewport.

Furthermore, the banners are one of the few places where graphics are used on the website. This is done intentionally to draw the user's attention. The graphics used in the banners are futuristic designs which is an appropriate theme for a developer in the technology sector.

### Component 3: CV Download

Visitors to the website have the ability to download a PDF copy of my CV. This will allow them to incorporate my information into their file systems or show other relevant persons without needing to visit the website repeatedly.

A CV download button exists at the bottom of the CV page. The link is large, bolded text which is the only text of its type on the page. A yellow hover using the same styling as the navigation bar hover signals to the user that it is interactable.

The text "DOWNLOAD CV" takes the imperative voice as if a command, and this represents a call to action for the user.

Lastly, the CV opens in a separate tab so the user does not lose their place on the website and can easily return (simply by clicking back to the tab) and continue engaging with the website.

### Component 4: Accessibility

Attention has been paid to the ability of visually-impaired individuals to use the website. This takes the form of providing alt-text for any images on the page, and ensuring that the contrast between elements on the page is high and does not use a colour scheme which would be a problem for color-blind visitors (e.g. red-green colour-blindness).

Acessibility was checked using the Audit function built into the Google Chrome developer tools. Separate audits were conducted for all four webpages. Audit scores of 100 were attained for all webpages.

![Accessibility](./docs/accessibility_score.jpg)

### A Consistent Style

All webpages use a consistent style, including components, fonts, colours, and themes:

- The navigation bar, the banners with the name of the webpage, and the buttons to LinkedIn and Github are components which are on every page of the website.
- The Poppins font is used for headers and Rubik is used for other text such as paragraphs. These sans-serif fonts were selected for their legibility and modern appearance.
- The colour scheme of the website is blue with yellow accents and heavy use of whitespace.
- Use of futuristic imagery in the banners of each page provide a unifying theme.
- All banner images were tinted blue to conform to the colour theme of the website.

### Semantic HTML

HTML elements have been named to enhance the readability of the code. For example, HTML tags such as nav, p, and footer have been used and comments have been added to the HTML document to describe the meaning of each block of code.

Additionally, the classes and id's used in CSS have been named in a way which is intended to enhance readability. For example the class 'flex-centered' includes the name 'flex' because it creates a flexbox using display: flex, and it centers the content which is childed to it using justify-content: center and align-items: center.

### Responsive Design

As visitors to the site may use a multitude of devices, the website has been designed to function well on screens of different sizes. 

This has been accomplished by the use of CSS Flexbox, which allows control over the positioning of elements in response to a change in screen size. The website is designed to display correctly on a device as small as an iPhone 5/SE, which has a width of 320 pixels. When the screen width is over 900 pixels, the elements of the website no longer expand to fill the space, instead leaving whitespace on the left and right of the screen.

By checking that components are displaying correctly on the smallest smartphones and wide screens such as desktop monitors, the website is viewable by the widest audience.

### Three Versions

Three versions of the website have been produced and saved on different branches in Github. These versions are:

- 'master' branch with the base version
- 'dark' branch with a dark colour scheme
- 'no-graphics' branch with the banner graphics removed

Alternate versions can be viewed by typing 'git checkout {branch-name}' in the terminal. For example to view the 'dark' branch, type:

>git checkout dark

### Subresource integrity

Subresource integrity ensures that the files delivered to your web application do not have any unexpected content such as malicious code injected by a third party.

This has been achieved by creating a hash using sha512 and using this hash as the value of the integrity attribute of our link tag. This ensures that styles.css will only load if it is identical to its state when the sha512 hash was created. If any changes have been made, the stylesheet will not be loaded and the HTML page will be displayed with no CSS styling.

# Sitemap

The website simply has all pages link to each other via the navigation bar. A sitemap for the website is presented below.

![Sitemap](./docs/sitemap.jpg)

# Screenshots

##### Home page
![screenshot_home](./docs/screenshot_home.jpg)

##### Projects page
![screenshot_projects](./docs/screenshot_projects.jpg)

##### CV page
![screenshot_cv](./docs/screenshot_cv.jpg)

# Target audience

The target audience for the website falls into two categories:

1. Employers
2. Project Leads

The website is intended as a showcase of my abilities as a software developer and designer. The most likely use of the website is to provide as evidence of ability alongside a traditional application for employment. Additionally, employers or those leading other projects may chance upon the website and consider me for employment or inclusion in their projects.

# Tech stack

- HTML is used for the content of all webpages
- CSS is used for the styling and positioning of elements.
- Netlify is used for web-hosting.

# Project Management

## Wireframes
Wireframes were created for each page for mobile and desktop screen widths during the planning phase of the project. Considering that four HTML pages were required, this meant that eight wireframes were created in total. These are presented below.

##### Homepage
![wireframe_1](./docs/wireframe_home.jpg)

##### Projects
![wireframe_2](./docs/wireframe_projects.jpg)

##### Blog
![wireframe_3](./docs/wireframe_blog.jpg)

#### CV
![wireframe_4](./docs/wireframe_cv.jpg)

## Trello

Tasks were tracked using Trello. A series of screenshots representing the timeline of the project are presented below.

##### Day 1 start (17/09/2019)
![trello_1](./docs/trello_1.jpg)

##### Day 2 start (18/09/2019)
![trello_2](./docs/trello_2.jpg)

##### Day 4 start (20/09/2019)
![trello_3](./docs/trello_3.jpg)

##### Day 5 start (21/09/2019)
![trello_4](./docs/trello_4.jpg)

##### Day 6 just before submitting (22/09/2019)
![trello_5](./docs/trello_5.jpg)

