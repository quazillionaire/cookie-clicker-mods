javascript:(()=>{'use strict';Game.registerMod("shinyImmunity",{init:function(){Game.CollectWrinklers=function(){for(let i in Game.wrinklers){let w=Game.wrinklers[i];if(w.type!==1)w.hp=0}};Game.PopRandomWrinkler=function(){let candidates=[];for(let i in Game.wrinklers){let w=Game.wrinklers[i];if(w.phase>0&&w.hp>0&&w.type!==1)candidates.push(w)}if(candidates.length>0){let choice=choose(candidates);choice.hp=-10;return choice}return false}}});})();