import '../Footer/footer.css';

function Footer() {
  return (
    <footer id="bottom-footer">
        <span>Copyright © 2023 Coyote Logistics. All rights reserved.</span>
        <div>
              <a href="https://coyote.com/terms-privacy/?_gl=1%2A28lmfw%2A_ga%2AMTIyODYwODcxMC4xNjkyODk4OTg0%2A_ga_LPFNEQRFFX%2AMTY5OTI2ODc1Ny4yLjAuMTY5OTI2ODc1Ny42MC4wLjA.#webterms" className="footer-link" target="_blank">Terms of Use</a>
                  <span className="divide">|</span>
              <a href="https://coyote.com/terms-privacy/?_gl=1%2A28lmfw%2A_ga%2AMTIyODYwODcxMC4xNjkyODk4OTg0%2A_ga_LPFNEQRFFX%2AMTY5OTI2ODc1Ny4yLjAuMTY5OTI2ODc1Ny42MC4wLjA.#privacy" className="footer-link" target="_blank">Privacy Policy</a>
                  <span className="divide">|</span>
              <a href="https://auth.coyote.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fauthority%3Dhttps%253A%252F%252Fauth.coyote.com%26client_id%3Dcoyote_connect_client%26redirect_uri%3Dhttps%253A%252F%252Fgo.coyote.com%252F%26response_type%3Did_token%2520token%26scope%3Dhttps%253A%252F%252Fgo.coyote.com%252F%2520openid%2520APIM.UnauthenticatedTracking%2520WebOfferNegotiator.RealTimeUpdates%2520Adhoc.Api.FullAccess%2520procurement.crm%2520CTM.SelfService%2520Coverage.SmartRoutes.Web.Api.FullAccess%2520Coyote.Procurement.Spot%2520Coyote.Procurement.Carrier.Search%2520Proc.Fac.Assoc.Api.FullAccess%2520Coyote.Procurement.Data.Load%2520Systems.LocationSearch.Web.Api.FullAccess%2520CTM.RoutingGuide.Tendering%2520CTM.Matching.FullAccess%2520TrailerPoolManagement.FullAccess%2520Coyote.Coverage.DedicatedCarrierSignup.Web.Api.FullAccess%2520ShipperApi%2520Finance.AutoVoucher.Web.Api.FullAccess%2520%26post_logout_redirect_uri%3Dhttps%253A%252F%252Fgo.coyote.com%252F%26state%3D%252F%26nonce%3Dhttps%253A%252F%252Fgo.coyote.com#" className="footer-link" target="_blank">Cookie Settings</a>
        </div>
        <span className="coyote_number">877-6-COYOTE</span>
    </footer>
  );
}

export default Footer;