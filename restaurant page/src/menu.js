import {mainContent, menupage,menu,foodblog1,foodblog2,foodblog3,foodblog4,foodname1,foodname2,foodname3,foodname4,foodImage4,foodImage3,foodImage2,foodImage1 } from "./variables";
export function foods(params) {
    menu.addEventListener('click', e=>{
mainContent.textContent = ''
mainContent.append(menupage)
menupage.append(foodblog1)
menupage.append(foodblog2)
menupage.append(foodblog3)
menupage.append(foodblog4)
foodblog1.append(foodImage1)
foodblog1.append(foodname1)
foodblog2.append(foodImage2)
foodblog2.append(foodname2)
foodblog3.append(foodImage3)
foodblog3.append(foodname3)
foodblog4.append(foodImage4)
foodblog4.append(foodname4)
menupage.classList.add('menupage')
foodImage1.classList.add('foodImage1')
foodImage2.classList.add('foodImage2')
foodImage3.classList.add('foodImage3')
foodImage4.classList.add('foodImage4')
foodblog1.classList.add('foodBlog')
foodblog2.classList.add('foodBlog')
foodblog3.classList.add('foodBlog')
foodblog4.classList.add('foodBlog')
menupage.classList.add('classlist')
foodname1.classList.add('foodname')
foodname2.classList.add('foodname')
foodname3.classList.add('foodname')
foodname4.classList.add('foodname')
foodname1.textContent = 'Mcfrog'
foodname2.textContent = "Frog 2000"
foodname3.textContent = 'Frog slushy'
foodname4.textContent = 'frogKing'



    })
}