import React, { FC, useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import BlogPic from "../../assets/BlogPic.png";
import RealestateStrategy from "../../assets/RealestateStrategy.png";
import Threcrore from "../../assets/Threcrore.png";
import ModernHome from "../../assets/ModernHome.jpg";
import Invstcul from "../../assets/Invstcul.png";
import BIP from "../../assets/BIP.png";

const BlogPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const popularPosts = [
    {
      id: 1,
      title: "घर किन्ने बेला कुन कुरामा ध्यान दिने ?",
      date: "जुन २, २०२५",
      link: "#",
      img: RealestateStrategy,
      desc: (
        <ul className="list-disc list-outside space-y-2 text-[14px] text-gray-700 text-left pl-5">
          <li>
            <strong>कागजातको सत्यापन गर्नुहोस् — </strong> लालपुर्जा, नक्सा पास
            र स्वामित्व प्रमाणपत्र सही छ कि छैन हेर्नुहोस्।
          </li>
          <li>
            <strong> जग्गाको मापन र सीमा मिलान गर्नुहोस् —</strong> वास्तविक
            जग्गा क्षेत्रफल र कागजातमा उल्लेख फरक छैन भन्ने सुनिश्चित गर्नुहोस्।
          </li>
          <li>
            <strong>ऋण वा कानुनी विवाद छ कि छैन जाँच गर्नुहोस् —</strong> बैंकमा
            गिरवी राखिएको वा विवादित सम्पत्ति नहोस्।
          </li>
          <li>
            <strong> सडक पहुँच र सुविधाहरू हेर्नुहोस् —</strong> बाटो, बिजुली,
            पानी, ढल र बजार पहुँच सजिलो छ कि छैन मूल्याङ्कन गर्नुहोस्।
          </li>
          <li>
            <strong> घरको निर्माण गुणस्तर निरीक्षण गर्नुहोस् —</strong> घरको
            निर्माण गुणस्तर निरीक्षण गर्नुहोस् — संरचना, सिमेन्ट, फिनिसिङ र
            मर्मत आवश्यकताको मूल्याङ्कन गर्नुहोस्।
          </li>
          <li>
            <strong>
              {" "}
              वरपरको क्षेत्र र भविष्य मूल्य वृद्धि सम्भावना विचार गर्नुहोस् —
            </strong>
            स्थानको विकास योजना र बजार प्रवृत्ति अध्ययन गर्नुहोस्।
          </li>
          <li>
            <strong> कर र शुल्क विवरण बुझ्नुहोस् — </strong> सम्पत्ति कर,
            रजिष्ट्रेसन शुल्क, तथा अन्य कानुनी खर्चबारे स्पष्ट जानकारी लिनुहोस्।
          </li>
          <li>
            <strong> प्रत्यक्ष सम्झौता र रसीद सुनिश्चित गर्नुहोस् —</strong>{" "}
            मौखिक सम्झौता नगरी लिखित सम्झौता र आधिकारिक रसीद लिनुहोस्।
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "३ करोड ४० लाखदेखि सुरु भएका आकर्षक २ तले घरहरू",
      date: "मई २८, २०२५",
      link: "#",
      img: Threcrore,
      desc: (
        <ul className="list-disc list-outside space-y-2 text-[14px] text-gray-700 text-left pl-5">
          <li>
            <strong>आधुनिक निर्माण डिजाइन —</strong> आकर्षक बाहिरी र भित्री
            सजावटसहितको दुई तले घर।
          </li>
          <li>
            <strong>स्पacious बेडरुम —</strong> ३ बेडरुम र प्रत्येकमा पर्याप्त
            प्रकाश र हावा प्रवेश सुविधा।
          </li>
          <li>
            <strong>आधुनिक किचन सुविधा —</strong> स्टाइलिश किचन क्याबिनेट, बर्तन
            राख्ने सुविधा र कार्यक्षमता।
          </li>
          <li>
            <strong>सुविधाजनक सिटिङ्ग रुम —</strong> परिवार र पाहुनाका लागि
            पर्याप्त स्थान।
          </li>
          <li>
            <strong>सफा र सुरक्षित बाथरुम —</strong> आधुनिक फिटिंग र पानी निकास
            प्रणाली।
          </li>
          <li>
            <strong>पर्याप्त पार्किङ —</strong> गाडी राख्नको लागि पर्याप्त ठाउँ।
          </li>
          <li>
            <strong>सडक पहुँच र वरिपरि वातावरण —</strong> मुख्य सडकमा सजिलै
            पहुँच र शान्त वातावरण।
          </li>
          <li>
            <strong>भविष्य मूल्य वृद्धि सम्भावना —</strong> स्थानको विकास योजना
            अनुसार लगानीमा राम्रो अवसर।
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "किचन डिजाइनका नयाँ ट्रेन्डहरू",
      date: "एप्रिल १५, २०२५",
      link: "#",
      img: ModernHome,
      desc: (
        <ul className="list-disc list-outside space-y-2 text-[14px] text-gray-700 text-left pl-5">
          <li>
            <strong>मिनिमलिस्ट डिजाइन —</strong> सफा र साधारण रेखाहरू, कम भित्री
            भिजुअल क्लटर।
          </li>
          <li>
            <strong>खुला र्याक र क्याबिनेट —</strong> भान्सामा खुला र्याक र
            क्याबिनेटहरू, सजिलै पहुँच र प्रदर्शनको लागि।
          </li>
          <li>
            <strong>स्मार्ट स्टोरेज समाधान —</strong> Pull-out drawer, hidden
            compartment र बहुउपयोगी storage।
          </li>
          <li>
            <strong>पर्यावरणमैत्री सामग्री —</strong> रीसाइकल गरिएको काठ, स्टोन
            र sustainable finishing सामग्री।
          </li>
          <li>
            <strong>आधुनिक उपकरण समायोजन —</strong> Built-in oven, induction
            cooktop, smart refrigerator।
          </li>
          <li>
            <strong>रंगीन backsplash र साहसी रंगहरू —</strong> Accent wall,
            patterned tiles वा colorful backsplash।
          </li>
          <li>
            <strong>कार्यक्षम प्रकाश —</strong> Task lighting, pendant lights र
            प्राकृतिक प्रकाशको अधिकतम प्रयोग।
          </li>
          <li>
            <strong>बहुउपयोगी kitchen island —</strong> तयारी, dining, र storage
            को लागि central island।
          </li>
        </ul>
      ),
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: "जग्गा खरिद गर्दा ध्यान दिनुपर्ने ५ गल्तीहरू",
      date: "सेप्टेम्बर १२, २०२५",
      link: "#",
      img: Invstcul,
      desc: (
        <ul className="list-disc list-outside space-y-2 text-[14px] text-gray-700 text-left pl-5">
          <li>
            <strong>कागजात नजाँच्ने गल्ती —</strong> लालपुर्जा, नक्सा पास,
            स्वामित्व प्रमाणपत्र नहेरी जग्गा किन्ने गल्ती नगर्नुहोस्।
          </li>
          <li>
            <strong>मापन र सीमा नहेर्ने —</strong> जग्गाको वास्तविक मापन
            कागजातसँग मिल्दो छ कि छैन सुनिश्चित गर्नुहोस्।
          </li>
          <li>
            <strong>कानुनी विवाद नबुझ्ने —</strong> जग्गा बैंकमा गिरवी राखिएको
            वा कानुनी विवादमा त छैन भनेर पक्का गर्नुहोस्।
          </li>
          <li>
            <strong>स्थान र पहुँच नहेर्ने —</strong> सडक, बिजुली, पानी र अन्य
            आवश्यक सुविधाहरूको पहुँच जाँच गर्नुहोस्।
          </li>
          <li>
            <strong>मौखिक सम्झौता गर्ने —</strong> सबै लेनदेन र सम्झौता लिखित
            रूपमा गर्नुपर्छ, आधिकारिक रसीद लिनुहोस्।
          </li>
          <li>
            <strong>बजार मूल्य तुलना नगर्ने —</strong> वरपरका समान जग्गाहरूको
            मूल्य तुलना गरेर मात्र खरिद निर्णय गर्नुहोस्।
          </li>
          <li>
            <strong>भविष्य मूल्य वृद्धि विचार नगर्ने —</strong> क्षेत्रको विकास
            योजना र भविष्य मूल्य वृद्धि सम्भावनाको अध्ययन गर्नुहोस्।
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "घर निर्माणमा लगानी गर्दा के विचार गर्ने ?",
      date: "अगष्ट ३०, २०२५",
      link: "#",
      img: BIP,
      desc: (
        <ul className="list-disc list-outside space-y-2 text-[14px] text-gray-700 text-left pl-5">
          <li>
            <strong>बजेट योजना —</strong> निर्माणका सम्पूर्ण खर्चहरू (जग्गा,
            सामग्री, मजदुरी, अनुमति, फिनिसिङ) स्पष्ट रूपमा योजना बनाउनुहोस्।
          </li>
          <li>
            <strong>स्थान चयन —</strong> आवासीय सुविधा, सडक पहुँच, बजार र
            विद्यालय नजिकको क्षेत्र प्राथमिकता दिनुहोस्।
          </li>
          <li>
            <strong>नक्सा र डिजाइन —</strong> अनुभवी इन्जिनियर वा आर्किटेक्टबाट
            नक्सा तयार गराउनुहोस् र भविष्य आवश्यकतासँग मेल खाने सुनिश्चित
            गर्नुहोस्।
          </li>
          <li>
            <strong>निर्माण अनुमति र कानुनी प्रक्रिया —</strong> स्थानीय
            निकायबाट आवश्यक अनुमति र स्वीकृति लिएर मात्र निर्माण सुरु गर्नुहोस्।
          </li>
          <li>
            <strong>गुणस्तरीय सामग्री —</strong> सिमेन्ट, बालुवा, ढुंगा, रड आदि
            उच्च गुणस्तरको प्रयोग गर्नुहोस् ताकि दीर्घकालीन स्थायित्व रहोस्।
          </li>
          <li>
            <strong>ठेकेदार चयन —</strong> विश्वसनीय र अनुभव भएको ठेकेदार वा
            निर्माण कम्पनी चयन गर्नुहोस्, लिखित सम्झौता गर्न नबिर्सनुहोस्।
          </li>
          <li>
            <strong>समय व्यवस्थापन —</strong> निर्माण समयसीमा र चरणहरू स्पष्ट
            रूपमा निर्धारण गर्नुहोस् र अनावश्यक ढिलाइ रोक्नुहोस्।
          </li>
          <li>
            <strong>भविष्य विस्तार र मर्मत —</strong> घर विस्तार वा मर्मत गर्न
            सजिलो हुने किसिमले संरचना योजना बनाउनुहोस्।
          </li>
          <li>
            <strong>बीमा र जोखिम व्यवस्थापन —</strong> निर्माण जोखिम र प्राकृतिक
            विपद्का लागि बीमा गराउनु उपयुक्त हुन्छ।
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans relative overflow=-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 grid md:grid-cols-3 gap-8 relative">
        {/* Left Side - Article */}
        <div className="md:col-span-2">
          <div className="mb-3">
            <span className="absolute text-[11px] uppercase font-semibold tracking-wide bg-blue-700 text-white flex justify-start py-0 rounded-sm px-2">
              Property
            </span>
          </div>

          <h1 className="text-[20px] md:text-[28px] font-bold leading-snug mb-2 flex justify-start md:mt-10">
            उपत्यकामा ‘एकतले घरहरू’ बिक्रीमा: सुरुवाती मूल्य ३ करोड ४० लाख
          </h1>

          <p className="text-[12px] text-gray-500 flex justify-start p-3">
            May 28, 2025 • 5 min read
          </p>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#4267B2] hover:bg-[#365899] text-white text-[13px] font-medium px-4 py-2 rounded-sm transition"
              title="Share on Facebook"
            >
              <FaFacebookF className="text-[14px]" /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#0c8cd3] text-white text-[13px] font-medium px-4 py-2 rounded-sm transition"
              title="Share on Twitter"
            >
              <FaXTwitter className="text-[14px]" /> Twitter
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-700 w-8 h-8 rounded-sm transition"
              title="Share via other platforms"
              aria-label="Share via other platforms"
            >
              <IoAdd className="text-[18px]" />
            </a>
          </div>

          <img
            src={BlogPic}
            alt="House"
            className=" rounded-sm mb-5 h-96 w-h-96 mr-auto"
          />

          <div className="text-[18px] leading-relaxed text-gray-900 space-y-4">
            <p>
              काठमाडौं । उपत्यकामा अधिकांश घरहरू भाडामा लगाइन्छन् । यसको प्रमुख
              कारण कर्जामा घर किनेर भाडामा लगाउने परिपाटी पनि हो । तर न्यून
              बजेटमा सानो परिवारका लागि उपयुक्त घर खोज्नेहरूका लागि भने एकतले
              घरहरू उपयुक्त विकल्प हुनसक्छ । उपत्यकामा यस्ता घर पाउन मुश्किल छ ।
              यद्यपि, सीमित विकल्पका बावजुद बसोबासमा तपाईंले आकर्षक “एकतले
              घरहरू” पाउन सक्नुहुन्छ ।
            </p>
            <p>
              काठमाडौं । उपत्यकामा अधिकांश घरहरू भाडामा लगाइन्छन् । यसको प्रमुख
              कारण कर्जामा घर किनेर भाडामा लगाउने परिपाटी पनि हो । तर न्यून
              बजेटमा सानो परिवारका लागि उपयुक्त घर खोज्नेहरूका लागि भने एकतले
              घरहरू उपयुक्त विकल्प हुनसक्छ । उपत्यकामा यस्ता घर पाउन मुश्किल छ ।
              यद्यपि, सीमित विकल्पका बावजुद बसोबासमा तपाईंले आकर्षक “एकतले
              घरहरू” पाउन सक्नुहुन्छ ।
            </p>{" "}
            <p>
              काठमाडौं । उपत्यकामा अधिकांश घरहरू भाडामा लगाइन्छन् । यसको प्रमुख
              कारण कर्जामा घर किनेर भाडामा लगाउने परिपाटी पनि हो । तर न्यून
              बजेटमा सानो परिवारका लागि उपयुक्त घर खोज्नेहरूका लागि भने एकतले
              घरहरू उपयुक्त विकल्प हुनसक्छ । उपत्यकामा यस्ता घर पाउन मुश्किल छ ।
              यद्यपि, सीमित विकल्पका बावजुद बसोबासमा तपाईंले आकर्षक “एकतले
              घरहरू” पाउन सक्नुहुन्छ ।
            </p>{" "}
            <p>
              काठमाडौं । उपत्यकामा अधिकांश घरहरू भाडामा लगाइन्छन् । यसको प्रमुख
              कारण कर्जामा घर किनेर भाडामा लगाउने परिपाटी पनि हो । तर न्यून
              बजेटमा सानो परिवारका लागि उपयुक्त घर खोज्नेहरूका लागि भने एकतले
              घरहरू उपयुक्त विकल्प हुनसक्छ । उपत्यकामा यस्ता घर पाउन मुश्किल छ ।
              यद्यपि, सीमित विकल्पका बावजुद बसोबासमा तपाईंले आकर्षक “एकतले
              घरहरू” पाउन सक्नुहुन्छ ।
            </p>{" "}
            <p>
              काठमाडौं । उपत्यकामा अधिकांश घरहरू भाडामा लगाइन्छन् । यसको प्रमुख
              कारण कर्जामा घर किनेर भाडामा लगाउने परिपाटी पनि हो । तर न्यून
              बजेटमा सानो परिवारका लागि उपयुक्त घर खोज्नेहरूका लागि भने एकतले
              घरहरू उपयुक्त विकल्प हुनसक्छ । उपत्यकामा यस्ता घर पाउन मुश्किल छ ।
              यद्यपि, सीमित विकल्पका बावजुद बसोबासमा तपाईंले आकर्षक “एकतले
              घरहरू” पाउन सक्नुहुन्छ ।
            </p>{" "}
            <p>
              काठमाडौं । उपत्यकामा अधिकांश घरहरू भाडामा लगाइन्छन् । यसको प्रमुख
              कारण कर्जामा घर किनेर भाडामा लगाउने परिपाटी पनि हो । तर न्यून
              बजेटमा सानो परिवारका लागि उपयुक्त घर खोज्नेहरूका लागि भने एकतले
              घरहरू उपयुक्त विकल्प हुनसक्छ । उपत्यकामा यस्ता घर पाउन मुश्किल छ ।
              यद्यपि, सीमित विकल्पका बावजुद बसोबासमा तपाईंले आकर्षक “एकतले
              घरहरू” पाउन सक्नुहुन्छ ।
            </p>{" "}
            <p>
              काठमाडौं । उपत्यकामा अधिकांश घरहरू भाडामा लगाइन्छन् । यसको प्रमुख
              कारण कर्जामा घर किनेर भाडामा लगाउने परिपाटी पनि हो । तर न्यून
              बजेटमा सानो परिवारका लागि उपयुक्त घर खोज्नेहरूका लागि भने एकतले
              घरहरू उपयुक्त विकल्प हुनसक्छ । उपत्यकामा यस्ता घर पाउन मुश्किल छ ।
              यद्यपि, सीमित विकल्पका बावजुद बसोबासमा तपाईंले आकर्षक “एकतले
              घरहरू” पाउन सक्नुहुन्छ ।
            </p>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <div className="relative">
          <div className="sticky top-6">
            <div>
              <h3 className="text-[16px] font-semibold border-b border-gray-300 pb-2 mb-3 flex justify-start">
                Popular Posts
              </h3>
              <div className="space-y-6">
                {popularPosts.map((post, idx) => (
                  <div
                    key={idx}
                    onClick={() => handlePostClick(post)}
                    className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded-md transition cursor-pointer"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-16 h-14 object-cover rounded-sm border"
                    />
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-800 leading-snug hover:text-orange-600 flex items-start">
                        {post.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 flex justify-start">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-[16px] font-semibold border-b border-gray-300 pb-2 mb-3 flex justify-start">
                Latest Posts
              </h3>
              <div className="space-y-4">
                {latestPosts.map((post, idx) => (
                  <div
                    key={idx}
                    onClick={() => handlePostClick(post)}
                    className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded-md transition cursor-pointer"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-16 h-14 object-cover rounded-sm border"
                    />
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-800 leading-snug hover:text-orange-600 ">
                        {post.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 flex justify-start">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-[14px] font-semibold text-gray-800 mb-4 flex justify-start">
                Discover more
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Real estate investment courses",
                  "Apartment complex directory",
                  "Real Estate",
                  "Lalitpur",
                  "CG Lakeview",
                  "Housing Market Analysis",
                  "Home Rental Services",
                  "Real Estates",
                ].map((tag, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-[12px] border border-gray-300 text-blue-700 hover:bg-blue-100 px-3 py-1 rounded-full transition flex items-center gap-1"
                  >
                    <span className="text-[13px]">+</span> {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-300 ${
          isPopupOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closePopup}
      >
        <div
          className={`absolute top-0 right-0 w-full sm:w-[480px] h-screen bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isPopupOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closePopup}
            className="text-gray-600 hover:text-gray-800 text-2xl absolute right-5 top-3 z-50"
          >
            ×
          </button>

          {selectedPost && (
            <div className="p-6 mt-12 overflow-y-auto h-full">
              <img
                src={selectedPost.img}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-[18px] font-semibold mb-2">
                {selectedPost.title}
              </h2>
              <p className="text-[12px] text-gray-500 mb-3">
                {selectedPost.date}
              </p>
              <pre className="whitespace-pre-wrap text-[14px] text-gray-700 text-left">
                {selectedPost.desc}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
