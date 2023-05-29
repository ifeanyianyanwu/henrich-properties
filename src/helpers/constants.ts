//Why choose us Images import
import CommercialDev from "../assets/Commercial-Development.png";
import RetailDev from "../assets/Retail-Development.jpg";
import ResidentialDev from "../assets/Residential-Development.jpg";

//Best in the business Images import
import MissionStatement from "../assets/mission-modified.png";
import CoreValues from "../assets/core-values-modified.png";
import Deliverables from "../assets/deliverables-modified.png";
import Vision from "../assets/vision-modified.png";

//Services Images import
import BusinessConsulting from "../assets/Business Consulting.jpg";
import FinancialAdvisory from "../assets/unnamed.jpg";
import EnergyServives from "../assets/Energy-Services.jpg";
import AssetValuation from "../assets/Property Managment.jpg";
import CoperateIdentity from "../assets/Branding and Corporate Identity.jpg";

//Our Works Images Import
import ImageOne from "../assets/Henrich-Properties-changing images(1)/Project 1.1.jpeg";
import ImageTwo from "../assets/Henrich-Properties-changing images(1)/Project 1.2.jpeg";
import ImageThree from "../assets/Henrich-Properties-changing images(1)/Project 1.3.jpeg";
import ImageFour from "../assets/Henrich-Properties-changing images(1)/Project 1.4.jpeg";
import ImageFive from "../assets/Henrich-Properties-changing images(1)/Project 1.5.jpeg";
import ImageSix from "../assets/Henrich-Properties-changing images(1)/Project 1.6.jpeg";
import ImageSeven from "../assets/Henrich-Properties-changing images(1)/Project 2.jpeg";
import ImageEight from "../assets/Henrich-Properties-changing images(1)/Project 3.jpeg";
import ImageNine from "../assets/Henrich-Properties-changing images(1)/Project 3.1.jpeg";
import ImageTen from "../assets/Henrich-Properties-changing images(1)/Project 4.jpeg";
import ImageEleven from "../assets/Henrich-Properties-changing images(1)/Project 5.jpeg";
import ImageTwelve from "../assets/Henrich-Properties-changing images(1)/Project 5.1.jpeg";
import ImageThirteen from "../assets/Henrich-Properties-changing images(1)/Project 6.1.jpeg";
import ImageFourteen from "../assets/Henrich-Properties-changing images(1)/Project 6.2.jpeg";
import ImageFiveteen from "../assets/Henrich-Properties-changing images(1)/Project 6.3.jpeg";
import ImageSixteen from "../assets/Henrich-Properties-changing images(1)/Project 6.4.jpeg";
import ImageSeventeen from "../assets/Henrich-Properties-changing images(1)/Project 6.5.jpeg";
import ImageEighteen from "../assets/Henrich-Properties-changing images(1)/Project 6.6.jpeg";
import ImageNineteen from "../assets/Henrich-Properties-changing images(1)/Project 6.7.jpeg";
import ImageTwenty from "../assets/Henrich-Properties-changing images(1)/Project 6.8.jpeg";
import ImageTwentyOne from "../assets/Henrich-Properties-changing images(1)/Project 6.9.jpeg";
import ImageTwentyTwo from "../assets/Henrich-Properties-changing images(1)/Project 6.10.jpeg";
import ImageTwentyThree from "../assets/Henrich-Properties-changing images(1)/Project 6.11.jpeg";
import ImageTwentyFour from "../assets/Henrich-Properties-changing images(1)/Project 6.12.jpeg";

export type DataItem = {
  id: string;
  heading: string;
  image_url: string;
  paragraphs: {
    text: string;
    bulletPoints?: {
      point: string;
    }[];
  }[];
  summary_text: string;
};

type Data = DataItem[];

export const WHY_CHOOSE_US_DATA: Data = [
  {
    id: "Commercial-Development",
    heading: "Commercial Development",
    image_url: CommercialDev,
    paragraphs: [
      {
        text: "Henrich Properties Limited commercial developments include some of the finest and most desirable office properties and its landmark construction of a shopping mall in the Federal Capital Territory. Each property is meticulously maintained and features the latest amenities and services. As a result, the company continues to attract and retain a distinguished and growing roster of tenants.",
      },
      {
        text: "Henrich Properties Limited continues to evolve in response to the changing aspirations and challenges of developers, owners and occupants alike.",
      },
      {
        text: "To lift the competitive performance of a building project, or to help it find funding in tough markets, Henrich Properties Limited offers a powerful combination of advisory, design and technical services:",
        bulletPoints: [
          { point: "Property Development and Investment" },
          { point: "Project Aqcuisition and Management" },
          { point: "Project Marketing and Sales." },
        ],
      },
      {
        text: "The company's major commercial developments include the direct financing and development of residential and commercial properties in Abuja, Katsina, Kaduna and in Ilorin, Kwara State capital.",
      },
    ],
    summary_text:
      "Henrich Properties Limited commercial developments include some of the finest and most desirable office properties and its landmark construction of a shopping mall in the Federal Capital Territory.",
  },
  {
    id: "Retail-Development",
    heading: "Retail Development",
    image_url: RetailDev,
    paragraphs: [
      {
        text: "Henrich Properties Limited retail centers, which are among the most successful in the region, incorporate high-quality design, attractive high-traffic locations and the right mix of retail tenants. Tenants include well-known national chains, as well as respected local retailers.",
      },
      {
        text: "Henrich Properties Limited has the expertise and experience to design, build and manage thriving retail centers in today's highly competitive environment.",
      },
      {
        text: "For high-quality stand-alone destination and high profile stores looking for completely integrated, prestigious locations, Henrich Properties Limited will find and purchase an acceptable site, build and engineer to suit, lease-back the facility, and manage it long-term.",
      },
      {
        text: "Henrich Properties Limited definitely knows its role in retail development management, its demands and impact that are distinct from offices or services, and as such has established retail centers located in choice locations around the country.",
      },
    ],
    summary_text:
      "Henrich Properties Limited retail centers, which are among the most successful in the region, incorporate high-quality design, attractive high-traffic locations and the right mix of retail tenants.",
  },
  {
    id: "Residential-Development",
    heading: "Residential Development",
    image_url: ResidentialDev,
    paragraphs: [
      {
        text: "Henrich Properties Limited has developed and sold dozens of high-end luxury homes in some of Nigeria's most exclusive communities:",
        bulletPoints: [
          {
            point:
              "A mini-estate of 16 units of 3 bedroom flats at Kubwa, Abuja.",
          },
          {
            point:
              "24 units of 2-bedroom flats off- Isa Kaita Road, Kaduna State.",
          },
          {
            point:
              "2 Blocks of 12 flats of 3 bedroom flat each block is made of 2 storey building along Jose Martin Street,Asokoro, Abuja.",
          },
          {
            point:
              "16 units of 2-bedroom flat in a premises at Asa Dam Road, Ilorin,Kwara State.",
          },
        ],
      },
      {
        text: "Designed by leading architects and interior designers, these magnificent homes are built with a level of expert craftsmanship and attention to detail that is rarely seen in today's market.",
      },
      {
        text: "Homes range from stately mansions in exclusive locations in Abuja to estate homes in Lagos and Kaduna.",
      },
      {
        text: "Henrich Properties Limited also excels in the development of mass housing turnkey projects.",
      },
    ],
    summary_text:
      "Henrich Properties Limited has developed and sold dozens of highend luxury homes in some of Nigeria's most exclusive communities.",
  },
];

export const SERVICES_DATA: Data = [
  {
    id: "Business Consulting",
    heading: "Business Consulting",
    image_url: BusinessConsulting,
    paragraphs: [
      {
        text: "Henrich Properties Limited helps business services provides competitive advantage in a market focused on delivering both exceptional service to end customers and attractive ROI to shareholders. The business services sector is exploiting opportunities driven by globalization, consolidation and new technology. And new integrated offerings are forcing established players to develop scalable services that satisfy evolving regulatory and environmental standards. New technology platforms are also driving lower-cost models that are disruptive to incumbent businesses, but provide opportunities for new entrants and active players.",
      },
      {
        text: "Our business consulting service help clients take advantage of attractive opportunities, develop innovative business models and out-perform their competitors.",
      },
      {
        text: "The sector is diverse - including professional services, education and training, and support services and outsourcing. Multinational organizations and specialist service providers need to analyze their critical performance drivers, evaluate contractual frameworks and continue to evolve service offering strategies that can provide a competitive advantage.",
      },
      {
        text: "We combine in-depth industry understanding with deep technical expertise to enable clients to develop   winning strategies for acquisition and divestment, service development, new market entry, regulation and political risk management, operational efficiency, and strategy activation. With our support, these clients have been able to develop new service offerings for an increasingly energy-efficient world, maximize ROI from strategic investments and execute detailed plans for international growth.",
      },
    ],
    summary_text:
      "We help business services provide competitive advantage in a market focused on delivering both exceptional service to customers and attractive ROI to shareholders.",
  },
  {
    id: "Finacial Advisory",
    heading: "Finacial Advisory",
    image_url: FinancialAdvisory,
    paragraphs: [
      {
        text: "At Henrich Properties Limited, Our hallmark is building relationships based on your individual needs and on our professional expertise and personal service. Finance is a means to an end, not an end in itself. We are committed to helping you achieve your financial goals so that you can focus your attention on all of the other aspects of your life.",
      },
      {
        text: "Our approach starts with establishing a two-way relationship with each client. We believe that a successful advisor-client relationship develops when both sense that they can and will work well together. We spend quite a bit of time with prospective clients making sure that there is a good fit. So our involvement with clients particularly for those services that anticipate a long-term involvement or will over time result in life-changing decisions begins with face-to-face meetings designed to ensure that there is a meeting of the minds and a real sense of trust.",
      },
      {
        text: "Client service is at the core of what we do. Industry studies and our own experiences have shown that the two central tenets of financial advisory services are to be accessible and keep your client informed through appropriate levels of communication.",
      },
    ],
    summary_text:
      "At Henrich Properties Limited, Our hallmark is building relationships based on your individual needs and on our professional expertise and personal service.",
  },
  {
    id: "Energy Services",
    heading: "Energy Services",
    image_url: EnergyServives,
    paragraphs: [
      {
        text: "The energy industry faces considerable challenges as global demand continues to place the world's scarce natural resources under unrelenting pressure. Companies from across the energy value chain also have to adapt to a raft of new regulations and technologies.",
      },
      {
        text: "Henrich Properties Limited experts in the Energy consulting practice have the extensive industry and operational expertise required to help our clients prosper in these testing times.",
      },
      {
        text: "We have been a long-term consulting partner for many of the world's largest energy companies, helping them capitalize on opportunities while addressing complex legislative policy, technology and economic issues. Primary energy suppliers, OEMs and utilities, among others, turn to Henrich Properties Limited to benefit from its experience gathered over decades of tackling major strategic issues in the energy sector.",
      },
      {
        text: "Members of our Energy & Environment practice closely follow technological advances, regulatory changes and other major developments and are frequent participants in major industry events. For every project, we bring together the relevant industry and regional expertise from across the globe. Our partners are fully hands-on and are directly involved in all stages of the projects.",
      },
    ],
    summary_text:
      "The energy industry faces considerable challenges as global demand continues to place the world's scarce natural resources under pressure.",
  },
  {
    id: "Property/facility Management & Asset Valuation",
    heading: "Property/facility Management & Asset Valuation",
    image_url: AssetValuation,
    paragraphs: [
      {
        text: "We render professional services in the following broad facets of Estate Surveying and Valuation:",
        bulletPoints: [
          {
            point:
              "Technical survey and auditing of plant and machinery assets involving assessment of capacities of various models for different levels of operation.",
          },
          {
            point:
              "Structural survey of building and external works to determine current physical and technical conditions to compile schedule of dilapidations and estimated costs of remedial (appropriate) works.",
          },
          {
            point:
              "Property enumeration and asset valuation involving such assets as land and buildings, economic crops and trees, machinery, furniture and fixtures, motor vehicles and other specialized asset for various purposes including but not limited to: COMPULSORY ACQUISITION AND COMPENSATION, MORTGAGE, BALANCE SHEET, PROJECT FINANCING, TAXATION, MERGER AND ACQUISITION, PRIVATIZATION, ASSET SHARING, COMMERCIALIZATION & RESTRUCTURING, PROBATE etc.",
          },
          {
            point:
              "Property and facility management involving all types of properties ranging from single-use structure to multi-use complexes including residential buildings and estates, commercial office block and shopping centers, stadia and sporting complexes, recreational parks and hospitality facilities as well as commercialized public buildings.",
          },
          {
            point:
              "state Agency involving property marketing, sale, purchase, lease of properties on behalf of clients for various purposes.",
          },
          {
            point: "Property development and financing.",
          },
          {
            point:
              "Project planning, monitoring and supervision including preinvestment studies, feasibility and viability appraisals and project management.",
          },
          {
            point: "Property (tenement) Rating and Rating Administration.",
          },
          {
            point:
              "Compulsory acquisition and compensation assessment and claim settlement.",
          },
        ],
      },
    ],
    summary_text:
      "We render professional services in the following broad facets of Estate Surveying and Valuation.",
  },
  {
    id: "Branding and Corporate Identity",
    heading: "Branding and Corporate Identity",
    image_url: CoperateIdentity,
    paragraphs: [
      {
        text: "The most critical element for creating a successful communication trategy is having clarity of brand. It is the foundation. Without brand clarity, it is difficult to create engaging strategies that move your target audience to action in relevant, distinctive, consistent, and repeatable ways.",
      },
      {
        text: "Our experience and network enable us to offer services leading to the results that are specific to the client. We maintain consistently high standards for service and people so that we can always bring the best team with the broadcast range of industry and functional experience to bear on every engagement.",
      },
      {
        text: "Henrich Properties Limited believes that your business, whether It Is a small, medium or large one, deserves recognition...we are here to assist you!",
      },
      {
        text: "Our graphic design department is a studio of world-class designers and developers energized by the challenge of understanding the unique goals of a business and translating them into profitable design and Corporate Branding. We provide Graphic design services which profoundly improve the visibility, credibility and success of your business.",
      },
      {
        text: "We believe that every business is unique, and that every business deserves world-class branding. That's why we devote ourselves to understanding your business before we propose a solution. Then, we brainstorm fresh ideas tailored to your needs. Once we get your input, we implement the solution to your specifications. Once, we are done, a new identity is born.",
      },
    ],
    summary_text:
      "The most critical element for creating a successful communications strategy is having clarity of brand. It is the foundation.",
  },
];

type BestInBusiness = BestInBusinessItem[];

export type BestInBusinessItem = {
  id: string;
  image_url: string;
  title: string;
  text: string;
};

export const BEST_IN_THE_BUSINESS_DATA: BestInBusiness = [
  {
    id: "Mission Statement",
    image_url: MissionStatement,
    title: "Mission Statement",
    text: "To provide exceptional service and quality products to our clients and to follow through on our promises.",
  },
  {
    id: "Core Values",
    image_url: CoreValues,
    title: "Core Values",
    text: "People , Quality , Entrepreneurship, Customer , Focus and Integrity",
  },
  {
    id: "Deliverables",
    image_url: Deliverables,
    title: "Deliverables",
    text: "We are versatile in implementing effective ideas to help clients gain an absolute competitive edge with integrated marketing service.",
  },
  {
    id: "Vision",
    image_url: Vision,
    title: "Vision",
    text: "To offer our customers superior craftsmanship and integrity in all products and services offered.",
  },
];

type OurWork = { img_url: string }[];

export const OUR_WORKS: OurWork = [
  { img_url: ImageOne },
  { img_url: ImageTwo },
  { img_url: ImageThree },
  { img_url: ImageFour },
  { img_url: ImageFive },
  { img_url: ImageSix },
  { img_url: ImageSeven },
  { img_url: ImageEight },
  { img_url: ImageNine },
  { img_url: ImageTen },
  { img_url: ImageEleven },
  { img_url: ImageTwelve },
  { img_url: ImageThirteen },
  { img_url: ImageFourteen },
  { img_url: ImageFiveteen },
  { img_url: ImageSixteen },
  { img_url: ImageSeventeen },
  { img_url: ImageEighteen },
  { img_url: ImageNineteen },
  { img_url: ImageTwenty },
  { img_url: ImageTwentyOne },
  { img_url: ImageTwentyTwo },
  { img_url: ImageThree },
  { img_url: ImageTwentyFour },
];
