import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG Policy | Chirality Research Inc.",
  description:
    "Discover Chirality Research Inc.'s commitment to Environmental, Social, and Governance (ESG) practices. Learn about our policies and efforts towards sustainability and responsible business conduct.",
};

const EsgPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="ESG Policy"
        description="Discover Chirality Research Inc.'s tailored solutions to Environmental, Social, and Governance (ESG) practices. Learn about our policies and efforts towards sustainability and responsible business conduct."
      />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-white py-16 dark:bg-bg-color-dark">
            <div className="container mx-auto">
              <div className="relative flex w-full flex-row items-center justify-center rounded-lg border border-gray-300 shadow-lg dark:border-gray-700 dark:shadow-sm dark:shadow-gray-950">
                <div className="h-72 p-8" style={{ flex: 2 }}>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    ESG: Environment, Social & Governance
                  </h2>
                  <p className="mb-8 text-base text-gray-700 dark:text-gray-400 md:text-lg">
                    We realize the importance of Environmental, Social and Governance standards in a company’s operations when it comes to investments in this age of rising awareness and accountability. We pay extra attention to ensure compliance to ESG norms by our partner firms by realigning functioning and organization of business operations in line with regulatory provisions. Needless to say using regular data analysis to track industrial waste and emissions from a facility give us and the management of our partner firms the right start on the path to responsible growth.
                  </p>
                </div>
                <div className="h-72 flex-1">
                  <div
                    className="h-full w-full rounded-r-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/services/why-us-1.jpg')`,
                    }}
                    role="img"
                    aria-label="ESG Overview Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-16 dark:bg-bg-color-dark">
            <div className="container mx-auto">
              <div className="relative flex w-full flex-row items-center justify-center rounded-lg border border-gray-300 shadow-lg dark:border-gray-700 dark:shadow-sm dark:shadow-gray-950">
                <div className="h-72 p-8" style={{ flex: 2 }}>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    Environmental Approach
                  </h2>
                  <p className="mb-8 text-base text-gray-700 dark:text-gray-400 md:text-lg">
                    What a company does to incorporate effective environmental conservation and cutting down on its impact on the ecosystem is a top concern given pollution and climate change woes. We at Chirality use a range of software including Python, PowerApps, Microsoft Azure and Tibco Spotfire to process data for coming up with figures indicating a client’s carbon footprint based on fuel consumption. This helps concerned segments within the company make the right cuts to reduce toll on the environment while maintaining sustainable growth.
                  </p>
                </div>
                <div className="h-72 flex-1">
                  <div
                    className="h-full w-full rounded-r-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/services/why-us-1.jpg')`,
                    }}
                    role="img"
                    aria-label="Environmental Approach Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-16 dark:bg-bg-color-dark">
            <div className="container mx-auto">
              <div className="relative flex w-full flex-row items-center justify-center rounded-lg border border-gray-300 shadow-lg dark:border-gray-700 dark:shadow-sm dark:shadow-gray-950">
                <div className="h-72 p-8" style={{ flex: 2 }}>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    Social Ethics
                  </h2>
                  <p className="mb-8 text-base text-gray-700 dark:text-gray-400 md:text-lg">
                    Relationship with suppliers, satisfaction and protection of consumers, safety and fair conduct with employees along with how the business is able to give back to communities are factors that can’t be overlooked. Apps by Chirality keep clients updated about incidents taking place at rigs and offshore units that make sure firms devise an effective net of measures to keep employees safe. We know the role data analysis can play in creating a secure environment for workers operating on ground zero which boosts their confidence in their employer to create positive and productive work environments. In case of suppliers, increased transparency through the app creates a lasting bond of trust between clients and vendors.
                  </p>
                </div>
                <div className="h-72 flex-1">
                  <div
                    className="h-full w-full rounded-r-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/services/why-us-1.jpg')`,
                    }}
                    role="img"
                    aria-label="Social Ethics Image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-16 dark:bg-bg-color-dark">
            <div className="container mx-auto">
              <div className="relative flex w-full flex-row items-center justify-center rounded-lg border border-gray-300 shadow-lg dark:border-gray-700 dark:shadow-sm dark:shadow-gray-950">
                <div className="h-72 p-8" style={{ flex: 2 }}>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    Governance Policy
                  </h2>
                  <p className="mb-8 text-base text-gray-700 dark:text-gray-400 md:text-lg">
                    Good governance is an inseparable part of effective business operations and leadership, regular payments and delivering value and security to shareholders form the core of a strong governance model. We have created a database of assets for each department which our clients can access easily through an app. This reduces workload on management personnel and auditors can have more organized and hassle free information regarding assets on their fingertips. Having records of payment and audit reports sorted can always help a firm follow a results oriented approach towards long-term growth.
                  </p>
                </div>
                <div className="h-72 flex-1">
                  <div
                    className="h-full w-full rounded-r-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/services/why-us-1.jpg')`,
                    }}
                    role="img"
                    aria-label="Governance Policy Image"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default EsgPolicyPage;
