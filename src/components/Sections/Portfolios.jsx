import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
    nameCap: "All Projects",
  },
  {
    id: 2,
    name: "vaionex projects",
    nameCap: "Vaionex Projects",
  },
  {
    id: 3,
    name: "upwork / fiverr projects",
    nameCap: "Upwork / Fiverr Projects",
  },
];

const allData = [
  {
    id: 0,
    name: "Relysia",
    category: ["vaionex projects"],
    image: "images/portfolio/relysia.jpg",
    details:
      "I led the development of Relysia, a cutting-edge Web 3 platform that leverages blockchain technology to secure and streamline digital asset management for individuals and businesses.",
    link: "https://www.relysia.com/",
  },
  {
    id: 1,
    name: "Legaliser",
    category: ["vaionex projects"],
    image: "images/portfolio/legaliser.jpg",
    details:
      "I led the full-stack development of Legaliser, an AI-powered contract analysis and creation platform that streamlines the legal process with precision and speed, overseeing 2 developers who worked under my guidance.",
    link: "https://www.legaliser.com/",
  },
  {
    id: 2,
    name: "Ensidian",
    category: ["vaionex projects"],
    image: "images/portfolio/ensidian.jpg",
    details:
      "I led the AI team on the Ensidian project, working on both frontend and backend development. Our team integrated multiple AI initiatives, including Pitch AI Analysis, Chronic AI, Dental Care AI, Makeover AI, and Admission AI, utilizing advanced technologies to drive innovation and efficiency across various industries.",
    link: "https://www.ensidian.com/",
  },
  {
    id: 3,
    name: "Yeschef",
    category: ["upwork / fiverr projects"],
    image: "images/portfolio/yeschef.jpg",
    details:
      "I worked on the frontend development of Yeschef, a revolutionary cooking streaming platform that provides video lessons from globally renowned chefs, making culinary education accessible to everyone, everywhere.",
    link: "https://yeschef.me/",
  },

  {
    id: 4,
    name: "BSV Blockchain",
    category: ["vaionex projects"],
    image: "images/portfolio/bsv.jpg",
    details:
      "I contributed to the development of the BSV Blockchain platform, the official site for Bitcoin SV, ensuring the delivery of reliable open-source software that meets the fundamental requirements for enterprise-grade blockchain applications.",
    link: "https://www.bsvblockchain.org/",
  },
  {
    id: 5,
    name: "AI Forge",
    category: ["vaionex projects"],
    image: "images/portfolio/aiforge.jpg",
    details:
      "I played a pivotal role in developing AI Forge, a 12-week platform designed to accelerate AI startups by providing hands-on guidance and over 60 training sessions, empowering founders to create innovative AI solutions for real-world challenges.",
    link: "https://www.aiforge.org/",
  },
  {
    id: 6,
    name: "Tokenovate",
    category: ["vaionex projects"],
    image: "images/portfolio/tokenvaote.jpg",
    details:
      "I contributed to the development of Tokenovate, a UK-based financial services technology company that offers decentralized market infrastructure, enhancing post-trade lifecycle management for OTC and exchange-traded derivatives through tokenization and blockchain-powered smart contracts.",
    link: "https://www.tokenovate.com/",
  },
  {
    id: 7,
    name: "Nftana",
    category: ["vaionex projects"],
    image: "images/portfolio/nftana.jpg",
    details:
      "I led the development of Nftana, a next-gen open-source NFT exchange marketplace that empowers users to trade NFTs seamlessly while providing developers with the flexibility to use the platform as a framework for building their own NFT marketplaces.",
    link: "https://www.nftana.com/",
  },

  {
    id: 8,
    name: "Satolearn",
    category: ["vaionex projects"],
    image: "images/portfolio/sato.jpg",
    details:
      "I served as the leading developer for Satolearn, a flexible learning platform that empowers individuals to explore new skills and passions through practical blockchain training and interactive lessons, allowing students to learn at their own pace while gaining real-world experience.",
    link: "https://www.satolearn.com/",
  },

  {
    id: 9,
    name: "Pitch AI",
    category: ["vaionex projects"],
    image: "images/portfolio/pitchai.jpg",
    details:
      "I led the development of Pitch AI, an AI-powered pitch analysis platform that enables users to effortlessly analyze hundreds of pitches simultaneously. With personalized scores and insights tailored for venture capitalists, the platform transforms bulk assessments into strategic investment opportunities, streamlining decision-making processes.",
    link: "https://www.pitchai.com/",
  },
  {
    id: 10,
    name: "TimeSeal",
    category: ["vaionex projects"],
    image: "images/portfolio/timeseal.jpg",
    details:
      "I contributed to the development of TimeSeal, an advanced blockchain timestamping solution that ensures uncompromising data integrity. Designed for the data-driven world, it provides businesses with a cost-effective way to secure and manage their databases, delivering unmatched protection, accuracy, and transparency.",
    link: "https://www.timeseal.com/",
  },
  {
    id: 11,
    name: "BitcoinSV",
    category: ["vaionex projects"],
    image: "images/portfolio/bitcoinsv.jpg",
    details:
      "I worked on the frontend development of BitcoinSV, the official site of Bitcoin SV (BSV), which embodies Satoshi Nakamoto's vision of a global, scalable, and efficient digital currency. The platform is committed to speed and regulatory compliance, setting the standard for powerful blockchain infrastructure and enabling secure and stable transactions worldwide.",
    link: "https://www.bitcoinsv.com/",
  },
  {
    id: 12,
    name: "Stas",
    category: ["vaionex projects"],
    image: "images/portfolio/stas.jpg",
    details:
      "I contributed to the development of Stas, a platform dedicated to the innovative STAS Tokenization protocol that marks a significant evolution for the BSV blockchain. STAS tokens empower application developers and token issuers with advanced tools to enhance their enterprises, fostering growth and innovation in the blockchain ecosystem.",
    link: "https://www.stastoken.com/",
  },
  {
    id: 13,
    name: "Musicart",
    category: ["vaionex projects"],
    image: "images/portfolio/musicart.jpg",
    details:
      "I contributed to the development of MusicArt, a WEB3 music marketplace that simplifies the process for musicians to share their music in the blockchain space. As the only planet-friendly NFT marketplace for encrypted music, it allows users to listen, promote, and trade their creations seamlessly while supporting sustainable practices.",
    link: "https://musicart.io/",
  },
  {
    id: 14,
    name: "Dojodiscover",
    category: ["vaionex projects"],
    image: "images/portfolio/dojo-discover.jpg",
    details:
      "I led the development of Dojodiscover, a platform dedicated to discovering and investing in the future of Web 3.0. Through a 12-week incubator program, we nurture promising blockchain and Web 3.0 start-ups, helping them evolve into transformative companies that can shape the future of the internet.",
    link: "https://www.dojodiscover.com/",
  },
  {
    id: 15,
    name: "Makeover AI",
    category: ["vaionex projects"],
    image: "images/portfolio/makeover.jpg",
    details:
      "I worked on the development of Makeover AI, a platform that transforms interiors and fashion using cutting-edge AI technology. This innovative solution personalizes spaces and styles, effortlessly turning the ordinary into the extraordinary while redefining the essence of makeover experiences.",
    link: "https://www.makeover.ai/",
  },
  {
    id: 16,
    name: "Teamlead",
    category: ["vaionex projects"],
    image: "images/portfolio/teamlead.jpg",
    details:
      "I contributed to the development of TeamLead AI, a platform that transforms organizational collaboration by revolutionizing team productivity. Our solution offers cutting-edge features, real-time insights, and seamless integrations, empowering teams to communicate and innovate together, fostering a culture of excellence.",
    link: "https://www.teamlead.ai/",
  },
  // {
  //   id: 2,
  //   name: "Metashard",
  //   category: ["vaionex projects"],
  //   image: "images/portfolio/portfolio2.jpg",
  //   link: "http://metashard.com/",
  //   details:
  //     "I work on this project at Vaionex, it is a A Secure Bitcoin Database Solution",
  // },

  // {
  //   id: 3,
  //   name: "ApiAndMe",
  //   category: ["vaionex projects"],
  //   image: "images/portfolio/portfolio3.jpg",
  //   link: "https://apiandme.com/",
  //   details:
  //     "I work on this project at Vaionex, it's Bitcoin Database access through Apis",
  // },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(2);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([...allData]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    // setVisibleItems(getAllItems);
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;

    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = [...getAllItems];
    } else {
      tempData = getAllItems.filter((data) => {
        return data.category.includes(targetFilter);
        // && data.id <= dataVisibleCount
      });
    }
    setVisibleItems(tempData);
  };

  // const handleLoadmore = (e) => {
  //   e.preventDefault();
  //   let tempCount = dataVisibleCount + dataIncrement;

  //   if (tempCount > getAllItems.length) {
  //     setNoMorePost(true);
  //   } else {
  //     setDataVisibleCount(tempCount);
  //     if (activeFilter === filters[0].name.toLowerCase()) {
  //       setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
  //     } else {
  //       let items = getAllItems.filter((data) => {
  //         return data.category.includes(activeFilter) && data.id <= tempCount;
  //       });
  //       setVisibleItems(items);
  //     }
  //   }
  // };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.nameCap}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolios;
