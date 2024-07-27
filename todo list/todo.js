
class todos{
 constructor(title,description,checkList ){
    this.title = title
    this.description = description
    this.checkList = checkList
 }
 writeTitle(title){
 this.title = title
 }
 deleteTitle(remove  = ''){
 this.title = remove
 }
 writeDescription(description){
    this.description = description
 }
 deleteDescription(remove = ''){
    this.description = remove
 }
 markCheckList(mark = 'done'){
    this.checkList = mark
 }
 clearCheckList(clear = 'undone'){
this.checkList = clear
 }
 


}
export default todos