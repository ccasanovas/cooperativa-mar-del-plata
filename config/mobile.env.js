module.exports =
	{

		// Environment name

		NODE_ENV: 					'"mobile"',

		// Cognito configuration

		COGNITO_USER_POOL_ID: 		'"us-east-1_V4WXIONB8"',
		COGNITO_CLIENT_ID: 			'"4r086adjug759eiclmj9obibdn"',

		// Microservices URLs

		NOTIFICATION_SERVICE_URL: 	'"https://notifications.coope.siwca.com.ar/v1"',
		CORE_SERVICE_URL: 			'"https://api.coope.siwca.com.ar/v1"',
		API_SERVICE_URL: 			'"https://api.siwca.com.ar/sysusers/services/coope/partners/uploadFiles"',
		API_SERVICE_NO_USER_URL: 	'"https://api.siwca.com.ar/sysusers/services/coope/partners"',
		PDF_SERVICE_URL: 			'"https://pdfmerge.siwca.com.ar"',

		// Administration chat refresh (unit: seconds)

		CHAT_TIME_REFRESH: 			10,

		// Background refresh (unit: seconds)

		BACKGROUND_ACTIONS_REFRESH: 	60

	}
