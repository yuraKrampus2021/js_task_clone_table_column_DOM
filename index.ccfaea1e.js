document.querySelectorAll("tr").forEach(function(e){var t=null,n=Array.from(e.children).some(function(e){return"TH"===e.tagName}),r=e.children[1].textContent;n?(t=document.createElement("th")).textContent=r:(t=document.createElement("td")).textContent=r,e.children[e.children.length-1].before(t)});
//# sourceMappingURL=index.ccfaea1e.js.map
