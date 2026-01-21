import SiteHeader from "../components/siteheader";
import SiteFooter from "../components/sitefooter";
import ChatBot from "../components/ChatBot";
import ScrollToTop from "../components/ScrollToTop";

const SiteLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <ChatBot />
    </>
  );
};

export default SiteLayout;
