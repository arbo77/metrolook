(function($){
  opt  = {
		lazyInit: true,
		theme: 'dark',
		column: 4
	}
	
	$.fn.metro = function(options){
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;
		a = ".box"; b = ".b25"; c = ".h50"; d = ".b50";
		e = ".b30"; f = ".h60"; g = ".b60"; h = "body";
		i = ".metro"; j = ".inner"; k = "img.bg"; l = " ";
		m = ".b100"; n = ".bg-pull-h"; o = ".fit-height";
		p = ".using-bg"; q = ".text"; r = ".vcenter"; s = ".hcenter";
		
		$.extend(opt, options)
		
		switch(opt.column){
			case 4 :
				$(a).height($(b).width())
				$(c).height($(d).width())
				break;
				
			case 3 :
				$(a).height($(e).width())
				$(f).height($(g).width())
				$(m).width((33*3)+"%")
				break;
		}
		
		$(o).css("height","auto")
		
		switch(opt.theme){
			case 'dark':
				$(h).css("background","#393939")
					.css("color","#C8C8C8")
				break;
				
			case 'light':
				$(h).css("background","#FFFFFF")
					.css("color","#393939")
				
			case 'blue':
				$(h).css("background","#1F2C70")
					.css("color","#E3E9F0")
		}
		
		$(i.concat(l, a)).each(function(){
			var iel = $("<div class='inner'><div class='text'>"+$.trim($(this).html())+"</div></div>");
			$(this).html(iel)
		})
		
		$(i.concat(l,a,l,k)).each(function(){
			var parent = $(this).parent().parent()
			$(parent).css("background-image","url("+this.src+")")
					 .addClass(p.replace(".",""))
			$(this).bind("load",function(){
				var bgh = ((this.height < this.width) && ($(parent).height() >= $(parent).width()))
						? n.replace(".","") : l;
				$(parent).addClass(bgh)
				$(this).remove()
			})
		})
		
		$(r.concat(l,q)).each(function(){
			$(this).css("margin-top",($(this).parent().height()-$(this).height())/2)
		})
	}
	
	if(opt.lazyInit){
		$(document).ready(function(){
			$("*[class^='metro-']").each(function(){
				c = this.className.split('-')
				opt.column = parseInt(c[1])
				if(c.length == 3){
					opt.theme = c[2]
				}
				$(this).addClass(opt.theme)
			}).addClass("metro")
			$().metro()
		})
	}
	
	$(window).resize(function(){
		window.location.reload();
	});
	
})( jQuery )
