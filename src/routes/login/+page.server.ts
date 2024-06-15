import { error, fail, redirect } from "@sveltejs/kit";
import { validateData } from "$lib/utils";
import { loginUserSchema } from "$lib/schemas";
import { oauthState, oauthVerifier, oauthProvider} from '$lib/store';

  
export const actions = {
	login: async ({ request, locals}) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			loginUserSchema,
		);


		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			});
		}

		try {
			await locals.pb
				.collection("users")
				.authWithPassword(formData.email, formData.password);
			
			
			/*
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true,
				};
			}
			*/
		} catch (err) {
			console.log("Error: ", err);
			error(err.status, err.message);
		}

		redirect(301, "/");


	},
	
	oauth2: async ( { url, locals, request, cookies }) => {
		const authMethods = await locals?.pb?.collection('users')?.listAuthMethods();

		const data = await request?.formData();
		const providerSelected = data?.get('provider');

		if (!authMethods) {
            return {
                authProviderRedirect: '',
                authProviderState: ''
            };
        }
        const redirectURL = `${url.origin}/oauth`;
		
		const targetItem = authMethods.authProviders?.findIndex(item => item?.name === providerSelected );
	
		//console.log("==================")
		//console.log(authMethods.authProviders)
		//console.log('target item is: ', targetItem)

        const provider = authMethods.authProviders[targetItem];
        const authProviderRedirect = `${provider.authUrl}${redirectURL}`;
        const state = provider.state;
        const verifier = provider.codeVerifier;

		cookies.set('state', state, {httpOnly: true,
			sameSite: 'lax',
			secure: true,
			path: '/',
			maxAge: 60*60
	  	});

		cookies.set('verifier', verifier, {httpOnly: true,
			sameSite: 'lax',
			secure: true,
			path: '/',
			maxAge: 60*60
		});

		cookies.set('provider', providerSelected, {httpOnly: true,
			sameSite: 'lax',
			secure: true,
			path: '/',
			maxAge: 60*60
		});

		cookies.set('path', "/", {httpOnly: true,
			sameSite: 'lax',
			secure: true,
			path: '/',
			maxAge: 60
	  	});
		


		redirect(302,authProviderRedirect);

	}
	
};