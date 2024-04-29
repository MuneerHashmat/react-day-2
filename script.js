let h1=React.createElement("h1",null,"Topics covered");

let subHeading=React.createElement("p",null,"The following is a list of all the topics we cover in the MDN learning area.");

let link1=React.createElement("a",{href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",target:"_blank"},"Getting started with the web");
let para1=React.createElement("p",null,"Provides a practical introduction to web development for complete beginners.");
let section1=React.createElement("section",null,[link1,para1]);

let link2=React.createElement("a",{href: "https://developer.mozilla.org/en-US/docs/Learn/HTML",target:"_blank"},"HTML — Structuring the web");
let para2=React.createElement("p",null,"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");
let section2=React.createElement("section",null,[link2,para2]);

let link3=React.createElement("a",{href: "https://developer.mozilla.org/en-US/docs/Learn/CSS",target:"_blank"},"CSS — Styling the web");
let para3=React.createElement("p",null,"CSS is the language that we use to control our web content's style and layout, as well as aping behavior like animation. This topic provides comprehensive coverage of CSS.");
let section3=React.createElement("section",null,[link3,para3]);




let outerDiv=React.createElement("div",null,[h1,subHeading,section1,section2,section3]);

ReactDOM.render(outerDiv,document.querySelector("body"));