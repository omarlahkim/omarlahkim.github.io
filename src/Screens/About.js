import React, { lazy, Suspense } from "react";
import "../Styles/styles.css";

const AboutItems = lazy(() => import("../Components/about-items"));

const renderLoader = () => <p>Loading</p>;

function About() {
  const informations = [
    {
      type: "Education",
      emoji: "🎓",
      data: [
        {
          title: "Bachelor of Science in Computer Science",
          logo:
            "https://www.supinfo.com/SupInfoCommonResources/SUPINFO-PICTURES/Charte/Logo%20SUPINFO%20horizontal%20-%20Noir%20sur%20Transparent.gif",
          name: "SUPINFO INTERNATIONAL UNIVERSITY",
          start: "2016",
          end: "2019",
          description: "",
        },
        {
          title: "Master of Science in Software Engineering",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Al_Akhawayn_University_Logo.png",
          name: "AL AKHAWAYN UNIVERSITY IN IFRANE",
          start: "2020",
          end: "Present",
          description: "",
        },
      ],
    },
    {
      type: "Internship",
      emoji: "👨🏻‍💻",
      data: [
        {
          title: "Web Developer",
          logo:
            "https://mobiletic.com/wp-content/uploads/2020/03/cropped-MobileTic-1-1.png",
          name: "MOBILETIC",
          start: "Jul 2017",
          end: "Sep 2017",
          description: "",
        },
        {
          title: "Web Developer",
          logo:
            "https://pluspng.com/img-png/doctor-symbol-png-download-doctor-symbol-caduceus-png-images-transparent-gallery-advertisement-3029.png",
          name: "DR LAHKIM MOHAMED",
          start: "Jan 2018",
          end: "Feb 2018",
          description: "",
        },
        {
          title: "Product Designer",
          logo:
            "https://www.econostic.com/sites/default/files/logo-econostic-open-expertise.png",
          name: "ECONOSTIC",
          start: "Jan 2019",
          end: "Feb 2019",
          description: "",
        },
        {
          title: "Mobile Developer",
          logo:
            "https://www.econostic.com/sites/default/files/logo-econostic-open-expertise.png",
          name: "ECONOSTIC",
          start: "Jan 2019",
          end: "Feb 2019",
          description: "",
        },
      ],
    },
    {
      type: "Entrepreneurship",
      emoji: "💼",
      data: [
        {
          title: "Content Creator",
          logo: "https://pngimg.com/uploads/youtube/youtube_PNG21.png",
          name: "YOUTUBE",
          start: "2015",
          end: "2018",
          description: "",
        },
        {
          title: "Dropshipping",
          logo: "https://www.ebay.co.jp/image/preview/20200126230759_860.png",
          name: "EBAY",
          start: "2019",
          end: "2020",
          description: "",
        },
        {
          title: "Co-founder & CTO",
          logo:
            "https://digitcoop.com/wp-content/uploads/2020/10/Logo-ColorBlack@3x.png",
          name: "DIGITCOOP",
          start: "2020",
          end: "present",
          description: "",
        },
      ],
    },
    {
      type: "Volunteerism",
      emoji: "🙌🏻",
      data: [
        {
          title: "Community Geofilters Designer",
          logo:
            "https://upload.wikimedia.org/wikipedia/fr/archive/a/ad/20190808213755%21Logo-Snapchat.png",
          name: "SNAPCHAT",
          start: "2015",
          end: "2018",
          description: "",
        },
      ],
    },
    {
      type: "Skills",
      emoji: "💻",
      data: [
        {
          title: "Mobile Development",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png",
          name: "SWIFT",
          start: "2019",
          end: "Present",
          description: "",
        },
        {
          title: "Mobile Development",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Android_robot.png/646px-Android_robot.png",
          name: "JAVA",
          start: "2019",
          end: "Present",
          description: "",
        },
        {
          title: "Web Development",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
          name: "REACT",
          start: "2019",
          end: "Present",
          description: "",
        },
        {
          title: "Mobile Development",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
          name: "REACT-NATIVE",
          start: "2019",
          end: "Present",
          description: "",
        },
        {
          title: "Automation",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
          name: "VANILLA JS",
          start: "2019",
          end: "Present",
          description: "",
        },
        {
          title: "Automation",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
          name: "PYTHON",
          start: "2019",
          end: "Present",
          description: "",
        },
        {
          title: "UI/UX Design",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/788px-Adobe_XD_CC_icon.svg.png",
          name: "ADOBE XD",
          start: "2019",
          end: "Present",
          description: "",
        },
      ],
    },
  ];
  return (
    <div className="aboutContainer">
      <Suspense fallback={renderLoader()}>
        <img
          className="profilePic"
          src="https://depts.washington.edu/taneli/wordpress/wp-content/uploads/2014/08/Empty2.jpg"
        />
        <h2>Omar Lahkim</h2>
        <div className="aboutInfos">
          <h4>📞 (212) 0645562419</h4>
          <h4>🌐 contact@omarlahkim.com</h4>
        </div>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        {informations.map((section) => (
          <AboutItems
            title={section.type}
            emoji={section.emoji}
            data={section.data}
          />
        ))}
      </Suspense>
    </div>
  );
}

export default About;
