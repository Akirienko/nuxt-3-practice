export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false;
  if(!userIsLoggedIn){
    // return abortNavigation( "You are not allowed to visit /admin page!" );
    // return navigateTo("/login");
    return navigateTo({ path: "/login" });
  }
})
