let enter = () => {createNote()}
function addNotes(event){if(event.key == "Enter"){createNote()}}
let toggle=(recivedelement)=>{
     let element = recivedelement;
     element.classList.toggle("notDone")
     element.classList.toggle("done")
}
function doneMe(a){
     a.parentElement.parentElement.classList.add("strike")
}
function deleteMe(a){
     a.parentElement.parentElement.remove()
     console.log(a.parentElement.classList)
}
function createNote(){
     let listContainerNew = document.getElementsByClassName("listContainerNew")[0]
     let noteElement = document.createElement("div")
     let textContent = document.getElementsByTagName("input")[0].value
     noteElement.innerHTML = textContent
     if(textContent != ""){
          let deleteBtn = document.createElement("button")
          let doneBtn = document.createElement("button")
          let btnContainer = document.createElement("span")
          deleteBtn.innerHTML = " " ;
          doneBtn.innerHTML = " " ;
          
          doneBtn.setAttribute("onclick","doneMe(this)")
          deleteBtn.setAttribute("onclick","deleteMe(this)")
          // deleteBtn.addEventListener("click",()=>{
          //      this.classList.add("hide")
          //      // this.style.display= "none"
          // })
          deleteBtn.classList.add("red")
          doneBtn.classList.add("green")
          btnContainer.appendChild(doneBtn)
          btnContainer.appendChild(deleteBtn)
          noteElement.append(btnContainer)
          // let text = textContent
          // noteElement.appendChild(`${text}${deleteBtn}`)
          noteElement.classList.add("noteElement")
          noteElement.classList.add("notDone")
          noteElement.setAttribute("onclick" ,"toggle(this)")
          listContainerNew.appendChild(noteElement)
          console.log("creating Note")
     }
     document.getElementsByTagName("input")[0].value = ""
}
document.addEventListener("keyup",addNotes)
console.log("running...")