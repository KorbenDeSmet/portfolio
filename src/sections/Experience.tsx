import { useState } from "react"
import { Collapse } from 'react-collapse';

const Experience = () => {
    const [isCodiflyVisible, setIsCodiflyVisible] = useState(false);
    const [isHoGentVisible, setIsHoGentVisible] = useState(false);

    return (
        <div className="mt-12">
            <h3>Experience</h3>
            <div className="grid grid-cols-5 gap-x-2 gap-y-6 mt-4">
                <div className="pt-1 text-sm">October 2023 - Present</div>
                <div className="col-span-4">
                    <div>Software developer @ Endare</div>
                    <div className="inline-block text-sm text-neutral-600 no-underline">TODO</div>
                </div>
                <div className="pt-1 text-sm">February 2023 - May 2023</div>
                <div className="col-span-4">
                    <button className="text-left hover:underline mb-4" onClick={() => setIsCodiflyVisible(!isCodiflyVisible)}>
                        <div>Web & Mobile developer intern @ Codifly</div>
                        <div className="inline-block text-sm text-neutral-600 no-underline">Codifly is a consultancy firm that has a focus on web, mobile and IoT applications.</div>
                    </button>
                    <Collapse isOpened={isCodiflyVisible}>
                        <h5 className="text-sm text-neutral-600">Technologies used during my employement:</h5>
                        <p className="text-sm text-neutral-600">React Native, React, TypeScript, Apollo Client, Apollo Server, Node.js, GraphQL, Styled Components, Docker, PostgreSQL, Fastlane, bash, AWS, S3</p>
                    </Collapse>
                </div>
                <div className="pt-1 text-sm">2019 - 2023</div>
                <div className="col-span-4">
                    <button className="text-left hover:underline mb-4" onClick={() => setIsHoGentVisible(!isHoGentVisible)}>
                        <div>Student @ HoGent</div>
                        <div className="inline-block text-sm text-neutral-600 no-underline">During my degree at HoGent, I successfully completed multiple
                            projects. These were carried out in task of different companies such as
                            HoySpain Renting, Squads and Quarante. For my bachelor's thesis I
                            collaborated with Bryan Brouckaert from Egelke Bv to research the
                            following topic: “A detailed performance comparison between the
                            different NoSQL database types when processing personal data”.</div>
                    </button>
                    <Collapse isOpened={isHoGentVisible}>
                        <h5 className="text-sm text-neutral-600">Technologies used during my employement:</h5>
                        <div className="text-sm text-neutral-600">
                            React, Tailwind css, JavaScript, Cypress, postcss, axios, daisyui,
                            heroku, NodeJs, Koa, Knex, Github Pages, .net, Blazor, C#, Domain
                            driven design, EntityFrameworkCore, AspNetCore, Data transfer
                            objects, micro services, Kotlin, gradle, nuget, express, MongoDb,
                            Cassandra, redis, Neo4J, cypher, MQL, CQL
                        </div>
                    </Collapse>
                </div>
                <div className="pt-1 text-sm">January 2019 - February 2019</div>
                <div className="col-span-4">
                    <div>IT Support intern @ OLV Hospital Alost</div>
                    <div className="text-sm text-neutral-600">At the OLV Hospital I helped support the technical infrastructure and assisted doctors when problems occurred.</div>
                </div>
                <div className="pt-1 text-sm">2017 - 2020</div>
                <div className="col-span-4">
                    <div>IT Support @ Via Sophia</div>
                    <div className="text-sm text-neutral-600">Via Sophia is a boutique with two locations. I built their webshop using
                        Prestashop and offer tech support during the weekends. Additionally, I
                        was also responsible for designing their logos and flyers.</div>
                </div>
            </div >
        </div >
    )
}

export default Experience
