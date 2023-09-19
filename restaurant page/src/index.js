import "./style.css";
import pizza from './pizza.jpg';
import frog0 from './frog0.jpg';
import frog1 from './frog1.jpg';
import frog2 from './frog2.jpg';
import { homePage } from "./home";
import { mainContent, home , content , menu , buttons , contact } from "./variables";
console.log('hello');
import { contacts } from "./contact";
import { foods } from "./menu";
import burger from './burger.jpg'
import pizza1 from './pizza1.jpg'
import slushy from './slushy.jpg'
import king from './slushy.jpg'
content.append(buttons)
content.append(mainContent)
buttons.append(menu)
buttons.append(contact)
buttons.append(home)
contact.setAttribute('type','button' )
menu.setAttribute('type','button' )
home.setAttribute('type','button' )
mainContent.classList.add("mainContent")
buttons.classList.add('buttons')
contact.textContent = 'contact'
menu.textContent = 'menu'
home.textContent = 'home'
homePage()
contacts()
foods()