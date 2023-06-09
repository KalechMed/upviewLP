import styles from "../style";
import { Footer, Navbar, Stats, Testimonials, Hero } from "../components";

const Home = () => {

    return (
<div>
<div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        
          <Testimonials />
          
          <Footer />
        </div>
      </div>
    </div>

</div>

    )
}

export default Home;