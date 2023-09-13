import React from "react";
import ".././App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen bg-no-repeat bg-center bg-cover bg-fixed main-bg">
      <div className=" flex h-screen items-center ">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="bg-gradient-to-r from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl inter-heading md:leading-snug">
            OpenChat: Bridging the World,
            <span className="sm:block"> One Conversation at a Time! </span>
          </h1>
          <p className="mx-auto mt-4 max-w-4xl sm:text-base/normal text-white">
            OpenChat: Your global gateway to meaningful conversations. Connect,
            learn, and build friendships across borders in a safe, respectful,
            and inspiring community. Join us today and be part of the
            conversation that connects the world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/login" className="btn btn-primary text-white capitalize">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
