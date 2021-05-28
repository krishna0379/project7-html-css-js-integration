const registerEmployee = () => {
    console.log("regiser");

    const usernameRef = document.querySelector("#username");
    const passwordRef = document.querySelector("#password");
    const emailRef = document.querySelector("#email");
    const mobileRef = document.querySelector("#mobile");

    console.log(usernameRef.value);

    const templateString = `
        <div style="font-size: large">
        <hr>
            <span>${usernameRef.value}</span>
            <br>
            <span>${passwordRef.value}</span>
            <br>
            <span>${emailRef.value}</span>
            <br>
            <span>${mobileRef.value}</span>
            <br>
            <span style="margin-left: 16px; cursor: pointer;">&#10060;</span>
        <hr>
        </div>
    `;


    // DYNAMIC OBJECT
    let dynamicElement = document.createElement("template");
    dynamicElement.innerHTML = templateString;


    // PARENT
    let parent = document.querySelector("#parent");
    parent.insertBefore(dynamicElement.content, parent.firstChild);

    const formRef = document.querySelector("#form");
    formRef.reset();
}