import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import ResidentialSection from "../../Components/ResidentialSection/ResidentialSection";

const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
          <Banner></Banner>
          <ResidentialSection></ResidentialSection>
        </div>
    );
};

export default Home;