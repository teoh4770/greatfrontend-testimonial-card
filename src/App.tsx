import profileThumbnail from './assets/profile-thumbnail.png'

import { TestimonialCard } from './components'

function App() {
  return (
    <>
      <div className="grid h-screen place-items-center bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] px-4">
        <TestimonialCard
          profileThumbnail={profileThumbnail}
          fullName="Sarah Dole"
          userName="sarahdole"
          content="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        />
      </div>
    </>
  )
}

export default App
