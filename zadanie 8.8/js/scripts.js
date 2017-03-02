function rysujChoinke(n) {
	for (i=0 ;  i< n ; i++) {
		var star="";
		console.log("i:",i);
		for(j=0 ; j< 2*i+1; j++){
			star += '*';
			console.log("j:",j);
		}
		console.log(star);
	}
}
rysujChoinke(5);
/*
i=0, 1*
i=1, 3*
i=2, 5*
*/