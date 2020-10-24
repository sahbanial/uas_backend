const errorsMessages = {
	invalidEmail: "L'adresse email n'est pas valide ",
	userNotFound: 'Utilisateur introuvable ',
	accountAlReadyExists: 'Ces identifiants existent déjà ',
	isNotAnImage: 'Veuillez choisir une image ',
	auth: {
		userNotFound: 'Utilisateur introuvable ',
		invalidPassword: "Ce mot de passe n'est pas valide ",
		incorrectPassword: 'Mot de passe incorrecte ',
		invalidConf: 'Les mots de passe ne sont pas identiques ',

		invalidCode: 'Code incorrecte ',
		unAuthorized: 'Accès non autorisé',
		emailAlreadyUsed: 'Adresse email déjà utilisée '
	},
	product: {
		productNotFound: "Produit n'existe pas "
	},
	payment: {
		cardNotValid: 'Données de la carte non valide'
	},
	command: {
		commandNotFound: "Commande n'est pas existe",
		stuart: {
			createdJobError: 'stuart error create job',
			notValidJob: 'stuart not valid job '
		}
	}
};
export default errorsMessages;
