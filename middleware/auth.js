export default function (context) {
  if (!context.store.getters.isAutheticated) {
    context.redirect("/user/login");
  }
}
