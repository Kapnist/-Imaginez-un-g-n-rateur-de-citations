//on crée une fonction generateur qui contien nos phrases
function generateur(nombre){
	var citationDeDebut, citationDeMilieu, citationDeFin;
	var randomSujet,randomVerbe,randomComplement,randomComplement1;
	if (nombre=="1") {
		citationDeDebut=["Papa","Maman","Gabrielle","Patrick","johny allyday"];
		citationDeMilieu=["conduit","a cassé","netoie","repare","demare"];
		citationDeFin=["sa voiture","la moto de son ami","la limousine presidentielle","sa vielle becane","sa cadillaque"];
		citationfinale=["pour l'avenir de ses enfants"," à cause de moi","car l'occasion fait le laron","cet été","pour se faire plaisir"];
	}else if (nombre=="2") {
		citationDeDebut=["La poule","Le cochon","Le lapin","Le chien","la licorne"];
		citationDeMilieu=["adore","rechauffe","bouffe","caresse","joue avec"];
		citationDeFin=["ses petits","les animaux de la voisine","les croquette du chat","la mami de l'immeuble","le rat","le lion"];
		citationfinale=["car c'est un instin"," à cause de moi","car l'occasion fait le laron","comme un humain","pour se faire plaisir"];
	}//on attribut des valeurs à nos differentes variables.
	randomSujet=citationDeDebut[Math.floor(Math.random()*(citationDeDebut.length-1))];
	randomVerbe=citationDeMilieu[Math.floor(Math.random()*(citationDeMilieu.length-1))];
	randomComplement=citationDeFin[Math.floor(Math.random()*(citationDeFin.length-1))];
	randomComplement1=citationfinale[Math.floor(Math.random()*(citationfinale.length-1))];
	var citation=randomSujet+" "+randomVerbe+" "+randomComplement+" "+randomComplement1+".";
	console.log(citation);
}
		//on fait appel a notre fonction
function start(){
			var choix=Number(prompt("Faite un choix entre les citations 1 et les citations 2"));
 // ammener notre utilisateur a entrer uniquement un nombre
	// ajouter notre condition pour limiter le nombre de citation à 5
	do{
		var nombre=Number(prompt("Combien de citations voulez vous? 1,2,3,4ou 5"));
} 	while(!((nombre<= 5)&&(nombre>0))) ;
	console.log(nombre);
		for (var i =0; i < nombre; i++){
			generateur(choix)
}
}
start();

