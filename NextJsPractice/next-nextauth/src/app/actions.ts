"use server";

import { signIn, signOut } from "@/services/AuthService";

export const signOutUser = async () => {
    await signOut();
}

export const signInByCredentials = async (formData: FormData) => {
    try {
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        });
        return {
            ok: true,
            message: ''
        }
        return res;
    } catch(err: any) {
        return {
            ok: false, 
            message: 'Invalid credentials'
        };
    }
    
}