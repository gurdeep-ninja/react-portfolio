function Skills(props) {

    const { skill } = props;

    // set the images directory
    
    const imagesDirectory = "assets/images/";

    // An object of icons and their corresponding images
    const icons = {
        javascript: "javascript-programming-language-icon.png",
        react: "react-js-icon.png",
        nodejs: "node-js-icon.png",
        jquery: "jquery-icon.png",
        bootstrap: "bootstrap-5-logo-icon.png",
        html: "html-icon.png",
        css: "css-file-format-icon.png"
    }

    // Switch statement to return icon based on skill
    switch (skill) {
        case "javascript":
            return <img src={imagesDirectory + icons.javascript} alt={skill} width="40" />;
        case "react":
            return <img src={imagesDirectory + icons.react} alt={skill} width="40" />;
        case "nodejs":
            return <img src={imagesDirectory + icons.nodejs} alt={skill} width="40" />;
        case "html":
            return <img src={imagesDirectory + icons.html} alt={skill} width="40" />;
        case "jquery":
            return <img src={imagesDirectory + icons.jquery} alt={skill} width="40" />;
        case "bootstrap":
            return <img src={imagesDirectory + icons.bootstrap} alt={skill} width="40" />;
        case "css":
            return <img src={imagesDirectory + icons.css} alt={skill} width="40" />;
        default:
            return <></>;
    }

}

export default Skills;