export const Hero = () => {
    return (
      <div className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to Energiswap</h1>
        <p className="mb-6">Trade tokens securely on the Energi network</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white text-primary-light rounded-lg hover:bg-opacity-90">
            Start Trading
          </button>
          <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10">
            Learn More
          </button>
        </div>
      </div>
    )
  }