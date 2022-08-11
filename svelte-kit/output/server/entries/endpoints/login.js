const target = "https://7640830.app.netsuite.com/app/login/oauth2/authorize.nl?";
const response_type = "code";
const redirect_uri = "https://localhost:3000/callback";
const scope = "restlets";
const state = "ykv2XLx1BpT5Q0F3MRPHb94j";
const client_id = "064c1116cf84b2a1345ee88782ffa7921a15d845d51bd58a707ede27a326ba4c";
async function get(request) {
  return {
    status: 302,
    headers: {
      location: `${target}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&client_id=${client_id}`
    }
  };
}
export { get };
