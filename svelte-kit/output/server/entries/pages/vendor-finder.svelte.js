import { c as create_ssr_component, i as is_promise, n as noop, e as escape } from "../../chunks/index-5a01da57.js";
async function load({ session }) {
  return {
    props: { access_token: session.access_token }
  };
}
const restlet_url = "https://cors-anywhere.herokuapp.com/https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=755&deploy=1&record_type=employee&record_id=-5";
const Vendor_finder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { access_token } = $$props;
  async function getData() {
    return JSON.stringify(await fetch(restlet_url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`
      }
    }).then((r) => r.json()));
  }
  if ($$props.access_token === void 0 && $$bindings.access_token && access_token !== void 0)
    $$bindings.access_token(access_token);
  return `<main>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        <h2>Loading...</h2>
        `;
    }
    return function(post) {
      return `
        <p>${escape(post)}</p>
    `;
    }(__value);
  }(getData())}</main>`;
});
export { Vendor_finder as default, load };
