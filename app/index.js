import makeFacebookPixel from "./facebookPixel";
import makeGoogleAnalytics from "./googleAnalytics";

export const app = makeApp({
  FBPixel: { ID: "152464016914795" },
  GAPixel: {
    ID: "G-1ZTFK10WBX",
    tags: ["AW-342957453"],
  },
});

function makeApp({ FBPixel, GAPixel } = {}) {
  let FacebookPixel = null,
    GoogleAnalytics = null;

  function initialize() {
    if (typeof window == "undefined" && typeof document == "undefined") {
      return;
    }

    if (!FacebookPixel) {
      FacebookPixel = makeFacebookPixel(FBPixel);
      FacebookPixel.initialize();
      FacebookPixel.track("PageView");
    }

    if (!GoogleAnalytics) {
      GoogleAnalytics = makeGoogleAnalytics(GAPixel);
      GoogleAnalytics.initialize();
    }
  }

  function goToWhatsapp({ message } = {}) {
    if (FacebookPixel) {
      FacebookPixel.track("Contact");
    }

    if (GoogleAnalytics) {
      GoogleAnalytics.reportConversion("AW-342957453/XrJYCOrov9ECEI27xKMB");
    }

    window.open(
      `https://api.whatsapp.com/send?phone=5521995758923&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  return Object.freeze({
    initialize,
    goToWhatsapp,
  });
}
