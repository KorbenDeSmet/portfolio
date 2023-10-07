import Awards from './../sections/Awards'
import Education from './../sections/Education'
import Experience from './../sections/Experience'
import GeneralInformation from './../sections/GeneralInformation'

const App = () => {
  return (
    <div className="flex min-h-screen pb-24">
      <div className="w-[42rem] mx-auto px-16">
        <h1 className="font-serif mt-28 text-3xl">Korben De Smet</h1>
        <h5 className="text-xs">Web & Mobile Developer</h5>
        <p className="text-xs mt-12 text-center leading-5">A highly motivated developer who graduated from the College of Ghent with
          a degree in Mobile & Enterprise Development. People often describe me as
          flexible and very friendly. A characteristic of mine is that I always view
          situations from multiple points of view. I am highly proficient in working in
          both independent and team settings. This goes hand in hand with the fact I
          participate very proactively. In my spare time I regularly go go-karting, and
          I also work out at the gym.</p>

        <Experience />
        {/* <GeneralInformation /> */}
        {/* <Education /> */}
        {/* <Awards /> */}
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="flex gap-8 w-fit mb-4 mx-auto p-2 rounded-full shadow-2xl bg-neutral-800 text-white">
          <button className="bg-neutral-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#262626" className="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
          </button>
          <button className="p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </button>
          <button className="p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-balloon-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z" />
            </svg>
          </button>
        </div>
      </div>
    </div >
  )
}

export default App
