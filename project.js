// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
	alexaSkill: {
		nlu: {
			name: 'alexa',
		},
		manifest: {
			publishingInformation: {
			   locales: {
				  'en-US': {
					 name: 'Dynamic Entity Test',
					 summary: "Testing to load dynamic entities upon launch and clear upon end of session",
					 description: "Testing to load dynamic entities upon launch and clear upon end of session",
					 examplePhrases: [
						 "Alexa open dynamic entities"
					 ]
				  }
			   },
			},
		 },
		 languageModel: {
			 'en-US': {
				 invocation: 'dynamic entities',
			 },
		 },
	},
	endpoint: '${JOVO_WEBHOOK_URL}',
 };