
export class Articulo  {
	
title: string;
link: string;
votes?: number;


	constructor(t:string,l:string,v?:number) {
		this.title=t;
		this.link=l;
		this.votes=v||0;
	}



voteUp(){
  this.votes+=1;
}


voteDown(){
	if(this.votes<=0)
		this.votes=0;
	else
		this.votes-=1;
}

 domain(): string{

 	try{

 		const cadenaDominio= this.link.split('//')[1];

 		return cadenaDominio.split('/')[0];

	 	}
	catch(err){
		return null;
	}


 }


}