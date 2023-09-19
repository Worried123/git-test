import {homeImage, homePageLeft,home , mainContent,homePageItems,expandText,orderButton,titleExplantation,ColoredText,title} from "./variables";
export function homePage(params) {
    mainContent.append(homePageItems)
homePageItems.append(homePageLeft)
homePageLeft.append(title)
homePageLeft.append(titleExplantation)
homePageLeft.append(ColoredText)
homePageLeft.append(orderButton)
homePageLeft.append(expandText)
homePageItems.appendChild(homeImage)
homePageItems.classList.add('homePage')
titleExplantation.classList.add('titleContext')
title.classList.add('title')
ColoredText.classList.add('coloredText')
title.textContent = 'frog shop'
titleExplantation.textContent = 'we DO not serve frogs frog shop is just a name'
ColoredText.textContent = 'we only have pizza and hamburger'
orderButton.textContent = 'order'
orderButton.classList.add('order')
expandText.textContent = 'see more'
homeImage.classList.add('homePageImage')
homePageLeft.classList.add('homePageLeft')
home.addEventListener('click', e=>{
mainContent.textContent = ''

mainContent.append(homePageItems)
homePageItems.append(homePageLeft)
homePageLeft.append(title)
homePageLeft.append(titleExplantation)
homePageLeft.append(ColoredText)
homePageLeft.append(orderButton)
homePageLeft.append(expandText)
homePageItems.appendChild(homeImage)
homePageItems.classList.add('homePage')
titleExplantation.classList.add('titleContext')
title.classList.add('title')
ColoredText.classList.add('coloredText')
title.textContent = 'frog shop'
titleExplantation.textContent = 'we DO not serve frogs frog shop is just a name'
ColoredText.textContent = 'we only have pizza and hamburger'
orderButton.textContent = 'order'
orderButton.classList.add('order')
expandText.textContent = 'see more'
homeImage.classList.add('homePageImage')
})
}
//home.textContent = "home"
//home.setAttribute('type','button' )