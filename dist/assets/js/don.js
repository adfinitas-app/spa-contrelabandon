"use strict";$(document).ready((function(){var e=$(".bloc-don.1"),r=$(".bloc-don.2"),d=$(".bloc-don.3"),o=$(".bloc-don-free"),a=$(".equivalence-don").find(".button-don"),n={once:{bloc1:{"don-amount":1,"don-soit":2,"don-text":3},bloc2:{"don-amount":1,"don-soit":2,"don-text":3},bloc3:{"don-amount":1,"don-soit":2,"don-text":3}},regular:{bloc1:{"don-amount":10,"don-soit":"3,40","don-text":"Vous contribuez à nourrir les animaux abandonnés que nous recueillons."},bloc2:{"don-amount":15,"don-soit":"5,10","don-text":"Vous participez à la prise en charge vétérinaire d’animaux blessés ou malades."},bloc3:{"don-amount":30,"don-soit":"19,20","don-text":"Vous financez l’étude comportementale de 5 animaux pour les aider à se remettre du choc de l’abandon."}}},t=0,i=parseQueryStrings();var u=function(e){if(!i)return!1;for(var r=0;r<i.length;r++)if(i[r][0]===e)return i[r][1];return!1}("reserved_code_media");function c(e,r,d){e.find(".don-amount").children("span").text(n[r][d]["don-amount"]),e.find(".soit").children("span").text(n[r][d]["don-soit"]),e.find(".don-text").text(n[r][d]["don-text"]),addOrModifyQueryParameter(e,"amount",100*+n[r][d]["don-amount"],"href")}u&&"W20F"===u.slice(0,4)?(n.once={bloc1:{"don-amount":84,"don-soit":29,"don-text":"Vous nourrissez un chien victime d'abandon pendant 6 mois."},bloc2:{"don-amount":120,"don-soit":41,"don-text":"Vous prenez en charge ses frais vétérinaires pendant 6 mois."},bloc3:{"don-amount":160,"don-soit":54,"don-text":"Vous financez la prise en charge totale d’un chien victime d’abandon pour qu’il soit adopté."}},t=223,addOrModifyQueryParameter(e,"cid","223","href"),addOrModifyQueryParameter(r,"cid","223","href"),addOrModifyQueryParameter(d,"cid","223","href"),addOrModifyQueryParameter(a,"cid","223","href")):(n.once={bloc1:{"don-amount":60,"don-soit":20,"don-text":"Prend en charge la nourriture et les soins d’un chat abandonné pendant 2 mois."},bloc2:{"don-amount":90,"don-soit":31,"don-text":"Vous financez l’étude comportementale d’un animal traumatisé par l'abandon pour qu’il retrouve une famille."},bloc3:{"don-amount":120,"don-soit":41,"don-text":"Permet de soigner pendant 6 mois un chien victime d’abandon . "}},u?(addOrModifyQueryParameter(e,"reserved_code_media",u,"href"),addOrModifyQueryParameter(r,"reserved_code_media",u,"href"),addOrModifyQueryParameter(d,"reserved_code_media",u,"href"),addOrModifyQueryParameter(a,"reserved_code_media",u,"href")):(addOrModifyQueryParameter(e,"reserved_code_media","W20PD0ZZL","href"),addOrModifyQueryParameter(r,"reserved_code_media","W20PD0ZZL","href"),addOrModifyQueryParameter(d,"reserved_code_media","W20PD0ZZL","href"),addOrModifyQueryParameter(a,"reserved_code_media","W20PD0ZZL","href")),t=224,addOrModifyQueryParameter(e,"cid","224","href"),addOrModifyQueryParameter(r,"cid","224","href"),addOrModifyQueryParameter(d,"cid","224","href"),addOrModifyQueryParameter(a,"cid","224","href")),$("#input-free-amount").on("input",(function(){var e=$(this).val();if(e&&!isNaN(e)){var r=parseFloat(e),d=(.34*r).toFixed(2);o.find(".soit").children("span").text(d),addOrModifyQueryParameter(a,"free_amount","1","href"),addOrModifyQueryParameter(a,"amount",100*+r,"href")}})),$('input[name="frequency"]').on("change",(function(){var o;o=$(this).val(),addOrModifyQueryParameter(e,"frequency",o,"href"),addOrModifyQueryParameter(r,"frequency",o,"href"),addOrModifyQueryParameter(d,"frequency",o,"href"),addOrModifyQueryParameter(a,"frequency",o,"href"),c(e,o,"bloc1"),c(r,o,"bloc2"),c(d,o,"bloc3"),"once"===o?(addOrModifyQueryParameter(e,"cid",t,"href"),addOrModifyQueryParameter(r,"cid",t,"href"),addOrModifyQueryParameter(d,"cid",t,"href"),addOrModifyQueryParameter(a,"cid",t,"href")):"regular"===o&&(addOrModifyQueryParameter(e,"cid","227","href"),addOrModifyQueryParameter(r,"cid","227","href"),addOrModifyQueryParameter(d,"cid","227","href"),addOrModifyQueryParameter(a,"cid","227","href"))})),$('input[name="frequency"].1').prop("checked","true").trigger("change")}));