import type { PageServerLoad, Actions } from './$types';


export const load = (async ({ cookies }) => {
    console.log({ cookies: cookies.getAll() })
    return {
        session: {} // You can also use your old `getSession` function if you wish.
    };
}) satisfies PageServerLoad;


export const actions: Actions = {
    setTheme: async ({ cookies, url }) => {
        const theme = url.searchParams.get('theme');
        console.log({ theme });
        return { success: true };
    },
} satisfies Actions;
