export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser();

  if (user.value) {
    return;
  }

  const destinationUrl =
    to.path === "/" ? "/login" : `/login?redirect=${to.path}`;
  return navigateTo(destinationUrl);
});
