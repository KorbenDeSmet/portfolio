const Experience = () => {
    return (
        <div className="mt-12 text-xs">
            <h3 className="mb-4 text-base">Experience</h3>
            <div className="grid grid-cols-5 gap-x-2 gap-y-6">
                <div className="shrink">February 2023 - May 2023</div>
                <div className="col-span-4">
                    <div>Web & Mobile developer intern @ Codifly</div>
                    <div>Codifly is a consultancy firm that has a focus on web, mobile and IoT applications.</div>
                    {/* Possibly hide technologies on click? */}
                    <h5 className="mt-4">Technologies used during my employment:</h5>
                    <p>React Native, React, TypeScript, Apollo Client, Apollo Server, Node.js, GraphQL, Styled Components, Docker, PostgreSQL, Fastlane, bash, AWS, S3</p>
                </div>
                <div>2019 - 2023</div>
                <div className="col-span-4">
                    <div>Student @ HoGent</div>
                    <div>During my degree at HoGent, I successfully completed multiple
                        projects. These were carried out in task of different companies such as
                        HoySpain Renting, Squads and Quarante. For my bachelor’s thesis I
                        collaborated with Bryan Brouckaert from Egelke Bv to research the
                        following topic: “A detailed performance comparison between the
                        different NoSQL database types when processing personal data”.</div>
                    <h5 className="mt-4">Technologies used during my employment:</h5>
                    <p>React, Tailwind css, JavaScript, Cypress, postcss, axios, daisyui,
                        heroku, NodeJs, Koa, Knex, Github Pages, .net, Blazor, C#, Domain
                        driven design, EntityFrameworkCore, AspNetCore, Data transfer
                        objects, micro services, Kotlin, gradle, nuget, express, MongoDb,
                        Cassandra, redis, Neo4J, cypher, MQL, CQL</p>
                </div>
                <div className="shrink">January 2019 - February 2019</div>
                <div className="col-span-4">
                    <div>IT Support intern @ OLV Hospital Alost</div>
                    <div>At the OLV Hospital I helped support the technical infrastructure and assisted doctors when problems occurred.</div>
                </div>
                <div className="shrink">2017 - 2020</div>
                <div className="col-span-4">
                    <div>IT Support @ Via Sophia</div>
                    <div>Via Sophia is a boutique with two locations. I built their webshop using
                        Prestashop and offer tech support during the weekends. Additionally, I
                        was also responsible for designing their logos and flyers.</div>
                </div>
            </div>
        </div >
    )
}

export default Experience
