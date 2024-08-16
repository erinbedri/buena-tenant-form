import React from "react";
import { Link } from "react-router-dom";

import { Container, Button } from "../components";

const HomePage: React.FC = () => {
    return (
        <Container title="Welcome to Buena" titleSize="text-5xl">
            <div className="flex flex-col gap-3 text-lg text-center">
                <p>
                    We're excited to help you find your perfect apartment. Please follow the steps below to complete
                    your registration and start booking.
                </p>

                <p>
                    Our easy-to-use application form will guide you through the process of registering with Buena. Let's
                    get started!
                </p>
            </div>

            <Link to="/name" className="text-white">
                <Button>Get Started</Button>
            </Link>
        </Container>
    );
};

export default HomePage;
