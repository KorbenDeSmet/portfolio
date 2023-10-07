import Awards from './../sections/Awards'
import Education from './../sections/Education'
import Experience from './../sections/Experience'
import GeneralInformation from './../sections/GeneralInformation'

const App = () => {
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <div className="w-[42rem] mx-auto px-16">
        <h1 className="font-serif mt-28 text-3xl">Korben De Smet</h1>
        <h5 className="text-xs">Web & Mobile Developer</h5>
        <p className="text-xs mt-12 text-center">A highly motivated developer who graduated from the College of Ghent with
          a degree in Mobile & Enterprise Development. People often describe me as
          flexible and very friendly. A characteristic of mine is that I always view
          situations from multiple points of view. I am highly proficient in working in
          both independent and team settings. This goes hand in hand with the fact I
          participate very proactively. In my spare time I regularly go go-karting, and
          I also work out at the gym.</p>

        <Experience />
        {/* <GeneralInformation />
        <Education />
        <Awards /> */}

      </div>
    </div >
  )
}

export default App
