// TODO: Closure Real World Example. (DONE)
const AppLayout = (param) => {
    let outlet;
    switch (param) {
        case "home":
            outlet = "Home Page";
            break;
        case "about":
            outlet = "About Page";
            break;
        case "contact":
            outlet = "Contact Page";
            break;
        default:
            if(param) outlet = "404 NOT FOUND PAGE";
            break;
    }
    const Header = () => {
        console.log("App Header rendered...");
    }
    const Footer = () => {
        console.log("App Footer rendered...")
    }
    const Outlet = () =>{
        Header();
        outlet ? console.log(`${outlet} rendered...`) : console.log("Select the Page");
        Footer();
    }
    return Outlet;
}

let App = AppLayout();
App();