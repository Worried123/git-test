 import {contact,thirdContactText,secondContactText,firstContactText,thirdContactImage,secondContactImage,firstContactImage,thirdContact,secondContact,firstContact ,contactPage,mainContent } from "./variables";
export  function contacts() {
    contact.addEventListener('click', e => {
        mainContent.textContent = ''
        mainContent.append(contactPage)
        contactPage.append(firstContact)
        contactPage.append(secondContact)    
        contactPage.append(thirdContact)        
       secondContact.append(secondContactImage)
       secondContact.append(secondContactText)
        firstContact.append(firstContactImage)
        firstContact.append(firstContactText) 
       thirdContact.append(thirdContactImage)
       thirdContact.append(thirdContactText)   
        contactPage.classList.add('contactPage')
        firstContact.classList.add('contacts')
        secondContact.classList.add('contacts')
        thirdContact.classList.add('contacts')
        firstContactImage.classList.add('contactImage1')
        secondContactImage.classList.add('contactImage2')
        thirdContactImage.classList.add('contactImage3')
        firstContactText.classList.add('contactText')
        secondContactText.classList.add('contactText')
        thirdContactText.classList.add('contactText')
        firstContactText.textContent = 'frog  very good at his job bit fat tho '
        secondContactText.textContent = 'frog  very good at his job bit fat tho '
        thirdContactText.textContent = 'frog  very good at his job bit mean tho '
    })
        

}