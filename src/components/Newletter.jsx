import Banner from "../shared/Banner"
import newsletter from '../assets/newsletter.png'

const Newletter = () => {
  return (
    <div className="py-18 md:px-14 px-4 max-w-screen-2xl mx-auto my-12">
        <Banner 
            banner={newsletter}
            heading={'Each student an share their discount code for friends'}
            subHeading={'A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”'}
            btn1={'I have a code'}
            btn2={'Explore More'}
         />
    </div>
  )
}

export default Newletter