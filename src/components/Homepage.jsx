import reactLogo from '../assets/react.svg';

function Homepage() {
    return (
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Homepage!</h1>
            <p className="text-lg mb-6">
                This is a simple homepage to test routing, styling, and layout in React.
            </p>

            <div className="flex justify-center gap-10">
                <div>
                <img src={reactLogo} alt="React logo" className="w-24 mx-auto" />
                <p className="mt-2">React</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage