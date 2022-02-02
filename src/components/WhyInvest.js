import React from "react";

const WhyInvest = () => {
  return (
    <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
      <div
        className="w-full lg:w-1/2 h-screen"
        style={{ background: "#EBEBEB", color: "#000" }}
      >
        <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            WHY INVEST IN GREEN ZONE
            <span className="text-green-600 font-bold">/</span>
          </p>
          <br />
          {/* <p
            className="font-normal text-gray-700 text-xl"
            style={{ borderRight: "2px solid green" }}
          >
            The FUTURE is here for today. A phenomenal green economic zone
            powered by the Kaduna State Government in partnership with KK
            Kingdom an indigenous construction company based in FCT, Abuja,
            Nigeria.
          </p> */}
          <p
            className="font-light text-gray-700"
            style={{ borderRight: "2px solid green" }}
          >
            1. COMPLETE TAX HOLIDAY from all Federal State and Local Government
            taxes, rates and levies.
          </p>
          <p
            className="font-light text-gray-700"
            style={{ borderRight: "2px solid green" }}
          >
            2. DUTY FREE IMPORTATION on capital goods, machinery and components,
            spare parts, raw materials and consumable items into the zone.
          </p>
          <p
            className="font-light text-gray-700"
            style={{ borderRight: "2px solid green" }}
          >
            3. FOREIGN OWNERSHP 100% ownership of investments.
          </p>
          <p
            className="font-light text-gray-700"
            style={{ borderRight: "2px solid green" }}
          >
            4. REPATRATION OF PROFITS and dividends earned by foreign investors
            in the zone.
          </p>
          <p
            className="font-light text-gray-700"
            style={{ borderRight: "2px solid green" }}
          >
            5. REPATRIATION OF CAPITAL 100% Repatriation of capital investments
            in the zone at any time with capital appreciation of the investment.
          </p>
          <p
            className="font-light text-gray-700"
            style={{ borderRight: "2px solid green" }}
          >
            6. EASE OF DOING BUSINESS one stop for approval, permits, operating
            license, incorporation papers.
          </p>
          <p
            className="font-light text-gray-700"
            style={{ borderRight: "2px solid green" }}
          >
            7. IMMIGRATION WAIVERS. There would be no expatriate quota for
            managers working in the zone.
          </p>
          <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
            LEARN MORE...
          </p>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/assets/bg2.jpg)",
        }}
      ></div>
    </div>
  );
};

export default WhyInvest;
