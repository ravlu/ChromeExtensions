//console.log('Test Content Script');

function getCodeElements(){
    var i=0;
var codeElements=document.getElementsByTagName("code");


for(let codelem of codeElements){
	var copybut = document.createElement("button");
    copybut.width=
	//copybut.innerHTML="copy";
    //copybut.innerHTML='';
	//copybut.setAttribute('onclick','CopyContents(this.parentElement)');
    	//copybut.setAttribute('class','copy-button');
    copybut.onclick=function () {
  /* Get the text field */
 // var copyText = obj;
str=this.parentElement.innerHTML.replace(/<[^>]*>/g, "");;
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value =str ;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
//el.style.bottom=0;
  el.style.left = '-999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =            
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }

  /* Alert the copied text */
//  alert("Copied the text: " + str);
  //getCodeElements();
}
    //codelem.appendChild(copybut);
    codelem.parentElement.insertBefore(copybut,codelem);
  //  console.log('Test Content Script'+(++i));
}

}
getCodeElements();
