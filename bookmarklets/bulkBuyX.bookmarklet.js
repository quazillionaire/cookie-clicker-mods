javascript:(()=>{'use strict';Game.registerMod("bulkBuyX",{curVal:null,btnX:null,storeBulkButtonClick:id=>{let MOD=Game.mods["bulkBuyX"];if(id===null||id===undefined){if(Game.buyBulk===1)l("storeBulk1").classList.remove("selected");if(Game.buyBulk===10)l("storeBulk10").classList.remove("selected");if(Game.buyBulk===100)l("storeBulk100").classList.remove("selected");if(Game.buyBulk===-1)l("storeBulkMax").classList.remove("selected");MOD.btnX.classList.add("selected");MOD.updateBulk();PlaySound("snd/tick.mp3")}else{Game.storeBulkButton(id);MOD.btnX.classList.remove("selected")}},updateBulk:()=>{let MOD=Game.mods["bulkBuyX"];if(!MOD.btnX.classList.contains("selected"))return;let x=Number.parseInt(MOD.btnX.value);if(MOD.btnX.value===""){MOD.curVal="";Game.buyBulk=0}else if(!/\D/.test(MOD.btnX.value)&&Number.isInteger(x)&&Number.isFinite(x)&&x>=0&&x<=1E3){MOD.curVal=x;Game.buyBulk=x}else{MOD.btnX.value=MOD.curVal;return}Game.storeToRefresh=1},init:()=>{let MOD=Game.mods["bulkBuyX"];MOD.curVal=50;let btnX=document.createElement("input");btnX.setAttribute("type","text");btnX.setAttribute("id","storeBulkX");document.querySelectorAll(".storeBulkAmount").forEach(btn=>{let id;switch(btn.innerHTML.toLowerCase()){case "buy":case "sell":return;case "1":id=2;btn.style.width="42px";break;case "10":id=3;btn.style.width="42px";break;case "100":id=4;btn.style.width="42px";break;case "all":id=5;btn.style.width="32px";break}btn.setAttribute("onclick",`Game.mods['${MOD.id}'].storeBulkButtonClick(${id})`)});btnX.className="storePreButton storeBulkAmount";btnX.style.width="48px";btnX.style.fontFamily="Tahoma";btnX.style.fontSize="14px";btnX.style.fontWeight="bold";btnX.style.textAlign="center";btnX.style.background="none";btnX.style.color="#fff";btnX.style.height="7px";btnX.style.margin="2px 10px 0 10px";btnX.style.outline="none";btnX.value=MOD.curVal;btnX.setAttribute("onclick",`Game.mods['${MOD.id}'].storeBulkButtonClick()`);btnX.setAttribute("oninput",`Game.mods['${MOD.id}'].updateBulk()`);l("storeBulk").insertBefore(btnX,l("storeBulkMax"));MOD.btnX=btnX},save:()=>{let MOD=Game.mods["bulkBuyX"];return MOD.curVal.toString()},load:str=>{let MOD=Game.mods["bulkBuyX"];MOD.curVal=str;MOD.btnX.value=MOD.curVal}});})();