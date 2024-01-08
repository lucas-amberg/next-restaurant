import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: '/admin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isViewingReservations = nextUrl.pathname.startsWith('/admin/reservations');
      const isViewingLogin = nextUrl.pathname.startsWith('/admin');
      if (isViewingReservations) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isViewingLogin && isLoggedIn) {
        return Response.redirect(new URL('/admin/reservations', nextUrl));
      }
      else if (isLoggedIn && !isViewingReservations) {
        return true;
      }
      return true
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
