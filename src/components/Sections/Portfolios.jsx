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
    id: 1,
    name: "Satolearn",
    category: ["vaionex projects"],
    image: "images/portfolio/portfolio1.jpg",
    details:
      "I worked on this project at Vaionex, it is a Blockchain learning platform",
    link: "https://satolearn.com/",
  },
  {
    id: 2,
    name: "Metashard",
    category: ["vaionex projects"],
    image: "images/portfolio/portfolio2.jpg",
    link: "http://metashard.com/",
    details:
      "I work on this project at Vaionex, it is a A Secure Bitcoin Database Solution",
  },

  {
    id: 3,
    name: "ApiAndMe",
    category: ["vaionex projects"],
    image: "images/portfolio/portfolio3.jpg",
    link: "https://apiandme.com/",
    details:
      "I work on this project at Vaionex, it's Bitcoin Database access through Apis",
  },

  {
    id: 4,
    name: "Musicart",
    category: ["vaionex projects"],
    image: "images/portfolio/portfolio4.jpg",
    link: "https://musicart.io/",
    details: "I work on this project at Vaionex, it's an NFT Marketplace",
  },

  {
    id: 5,
    name: "Yeschef",
    category: ["upwork / fiverr projects"],
    image: "images/portfolio/portfolio7.jpg",
    link: "https://yeschef.me/",
    details:
      "The client was from fiverr, it's a Subscription Video Service For Cooking Classes.",
  },
  {
    id: 6,
    name: "Chemishield",
    category: ["upwork / fiverr projects"],
    image: "images/portfolio/portfolio8.jpg",
    link: "https://chemishield.com/",
    details: "The client was from fiverr, it's a Waste Management Software",
  },
  {
    id: 7,
    name: "Dojo Discover",
    category: ["vaionex projects"],
    image: "images/portfolio/portfolio6.jpg",
    link: "https://www.dojodiscover.com/",
    details:
      "I work on this project at Vaionex, it's an Investment raising platform",
  },
  {
    id: 8,
    name: "Nftech",
    category: ["vaionex projects"],
    image: "images/portfolio/portfolio5.jpg",
    link: "",
    details: "I work on this project at Vaionex, it's an NFT Marketplace",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(2);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
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
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return data.category.includes(targetFilter);
        // && data.id <= dataVisibleCount
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

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

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
