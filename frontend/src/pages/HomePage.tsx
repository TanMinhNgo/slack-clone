import { UserButton } from "@clerk/clerk-react";
import { useStreamChat } from "../hooks/useStreamChat";

function HomePage() {
    const { chatClient, isLoading, error } = useStreamChat();

    return (
        <div className="p-4">
            <UserButton />
            <h1>Welcome to the Home Page</h1>
        </div>
    );
}

export default HomePage;