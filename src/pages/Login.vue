<template>

 
<div id="newSplash">

  <div class="wrapper_new">
   

 <div class="main_login">
 
			<div class="login-form">
					
					
						<div class="head" align="center">
										<img src="@/assets/img/logo.svg" alt="user-profile" class="img_login_ipr">
									</div>	
					
									<h1>Cooperativa de Servicios <br> Mar del Plata</h1>				
			<form  method="POST" v-on:submit="$_login_submit">
			<div class="form-group">
			<input v-autofocus id="email" required="required" v-model="credentials.user" class="form-control" type="email" placeholder="Ingresa tu correo electrónico">
			</div>
			
			<div class="form-group cont_pass">
	<input  id="password" required="required" v-model="credentials.password"  :type="passwordType" class="form-control more_margin" placeholder="Ingresa tu contraseña">
	<div class="btn_eye" style="margin-top: -60px;">
	<img  :src="[passwordIcon]" @click="hidePassword = !hidePassword" class="img_info"> 
	</div>
</div>
			

				<div class="alert alert-danger" v-if="error">
					<img src="@/assets/img/error.svg" alt="error" class="img_info"> {{error}}
				</div>

				<div class="alert alert-danger" v-if="$route.params.error_message">
					<img src="@/assets/img/error.svg" alt="error" class="img_info"> {{$route.params.error_message}}
				</div>

				<div class="alert alert-success" v-if="$route.params.success_message">
					<img src="@/assets/img/exito.svg" alt="exito" class="img_info"> {{$route.params.success_message}}
				</div>
			
			<input type="submit" value="ACCEDER" class="btn btn-rounded btn_login-new btn-block"/>
			</form>
			
			
			   <div class="copy-login">
		
			<p>
			<router-link to="/resetear-clave">¿Olvidaste tu contraseña?</router-link>
			<br><br>
			<router-link to="/asistencia">¿No puedes ingresar?</router-link>
			</p> 
			
				<div class="footer-image">
				<img src="@/assets/img/ego.svg"  class="siwca-profile" alt="siwca-profile-pic">
				</div>	
			</div>
			
			
			
			
		
		  </div>
		  
		  
		 
		  
		  
						  
</div>
		  
		    
		
		
			
			

		</div>

		  </div>
  
</template>

<script>

export default {
	name: 'login',
	props: ['referrer'],
	data: function()
	{
		return {
			hidePassword: true,
			credentials:
			{
				user: null,
				password: null
			},
			error: null
		}
	},
	computed: {
      passwordType() {
        return this.hidePassword ? 'password' : 'text'
      },
      passwordIcon() {
        return this.hidePassword ? require('@/assets/img/ojo abierto.svg') : require('@/assets/img/ojo cerrado.svg')
      }
    },
	methods: {
		$_login_submit(e)
		{
			e.preventDefault();

			var login = this;

			this.login(this.credentials.user, this.credentials.password)
			.then(async (user_data) =>
			{

				try
				{
					await this.$store.dispatch('runFirstLoad');
					login.$router.push('/');
				}
				catch(err)
				{
				}

		
			})
			.catch(function(err)
			{
				//console.log(err);

				const INVALID_CREDENTIALS = 'Los datos ingresados son incorrectos';
				const NO_PERMISSIONS      = 'No tiene permisos para ingresar al sitio';

				switch(err.code)
				{
					case 'PASSWORD_CHANGE':
						login.$router.push('/confirmar-clave/username/'+err.user);
						break;
					case 'NotAuthorizedException':
						login.error = INVALID_CREDENTIALS;
						break;
					case 'UserNotFoundException':
						login.error = INVALID_CREDENTIALS;
						break;
					default:
						login.error = NO_PERMISSIONS;
						break;
				}

			});
		}
	}
}
</script>
<style lang="scss" scoped>
#newSplash {
	 height: 100vh;
    width: 100vw;
    background-size: cover;
    background: #03876c;
	background-size: 100% 100%;
}
</style>
