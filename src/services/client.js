import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export function getUser() {
  return client.auth.user();
}

export async function signUpUser(email, password) {
  return await client.auth.signUp({
    email,
    password,
  });
}

export async function signInUser(email, password) {
  return await client.auth.signIn({
    email,
    password,
  });
}

export async function signOutUser() {
  await client.auth.signOut();
}
