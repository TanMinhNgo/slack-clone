import { UserButton } from "@clerk/clerk-react";

function HomePage() {
    return (
        <div>
            <UserButton />
            <h1>Welcome to the Home Page</h1>
        </div>
    );
}

export default HomePage;