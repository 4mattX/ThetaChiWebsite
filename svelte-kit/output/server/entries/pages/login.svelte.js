import { c as create_ssr_component } from "../../chunks/index-5a01da57.js";
async function load({ session }) {
  return {
    props: {
      token_expiration: session.token_expiration
    }
  };
}
function getDate() {
  return new Date().getTime();
}
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { token_expiration } = $$props;
  if (getDate() - token_expiration >= 3600)
    ;
  if ($$props.token_expiration === void 0 && $$bindings.token_expiration && token_expiration !== void 0)
    $$bindings.token_expiration(token_expiration);
  return ``;
});
export { Login as default, load };
